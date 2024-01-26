'use client';
import React from 'react';

import { sendEmail } from '@/lib/utils';

const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        const { data, error } = await sendEmail(
          formData.get('senderEmail') as string,
          formData.get('senderName') as string,
          formData.get('message') as string
        );
        if (error) {
          console.error(error);
        }
        if (data) {
          console.log(data);
        }
      }}
      autoComplete='off'
      className='flex flex-col space-y-4 border-[0.8px] border-dashed border-white-500 p-4'
    >
      <input
        max={50}
        autoComplete='off'
        type='text'
        name='senderName'
        placeholder='Your Name'
        className='input'
      />
      <input
        required
        autoComplete='off'
        type='email'
        name='senderEmail'
        placeholder='Your Email'
        className='input'
      />
      <textarea
        maxLength={500}
        required
        name='message'
        placeholder='Drop me a message to collaborate or just say hi :)'
        className='input'
      />
      <button type='submit' aria-label='Send Message'>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
