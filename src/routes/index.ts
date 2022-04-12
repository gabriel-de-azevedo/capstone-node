import { Router } from "express";
import testResponse from "../controllers/test.controller/testResponse";

const router = Router();

router.get("/test", testResponse);

export default router;
