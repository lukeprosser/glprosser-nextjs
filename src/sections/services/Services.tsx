import Container from '@/components/container/Container';
import { services } from '@/lib/constants';

const Service = ({ title }: { title: string }) => (
  <div
    className="w-full h-64 bg-cover"
    style={{ backgroundImage: `url('/images/services/${title}.jpg')` }}
  >
    <h3>{title.toUpperCase()}</h3>
  </div>
);

export default function Services() {
  return (
    <section className="bg-stone-200">
      <Container>
        <div className="py-16 text-center text-lg">
          <div className="w-full mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Service key={idx} title={service} />
            ))}
          </div>
          <div>
            <p className="mb-4">
              As well as these core services, Gareth also provides bespoke
              quotations, working regularly with a highly skilled and trusted
              network of contractors and suppliers to assist with any project.
            </p>
            <p>
              This includes all aspects of carpentry, plumbing, electrics and
              plastering, providing a comprehensive range of specialist services
              while maintaining competitive costs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
