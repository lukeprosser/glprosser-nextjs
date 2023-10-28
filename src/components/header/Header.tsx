export default function Header() {
  return (
    <header className="py-6 bg-stone-900 text-stone-50">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl uppercase">G.L.Prosser</h1>
        <button className="px-4 py-2 bg-red-600 uppercase text-sm">
          Contact
        </button>
      </div>
    </header>
  );
}
