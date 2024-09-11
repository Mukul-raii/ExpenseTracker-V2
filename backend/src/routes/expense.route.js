import { Router } from "express";
import { add,remove,update,view } from "../controllers/express.controllers.js";
const router = Router();
import Auth from "../middlewares/auth.js"

router.route('/view').get(Auth,view)
router.route('/add').post(Auth,add)
router.route('/remove').delete(Auth,remove)
router.route('/update').put(Auth,update)


export default router