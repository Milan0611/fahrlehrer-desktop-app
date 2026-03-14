import HebenstreitTemplate from '../templates/HebenstreitTemplate';
import lessonData from '../lessons/l1_de.json';

const SlideRenderer = ({ currentSlideId }: { currentSlideId: string }) => {
  // Wir suchen die passende Folie im JSON
  const slide = lessonData.slides.find(s => s.id === currentSlideId);

  if (!slide) return <div className="text-white">Folie nicht gefunden</div>;

  // Hier entscheiden wir anhand des "template"-Namens im JSON, was geladen wird
  switch (slide.template) {
    case 'HebenstreitTemplate':
      return <HebenstreitTemplate data={slide.content} />;
    default:
      return <div className="text-white">Unbekanntes Template: {slide.template}</div>;
  }
};

export default SlideRenderer;