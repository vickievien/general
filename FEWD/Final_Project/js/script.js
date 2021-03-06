// Toggle Nav Burger
function toggleBurgerNav() {
    let targetNav = document.querySelector('.ww-nav-list').classList.toggle('ww-nav-list-toggle');
}

let burger = document.querySelector('.ww-nav-burger');
burger.addEventListener('click', toggleBurgerNav);


// This is for the photo gallery
let thumbPic = document.querySelectorAll('.thumb-gal-pic');
console.log(thumbPic);

function applyBig () {
    document.querySelector('.big-gal-pic').setAttribute('src', this.getAttribute('src'));

    document.querySelector('.big-gal-pic').setAttribute('alt', this.getAttribute('alt'));

    document.querySelector('.big-gal-title').innerHTML = this.getAttribute('alt');
    
    document.querySelector('.big-gal-subtitle').innerHTML = this.parentElement.querySelector('.hidden-gal-subtitle').innerText;
}

thumbPic.forEach(n => {
    n.addEventListener('click', applyBig);
});


