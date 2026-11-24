# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Product preferences
- Get Help is a guided questionnaire: Broward city first, service second, then relevant results. Keep 911 visible throughout.
- Use the supplied light-blue reference: pale background, navy text, compact top navigation, rounded white service cards and blue icon tiles. Keep the neighborhood-initiative notice requested by the user.
- Sand pickup directory covers all Broward municipalities and unincorporated areas; only use map coordinates that have been verified. Distinguish sand pickup, empty bags/verification, and historical distribution sites. Never imply live availability from historical sources.
- The app is named The Broward Watch, with a title-case `The Broward Watch` text wordmark. Preserve geographic names in service information.

- Show the resource-review notice at the top of every page. Show recorded review dates beside resource links; never auto-advance dates or imply that unchecked links were verified.

- Countywide resources are stored in `src/cityResources.js`. Preserve source URLs, review dates, historical/event qualifiers, and provider-by-address distinctions. Missing local contacts must be explicit county referrals; do not invent pickup locations or imply that shelters are open.

- Home is the default landing page and contains flood recovery assistance. Storm updates is reserved for announcements; Get Help remains the city-first questionnaire.
- Selected redesign: latest mobile option 3 (November 24, 2026), navy/teal wave header, pale resource panels and a prominent call action. Preserve existing routes and original source dates when translating mockups.
