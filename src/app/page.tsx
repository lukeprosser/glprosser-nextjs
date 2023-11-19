import Slider from '@/components/slider/Slider';
import About from '@/components/about/About';
import Services from '@/components/services/Services';
import Testimonials from '@/components/testimonials/Testimonials';

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
