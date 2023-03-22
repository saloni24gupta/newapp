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
