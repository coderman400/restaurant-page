import name from './name.png'
import './style.css';
export default function loadHomepage(){
    console.log("called homepage load");
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.id = 'home-div'
    let nameimg = new Image();
    nameimg.src = name;

    let catchphrase = document.createElement('p');
    catchphrase.textContent = "~Where each dish just makes you go skibidi woo woo~"
    div.appendChild(nameimg);
    div.appendChild(catchphrase);
    content.appendChild(div);
}