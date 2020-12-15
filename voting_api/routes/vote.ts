import express, {Router, Request, Response} from "express";
import { mongoDB, getLastRoW } from '../controller/dbcontroller';
import mongo from "mongodb";

const routes: Router = express.Router()


routes.post("/create", async (req: express.Request, res: express.Response) => {
    const db: mongo.Db = await mongoDB();
    const collVote: mongo.Collection = db.collection("voting")
    const collItem: mongo.Collection = db.collection("voting_items")
    const collUser: mongo.Collection = db.collection("users")

    let user = await collUser.findOne({_id: new mongo.ObjectID(req.body.user)})

    if (Object.keys(user).length == 0){
        res.status(401).send("ERROR")
        return
    }

    await collVote.insertOne({
        name: req.body.title,
        description: req.body.desc,
        date: new Date(),
        limitDate: new Date(req.body.limit),
        typeVote: req.body.typeVote,
        user_id: user._id
    })

    let lastRow = await getLastRoW(collVote)
    
    for (let i of req.body.itens){
        await collItem.insertOne({
            voting_id: lastRow,
            name: i
        })
    }

    res.send("ok")  
})


routes.get('/showme/:id', async (req: express.Request, res: express.Response) => {
    const db: mongo.Db = await mongoDB();
    const collVote: mongo.Collection = db.collection("voting")
    const collUser: mongo.Collection = db.collection("users")

    let user = await collUser.findOne({_id: new mongo.ObjectID(req.params.id)})

    if (Object.keys(user).length == 0){
        res.status(401).send("ERROR")
        return
    }

    let votes = await collVote.aggregate(
        [
            {
                $lookup: {
                    from: 'voting_items', 
                    localField: '_id', 
                    foreignField: 'voting_id', 
                    as: 'itens'
                }
            }, 
            {
                $match: {
                    user_id: new mongo.ObjectID(req.params.id)
                }
            }
        ]
    ).toArray()

    res.send({
        votes: votes
    })
})


routes.post("/randomvote", async (req: express.Request, res: express.Response) => {
    const db: mongo.Db = await mongoDB();
    const collVote: mongo.Collection = db.collection("voting")
    const collUser: mongo.Collection = db.collection("users")

    let user = await collUser.findOne({_id: new mongo.ObjectID(req.body.user)})

    if (Object.keys(user).length == 0){
        res.status(401).send("ERROR")
        return
    }
0
    let vote = await collVote.aggregate(
        [
            {
                $match: {
                    user_id: {$ne: new mongo.ObjectID(req.body.user)},
                    limitDate: {$gte: new Date()}
                }
            },
            {
                $sample: {
                    size: req.body.q
                }
            }
        ]
    ).toArray()

    res.send({
        vote: vote
    })
})

routes.post('/:id', async (req: express.Request, res: express.Response) => {
    const db: mongo.Db = await mongoDB();
    const collVote: mongo.Collection = db.collection("voting")
    const collUser: mongo.Collection = db.collection("users")

    let user = await collUser.findOne({_id: new mongo.ObjectID(req.body.user)})

    if (Object.keys(user).length == 0){
        res.status(401).send("ERROR")
        return
    }

    let vote = await collVote.aggregate([
        {
            $lookup: {
                localField: '_id',
                foreignField: 'voting_id',
                from: 'voting_items',
                as: 'itens'
            }
        },
        {
            $match: {
                _id: new mongo.ObjectID(req.params.id)
            }
        }
    ]).toArray()

    res.send({
        vote: vote[0]
    })
})
// db.voting.aggregate({$lookup: {from: 'voting_items', localField: '_id', foreignField: 'voting_id', as: 'itens'}}).pretty()

module.exports = routes