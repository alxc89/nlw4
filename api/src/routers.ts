import {Router} from "express";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";
import {SendMailController} from "./controllers/SendMailController";




const router = Router()
const sendMailController = new SendMailController();

const userControler = new UserController();
const surveysControler = new SurveysController();
router.post("/users", userControler.create);
router.post("/surveys",surveysControler.create);
router.get("/surveys",surveysControler.show);
router.post("/sendMail", sendMailController.execute);
export {router};
