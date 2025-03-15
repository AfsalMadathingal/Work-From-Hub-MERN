"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeAndVerifyToken = exports.decodeToken = exports.verifyRefreshToken = exports.verifyAccessToken = exports.generateRefreshToken = exports.accessTokenForReset = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;
const generateAccessToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, accessTokenSecret, { expiresIn: '48h' });
};
exports.generateAccessToken = generateAccessToken;
const accessTokenForReset = (payload) => {
    return jsonwebtoken_1.default.sign(payload, accessTokenSecret, { expiresIn: '1m' });
};
exports.accessTokenForReset = accessTokenForReset;
const generateRefreshToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, refreshTokenSecret, { expiresIn: '7d' });
};
exports.generateRefreshToken = generateRefreshToken;
const verifyAccessToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, accessTokenSecret);
    }
    catch (error) {
        throw new Error('Invalid access token');
    }
};
exports.verifyAccessToken = verifyAccessToken;
const verifyRefreshToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, refreshTokenSecret);
    }
    catch (error) {
        throw new Error('Invalid refresh token');
    }
};
exports.verifyRefreshToken = verifyRefreshToken;
const decodeToken = (token) => {
    try {
        return jsonwebtoken_1.default.decode(token);
    }
    catch (error) {
        throw new Error("invalid");
    }
};
exports.decodeToken = decodeToken;
const decodeAndVerifyToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, accessTokenSecret);
        if (decoded && decoded._doc) {
            return decoded._doc;
        }
        return decoded;
    }
    catch (error) {
        throw new Error("Invalid token");
    }
};
exports.decodeAndVerifyToken = decodeAndVerifyToken;
//# sourceMappingURL=jwt.js.map