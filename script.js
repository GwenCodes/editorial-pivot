fetch("http://localhost:3000/anthropic", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "claude-sonnet-4-6",
    max_tokens: 200,
    messages: [{ role: "user", content: "Hello!" }],
  }),
});
