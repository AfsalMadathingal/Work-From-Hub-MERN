"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
exports.errorHandler = errorHandler;
class ApiError extends Error {
    statusCode;
    error;
    data;
    success;
    constructor(statusCode, error, message = "Something Went Wrong", stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.error = error;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.ApiError = ApiError;
function errorHandler(err, req, res, next) {
    const errorDetails = {
        name: err.name,
        message: err.message,
        stack: err.stack,
    };
    console.log(errorDetails);
    const errorMessage = errorDetails.message;
    const apiError = new ApiError(500, errorMessage, err.message, err.stack || "");
    return res.status(apiError.statusCode).json({
        statusCode: apiError.statusCode,
        error: apiError.error,
        message: apiError.message,
        data: apiError.data,
        success: apiError.success,
    });
}
//# sourceMappingURL=errorHandler.js.map