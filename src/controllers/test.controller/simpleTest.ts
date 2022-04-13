import { Request, Response } from "express";

const simpleTest = (_: Request, res: Response) => {
  return res.status(200).json({ message: "Testing" });
};

export default simpleTest;
