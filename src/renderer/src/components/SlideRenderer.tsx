import HebenstreitTemplate from '../templates/HebenstreitTemplate';
import ErrorTemplate from '../templates/ErrorTemplate';
import { getLessonData, AvailableLanguage } from '../lessons/LessonLanguages';

// Interface für den SlideRenderer: Enthält LektionsID, Folien ID und eine Sprache
interface SlideRendererProps {
  currentLessonId: number;
  currentSlideId: string;
  lang: AvailableLanguage;
}

// Der SlideRenderer muss mit Slide Id und Sprache aufgerufen werden
const SlideRenderer = ({ currentLessonId, currentSlideId, lang }: SlideRendererProps) => {

  // Es wird sich mit den beiden Parametern sofort die Datei in der richtigen Sprache und die Folien-ID geholt und abgespeichert
  const lessonData = getLessonData(lang, currentLessonId);

  // Speichert schonmal den ersten Slide. Im Falle eines Fehler wegen falscher Sprache oder LektionsId ist das der ErrorSlide
  let slide: any = lessonData.slides[0];

  // Wenn es nicht der ErrorSlide aus LessonLanguages.ts ist,
  if (!lessonData.isError) {
    // Sucht in der JSON die richtige Folie anhand der SlideId. Die Variable slide wird durch den Slide mit der richtigen SlideId ersetzt
    slide = lessonData.slides.find(s => s.id === currentSlideId);

    // Wenn es die Folie mit der ID nicht gibt, kommt eine Meldung
    if (!slide) return <div className="text-white">Folie nicht gefunden</div>;
  } 

  // Ein switch für alle verfügbaren Templates. Je nachdem welches Template für die Folie in der JSON festgelegt ist, 
  // wird ein anderes verwendet (aktuell nur eins vorhanden)
  switch (slide.template) {
    case 'HebenstreitTemplate':
      return <HebenstreitTemplate data={slide.content} />; // Lädt das Template mit den Daten aus der JSON der Folie
    case 'ErrorTemplate':
      return <ErrorTemplate data={slide.content} />
    default:
      return <div className="text-white">Unbekanntes Template: {slide.template}</div>; // Wenn das Template nicht gefunden wurde
  }
};

export default SlideRenderer;