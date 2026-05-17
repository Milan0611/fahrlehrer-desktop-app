/**
 * Fallback-UI-Komponente für das Error-Handling auf View-Ebene.
 * Wird vom SlideRenderer aufgerufen, wenn ungültige Zustände auftreten 
 * (z. B. Lektion nicht gefunden, fehlerhafte JSON-Struktur).
 * Verhindert einen Absturz der gesamten Applikation und gibt dem Nutzer
 * stattdessen visuelles Feedback zum Fehlerstatus.
 */

interface ErrorTemplateProps {
  data: {
    title: string;
    message: string;
  };
}

const ErrorTemplate = ({ data }: ErrorTemplateProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-12 text-center">
      {/* Container mit hohem visuellen Kontrast (rote Signalfarbe) zur klaren Abgrenzung von regulärem Content */}
      <div className="bg-white dark:bg-[#1A1C1E] p-10 border-l-8 border-red-500 shadow-xl max-w-2xl w-full flex flex-col items-center">
        <span className="material-symbols-outlined text-red-500 text-6xl mb-6">
          warning
        </span>
        <h2 className="text-3xl font-black font-headline uppercase tracking-tighter text-[#2D2F31] dark:text-white mb-4">
          {data.title}
        </h2>
        <p className="text-lg font-body text-slate-600 dark:text-slate-400 leading-relaxed">
          {data.message}
        </p>
      </div>
    </div>
  );
};

export default ErrorTemplate;