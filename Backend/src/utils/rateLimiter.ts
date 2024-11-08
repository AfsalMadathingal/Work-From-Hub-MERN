import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';

// Create a rate limiter instance
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests from this IP, please try again after 15 minutes',
  handler: (req: Request, res: Response) => {
    res.status(429).json({ message: 'You are being rate-limited. Try again later.' });
  },
});

// Export the limiter for use in other parts of your app
export default limiter;
