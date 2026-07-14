const paragraphe1=document.getElementById('p1');
const first_btn=document.querySelector('.btn');
const title=document.getElementById('title');
const paragraphe2=document.getElementById('p2');
const btn_move=document.getElementById('btn2');
const image=document.getElementById('image');



first_btn.addEventListener('click',()=>{
    if (paragraphe1.innerHTML != 'Welcome to children' && first_btn.style.backgroundColor != 'yellow' && title.innerHTML !=' CONNECTED') {
        paragraphe1.innerHTML='Welcome to children';
        first_btn.style.backgroundColor= 'violet';
        title.innerHTML='CONNECTED';
    }else{
        paragraphe1.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates reiciendis tempora tempore ipsum ratione nobis provident labore placeat quas, vero iure cum. Quibusdam neque temporibus reiciendis beatae architecto soluta.';
        first_btn.style.backgroundColor='skyblue';
        title.innerHTML='DISCONNECTED';
    }
})
btn_move.addEventListener('click', ()=>{
    event.preventDefault;
    if (paragraphe2.style.fontWeight=='800' && image.src != 'boro.jpeg') {
        paragraphe2.style.fontWeight='100';
        image.src='assets/images/boro.jpeg';
    }
    else{
        paragraphe2.style.fontWeight='800';
        image.src='assets/images/apt.jpeg';
    }
})
