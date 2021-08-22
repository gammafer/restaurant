function navbar(){
    const navbar=document.createElement('div');
    navbar.classList.add('navbar');

    const homeBtn =document.createElement('button');
    homeBtn.classList.add('navBtn');
    homeBtn.innerHTML="Home";

    const aboutBtn =document.createElement('button');
    aboutBtn.classList.add('navBtn');
    aboutBtn.innerHTML="About";

    const contactBtn =document.createElement('button');
    contactBtn.classList.add('navBtn');
    contactBtn.innerHTML="Contact";

    navbar.appendChild(homeBtn);
    navbar.appendChild(aboutBtn);
    navbar.appendChild(contactBtn);

    return navbar;
}

export default navbar;