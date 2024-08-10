import  { Request , Response , NextFunction } from "express";
import UserService from "../services/implementations/UserService";

 class UserController {
    
    private userService: UserService;

    constructor() {

        this.userService = new UserService();
    }

    public createUser = async (req: Request , res: Response , next: NextFunction): Promise<void> =>{

        try {

            const user = req.body;

            console.log('====================================');
            console.log('user: ', user);
            console.log('====================================');
    
            const result = await this.userService.createUser(user);
    
            res.send(result);
            
        } catch (error) {

            next(error);
            
        }

       
    }
}


export default new UserController();;