/**
 * Prop-Definition für das 2-Spalten-Layout.
 * Erwartet zwingend zwei Textblöcke (links und rechts), um die Symmetrie des Layouts zu wahren.
 */
interface TextBlockData {
  heading: string;
  content: string;
}

interface TextTemplate1Data {
  title: string;
  leftBlock: TextBlockData;
  rightBlock: TextBlockData;
}

interface TextTemplate1Props {
  data: TextTemplate1Data;
}

/**
 * Symmetrisches Text-Layout-Template (2 Spalten).
 * Konzipiert für Gegenüberstellungen, Vergleiche oder textlastige Inhalte.
 * Im Gegensatz zum Grafik-Template erlauben die Inhaltscontainer hier vertikales 
 * Scrollen (overflow-y-auto), falls der Text die Viewport-Höhe überschreitet.
 */
const TextTemplate1 = ({ data }: TextTemplate1Props) => {
  return (
    <div className="w-full h-full bg-transparent p-8 flex flex-col overflow-hidden">
      
      {/* Header Bereich */}
      <div className="border-b-2 border-slate-200 pb-4 mb-12 shrink-0">
        <h2 className="text-3xl font-black font-headline text-[#2D2F31] uppercase italic tracking-tighter">
          {data.title}
        </h2>
      </div>

      {/* Content Bereich: 2 Spalten, nimmt den restlichen verfügbaren Platz ein (flex-1) */}
      <div className="flex-1 grid grid-cols-2 gap-16 min-h-0">
        
        {/* Linke Spalte */}
        <div className="bg-[#E7E8EB] p-8 border-t-4 border-[#5A6000] flex flex-col gap-4 overflow-y-auto">
          {data.leftBlock?.heading && (
            <h3 className="text-xl font-headline font-bold text-[#2D2F31] uppercase tracking-widest shrink-0">
              {data.leftBlock.heading}
            </h3>
          )}
          {data.leftBlock?.content && (
            <p className="text-base font-body text-slate-700 leading-relaxed">
              {data.leftBlock.content}
            </p>
          )}
        </div>

        {/* Rechte Spalte (Farbliche Absetzung zur optischen Trennung) */}
        <div className="bg-[#E5F330]/20 p-8 border-t-4 border-[#5A6000] flex flex-col gap-4 overflow-y-auto">
          {data.rightBlock?.heading && (
            <h3 className="text-xl font-headline font-bold text-[#2D2F31] uppercase tracking-widest shrink-0">
              {data.rightBlock.heading}
            </h3>
          )}
          {data.rightBlock?.content && (
            <p className="text-base font-body text-slate-700 leading-relaxed">
              {data.rightBlock.content}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default TextTemplate1;