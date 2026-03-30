import HebenstreitTemplate from '../templates/HebenstreitTemplate';
import { lessonTranslations, AvailableLanguage } from '../lessons/index';

interface SlideRendererProps {
  currentSlideId: string;
  lang: AvailableLanguage;
}

const SlideRenderer = ({ currentSlideId, lang }: SlideRendererProps) => {
  // Der Renderer greift jetzt direkt auf das Wörterbuch zu!
  const lessonData = lessonTranslations[lang];
  const slide = lessonData.slides.find(s => s.id === currentSlideId);

  if (!slide) return <div className="text-white">Folie nicht gefunden</div>;

  switch (slide.template) {
    case 'HebenstreitTemplate':
      return <HebenstreitTemplate data={slide.content} />;
    default:
      return <div className="text-white">Unbekanntes Template: {slide.template}</div>;
  }
};

export default SlideRenderer;