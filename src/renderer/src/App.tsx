import { useState } from 'react';
import { Dashboard } from './pages/Dashboard';
import { SlideViewer } from './pages/SlideViewer';

function App() {

  // Der State merkt sich die aktuelle Seite. Wert kann entweder "dashboard" oder "slideViewer" sein. Startwert ist "dashboard".
  const [currentView, setCurrentView] = useState<"dashboard" | "slideViewer">("dashboard");

  return (
    <div className="w-screen h-screen relative bg-surface overflow-hidden"> 
      {/* Wenn der State "dashboard" ist, zeige das Dashboard... */}
      {currentView === "dashboard" && (
        <Dashboard 
          // Wir übergeben eine Fernbedienung, um die Ansicht zu wechseln
          onStartLesson={() => setCurrentView("slideViewer")} 
        />
      )}

      {/* ... wenn der State "slideViewer" ist, zeige den Viewer! */}
      {currentView === "slideViewer" && (
        <SlideViewer 
          // Und hier die Fernbedienung für den Weg zurück
          onCloseLesson={() => setCurrentView("dashboard")} 
        />
      )}
    </div>
  );
}

export default App;