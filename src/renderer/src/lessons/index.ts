import de from './l1_de.json';
import en from './l1_en.json';

// Hier bündeln wir alle importierten Sprachen in einem Objekt
export const lessonTranslations = {
  de: de,
  en: en,
};

// Wir exportieren eine Liste der verfügbaren Sprach-Kürzel für das Dropdown
export type AvailableLanguage = keyof typeof lessonTranslations;
export const availableLanguages = Object.keys(lessonTranslations) as AvailableLanguage[];