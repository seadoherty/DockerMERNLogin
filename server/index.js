require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),  
    cors = require('cors'),    
    app = express(),
    apiPort = 5000,
    userRouter=require('./routes/user.routes');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json())

require('./config/database.config');

app.use('/api', userRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
