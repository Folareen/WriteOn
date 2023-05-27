const {connect} = require('mongoose');

const connectToDB = async (mongoURI) => {
    try {
        await connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to DB');
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = connectToDB;