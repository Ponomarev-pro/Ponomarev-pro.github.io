// let
// const
// var

// const someNumber = 15;

// someNumber = 20;

// const num = 20;


// var someVAriable = 100 // []
// someNumber - идентификатор
// = - оператор присваивания
// 30 - литерал / значение выражение

// примитивы
// string
// number
// BigInt
// boolean
// undefined 
// null
// symbol
//////////////////////
// сылочные
// object
const button = document.querySelector(".main-buttom")
const input = document.querySelector(".main-text")

console.log(buttom)

button.addEventListener("click", ()=>{
    const checkType = JSON.parse(input.value)  
    alert(typeof checkType)
})



