'use client';

import ContactForm from '../../components/contact-form/ContactForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl font-medium">Contact</h1>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
