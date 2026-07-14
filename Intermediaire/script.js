//=======PREMIERE QUESTION=====
const name=document.getElementById('name');
const button=document.getElementById('btn');
const addbtn=document.getElementById('add');
const msg=document.getElementById('msg');
const delbtn=document.getElementById('remove');

const list_element=[];
const myliste=document.getElementById('list');
let elementindex=1;

const btnShow = document.getElementById('btn-show');
const elementMystere = document.getElementById('element-mystere');

name.addEventListener('input',()=>{
    if (name.value.trim() !=="") {
       name.style.backgroundColor='green';
    }else{
        name.style.backgroundColor='inherit';
    }
    });
button.addEventListener('click',()=>{
    if (name.value) {
        alert('You are registed');
    }
    else{
        alert('Please try again');
    }
}) 

//===========DEUXIEME QUESTION========

addbtn.addEventListener('click',()=>{
    msg.style.display='none';
    event.preventDefault;
    let item=document.createElement('li');
    item.textContent=`Element ${elementindex}`;
    document.getElementById('list').appendChild(item);
    elementindex ++ ;
})
delbtn.addEventListener('click',()=>{
    const lastitem=myliste.lastElementChild;
    if (lastitem && myliste.innerHTML != "") {
        lastitem.remove();
    }
    else{
        msg.style.display='block';
    }
})


//==============================TROIXIEME
const btnToggle = document.getElementById('btn-toggle');
btnToggle.addEventListener('click', () => {
    btnToggle.classList.toggle('active');
});

btnShow.addEventListener('click', () => {
    if (btnShow.innerHTML == "Show text") {
        elementMystere.classList.remove('hidden');
        btnShow.innerHTML="Hide text";
    }
    else if(btnShow.innerHTML == "Hide text"){
        elementMystere.classList.add('hidden');
        btnShow.innerHTML="Show text";
    }else{
        console.error("Erreur");
    }
});
