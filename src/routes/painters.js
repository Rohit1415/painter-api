import express from "express";
import {
  getPainters,
  getPainterById,
  getRandomPainter,
  getRandomQuote,
  getRandomResponse,
} from "../controllers/painterController.js";

const router = express.Router();

router.get("/", getPainters);
router.get("/random", getRandomPainter);
router.get("/quotes/random", getRandomQuote);
router.get("/responses/random", getRandomResponse);
router.get("/:id", getPainterById);

export default router;
