import HebenstreitTemplate from '../templates/HebenstreitTemplate';
import lessonDataDe from '../lessons/l1_de.json';
import lessonDataEn from '../lessons/l1_en.json';

// Das Interface definiert, was der Renderer von der App.tsx erwartet
interface SlideRendererProps {
  currentSlideId: string;
  lang: "de" | "en";
}

const SlideRenderer = ({ currentSlideId, lang }: SlideRendererProps) => {
  // 1. Welche Sprache ist aktiv? Wir wählen die passende JSON-Datei.
  const lessonData = lang === "de" ? lessonDataDe : lessonDataEn;

  // 2. Wir suchen die passende Folie in der gewählten Datei
  const slide = lessonData.slides.find(s => s.id === currentSlideId);

  if (!slide) return <div className="text-white">Folie nicht gefunden</div>;

  // 3. Wir laden das Template
  switch (slide.template) {
    case 'HebenstreitTemplate':
      return <HebenstreitTemplate data={slide.content} />;
    default:
      return <div className="text-white">Unbekanntes Template: {slide.template}</div>;
  }
};

export default SlideRenderer;