import About from '@/components/about/About';
import Services from '@/components/services/Services';
import Testimonials from '@/components/testimonials/Testimonials';

export default function Home() {
  return (
    <main className="">
      <About />
      <Services />
      <Testimonials />
    </main>
  );
}
