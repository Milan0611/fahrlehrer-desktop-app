interface DashboardProps {
  // Set Methode für die aktuelle lessonId, damit jenachdem welche Lektion man anklickt auch die korrekte lessonId übergeben wird 
  onStartLesson: (lessonId: number) => void;
}

// Array mit ID, Titel und icon aller 14 Lektionen. Daraus werden die anklickbaren Buttons für die Lektion generiert. 
const theoryModules = [
  { id: 1, title: "Persönliche Voraussetzungen", icon: "psychology" },
  { id: 2, title: "Rechtliche Rahmenbedingungen", icon: "gavel" },
  { id: 3, title: "Verkehrszeichen", icon: "signpost" },
  { id: 4, title: "Straßenverkehrssystem", icon: "hub" },
  { id: 5, title: "Vorfahrt", icon: "alt_route" },
  { id: 6, title: "Verkehrsregelungen", icon: "traffic" },
  { id: 7, title: "Geschwindigkeit", icon: "speed" },
  { id: 8, title: "Abstand und Überholen", icon: "space_bar" },
  { id: 9, title: "Verkehrsbeobachtung", icon: "visibility" },
  { id: 10, title: "Ruhender Verkehr", icon: "local_parking" },
  { id: 11, title: "Verhalten in besonderen Situationen", icon: "warning" },
  { id: 12, title: "Lebenslanges Lernen", icon: "school" },
  { id: 13, title: "Technische Bedingungen", icon: "build" },
  { id: 14, title: "Fahren mit Anhänger", icon: "rv_hookup" }
];

export const Dashboard = ({ onStartLesson }: DashboardProps) => {
  return (
    <div className="bg-surface font-body text-on-surface flex h-screen w-full">
      <aside className="fixed left-0 top-0 h-screen flex flex-col bg-slate-50 dark:bg-[#0C0E10] w-64 border-r-0 rounded-none z-50">
        <div className="p-8">
          <h1 className="text-2xl font-black italic tracking-tighter text-[#0C0E10] dark:text-white uppercase mb-1">
            Next Level Learning
          </h1>
          <p className="font-headline font-bold tracking-tight text-xs text-on-surface-variant">Theory Dashboard</p>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-8">
          <a className="flex items-center gap-4 px-4 py-4 bg-[#E5F330] text-[#424600] font-bold transition-all duration-150 scale-95 active:duration-75" href="#">
            <span className="material-symbols-outlined">directions_car</span>
            <span className="font-headline uppercase text-sm tracking-widest">Auto (Klasse B)</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-4 text-[#2D2F31] dark:text-slate-400 hover:bg-[#E1E2E6] dark:hover:bg-slate-800 transition-colors" href="#">
            <span className="material-symbols-outlined">sports_motorsports</span>
            <span className="font-headline uppercase text-sm tracking-widest">Motorrad (Klasse A)</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-4 text-[#2D2F31] dark:text-slate-400 hover:bg-[#E1E2E6] dark:hover:bg-slate-800 transition-colors" href="#">
            <span className="material-symbols-outlined">rv_hookup</span>
            <span className="font-headline uppercase text-sm tracking-widest">Anhänger (Klasse BE)</span>
          </a>
        </nav>
        <div className="p-4 border-t border-surface-container bg-[#E7E8EB] dark:bg-[#0C0E10]">
          <button className="w-full kinetic-gradient py-4 font-headline font-bold text-on-primary-fixed uppercase tracking-widest text-sm mb-4">Zur Lektionsansicht wechseln</button>
          <div className="space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-surface-container transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">settings</span> Einstellungen
            </a>
            <a className="flex items-center gap-3 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-surface-container transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">language</span> DE/EN Umschalter
            </a>
            <a className="flex items-center gap-3 px-4 py-2 text-xs font-semibold text-error hover:bg-surface-container transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">logout</span> Abmelden
            </a>
          </div>
        </div>
      </aside>

      {/* Hauptbereich: h-screen und overflow-y-auto ermöglichen das Scrollen der Inhalte */}
      <main className="ml-64 flex-1 flex flex-col h-screen overflow-y-auto relative">
        <header className="flex items-center justify-between px-8 w-full h-16 border-b-2 border-[#5A6000] bg-white dark:bg-[#0C0E10] sticky top-0 z-40 shrink-0">
          <div className="flex items-center gap-8">
            <span className="font-headline font-black text-xl text-inverse-surface tracking-tighter italic">DRIVER THEORY PRO</span>
            <nav className="hidden md:flex gap-6">
              <a className="font-headline uppercase text-sm tracking-widest text-[#5A6000] dark:text-[#D4E117] border-b-2 border-[#5A6000] h-16 flex items-center" href="#">Klasse B</a>
              <a className="font-headline uppercase text-sm tracking-widest text-slate-500 hover:text-[#0C0E10] h-16 flex items-center transition-all" href="#">Klasse A</a>
              <a className="font-headline uppercase text-sm tracking-widest text-slate-500 hover:text-[#0C0E10] h-16 flex items-center transition-all" href="#">Klasse BE</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <input className="bg-surface-container-highest border-b-2 border-transparent focus:border-[#5A6000] px-4 py-1 text-xs font-headline tracking-widest outline-none w-48" placeholder="LEKTIONEN SUCHEN..." type="text" />
            </div>
            <div className="flex items-center gap-4 border-l border-surface-container pl-6">
              <button className="font-headline font-bold text-xs tracking-widest text-on-surface hover:text-primary transition-colors">DE/EN</button>
              <span className="material-symbols-outlined text-on-surface cursor-pointer hover:text-primary transition-colors">notifications</span>
              <div className="flex items-center gap-3 pl-2">
                <img 
                    alt="Instructor Avatar" 
                    className="w-8 h-8 rounded-full border border-surface-container-highest transition-all duration-300" 
                    src="https://ui-avatars.com/api/?name=Fahrlehrer&background=E5F330&color=424600&bold=true" 
                />
                <span className="material-symbols-outlined text-on-surface cursor-pointer">account_circle</span>
              </div>
            </div>
          </div>
        </header>

        <section className="relative bg-inverse-surface py-20 px-12 overflow-hidden slant-bg shrink-0">
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-primary-fixed font-headline font-black text-6xl tracking-tighter italic uppercase mb-4 leading-none">Willkommen zurück,<br />Fahrlehrer.</h2>
            <p className="text-surface-container-lowest font-body text-xl max-w-2xl font-light leading-relaxed">Bereit, den Erfolg deiner Schüler zu beschleunigen? Dein Theorie-Lehrplan ist mit den neuesten Vorschriften von 2024 aktualisiert. </p>
            <div className="mt-10 flex gap-6">
              <button className="kinetic-gradient px-10 py-5 font-headline font-black text-on-primary-fixed uppercase tracking-widest text-lg flex items-center gap-3">Aktuelle Lektion starten <span className="material-symbols-outlined">play_arrow</span></button>
              <button className="border-2 border-primary-fixed text-primary-fixed px-10 py-5 font-headline font-black uppercase tracking-widest text-lg hover:bg-primary-fixed hover:text-on-primary-fixed transition-all">Kursberichte</button>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
            <div className="w-full h-full kinetic-gradient" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }}></div>
          </div>
        </section>

        {/* Die Kacheln werden korrekt bis nach unten gerendert und sind scrollbar */}
        <section className="p-12 -mt-16 relative z-20 pb-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h3 className="font-headline font-black text-4xl text-inverse-surface uppercase tracking-tighter">Lektion der Führerscheinklasse B</h3>
              <p className="text-on-surface-variant font-headline uppercase text-sm tracking-widest font-bold">14 Kernmodule (Klasse B)</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-white p-3 hover:bg-primary-container transition-colors shadow-sm"><span className="material-symbols-outlined">grid_view</span></button>
              <button className="bg-white p-3 hover:bg-primary-container transition-colors shadow-sm"><span className="material-symbols-outlined">list</span></button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {theoryModules.map((module) => (
              <div 
                key={module.id}
                onClick={() => onStartLesson(module.id)} 
                className="bg-white p-6 border-l-4 border-surface-container group hover:border-primary transition-all cursor-pointer shadow-sm flex flex-col justify-between min-h-[200px]"
              >
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">{module.icon}</span>
                  <span className="font-headline font-black text-2xl text-surface-container">
                    {String(module.id).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h5 className="font-headline font-bold text-lg uppercase tracking-tighter mb-2 leading-tight">{module.title}</h5>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Modul starten</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <button className="fixed bottom-8 right-8 w-16 h-16 kinetic-gradient flex items-center justify-center shadow-2xl group transition-transform hover:scale-110 active:scale-95 z-50">
        <span className="material-symbols-outlined text-on-primary-fixed text-3xl font-bold group-hover:rotate-90 transition-transform">add</span>
      </button>
    </div>
  );
};