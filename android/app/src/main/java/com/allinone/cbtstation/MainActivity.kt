package com.allinone.cbtstation

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.cashfree.pg.api.CFPaymentGatewayService
import com.cashfree.pg.core.api.CFSession
import com.cashfree.pg.core.api.callback.CFCheckoutResponseCallback
import com.cashfree.pg.core.api.exception.CFException
import com.cashfree.pg.core.api.utils.CFErrorResponse
import com.cashfree.pg.ui.api.upi.intent.CFIntentTheme
import com.cashfree.pg.ui.api.upi.intent.CFUPIIntentCheckout
import com.cashfree.pg.ui.api.upi.intent.CFUPIIntentCheckoutPayment

/**
 * Native shell for the existing LMS. Authentication, plans, order creation,
 * verification, and entitlement activation remain in the existing web/server
 * application. This activity only delegates Android UPI intent selection to
 * Cashfree's native SDK after the server has issued a payment session.
 */
class MainActivity : AppCompatActivity(), CFCheckoutResponseCallback {
    private lateinit var portal: WebView
    private val cashfreeBridge = CashfreeBridge()
    private val portalHost: String? by lazy { Uri.parse(BuildConfig.PORTAL_URL).host }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        portal = WebView(this).apply {
            settings.javaScriptEnabled = true
            settings.domStorageEnabled = true
            settings.javaScriptCanOpenWindowsAutomatically = true
            webViewClient = object : WebViewClient() {
                override fun onPageStarted(view: WebView, url: String, favicon: android.graphics.Bitmap?) {
                    super.onPageStarted(view, url, favicon)
                    if (Uri.parse(url).host == portalHost) {
                        view.addJavascriptInterface(cashfreeBridge, "AndroidCashfree")
                    } else {
                        // A gateway, ad, or external site must never receive a
                        // JavaScript bridge into native payment functionality.
                        view.removeJavascriptInterface("AndroidCashfree")
                    }
                }
            }
            webChromeClient = WebChromeClient()
            addJavascriptInterface(cashfreeBridge, "AndroidCashfree")
        }
        setContentView(portal)

        try {
            CFPaymentGatewayService.getInstance().setCheckoutCallback(this)
        } catch (error: CFException) {
            Toast.makeText(this, "Unable to initialize secure payments: ${error.message}", Toast.LENGTH_LONG).show()
        }

        portal.loadUrl(BuildConfig.PORTAL_URL)
    }

    override fun onPaymentVerify(orderId: String) {
        notifyWebsiteToVerify(orderId)
    }

    override fun onPaymentFailure(error: CFErrorResponse, orderId: String) {
        notifyWebsiteToVerify(orderId)
    }

    private fun notifyWebsiteToVerify(orderId: String) {
        val escapedOrderId = orderId.replace("\\", "\\\\").replace("'", "\\'")
        runOnUiThread {
            portal.evaluateJavascript(
                "window.dispatchEvent(new CustomEvent('cashfree-native-result', { detail: { orderId: '$escapedOrderId' } }));",
                null,
            )
        }
    }

    private fun environment(value: String): CFSession.Environment =
        if (value.equals("sandbox", ignoreCase = true)) {
            CFSession.Environment.SANDBOX
        } else {
            CFSession.Environment.PRODUCTION
        }

    inner class CashfreeBridge {
        @JavascriptInterface
        fun isAvailable(): Boolean = true

        @JavascriptInterface
        fun startUpiIntentCheckout(paymentSessionId: String, orderId: String, mode: String) {
            runOnUiThread {
                try {
                    val session = CFSession.CFSessionBuilder()
                        .setEnvironment(environment(mode))
                        .setPaymentSessionID(paymentSessionId)
                        .setOrderId(orderId)
                        .build()

                    // Do not manufacture app links or hard-code package names.
                    // Cashfree reads the device's installed UPI apps and presents
                    // only those it can launch for this order.
                    val intentConfig = CFUPIIntentCheckout.CFUPIIntentBuilder().build()
                    val theme = CFIntentTheme.CFIntentThemeBuilder()
                        .setBackgroundColor("#FFFFFF")
                        .setPrimaryTextColor("#0F172A")
                        .setButtonBackgroundColor("#2563EB")
                        .setButtonTextColor("#FFFFFF")
                        .build()
                    val payment = CFUPIIntentCheckoutPayment.CFUPIIntentPaymentBuilder()
                        .setSession(session)
                        .setCfUPIIntentCheckout(intentConfig)
                        .setCfIntentTheme(theme)
                        .build()

                    CFPaymentGatewayService.getInstance().doPayment(this@MainActivity, payment)
                } catch (error: CFException) {
                    Toast.makeText(
                        this@MainActivity,
                        "UPI apps could not be opened. Please use secure checkout instead.",
                        Toast.LENGTH_LONG,
                    ).show()
                }
            }
        }
    }
}
