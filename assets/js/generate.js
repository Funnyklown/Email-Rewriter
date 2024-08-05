import OpenAI from "openai";

const openai = new OpenAI();

async function generateMail() {
    var prompt = document.getElementById("prompt").value;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-4o-mini",
    });
  
    console.log(completion.choices[0]);
}
  