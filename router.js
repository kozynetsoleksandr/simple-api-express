import Router from "express";

import RatesController from "./RatesController.js";

const router = new Router();

router.get('/', RatesController.index)

export default router;