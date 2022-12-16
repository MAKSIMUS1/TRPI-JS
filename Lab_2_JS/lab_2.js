taskNumber = prompt("Введите номер задания")
switch (taskNumber) {
    case '1':
        // Задание №1
        const pi = 3.15;
        function getArea(radius) 
        {
            let S = pi * Math.pow(r, 2);
            return S;
        }
        let getDiameter = function(radius) 
        {
            let dm = 2 * radius;
            return dm;
        }
        let Circumference = (radius) => 2 * radius * pi;
        r = prompt("Введите радиус круга");
        alert(`Площадь круга: ${getArea(r)}\nДиаметр круга: ${getDiameter(r)}\nДлина круга: ${Circumference(r)}`);
        break;  
    case '2':
        // Задание №2
        year = prompt("Введите год: ");
        alert(`Дата: ${getDate(year)}`);
        function getDate(a, b = '9', c = '24') 
        {
            let date = c + ".0" + b + "." + a;
            return date;
        }
        break;
    case '3':
        // Задание №3
        studentCalculation();
        function studentCalculation()
        {
            let listOfStudents = [];
            let studentName = ''; 
            let amount = 0;
            do
            {
                studentName = prompt(`Введите имя студента №${amount + 1}`, 'Maks');
                amount++;
                listOfStudents.push(studentName);
            } while (studentName != 'Maks');
            for (let i = 0; i < listOfStudents.length; i++) 
            {   
                console.log(`Имя студента №${i + 1}: ${listOfStudents[i]}`);
            }
            alert(`Количество всех студентов: ${amount}`);
        }
        break;
    case '4':
        // Задание №4
        timeForPassword();
        function timeForPassword()
        {
            let numberOfLetter = Math.pow(26, 5);
            let numberOfNumber = Math.pow(10, 3);
            let allVar = numberOfLetter * numberOfNumber;
            let allTime = allVar * 3;
            let y = 0;
            while(allTime > (60 * 60 * 24 * 360))
            {
                allTime -= (60 * 60 * 24 * 360);
                y++;
            }
            let m = 0;
            while(allTime > (60 * 60 * 24 * 30))
            {
                allTime -= (60 * 60 * 24 * 30);
                m++;
            }
            let d = 0;
            while(allTime > (60 * 60 * 24))
            {
                allTime -= (60 * 60 * 24);
                d++;
            }
            let h = 0;
            while(allTime > (60 * 60 ))
            {
                allTime -= (60 * 60);
                h++;
            }
            let min = 0;
            while(allTime >= 60)
            {
                allTime -= 60;
                min++;
            }
            let s = allTime;
            alert(`${y} лет ${m} месяцев ${d} дней ${h} часов ${min} минут ${s} секунд`);
        }
        break;
    case '5':
        // Задание №5
        answ = prompt("Ввод: ");
        if(!(isNaN(parseFloat(answ))) && (typeof parseFloat(answ) === 'number'))
        {
            if(answ % 1 == 0)
                alert(`Целое.\n0x${parseInt(answ).toString(16).toUpperCase()}`);
            else
                alert(`Дробное
                \nОкругление до наибольшего целого: ${Math.ceil(answ)}
                \nОкругление до наименьшего целого: ${Math.floor(answ)}
                \nОкругление до ближайшего целого: ${Math.round(answ)}`);
        }
        else if(typeof answ === 'string')
        {
            alert(`Строка\n${answ.toLowerCase()} \n${answ.toUpperCase()}`);
        }
        break;
    case '6':
        // Задание №6
        answ = prompt("Введите словарное слово: ", 'яблоко');
        prov(answ);
        function prov(slovWord) 
        {
            realWord = 'яблоко';
            let kolvoNevern = false;
            for (let i = 0; i < slovWord.length; i++) 
            {
                if(slovWord[i].toLowerCase() != realWord[i])
                {
                    alert(`В букве \"${slovWord[i]}\" ошибка, должно быть ${realWord[i]}`);
                    kolvoNevern = true;
                }
            }
            if(kolvoNevern == false)
                alert(`Нет ошибок.`);
        }
        break;
    case '7':
        // Задание №7
        geometrCalc();
        function geometrCalc()
        {
            let side = [3];
            side[0] = parseInt(prompt("Введите первый катет: "));
            side[1] = parseInt(prompt("Введите второй катет: "));
            side[2] = Math.sqrt(side[0]*side[0] + side[1]*side[1]);
            let triangle = {
                area: side[0] * side[1] / 2,
                perimetr: side[0] + side[1] + side[2],
                h: side[0] * side[1] / side[2],
                sin: side[0] / side[2],
                cos: side[1] / side[2],
                tg: side[0] / side[1],
                ctg: side[1] / side[0]
            }; 
            alert(`Площадь: ${triangle.area.toFixed(2)}\nПериметр: ${triangle.perimetr.toFixed(2)}\nВысота: ${triangle.h.toFixed(2)}
            \nsin: ${triangle.sin.toFixed(2)}\ncos: ${triangle.cos.toFixed(2)}\ntg: ${triangle.tg.toFixed(2)}\nctg: ${triangle.ctg.toFixed(2)}`);
        }
        break;
    default:
        alert(`Неверный номер.`);
}