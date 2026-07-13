const paragraphe1=document.getElementById('p1');
const first_btn=document.querySelector('.btn');
const title=document.getElementById('title');
const paragraphe2=document.getElementById('p2');
const btn_move=document.getElementById('btn2');
const image=document.getElementById('image');


paragraphe1.innerHTML='Welcome to children';
first_btn.style.backgroundColor= 'yellow';
title.innerHTML='CONNECTED';
paragraphe2.style.backgroundColor='green';

btn_move.addEventListener('click', ()=>{
    event.preventDefault;
    if (paragraphe2.style.fontWeight=='800' && image.src != 'boro.jpeg') {
        paragraphe2.style.fontWeight='100';
        image.src='boro.jpeg';
    }
    else{
        paragraphe2.style.fontWeight='800';
        image.src='apt.jpeg';
    }
})
