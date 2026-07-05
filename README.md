# Enkelt och Direkt – Neutral politisk nyhetssajt

Statisk demosajt byggd med ren HTML, CSS och JavaScript. Ingen databas, inget byggsteg – öppna `index.html` direkt i webbläsaren.

## Sidor

| Fil | Innehåll |
|---|---|
| `index.html` | Startsida: header med meny + de 6 senaste nyheterna |
| `nyheter.html` | Nyhetsflöde: grid med alla artiklar + kategorifilter (Alla / Riksdag / Val / Debatt / EU) |
| `artikel.html?id=N` | Artikelsida: full text, datum, källa och relaterade nyheter |

## Struktur

```
Website/
├── index.html
├── nyheter.html
├── artikel.html
├── css/style.css        # All styling (responsiv, mobile-first breakpoints)
├── js/data.js           # Dummy-data (12 artiklar) – laddas som <script>
├── js/main.js           # Rendering, filter, mobilmeny, artikelvisning
└── data/news.json       # Samma data i ren JSON (referens/API-simulering)
```

**Varför `js/data.js` i stället för `fetch("data/news.json")`?**
Webbläsare blockerar `fetch` av lokala filer via `file://` (CORS). Genom att ladda datan som ett vanligt skript fungerar sajten utan webbserver. `data/news.json` innehåller exakt samma data om sajten senare kopplas mot ett riktigt API.

## Design

- **Färger:** vit bakgrund, mörkgrå text (`#2b2f36`), blå accent (`#1d5fbf`)
- **Typsnitt (2 st):** Georgia (rubriker) + systemets sans-serif (brödtext) – inga externa fontladdningar
- **Responsiv:** 3 kolumner (desktop) → 2 (tablet, <900px) → 1 (mobil, <560px), hamburgermeny under 720px

## Kategorier

Riksdag · Val · Debatt · EU. Filtret kan även styras via URL: `nyheter.html?kategori=EU`.

## Innehåll

Allt innehåll är fiktiv dummy-data skriven i neutral, saklig ton med angiven källa per artikel.
