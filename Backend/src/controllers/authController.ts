import { Request, Response ,NextFunction } from 'express';
import  AuthService  from '../services/implementations/AuthService';



class AuthController {


  private authService: AuthService;

  constructor(){
    this.authService = new AuthService()
  }


  public login = async (req: Request, res: Response) => {

    const tokens = await this.authService.login(req.body);
    if (tokens) { 
      res.json(tokens);
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  }


  public refreshAccessToken = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    const newAccessToken = await this.authService.refresh(refreshToken);
    if (newAccessToken) {
      res.json({ accessToken: newAccessToken });
    } else {
      res.status(400).json({ message: 'Invalid refresh token' });
    }
  };


  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user = req.body;

      const result = await this.authService.register(user);

      res.send(result);
    } catch (error) {
      next(error);
    }
  };
  

}



export default new AuthController();
