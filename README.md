# Sito web statico — Gian Luca Forloni

Sito single-page in HTML, CSS e JavaScript vanilla per promuovere la figura professionale di Gian Luca Forloni e raccogliere richieste di lavoro o informazioni.

## Struttura progetto

```
/ index.html
/ assets
  / css
    / style.css
  / js
    / main.js
  / img
    / hero-placeholder.svg
```

## Come modificare testi e colori

- **Testi**: apri `index.html` e aggiorna i contenuti delle sezioni (hero, chi sono, ambiti, ecc.).
- **Colori**: gestiti in `assets/css/style.css` tramite le variabili CSS in `:root` (es. `--color-primary`, `--color-secondary`).
- **CTA e link**: i link di navigazione e i pulsanti puntano alle ancore interne; puoi cambiarli direttamente in `index.html`.

## Come sostituire le immagini placeholder

1. Sostituisci `assets/img/hero-placeholder.svg` con un file reale (stesso nome) **oppure** aggiorna il percorso nel tag `<img>` in `index.html`.
2. Mantieni `width` e `height` per evitare CLS (layout shift) e verifica l’attributo `alt`.

## Deploy su Hostinger (Static Hosting)

1. Accedi al pannello Hostinger e seleziona **Hosting → File Manager**.
2. Carica tutti i file e le cartelle (`index.html` e `assets/`) nella directory principale (`public_html`).
3. Verifica che `index.html` sia nella root di `public_html`.
4. Apri il dominio per controllare che il sito sia visibile.

## Note

- Il form contatti invia una mail tramite `mailto:` e usa validazione client-side.
- Nessuna dipendenza JavaScript esterna.
- Font da Google Fonts: Inter.
