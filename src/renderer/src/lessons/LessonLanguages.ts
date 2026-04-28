import de1 from './l1_de.json';
import en1 from './l1_en.json';

// Ein Array, wo für jede Sprache jede Lektion als json datei enthalten ist
const lessonRegistry = {
  de: {
    1: de1
    // Weitere Lektionen
  },
  en : {
    1: en1
    // Weitere Lektionen
  }
  // Weitere Sprachen
};

// Die Sprach-Kürzel leiten sich jetzt direkt aus den obersten Schlüsseln von lessonRegistry ab ('de', 'en')
export type AvailableLanguage = keyof typeof lessonRegistry;
export const availableLanguages = Object.keys(lessonRegistry) as AvailableLanguage[];

// Kann von anderen Dateien mit Sprache und LektionsID als Parameter aufgerufen werden, um die richtige Datei für die Sprache und LektionsID 
// zu bekommen
export const getLessonData = (language: AvailableLanguage, lessonId: number) => {
  const lesson = lessonRegistry[language]?.[lessonId];

  // Wenn es keine Lektion mit dieser Sprach- und Lektionskombination gibt, wird eine Fehlerfolie mit dem ErrorTemplate angezeigt
  if (!lesson) {
    return {
      lessonId: lessonId,
      isError: true,
      slides: [
        {
          id: 1,
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