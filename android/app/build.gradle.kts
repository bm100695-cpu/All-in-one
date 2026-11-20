plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.allinone.cbtstation"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.allinone.cbtstation"
        minSdk = 23
        targetSdk = 35
        versionCode = 1
        versionName = "1.0.0"

        // Override this for staging builds with -PportalUrl=https://staging.example.com
        val portalUrl = providers.gradleProperty("portalUrl")
            .orElse("https://all-in-one-git-main-brijesh17.vercel.app")
            .get()
        buildConfigField("String", "PORTAL_URL", "\"$portalUrl\"")
    }

    buildFeatures {
        buildConfig = true
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("com.google.android.material:material:1.12.0")
    implementation("com.cashfree.pg:api:2.6.1")
}
