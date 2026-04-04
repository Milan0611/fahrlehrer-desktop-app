export const SlideViewer = () => {
  // Wir erzeugen dynamisch die restlichen 19 Dummy-Folien für die Sidebar, 
  // anstatt ein veraltetes <script>-Tag zu verwenden.
  const dummySlides = Array.from({ length: 19 }, (_, i) => i + 2);

  return (
    <div className="bg-surface font-body text-on-surface overflow-hidden h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="bg-[#F6F6F9] dark:bg-[#0C0E10] flex justify-between items-center px-6 py-4 w-full z-50">
        <div className="flex items-center gap-4">
          <span className="text-xl font-black uppercase text-[#2D2F31] dark:text-white font-headline tracking-tighter">
            Module 01: Traffic Laws
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-1 text-[#5A6000] dark:text-[#E5F330] font-headline font-bold uppercase tracking-tight text-sm">
            <span>Lektion 01: Grundlagen der Verkehrssicherheit</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-[#E1E2E6] dark:hover:bg-[#2D2F31] transition-colors scale-95 duration-150">
              <span className="material-symbols-outlined text-[#757779] dark:text-[#ACADAF]">help_outline</span>
            </button>
            <button className="p-2 hover:bg-[#E1E2E6] dark:hover:bg-[#2D2F31] transition-colors scale-95 duration-150">
              <span className="material-symbols-outlined text-[#757779] dark:text-[#ACADAF]">close</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* SideNavBar */}
        <aside className="bg-[#E7E8EB] dark:bg-[#0C0E10] flex flex-col w-80 h-full overflow-y-auto border-r-0 z-40">
          <div className="p-6 sticky top-0 bg-[#E7E8EB] dark:bg-[#0C0E10] z-10">
            <h2 className="text-lg font-black font-['Space_Grotesk'] text-[#2D2F31] dark:text-white uppercase tracking-tighter">Lesson Progress</h2>
            <p className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-[#5A6000] dark:text-[#E5F330] mt-1">Kinetic Precision Mode</p>
          </div>
          
          <nav className="flex-1 px-0">
            {/* Folie 1 (Active) */}
            <a className="flex items-center gap-4 px-6 py-4 bg-[#E5F330] text-[#424600] font-bold border-r-4 border-[#5A6000] transition-all duration-200 ease-in-out group" href="#">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              <span className="font-['Manrope'] text-sm">Folie 1: Dummytitel</span>
            </a>
            
            {/* Generierte restliche Folien */}
            <div className="flex flex-col">
              {dummySlides.map((num) => (
                <a key={num} href="#" className="flex items-center gap-4 px-6 py-4 text-[#2D2F31] dark:text-[#ACADAF] opacity-70 hover:bg-[#DBDDE0] dark:hover:bg-[#1A1C1E] transition-all duration-200 ease-in-out group">
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">play_arrow</span>
                  <span className="font-['Manrope'] text-sm font-semibold">Folie {num}: Dummytitel</span>
                </a>
              ))}
            </div>
          </nav>
          
          <div className="p-6 mt-auto bg-[#DBDDE0] dark:bg-[#1A1C1E] flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[#5A6000]">account_circle</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold font-headline uppercase text-on-surface">Instructor Mode</span>
              <span className="text-[10px] text-outline font-label uppercase">Session Active</span>
            </div>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 bg-surface overflow-y-auto p-8 lg:p-12">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            
            {/* Slide Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2">
                  <span className="w-12 h-1 bg-primary"></span>
                  <span className="font-label font-bold text-xs uppercase tracking-[0.3em] text-primary">Slide 01 // Introduction</span>
                </div>
                <h1 className="font-headline font-black text-6xl md:text-8xl text-on-surface leading-[0.9] tracking-tighter uppercase">
                  1.0 FAHREN – <br />
                  <span className="text-primary-dim">ABER WIE GEHT DAS?</span>
                </h1>
              </div>
              <div className="lg:col-span-4 flex justify-end items-start pt-4">
                <div className="bg-inverse-surface p-6 text-surface-container-lowest asymmetric-clip w-full lg:w-48 aspect-square flex flex-col justify-between">
                  <span className="material-symbols-outlined text-4xl text-primary-container">speed</span>
                  <span className="font-headline font-bold text-sm tracking-widest uppercase">Precision Start</span>
                </div>
              </div>
            </div>

            {/* Bento Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Primary Instructional Card */}
              <div className="md:col-span-7 flex flex-col gap-8">
                <div className="relative group bg-surface-container-lowest overflow-hidden">
                  <img alt="Classroom Visual" className="w-full aspect-video object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoqMQQfclyqCA04CqyD85UrQiHG-g3VoHd7KYYnvbzmKU_SyBpmtuvsI0ItzOdIqrnY7Ul2JtwDlKQJcQduCQwtSbicZzjrw4lL2olbKfKZT_JhPgBzDa3F0E5j_0xmfD0lAxcSw8KVpma7bM0d9aR-Sgc2CAClEEEtotJpFJALB7bayVSyFtZZLPM-BULfJJLeLb1cUqFxOKcoX3SPzHeubQQUZMOTr2nC6ZdALkCrhn3bw3aX8AY3zCQRYddtvNb3TkYsfR9YkWm" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                  <div className="absolute bottom-0 right-0 p-4 bg-primary text-on-primary-fixed font-headline font-bold uppercase text-xs">
                    Ref. Image 1.0.A
                  </div>
                </div>
                <div className="flex flex-col gap-6 pr-12">
                  <p className="font-body text-xl leading-relaxed text-on-surface-variant font-medium">
                    Die Teilnahme am Straßenverkehr erfordert ständige Vorsicht und gegenseitige Rücksicht. Wer am Verkehr teilnimmt, hat sich so zu verhalten, dass kein anderer geschädigt, gefährdet oder mehr, als nach den Umständen unvermeidbar, behindert oder belästigt wird.
                  </p>
                  <div className="flex flex-col gap-4 border-l-4 border-primary pl-6 py-2">
                    <h3 className="font-headline font-bold text-xl uppercase tracking-tight">Kernpunkte der Sicherheit:</h3>
                    <ul className="flex flex-col gap-3 font-label text-sm font-semibold uppercase tracking-wide">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary"></span>
                        Vorausschauendes Handeln
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary"></span>
                        Einschätzung von Gefahrensituationen
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary"></span>
                        Verantwortung für schwächere Verkehrsteilnehmer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Side Info Panel */}
              <div className="md:col-span-5 flex flex-col gap-8">
                <div className="bg-surface-container-high p-8 flex flex-col gap-6">
                  <h4 className="font-headline font-black text-2xl uppercase tracking-tighter">Trainer Notizen</h4>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Diskutieren Sie mit den Schülern das Konzept der "Defensiven Fahrweise". Warum ist psychologische Stabilität im Straßenverkehr genauso wichtig wie technische Beherrschung des Fahrzeugs?
                  </p>
                  <button className="kinetic-gradient w-full py-4 px-6 text-on-primary-fixed font-headline font-black uppercase tracking-widest text-sm flex justify-between items-center group">
                    <span>Interaktive Übung</span>
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </button>
                </div>
                <div className="bg-primary-container p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                    <span className="font-headline font-bold uppercase tracking-tight text-on-primary-container">Paragraph 1 StVO</span>
                  </div>
                  <p className="font-body font-bold text-on-primary-container italic">
                    "Die Teilnahme am Straßenverkehr erfordert ständige Vorsicht und gegenseitige Rücksicht."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-low p-6 flex flex-col gap-2">
                    <span className="font-headline font-black text-3xl text-primary-dim">0%</span>
                    <span className="font-label text-[10px] font-black uppercase tracking-tighter opacity-60">Abschlussquote</span>
                  </div>
                  <div className="bg-surface-container-low p-6 flex flex-col gap-2">
                    <span className="font-headline font-black text-3xl text-primary-dim">12m</span>
                    <span className="font-label text-[10px] font-black uppercase tracking-tighter opacity-60">Soll-Zeit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation / Control Bar */}
            <div className="mt-8 border-t border-outline/10 pt-12 flex justify-between items-center">
              <button className="flex items-center gap-4 text-outline font-headline font-bold uppercase tracking-widest text-xs hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
                Zurück
              </button>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-primary"></div>
                <div className="w-2 h-2 bg-surface-container-highest"></div>
                <div className="w-2 h-2 bg-surface-container-highest"></div>
                <div className="w-2 h-2 bg-surface-container-highest"></div>
                <div className="w-2 h-2 bg-surface-container-highest"></div>
              </div>
              <button className="flex items-center gap-4 text-primary font-headline font-black uppercase tracking-widest text-xs group">
                Nächste Folie
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">chevron_right</span>
              </button>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
};