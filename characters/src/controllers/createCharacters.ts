import { Request, Response } from 'express';
const Character = require("../data")
const response = require("../../utils")

module.exports =async  (req: Request, res: Response) => {
    const newc = await Character.create()
  response(res, 201, newc)
}
