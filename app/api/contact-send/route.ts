import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Normally, you would handle the email sending here
    // For example, using nodemailer or any other email service

    // For demonstration purposes, we will just log the data
    console.log('Received message:', { name, email, message });

    return NextResponse.json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error handling the request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
