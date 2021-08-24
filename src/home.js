function homePage(){
    const homeTab=document.createElement('div');
    homeTab.classList.add('homeTab');
    const homeText=document.createElement('h1');
    homeText.classList.add('homeText');
    homeText.innerHTML='Welcome to Mamma Pizzeria! Mamma Mia!'
    homeTab.appendChild(homeText);
    const pizzaBox=document.createElement('img');
    pizzaBox.classList.add('pizzaBox');
    pizzaBox.src="pizzabox.jpg";
    homeTab.appendChild(pizzaBox);
    const pepperoni=document.createElement('img');
    pepperoni.classList.add('pepperoni');
    pepperoni.src="Pepperoni-Pizza.png";
    homeTab.appendChild(pepperoni);
    
    return homeTab;
}

export default homePage;
