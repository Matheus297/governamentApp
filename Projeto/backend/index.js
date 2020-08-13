const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');



const app = express();

app.use(express.json());
app.use(routes)

mongoose.connect('mongodb+srv://governants:governants@cluster0-azi2w.mongodb.net/governants', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})




app.listen(3001, function(){
    try{
        console.log('Server is running on port 3001')
    }catch(e){
        console.log(e, 'error to connect server')
    }
})