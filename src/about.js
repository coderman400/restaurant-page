import chefImage from './chef.jpg';

export default function loadAbout(){
    console.log("called about");
    const content = document.querySelector("#content");
    const container = document.createElement('div');
    container.classList.add('container');

    let chefImg = new Image();
    chefImg.src = chefImage;
    chefImg.classList.add('chefImage');

    let rightDiv = document.createElement('div');
    rightDiv.style.display = 'grid';
    rightDiv.style.height = 'max-content';
    let quote = document.createElement('p');
    quote.textContent = '"no cats allowed"';
    quote.style.fontSize = '2rem';
    let name = document.createElement('p');
    name.classList.add('about-text');
    name.textContent = '-Che F. Ratt'

    let description = document.createElement('p');
    description.id = "description";
    description.textContent = "Che F. Ratt  has been cooking since the plague. He like cheese. Rat family died during mass extermination. the food here is not poisoned. enjoy finest dining experience at Le'Skibidi ";

    
    rightDiv.appendChild(quote);
    rightDiv.appendChild(name);
    rightDiv.appendChild(description);

    container.appendChild(chefImg);
    container.appendChild(rightDiv);

    content.appendChild(container);

}