import { useState } from 'react';
import { SlideHeader } from '../components/layout/SlideHeader';
import { SlideSidebar } from '../components/layout/SlideSidebar';
import SlideRenderer from '../components/SlideRenderer';
import { AvailableLanguage } from '../lessons/LessonLanguages';

interface SlideViewerProps {
  lessonId: number; 
  onCloseLesson: () => void;
}

/**
 * Orchestrator-Komponente für die gesamte Lektionsansicht.
 * Fungiert als State-Container für die aktuell ausgewählte Folie und die aktive Sprache.
 * Verknüpft die isolierten UI-Komponenten (Header, Sidebar, Renderer) miteinander, 
 * indem sie Zustand und Mutator-Funktionen über Props nach unten reicht (Props Drilling).
 */
export const SlideViewer = ({ lessonId, onCloseLesson }: SlideViewerProps) => {
  
  /**
   * Lokaler State für die Navigation.
   * Startet initial mit einem Fallback-Wert. Dieser Wert wird primär durch Callbacks 
   * aus der Sidebar (onSlideSelect) manipuliert.
   */
  const [currentSlideId, setCurrentSlideId] = useState("folie_3");

  /**
   * Lokaler State für die Lokalisierung.
   * Wurde mittels 'Lifting State Up' in diesen gemeinsamen Parent gehoben, da sowohl der 
   * Header (Mutator via Dropdown) als auch der Renderer (Consumer für die JSON-Daten)
   * Zugriff auf diesen Zustand benötigen.
   */
  const [lang, setLang] = useState<AvailableLanguage>("de");

  return (
    <div className="bg-surface font-body text-on-surface overflow-hidden h-screen flex flex-col">

      {/* Header erhält Leserechte für die Sprache sowie die Setter-Funktion zum Ändern */}
      <SlideHeader 
      lang={lang} 
      onLangChange={setLang} 
      onClose={onCloseLesson} />

      <div className="flex flex-1 overflow-hidden"> 
        {/* Sidebar benötigt die Lektion für den JSON-Fetch, die aktuelle ID für das Highlighting
            sowie die Setter-Funktion, um Navigations-Events nach oben zu funken. */}
        <SlideSidebar 
          currentLessonId={lessonId}
          currentSlideId={currentSlideId} 
          onSlideSelect={setCurrentSlideId} 
        /> 

        {/* Main-Bereich */}
        <main className="flex-1 bg-surface overflow-hidden p-6 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            
            {/* Renderer ist ein reiner Consumer (Read-Only). Er benötigt nur die Parameter, 
                um die korrekte JSON abzurufen und die Template-Weiche zu stellen. */}
            <SlideRenderer
            currentLessonId={lessonId} 
            currentSlideId={currentSlideId} 
            lang={lang} />
            
          </div>
        </main>
      </div>
    </div>
  );
};
