import { useState } from 'react';
// import SlideRenderer from './components/SlideRenderer';
// import { LangDropdown } from './components/atoms/LangDropdown';
import { AvailableLanguage } from './lessons/index';
// import { Dashboard } from './pages/Dashboard';
import { SlideViewer } from './pages/SlideViewer';

function App() {
  // lang enthält die Sprache und setLang ist die Setter-Funktion
  const [lang, setLang] = useState<AvailableLanguage>("de");

  return (
    // Wir geben der App die volle Breite und Höhe ohne Einschränkungen
    <div className="w-screen h-screen relative bg-surface overflow-hidden"> 
      
      {/* Dieses Dropdown schwebt aktuell noch über der neuen Top-Bar des Dashboards.
        Später bauen wir diesen Button direkt in das Dashboard ein, 
        für unseren Test lassen wir ihn aber erstmal hier oben rechts "fliegen".
      */}

      {/*
      <div className="absolute top-4 right-20 z-50"> 
        <LangDropdown currentLang={lang} onChange={setLang} />
      </div>
      */}

      {/* Der SlideViewer füllt den gesamten Bildschirm aus */}
      <SlideViewer /> 
    </div>
  );
}

export default App;