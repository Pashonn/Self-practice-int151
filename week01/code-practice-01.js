const x = ["one",false,"three",4,true]//ver.Pashonn
console.log(x)
console.log(x.length)
console.log('----------------')
for (i in x) {
    console.log("index : ",i)
    console.log("keep : ",x[i])
    console.log("Type : ",typeof(x[i]))
    console.log("-------------------")
}


const arr =["mango",true,3,"FOUR"]  //ver. Teacher
console.log(arr)
console.log(`length: ${arr.length}`)    
console.log(`first item: ${arr[0]}`)
console.log(`last item: ${arr[arr.length-1]}`)
for(let i=0; i<arr.length;i++)
    console.log(`arr[${i}]: ${arr[i]}`)

const a =["owazzzaaa",1,2,3,4,true,null,"Goodbye"] //อัพไซต์ ไม่พอใจสั้นเกิน
a[a.length]="Somyed"
a[a.length+2]="Upgrade"
console.log(a)

delete a[3]
console.log(a)


const arra =[1,2,3,4,5]
const ongg = {fristname : "pahsohnn" , lastname : "neeee"}
const ahhhh = [arra,"wazzza" ,ongg,{numba : 1234567}]
console.log (ahhhh)


//array contains many objects
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
console.log(colors)

 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts)
 
//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
console.log(groups)

console.log(colors[1].name)// สีม่วง

console.log(contacts[0].email[1])// เอาเมล

for (i of groups) { // เอาชื่อตัวท้ายในอาเร ver. Me
    console.log(i[i.length-1])
}

for(i = 0; i < groups.length ; i++){ // ver Pak
    console.log(groups[i][groups[i].length-1])
}

for (let i = 0; i < groups.length; i++) { // ver apinan
  const lastMember = groups[i][groups[i].length - 1];
  console.log(`Group ${i + 1}: ${lastMember}`);
}

const greeting = "Hello world"
let a = [...greeting]
console.log(a)
clonemyman = ["Checked", ...a , 'Done']
console.log(clonemyman)

const s = new Array()
console.log(s)
console.log(s.length)
const e = new Array(10)
console.log(e)
console.log(e.length)
const m = new Array(1,2,3,4,"hollow")
console.log(m)
console.log(m.length)
let n=Array.of(5)
console.log(n)
let g=Array.of(1,4,5)
console.log(g)

const NTR ='HELLO'
const arr5 = Array.from(NTR)
console.log(arr5)
console.log(arr5.length)

const arr6 = Array.from(arr5)
console.log(arr5)
console.log(arr5.length)


// let letters = [...'Hello world']
// let value = ''
// for (let[index,letters]of letters.entires())