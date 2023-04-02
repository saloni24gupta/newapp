const input = document.querySelector('input')
// input.addEventListener('change', function()  {
//    console.log('kdshjhdjkhjk')
// })
const h1 = document.querySelector('h3')

input.addEventListener('input', function(e)  {
    h1.innerText = input.value
       
     })