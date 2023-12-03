import Slider from '@/components/slider/Slider';
import About from '@/sections/about/About';
import Services from '@/sections/services/Services';
import Testimonials from '@/sections/testimonials/Testimonials';

export default function Home() {
  return (
    <main className="">
      <Slider />
      <About />
      <Services />
      <Testimonials />
    </main>
  );
}
