# Elternberatung Sulk

Website von Verena Sulk, Schlafberatung für Familien mit Babys und Kleinkindern in Münster.
Gebaut mit [Astro](https://astro.build).

Gestaltung „Gute Nacht, Münster“: ein Scherenschnitt des Prinzipalmarkts bei Nacht, in dem die
Fenster nacheinander ausgehen. Marineblau ist die einzige Farbfamilie, Lampengelb der einzige warme
Ton. Schriften: Corben für große Überschriften, Alegreya für alles Lesbare.

## Wo was liegt

| Datei                          | Inhalt                                                            |
| ------------------------------ | ----------------------------------------------------------------- |
| `src/data/inhalt.ts`           | Alle Texte. Alles in [eckigen Klammern] ist noch ein Platzhalter. |
| `src/pages/index.astro`        | Die Startseite (einzige Seite)                                    |
| `src/components/Skyline.astro` | Der Scherenschnitt mit Lambertiturm                               |
| `src/layouts/Layout.astro`     | Grundgerüst, Farben und Schriften                                 |

## Befehle

| Befehl         | Was passiert                                               |
| -------------- | ---------------------------------------------------------- |
| `pnpm install` | Abhängigkeiten installieren                                |
| `pnpm dev`     | Entwicklungsserver auf `localhost:4321`                    |
| `pnpm build`   | Fertige Seite nach `./dist/` bauen                         |
| `pnpm preview` | Gebaute Seite lokal ansehen                                |
| `pnpm test`    | Playwright-Tests (erwartet die Seite auf `localhost:3000`) |
