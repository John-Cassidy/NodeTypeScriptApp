import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// create and export a function that uses the OpenAI API
export async function getGPTResponse(prompt: string) {
  const gptResponse = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: prompt,
      },
    ],
    model: 'gpt-3.5-turbo',
  });
  return gptResponse.choices[0];
}
