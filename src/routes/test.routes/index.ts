import { Router } from "express";
import testResponse from "../../controllers/test.controller/testResponse";

const testRouter = Router();

testRouter.get("", testResponse);

export default testRouter;
