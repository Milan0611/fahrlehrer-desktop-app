/**
 * Generische UI-Komponente zur Darstellung statistischer Kennzahlen (Key Value Pair).
 * Fungiert als reines Darstellungs-Atom ohne eigene Logik.
 * * @param value - Der numerische oder textuelle Hauptwert (z.B. "50 Mrd.")
 * @param label - Die beschreibende Unterschrift zum Wert
 */
export const StatBlock = ({ value, label }: { value: string, label: string }) => (
  <div className="flex-1 bg-gray-100 p-4 rounded-xl border-b-8 border-next-level-green text-center shadow-md">
    <div className="text-3xl font-black text-green-700">{value}</div>
    <div className="text-[10px] uppercase font-bold text-gray-500">{label}</div>
  </div>
);