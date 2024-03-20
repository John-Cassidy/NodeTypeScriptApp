import OpenAI from 'openai';

const openai = new OpenAI({
  organization: process.env.OPENAI_ORG_ID,
  apiKey: process.env.OPENAI_API_KEY,
});

// create and export a function that uses the OpenAI API
export async function getGPTResponse(prompt: string) {
  const gptResponse = await openai.chat.completions.create({
    messages: [
      {
        role: 'system', // 'system' or 'user'
        content: prompt,
      },
    ],
    model: 'gpt-3.5-turbo',
  });
  return gptResponse.choices[0]?.message?.content || '';
}

async function getGPTStreamingResponse(prompt: string) {
  const stream = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}
