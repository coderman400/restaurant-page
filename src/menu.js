import './style.css';
import cheeseImg from './cheese.jpg';
export default function loadMenu(){
    const content = document.querySelector('#content')
    const div = document.createElement('div');
    div.id = 'menu-container';

    content.appendChild(div);

    function Item(img, title, desc){
        let imageObj = new Image();
        imageObj.src = img;

        this.img = img;
        this.title = title;
        this.desc=  desc;
        
        let itemDiv = document.createElement('div');
        let rightDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        const itemPrice = document.createElement('p');
        const itemInfo = document.createElement('p');
    
        itemPrice.textContent = title;
        itemInfo.textContent = desc;

        rightDiv.className= 'right-div';
        rightDiv.appendChild(itemPrice);
        rightDiv.appendChild(itemInfo);

        itemDiv.appendChild(imageObj);
        itemDiv.appendChild(rightDiv);

        div.appendChild(itemDiv);

    }

    new Item(cheeseImg,'Cheese: 50eur', 'Finely crafted rat cuisine. Contains... cheese');


}