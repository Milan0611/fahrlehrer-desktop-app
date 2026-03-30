import { useState } from 'react';
import SlideRenderer from './components/SlideRenderer';
import { LangDropdown } from './components/atoms/LangDropdown';
import { AvailableLanguage } from './lessons/index';

function App() {
  // Der State nutzt jetzt unseren neuen Typen
  const [lang, setLang] = useState<AvailableLanguage>("de");

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center relative">
      <div className="absolute top-6 right-8 z-50">
        {/* Das Dropdown bekommt den State und die Setter-Funktion */}
        <LangDropdown currentLang={lang} onChange={setLang} />
      </div>

      <div className="w-[1024px] h-[768px] overflow-hidden">
        <SlideRenderer currentSlideId="folie_3" lang={lang} />
      </div>
    </div>
  );
}

export default App;