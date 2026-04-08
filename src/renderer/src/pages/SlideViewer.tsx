import { useState } from 'react';
import { SlideHeader } from '../components/layout/SlideHeader';
import { SlideSidebar } from '../components/layout/SlideSidebar';
import SlideRenderer from '../components/SlideRenderer';
import { AvailableLanguage } from '../lessons/index';

// Interface: lang als Variable für die aktuelle Sprache, 
interface SlideViewerProps {
  lang: AvailableLanguage;
  onLangChange: (lang: AvailableLanguage) => void;
}

export const SlideViewer = ({ lang, onLangChange }: SlideViewerProps) => {
  const [currentSlideId, setCurrentSlideId] = useState("folie_3");

  return (
    <div className="bg-surface font-body text-on-surface overflow-hidden h-screen flex flex-col">
      <SlideHeader lang={lang} onLangChange={onLangChange} />

      <div className="flex flex-1 overflow-hidden"> 
        <SlideSidebar 
          currentSlideId={currentSlideId} 
          onSlideSelect={setCurrentSlideId} 
        /> 

        {/* Angepasster Main-Bereich: 
          - overflow-hidden statt overflow-y-auto (kein Scrollen mehr erlaubt)
          - p-4 für minimalen Rand (statt p-12)
          - flex items-center justify-center zentriert den Inhalt perfekt
        */}
        <main className="flex-1 bg-surface overflow-hidden p-6 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            
            <SlideRenderer currentSlideId={currentSlideId} lang={lang} />
            
          </div>
        </main>
      </div>
    </div>
  );
};