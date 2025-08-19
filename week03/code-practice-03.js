function halo (){
    console.log("Hello world")
}
halo()

const multply = (x,y) => {
    return x*y ;
}
console.log(multply(5,6))

//1.function declaration
function muti_paul(a,b){
    return a*b
}
console.log(muti_paul(6,7))

//2.function expresstion (using arrow function syntax)
const duplikate = (a,b) => a*b
console.log(duplikate(87,82))

//3.function expression (using function declaration)
const mutipy=function(a,b){return a*b}
console.log(mutipy(123,123))



console.log(typeof muti_paul)
console.log(typeof duplikate)
console.log(typeof mutipy)
const x = muti_paul
const y = duplikate
const z = mutipy
console.log(x(9898789,78123))


function doSomething(x){
    return x(3,5)//muti_paul()
}
console.log(doSomething(muti_paul))//pass fucntion to another function//15



function sayGoodbye(){
    return 'Goodbye'
}
function Doit(){
    return sayGoodbye
}
// let say=Doit;
// console.log(Say())
console.log(Doit()())//Goobye ()แรกของfunction แรก ()สองของ function 2


//-------------------------------------------------
function myfunc(theObject){
    theObject.model = "A9999"
}
const produc = {model : "A1001",price:199}
console.log(produc.model)//A101

myfunc(produc);
console.log(produc.model)//A9999
//-------------------------------------------------
function square(side){
    side=9
}
let theSide=2
square(theSide)
console.log(theSide)//2
//-------------------------------------------------
function sum(x,y,...z){
    for (argu of arguments){
        console.log(argu)
    }
    console.log(`length : ${arguments.length}`)
}
sum(1,2,3,4,5,6,7,8)


function SUMM(...arg){
    lom = 0
    for (i of arguments) {
        lom = lom + i
    }
    return lom  
}
console.log(SUMM())

function sig(num1,num2,num3){
    console.log(num1)
    console.log(num2)
    console.log(num3)
    return num1 + num2 +num3
}
let nums = [5]
console.log(sig(10,3,3,4,5))

// โจทย์ที่อาจารย์ให้มาวันนี้

function getFreqOfWords(sentence){
    const sen = sentence.split(" ").filter(Boolean); //สับคำที่ให้มาเป็นอาเรย์โดยสีบจากเว้นวรรค .filer เพื่อกรองค่าว่างถ้าเป็น ture
    //ให้เก็บไว้ถ้าเป็น false จะไม่เก็บไว้
    obj={} // สร้าง object เปล่าเพื่อรับ key และ value อีกทีใน loop
    for (i of sen){
        obj[i]=i in obj ? obj[i] + 1:1 // เพิ่ม key ใน Object ถ้ามีคีย์นั้นอยู่แล้วให้เพิ่มค่า 1 ถ้าไม่มีให้เป็น 1 
    }
    return obj 
    
}
console.log(getFreqOfWords('Today is present and present is your gift'))