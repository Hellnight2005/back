import { Router } from "express";
import { registeruser } from "Router-Controller/src/controllers/user.controllers.js";

const router = Router()
// const router = express.Router();
router.route("/register").post(registeruser)
// app.post('/register', registeruser);

export default router