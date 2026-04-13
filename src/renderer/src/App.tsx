import { useState } from 'react';
import { Dashboard } from './pages/Dashboard';
import { SlideViewer } from './pages/SlideViewer';

function App() {
  const [currentView, setCurrentView] = useState<"dashboard" | "slideViewer">("dashboard");
  
  // NEU: Das Kurzzeitgedächtnis für die angeklickte Lektion. (Startwert "l1" als Fallback)
  const [activeLesson, setActiveLesson] = useState<number>(1);

  return (
    <div className="w-screen h-screen relative bg-surface overflow-hidden"> 
      {currentView === "dashboard" && (
        <Dashboard 
          // Die Fernbedienung nimmt jetzt einen Parameter (lessonId) entgegen!
          onStartLesson={(lessonId) => {
            setActiveLesson(lessonId);     // 1. Merke dir die ID ("l1", "l2", etc.)
            setCurrentView("slideViewer"); // 2. Wechsle das Bild
          }} 
        />
      )}

      {currentView === "slideViewer" && (
        <SlideViewer 
          // Wir geben die gemerkte ID an den Viewer weiter!
          lessonId={activeLesson} 
          onCloseLesson={() => setCurrentView("dashboard")} 
        />
      )}
    </div>
  );
}

export default App;