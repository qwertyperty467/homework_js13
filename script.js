console.log(1);
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of


const user = {
  hobby: "football",
  premium: true,
}

let { hobby, premium } = user;  

user.mood = "happy"
hobby = "skydiving"
premium = false

user.hobby = hobby
user.premium = premium

const elements = Object.keys(user)

for (const element of elements) {
  console.log(`${element}: ${user[element]}`);
}

console.log(2);
// Напиши функцію countProps(obj),
//  яка рахує кількість властивостей в об'єкті.
//  Функція повертає число — кількість властивостей.



const Props = {
  category1: ['apple', 'banana', 'orange', 'grape', 'kiwi'],
  category2: ['pear', 'peach', 'plum'],
  category3: ['mango', 'pineapple', 'strawberry']
};

function countProps({category1, category2, category3}) {
  let total = 0;
total += category1.length
total += category2.length
total += category3.length
  return total;
}

console.log(countProps(Props));

console.log(3);
// Напиши функцію findBestEmployee(employees),
//  яка приймає об'єкт співробітників і повертає ім'я
//   найпродуктивнішого (який виконав більше всіх задач).
//    Співробітники і кількість виконаних завдань містяться
//     як властивості об'єкта в форматі "ім'я":"кількість задач".

function findBestEmployee(employees) {
  let bestEmployee = "";
  let tasks = 0;

  for (const [employee, taskCount] of Object.entries(employees)) {
      if (taskCount > tasks) {
          bestEmployee = employee;
          tasks = taskCount
      }
  }
  return bestEmployee;
}

console.log(findBestEmployee({
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
}));

console.log(4);

// Напиши функцію countTotalSalary(employees) 
// приймаючу об'єкт зарплат. Функція рахує загальну
//  суму зарплати працівників і повертає її. Кожне поле об'єкта,
//   переданого в функцію, має вигляд "ім'я":"зарплата".


const salary = {
  max: 2912,
  david: 3115,
  michal: 1123,
  ivan: 1600,
}

function countTotalSalary(employees) {
  let TotalSalary = 0;
  for (const salary of Object.values(employees)) {  
    TotalSalary += salary;
  }
  return TotalSalary;
}

console.log(countTotalSalary(salary)); 

console.log(5);

// Напиши функцію getAllPropValues(arr, prop),
//  яка отримує масив об'єктів і ім'я властивості.
//   Повертає масив значень певної властивості prop з
//    кожного об'єкта в масиві.

const Obj = [
  { name: "Apple", price: 30, category: "fruit" },
  { name: "Banana", price: 20, category: "fruit" },
  { name: "Broccoli", price: 25, category: "vegetable" },
  { name: "Bread", price: 15, category: "bakery" },
];

function getAllPropValues(arr, prop) {
  const values = [];

  for (const item of arr) {
    const { [prop]: value } = item;
    values.push(value);
  }

  return values;
}

console.log(getAllPropValues(Obj, "category"));


console.log(6);

// Напиши сценарій керування особистим кабінетом інтернет-банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з
//  балансом та історією транзакцій.

const products = [
  { name: "apple", price: 10, quantity: 3 },
  { name: "banana", price: 5, quantity: 7 },
  { name: "orange", price: 8, quantity: 2 },
];

function calculateTotalPrice(allProducts, productName) {
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      return price * quantity;
    }
  }

  return 0;
}

console.log(calculateTotalPrice(products, "banana"));