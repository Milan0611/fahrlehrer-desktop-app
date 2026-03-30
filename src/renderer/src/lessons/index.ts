import de from './l1_de.json';
import en from './l1_en.json';

// Hier bündeln wir alle importierten Sprachen
export const lessonTranslations = {
  de: de,
  en: en,
};

// Wir exportieren die verfügbaren Sprach-Kürzel für das Dropdown
export type AvailableLanguage = keyof typeof lessonTranslations;
export const availableLanguages = Object.keys(lessonTranslations) as AvailableLanguage[];