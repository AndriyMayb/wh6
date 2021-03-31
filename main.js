/*
1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
a) отримує текст з параграфа з id "content"
*/
/*const par = document.getElementById("content");
console.log(paragraf);*/
//b) отримує текст з блоку з id "rules"
/*
const divPar = document.getElementById('rules')
console.log(divPar)
*/
//c) замініть текст параграфа з id 'content' на будь-який інший
//e) змініть кожному елементу колір фону на червоний
//f) змініть кожному елементу колір тексту на синій
/*
const contentPar = document.getElementById("content");
contentPar.innerText = "Я задумала цей текст для того, аби показати: поруч з нами є чимало священників, які істинно служать Богу і людям." +
" Це рядові пастирі, часто непублічні. "
contentPar.style.backgroundColor = 'red'
contentPar.style.color = 'blue'
console.log(contentPar)
*/


//d) замініть текст параграфа з id 'rules' на будь-який інший
/*
const rulesDiv = document.getElementById('rules');
rulesDiv.innerText = 'Кожного священника авторка попросила дати напутнє слово, мініпроповідь,' +
    ' яка могла б дістатися сердець не тільки тих, хто вірує, але й абсолютних агностиків: "Адже базові християнські цінності однакові для всіх. І як казав апостол Павло: «Залишаються з нами три сії: Віра, Надія, Любов. Але Любов з них більша».'
rulesDiv.style.backgroundColor = 'red'
rulesDiv.style.color = 'blue'

//g) отримати весь список класів елемента з id=rules і вивести їх в console.log
const rulesDivClass = document.getElementsByClassName('fc bp');
console.log(rulesDivClass);
*/


/*
//h) отримати всі елементи з класом fc_rules
//i) поміняти колір тексту у всіх елементів fc_rules на червоний
const fcRules1 = document.getElementsByClassName('fc_rules rule1');
for (let rule1 of fcRules1) {
    rule1.style.color = 'red'
}
console.log(fcRules1);

*/

/*
const fcRules2 = document.getElementsByClassName('fc_rules rule2');
for (i = 0; i < fcRules2.length; i++) {
    fcRules2[i].style.color = 'red'
}
console.log(fcRules2[i])
*/


/*
const fcRules3 = document.getElementsByClassName('fc_rules rule3');
let i = 0;
while (i < fcRules3.length){
    fcRules3[i].style.color = 'red';
    i++
}
console.log(fcRules3[i]);


const fcRules4 = document.getElementsByClassName('fc_rules rule4');
for (i = 0; i < fcRules4.length; i++) {
    fcRules4[i].style.color = 'red'
}
console.log(fcRules4);

*/



/*
2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    Вставити цей блок на сторінку
3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
*/
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

/*За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    Вставити цей блок на сторінку*/
/*
for (let userFull of users) {
    const userItem = document.createElement('div');
    userItem.innerText = (`${userFull.name}`)
    document.body.appendChild(userItem)
    console.log(userItem)
}

*/

/*
for (i = 0; i < users.length; i++) {

const student = document.createElement('div')

student.innerHTML = (`My name is ${users[i].name}  <br> I am ${users[i].age}
  <br>My status ${users[i].status}`)
    document.body.appendChild(student)
    const studentAddress = document.createElement('div')
    studentAddress.innerHTML = `My address city ${users[i].address.city} / My country ${users[i].address.country}
     / My street ${users[i].address.street} / My houseNumber ${users[i].address.houseNumber}  `
    document.body.appendChild(studentAddress)
    const block = document.createElement('br')
    document.body.appendChild(block)
    console.log(student)
    console.log(studentAddress)
}
*/

















