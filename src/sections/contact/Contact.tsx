import ContactForm from '@/components/contact-form/ContactForm';
import Container from '@/components/container/Container';

export default async function Contact() {
  return (
    <section>
      <Container>
        <div className="max-w-3xl mx-auto py-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
