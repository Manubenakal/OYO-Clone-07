import connectDB from '@/db';
import Hotel from '@/models/hotel-model';

export default async function handler(req, res) {
  connectDB();
  if (req.method === 'POST') {
    const newHotel = new Hotel(req.body);
    const result = await newHotel.save();
    res.status(200).json({ msg: 'Hotel added!', result });
  }
}
