const input = document.querySelector("#catname")
const form = document.querySelector("form")
const list = document.querySelector("#list")
form.addEventListener('submit', function(e) {
    e.preventDefault();
console.log(input.value)
const newLi = document.createElement("li");
const catName = input.value;
newLi.innerText = catName;
console.log(newLi);
list.appendChild(newLi);
})