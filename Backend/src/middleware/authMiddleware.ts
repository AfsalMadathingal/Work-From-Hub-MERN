import { Request, Response, NextFunction, response } from 'express';
import { decodeToken, verifyAccessToken, verifyRefreshToken } from '../utils/jwt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import ApiResponse from '../utils/ApiResponse';

export const authenticate = (req: Request  & Partial<{ user: string | jwt.JwtPayload , }>, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1] || req.header('authorization');


  if (!token) {
    return res.status(401).send('Access denied');
  }

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;

    if(decoded.role != "admin"){
      res.status(401).json(
        new ApiResponse(
          401,
          null,
          "you are not authorized"
        )
      )
    } 

    next();
  } catch (err) {
    res.status(401).
    json(new ApiResponse(
      401,
      null,
      "Invalid Token or Expired"
    ))
  }
};


export const verifyRefreshTokenMiddleware = (req: Request  & Partial<{ user: string | jwt.JwtPayload , }> , res: Response, next: NextFunction) => {
  const refreshToken = req.cookies['adminRefreshToken'] || req.header('adminRefreshToken');


  if (!refreshToken) {
    return res.status(401)
    .json(new ApiResponse(
      401,
      null,
      "Access Denied"
    ))
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);


    req.user = { ...decoded, rawToken: refreshToken };



    next();
  } catch (err) {
    res.status(401).
    json(new ApiResponse(
      401,
      null,
      "Invalid Token or Expired"
    ))
  }

};

export const decodedRefreshToken = (req: Request  & Partial<{ user: string | jwt.JwtPayload , }> , res: Response, next: NextFunction) => {
  
  const refreshToken = req.cookies['adminRefreshToken'] || req.header('adminRefreshToken');

  if (!refreshToken) {
    return res.status(401)
    .json(new ApiResponse(
      401,
      null,
      "Access Denied"
    ))
  }

  try {
    const decoded = decodeToken(refreshToken);

    req.user = { ...decoded, rawToken: refreshToken };

    next();
  } catch (err) {
    res.status(401).
    json(new ApiResponse(
      401,
      null,
      "Invalid "
    ))
  }

};


export const refreshAccessToken = (req: Request  & Partial<{ user: string | jwt.JwtPayload , }> , res: Response, next: NextFunction) => {
  const refreshToken = req.cookies['refreshToken'] || req.header('refreshToken');

  

  if (!refreshToken) {
    return res.status(401)
    .json(new ApiResponse(
      401,
      null,
      "Access Denied"
    ))
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);

    req.user = { ...decoded, rawToken: refreshToken };



    next();
  } catch (err) {
    res.status(401).
    json(new ApiResponse(
      401,
      null,
      "Invalid Token or Expired"
    ))
  }

};


export const decodedBUserRefreshToken = (req: Request  & Partial<{ user: string | jwt.JwtPayload , }> , res: Response, next: NextFunction) => {
  
  const refreshToken = req.cookies['BusinessUserRefreshToken'] || req.header('BusinessUserRefreshToken');

  if (!refreshToken) {
    return res.status(401)
    .json(new ApiResponse(
      401,
      null,
      "Access Denied"
    ))
  }

  try {
    const decoded = decodeToken(refreshToken);

    req.user = { ...decoded, rawToken: refreshToken };

    next();
  } catch (err) {
    res.status(401).
    json(new ApiResponse(
      401,
      null,
      "Invalid "
    ))
  }

};

export const decodedUserRefreshToken = (req: Request  & Partial<{ user: string | jwt.JwtPayload , }> , res: Response, next: NextFunction) => {
  
  const refreshToken = req.cookies['refreshToken'] || req.header('refreshToken');

  if (!refreshToken) {
    return res.status(401)
    .json(new ApiResponse(
      401,
      null,
      "Access Denied"
    ))
  }

  try {
    const decoded = decodeToken(refreshToken);

    req.user = { ...decoded, rawToken: refreshToken };

    next();
  } catch (err) {
    res.status(401).
    json(new ApiResponse(
      401,
      null,
      "Invalid "
    ))
  }

};


export const authenticateUser = (req: Request  & Partial<{ user: string | jwt.JwtPayload , }>, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1] || req.header('authorization');


  if (!token) {
    return res.status(401).send('Access denied');
  }

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;

    if(decoded.role != "user"){
      res.status(401).json(
        new ApiResponse(
          401,
          null,
          "you are not authorized"
        )
      )
    } 


    next();
  } catch (err) {

    res.status(401).
    json(new ApiResponse(
      401,
      null,
      "Invalid Token or Expired"
    ))
  }
};


export const verifyUserRefreshToken = (req: Request  & Partial<{ user: string | jwt.JwtPayload , }> , res: Response, next: NextFunction) => {

  const refreshToken = req.cookies['refreshToken'] || req.header('refreshToken');


  if (!refreshToken) {
    return res.status(401)
    .json(new ApiResponse(
      401,
      null,
      "Access Denied"
    ))
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);


    req.user = { ...decoded, rawToken: refreshToken };



    next();
  } catch (err) {
    
    res.status(401).
    json(new ApiResponse(
      401,
      null,
      "Invalid Token or Expired"
    ))
  }

};

export const authenticateBUser = (req: Request  & Partial<{ user: string | jwt.JwtPayload , }>, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1] || req.header('authorization');


  if (!token) {
    return res.status(401).send('Access denied');
  }

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;

    if(decoded.role != "businessUser"){
      res.status(401).json(
        new ApiResponse(
          401,
          null,
          "you are not authorized"
        )
      )
    } 


    next();
  } catch (err) {

    res.status(401).
    json(new ApiResponse(
      401,
      null,
      "Invalid Token or Expired"
    ))
  }
};

