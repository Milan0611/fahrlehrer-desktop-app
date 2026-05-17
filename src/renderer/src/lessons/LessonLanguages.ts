import de1 from './l1_de.json';
import en1 from './l1_en.json';

/**
 * Zentrales Daten-Modul zur Verwaltung und Bereitstellung der mehrsprachigen Lektionsinhalte.
 * Fungiert als statische Datenquelle (Registry) und steuert den Abruf der JSON-Dateien
 * für die nachgelagerten UI-Komponenten (wie SlideRenderer und SlideSidebar).
 */

/**
 * Nested-Object-Registry für alle verfügbaren Lektionen.
 * Die Datenstruktur mappt das Sprachkürzel auf die jeweilige Lektions-ID und verknüpft 
 * diese mit dem entsprechenden JSON-Import.
 */
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

/**
 * Dynamische Typ-Ableitung für die unterstützten Sprachen.
 * Die Typen leiten sich direkt aus den obersten Schlüsseln der 'lessonRegistry' ab.
 * Dies garantiert eine typsichere Verwendung über die gesamte Architektur hinweg
 * und verhindert Hardcoding der Sprachkürzel.
 */
export type AvailableLanguage = keyof typeof lessonRegistry;
export const availableLanguages = Object.keys(lessonRegistry) as AvailableLanguage[];

/**
 * Holt die Inhaltsdaten für eine spezifische Lektion in der gewünschten Sprache.
 * * Datenfluss: Nimmt die Suchparameter entgegen, prüft die Registry und gibt das 
 * entsprechende JSON-Objekt zurück. Fehlen die Daten (z.B. Lektion noch nicht übersetzt), 
 * wird der Fehler abgefangen und ein synthetisches Lektionsobjekt mit einer 
 * definierten Error-Folie generiert. Dadurch wird sichergestellt, dass die Render-Pipeline
 * nicht abstürzt, sondern kontrolliert das ErrorTemplate anzeigt.
 *
 * @param language - Das gewünschte Sprachkürzel (muss im AvailableLanguage-Typ existieren)
 * @param lessonId - Die numerische ID der anzufordernden Lektion
 * @returns Das JSON-Objekt der Lektion oder ein strukturell identisches Error-Objekt
 */
export const getLessonData = (language: AvailableLanguage, lessonId: number) => {
  const lesson = lessonRegistry[language]?.[lessonId];

  if (!lesson) {
    return {
      lessonId: lessonId,
      isError: true,
      slides: [
        {
          id: 1, // Fallback ID für den Renderer
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