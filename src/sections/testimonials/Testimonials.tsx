import Container from '@/components/container/Container';

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

export default function Testimonials() {
  return (
    <section>
      <Container>
        <div className="mx-auto max-w-screen-lg py-16 text-center font-light text-lg grid md:grid-cols-2 justify-items-center gap-10 lg:gap-12">
          <div className="h-full max-w-sm flex flex-col justify-between border-b-2 border-red-500 shadow-lg p-10 bg-white">
            <p className="relative mb-6 italic">
              <ImQuotesLeft
                size={30}
                className="absolute -top-5 -left-7 text-stone-200"
              />
              Gareth, thank you for the excellent work you have done for me. I
              cannot praise you enough for the quality of your craftsmanship.
              <ImQuotesRight
                size={30}
                className="absolute -bottom-2 -right-5 text-stone-200"
              />
            </p>
            <p className="text-sm uppercase font-medium tracking-widest">
              Paul Murphy, MP
            </p>
          </div>
          <div className="h-full max-w-sm flex flex-col justify-between border-b-2 border-red-500 shadow-lg p-10 bg-white">
            <p className="relative mb-6 italic">
              <ImQuotesLeft
                size={30}
                className="absolute -top-5 -left-7 text-stone-200"
              />
              We are very pleased with the work that Gareth did on our extension
              and highly recommend him!
              <ImQuotesRight
                size={30}
                className="absolute -bottom-2 -right-5 text-stone-200"
              />
            </p>
            <p className="text-sm uppercase font-medium tracking-widest">
              Sue Holroyd
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
