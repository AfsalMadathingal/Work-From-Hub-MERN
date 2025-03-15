"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const BusinessUserSchema = new mongoose_1.Schema({
    email: { type: String },
    fullName: { type: String },
    password: { type: String },
    date_of_birth: { type: Date },
    pin_code: { type: Number },
    address: { type: String },
    phone: { type: Number },
    profilePic: { type: String, default: "https://www.svgrepo.com/show/192247/man-user.svg" },
    refreshToken: { type: Array },
    role: { type: String, default: "businessUser" },
    createdAt: { type: Date, default: new Date() },
    isBlocked: { type: Boolean, default: false }
});
const BusinessUser = mongoose_1.default.model("BusinessUser", BusinessUserSchema);
exports.default = BusinessUser;
//# sourceMappingURL=businessUserModel.js.map