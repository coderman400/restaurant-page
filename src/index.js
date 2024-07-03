
import homepage from './homepage.js';
import './style.css';
import about from './about.js';
import menu from './menu.js';
const content = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const abtBtn = document.querySelector('#about');
const menuBtn = document.querySelector('#menu');
homepage();

homeBtn.addEventListener("click", ()=>{
    content.innerHTML = '';
    homepage();
})

abtBtn.addEventListener("click", ()=>{
    content.innerHTML = '';
    about();
})

menuBtn.addEventListener("click", ()=>{
    content.innerHTML = '';
    menu();
})

