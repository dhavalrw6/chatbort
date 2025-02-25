function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;
    
    let chatBox = document.getElementById("chat-box");
    appendMessage("You", userInput);
    document.getElementById("user-input").value = "";
    
    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        appendMessage("Bot", botResponse);
    }, 500);
}

function appendMessage(sender, message) {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messageElement.classList.add("message");
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();
    let responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "what is your name": "I'm your friendly AI chatbot!",
        "bye": "Goodbye! Have a wonderful day!",
        "hi":"Hello Kem cho???",
    };
    return responses[input] || "I'm not sure I understand. Can you rephrase?";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
