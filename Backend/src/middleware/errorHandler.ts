import { Request, Response, NextFunction } from 'express';


class BookingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BookingError';
  }
}

class UserError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UserError';
  }
}

class AdminError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AdminError';
  }
}


export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof BookingError) {
    return res.status(400).json({ error: err.message });
  }

  if (err instanceof UserError) {
    return res.status(400).json({ error: err.message });
  }

  if (err instanceof AdminError) {
    return res.status(403).json({ error: err.message });
  }

  console.log(err);
  return res.status(500).json({ error: 'Internal Server Error' });
}




export { BookingError, UserError, AdminError };
