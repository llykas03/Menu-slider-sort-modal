/**
 *  Responsive Menu
 */
const mobileMenu = () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');
    //ako je txt u btn menu onda otvori i obrnuto
    if (btn.innerText === 'MENU') {
        menu.style.display = 'block';
        //menu to close
        btn.innerHTML = 'CLOSE';
    } else {
        menu.style.display = 'none';
        //close to menu
        btn.innerHTML = 'MENU';
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1000) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
}
/**
 *  Image slider (carusel)
 */
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;
// Move left and right
const moveRight = () => {
    displayNone();
    imgNum++;
    if (imgNum === pictures.length) {
        imgNum = 0;
    }
    pictures[imgNum].style.display = 'block';
}
const moveLeft = () => {
    displayNone();
    imgNum--;
    if (imgNum === -1) {
        imgNum = pictures.length - 1; //u minusu je zbog indexa nemamo 3 sliku nego je treca 2
    }
    pictures[imgNum].style.display = 'block';
}
// Liseners for arrows
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);
// All img is display = none
const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    });
}
/**
 *  Categories
 */
const portfolioBtns = document.querySelectorAll('.portfolio-categories button');
portfolioBtns.forEach((button) => {
    button.addEventListener('click', () => {
        let category = button.getAttribute('data-category');
        let portfolioItems = document.querySelectorAll('.portfolio-single-item');
        portfolioItems.forEach((item) => {
            item.style.display = 'none';
        });
        if (category === 'sve') {
            portfolioItems.forEach((item) => {
                item.style.display = 'block';
            });
        }
        portfolioItems.forEach((item) => {
            if (item.getAttribute('data-category').includes(category)) {
                item.style.display = 'block';
            }
        });
    });
});
/**
 *  Modal
 */
const modal = document.querySelector('.modal-section button');
modal.addEventListener('click', () => {
    let modalText = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    modalText.style.display = 'block';
    overlay.style.display = 'block';
})
const closeModal = document.querySelector('#closeModal');
closeModal.addEventListener('click', () => {
    let modalText = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    modalText.style.display = 'none';
    overlay.style.display = 'none';
})
// Overlay close
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', () => {
    let modalText = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    modalText.style.display = 'none';
    overlay.style.display = 'none';
})