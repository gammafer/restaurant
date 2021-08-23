import navbar from "./navbar";
import homePage from "./home"
import menuPage  from "./menu";
function header(){
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
    const content= document.getElementById("content");
    content.appendChild(navbar());
    content.appendChild(header());
    content.appendChild(homePage());
}

export default createPage;