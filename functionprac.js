const fun1 =document.querySelector(".class1")
const fun2 =document.querySelector(".class2")
const fun3 =document.querySelector(".class3")
const fun4 =document.querySelector(".class4")
const fun5 =document.querySelector(".class5")
const fun6 =document.querySelector(".class6")
const fun7 =document.querySelector(".class7")
const fun8 =document.querySelector(".class8")
const fun9 =document.querySelector(".class9")
const fun10 =document.querySelector(".class10")
const fun11 = document.querySelector(".cl1")

function changetouppercase(){
    var data = fun1.innerHTML.toLocaleUpperCase()
fun1.innerHTML = data  
    console.log(data)
}
function changetolowercase(){
    var datal = fun2.innerHTML.toLocaleLowerCase()
fun2.innerHTML = datal  
    console.log(datal)
}
function cleartext() {
     fun3.innerHTML =''
}
function copytext() {
console.log('copied')
}
function arrayname() {
    var fun12 = document.querySelector(".cl2")
const producname = ["oil", "shampoo", "paste", "orage" , "egg", "grapes", "red", "blue"]
console.log(producname[2])




}

//call stack

const multiply = (x, y) => x * y;
const square = x => multiply(x, x);
const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)

result = isRightTriangle(3, 4, 5)
console.log(result)
cls = document.querySelector(".cl2")
cls.innerHTML=result


console.log("sending request to server")
setTimeout(() => {
    console.log("Here is your data from the serve.....r")

} , 3000)

console.log("I AM AT THE END OF THE FILE!")

setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
    setTimeout(() => {
        document.body.style.backgroundColor = 'red';
    }, 2000)
}, 2000)
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
}, 2000)
console.log('finish')


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout( () => {
        document.body.style.backgroundColor = newColor;
    }, delay)
}
delayedColorChange('olive', 3000), () => {
    delayedColorChange('teal', 3000, () => {
        delayedColorChange('yellow', 4000, () => {
            delayedColorChange('black',  2000, () => {
                
            })
        })
    });
};
const links = document.querySelectorAll('.box')
    for (let link of links) {
    console.log(links)
}


