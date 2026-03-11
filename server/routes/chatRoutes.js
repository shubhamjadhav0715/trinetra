import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.json({
    reply: "Trinetra AI is working 🔱"
  });
});

export default router;