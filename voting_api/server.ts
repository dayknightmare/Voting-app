import express = require('express');
const users = require('./routes/user');


const app:express.Application = express();

app.use("/", users);

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello from Voting app API")
})

app.listen(5000, () => {
    console.log("Voting app API on port 5000");
})