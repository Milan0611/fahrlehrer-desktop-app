import { useState } from 'react';
import { SlideHeader } from '../components/layout/SlideHeader';
import { SlideSidebar } from '../components/layout/SlideSidebar';
import SlideRenderer from '../components/SlideRenderer';
import { AvailableLanguage } from '../lessons/index';

export const SlideViewer = () => {
  const [currentSlideId, setCurrentSlideId] = useState("folie_3");

  // Der useState für die Sprache wurde von App.tsx hier runter gezogen, da Spracheänderung nur die Folien und nicht die ganze App betreffen
  // Der useStae kann aber nicht tiefer gehen, da SlideHeader (mit dem LangDropdown) und SlideRenderer (mit den Folieninhalten) miteinander kommunierzieren müssen 
  // und SlideViewer der nächste gemeinsame parent istö
  const [lang, setLang] = useState<AvailableLanguage>("de");

  return (
    <div className="bg-surface font-body text-on-surface overflow-hidden h-screen flex flex-col">

        {/* Hier wird sowohl die aktuelle Sprache, als auch die Setter-Funktion zum setzen der Sprache übergeben, 
        da man mit dem LangDropdown im SlideHeader die Sprache ändern können soll */}
      <SlideHeader lang={lang} onLangChange={setLang} />

      <div className="flex flex-1 overflow-hidden"> 
        {/* Hier wird sowohl die aktuelle SlideId, als auch die Setter-Funktion zum setzen der SlideId übergeben, 
        da man beim welcheln der Folien die SlideId ändern kann und dadurch dann der entsprechende Ihalt passend zur neuen SlideId angezeigt wird */}
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
            
            {/* Hier wird nur die aktuelle SlideId und Sprache ohen Setter-Funktionen übergeben, da der SlideRenderer diese Informationen nur braucht, 
            um abzulesen welche Folie in welcher Sprache angezeigt werden soll*/}
            <SlideRenderer currentSlideId={currentSlideId} lang={lang} />
            
          </div>
        </main>
      </div>
    </div>
  );
};