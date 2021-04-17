require('./bootstrap');


const pageNumber = document.getElementById('pageNumbers');
const pageNumber02 = document.getElementById('pageNumber02');




console.log(pageNumber);

window.addEventListener("scroll", ()=>{
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);    
       
});

const options = {
    rootMargin:'0px 0px 0px 0px' ,
    threshold: 0.5,
}

function callback(entries,observer) {
    
    if(entries[0].isIntersecting){
        console.log("Se llamó al callback");
        let i = 0;
        const contador = setInterval(()=>{
            pageNumber.innerText = `+${i}`;
            i++;
            if( i == 12){
                clearInterval(contador);
            }
        },100)
    }
    
}
const observer = new IntersectionObserver(callback,options);
observer.observe(pageNumber)

const options1 = {
    rootMargin:'0px 0px 0px 0px' ,
    threshold: 0.5,
}

function callback1(entries,observer1) {
    
    if(entries[0].isIntersecting){
        console.log("Se llamó al callback");
        let i = 0;
        const contador = setInterval(()=>{
            pageNumber02.innerText = `+${i}`;
            i++;
            if( i == 10){
                clearInterval(contador);
            }
        },100)
    }
    
}
const observer1 = new IntersectionObserver(callback1,options1);
observer1.observe(pageNumber02)






