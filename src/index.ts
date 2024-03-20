import { getGPTResponse } from './openai.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askQuestion() {
  rl.question('Enter a question or QUIT: ', async (input) => {
    if (input === 'QUIT') {
      rl.close();
      process.exit(0);
    } else {
      const response = await getGPTResponse(input);
      console.log(response);
      askQuestion(); // Ask for another question
    }
  });
}

askQuestion();
