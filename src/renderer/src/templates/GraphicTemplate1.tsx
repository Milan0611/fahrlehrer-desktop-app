import { StatBlock } from '../components/atoms/StatBlock';
import { Macherkreis } from '../components/atoms/Macherkreis';

interface Graphic1Props {
  data: any;
}

const GraphicTemplate1 = ({ data }: Graphic1Props) => {
  return (
    <div className="relative w-full h-full bg-white p-12 font-sans border-[12px] border-next-level-green rounded-[2.5rem] shadow-2xl flex flex-col justify-between">
      
      {/* Header Bereich */}
      <div className="flex justify-between items-start">
        <div className="max-w-xl">
          <h1 className="text-6xl font-black text-green-700 uppercase italic tracking-tighter">
            {data.title}
          </h1>
          <p className="text-2xl font-bold text-gray-500 mt-2">{data.subtitle}</p>
        </div>
        <div className="bg-next-level-green text-white font-black p-4 rounded-lg text-3xl italic">01</div>
      </div>

      {/* Content Bereich */}
      <div className="flex items-center gap-12 flex-grow py-8">
        <div className="w-1/2 space-y-6">
          <p className="text-xl leading-snug font-medium text-gray-800 border-l-8 border-green-200 pl-6">
            {data.intro}
          </p>
          <div className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-100 shadow-sm italic text-gray-600">
            {data.model_desc}
          </div>
        </div>

        {/* Hier sitzt unser neues Atom und bekommt seine Daten aus dem JSON! */}
        <div className="w-1/2 flex justify-center">
          <Macherkreis data={data.doing_cycle} />
        </div>
      </div>

      {/* Footer mit Stats */}
      <div className="space-y-6">
        <div className="flex gap-4">
          {data.stats.map((stat: any, i: number) => (
            <StatBlock key={i} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Ball-Beispiel Box */}
        <div className="bg-yellow-400 p-5 rounded-2xl font-bold flex items-center gap-6 shadow-lg border-b-4 border-yellow-600">
          <span className="text-4xl animate-bounce">⚽</span>
          <p className="text-sm uppercase tracking-tight leading-tight">{data.example}</p>
        </div>
      </div>
    </div>
  );
};

export default GraphicTemplate1;