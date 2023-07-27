const express = require('express');
const cors = require('cors');
const connectToDB = require('./src/utils/connectToDB');
require('dotenv').config();
const authRouter = require('./src/routes/auth');
const userRouter = require('./src/routes/user')
const blogRouter = require('./src/routes/blog')
const notFound = require('./src/middlewares/notFound');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary')

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp'
}))

app.use('/api/v1', authRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/blog', blogRouter)
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