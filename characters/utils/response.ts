import { Request, Response } from 'express';
module.exports =(res: Response, statusCode: number, data: object) => {
res.status(statusCode).json({
    error: false,
    data
})
}