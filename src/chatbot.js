import { NlpManager } from 'node-nlp';

//New instance of NlpManager
const manager = new NlpManager({ languages: ['en'] });

//Add training data
manager.addDocument('en', 'What is your name', 'bot.name');
manager.addDocument('en', 'Where is your location', 'bot.location');
manager.addDocument('en', 'What is your purpose', 'bot.purpose');

//Train the model
manager.train();

//Process Input
const userInput = async (input) => {
  const response = await manager.process('en', input);
  console.log(response);
};

userInput('What is your name');
