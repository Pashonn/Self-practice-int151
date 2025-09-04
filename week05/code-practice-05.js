const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
  { name: 'Eve', score: 78 }
];

const passstudents = (students) => {
    const pass = students.filter(student => student.score >= 70)
    const passname = pass.map(student => student.name.toUpperCase())

    return passname
}
const passingNames = passstudents(studentScores);
console.log(passingNames);

console.log(Array.isArray([]))
console.log(Array.isArray("[]"))

const array1 = ["a","b","c"]
const array2 = ["d","e","f"]
const array3 = array1.concat(array2)
console.log(array3)
// convert to string
console.log(array3.toString())


const array14 = [1,30,4,21,10000,5678,345,8765,34567,76543,5678888,7654]
array14.sort((a,b)=> a - b)
console.log(array14)

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
// const sorted = (na) =>{
//     const names = na.map(na => na.name)
//     return names.sort((a,b) => a.name.localeCompare(b.name))

// }
// console.log(sorted(stds))

//Practice 
function addProperty(obj,key,value){  
  obj[key] = value
  return obj
}
console.log(addProperty({name:'John'},'age',25)) //{name:'John',age:25}
console.log(addProperty({},'city','New York')) //{city:'New York'}

function mergeObjects(obj1,obj2){
  return {...obj1,...obj2}
}
console.log(mergeObjects({name:'John',age:25},{city : 'New york'})) //{name:'John',age:25,city:'New york'
console.log(mergeObjects({name:'Jane'},{age:30,city:'USA'})) //{name:'Jane',age:30,city:'USA'}

function getFreqOfWords(sentence){
  if (typeof sentence !== 'string') return undefined
  sentence = sentence.toLowerCase()
  const words = sentence.split(' ')
  const freq = {}
  for (let i of words){
    freq[i] = (freq[i] || 0) + 1
  }
  return freq
}
console.log(getFreqOfWords('Today is present and present is your gift today'))
//{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log(getFreqOfWords('Do you best just do it'))
//{ do: 2, you: 1, best: 1, just: 1, it: 1 }
console.log(getFreqOfWords(null)) //undefined
console.log(getFreqOfWords(undefined)) //undefined

function extractAndRename(obj){
  const { name: fullName, age: yearsOld } = obj
  return { fullName, yearsOld }
}
console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))
// { fullName: 'John', yearsOld: 25 }
console.log(extractAndRename({ name: 'Jane', age: 30 }))
// { fullName: 'Jane', yearsOld: 30 }

function mergeAndDestructure(obj1, obj2) {
  const merged = { ...obj1, ...obj2 }
  const { name, age } = merged
  return { name, age }
}
console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))
// { name: 'John', age: 25 }
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))
// { name: 'Jane', age: 30 }

function removeDuplicateWords(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') return ''
  const words = sentence.split(' ')
  const uniqueWords = [...new Set(words)]
  return uniqueWords.join(' ')
}
console.log(removeDuplicateWords("This is a test This test is easy.")) // "This is a test easy."
console.log(removeDuplicateWords("Hello hello HELLO world!")) // "Hello world!"
console.log(removeDuplicateWords("One two two three three three")) // "One two three"
console.log(removeDuplicateWords("")) // ""
console.log(removeDuplicateWords(null)) // ""


function findValue(arr){
  const sum = arr.reduce((a,b) => a + b,0)
  const avg = sum / arr.length
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return {min, max, sum, avg}
}
// example, given the array [1, 2, 3, 4, 5], the function should return:
// { min: 1, max: 5, sum: 15, avg: 3 }
console.log(findValue([1, 2, 3, 4, 5])) // { min: 1, max: 5, sum: 15, avg: 3 }
console.log(findValue([10, -2, 33, 4, 5])) // { min: -2, max: 33, sum: 50, avg: 10 }
function convertToUppercase(arr){
  return arr.map(str => str.toUpperCase())
}
console.log(convertToUppercase(['hello', 'world'])) // ['HELLO', 'WORLD'])
console.log(convertToUppercase(['javascript', 'is', 'fun'])) // ['JAVASCRIPT', 'IS', 'FUN']

function findMax(arr){
  return Math.max(...arr)
}
console.log(findMax([1, 2, 3, 4])) // 4
console.log(findMax([10, 5, 8, 7])) // 10
function removeFalsyValues(arr){
  return arr.filter(Boolean)
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3])) // [1, 2, 3]
console.log(removeFalsyValues(['a', '', 'b', null, 'c'])) // ['a', 'b', 'c’]
console.log(removeFalsyValues([null, undefined, 'A'])) // ['A']

function doubleAndFilterEvenNumbers(arr){
  return arr.map(num => num * 2).filter(num => num % 2 === 0)
}
console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4])) // [4, 8]
console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8])) // [12, 16]

function filterEvenNumbers(arr){
  return arr.filter(num => num % 2 === 0)
}
console.log(filterEvenNumbers([1, 2, 3, 4])) // [2, 4]
console.log(filterEvenNumbers([5, 6, 7, 8])) // [6, 8]

function populateArray(length, value){
  return Array(length).fill(value)
}
console.log(populateArray(3, 'a')) // ['a', 'a', 'a']
console.log(populateArray(5, 1)) // [1, 1, 1, 1, 1]

function squareNumbers(arr){
  return arr.map(num => num * num)
}
console.log(squareNumbers([1, 2, 3])) // [1, 4, 9,16]
console.log(squareNumbers([4, 5, 6])) // [16, 25, 36]

function processNumbers(arr){
  return arr.filter(num => num % 2 !== 0).map(num => num * num).reduce((a,b) => a + b,0)
}
console.log(processNumbers([1, 2, 3, 4])) // 10 (1^2 + 3^2) )
console.log(processNumbers([5, 6, 7, 8])) // 74 (5^2 + 7^2) )