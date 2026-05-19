# Fahrschul-Lernapplikation (Desktop Client)

Eine modulare Desktop-Anwendung zur interaktiven Vermittlung von Fahrschulinhalten. Der Fokus liegt auf einer skalierbaren Frontend-Architektur, strikter Typensicherheit und einem performanten, dynamischen UI-Rendering.

## 🛠️ Tech-Stack
* **Frontend:** React, TypeScript, Tailwind CSS
* **Desktop-Umgebung:** Electron
* **State Management:** React Hooks (Zustandsbasiertes Routing ohne Overhead)

## 🏗️ Architektur & Design Patterns
* **Atomic Design:** Konsequente Trennung der UI-Komponenten in handhabbare Einheiten (Atoms wie `LangDropdown` oder `StatBlock`, Layouts und Templates).
* **Unidirectional Data Flow:** Zentralisiertes State Management auf oberster Ebene (`App.tsx`) mit gezieltem State Lifting für vorhersagbaren Datenfluss.
* **Dynamic Template-Rendering:** Ein zentraler `SlideRenderer` parst mandantenspezifische JSON-Strukturen und injiziert die Daten flexibel in vordefinierte View-Templates (`GraphicTemplate1`, `TextTemplate1`).

## 📊 Datenflussdiagramm
![Datenflussdiagramm](./Datenflussdiagramm.png)

## 📺 Demo & Code-Walkthrough
[Hier Link zum Loom-Video einfügen]
