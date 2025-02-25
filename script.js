function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;
    
    appendMessage("You", userInput, "user-message");
    document.getElementById("user-input").value = "";
    
    showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator();
        let botResponse = getBotResponse(userInput);
        appendMessage("Bot", botResponse, "bot-message");
    }, 1000);
}

function appendMessage(sender, message, className) {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong><br>${message}`;
    messageElement.classList.add("message", className);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
    let chatBox = document.getElementById("chat-box");
    let typingElement = document.createElement("div");
    typingElement.innerHTML = "Bot is typing...";
    typingElement.classList.add("typing-message");
    typingElement.id = "typing-indicator";
    chatBox.appendChild(typingElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
    let typingElement = document.getElementById("typing-indicator");
    if (typingElement) {
        typingElement.remove();
    }
}

function getBotResponse(input) {
    input = input.toLowerCase();
    let responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "what is your name": "I'm your friendly AI chatbot!",
        "bye": "Goodbye! Have a wonderful day!"
    };
    return responses[input] || "I'm not sure I understand. Can you rephrase?";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}