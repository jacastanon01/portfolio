'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { sendEmail } from '@/lib/utils';
import { useTheme } from '@/context/ThemeProvider';

import ToastMessage from './ToastMessage';

const ContactForm = () => {
  const { mode } = useTheme();
  const router = useRouter();
  return (
    <form
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);
        if (error) {
          toast.error(
            'Error sending message, please try again later'
          );
        }
        if (data) {
          toast.success(
            ({ closeToast }) => <ToastMessage formData={formData} />,
            {
              theme: mode,
            }
          );
        }
        formData = new FormData();
        router.refresh();
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
      <ToastContainer />
    </form>
  );
};

export default ContactForm;
