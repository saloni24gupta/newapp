const buttons = document.querySelector("#container")
for (i = 0; i < 100; i++) {
    const button = document.createElement('button')
    button.innerText = 'button'
    buttons.appendChild(button)
}

const box = document.querySelector("#box")
for (i = 0; i < 100; i++) {

    const boxes = document.createElement("box")
    boxes.innerText = 'i am a box';
    box.appendChild(boxes)
    boxes.setAttribute('class', 'mb')

}
const persons = [
 {fullname: "saloni", lastname: "Gupta" },
 {fullname: "samriddhi", lastname: "Gup"} ,
 {fullname: "vishal", lastname: "ksudhsl"}   
];

document.getElementById("demo").innerText = persons.map(showfullname);

function showfullname(item) {
    return[item.fullname, item.lastname].join(" ");
}
