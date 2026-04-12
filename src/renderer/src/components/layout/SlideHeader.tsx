import { LangDropdown } from '../atoms/LangDropdown';
import { AvailableLanguage } from '../../lessons/index';

// Der Header definiert, was er von oben erwartet
interface SlideHeaderProps {
  lang: AvailableLanguage;
  onLangChange: (lang: AvailableLanguage) => void;
  onClose: () => void;
}

export const SlideHeader = ({ lang, onLangChange, onClose }: SlideHeaderProps) => {
  return (
    <header className="bg-[#F6F6F9] dark:bg-[#0C0E10] flex justify-between items-center px-6 py-4 w-full z-50">
      <div className="flex items-center gap-4">
        <span className="text-xl font-black uppercase text-[#2D2F31] dark:text-white font-headline tracking-tighter">
          Führerscheinklasse B
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-1 text-[#5A6000] dark:text-[#E5F330] font-headline font-bold uppercase tracking-tight text-sm">
          {/* <span>Lektion 01: Grundlagen der Verkehrssicherheit</span> */} {/* Erstmal auskommentiert als Design Entscheidung */}
        </div>
        
        {/* Hier sitzt das Dropdown jetzt fest verankert im Layout! */}
        <LangDropdown currentLang={lang} onChange={onLangChange} />

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#E1E2E6] dark:hover:bg-[#2D2F31] transition-colors scale-95 duration-150">
            <span className="material-symbols-outlined text-[#757779] dark:text-[#ACADAF]">help_outline</span>
          </button>
          <button onClick={onClose} className="p-2 hover:bg-[#E1E2E6] dark:hover:bg-[#2D2F31] transition-colors scale-95 duration-150">
            <span className="material-symbols-outlined text-[#757779] dark:text-[#ACADAF]">close</span>
          </button>
        </div>
      </div>
    </header>
  );
};