import jwt from 'jsonwebtoken';

const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET as string;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET as string;

export const generateAccessToken = (payload: object): string => {
  return jwt.sign(payload, accessTokenSecret, { expiresIn: '24h' });
};

export const generateRefreshToken = (payload: object): string => {

  return jwt.sign(payload, refreshTokenSecret, { expiresIn: '1m' });
  
};

export const verifyAccessToken = (token: string): any => {
  try {
    return jwt.verify(token, accessTokenSecret);
  } catch (error) {
    throw new Error('Invalid access token');
  }
};

export const verifyRefreshToken = (token: string): any => {
  try {
    
    return jwt.verify(token, refreshTokenSecret);

  } catch (error) {
    throw new Error('Invalid refresh token');
  }
};


export const decodeToken = (token:string):any =>{
  try {
    return jwt.decode(token)

  } catch (error) {

    throw new Error("invalid")
  }
 
}
