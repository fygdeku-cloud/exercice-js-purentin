

const btnIncrement = document.getElementById('btn-increment');
const counterValue = document.getElementById('counter-value');

const galleryImg = document.getElementById('gallery-img');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const images = [
    "assets/images/image2.png",
    "assets/images/image3.jpeg",
    "assets/images/image1.png", 
];

const valider=document.getElementById("vald");
const prenom=document.getElementById("pnm");
const infosbull=document.getElementById("infos");

const nom=document.getElementById("nm");
const infosbull2=document.getElementById("infos2");

const email=document.getElementById("email");
const infosbull4=document.getElementById("infos4");

const age=document.getElementById("ag");
const infosbull3=document.getElementById("infos3");

valider.addEventListener("click", valideur);

function valideur(e){
    if(prenom.validity.valueMissing){
        e.preventDefault();
        infosbull.textContent='Prenom manquant';
        infosbull.style.color='red'
    }
    if(nom.validity.valueMissing){
        e.preventDefault();
        infosbull2.textContent='nom manquant';
        infosbull2.style.color='red'
    }
    if(email.validity.valueMissing){
        e.preventDefault();
        infosbull4.textContent='email invalide';
        infosbull4.style.color='red'
    }
    if(age.validity.valueMissing || age.value<=0){
        e.preventDefault();
        infosbull3.textContent='veuillez verifier votre age';
        infosbull3.style.color='red'
    }
}


let count = 0;

btnIncrement.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});

// --- PARTIE 2 : La Galerie d'images ---

let currentIndex = 0;

function updateImage() {
    galleryImg.src = images[currentIndex];
}

btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});