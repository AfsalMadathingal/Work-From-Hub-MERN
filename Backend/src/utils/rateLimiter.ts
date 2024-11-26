import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';

// Create a rate limiter instance
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500, // Limit each IP to 5 requests per windowMs
  handler: (req: Request, res: Response) => {
    console.log(`Rate limit exceeded: ${req.method} ${req.url}`)
    res.status(429).json({
      message: `You are Blocked`,
    });
  },
});


// Export the limiter for use in other parts of your app
export default limiter;
