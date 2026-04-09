import { useState } from 'react';
import { AvailableLanguage } from './lessons/index';
import { SlideViewer } from './pages/SlideViewer';

function App() {
  const [lang, setLang] = useState<AvailableLanguage>("de");

  return (
    <div className="w-screen h-screen relative bg-surface overflow-hidden"> 
      {/* Das Dropdown ist hier verschwunden. Wir geben stattdessen die Setter-Funktion weiter */}
      <SlideViewer /> 
    </div>
  );
}

export default App;