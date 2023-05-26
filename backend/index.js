const express = require('express');
const cors = require('cors');
const { connect } = require('mongoose');
const connectToDB = require('./src/utils/connectToDB');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await connectToDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
        console.log('Unable to start server');
    }
}
startServer();