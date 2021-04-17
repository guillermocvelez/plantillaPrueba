require('./bootstrap');


const caption = document.querySelectorAll("carousel-caption");

window.addEventListener("scroll", ()=>{
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})

/* caption.forEach(c , () => {
    c.addEventListener
} ) */


