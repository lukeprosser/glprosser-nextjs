import ContactForm from '@/components/contact-form/ContactForm';
import Container from '@/components/container/Container';

export default async function Contact() {
  return (
    <section>
      <Container>
        <div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
