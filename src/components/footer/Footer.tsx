import Container from '../container/Container';

const year = new Date().getFullYear().toString();

export default function Footer() {
  return (
    <footer className="py-8 bg-stone-900 text-stone-50">
      <Container>
        <p className="text-center font-light">
          &copy; GLProsser {year}. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
