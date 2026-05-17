import { Macherkreis } from '../components/atoms/Macherkreis';

/**
 * Datenstruktur für standardisierte Textblöcke innerhalb der Templates.
 * Beide Felder sind optional bzw. bedingt renderbar, um leere Container in der UI zu vermeiden.
 */
interface TextBlockData {
  heading?: string;
  content: string;
}

/**
 * Prop-Definition für das 4-Quadranten-Layout.
 * Erwartet einen globalen Titel, bis zu drei Textblöcke und ein generisches Datenobjekt 
 * für die Atom-Komponente im oberen rechten Quadranten.
 */
interface GrafikTemplate1Data {
  title: string;
  textTopLeft?: TextBlockData;
  textBottomLeft?: TextBlockData;
  textBottomRight?: TextBlockData;
  atomData?: any; // Typisierung absichtlich offen gelassen, falls künftig andere Atome injiziert werden
}

interface Grafik1Props {
  data: GrafikTemplate1Data;
}

/**
 * Asymmetrisches Layout-Template (2x2 Grid).
 * Konzipiert für die Darstellung von drei Informationstexten und einer unterstützenden 
 * visuellen Komponente (Atom). Die Komponente ist responsiv innerhalb ihres Parent-Containers
 * (overflow-hidden und min-h-0 erzwingen, dass das Grid nicht aus dem Viewport ausbricht).
 */
const GrafikTemplate1 = ({ data }: Grafik1Props) => {
  return (
    <div className="w-full h-full bg-transparent p-8 flex flex-col overflow-hidden">
      
      {/* Header Bereich: Fixiert, schrumpft nicht (shrink-0) */}
      <div className="border-b-2 border-slate-200 pb-4 mb-12 shrink-0">
        <h2 className="text-3xl font-black font-headline text-[#2D2F31] uppercase italic tracking-tighter">
          {data.title}
        </h2>
      </div>

      {/* Content Bereich: Grid-Layout erzwingt eine strikte 2x2 Aufteilung */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-8 min-h-0">
        
        {/* Quadrant: Oben Links (Defensives Rendering prüft auf Vorhandensein der Daten) */}
        <div className="bg-[#E7E8EB] p-6 border-t-4 border-[#5A6000] flex flex-col gap-3 overflow-hidden">
          {data.textTopLeft?.heading && (
            <h3 className="text-lg font-headline font-bold text-[#2D2F31] uppercase tracking-widest shrink-0">
              {data.textTopLeft.heading}
            </h3>
          )}
          {data.textTopLeft?.content && (
            <p className="text-sm 2xl:text-base font-body text-slate-700 leading-relaxed overflow-hidden">
              {data.textTopLeft.content}
            </p>
          )}
        </div>

        {/* Quadrant: Oben Rechts (Delegiert die Darstellung des Atoms an eine spezialisierte Komponente) */}
        <div className="flex justify-center items-center p-2 overflow-hidden">
          {data.atomData && <Macherkreis data={data.atomData} />}
        </div>

        {/* Quadrant: Unten Links */}
        <div className="bg-white p-6 border-2 border-slate-200 flex flex-col gap-3 overflow-hidden">
          {data.textBottomLeft?.heading && (
            <h3 className="text-lg font-headline font-bold text-[#5A6000] uppercase tracking-widest shrink-0">
              {data.textBottomLeft.heading}
            </h3>
          )}
          {data.textBottomLeft?.content && (
            <p className="text-sm 2xl:text-base font-body text-slate-700 leading-relaxed overflow-hidden">
              {data.textBottomLeft.content}
            </p>
          )}
        </div>

        {/* Quadrant: Unten Rechts (Visuell abgesetzt durch transparenten Hintergrund und linken Border) */}
        <div className="bg-[#E5F330]/20 p-6 border-l-4 border-[#5A6000] flex flex-col gap-3 overflow-hidden">
          {data.textBottomRight?.heading && (
            <h3 className="text-lg font-headline font-bold text-[#2D2F31] uppercase tracking-widest shrink-0">
              {data.textBottomRight.heading}
            </h3>
          )}
          {data.textBottomRight?.content && (
            <p className="text-sm 2xl:text-base font-body text-slate-700 leading-relaxed overflow-hidden">
              {data.textBottomRight.content}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default GrafikTemplate1;