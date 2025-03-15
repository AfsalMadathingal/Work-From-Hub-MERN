"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminRoute_1 = __importDefault(require("./admin/adminRoute"));
const userRoute_1 = __importDefault(require("./user/userRoute"));
const businessRoute_1 = __importDefault(require("./business/businessRoute"));
const webhookRoutes_1 = __importDefault(require("./webhook/webhookRoutes"));
const router = (0, express_1.Router)();
router.use('/api/admin', adminRoute_1.default);
router.use('/api/user', userRoute_1.default);
router.use('/api/business', businessRoute_1.default);
router.use('/webhook', webhookRoutes_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map