import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextResponse) {
  const formData = req.formData();
  const senderEmail = (await formData).get('senderEmail') as string;
  const senderName = (await formData).get('senderName') as string;
  const message = (await formData).get('message') as string;

  try {
    const data = await resend.emails.send({
      to: 'jacastanon01@gmail.com',
      from: 'Contact Form <onboarding@resend.dev>',
      subject: `${senderName} sent you a message!`,
      text: message,
      reply_to: senderEmail,
    });

    return NextResponse.json(data);
  } catch (error: any) {
    throw Error(error.message);
  }
}
