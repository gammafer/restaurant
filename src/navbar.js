function navbar(){
    const navbar=document.createElement('div');
    navbar.classList.add('navbar');

    const homeBtn =document.createElement('button');
    homeBtn.classList.add('navBtn');
    homeBtn.innerHTML="Home";
    homeBtn.addEventListener('click',changeTab);

    const aboutBtn =document.createElement('button');
    aboutBtn.classList.add('navBtn');
    aboutBtn.innerHTML="Menu";
    aboutBtn.addEventListener('click',changeTab);

    const contactBtn =document.createElement('button');
    contactBtn.classList.add('navBtn');
    contactBtn.innerHTML="Contact";
    contactBtn.addEventListener('click',changeTab);

    navbar.appendChild(homeBtn);
    navbar.appendChild(aboutBtn);
    navbar.appendChild(contactBtn);

    return navbar;
}
function changeTab(){

}
export default navbar;