import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!prompt) return res.status(400).json({ error: "No prompt provided" });
  if (!apiKey) return res.status(500).json({ error: "API key missing" });

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    const text = result.response.text();
    res.status(200).json({ response: text });
  } catch (error) {
    res.status(500).json({ error: "Gemini failed", details: error.message });
  }
}
