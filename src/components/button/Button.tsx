import Spinner from '../spinner/Spinner';

type ButtonProps = {
  type: HTMLButtonElement['type'];
  text: string;
  loading?: boolean;
};

export default function Button({ type, text, loading }: ButtonProps) {
  return (
    <button
      type={type}
      className={`w-[115px] h-[45px] px-8 py-3 uppercase text-sm shadow-md bg-red-600 hover:bg-red-500 text-stone-50 block ml-auto ${
        loading ? 'opacity-60' : ''
      }`}
      disabled={loading ?? false}
    >
      {loading ? <Spinner size={20} /> : text}
    </button>
  );
}
