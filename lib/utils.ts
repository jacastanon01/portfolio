'use server';

import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail') as string;
  const senderName = formData.get('senderName') as string;
  const message = formData.get('message') as string;
  try {
    const data = await resend.emails.send({
      to: 'jacastanon01@gmail.com',
      from: 'Contact Form <onboarding@resend.dev>',
      subject: `${senderName} sent you a message!`,
      text: message,
      reply_to: senderEmail,
    });

    revalidatePath('/');
    return data;
  } catch (error: any) {
    throw Error(error.message);
  }
};
