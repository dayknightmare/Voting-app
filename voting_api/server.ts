import agents = require('express-useragent');
import bodyParser = require('body-parser');
import cookie = require('cookie-parser');
import express = require('express');
import helmet = require('helmet');
import cors = require('cors');

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
app.use(express.static(__dirname + '/static'));
app.use(cookie());
app.set('trust proxy', 1);
app.disable('x-powered-by');

app.use(function (req: any, res: express.Response, next: express.NextFunction) {
    console.log("\x1b[32m*-+:=============================================:+-*\x1b[37m");
    console.log("DATE: " + new Date().toLocaleString());
    console.log("METHOD: " + req.method);
    console.log("IP: " + req.ip);
    console.log("ROUTE: " + req.originalUrl + '\n');

    next();
});

app.use("/", users);
app.use("/vote", vote);

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello from Voting app API")
})

app.listen(5000, () => {
    console.log("Voting app API on port 5000");
})