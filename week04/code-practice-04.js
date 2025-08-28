//fillter functio does not change an original array
const words = ["apple","mango","magosteen","orange"]
//1. annonymous arrow function
// const shortWords = words.filter((word)=> word.length <=6) 
//2.annonymous function declaration
// const shortWords = words.filter(function (word){
//     return word.length <=6
// })
//3. reuse callback function (named function)
function wordLength(word){
    return word.wordLength <=6
}
const shortWords = words.filter(wordLength)
// const shortWords = words.filter(wordLength("apple")) // words.filter(true)
console.log(words)
console.log(shortWords)

//sort fuctionchange original array
const sortedWords = words.sort()
console.log(words)
console.log(sortedWords)

const BigWords = words.map(words => words.toUpperCase())
console.log(BigWords)


const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]
const idstudent = students.map((students)=> students.id)
const Evenid = idstudent.filter(x => x % 2 == 0)
console.log(idstudent)
console.log(Evenid)


//retrun all workds that include ' mango' (ignore class)
//result ['Mango',]
const words1 = ["Mango", "apple", "mangosteen", "orange", "mangoes"]
const findmango = words1.filter(word => word.toLowerCase().includes("mango"))

console.log(findmango);
const words2 = ['mango', 'apple', 'mangosteen', 'orange'];
const mangoWords = words2.filter(word => word.includes('mango'));
const upper = mangoWords.map(word => word.toUpperCase());
 
console.log(upper);

const findapple = words1.find(word => word.toLowerCase().includes('apple'))?'has apple':'no apple'
console.log(findapple)
function Findapple(x){
    x.find(word=> word.toLowerCase().includes('apple'))?'has apple': 'no apple'
}
console.log(Findapple(words1))


const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]
const total = {"total":cart.reduce((sum, product) => (product.price * product.quantity) + sum, 0)}
console.log(total)



// cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
cart.push({ productId: 5555, price: 1, quantity: 4 })
console.log(cart)
console.log(cart.pop()) //{ productId: 5555, price: 1, quantity: 4 }
console.log(cart.length) //3

console.log(cart.unshift({ productId: 5555, price: 1, quantity: 4 }))
//unshift
console.log(cart.shift())
//shift

// words1.splice(2,1,'banana')
// console.log(words1)
// words1.splice(-2,2)
// console.log(words1)
// words1.splice(2,0,'melon','cherry')
// console.log(words1)

console.log(words1.slice(2))
console.log(words1.slice(0,2))
console.log(words1.fill(null))

//===============================Self practice=======================================
const number = [1,2,3,4,5,6,7,8,9,10]
// ยกกำลังสองของตัวเลขทั้งหมด
const square = number.map(x=> x*x)
console.log(square)
// ตัวเลขคู่ทั้งหมด
const even = number.filter(x=> x%2==0)
console.log(even)
// ผลรวมของตัวเลขทั้งหมด
const numsum = number.reduce((sum,x)=> sum + x,0)
console.log(numsum)


const products = [
  { name: "Laptop", price: 25000 },
  { name: "Phone", price: 12000 },
  { name: "Tablet", price: 15000 },
  { name: "Headset", price: 2000 }
];
// สินค้าที่มีราคาเกิน 10000
const expensiveProducts = products.filter(product => product.price > 10000);
// ชื่อสินค้าที่มีราคาเกิน 10000
const productNames = expensiveProducts.map(product => product.name);
// ผลรวมราคาสินค้าทั้งหมด
const productsum = products.reduce((sum,product) => sum + product.price,0);
console.log(expensiveProducts);
console.log(productNames);
console.log(productsum);

const score = [45, 67, 89, 32, 50, 78, 99]
// คนที่สอบผ่าน (50 ขึ้นไป)
const pass = score.filter(x=> x >= 50);
console.log(pass)
// เกรดของแต่ละคน (A, B, C, D, F)
const gradescore = score.map(x=> x >= 80 ? 'A' : x >= 70 ? 'B' : x >= 60 ? 'C' : x >= 50 ? 'D' : 'F');
console.log(gradescore)
// มีใครได้ A บ้างไหม (80 ขึ้นไป)
const whogotA = score.some(x=> x >= 80) ? 'Yes' : 'No';
console.log(whogotA)
// ทุกคนสอบผ่านไหม (50 ขึ้นไป)
const allpass = score.every(x=> x >= 50) ? 'All pass' : 'Some fail';
console.log(allpass)


const fruitbasket = ["banana", "apple", "mango", "pineapple", "kiwi", "grape"];
// จัดเรียงตามตัวอักษร
const sortedFruits = fruitbasket.sort();
console.log(sortedFruits);
// หาว่ามี "apple" ในตะกร้าหรือไม่ (ไม่สนใจตัวพิมพ์เล็ก/ใหญ่)
const gotapple = fruitbasket.find(fruit => fruit.toLowerCase() === 'apple') ? 'Found apple' : 'No apple';
console.log(gotapple);
// หาความยาวรวมของชื่อผลไม้ทั้งหมดในตะกร้า
const sumlength = fruitbasket.reduce((sum,x)=> sum + x.length,0);
console.log(sumlength);


const cartt = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Jeans", price: 1200, qty: 1 },
  { name: "Shoes", price: 1500, qty: 1 }
];
// หา ราคารวมแต่ละรายการ (price * qty) แล้วเก็บไว้ใน array ใหม่
const pricesumm = cartt.map(item => item.price * item.qty);
console.log(pricesumm);
// หาผลรวมของราคารวมทั้งหมด (sum of pricesumm)
const totalsum = pricesumm.reduce((sum,price) => sum + price,0);
console.log(totalsum);
// หาว่ามีสินค้าในตะกร้าเป็น "shoes" หรือไม่ (ไม่สนใจตัวพิมพ์เล็ก/ใหญ่)
const findshores = cartt.find(item => item.name.toLowerCase) === 'shores' ? 'Found Shoes' : 'No Shoes';
console.log(findshores);