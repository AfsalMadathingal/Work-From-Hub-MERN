import { Request, Response, NextFunction } from "express";

class ApiError extends Error {
  statusCode: number;
  message: string;
  error: string;
  stack?: string;
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
    this.message = message;
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
  return res.status(500).json({error:err});
}

export { ApiError };
