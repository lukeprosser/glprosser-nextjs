import Graphic from './Graphic';

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[330px] sm:w-[420px] md:w-[500px]">
        <Graphic classes="w-full h-full drop-shadow-lg" colour="#a3a3a3" />
      </div>
      <div className="mt-1 text-center">
        <h2 className="mb-1 pr-2 pb-1 text-5xl sm:text-6xl md:text-7xl text-stone-50 uppercase tracking-tight drop-shadow-lg border-b-2 border-stone-400">
          <span className="text-red-600">GL</span>Prosser
        </h2>
        {/* Margin left added to offset strange flexbox calculation */}
        <h3 className="ml-2 text-xs sm:text-lg md:text-xl text-md uppercase tracking-[5px] md:tracking-[6px] text-stone-300 drop-shadow-lg">
          Construction Services
        </h3>
      </div>
    </div>
  );
}
