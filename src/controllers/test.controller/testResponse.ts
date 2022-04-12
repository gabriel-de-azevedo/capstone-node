import { Request, Response } from "express";

const testResponse = (_: Request, res: Response) => {
  return res.status(200).json({ message: "Testing" });
};

export default testResponse;
