import './style.css';
import cheeseImg from './cheese.jpg';
import breadCrumbs from './bread-crumbs.jpg';
import steak from './steak.jpg';
import rat from './rat.jpg';
import battery from './battery.jpg';
export default function loadMenu(){
    const content = document.querySelector('#content')
    const div = document.createElement('div');
    div.id = 'menu-container';

    content.appendChild(div);

    function Item(img, title, desc){
        let imageObj = new Image();
        imageObj.src = img;
        imageObj.style.width = '14rem';
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
    new Item(breadCrumbs, 'Bread crumbs: 30eur', 'Found it on the floor. Used to be bread');
    new Item(steak, 'Steak au Poivre with Red Wine Pan Sauce: 14eur', 'Idk abt this, kinda mid');
    new Item(rat, 'Timothy: 1eur', "Che F. Ratt's cousin TImothy, he's a fat pig (or rat)");
    new Item(cheeseImg,'The Same Cheese: 52eur', "It's just the cheese again, but more expensive");
    new Item(battery, 'Double AA battery: 5eur', "Looking for a little bzzt in ur life?");
}