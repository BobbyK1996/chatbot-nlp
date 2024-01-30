// @ts-nocheck
import { NlpManager } from 'node-nlp';

//Instantiate NlpManager
const manager = new NlpManager({ languages: ['en'] });

//Add training data
manager.addDocument('en', 'hello', 'greeting');
manager.addDocument('en', 'hi', 'greeting');
manager.addDocument('en', 'hiya', 'greeting');
manager.addDocument('en', 'yo', 'greeting');
manager.addDocument('en', 'good morning', 'greeting');
manager.addDocument('en', 'morning', 'greeting');
manager.addDocument('en', 'good afternoon', 'greeting');
manager.addDocument('en', 'afternoon', 'greeting');
manager.addDocument('en', 'good evening', 'greeting');
manager.addDocument('en', 'evening', 'greeting');
manager.addDocument('en', 'good day', 'greeting');

//Add answers
manager.addAnswer('en', 'greeting', 'Hey!');
manager.addAnswer('en', 'greeting', 'Hi');
manager.addAnswer('en', 'greeting', 'Hiya');
manager.addAnswer('en', 'greeting', 'Hey there');
manager.addAnswer('en', 'greetings.bye', 'Cya');
manager.addAnswer('en', 'greetings.bye', 'See you soon');
manager.addAnswer('en', 'greetings.bye', 'Until next time');
manager.addAnswer('en', 'greetings.bye', 'goodbye');
manager.addAnswer('en', 'greetings.bye', 'later');

//Train the model
const trainAndSave = async () => {
  try {
    await manager.train();
    manager.save();
    const response = await manager.process('en', 'hey sir');
    console.log(response);
  } catch (er) {
    console.error(er);
  }
};

trainAndSave();
