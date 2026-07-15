import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import proxyAnthropic from "./proxyAnthropic.js"; // your handler

const app = express();
const port = 3000;

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Serve your entire frontend folder
app.use(express.static(__dirname));

// API route
app.post("/anthropic", proxyAnthropic);

// Serve index.html for the root
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
