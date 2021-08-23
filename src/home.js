function homePage(){
    const homeTab=document.createElement('div');
    homeTab.classList.add('homeTab');
    const homeText=document.createElement('h1');
    homeText.classList.add('homeText');
    homeText.innerHTML='Welcome to Mamma Pizzeria! Mamma Mia!'
    homeTab.appendChild(homeText);
    
    return homeTab;
}

export default homePage;
