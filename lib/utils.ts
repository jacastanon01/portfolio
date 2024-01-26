'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  senderEmail: string,
  senderName: string,
  message: string
) => {
  try {
    const data = await resend.emails.send({
      to: 'jacastanon01@gmail.com',
      from: 'Contact Form <onboarding@resend.dev>',
      subject: `${senderName} sent you a message!`,
      text: message,
      reply_to: senderEmail,
    });

    return data;
  } catch (error: any) {
    throw Error(error.message);
  }
};
