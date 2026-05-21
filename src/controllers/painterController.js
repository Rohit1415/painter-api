import painters from "../data/painters.js";
import quotes from "../data/quotes.js";
import responses from "../data/responses.js";
import { pickRandom } from "../utils/randomize.js";

export const getPainters = (req, res) => {
  res.json({ data: painters });
};

export const getPainterById = (req, res) => {
  const id = Number(req.params.id);
  const painter = painters.find((item) => item.id === id);

  if (!painter) {
    return res.status(404).json({ error: "Painter not found" });
  }

  return res.json({ data: painter });
};

export const getRandomPainter = (req, res) => {
  const painter = pickRandom(painters);
  res.json({ data: painter });
};

export const getRandomQuote = (req, res) => {
  const quote = pickRandom(quotes);
  res.json({ data: quote });
};

export const getRandomResponse = (req, res) => {
  const response = pickRandom(responses);
  res.json({ data: response });
};
