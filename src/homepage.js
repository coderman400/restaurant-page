import name from './name.png'
import './style.css';
export default function loadHomepage(){
    console.log("called homepage load");
    const content = document.querySelector('#content');
    let nameimg = new Image();
    nameimg.src = name;

    let catchphrase = document.createElement('p');
    catchphrase.textContent = "~Where each dish just makes you go skibidi woo woo~"

    content.appendChild(nameimg);
    content.appendChild(catchphrase);
}