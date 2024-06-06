
import homepage from './homepage.js';
import './style.css';
import about from './about.js';
const content = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const abtBtn = document.querySelector('#about');

homepage();

homeBtn.addEventListener("click", ()=>{
    content.innerHTML = '';
    homepage();
})

abtBtn.addEventListener("click", ()=>{
    content.innerHTML = '';
    about();
})

