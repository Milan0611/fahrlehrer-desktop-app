import { useState } from 'react';
import SlideRenderer from './components/SlideRenderer';
import { LangDropdown } from './components/atoms/LangDropdown';
import { AvailableLanguage } from './lessons/index';

function App() {
  // lang enthält die Sprache und setLang ist eine setter-Funktion die useState von Haus aus mitgibt
  const [lang, setLang] = useState<AvailableLanguage>("de"); // lang kann nur vom Typ "AvailableLanguage" sein

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center relative"> {/* Generelle Leinwand der App z.B. Hintergrundfarbe  */}
      <div className="absolute top-6 right-8 z-50"> {/* Bereich für das Sprachen Dropdown Menü */}
        {/* Das Dropdown bekommt den State und die Setter-Funktion */}
        <LangDropdown currentLang={lang} onChange={setLang} />
      </div>

      <div className="w-[1024px] h-[768px] overflow-hidden"> {/* Bereich für die Folien */}
        <SlideRenderer currentSlideId="folie_3" lang={lang} /> 
      </div>
    </div>
  );
}

export default App;