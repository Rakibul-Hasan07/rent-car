import mongoose from 'mongoose';

const DbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
    return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // You can choose to handle or rethrow the error based on your application's needs.
  }
};

export default DbConnect;
