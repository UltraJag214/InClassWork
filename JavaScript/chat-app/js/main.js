let chat = [];

chat.push({
    text: 'Hi',
    username: 'dragonslayer22',
},
{
    text: 'What\'s up',
    username: 'fresh4days',
}
);

printChat();

function printChat() {
    let chatHtml = '';
    chat.forEach((message) => {
        chatHtml += `
            <div class="message">
                <p class="text">${chat[i].text}</p>
                <p class="username">${chat[i].username}</p>
            </div>
            `;
    });
    document.getElementById('chat-window').innerHTML = chatHtml;
}





function addMessage(username) {
    let text = document.getElementById(username).value;
    document.getElementById(username).value = '';
    chat.push({
        text: text,
        username: username,
    });
    printChat();
}