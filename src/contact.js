function contactPage(){
    const contactTab=document.createElement('div');
    contactTab.classList.add('contactTab');
    const contactDiv=document.createElement('div');
    contactDiv.classList.add('contactDiv');
    const contactSubDiv=document.createElement('div');
    contactSubDiv.classList.add('contactSubDiv');
    const p1=document.createElement('p');
    p1.innerHTML='Petőfi u. 31-1 Budaörs 2040';
    p1.classList.add('Address');
    const p2=document.createElement('p');
    p2.innerHTML='+36(30)1234567';
    p2.classList.add('Telephone');
    contactSubDiv.appendChild(p1);
    contactSubDiv.appendChild(p2);

    const googleMap=document.createElement('iframe');
    googleMap.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.577922224128!2d18.95182221592574!3d47.45916647917523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741de268f46eda7%3A0xccd22ef20f2f8321!2zQnVkYcO2cnMsIFBldMWRZmkgdS4gMzEtMSwgMjA0MA!5e0!3m2!1shu!2shu!4v1629898273822!5m2!1shu!2shu"
     googleMap.style.width="600";
     googleMap.style.height="600"
     googleMap.style="border:0;"
     googleMap.allowfullscreen="" 
     googleMap.loading="lazy";
     googleMap.classList.add("googleMap");

     contactDiv.appendChild(contactSubDiv);
     contactDiv.appendChild(googleMap);

     contactTab.appendChild(contactDiv);

     return contactTab;
}

export default contactPage;