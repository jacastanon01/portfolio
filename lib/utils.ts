'use server';

import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';

import { client } from '@/sanity/lib/client';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const myEmail = await client.fetch(
    `*[_type == "personalInfo"][0]{email}`
  );
  const senderEmail = formData.get('senderEmail') as string;
  const senderName = formData.get('senderName') as string;
  const message = formData.get('message') as string;
  try {
    const data = await resend.emails.send({
      to: myEmail.email.toLowerCase(),
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
