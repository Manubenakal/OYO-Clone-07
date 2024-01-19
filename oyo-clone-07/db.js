import mongoose from 'mongoose';

const URI =
  'mongodb+srv://manubenakal:kingceaser@cluster0.jlwrkoz.mongodb.net/oyo-clone-07';

const connectDB = async () => {
  await mongoose.connect(URI);
  console.log('db donnected');
};
export default connectDB;
