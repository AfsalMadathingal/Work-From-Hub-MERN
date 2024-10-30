import { Request, Response, NextFunction } from "express";

class ApiError extends Error {
  statusCode: number;
  error: string;
  data: null;
  success: boolean;

  constructor(
    statusCode: number,
    error: string,
    message: string = "Something Went Wrong",
    stack: string = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.error = error;
    
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errorDetails = {
    name: err.name,
    message: err.message,
    stack: err.stack,
  };

  console.log(errorDetails);


  const errorMessage =  errorDetails.message;

  const apiError = new ApiError(500, errorMessage, err.message, err.stack || "");

  return res.status(apiError.statusCode).json({
    statusCode: apiError.statusCode,
    error: apiError.error,
    message: apiError.message,
    data: apiError.data,
    success: apiError.success,
  });
}

export { ApiError };
