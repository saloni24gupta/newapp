const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
function fixNav() {
    // console.log(window.scrollY, nav.offsetHeight +150)
    if(window.scrollY > nav.offsetHeight + 150 ){
        nav.classList.add('active')

    }
    else {
        nav.classList.remove('active')
    }
}
let text = "65657Hello World!";
let encoded = window.btoa(text);
let decoded = window.atob(encoded);
console.log(encoded)