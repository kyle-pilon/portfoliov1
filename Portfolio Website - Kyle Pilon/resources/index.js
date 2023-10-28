const navToggle = document.querySelector('.btn');
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
} )

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

window.addEventListener('DOMContentLoaded' ,setup);
function setup() {
    const options = {
        rootMargin:"0px 0px -100px 0px"
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    },options);

    const h1 = document.querySelector("h1");
    observer.observe(h1);

    const h4 = document.querySelector("h4");
    observer.observe(h4);

    // const li = document.querySelectorAll("li");
    // li.forEach (li => observer.observe(li));

    const paras = document.querySelectorAll("p");
    paras.forEach (p => observer.observe(p));

    // const img = document.getElementsByClassName("img");
    // img.forEach (img-1 => observer.observe(img));
    
}