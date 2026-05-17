import GraphicTemplate1 from '../templates/GraphicTemplate1';
import TextTemplate1 from '@renderer/templates/TextTemplate1';
import ErrorTemplate from '../templates/ErrorTemplate';
import { getLessonData, AvailableLanguage } from '../lessons/LessonLanguages';

interface SlideRendererProps {
  currentLessonId: number;
  currentSlideId: string;
  lang: AvailableLanguage;
}

/**
 * Zentrale Routing-Komponente für die Folieninhalte.
 * Nimmt den aktuellen Zustand (Lektion, Folien-ID, Sprache) entgegen, ruft die entsprechenden
 * Daten aus der Registry ab und delegiert das Rendering an das spezifische Template.
 * * Datenfluss: Parent (SlideViewer) -> SlideRenderer -> getLessonData -> Template-Komponente
 */
const SlideRenderer = ({ currentLessonId, currentSlideId, lang }: SlideRendererProps) => {

  const lessonData = getLessonData(lang, currentLessonId);

  /**
   * Resolve Slide: 
   * Sucht die übergebene ID im Array der geladenen Lektion.
   * Fallback-Mechanismus: Wird die ID nicht gefunden (z.B. nach einem Lektionswechsel),
   * wird automatisch das erste Element im Array als aktiver Slide gesetzt.
   */
  let slide: any = lessonData.slides.find(s => s.id === currentSlideId) || lessonData.slides[0];

  /**
   * Error-Handling:
   * Falls die Lektionstransaktion auf Ebene der Registry fehlgeschlagen ist (isError = true),
   * wird das von der Registry generierte Error-Objekt gerendert.
   */
  if (lessonData.isError) {
    slide = lessonData.slides[0];
  }

  // Finales Sicherheitsnetz gegen undefinierte Datenstrukturen
  if (!slide) return <div className="text-slate-500 p-8">Keine Folien in dieser Lektion vorhanden.</div>;

  /**
   * Template-Switch:
   * Liest das in der JSON definierte Template-Binding ('template') aus und injiziert 
   * die zugehörigen Inhaltsdaten ('content') in die entsprechende UI-Komponente.
   */
  switch (slide.template) {
    case 'GraphicTemplate1':
      return <GraphicTemplate1 data={slide.content} />; 
    case 'ErrorTemplate':
      return <ErrorTemplate data={slide.content} />
    case 'TextTemplate1': 
      return <TextTemplate1 data={slide.content} />
    default:
      return <div className="text-slate-500 p-8">Unbekanntes Template: {slide.template}</div>; 
  }
};

export default SlideRenderer;