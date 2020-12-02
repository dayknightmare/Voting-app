import express = require('express');
import bodyParser = require('body-parser');
import helmet = require('helmet');
import cors = require('cors');
import agents = require('express-useragent');

const users = require('./routes/user');
const vote = require('./routes/vote');

const app:express.Application = express();

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({ limit: '50mb' }))
app.use(helmet());
app.use(cors());
app.use(agents.express());
app.set('trust proxy', 1);


app.use("/", users);
app.use("/vote", vote);

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello from Voting app API")
})

app.listen(5000, () => {
    console.log("Voting app API on port 5000");
})