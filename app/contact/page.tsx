import ContactForm from '@/components/Contact/ContactForm';
import GetInTouch from '@/components/Contact/GetInTouch';
import Socials from '@/components/Contact/Socials';

export default function ContactPage() {
  return (
    <div className='min-h-screen w-full'>
      <div className='flex-center'>
        <div className='flex flex-col justify-between lg:max-w-[800px]'>
          <section className='text-center'>
            <GetInTouch />
          </section>
          <section className='flex flex-col'>
            <Socials />
          </section>
          <section className='mt-6'>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
