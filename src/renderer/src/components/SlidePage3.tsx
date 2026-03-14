// src/renderer/src/components/SlidePage3.tsx

interface SlideProps {
  lang: string;
}

const SlidePage3 = ({ lang }: SlideProps) => {
  return (
    <div className="relative w-full h-full bg-white text-black overflow-hidden font-sans">
      {/* Titel-Bereich */}
      <div className="absolute top-[5%] left-[5%]">
        <span className="text-green-500 font-bold text-xl">01</span>
        <h1 className="text-4xl font-black text-green-600 uppercase leading-tight">
          {lang === 'de' ? 'Fahren aber wie geht das?' : 'Driving – but how does it work?'}
        </h1>
        <h2 className="text-xl font-bold mt-2">
          {lang === 'de' ? '1.0.2 Der „Macher“kreis nach Hebenstreit' : '1.0.2 The "Macher" circle according to Hebenstreit'}
        </h2>
      </div>

      {/* Einleitungstext */}
      <div className="absolute top-[20%] left-[5%] w-[40%] text-sm leading-relaxed">
        <p className="font-bold mb-2">
          {lang === 'de' ? '>>> PERSONENVERKEHR' : '>>> PASSENGER TRANSPORT'}
        </p>
        <p>
          {lang === 'de' 
            ? 'Täglich fahren Millionen von Menschen mit dem Auto von A nach B. Aber wie genau geht das eigentlich? Reicht es, einfach nur die Verkehrsregeln zu kennen und das Fahrzeug zu steuern?' 
            : 'Millions of people drive from A to B every day. But how exactly does that work? Is it enough just to know the traffic rules and steer the vehicle?'}
        </p>
        <p className="mt-2 italic text-gray-600">
          {lang === 'de'
            ? 'Das verkehrspsychologische Modell „Der psycho-physische Funktionskreis“ nach Benedikt von Hebenstreit beschreibt dieses Zusammenspiel.'
            : 'The traffic psychology model "The psycho-physical functional circuit" by Benedikt von Hebenstreit describes this interaction.'}
        </p>
      </div>

      {/* Der Macherkreis (Grafische Darstellung) */}
      <div className="absolute top-[10%] right-[5%] w-[45%] h-[50%] flex items-center justify-center">
        <div className="relative w-80 h-80 border-4 border-green-500 rounded-full flex items-center justify-center">
          {/* Oben: Informationen aufnehmen */}
          <div className="absolute -top-10 text-center w-full">
            <div className="bg-green-100 p-2 rounded shadow-sm border border-green-300">
              <p className="font-bold text-xs uppercase">
                {lang === 'de' ? 'Informationen aufnehmen' : 'Receiving Information'}
              </p>
              <p className="text-[10px]">{lang === 'de' ? '(Sinnesorgane)' : '(Sensory Organs)'}</p>
            </div>
          </div>
          {/* Mitte: Verarbeitung */}
          <div className="bg-white p-4 rounded-full border-2 border-green-500 shadow-lg text-center w-40">
            <p className="font-bold text-xs uppercase">
              {lang === 'de' ? 'Verarbeitung im Gehirn' : 'Processing in the Brain'}
            </p>
            <p className="text-[9px]">
              {lang === 'de' ? 'Bewusste oder automatisierte Entscheidungen' : 'Conscious or automated decisions'}
            </p>
          </div>
          {/* Unten: Reagieren */}
          <div className="absolute -bottom-10 text-center w-full">
            <div className="bg-green-100 p-2 rounded shadow-sm border border-green-300">
              <p className="font-bold text-xs uppercase">
                {lang === 'de' ? 'Reagieren/Umsetzen' : 'Reacting/Implementing'}
              </p>
              <p className="text-[10px]">{lang === 'de' ? '(Muskeln)' : '(Muscles)'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Die 3 Infoblöcke (Statistiken) */}
      <div className="absolute bottom-[20%] left-[5%] right-[5%] flex justify-between gap-4">
        <div className="flex-1 bg-gray-100 p-4 rounded-lg border-b-4 border-green-500">
          <p className="text-2xl font-black text-green-600">50 Mrd.</p>
          <p className="text-[10px] uppercase font-bold">
            {lang === 'de' ? 'Im motorisierten Individualverkehr befördert' : 'Transported in motorized individual traffic'}
          </p>
        </div>
        <div className="flex-1 bg-gray-100 p-4 rounded-lg border-b-4 border-green-500">
          <p className="text-2xl font-black text-green-600">2,73 Mrd.</p>
          <p className="text-[10px] uppercase font-bold">
            {lang === 'de' ? 'Im Eisenbahnverkehr befördert' : 'Transported in rail traffic'}
          </p>
        </div>
        <div className="flex-1 bg-gray-100 p-4 rounded-lg border-b-4 border-green-500">
          <p className="text-2xl font-black text-green-600">8,9 Mrd.</p>
          <p className="text-[10px] uppercase font-bold">
            {lang === 'de' ? 'Im Bus- und Straßenbahnverkehr befördert' : 'Transported in bus and tram traffic'}
          </p>
        </div>
      </div>

      {/* Das Beispiel (Ball-Beispiel) */}
      <div className="absolute bottom-[5%] left-[5%] w-[90%] bg-yellow-400 p-3 rounded shadow-md flex items-center gap-4">
        <div className="bg-white rounded-full p-2 font-bold text-yellow-600">!</div>
        <p className="text-xs italic">
          {lang === 'de'
            ? 'Stell dir vor, du fährst mit dem Auto und plötzlich rollt ein Ball auf die Straße. Deine Augen nehmen den Ball wahr, dein Gehirn erkennt die Gefahr und deine Muskeln treten blitzschnell auf die Bremse.'
            : 'Imagine you are driving and suddenly a ball rolls onto the street. Your eyes perceive the ball, your brain recognizes the danger and your muscles hit the brakes lightning fast.'}
        </p>
      </div>
    </div>
  );
};

export default SlidePage3;