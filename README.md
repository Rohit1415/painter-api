# Painter API

A simple Node.js REST API that returns painter details, random responses, and creative quotes inspired by art legends like Leonardo da Vinci, Vincent van Gogh, Pablo Picasso, and more.

## Features

- 5 public API endpoints
- Random painter data endpoint
- Random quote and random response endpoints
- Clean folder structure: `src/routes`, `src/controllers`, `src/data`, `src/utils`
- Express server with JSON API
- ESLint for consistent code style

## Installation

```bash
pnpm install
```

## Run the server

```bash
pnpm start
```

For development with auto-reload:

```bash
pnpm dev
```

## API Endpoints

- `GET /api/painters` — get the full painter list
- `GET /api/painters/random` — get a random painter record
- `GET /api/painters/:id` — get a painter by ID
- `GET /api/painters/quotes/random` — get a random art quote
- `GET /api/painters/responses/random` — get a random creative response

## Postman

A Postman collection is available at `postman.json` in the project root. Import it into Postman and use `http://localhost:3000` as the base URL.

## Example response

```json
{
  "id": 1,
  "name": "Leonardo da Vinci",
  "era": "Renaissance",
  "nationality": "Italian",
  "style": "High Renaissance",
  "famousWorks": ["Mona Lisa", "The Last Supper", "Vitruvian Man"],
  "funFact": "He studied anatomy to paint more lifelike figures."
}
```

## Project structure

- `src/app.js` — Express application setup
- `src/server.js` — HTTP server launcher
- `src/routes/painters.js` — route definitions
- `src/controllers/painterController.js` — business logic
- `src/data/painters.js` — sample painter dataset
- `src/utils/randomize.js` — random selection helper

## Notes

This API is intentionally lightweight and uses random data for creative demo responses.
