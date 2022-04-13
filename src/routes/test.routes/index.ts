import { Router } from "express";
import simpleTest from "../../controllers/test.controller/simpleTest";

const testRouter = Router();

testRouter.get("", simpleTest);

export default testRouter;
