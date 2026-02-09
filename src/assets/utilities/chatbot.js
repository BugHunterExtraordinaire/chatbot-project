export function chatbot(userMessage) {
  const greetings = ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening"];
  const farewells = ["bye", "goodbye", "see you", "take care", "farewell"];
  const coinFlip = ["coin", "flip", "toss"];
  const diceRoll = ["dice", "roll", "throw"];
  const cardDraw = ["card", "draw", "pick"];
  const dateInquiry = ["today", "date", "day"];
  const helpRequest = ["help", "assist", "support"];

  const message = userMessage.toLowerCase();

  if (greetings.some(word => message.includes(word))) {
    return { sender: "bot", 
             message: "Hello! How can I assist you today?", 
             key: crypto.randomUUID() };
  }
  if (farewells.some(word => message.includes(word))) {
    return { sender: "bot", 
             message: "Goodbye! Have a great day!", 
             key: crypto.randomUUID() };
  }
  if (coinFlip.some(word => message.includes(word))) {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    return { sender: "bot", 
             message: `The coin landed on ${result}.`, 
             key: crypto.randomUUID() };
  }
  if (diceRoll.some(word => message.includes(word))) {
    const result = Math.floor(Math.random() * 6) + 1;
    return { sender: "bot", 
             message: `You rolled a ${result}.`, 
             key: crypto.randomUUID() };
  }
  if (dateInquiry.some(word => message.includes(word))) {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[today.getDay()];
    return { sender: "bot", 
             message: `Today's date is ${dayName} ${dateString}.`, 
             key: crypto.randomUUID() };
  }
  if (helpRequest.some(word => message.includes(word))) {
    return { sender: "bot", 
             message: "I'm here to help! You can ask me to flip a coin, roll a dice, draw a card, or inquire about today's date.", 
             key: crypto.randomUUID() };
  }
  if (cardDraw.some(word => message.includes(word))) {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    return { sender: "bot",
              message: `You drew the ${randomValue} of ${randomSuit}.`,
              key: crypto.randomUUID() };
  }
  return { sender: "bot", 
           message: "I'm sorry, I didn't understand that. Can you please rephrase?", 
           key: crypto.randomUUID() };
}