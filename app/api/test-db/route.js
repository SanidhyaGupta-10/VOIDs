import { connectDB } from '@/lib/mongodb';

export async function GET() {
  try {
    await connectDB();
    return Response.json({ success: true, message: 'Successfully connected to MongoDB.' });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return Response.json({ success: false, message: 'Failed to connect to MongoDB.' }, { status: 500 });
  }
}