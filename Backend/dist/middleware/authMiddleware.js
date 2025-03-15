"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateBUser = exports.verifyUserRefreshToken = exports.authenticateUser = exports.decodedUserRefreshToken = exports.decodedBUserRefreshToken = exports.refreshAccessToken = exports.decodedRefreshToken = exports.verifyRefreshTokenMiddlewareBUser = exports.verifyRefreshTokenMiddleware = exports.authenticate = void 0;
const jwt_1 = require("../utils/jwt");
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1] || req.header('authorization');
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        const decoded = (0, jwt_1.verifyAccessToken)(token);
        req.user = decoded;
        if (decoded.role != "admin") {
            res.status(401).json(new ApiResponse_1.default(401, null, "you are not authorized"));
        }
        next();
    }
    catch (err) {
        res.status(401).
            json(new ApiResponse_1.default(401, null, "Invalid Token or Expired"));
    }
};
exports.authenticate = authenticate;
const verifyRefreshTokenMiddleware = (req, res, next) => {
    const refreshToken = req.cookies['adminRefreshToken'] || req.header('adminRefreshToken');
    if (!refreshToken) {
        return res.status(401)
            .json(new ApiResponse_1.default(401, null, "Access Denied"));
    }
    try {
        const decoded = (0, jwt_1.verifyRefreshToken)(refreshToken);
        req.user = { ...decoded, rawToken: refreshToken };
        next();
    }
    catch (err) {
        res.status(401).
            json(new ApiResponse_1.default(401, null, "Invalid Token or Expired"));
    }
};
exports.verifyRefreshTokenMiddleware = verifyRefreshTokenMiddleware;
const verifyRefreshTokenMiddlewareBUser = (req, res, next) => {
    const refreshToken = req.cookies['BusinessUserRefreshToken'] || req.header('BusinessUserRefreshToken');
    console.log('============sdfsdf========================');
    console.log(refreshToken);
    console.log('====================================');
    if (!refreshToken) {
        return res.status(401)
            .json(new ApiResponse_1.default(401, null, "Access Denied"));
    }
    try {
        const decoded = (0, jwt_1.verifyRefreshToken)(refreshToken);
        req.user = { ...decoded, rawToken: refreshToken };
        next();
    }
    catch (err) {
        res.status(401).
            json(new ApiResponse_1.default(401, null, "Invalid Token or Expired"));
    }
};
exports.verifyRefreshTokenMiddlewareBUser = verifyRefreshTokenMiddlewareBUser;
const decodedRefreshToken = (req, res, next) => {
    const refreshToken = req.cookies['adminRefreshToken'] || req.header('adminRefreshToken');
    if (!refreshToken) {
        return res.status(401)
            .json(new ApiResponse_1.default(401, null, "Access Denied"));
    }
    try {
        const decoded = (0, jwt_1.decodeToken)(refreshToken);
        req.user = { ...decoded, rawToken: refreshToken };
        next();
    }
    catch (err) {
        res.status(401).
            json(new ApiResponse_1.default(401, null, "Invalid "));
    }
};
exports.decodedRefreshToken = decodedRefreshToken;
const refreshAccessToken = (req, res, next) => {
    const refreshToken = req.cookies['refreshToken'] || req.header('refreshToken');
    if (!refreshToken) {
        return res.status(401)
            .json(new ApiResponse_1.default(401, null, "Access Denied"));
    }
    try {
        const decoded = (0, jwt_1.verifyRefreshToken)(refreshToken);
        req.user = { ...decoded, rawToken: refreshToken };
        next();
    }
    catch (err) {
        res.status(401).
            json(new ApiResponse_1.default(401, null, "Invalid Token or Expired"));
    }
};
exports.refreshAccessToken = refreshAccessToken;
const decodedBUserRefreshToken = (req, res, next) => {
    const refreshToken = req.cookies['BusinessUserRefreshToken'] || req.header('BusinessUserRefreshToken');
    if (!refreshToken) {
        return res.status(401)
            .json(new ApiResponse_1.default(401, null, "Access Denied"));
    }
    try {
        const decoded = (0, jwt_1.decodeToken)(refreshToken);
        req.user = { ...decoded, rawToken: refreshToken };
        next();
    }
    catch (err) {
        res.status(401).
            json(new ApiResponse_1.default(401, null, "Invalid "));
    }
};
exports.decodedBUserRefreshToken = decodedBUserRefreshToken;
const decodedUserRefreshToken = (req, res, next) => {
    const refreshToken = req.cookies['refreshToken'] || req.header('refreshToken');
    if (!refreshToken) {
        return res.status(401)
            .json(new ApiResponse_1.default(401, null, "Access Denied"));
    }
    try {
        const decoded = (0, jwt_1.decodeToken)(refreshToken);
        req.user = { ...decoded, rawToken: refreshToken };
        next();
    }
    catch (err) {
        res.status(401).
            json(new ApiResponse_1.default(401, null, "Invalid "));
    }
};
exports.decodedUserRefreshToken = decodedUserRefreshToken;
const authenticateUser = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1] || req.header('authorization');
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        const decoded = (0, jwt_1.verifyAccessToken)(token);
        req.user = decoded;
        if (decoded.role != "user") {
            res.status(401).json(new ApiResponse_1.default(401, null, "you are not authorized"));
        }
        next();
    }
    catch (err) {
        res.status(401).
            json(new ApiResponse_1.default(401, null, "Invalid Token or Expired"));
    }
};
exports.authenticateUser = authenticateUser;
const verifyUserRefreshToken = (req, res, next) => {
    const refreshToken = req.cookies['refreshToken'] || req.header('refreshToken');
    if (!refreshToken) {
        return res.status(401)
            .json(new ApiResponse_1.default(401, null, "Access Denied"));
    }
    try {
        const decoded = (0, jwt_1.verifyRefreshToken)(refreshToken);
        req.user = { ...decoded, rawToken: refreshToken };
        next();
    }
    catch (err) {
        res.status(401).
            json(new ApiResponse_1.default(401, null, "Invalid Token or Expired"));
    }
};
exports.verifyUserRefreshToken = verifyUserRefreshToken;
const authenticateBUser = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1] || req.header('authorization');
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        const decoded = (0, jwt_1.verifyAccessToken)(token);
        req.user = decoded;
        if (decoded.role != "businessUser") {
            return res.status(401).json(new ApiResponse_1.default(401, null, "you are not authorized"));
        }
        next();
    }
    catch (err) {
        return res.status(401).
            json(new ApiResponse_1.default(401, null, "Invalid Token or Expired"));
    }
};
exports.authenticateBUser = authenticateBUser;
//# sourceMappingURL=authMiddleware.js.map