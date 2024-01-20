import Container from '@/components/container/Container';

export default function About() {
  return (
    <section>
      <Container>
        <div className="py-16 md:py-20 md:text-lg text-center md:text-left font-light grid md:grid-cols-3 md:gap-6">
          <p className="mb-4">
            Based in Cwmbran, South Wales, Gareth Prosser is an experienced
            construction specialist, with over 20 years in the building
            industry.
          </p>
          <p className="mb-4">
            Through word of mouth and recommendation, he has gained a strong
            reputation for quality craftsmanship, expertise and reliability.
          </p>
          <p>
            An award-winning bricklayer, Gareth provides a professional,
            reliable service from consultation to completion.
          </p>
        </div>
      </Container>
    </section>
  );
}
