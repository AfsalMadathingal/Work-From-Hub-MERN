import { Router } from "express";
import businessAuthRoute from "./businessAuthRoute";

const businessRoute = Router()

businessRoute.use('/auth',businessAuthRoute)

export default businessRoute;
