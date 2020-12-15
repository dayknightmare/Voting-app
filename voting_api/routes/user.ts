import express, {Router, Request, Response} from "express";
import { genToken } from '../helpers/genToken';
import { mongoDB } from '../controller/dbcontroller';
import vshHash from "../helpers/vsnhash";
import mongo from "mongodb";

const routes: Router = express.Router()


routes.post("/login", async (req: Request, res: Response) => {
    const hasher: vshHash = new vshHash()
    const db = await mongoDB();
    const coll = db.collection('users')

    if (!(req.body.email && req.body.password)){
        return res.send("Preencha todos os campos")
    }

    let c = await coll.find({ email: req.body.email }).toArray()

    if (c.length == 0){
        return res.send("Usuário não cadastrado")
    }

    let confirmPass: boolean = hasher.verify(c[0].senha, req.body.password, 'kkfb')

    if (confirmPass){
        let token: string = genToken({
            id: c[0]._id,
            email: 'miguelcolombo3@gmail.com',
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 2)
        })

        await coll.updateOne({ _id: c[0]._id }, { $set: { token: token } })

        return res.send({token, msg: "Success"})
    }
    
    return res.send("Senha e/ou email inválidos")
})


routes.post("/cadastro", async (req: Request, res: Response) => {
    const hasher: vshHash = new vshHash()
    const db = await mongoDB();
    const coll = db.collection('users')

    if (!(req.body.email && req.body.name && req.body.password)){
        return res.send("Preencha todos os campos")
    }

    let c = await coll.find({ email: req.body.email }).toArray()

    if (c.length > 0){
        return res.send("Email já cadastrado tente outro...")
    }

    coll.insertOne({
        name: req.body.name,
        email: req.body.email,
        senha: hasher.make_hash(req.body.password, 'kkfb'),
        date: new Date()
    })

    let lastId: Array<any> = await coll.find().sort({ _id: -1 }).limit(1).toArray()

    const token: string = genToken({
        id: lastId[0]._id,
        email: req.body.email,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 2)
    })
    
    await coll.updateOne({_id: new mongo.ObjectID(lastId[0]._id)}, {$set: {token: token}})

    res.send({
        token,
        msg: "Success"
    })

})

module.exports = routes;