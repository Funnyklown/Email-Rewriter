import { Configuration, OpenAI } from "openai"; // Import at the top

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(configuration);

async function generateMail() {
    const prompt = document.getElementById("prompt").value;

    const completion = await openai.createChatCompletion({
      model: "gpt-4", // or "gpt-3.5-turbo"
      messages: [{ role: "user", content: prompt }],
    });

    console.log(completion.data.choices[0].message.content);
}
