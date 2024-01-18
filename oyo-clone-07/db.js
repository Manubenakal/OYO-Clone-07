import mongoose from 'mongoose';

const URI =
  'mongodb+srv://manubenakal:kingceaser@M@cluster0.jlwrkoz.mongodb.net/OYO';

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DB Connected');
};
export default connectDB;
