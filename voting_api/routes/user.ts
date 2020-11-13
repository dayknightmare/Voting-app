import express, {Router, Request, Response} from "express";

const routes: Router = express.Router()


routes.post("/login", (req: Request, res: Response) => {
    res.send("asd")
})

routes.post("/cadastro", (req: Request, res: Response) => {
    res.send("ASD")
})

module.exports = routes;