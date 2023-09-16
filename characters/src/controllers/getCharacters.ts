import { Request, Response } from 'express';
const Characters = require("../data")
const { response } = require("../../utils")

module.exports = async (req: Request, res: Response) => {
 const charactersAAAA = await Characters.list()
 response(res, 200, charactersAAAA)

}
