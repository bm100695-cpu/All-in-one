"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const exam_routes_1 = __importDefault(require("./routes/exam.routes"));
const test_routes_1 = __importDefault(require("./routes/test.routes"));
const mistake_routes_1 = __importDefault(require("./routes/mistake.routes"));
const analytics_routes_1 = __importDefault(require("./routes/analytics.routes"));
const ai_routes_1 = __importDefault(require("./routes/ai.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const monetization_routes_1 = __importDefault(require("./routes/monetization.routes"));
const uptet_routes_1 = __importDefault(require("./routes/uptet.routes"));
const supertet_routes_1 = __importDefault(require("./routes/supertet.routes"));
const live_test_routes_1 = __importDefault(require("./routes/live_test.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Security & Middlewares
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true,
}));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
// Request logger
app.use((req, _res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.path}`);
    next();
});
// Health check endpoint
app.get('/health', (_req, res) => {
    res.json({
        status: 'healthy',
        service: 'All in One AI Engine',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
    });
});
// API Routes
app.use('/api/auth', auth_routes_1.default);
app.use('/api/exams', exam_routes_1.default);
app.use('/api/tests', test_routes_1.default);
app.use('/api/mistakes', mistake_routes_1.default);
app.use('/api/analytics', analytics_routes_1.default);
app.use('/api/ai', ai_routes_1.default);
app.use('/api/admin', admin_routes_1.default);
app.use('/api/monetization', monetization_routes_1.default);
app.use('/api/uptet', uptet_routes_1.default);
app.use('/api/super-tet', supertet_routes_1.default);
app.use('/api/live-tests', live_test_routes_1.default);
// 404 Handler
app.use((_req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});
// Global Error Handler
app.use((err, _req, res, _next) => {
    console.error('Unhandled server error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
});
app.listen(PORT, () => {
    console.log(`🚀 All in One AI Server running at http://localhost:${PORT}`);
    console.log(`📡 Health check accessible at http://localhost:${PORT}/health`);
});
