const mongoose = require('mongoose');
/**
 * Connect MongoDB
 */

async function connectDB() {
    const uri = `mongodb://localhost:27017/ecommerce`;

    try {
        // Connect to the MongoDB cluster
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }).then(() => console.log('Database connected'));

    } catch (e) {
      console.error(`Error: ${error.message}`.red.underline.bold)
      process.exit(1)
    }
};

module.exports = connectDB;