
const aboutButton = document.querySelector('.about_button-js');
aboutButton.addEventListener('click', ()=>{
    const aboutText = document.querySelector('.about_paragraphs-js');
    aboutText.classList.toggle('about_paragraphs_open');
    if(aboutButton.innerHTML=="Zwiń"){
        aboutButton.innerHTML="Zobacz więcej";
    }
    else{
        aboutButton.innerHTML="Zwiń";
    }
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', ()=>{
    const nav = document.querySelector('.navigation-js');
    nav.classList.toggle('navigation_open');
});

