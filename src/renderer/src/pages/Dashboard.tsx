// Interface für den Empfang der Prop
interface DashboardProps {
  onStartLesson: (lessonId: number) => void;
}

export const Dashboard = ({ onStartLesson }: DashboardProps) => {
  return (
    <div className="bg-surface font-body text-on-surface flex min-h-[1024px]">
      <aside className="fixed left-0 top-0 h-full flex flex-col bg-slate-50 dark:bg-[#0C0E10] w-64 border-r-0 rounded-none z-50">
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

      <main className="ml-64 flex-1 flex flex-col min-h-[1024px]">
        <header className="flex items-center justify-between px-8 w-full h-16 border-b-2 border-[#5A6000] bg-white dark:bg-[#0C0E10] sticky top-0 z-40">
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

        <section className="relative bg-inverse-surface py-20 px-12 overflow-hidden slant-bg">
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

        <section className="p-12 -mt-16 relative z-20">
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
            
            <div onClick={() => onStartLesson(1)} 
            className="bg-white p-6 border-l-4 border-primary-fixed group hover:border-primary transition-all cursor-pointer shadow-sm flex flex-col justify-between min-h-[200px]">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-primary transition-colors">psychology</span>
                <span className="font-headline font-black text-2xl text-surface-container">01</span>
              </div>
              <div>
                <h5 className="font-headline font-bold text-lg uppercase tracking-tighter mb-2 leading-tight">Persönliche Voraussetzungen</h5>
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Modul starten</p>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-surface-container group hover:border-primary transition-all cursor-pointer shadow-sm flex flex-col justify-between min-h-[200px]">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">gavel</span>
                <span className="font-headline font-black text-2xl text-surface-container">02</span>
              </div>
              <div>
                <h5 className="font-headline font-bold text-lg uppercase tracking-tighter mb-2 leading-tight">Rechtliche Rahmenbedingungen</h5>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Gesperrt</p>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-surface-container group hover:border-primary transition-all cursor-pointer shadow-sm flex flex-col justify-between min-h-[200px]">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">signpost</span>
                <span className="font-headline font-black text-2xl text-surface-container">03</span>
              </div>
              <div>
                <h5 className="font-headline font-bold text-lg uppercase tracking-tighter mb-2 leading-tight">Verkehrszeichen</h5>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Nicht gestartet</p>
              </div>
            </div>

            <div className="bg-inverse-surface p-6 flex flex-col justify-between group cursor-pointer shadow-lg border-l-4 border-primary-fixed min-h-[200px]">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">hub</span>
                <span className="font-headline font-black text-2xl text-on-surface-variant">04</span>
              </div>
              <div>
                <h5 className="font-headline font-black text-white text-lg uppercase tracking-tighter mb-2 leading-tight">Straßenverkehrs system</h5>
                <div className="flex items-center gap-2 text-primary-fixed">
                  <span className="text-[10px] font-headline font-bold tracking-widest">JETZT FORTSETZEN</span>
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <button className="fixed bottom-8 right-8 w-16 h-16 kinetic-gradient flex items-center justify-center shadow-2xl group transition-transform hover:scale-110 active:scale-95 z-50">
        <span className="material-symbols-outlined text-on-primary-fixed text-3xl font-bold group-hover:rotate-90 transition-transform">add</span>
      </button>
    </div>
  );
};