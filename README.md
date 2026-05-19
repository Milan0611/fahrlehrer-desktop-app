# Fahrlehrer-Unterrichtsassistent (Desktop Client)

> **Projektstatus:** Bei dieser Applikation handelt es sich um einen funktionales **MVP (Minimum Viable Product)**. Der Quellcode demonstriert die technische Machbarkeit der Kernarchitektur (dynamisches Rendering von Unterrichtsfolien). Das System ist als skalierbare Plattform für den interaktiven Live-Theorieunterricht konzipiert.

## Kernkonzept & Problemstellung

Klassischer Theorieunterricht in Fahrschulen leidet oft unter zwei Problemen: Hoher Vorbereitungsaufwand für Fahrlehrer bei Gesetzesänderungen (z. B. veraltete PowerPoint-Folien) und passive, abgelenkte Fahrschüler, die nur ihre Anwesenheitspflicht absitzen. 

Diese Applikation löst beide Probleme durch einen cloudbasierten, datengetriebenen Ansatz:

* **Zentrales Content-Management:** Die Unterrichtsinhalte (strukturiert nach Führerscheinklassen und Lektionen) sind vollständig vom Code entkoppelt. Bei Gesetzesänderungen werden die Inhalte zentral in der Cloud angepasst – alle angeschlossenen Fahrschulen sind ohne eigenes Zutun sofort auf dem neuesten Stand.
* **Interaktive Schüler-Einbindung:** Das System bindet das Smartphone der Schüler aktiv in den Unterricht ein, anstatt es als Ablenkung zu verbieten. Über QR-Codes auf den Folien erhalten Schüler Zugang zu einer begleitenden Web-App.
* **Mehrsprachigkeit im Live-Betrieb:** Schüler können die Inhalte der aktuell gezeigten Folie in Echtzeit auf ihrem Smartphone in ihrer Herkunftssprache mitlesen, während der Fahrlehrer vorne die deutsche Version präsentiert.

## Architektur-Ausrichtung für zukünftige Features (Vision)

Die App wurde von Grund auf so modular und erweiterbar konzipiert, dass geplante Features nahtlos über die bestehende Architektur realisiert werden können, ohne das Core-Frontend anzupassen:

* **Echtzeit-Interaktion (Gamification):** Die Vorbereitung für anonyme Umfragen und kompetitive Quiz-Elemente (analog zu Kahoot) ist durch das zustandsbasierte Template-System im Frontend bereits angelegt und erfordert im nächsten Schritt lediglich die Anbindung eines WebSocket-Backends.
* **Geodatendaten-Integration:** Die Struktur der Layouts erlaubt das dynamische Einbetten von interaktiven Komponenten wie der Google Maps API, um schwierige, reale Prüfungsstellen aus der lokalen Umgebung direkt in die Folien einzubinden.

---

## Tech-Stack
* **Frontend:** React, TypeScript, Tailwind CSS
* **Desktop-Umgebung:** Electron
* **State Management:** React Hooks (Zustandsbasiertes Routing ohne Overhead)

## Architektur & Design Patterns
Um die vollständige Dynamik der Unterrichtsinhalte bei identischem Client zu realisieren, nutzt das Projekt ein strikt datengetriebenes Konzept:

* **Atomic Design:** Konsequente Trennung der UI-Komponenten in handhabbare Einheiten (Atoms wie `LangDropdown` oder `StatBlock`, Layouts und Templates). Dies sichert die Wiederverwendbarkeit der Elemente über alle Lektionen hinweg.
* **Unidirectional Data Flow:** Zentralisiertes State Management auf oberster Ebene (`App.tsx`) mit gezieltem State Lifting für einen sauberen, vorhersagbaren Datenfluss.
* **Dynamic Template-Rendering:** Ein zentraler `SlideRenderer` parst die strukturierten JSON-Lektionsdaten und injiziert die Rohdaten flexibel in vordefinierte View-Templates (`GraphicTemplate1`, `TextTemplate1`). 

## Datenflussdiagramm
<img width="1992" height="1637" alt="Datenflussdiagramm" src="https://github.com/user-attachments/assets/135a7faa-c06f-48eb-bd7f-fdc975065794" />

## Demo & Code-Walkthrough
[Hier Link zum Loom-Video einfügen]
