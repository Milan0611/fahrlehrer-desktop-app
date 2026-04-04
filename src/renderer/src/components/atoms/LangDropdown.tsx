import { AvailableLanguage, availableLanguages } from '../../lessons/index';

// Interface für den Sprachen-Dropdownmenü Atom: Enthält die aktuelle Sprache und
interface LangDropdownProps {
  currentLang: AvailableLanguage;

  // Wer auch immer diese LangDropdown-Komponente benutzen will (z.B. App.tsx), muss eine Funktion, die Variablen vom Typ AvailableLanguage ("de" und "en") als Argument akzeptiert,
  // (z.B. setLang) übergeben. Void also gibt die Funktion nichts zurück
  onChange: (newLang: AvailableLanguage) => void; 
}

// LangDropdown muss mit der aktuellen Sprache und onChange erzeugt werden
export const LangDropdown = ({ currentLang, onChange }: LangDropdownProps) => {
  return (
    <div className="relative inline-block">
      <select
        value={currentLang}
        onChange={(e) => onChange(e.target.value as AvailableLanguage)} 
        className="appearance-none bg-gray-800 text-white font-bold py-2 pl-4 pr-10 rounded-lg shadow-lg border-2 border-next-level-green cursor-pointer focus:outline-none"
      >
        {/* Wir generieren für jede Sprache im Wörterbuch automatisch eine Option */}
        {availableLanguages.map((langKey) => (
          <option key={langKey} value={langKey}>
            {langKey.toUpperCase()}
          </option>
        ))}
      </select>
      
      {/* Ein kleiner Pfeil für die Optik */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-next-level-green">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};