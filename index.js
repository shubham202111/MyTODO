const express = require('express');
const mongoose = require('mongoose')
const bodyparser = require('body-parser');

//Cors Fix
const cors = require('cors');
const app = express(); 


//mongoDb configruation
const db = require('./src/config/mongoose').mongoURL

//attempt to connect Database
mongoose.connect(db,{ useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology:true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err))
            
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const userRoutes = require('./src/routes/user');


app.use(userRoutes);

//For Testing
app.get('/test',(req,res)=>{
    res.send('app is working');
})

app.listen(port, () => {
    console.log(`server is up at port ${port}`);
})