const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');
const config = require('./config');

const app = express();


const chatkit = new Chatkit.default({
    instanceLocator: config.INSTANCE_LOCATOR,
    key: config.KEY
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json() || '{}');
app.use(cors());

app.post('/users', (req, res) => {
    const { username } = req.body;

    chatkit.createUser({
        name: username,
        id: username
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
        if(error.error === 'services/chatkit/user_already_exists'){
            res.sendStatus(200);
        }else{
            res.status(error.status).json(error);
        }
    })
})

app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({ userId: req.query.user_id })
    res.status(authData.status).send(authData.body)
})


const PORT = 3001;

app.listen(PORT, err => {
    if(err){
        console.log(err);
    }else{
        console.log(`Running on port ${PORT}`);
    }
})