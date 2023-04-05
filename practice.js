const button = document.querySelector("#container")
const allspan = document.querySelectorAll('span')
const practice = document.querySelectorAll('.prac')
showbox();
function showbox() {
    for (let i = 0; i < 100; i++) {
        const btn = document.createElement('button')
        btn.innerText = 'hello i am a box';
        button.append(btn)
     btn.setAttribute("class", 'red')
    
        console.log(btn)
        console.log(button)
         const text = btn.innerText;
        btn.addEventListener('click', () => {
// console.log(btn.innerText)
const para = document.createElement('p')
para.innerText = 'hello this is me';
practice.appendChild(para)
console.log(para)
        })
    }
}

for (let span of allspan) {
  
    span.addEventListener('click', () => {
        console.log('clicked')
    })
}

for(let num =1; num<=100; num+=3){

    // console.log("my name is")
    // console.log('hello word')
    console.log(num)
}

// for (let button of btn) {
//     button.addEventListener('click', () => {
//         console.log('button clcicked')
//     })
// }

