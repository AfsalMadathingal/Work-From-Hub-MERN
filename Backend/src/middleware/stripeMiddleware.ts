import { Request, Response, NextFunction } from 'express';


declare module 'express-serve-static-core' {
    interface Request {
      rawBody?: string;
    }
  }
  

export function stripeMiddleware(req: Request, res: Response, next: NextFunction) {
  req.rawBody = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    req.rawBody += chunk;
  });
  req.on('end', () => {
    console.log('====================================');
    console.log(req.rawBody);
    console.log('====================================');
    next();
  });
}
