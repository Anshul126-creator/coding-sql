import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getHintFromLLM = async (problem, userCode) => {
  try {
    const prompt = `
You are a coding mentor.

Give a HINT only.
Do NOT provide full solution.

Problem:
${problem}

User Code:
${userCode}

Respond with a short hint only.
`;

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content;

  } catch (err) {
    console.error("OpenAI Error:", err);
    throw err;
  }
};