# MiniProject

Full-stack app (Express + MongoDB backend, React frontend).

## Project layout

- `backend/` — Express API and Mongoose models
- `frontend/` — Create React App UI

## Prerequisites

- Node.js v14+ and npm (or yarn)
- MongoDB running locally or accessible remotely

## Quick start (after cloning)

1. Clone the repo and change directory:

```bash
git clone <repo-url>
cd MiniProject
```

2. Start the backend

```bash
cd backend
npm install
# start the server
node server.js
```

- The backend app listens on port `5000` by default. API base: `http://localhost:5000/api`.
- If you prefer, add a start script to `backend/package.json`:

```json
"scripts": {
  "start": "node server.js"
}
```

3. Start the frontend

```bash
cd ../frontend
npm install
npm start
```

- The React app runs on port `3000` by default.

4. Open the app

- Frontend: http://localhost:3000
- Backend APIs: http://localhost:5000/api/...

## Database

- By default `backend/config/db.js` connects to `mongodb://127.0.0.1:27017/hostelDB`.
- Ensure MongoDB is running locally, or edit `backend/config/db.js` to point to your MongoDB URI.

## Environment

- This repo currently hardcodes the MongoDB URI in `backend/config/db.js`.
- If you prefer environment variables, update `connectDB()` to read `process.env.MONGO_URI` and create a `.env` file in `backend/` with:

```
MONGO_URI=mongodb://127.0.0.1:27017/hostelDB
PORT=5000
```

Then install `dotenv` (already included) and load it in `server.js` with `require('dotenv').config()`.

## Build for production

- Frontend build:

```bash
cd frontend
npm run build
```

- Serve `frontend/build` with any static server or integrate into your backend.

## Notes & next steps

- `backend/package.json` currently has no `start` script; you can add one as shown above.
- If you want a single command to run both services during development, I can add a `dev` script (using `concurrently` or `npm-run-all`).

## Troubleshooting

- If the backend fails to connect to MongoDB, verify the URI in `backend/config/db.js` and that the MongoDB service is running.
- If the frontend can't reach the API, check CORS and that the backend is running on port `5000`.

---

If you want, I can add a `start` script to the backend and a `dev` script that runs both services together.