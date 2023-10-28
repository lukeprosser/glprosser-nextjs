const year = new Date().getFullYear().toString();

export default function Footer() {
  return (
    <footer className="py-8 bg-stone-900 text-stone-50">
      <div className="container mx-auto text-center">
        <p>&copy; G L Prosser {year}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
