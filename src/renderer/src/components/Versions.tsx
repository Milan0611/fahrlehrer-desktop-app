import { useState } from 'react'

/**
 * UI-Komponente zur Anzeige der Laufzeitumgebung.
 * Liest die Systemversionen (Electron, Chromium, Node) über das an das Window-Objekt 
 * gebundene Electron-API-Objekt aus. Setzt voraus, dass ein entsprechendes Preload-Skript 
 * den 'electron.process.versions'-Kontext sicher im Renderer-Prozess bereitstellt.
 * Datenfluss: Electron Main Process -> Preload Script (window.electron) -> React State -> UI
 */
function Versions(): React.JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
    </ul>
  )
}

export default Versions