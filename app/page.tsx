import { MotionDiv } from '@/components/Motion';
import AboutSection from '@/components/Home/AboutSection';
import HeroSection from '@/components/Home/HeroSection';

export default function Home() {
  return (
    <div>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { ease: 'easeOut', duration: 0.4 },
        }}
        className='grid h-full grid-cols-1 gap-8 lg:grid-cols-2'
      >
        <AboutSection />
        <HeroSection />
      </MotionDiv>
    </div>
  );
}
