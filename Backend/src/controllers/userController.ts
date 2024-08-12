import { Request, Response, NextFunction } from "express";
import UserService from "../services/implementations/UserService";
import AuthService from "../services/implementations/AuthService";

class UserController {
  private userService: UserService;
  private AuthService: AuthService;

  constructor() {
    this.userService = new UserService();
    this.AuthService = new AuthService();
  }

}

export default new UserController();
