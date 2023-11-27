const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/yourdatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove the following lines
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
