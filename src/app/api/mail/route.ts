import { NextResponse } from 'next/server';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  const body = await req.json();

  if (!body.firstName || !body.lastName || !body.emailAddress || !body.message)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 400 }
    );

  const message = `
    First Name: ${body.firstName}\r\n
    Last Name: ${body.lastName}\r\n
    Email Address: ${body.emailAddress}\r\n
    Message: ${body.message}\r\n
  `;

  const data = {
    to: process.env.EMAIL_ADDRESS_TO,
    from: process.env.EMAIL_ADDRESS_FROM, // This email needs to be a verified domain in SG
    reply_to: body.emailAddress,
    subject: 'Website Enquiry',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  sgMail.send(data);

  return NextResponse.json({ message: 'Ok' }, { status: 200 });
}
