function echo(value) {
  return value
}
function getLength(str) {
  return str.length
}
const TAX = 0.07
const x = 1
class Book{
  constructor(isbn,title){
    this.isbn = isbn
    this.title= title
  }
  Full(){
    return `${this.isbn} Has a title: ${this.title}`
  }
}
//export list
export { Book,echo, getLength as default, TAX as VAT ,x as ONE}