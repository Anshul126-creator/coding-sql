import { getHintFromLLM } from "../services/llmservice.js";
export const getHint = async (req, res) => {
  try {
    const { assignment, query } = req.body;

    const hint = await getHintFromLLM(assignment, query);

    res.json({ hint });
  } catch (error) {
    res.status(500).json({ error: "LLM error" });
  }
};
