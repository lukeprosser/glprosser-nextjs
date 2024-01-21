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

  // Type reference: https://claritydev.net/blog/typescript-typing-form-events-in-react
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

  // TODO:
  // - Form handling library (e.g. React Hook Form)
  // - Error styles

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 md:pr-3 mb-6 md:mb-0">
          <label
            htmlFor="firstName"
            className="block uppercase tracking-wide text-stone-700 text-xs mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            required={true}
            max={100}
            className="block w-full text-stone-700 border py-3 px-4 placeholder:text-stone-400"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-3">
          <label
            htmlFor="lastName"
            className="block uppercase tracking-wide text-stone-700 text-xs mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            required={true}
            max={100}
            className="block w-full text-stone-700 border py-3 px-4 placeholder:text-stone-400"
          />
        </div>
      </div>
      <div className="w-full mb-6">
        <label
          htmlFor="emailAddress"
          className="block uppercase tracking-wide text-stone-700 text-xs mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          name="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          placeholder="Email address"
          required={true}
          max={100}
          className="block w-full text-stone-700 border py-3 px-4 mb-3 placeholder:text-stone-400"
        />
      </div>
      <div className="w-full mb-6">
        <label
          htmlFor="message"
          className="block uppercase tracking-wide text-stone-700 text-xs mb-2"
        >
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required={true}
          maxLength={500}
          className="block w-full text-stone-700 border py-3 px-4 placeholder:text-stone-400"
        />
      </div>
      <button
        type="submit"
        className="px-8 py-3 bg-red-600 uppercase text-sm text-stone-50 block ml-auto"
      >
        Submit
      </button>
    </form>
  );
}
