const express=require('express');   //importing
const mongoose=require('mongoose');

const items = require('./routes/api/items');    //we are storing the routes ie. get post delete in a seperate folder so we are importing at folder to here.

const app=express();    //initialize express into a variable

app.use(express.json());    //We want to use bodyparse middlware so we can perform GET POST using json

app.use('/api/items',items); //anything at goes to the path api/items should refer to path items(given above).

// MongoDB config
const db= require('./config/keys').mongoURI;

//Connect to MongoDB (with Mongoose)

mongoose
    .connect(db,{ useUnifiedTopology: true,useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));

