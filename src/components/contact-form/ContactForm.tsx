'use client';
import { FormEvent, useState } from 'react';

interface CustomElements extends HTMLFormControlsCollection {
  emailAddress: HTMLInputElement;
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  message: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<CustomForm>) => {
    e.preventDefault();
    const targetElements = e.currentTarget.elements;

    if (targetElements) {
      const { emailAddress, firstName, lastName, message } = targetElements;
      const formData = {
        emailAddress: emailAddress.value,
        firstName: firstName.value,
        lastName: lastName.value,
        message: message.value,
      };

      await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="email"
          name="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
