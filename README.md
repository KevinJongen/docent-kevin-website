# Biologie Site · Playlist Update

Deze structuur volgt je GitHub-indeling:
- `index.html` in de root
- `hoofdstuk-1` t/m `hoofdstuk-12` (elk met `index.html`)
- `data/` met gedeelde CSS/JS/config (Spotify)

## Instellingen
Open `data/assets/js/config.json` en zet je echte Spotify playlist/album URL voor **hoofdstuk 11**:
```json
{ "playlists": { "11": "https://open.spotify.com/playlist/JOUW-H11-PLAYLIST-ID" } }
```
Je kunt later meer hoofdstukken toevoegen door extra keys toe te voegen (bijv. `"10": "https://open.spotify.com/playlist/..."`).

## Werking
- Elke pagina heeft `data-chapter="X"` op `<html>`.
- `podcast.js` leest `config.json` en injecteert de **Spotify playlist embed** binnen elk element met `data-podcast-block`.
- Op **hoofdstuk-11** staat daarnaast de content voor 11.2 en 11.3.