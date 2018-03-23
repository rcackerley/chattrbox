const ws = new WebSocket('ws://localhost:3001')

const goButton = document.querySelector('body > div > section > form > div > span > button');
const input = document.querySelector('body > div > section > form > div > input');
const ul = document.querySelector('body > div > div > ul');

let renderIncomingMessage = (event) => {
  console.log('receiving');
  var li = document.createElement('li');
  console.log(event);
  li.textContent = event.data;
  ul.appendChild(li);
}
let renderOutgoingMessage = (message) => {
  var li = document.createElement('li');
  li.setAttribute('style', 'text-align:right');
  console.log(message);
  li.textContent = message;
  ul.appendChild(li);
}
let getMessage = () => {return input.value};

let sendMessage = (message) => {
  ws.send(message);
  renderOutgoingMessage(message);
}

goButton.addEventListener('click', (event) => {
  var message = getMessage();
  sendMessage(message);
  console.log(message);
})


ws.addEventListener('message', (event) => {
  renderIncomingMessage(event);
})
