"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceModel = void 0;
const mongoose_1 = require("mongoose");
const workspaceSchema = new mongoose_1.Schema({
    buildingName: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    location: { type: String, required: true },
    pinCode: { type: String, required: true },
    street: { type: String, required: true },
    contactNo: { type: String, required: true },
    powerBackup: { type: Boolean, required: true },
    ac: { type: Boolean, required: true },
    bathroom: { type: Boolean, required: true },
    photos: { type: [String], required: true },
    video: { type: String },
    tablesAvailable: { type: Number, required: true },
    seatsPerTable: { type: Number, required: true },
    ownerId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'BusinessUser', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    approved: { type: Boolean, default: false },
    rejected: { type: Boolean, default: false },
    rejectionReason: { type: String, default: "" },
    isOnHold: { type: Boolean, default: false },
    holdingReason: { type: String, default: "" },
    listed: { type: Boolean, default: false },
    pricePerSeat: { type: Number, required: true },
    timing: { type: String, required: true },
    rating: { type: Number, default: 0 },
    workingDays: { type: String, required: true },
});
exports.WorkspaceModel = (0, mongoose_1.model)('Workspace', workspaceSchema);
//# sourceMappingURL=workspace.js.map