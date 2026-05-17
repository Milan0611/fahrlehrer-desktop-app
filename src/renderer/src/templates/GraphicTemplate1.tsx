import { Macherkreis } from '../components/atoms/Macherkreis';

interface TextBlockData {
  heading?: string;
  content: string;
}

interface GrafikTemplate1Data {
  title: string;
  textTopLeft?: TextBlockData;
  textBottomLeft?: TextBlockData;
  textBottomRight?: TextBlockData;
  atomData?: any;
}

interface Grafik1Props {
  data: GrafikTemplate1Data;
}

const GrafikTemplate1 = ({ data }: Grafik1Props) => {
  return (
    <div className="w-full h-full bg-white dark:bg-[#0C0E10] p-8 flex flex-col overflow-hidden">
      
      {/* Header Bereich: Fixe Höhe, wird nicht verkleinert */}
      <div className="border-b-2 border-slate-200 dark:border-slate-800 pb-4 mb-6 shrink-0">
        <h2 className="text-3xl font-black font-headline text-[#2D2F31] dark:text-white uppercase italic tracking-tighter">
          {data.title}
        </h2>
      </div>

      {/* Content Bereich: flex-1 und min-h-0 zwingen das Grid in den Bildschirm ohne Scrollen */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 min-h-0">
        
        {/* Quadrant: Oben Links */}
        <div className="bg-[#E7E8EB] dark:bg-[#1A1C1E] p-6 border-t-4 border-[#5A6000] dark:border-[#E5F330] flex flex-col gap-3 overflow-hidden">
          {data.textTopLeft?.heading && (
            <h3 className="text-lg font-headline font-bold text-[#2D2F31] dark:text-white uppercase tracking-widest shrink-0">
              {data.textTopLeft.heading}
            </h3>
          )}
          {data.textTopLeft?.content && (
            <p className="text-sm 2xl:text-base font-body text-slate-700 dark:text-slate-300 leading-relaxed overflow-hidden">
              {data.textTopLeft.content}
            </p>
          )}
        </div>

        {/* Quadrant: Oben Rechts (Atom) */}
        <div className="flex justify-center items-center p-2 overflow-hidden">
          {data.atomData && <Macherkreis data={data.atomData} />}
        </div>

        {/* Quadrant: Unten Links */}
        <div className="bg-white dark:bg-[#0C0E10] p-6 border-2 border-slate-200 dark:border-slate-800 flex flex-col gap-3 overflow-hidden">
          {data.textBottomLeft?.heading && (
            <h3 className="text-lg font-headline font-bold text-[#5A6000] dark:text-[#E5F330] uppercase tracking-widest shrink-0">
              {data.textBottomLeft.heading}
            </h3>
          )}
          {data.textBottomLeft?.content && (
            <p className="text-sm 2xl:text-base font-body text-slate-700 dark:text-slate-300 leading-relaxed overflow-hidden">
              {data.textBottomLeft.content}
            </p>
          )}
        </div>

        {/* Quadrant: Unten Rechts */}
        <div className="bg-[#E5F330]/10 dark:bg-[#E5F330]/5 p-6 border-l-4 border-[#5A6000] dark:border-[#E5F330] flex flex-col gap-3 overflow-hidden">
          {data.textBottomRight?.heading && (
            <h3 className="text-lg font-headline font-bold text-[#2D2F31] dark:text-white uppercase tracking-widest shrink-0">
              {data.textBottomRight.heading}
            </h3>
          )}
          {data.textBottomRight?.content && (
            <p className="text-sm 2xl:text-base font-body text-slate-700 dark:text-slate-300 leading-relaxed overflow-hidden">
              {data.textBottomRight.content}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default GrafikTemplate1;