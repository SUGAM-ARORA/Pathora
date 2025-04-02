import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.GEMINI_API_KEY; 

console.log(process.env.GEMINI_API_KEY)

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`
,
      {
        role:"user",
        contents: [{ parts: [{ text: message }] }]
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log(response.data.candidates[0].content)
    res.json({ reply: response.data.candidates[0].content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
