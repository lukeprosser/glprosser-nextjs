'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    firstName: yup.string().required('Please provide your first name.'),
    lastName: yup.string().required('Please provide your last name.'),
    emailAddress: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Please enter your email address.'),
    message: yup
      .string()
      .min(50, 'Your message must be at least 50 characters long.')
      .max(500, 'Your message must not be longer than 500 characters.')
      .required('Please provide details about your enquiry.'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sentError, setSentError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSent(false);
    setSentError(false);

    if (data) {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true);
        reset();
      } else {
        setSentError(true);
      }
    }
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
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
              {...register('firstName')}
              placeholder="First name"
              className={`block w-full text-stone-700 py-3 px-4 placeholder:text-stone-400 ${
                errors.firstName ? 'outline outline-red-500' : 'border'
              }`}
            />
            <p className="mt-2 text-sm text-red-600">
              {errors.firstName?.message}
            </p>
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
              {...register('lastName')}
              placeholder="Last name"
              className={`block w-full text-stone-700 py-3 px-4 placeholder:text-stone-400 ${
                errors.lastName ? 'outline outline-red-500' : 'border'
              }`}
            />
            <p className="mt-2 text-sm text-red-600">
              {errors.lastName?.message}
            </p>
          </div>
        </div>
        <div className="w-full mb-8">
          <label
            htmlFor="emailAddress"
            className="block uppercase tracking-wide text-stone-700 text-xs mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            {...register('emailAddress')}
            placeholder="Email address"
            className={`block w-full text-stone-700 py-3 px-4 placeholder:text-stone-400 ${
              errors.emailAddress ? 'outline outline-red-500' : 'border'
            }`}
          />
          <p className="mt-2 text-sm text-red-600">
            {errors.emailAddress?.message}
          </p>
        </div>
        <div className="w-full mb-6">
          <label
            htmlFor="message"
            className="block uppercase tracking-wide text-stone-700 text-xs mb-2"
          >
            Message
          </label>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Message"
            className={`block w-full text-stone-700 py-3 px-4 placeholder:text-stone-400 ${
              errors.message ? 'outline outline-red-500' : 'border'
            }`}
          />
          <p className="mt-2 text-sm text-red-600">{errors.message?.message}</p>
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-red-600 uppercase text-sm text-stone-50 block ml-auto"
        >
          Submit
        </button>
      </form>
      {sent ? <p>Enquiry sent!</p> : null}
      {sentError ? <p>There was a problem</p> : null}
    </div>
  );
}
