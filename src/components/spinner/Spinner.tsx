import { ImSpinner3 } from 'react-icons/im';

type SpinnerProps = {
  size: number;
};

export default function Spinner({ size }: SpinnerProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <ImSpinner3 size={size} className="animate-spin" />
    </div>
  );
}
