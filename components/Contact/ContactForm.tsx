'use client';

import React from 'react';

const ContactForm = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className='flex flex-col space-y-4 border-[0.8px] border-dashed border-white-500 p-4'
    >
      <input
        autoComplete='off'
        type='text'
        name='senderName'
        placeholder='Your Name'
        className='input'
      />
      <input
        autoComplete='off'
        type='email'
        name='senderEmail'
        placeholder='Your Email'
        className='input'
      />
      <textarea
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
