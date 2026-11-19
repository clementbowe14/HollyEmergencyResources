# Velpazo

Responsive React/Vite community resource website based on the supplied design.

## Local development

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4173
```

`npm run build` creates the production client and Sites-compatible worker output. Publication has not been requested.

Contact content and supporting views live in `src/App.jsx`; styling is in `src/styles.css`. The Velpazo wordmark is rendered as accessible text. See `design-qa.md` for browser checks and content limitations.

Phone actions use `tel:` links; reporting opens the visitor's email application. No information is submitted or stored by the site. Current road closures, sand availability and response times are not live data.

## Guided help and pickup map

Get Help asks for a Broward municipality, then a service. Verified Hollywood contacts and the Dania Beach Public Services directory are used where applicable. Other municipalities receive explicitly labeled county referrals; property and utility service coverage is qualified by address.

The sand map uses Leaflet with OpenStreetMap tiles. The complete address list remains available when tiles cannot load. Hollywood program locations come from the City's November 3, 2026 notice; Frost Park is historical only, with no current pickup verified. Sources and coordinate provenance are stored with each record in `src/sandLocations.js`.

Run routing and location checks with `node --test tests/resources.test.mjs`.
