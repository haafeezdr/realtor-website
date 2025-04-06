
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Achievements from '@/components/Achievements';

import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import PropertiesPage from '@/components/PropertiesSection';

export default function Home() {

  return (
    < >
      <HeroSection />
      <About />
      <PropertiesPage/>
      <VideoSection />
      <Achievements />
      <Footer />
    </>
  );
}
