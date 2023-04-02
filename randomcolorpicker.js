const button  = document.querySelector('button')
const h1 = document.querySelector('h1');
button.addEventListener('click', () => {
    const newcolor = makeRandomColor()
    document.body.style.backgroundColor =  newcolor;
h1.innerText = newcolor;
})

const makeRandomColor = () => {
    const r= Math.floor(Math.random() *255);
const g= Math.floor(Math.random() *255);
const b= Math.floor(Math.random() *255);
return `rgb(${r}, ${g}, ${b} )`
}