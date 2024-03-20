import { getGPTResponse } from './openai.js';

console.log(`The application name is "${process.env.APP_NAME}"`);

async function main() {
  const response = await getGPTResponse('What is the meaning of life?');
  console.log(response);
}

main();
