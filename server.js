const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');

const app = express();


const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:a6018a7d-1e5b-4ce3-a3dc-44381bbde559',
    key: 'd37eaa26-b8cb-43fb-831e-e9c466d7b852:SQyM+ncPnh3BcZLd+IBUuNVNpdDYb6AYGQ5YhohKaWs='
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

const PORT = 3001;

app.listen(PORT, err => {
    if(err){
        console.log(err);
    }else{
        console.log(`Running on port ${PORT}`);
    }
})