let totalPrice = 0;
updatePrice();
function toAdd(what){
    const a = document.getElementById('Ingredients');
    const toAdd = document.createElement('div');
    toAdd.innerHTML="1";
    toAdd.classList.add(what);

    a.appendChild(toAdd);
    totalPrice+=2;
    updatePrice();
}

function toRemove(what){
    const a = document.getElementById('Ingredients');
    const toRemove = Array.from(a.getElementsByClassName(what)).find(i => i.classList.contains(what) && !i.classList.contains('hidden'));
    toRemove.classList.add('hidden');
    totalPrice-=2;
    updatePrice();
}

function updatePrice(){
    const price = document.getElementById('price');
    price.innerText= totalPrice;
}

