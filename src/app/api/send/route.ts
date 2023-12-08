import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req, res) {
  const body = await req.json();

  if (!body.firstName || !body.lastName || !body.emailAddress || !body.message)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 400 }
    );

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: process.env.EMAIL_ADDRESS_FROM || 'unknown',
      to: process.env.EMAIL_ADDRESS_TO || '',
      reply_to: body.emailAddress,
      subject: 'Website Enquiry',
      html: `<h1>Hello world</h1>`,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
