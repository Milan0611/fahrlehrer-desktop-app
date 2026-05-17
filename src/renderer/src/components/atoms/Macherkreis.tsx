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
    <div className="relative h-full max-h-[320px] aspect-square mx-auto flex items-center justify-center">

      {/* Hintergrund-Kreis */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border-[3px] border-dashed border-[#5A6000]/40 dark:border-[#E5F330]/40 z-0"></div>

      {/* Zentraler Kreis: Verarbeitung im Gehirn */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] h-[22%] min-w-[50px] min-h-[50px] bg-[#5A6000] rounded-full flex items-center justify-center text-center shadow-xl border-2 border-[#E7E8EB] dark:border-[#0C0E10] z-20">
        <span className="material-symbols-outlined text-white text-2xl xl:text-3xl">psychology</span>
      </div>

      {/* Oben Links: Hart an den oberen Rand gepinnt (top-0) */}
      <div className="absolute top-0 left-0 w-[45%] bg-[#E5F330] p-2 rounded-xl shadow-md flex flex-col items-center text-center z-20 border-bö-2 border-[#5A6000]">
        <div className="flex gap-1 text-[#5A6000] mb-1">
          <span className="material-symbols-outlined text-sm xl:text-base">visibility</span>
          <span className="material-symbols-outlined text-sm xl:text-base">hearing</span>
        </div>
        <p className="text-[9px] xl:text-[11px] font-black uppercase text-[#2D2F31] leading-tight mb-1">{data.senses_upper}</p>
        <p className="text-[7px] xl:text-[8px] font-bold text-[#5A6000] uppercase">{data.senses_lower}</p>
      </div>

      {/* Oben Rechts: Hart an den oberen Rand gepinnt (top-0) */}
      <div className="absolute top-0 right-0 w-[45%] bg-[#E5F330] p-2 rounded-xl shadow-md flex flex-col items-center text-center z-20 border-b-2 border-[#5A6000]">
        <span className="material-symbols-outlined text-[#5A6000] text-lg xl:text-xl mb-1">psychology</span>
        <p className="text-[9px] xl:text-[11px] font-black uppercase text-[#2D2F31] leading-tight mb-1">{data.brain_upper}</p>
        <p className="text-[7px] xl:text-[8px] font-bold text-[#5A6000] uppercase">{data.brain_lower}</p>
      </div>

      {/* Unten Mitte: Hart an den unteren Rand gepinnt (bottom-0) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[45%] bg-[#E5F330] p-2 rounded-xl shadow-md flex flex-col items-center text-center z-20 border-b-2 border-[#5A6000]">
        <span className="material-symbols-outlined text-[#5A6000] text-lg xl:text-xl mb-1">directions_car</span>
        <p className="text-[9px] xl:text-[11px] font-black uppercase text-[#2D2F31] leading-tight mb-1">{data.muscle_upper}</p>
        <p className="text-[7px] xl:text-[8px] font-bold text-[#5A6000] uppercase">{data.muscle_lower}</p>
      </div>

      {/* Richtungspfeile passend zum gestrichelten Kreis */}
      <span className="absolute top-[25%] left-1/2 -translate-x-1/2 material-symbols-outlined text-[#5A6000] dark:text-[#E5F330] text-xl xl:text-2xl z-10">arrow_forward</span>
      <span className="absolute bottom-[35%] right-[10%] material-symbols-outlined text-[#5A6000] dark:text-[#E5F330] text-xl xl:text-2xl rotate-[120deg] z-10">arrow_forward</span>
      <span className="absolute bottom-[35%] left-[10%] material-symbols-outlined text-[#5A6000] dark:text-[#E5F330] text-xl xl:text-2xl rotate-[240deg] z-10">arrow_forward</span>

    </div>
  );
};