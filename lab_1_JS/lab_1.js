function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}
x = prompt("x?", '')
n = prompt("n?", '')
if (n < 0) {
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
    alert(pow(x, n))
}

let userName = "Maks";
let cityName = "Pinsk";
let birthdayDate = 2004;
let color = "red";
let userAnswer = "Да/Нет";
let inf = Infinity;
let number = 532;
let perimeter = "120mm";
let message = "Введенные данные неверны";


let a = 5;
let Name = "Name";
let i = 0;
let double = 0.23;
let result = 1 / 0;
let answer = true;
let no = null;
console.log("a = 5           Typeof: ", typeof(a));
console.log("name = \"Name\"   Typeof: ", typeof(Name));
console.log("i = 0           Typeof: ", typeof(i));
console.log("double = 0.23   Typeof: ", typeof(double));
console.log("result = 1 / 0  Typeof: ", typeof(result));
console.log("answer = true   Typeof: ", typeof(answer));
console.log("no = null       Typeof: ", typeof(no));


let A = 45 * 21;
console.log("Площадь четырехугольника А: ", A);

let B = 5 * 5;
A = 45 * 20;  
let s = A / B;

console.log("Квадратов поместится в A: ", s);

let i_ = 2;
let a_ = ++i;
let b_ = i++;
console.log(a_ == b_);

if("Привет" == "привет"){
    console.log("\"Привет\"== \"привет\"");
}else if("Привет" > "привет"){
    console.log("\"Привет\" > \"привет\"");
}else{
    console.log("\"Привет\" < \"привет\"");
}

if("Привет" == "Пока"){
    console.log("\"Привет\"== \"Пока\"");
}else if("Привет" > "Пока"){
    console.log("\"Привет\" > \"Пока\"");
}else{
    console.log("\"Привет\" < \"Пока\"");
}

if(45 == "53"){
    console.log("45 == \"53\"");
}else if(45 > "53"){
    console.log("45 > \"53\"");
}else{
    console.log("45 < \"53\"");
}

if(3 == false){
    console.log("3 == false");
}else if(3 > false){
    console.log("3 > false");
}else{
    console.log("3 < false");
}

if(true == "3"){
    console.log("true == \"3\"");
}else if(true > "3"){
    console.log("true > \"3\"");
}else{
    console.log("true < \"3\"");
}

if(3 == "5мм"){
    console.log("3 == \"5мм\"");
}else if(3 > "5мм"){
    console.log("3 > \"5мм\"");
}else{
    console.log("3 < \"5мм\"");
}

if(null == undefined){
    console.log("null == undefined");
}else if(null === undefined){
    console.log("null === undefined");
}else if(null > undefined){
    console.log("null > undefined");
} else if(null < undefined){
    console.log("null < undefined")
}


alert(`Введенные данные неверные`);

secretQuastion = prompt("Секретный вопрос?", "");

login = prompt("Логин");
password = prompt("Пароль");
if (login == password) {
    alert(`Вход выполнен!`);
} else {
    alert(`Вход не выполнен!`);
}


let rus = true;
let mat = true;
let angl = true;
if (rus == true && mat == true && angl == true) {
    console.log("Все экзамены сданы");
}
if (rus == false && mat == false && angl == false) {
    console.log("Отчисление");
}
if (rus == false || mat == false || angl == false) {
    console.log("Пересдача");
}


console.log("true + true:", true + true);
console.log("0 + \"5\":", 0 + "5");
console.log("5 + \"мм\":", 5 + "мм");
console.log("8/Infinity:", 8 / Infinity);
console.log("9 * \"\\n9\":", 9 * "\n9");
console.log("null - 1:", null - 1);
console.log("\"5\" - 2:", "5" - 2);
console.log("\"5px\" - 3:", "5px" - 3);
console.log("true - 3:", true - 3);
console.log("7 || 0:", 7 || 0);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr[i] += 2;
    } else {
        arr[i] += "мм"
    }
}
console.log(arr);

let oneHundred = 0;
while (oneHundred < 100) {
    oneHundred = prompt("Ввод меньше 100");
}

weekDay = prompt("Введите номер дня недели")
switch (weekDay) {
    case '1':
        alert(`Понедельник`);
        break;
    case '2':
        alert(`Вторник`);
        break;
    case '3':
        alert(`Среда`);
        break;
    case '4':
        alert(`Четверг`);
        break;
    case '5':
        alert(`Пятница`);
        break;
    case '6':
        alert(`Суббота`);
        break;
    case '7':
        alert(`Воскресенье`);
        break;
    default:
        alert(`Дня с таким номером нет!`);
}