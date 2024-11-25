import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';

// Create a rate limiter instance
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10, 
  message: 'What you want from my application submit on afsalmadathingal.online i will give you that :(',
  handler: (req: Request, res: Response) => {
    res.status(429).json({ message: 'You are being rate-limited. Try again later.' });
  },
});

// Export the limiter for use in other parts of your app
export default limiter;
