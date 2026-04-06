export const SlideFooter = () => {
  return (
    <div className="mt-8 border-t border-outline/10 pt-12 flex justify-between items-center w-full">
      <button className="flex items-center gap-4 text-outline font-headline font-bold uppercase tracking-widest text-xs hover:text-on-surface transition-colors">
        <span className="material-symbols-outlined">chevron_left</span>
        Zurück
      </button>
      <div className="flex gap-2">
        <div className="w-2 h-2 bg-primary"></div>
        <div className="w-2 h-2 bg-surface-container-highest"></div>
        <div className="w-2 h-2 bg-surface-container-highest"></div>
        <div className="w-2 h-2 bg-surface-container-highest"></div>
        <div className="w-2 h-2 bg-surface-container-highest"></div>
      </div>
      <button className="flex items-center gap-4 text-primary font-headline font-black uppercase tracking-widest text-xs group">
        Nächste Folie
        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">chevron_right</span>
      </button>
    </div>
  );
};