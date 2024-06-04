import './style.css';

import name from './name.png'
console.log("stinky");
const content = document.querySelector('#content');
let nameimg = new Image();
nameimg.src = name;

let catchphrase = document.createElement('p');
catchphrase.textContent = "~Where each dish just makes you go skibidi woo woo~"

content.appendChild(nameimg);
content.appendChild(catchphrase);