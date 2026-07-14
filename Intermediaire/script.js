//=======PREMIERE QUESTION=====
const name=document.getElementById('name');
const button=document.getElementById('btn');
const addbtn=document.getElementById('add');
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
list_element.forEach((li) => {
    myliste.innerHTML +=`<li id="li">${li.name}</li>`;
});
addbtn.addEventListener('click',()=>{
    event.preventDefault;
    let item=document.createElement('li');
    item.textContent=`Element ${elementindex}`;
    document.getElementById('list').appendChild(item);
    elementindex ++ ;
})
delbtn.addEventListener('click',()=>{
    const lastitem=myliste.lastElementChild;
    if (lastitem) {
        lastitem.remove();
    }
})


//===================================TROIXIEME
const btnToggle = document.getElementById('btn-toggle');
btnToggle.addEventListener('click', () => {
    btnToggle.classList.toggle('active');
});

btnShow.addEventListener('click', () => {
    elementMystere.classList.remove('hidden');
});
