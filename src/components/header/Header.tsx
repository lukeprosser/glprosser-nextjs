import Container from '../container/Container';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 bg-stone-900 text-stone-50">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-2xl uppercase">
            <span className="text-red-600">GL</span>Prosser
          </h1>
          <Link
            href="#contact-form"
            className="px-4 py-2 shadow-md bg-red-600 hover:bg-red-500 uppercase text-sm"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
