import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  if (!body.firstName || !body.lastName || !body.emailAddress || !body.message)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 400 }
    );

  const content = `
    First Name: ${body.firstName}\r\n
    Last Name: ${body.lastName}\r\n
    Email Address: ${body.emailAddress}\r\n<br>
    Message: ${body.message}\r\n
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: process.env.EMAIL_ADDRESS_FROM || 'Unknown sender',
      to: process.env.EMAIL_ADDRESS_TO || 'Unknown recipient',
      reply_to: body.emailAddress,
      subject: 'Website Enquiry',
      html: content.replace(/\r\n/g, '<br>'),
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
