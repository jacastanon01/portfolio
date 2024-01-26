'use client';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';

import 'react-toastify/dist/ReactToastify.css';

import { sendEmail } from '@/lib/utils';
import { useTheme } from '@/context/ThemeProvider';

import ToastMessage from './ToastMessage';

const ContactForm = () => {
  const { mode } = useTheme();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error('Error sending message, please try again later');
    }
    if (data) {
      toast.success(() => <ToastMessage formData={formData} />, {
        theme: mode,
      });
      form.reset();
    }
  }
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      onSubmit={handleSubmit}
      autoComplete='off'
      className='flex flex-col space-y-4 border-[0.8px] border-dashed border-white-500 p-4'
    >
      <input
        required
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
      <button
        className='self-center rounded-lg px-4 py-2 font-bold text-white-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-tr hover:from-primary hover:to-primary-dark hover:text-white-800'
        type='submit'
        aria-label='Send Message'
      >
        Submit
      </button>
      <ToastContainer />
    </motion.form>
  );
};

export default ContactForm;
