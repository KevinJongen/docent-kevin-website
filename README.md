# Biologie Leerhulppagina — Meneer Jongen

Dit is de website voor mijn leerlingen (vmbo) met per hoofdstuk:
- 🎧 **Podcasts** (eerste aflevering is altijd paragraaf `.2`)
- 🤖 **Custom GPT** (per hoofdstuk)
- 📖 **Begrippenlijsten** uit Excel met interactieve **quiz** (scoreteller, feedback, reset)
- 🌱 Vrolijke groene uitstraling, gemaakt met Tailwind CSS

De site draait via **Netlify** en de broncode staat hier in GitHub.

---

## 📂 Structuur

```
index.html                → Startpagina (keuze hoofdstuk)
hoofdstuk-1/index.html    → Pagina per hoofdstuk
...
hoofdstuk-12/index.html
data/                     → Excel-bestanden voor begrippenlijsten
 ├── hoofdstuk-11.xlsx    → Voorbeeld (Erfelijkheid en evolutie)
```

---

## 📖 Begrippenlijsten toevoegen

1. Maak een Excel-bestand met **twee kolommen**:
   - `Begrip`
   - `Uitleg`

   Voorbeeld:

   | Begrip    | Uitleg                                    |
   |-----------|-------------------------------------------|
   | Genotype  | De verzameling genen van een organisme     |
   | Fenotype  | Waarneembare eigenschappen                |

2. Sla het bestand op in de map `/data/` met de naam:

   ```
   hoofdstuk-<nummer>.xlsx
   ```

   Bijvoorbeeld: `hoofdstuk-5.xlsx`

3. Commit en push naar GitHub → Netlify bouwt automatisch → klaar.

---

## 🎧 Podcasts toevoegen

- Elke hoofdstukpagina embedt standaard de hele Spotify-show.  
- Wil je **specifieke afleveringen** (bijv. `5.2`, `5.3`), vervang dan de `<iframe>` in `hoofdstuk-X/index.html` met de juiste **Spotify embed link**.  
- Deze link haal je uit Spotify: **“Delen → Embed code kopiëren”**.

---

## 🤖 GPT-links

- Standaard staat de GPT-knop in elk hoofdstuk klaar.  
- Voor hoofdstuk 11 is de echte link al ingevuld.  
- Voor andere hoofdstukken:
  1. Maak een Custom GPT.
  2. Kopieer de link (bijv. `https://chatgpt.com/g/...`).
  3. Zet die in de `<a href="...">` van de GPT-knop in `hoofdstuk-X/index.html`.

---

## 🔄 Deployen via GitHub → Netlify

1. **Aanpassen in GitHub**
   - Pas bestanden direct aan of upload nieuwe versies.
   - Let op: **index.html in root** moet blijven bestaan.

2. **Committen**
   - Schrijf een korte commit message, bijv.:
     ```
     Update hoofdstuk 7 begrippenlijst
     ```

3. **Netlify**
   - Netlify pakt automatisch de nieuwe versie en zet de site live.  
   - Je hoeft zelf niets in Netlify te doen.

---

## 👩‍🏫 Tips voor gebruik in de klas

- **Begrippenlijst** is standaard ingeklapt → leerlingen zien eerst alleen de quiz.  
- **Scoreteller** motiveert: “Ik heb 8/10 goed gehaald!”  
- **Opnieuw-knop** geeft nieuwe volgorde en nieuwe antwoordopties.  
- Podcasts + GPT zijn ideaal als voorbereiding op toetsen.

---

© Meneer Jongen — Citadel College
