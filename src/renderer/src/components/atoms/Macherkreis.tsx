interface MacherkreisProps {
  data: {
    senses_upper: string;
    senses_lower: string;
    brain_upper: string;
    brain_lower: string;
    muscle_upper: string;
    muscle_lower: string;
  };
}

export const Macherkreis = ({ data }: MacherkreisProps) => {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center animate-fade-in">
      {/* Der äußere Kreis */}
      <div className="absolute w-full h-full border-4 border-next-level-green rounded-full border-t-transparent animate-spin-slow"></div>
      
      {/* Oben: Sinnesorgane */}
      <div className="absolute -top-6 bg-white border-2 border-next-level-green px-4 py-2 rounded-lg shadow-md text-center z-10">
        <p className="text-[10px] font-black uppercase text-green-700">{data.senses_upper}</p>
        <p className="text-[8px] text-gray-500">{data.senses_lower}</p>
      </div>

      {/* Mitte: Gehirn */}
      <div className="w-44 h-44 bg-green-600 rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl border-4 border-white z-20">
        <span className="text-2xl mb-1">🧠</span>
        <p className="text-[10px] font-black uppercase px-2">{data.brain_upper}</p>
        <p className="text-[7px] opacity-80 px-2 mt-1 italic">{data.brain_lower}</p>
      </div>

      {/* Unten: Muskeln */}
      <div className="absolute -bottom-6 bg-white border-2 border-next-level-green px-4 py-2 rounded-lg shadow-md text-center z-10">
        <p className="text-[10px] font-black uppercase text-green-700">{data.muscle_upper}</p>
        <p className="text-[8px] text-gray-500">{data.muscle_lower}</p>
      </div>
      
      {/* Verbindungspfeile */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-next-level-green text-2xl">↓</div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-next-level-green text-2xl">↑</div>
    </div>
  );
};