import { useState } from 'react';
import { Dashboard } from './pages/Dashboard';
import { SlideViewer } from './pages/SlideViewer';

/**
 * Root-Komponente der Applikation.
 * Fungiert als zustandsbasierter Router auf oberster Ebene und steuert den Wechsel 
 * zwischen der Dashboard-Ansicht und der aktiven Lektionsansicht (SlideViewer).
 */
function App() {
  /**
   * Top-Level Routing-State.
   * Bestimmt, welche Hauptansicht im Viewport aktuell gerendert wird.
   */
  const [currentView, setCurrentView] = useState<"dashboard" | "slideViewer">("dashboard");
  
  /**
   * Globaler Applikationszustand für die aktuell ausgewählte Lektion.
   * Wird durch Aktionen im Dashboard gesetzt und an den SlideViewer weitergereicht.
   * Ein initialer Fallback-Wert stellt sicher, dass undefinierte Zustände vermieden werden.
   */
  const [activeLesson, setActiveLesson] = useState<number>(1);

  return (
    <div className="w-screen h-screen relative bg-surface overflow-hidden"> 
      {currentView === "dashboard" && (
        <Dashboard 
          /**
           * Callback-Handler für die Lektionsauswahl.
           * Datenfluss: Nimmt die selektierte ID aus der Child-Komponente entgegen,
           * persistiert diese im Root-State und triggert daraufhin den View-Wechsel.
           */
          onStartLesson={(lessonId) => {
            setActiveLesson(lessonId);
            setCurrentView("slideViewer");
          }} 
        />
      )}

      {currentView === "slideViewer" && (
        <SlideViewer 
          /**
           * Injektion der aktiven Lektions-ID zur Datenbeschaffung in den Sub-Komponenten.
           */
          lessonId={activeLesson} 
          /**
           * Callback-Handler zum Beenden der Lektion.
           * Setzt das Routing auf die initiale Dashboard-Ansicht zurück.
           */
          onCloseLesson={() => setCurrentView("dashboard")} 
        />
      )}
    </div>
  );
}

export default App;