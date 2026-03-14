// Wir definieren die Props, die der Button von "oben" erwartet
interface LangSwitchButtonProps {
  currentLang: "de" | "en";
  onToggle: () => void;
}

export const LangSwitchButton = ({ currentLang, onToggle }: LangSwitchButtonProps) => {
  return (
    <button 
      onClick={onToggle} 
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all"
    >
      {currentLang.toUpperCase()}
    </button>
  );
};