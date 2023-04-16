// const buttons = document.querySelector("#container")
// for (i = 0; i < 100; i++) {
//     const button = document.createElement('button')
//     button.innerText = 'button'
//     buttons.appendChild(button)
// }

// const box = document.querySelector("#box")
// for (i = 0; i < 100; i++) {

//     const boxes = document.createElement("box")
//     boxes.innerText = 'i am a box';
//     box.appendChild(boxes)
//     boxes.setAttribute('class', 'mb')

// }
// const persons = [
//  {fullname: "saloni", lastname: "Gupta" },
//  {fullname: "samriddhi", lastname: "Gup"} ,
//  {fullname: "vishal", lastname: "ksudhsl"}   
// ];

// document.getElementById("demo").innerText = persons.map(showfullname);

// function showfullname(item) {
//     return[item.fullname, item.lastname].join(" ");
// }
// const shi = prompt("enter value of a:"); 
// const sal = prompt("enter value of b");
// console.log(shi, sal)6656
// if(shi || sal) {
// console.log("equal ")
// } else
// {
//     console.log("not equal")
// }
// const shi = prompt("hello world")
// console.log(shi.charAt())
22
// let rating = prompt('enter no. :')
// if(rating == 3) {
//     console.log("yor are wrong");
// }
// else if (rating == 2){
//     console.log("you are making expe");
// }
// else {
//     console.log("unexpected outcome");
// }

let password = prompt("enter password")
if (password.length >= 6){
    if (password.indexOf(' ')!==-1) {
    console.log("password canr include spaces");
}
else {
    console.log("valid password")
}gg 
}
else{
    console.log("passwprd too short")
}
