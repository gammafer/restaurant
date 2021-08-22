function header(){
    const header=document.createElement("header");
    header.classList.add("header");
    
    const imageDiv=document.createElement("div");
    imageDiv.classList.add('coverImageDiv')
    const image=document.createElement("img");
    image.classList.add("coverImage");
    image.src="OIP.jpg";
    imageDiv.appendChild(image);
    header.appendChild(imageDiv);


    return header;
}

function createPage(){
    const content= document.getElementById("content");
    content.appendChild(header());
}

export default createPage;