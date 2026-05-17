/**
 * Datenmodell für die Inhalte des Macherkreises.
 * Implementiert ein Fallback-Muster bei der Benennung der Keys, um Abwärtskompatibilität
 * mit unterschiedlichen JSON-Strukturen (Folie 1 vs. Folie 2 Formate) zu gewährleisten.
 */
interface MacherkreisProps {
  data: {
    atom1text1?: string;
    atom1text2?: string;
    atom1text3?: string;
    atom1text4?: string;
    atom1text5?: string;
    atom1text6?: string;
    senses_upper?: string;
    senses_lower?: string;
    brain_upper?: string;
    brain_lower?: string;
    muscle_upper?: string;
    muscle_lower?: string;
  };
}

/**
 * Hochspezialisierte, visuelle Atom-Komponente.
 * Rendert ein statisches Schaubild zum Informationsverarbeitungsprozess.
 * Das Layout basiert auf absoluter Positionierung innerhalb eines festen Aspect-Ratios,
 * was eine proportionale Skalierung im Parent-Container garantiert. Die Komponente ist
 * fest auf den Light Mode konfiguriert.
 */
export const Macherkreis = ({ data }: MacherkreisProps) => {
  return (
    <div className="relative h-full max-h-[340px] w-full max-w-[360px] aspect-square mx-auto flex items-center justify-center">

      {/* Hintergrund-Kreis */}
      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border-[3px] border-dashed border-[#5A6000]/40 z-0"></div>

      {/* Zentraler Kreis: Verarbeitung im Gehirn */}
      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] h-[22%] min-w-[50px] min-h-[50px] bg-[#5A6000] rounded-full flex items-center justify-center text-center shadow-xl border-2 border-[#E7E8EB] z-20">
        <span className="material-symbols-outlined text-white text-2xl xl:text-3xl">psychology</span>
      </div>

      {/* Oben Links: Wahrnehmung */}
      <div className="absolute top-[10%] -left-[5%] w-[45%] bg-[#E5F330] p-3 rounded-xl shadow-md flex flex-col items-center text-center z-20 border-b-2 border-[#5A6000]">
        <div className="flex gap-1 text-[#5A6000] mb-1">
          <span className="material-symbols-outlined text-sm xl:text-base">visibility</span>
          <span className="material-symbols-outlined text-sm xl:text-base">hearing</span>
        </div>
        <p className="text-[9px] xl:text-[11px] font-black uppercase text-[#2D2F31] leading-tight mb-1">
          {data.atom1text1 || data.senses_upper}
        </p>
        <p className="text-[7px] xl:text-[8px] font-bold text-[#5A6000] uppercase">
          {data.atom1text2 || data.senses_lower}
        </p>
      </div>

      {/* Oben Rechts: Kognition */}
      <div className="absolute top-[10%] -right-[5%] w-[45%] bg-[#E5F330] p-3 rounded-xl shadow-md flex flex-col items-center text-center z-20 border-b-2 border-[#5A6000]">
        <span className="material-symbols-outlined text-[#5A6000] text-lg xl:text-xl mb-1">psychology</span>
        <p className="text-[9px] xl:text-[11px] font-black uppercase text-[#2D2F31] leading-tight mb-1">
          {data.atom1text3 || data.brain_upper}
        </p>
        <p className="text-[7px] xl:text-[8px] font-bold text-[#5A6000] uppercase">
          {data.atom1text4 || data.brain_lower}
        </p>
      </div>

      {/* Unten Mitte: Motorik */}
      <div className="absolute -bottom-[2%] left-1/2 -translate-x-1/2 w-[45%] bg-[#E5F330] p-3 rounded-xl shadow-md flex flex-col items-center text-center z-20 border-b-2 border-[#5A6000]">
        <span className="material-symbols-outlined text-[#5A6000] text-lg xl:text-xl mb-1">directions_car</span>
        <p className="text-[9px] xl:text-[11px] font-black uppercase text-[#2D2F31] leading-tight mb-1">
          {data.atom1text5 || data.muscle_upper}
        </p>
        <p className="text-[7px] xl:text-[8px] font-bold text-[#5A6000] uppercase">
          {data.atom1text6 || data.muscle_lower}
        </p>
      </div>

      {/* Richtungspfeile des Kreislaufs */}
      <span className="absolute top-[28%] left-1/2 -translate-x-1/2 material-symbols-outlined text-[#5A6000] text-xl xl:text-2xl z-10">arrow_forward</span>
      <span className="absolute bottom-[35%] right-[10%] material-symbols-outlined text-[#5A6000] text-xl xl:text-2xl rotate-[120deg] z-10">arrow_forward</span>
      <span className="absolute bottom-[35%] left-[10%] material-symbols-outlined text-[#5A6000] text-xl xl:text-2xl rotate-[240deg] z-10">arrow_forward</span>

    </div>
  );
};