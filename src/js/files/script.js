// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



const itemBasket = document.querySelectorAll('.item-basket-list');
[...itemBasket].forEach((item) => { 
    const deleteButton = item.querySelector('.item-basket-list__delete');
    deleteButton.addEventListener('click', function (e) {
        item.style.backgroundColor = "red";
    })
})





// const formatNumber = (x) => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');


// console.log(itemBasket);

// [...itemBasket].forEach((item) => {
//     const itemInput = item.querySelector('.quantity-ibl__input>input');
//     const itemPrice = item.querySelector('.item-basket-list__price');
//     const itemDataPrice = itemInput.dataset.price;
//     let itemQuantity = itemInput.value;
//     let itemCost = (+itemDataPrice) * (+itemQuantity);

//     itemPrice.textContent = formatNumber(itemCost);
// })

console.log(1 / 0); 