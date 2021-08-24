import navbar from "./navbar";
import homePage from "./home"
import menuPage  from "./menu";

let currentPage;
const content= document.getElementById("content");

function header(){
    //Building header
    const header=document.createElement("header");
    header.classList.add("header");
    
    const imageDiv=document.createElement("div");
    imageDiv.classList.add('coverImageDiv');

    const image=document.createElement("img");
    image.classList.add("coverImage");
    image.src="OIP.jpg";
    
    const logoText=document.createElement("h1");
    logoText.innerHTML="Mamma Pizzeria";
    logoText.classList.add("logoText");

    imageDiv.appendChild(logoText);
    imageDiv.appendChild(image);
    header.appendChild(imageDiv);


    return header;
}


function createPage(){
    
    content.appendChild(navbar());
    content.appendChild(header());
    content.appendChild(homePage());
    currentPage=content.childNodes[2]; //Third node is changeable with buttons
    console.log(currentPage);
    const btns=Array.from(document.getElementsByTagName('button'));
    btns.forEach(button => {
        button.addEventListener('click',function(e){changeTab(e)}); //Adding eventlistener to our buttons
    });
}

function changeTab(e){
    let newTab=e.target.innerHTML;
    deleteCurrentTab(currentPage);
    if(newTab=='Home'){
        content.appendChild(homePage());
    }
    else if(newTab=='Menu'){
        content.appendChild(menuPage());
    }
    currentPage=content.childNodes[2];
    console.log(currentPage);
}

function deleteCurrentTab(page){
            content.removeChild(currentPage);
}

export default createPage;