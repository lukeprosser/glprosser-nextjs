import ContactForm from '@/components/contact-form/ContactForm';
import Container from '@/components/container/Container';

export default async function Contact() {
  return (
    <section id="contact-form" className="bg-stone-200">
      <Container>
        <div className="max-w-3xl mx-auto py-16">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
