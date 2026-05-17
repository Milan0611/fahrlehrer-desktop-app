import { getLessonData } from '../../lessons/LessonLanguages';

interface SlideSidebarProps {
  currentLessonId: number;
  currentSlideId: string;
  onSlideSelect: (id: string) => void;
}

/**
 * Seitliche Navigation zur Auswahl spezifischer Folien innerhalb einer Lektion.
 * Generiert die Navigationseinträge dynamisch aus der zentralen JSON-Registry.
 */
export const SlideSidebar = ({ currentLessonId, currentSlideId, onSlideSelect }: SlideSidebarProps) => {

  /**
   * Architektur-Entscheidung: 
   * Die Sidebar lädt die Lektionsdaten hartcodiert in "de" (Deutsch). 
   * Dies stellt sicher, dass der Fahrlehrer (Instructor Mode) die Navigation immer
   * in seiner Muttersprache bedienen kann, unabhängig davon, auf welche Sprache 
   * der Haupt-Renderer für den Fahrschüler aktuell eingestellt ist.
   */
  const lessonData = getLessonData("de", currentLessonId); 

  /**
   * Zustandssicherung der aktiven ID:
   * Verhindert fehlerhaftes Highlighting, falls der Parent-State eine veraltete 
   * oder ungültige ID übergibt. Die Sidebar sichert sich iterativ ab und fällt auf 
   * das erste Array-Element zurück, falls die gesuchte ID nicht existiert.
   */
  const isValidSlideId = lessonData.slides.some(slide => slide.id === currentSlideId);
  const activeId = isValidSlideId ? currentSlideId : lessonData.slides[0]?.id;

  return (
    <aside className="bg-[#E7E8EB] dark:bg-[#0C0E10] flex flex-col w-80 h-full overflow-y-auto border-r-0 z-40">
      <div className="p-6 sticky top-0 bg-[#E7E8EB] dark:bg-[#0C0E10] z-10">
        <h2 className="text-lg font-black font-['Space_Grotesk'] text-[#2D2F31] dark:text-white uppercase tracking-tighter">Lektion {currentLessonId}:</h2>
        <p className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-[#5A6000] dark:text-[#E5F330] mt-1">Grundlagen der Verkehrssicherheit</p>
      </div>
      
      <nav className="flex-1 px-0">
        <div className="flex flex-col">
          
          {/* Dynamisches Rendering der Navigationseinträge basierend auf der JSON-Struktur */}
          {lessonData.slides.map((slide, index) => {
            
            const slideId = slide.id;
            const isActive = activeId === slideId;
            const folienNummer = index + 1;

            return (
              <button 
                key={slideId} 
                onClick={() => onSlideSelect(slideId)}
                className={`w-full flex items-center gap-4 px-6 py-4 font-bold transition-all duration-200 ease-in-out group ${
                  isActive 
                    ? "bg-[#E5F330] text-[#424600] border-r-4 border-[#5A6000]" 
                    : "text-[#2D2F31] dark:text-[#ACADAF] opacity-70 hover:bg-[#DBDDE0] dark:hover:bg-[#1A1C1E]"
                }`}
              >
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>play_arrow</span>
                
                <span className="font-['Manrope'] text-sm text-left font-semibold">
                  Folie {folienNummer}: {slide.content.title}
                </span>
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
          <span className="text-xs font-bold font-headline uppercase text-[#2D2F31] dark:text-slate-400">Instructor Mode</span>
          <span className="text-[10px] font-label uppercase text-[#2D2F31] dark:text-slate-400">Session Active</span>
        </div>
      </div>
    </aside>
  );
};