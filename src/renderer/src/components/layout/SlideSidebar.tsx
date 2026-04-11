// Interface für die SlideSidebar: Beinhaltet die aktuelle SlideId und die Setter.Funktion, um sie SlideId zu ändern/setzen
// Ein Interface in TypeScript/react definiert genau, welche welche Daten diese Komponente von anderen (oberen) Komponenten empfangen darf 
// SlideViewer.tsx erstellt eine Ebene drüber den useState für die SlideId und übergibt diesen über das Interface an SlideSidebar.tsx
interface SlideSidebarProps {
    currentSlideId: string; // muss ein string sein
    onSlideSelect: (id: string) => void; // muss einen string entgegennehmen (id) und gibt nichts zurück (void)
}

// Die SlideSidebar wird als Objekt, dass von dem Interface SlideSidebarProps erbt, erstellt  
// Dadurch können wir direkt auf die von oben übergebenen Elemente (SlideId useState von SlideViewer.tsx, also currentSlideId und onSlideSelect) zugreifen
export const SlideSidebar = ({ currentSlideId, onSlideSelect }: SlideSidebarProps) => {

  // Die Dummy-Slides müssen raus
  const dummySlides = Array.from({ length: 19 }, (_, i) => i + 2);

  return (
    <aside className="bg-[#E7E8EB] dark:bg-[#0C0E10] flex flex-col w-60 h-full overflow-y-auto border-r-0 z-40">
      <div className="p-6 sticky top-0 bg-[#E7E8EB] dark:bg-[#0C0E10] z-10">
        <h2 className="text-lg font-black font-['Space_Grotesk'] text-[#2D2F31] dark:text-white uppercase tracking-tighter">Lesson Progress</h2>
        <p className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-[#5A6000] dark:text-[#E5F330] mt-1">Kinetic Precision Mode</p>
      </div>
      
      <nav className="flex-1 px-0">
        {/* Folie 1 (Fest verdrahtet zum Testen) */}
        <button 
          onClick={() => onSlideSelect("folie_1")} // "() =>" sorgt, dafür dass der Befehl erst beim Klick und nicht sofort ausgeführt wird
          className={`w-full flex items-center gap-4 px-6 py-4 font-bold transition-all duration-200 ease-in-out group ${
            currentSlideId === "folie_1" 
              ? "bg-[#E5F330] text-[#424600] border-r-4 border-[#5A6000]" 
              : "text-[#2D2F31] dark:text-[#ACADAF] opacity-70 hover:bg-[#DBDDE0] dark:hover:bg-[#1A1C1E]"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]" style={currentSlideId === "folie_1" ? { fontVariationSettings: "'FILL' 1" } : {}}>play_arrow</span>
          <span className="font-['Manrope'] text-sm text-left">Folie 1: Dummytitel</span>
        </button>
        
        {/* Generierte restliche Folien */}
        <div className="flex flex-col">
          {dummySlides.map((num) => {
            const slideId = `folie_${num}`;
            const isActive = currentSlideId === slideId;

            return (
              <button 
                key={num} 
                onClick={() => onSlideSelect(slideId)}
                className={`w-full flex items-center gap-4 px-6 py-4 font-bold transition-all duration-200 ease-in-out group ${
                  isActive 
                    ? "bg-[#E5F330] text-[#424600] border-r-4 border-[#5A6000]" 
                    : "text-[#2D2F31] dark:text-[#ACADAF] opacity-70 hover:bg-[#DBDDE0] dark:hover:bg-[#1A1C1E]"
                }`}
              >
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>play_arrow</span>
                <span className="font-['Manrope'] text-sm text-left font-semibold">Folie {num}: Dummytitel</span>
              </button>
            )
          })}
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
  );
};