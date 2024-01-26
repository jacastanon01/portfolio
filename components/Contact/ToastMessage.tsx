const ToastMessage = ({ formData }: { formData: FormData }) => (
  <div className='flex flex-col space-y-3'>
    <h3 className='text-gradient text-3xl'>Email Received!</h3>
    <p className='font-figtree'>
      I appreciate your message,{' '}
      {formData.get('senderName') as string}! I will get back to you
      at{' '}
      <span className='text-gradient'>
        {formData.get('senderEmail') as string}
      </span>{' '}
      as soon as I can.
    </p>
  </div>
);

export default ToastMessage;
