//=======PREMIERE QUESTION=====
const name=document.getElementById('name');
const button=document.getElementById('btn');
const addbtn=document.getElementById('add');
const delbtn=document.getElementById('remove');
const item=document.createElement('li');

const list_element=[
    {
    'id':1,
    'name':'Element'
    },
    {'id':2,
    'name':'Element'
    },
    {
    'id':2,
    'name':'Element'
    },
];
const myliste=document.getElementById('list');


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
    myliste.innerHTML +=`<li>${li.name}</li>`;
});
addbtn.addEventListener('click',()=>{
    item.textContent='Element';
     list_element.appendChild(item);
})