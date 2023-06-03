const express = require('express');
const cors = require('cors');
const connectToDB = require('./src/utils/connectToDB');
require('dotenv').config();
const authRouter = require('./src/routes/auth');
const userRouter = require('./src/routes/user')
const verifyToken = require('./src/middlewares/verifyToken')
const notFound = require('./src/middlewares/notFound');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1', authRouter)
app.use('/api/v1/user', verifyToken, userRouter)
app.use(notFound);


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