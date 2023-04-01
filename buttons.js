const buttona = document.querySelector('#container')
for(i=0; i< 100; i++){
    const button1 = document.createElement('button') 
    button1.innerText = ' i m button'
    buttona.appendChild(button1)
}

const makeRandomColor = () =>
{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
const buttons = document.querySelectorAll('button')
for (let button of buttons){
// button.addEventListener('click', () => {
//      button.style.backgroundColor = makeRandomColor();
//     })
button.addEventListener('click', colorize)
}
const h1a = document.querySelectorAll('h1')
for(let h1 of h1a) {
    // h1.addEventListener('dblclick' , ()  => {
    //    h1.style.backgroundColor = makeRandomColor();
h1.addEventListener('click', colorize)    
// })

}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}