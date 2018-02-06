const express = require('express');
const app = express();
const axios = require('axios');
const env = require('dotenv');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
env.config();


app.get('/giphy',(req, res) => {
    const config = {
        params: {
            api_key: process.env.API_KEY,
            q: req.query.q
        }
        }
        axios.get('http://api.giphy.com/v1/gifs/search', config).then(function(response){
            res.send(response.data);
        }).catch(function(err){
            console.log('Error in get request', err);
        })
})//end app get
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running on ${port}`);
});   
