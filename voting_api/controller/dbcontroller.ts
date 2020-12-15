const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'
const urlDB = `${url}/voting`

const client = new MongoClient(url, { useUnifiedTopology: true })

const mongoDB = async () => {
    await client.connect(async (err: Error) => {
        if (err){
            console.log(err)
            throw err;
        }
    })

    return client.db("voting");
}

const getLastRoW = async (coll: any) => {
    let lastId: Array<any> = await coll.find().sort({ _id: -1 }).limit(1).toArray()

    return lastId[0]._id
}

export { mongoDB, client, getLastRoW, urlDB };
