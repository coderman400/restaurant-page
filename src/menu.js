import './style.css';
export default function loadMenu(){
    const content = document.querySelector('#content')
    const div = document.createElement('div');
    div.id = 'menu-container';

    content.appendChild(div);

}