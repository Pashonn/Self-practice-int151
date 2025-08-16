// let Obj1 = {sid : 67130500072 , name : "chavanakorn" ,lastname : "keelatekunlaya"}

// //1.object literal
// // const book={isbn:12345678, title:'Introduction to JS', getISBN:function(){return this.isbn}}
// const book={isbn:12345678, isbn:88888888, title:'Introduction to JS',authors:[{firstname:'John'}, {lastname:'Smith'},{firstname:'Danial'}, {lastname:'Doh'}], versions:[1.0, 2.0,3.0], isAvailable:true, getISBN(){return this.isbn}}
// // console.log(book)
// // console.log(book.getISBN())
// // console.log(book.authors) //array
// // console.log(Object.values(book.authors))
// //new Date(year, monthIndex, day)
// book.publishDate=new Date(2025, 1, 1)
// // console.log(book)
// delete book.isAvailable
// // console.log(book)
// console.log(book["publishDate"])
// console.log(book.publishDate)
// for (const key in book) {
// //    console.log(book.key) //not allowed
// console.log(book[key])
// }

// const Person = {
//     Name : "Lebron" ,
//     lastname : "James" ,
//     Sport : {Sport1 :"Basketball" , Sport2 : "pingpong show"} ,
//     getGender(){return this.gender} ,
//     Size : [49,52,56]
// }
// // console.log(Person)
// // console.log(Person.getGender)

// // console.log(book.authors[0].firstname)
// // console.log(book.authors)
// // console.log(Object.values(book.authors))

// Sumgun = {name :" john" ,name :"China" , lastname : "Cena"}
// console.log(Sumgun)
// Person.ColorSkin =  "Black"
// //new Date(year,monthIndex,day)
// Person.BirthDay = new Date(1987,12,30)
// console.log(Person)



// for (let key in book){
//     // console.log(book.key) //not allowed
//     console.log(book[key])
// }

// //2. constructor function
// // function Book(isbn,title){
// //     this.isbn=isbn
// //     this.title=title
// // }
// // const b1 = new Book (123,'js')
// // const b2 = new Book(888,'css')
// // console.log(b1)
// // console.log(b2)
// //3.class
// class Book{
//     constructor(isbn,title){
//         this.isbn=isbn
//         this.title-title
//     }
//     getISBN(){
//         return this.isbn
//     }
//     setTitle(title){
//         this.title=title
//     }
//     getbookInfo(){
//         return `isbn : ${this.isbn},title: ${this.title}`
//     }
// }


// const myBook = new Book(12345678,'JS Beginner')
// console.log(myBook.getbookInfo())
// console.log(myBook.getISBN)
// console.log(myBook.setTitle)
// console.log(myBook.getbookInfo)

// //4. using Object.create(existingObj)
// const journal = Object.create(myBook)
// journal.ISSN=587904
// console.log(journal)
// console.log(journal.isbn)
// console.log(journal.title)


// const b1 = {id:1 , title:"Js"}
// function dosomething(x){
//     x.id=555555
// }
// console.log(b1)


// const b5={id:1,title:"JS"}
// const b6={id:1,title:"JS"}
// console.log(b5==b6)
// console.log(b5===b6)



// const book1 = {
//     ISBN : 12345678 , 
//     title :"JS"
// }
// const book2 = {
//     ISBN : 123456789 , 
//     title :"JS"
// }
// function Comparing(Object1,Object2){
//     // boolean condition?true expression:false expression
//     // return Object1.ISBN === Object2.ISBN?true:false
//     if(Object1.ISBN===Object2.ISBN)
//         return true
//     else
//         return false
// }

// console.log(Comparing(book1,book2))

//^^^ ในคาบเรียน

// vvv  นอกคาบ

// Shallow Quality 
let book1 = {
    isbn: 123456789,
    title: "JavaScript",
}
let book2 = {
    isbn: 12345,
    title: "JavaScript",
}

function shallowEqual(object1  , object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}
console.log(`Shallow Equality: ${shallowEqual(book1, book2)}`);


let Box1 ={
    name: "Apple",
    amount: 10,
    price: 100
}
let Box2 ={
    name: "banana",
    amount: 10,
    price: 50
}
let Box3 ={
    name: "Watermelon",
    amount: 15,
    price: 150
}
let Box4 ={
    name: "Apple",
    amount: 5,
    price: 50
}
let Box5 ={
    name: "Apple",
    amount: 10,
    price: 100
}

function ChecksomethingEqual(object1,object2){
    const matchingKeys = []
    for ( let key in object1){
        if (object1.hasOwnProperty(key) && object1[key]== object2[key]) {
                matchingKeys.push(key);
            }
        }
    if (matchingKeys.length === 0) {
        return "There are no matching keys in both Box.";
    }
    if (matchingKeys.length >= 1) {
        return `There are [${matchingKeys}] are equal in both Box.`;
    }
}
console.log(ChecksomethingEqual(Box1, Box2));
console.log(ChecksomethingEqual(Box1, Box3));
console.log(ChecksomethingEqual(Box1, Box4));
console.log(ChecksomethingEqual(Box1, Box5));



// function getMatchingKeys(obj1, obj2) {
//   const matchingKeys = [];

//   for (const key in obj1) {
//     if (
//       obj2.hasOwnProperty(key) && // key ต้องมีใน obj2 ด้วย
//       obj1[key] === obj2[key]     // value ต้องเท่ากันแบบ strict (===)
//     ) {
//       matchingKeys.push(key);
//     }
//   }

//   return matchingKeys;
// }
