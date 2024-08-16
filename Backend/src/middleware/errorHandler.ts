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



  console.log('Error type:', err.constructor.name); 
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: err.success,
      error: err.error,
      message: err.message,
      data: err.data,
    });
  }

  return res.status(500).json(
    new ApiError(
      500,
      "Internal Server Error"
    )
  );
}

export { ApiError };
