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
    <div className="w-full h-full bg-transparent p-8 flex flex-col overflow-hidden">
      
      {/* Header Bereich */}
      <div className="border-b-2 border-slate-200 pb-4 mb-12 shrink-0">
        <h2 className="text-3xl font-black font-headline text-[#2D2F31] uppercase italic tracking-tighter">
          {data.title}
        </h2>
      </div>

      {/* Content Bereich */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-8 min-h-0">
        
        {/* Quadrant: Oben Links */}
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

        {/* Quadrant: Oben Rechts (Atom) */}
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

        {/* Quadrant: Unten Rechts */}
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