import { useState } from 'react';
import SlideRenderer from './components/SlideRenderer';
import { LangSwitchButton } from './components/atoms/LangSwitchButton';

function App() {
  // Hier lebt jetzt der State! 
  const [lang, setLang] = useState<"de" | "en">("de");

  // Die Funktion zum Wechseln der Sprache
  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "de" ? "en" : "de"));
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center relative">
      
      {/* Der Button sitzt jetzt ÜBER der Folie. 
        Wir geben ihm den State (lang) und die Funktion (toggleLanguage) als Props mit. 
      */}
      <div className="absolute top-6 right-8 z-50">
        <LangSwitchButton currentLang={lang} onToggle={toggleLanguage} />
      </div>

      {/* Der Renderer bekommt jetzt auch die Sprache übergeben, 
        damit er weiß, welche JSON er laden soll. 
      */}
      <div className="w-[1024px] h-[768px] overflow-hidden">
        <SlideRenderer currentSlideId="folie_3" lang={lang} />
      </div>

    </div>
  );
}

export default App;