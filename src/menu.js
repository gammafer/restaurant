//Kiírandó adatok
const pizzaNames=['BBQ BURNT ENDS','FUNGHI DI BOSCO','POLLO ITALIANO','SLOPPY VEGAN ROMANA','AMERICAN HOT','DIAVOLO','PADANA','POLLO AD ASTRA']

const pizzaDescription=['Slow-cooked beef brisket with a hint of chipotle, sweet & smoky bbq sauce, mozzarella and red onions, topped with roasted tomatoes and parsley on a Romana base.',
'Portobello mushrooms, tomato with garlic, mozzarella and rosemary, topped with parsley and Gran Milano cheese on a Romana base.',
'Chicken, spinach, mozzarella and garlic oil on a béchamel base, topped with slow-roasted tomatoes, basil & pine kernel pesto and Gran Milano cheese on a Romana base.​',
'Quorn™ pieces with green pepper, red onion, tomato, smoky chilli, garlic oil, vegan mozzarella alternative and parsley on a Romana base.',
'Pepperoni, mozzarella and tomato, with your choice of hot green, hot & sweet chilli or jalapeño peppers on a Romana base.',
'Hot spiced beef, pepperoni, mozzarella, tomato, green pepper, red onion and Tabasco, with your choice of hot green, hot & sweet chilli or jalapeño peppers on a Romana base.',
'Goat’s cheese, mozzarella, caramelised onion, spinach, red onion, tomato and garlic oil on a Romana base.',
'Chicken, sweet red peppers, red onion, mozzarella, tomato, Cajun spices and garlic oil on a Romana base.']

const pizzaPicture=['BBQBurntEndsRomanaPizza.jpg','FunghiDiBoscoRomanaPizza.jpg','PolloTuscanRomanaPizza.jpg','SloppyVeganRomanaPizza.jpg','american_hot_romana_384.jpg','diavolo_romana_384.jpg','padana_romana_384.jpg','pollo_ad_astra_romana_384.jpg']

function menuPage(){
    //A tab alapja
    const menuTab=document.createElement('div');
    menuTab.classList.add('menuTab');
    const menuText=document.createElement('h1');
    menuText.classList.add('menuText');
    menuText.innerHTML='Menu';
    menuTab.appendChild(menuText);
    for (let i=0;i<pizzaNames.length;i++){
        //Subdivs made automatically for each pizza
       const pizzaDiv=document.createElement('div');
       pizzaDiv.classList.add('pizzaDiv');
       const pizzaText=document.createElement('h1');
       pizzaText.classList.add('pizzaText');
       pizzaText.innerHTML=pizzaNames[i];
       const pizzaSubDiv=document.createElement('div');
       pizzaSubDiv.classList.add('pizzaSubDiv')
       const pizzaDesc=document.createElement('p');
       pizzaDesc.classList.add('pizzaDesc');
       pizzaDesc.innerHTML=pizzaDescription[i];
       const pizzaImg=document.createElement('img');
       pizzaImg.classList.add('pizzaImg');
       pizzaImg.src=pizzaPicture[i];

       pizzaDiv.appendChild(pizzaText);

       pizzaSubDiv.appendChild(pizzaDesc);
       pizzaSubDiv.appendChild(pizzaImg);

       pizzaDiv.appendChild(pizzaSubDiv);
       menuTab.appendChild(pizzaDiv);
    }
    return menuTab;
}

export default menuPage;