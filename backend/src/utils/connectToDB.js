const {connect} = require('mongoose');

const connectToDB = async (mongoURI) => {
    try {
        await connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToDB;