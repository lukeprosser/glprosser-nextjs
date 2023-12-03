import Container from '@/components/container/Container';

export default function Testimonials() {
  return (
    <section>
      <Container>
        <div className="py-16 text-center font-light text-lg grid md:grid-cols-2 items-center gap-8 lg:gap-10">
          <div>
            <p className="mb-2 italic">
              “Dear Gareth, thank you for the excellent work you have done for
              me. I cannot praise you enough for the quality of your
              craftsmanship. You did a great job.”
            </p>
            <p className="text-base">Paul Murphy, MP</p>
          </div>
          <div>
            <p className="mb-2 italic">
              “We are very pleased with the work that Gareth did on our
              extension and highly recommend him!”
            </p>
            <p className="text-base">Sue Holroyd</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
