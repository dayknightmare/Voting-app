const { MongoClient } = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017", { useUnifiedTopology: true })

const mongoDB = async () => {
    await client.connect(async (err: Error) => {
        if (err){
            console.log(err)
            throw err;
        }
    })

    return client.db("voting");
}

export {mongoDB, client};
