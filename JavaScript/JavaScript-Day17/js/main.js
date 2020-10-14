let chat = [];

chat.push(
    {
        text: '$100',
        username: 'Bidder1'
    },
    {
        text: "$150",
        username: 'Bidder2'
    }
);

printChat();

function printChat() {
    let chatHtml = '';
    chat.forEach((message) => {
        chatHtml += `
            <div class="message">
                <p class="text">${message.text}</p>
                <p class="username">${message.username}</p>
            </div>
            `;
        });
    document.getElementById('chat-window').innerHTML = chatHtml;
}

function addBid(username) {
    let text = document.getElementById(username).value;
    document.getElementById(username).value = '';
    chat.push({
        text: text,
        username: username,
    });
    printChat();
}
  
  
  
