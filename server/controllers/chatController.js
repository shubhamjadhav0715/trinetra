import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";
import Chat from "../models/Chat.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const chatWithAI = async (req, res) => {
  try {

    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: message }]
    });

    const reply = response.choices[0].message.content;
    const chat = new Chat({
  message: message,
  reply: reply
});

await chat.save();

    res.json({ reply });

  }catch (error) {

  console.log("OPENAI ERROR:", error.message);

  res.status(500).json({
    error: error.message
  });

}
};

export const getChatHistory = async (req, res) => {
  try {

    const chats = await Chat.find().sort({ createdAt: -1 });

    res.json(chats);

  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch chat history"
    });

  }
};