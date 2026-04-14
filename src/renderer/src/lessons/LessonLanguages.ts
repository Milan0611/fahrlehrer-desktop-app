import de1 from './l1_de.json';
import en1 from './l1_en.json';

/* Altes Zeug
// Hier bündeln wir alle importierten Sprachen. Links sind die strings die den Dateien rechts zugewiesen werden
export const lessonTranslations = {
  de: de,
  en: en,
};
*/

// Ein Array, wo für jede Sprache jede Lektion als json datei enthalten ist
const lessonRegistry = {
  de: {
    1: de1
  },
  en : {
    1: en1
  }
};

// Die Sprach-Kürzel leiten sich jetzt direkt aus den obersten Schlüsseln von lessonRegistry ab ('de', 'en')
export type AvailableLanguage = keyof typeof lessonRegistry;
export const availableLanguages = Object.keys(lessonRegistry) as AvailableLanguage[];

// Kann von anderen Dateien mit Sprache und LektionsID als Parameter aufgerufen werden, um die richtige Datei für die Sprache und LektionsID 
// zu bekommen
export const getLessonData = (language: AvailableLanguage, lessonId: number) => {
  const lesson = lessonRegistry[language]?.[lessonId];

  if (!lesson) {
    return {
      lessonId: lessonId,
      slides: [
        {
          slide: 1,
          template: "ErrorTemplate", 
          content: {
            title: "Fehler: Lektion nicht gefunden",
            message: `Die Lektion ${lessonId} für die Sprache ${language} existiert nicht in der Registry.`
          }
        }
      ]
    };
  }

  return lesson;
};