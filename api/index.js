const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");
var bodyParser = require('body-parser');


const pusher = new Pusher({
    appId: "APP ID",
    key: "KEY",
    secret: "SECRET",
    cluster: "CLUSTER",
    useTLS: true
});

const app = express();
const statusOK = 200;
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json())



app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        amount: req.body.amount,
        time: req.body.date
    });

    res.json([]);
})

app.post("/pusher/user-auth", (req, res) => {    
    const {socket_id, channel_name} = req.body
    console.log(req.body)   

    try{
        const auth = pusher.authenticate(socket_id, channel_name);
        res.statusCode = statusOK;
        res.send(auth);        
    }catch(error){
        console.log(error)
    }
    
});

console.log('listening to port 8000');
app.listen(8000)