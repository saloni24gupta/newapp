const lii = document.querySelectorAll("li")
for(let  li of lii){
    li.classList.toggle('highlight');
} 

// for(let li of lii) {
//     if (li.classList.contains('highlight')
//     ){
// li.classList.remove('highlight')
//     }
//     else {
//         li.classList.add('highlight');
//     }
// }

const division = document.querySelector('#container')
division.style.textAlign = "center";
const img = document.querySelector("img");
img.style.width="150px";
img.style.borderRadius = "50%"
    
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
let i=0;
const allspans = document.querySelectorAll('h1 span');
for(let span of allspans) {
    span.style.color=colors[i]
    i++;
}


