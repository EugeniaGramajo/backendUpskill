import { Request, Response, Next } from 'express';

module.exports = (fn : (req:Request, res:Response)=>Promise<any> ) => {
return function ( req: Request, res: Response, next: Next){
    fn ( req, res).catch((err)=>{
        next(err)
    })
}
}