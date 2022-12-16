taskNumber = prompt("Введите номер задания")
switch (taskNumber) {
    case '1':
        // Задание №1
        let n = 32;
        alert(`Длина комментария не больше: ${n}`);
        let str = prompt(`Введите комментарий`);
        if(str.length > n)
        {
            alert(`Вы превысили длину комментария`)
        }
        else
        {
        str = str.replace(/кот/g, "***");
        str = str.replace(/собак/g, "Собак");
        str = str.replace(/пес/g, "многоуважаемый пес");
        alert(str);
        }
        break;  
    case '2':
        // Задание №2
        let weekDays = {
            1: "Понедельник",
            2: "Вторник",
            3: "Среда",
            4: "Четверг",
            5: "Пятница",
            6: "Суббота",
            7: "Воскресенье",
        }
        let key = parseInt(prompt("Введите номер дня недели."));
        alert(`${key} - ${weekDays[key]}`);
        let netDaysCount = 0;
        let netDays = "";
        for(let i in weekDays)
        {
            if(i % 2 != 0)
            {
            netDays = netDays + i + " " + weekDays[i] + "\n";
            netDaysCount++;
            }
        }
        alert(`Количество нечетных дней: ${netDaysCount}\n${netDays}`);

        break;
    case '3':
        // Задание №3
        let _button = {
            width : 300,
            height : 300,
            backgroundColor : "red",
            textColor : "blue"
        };
        let _link = {
            fontSize : 12,
            textColor : "green" 
        };
        let accentedElements = {
            backgroundColor : "yellow"
        };
        Object.assign(_button, accentedElements);
        Object.assign(_link, accentedElements);
        alert(`${_button.width}\n${_button.height}\n${_button.backgroundColor}\n${_button.textColor}\n\n-------------------
        \n${_link.fontSize}\n${_link.textColor}\n${_link.backgroundColor}`);
        break;
    case '4':
        // Задание №4
        let set = new Set();
        let choice = 1;
        while(choice != 0)
        {
            choice  = parseInt(prompt(`1 - Добавить товар\n2 - Удалить товар\n3 - Проверить наличие товара\n4 - Определить кол-во товаров\n0 - Выход`, 0));
            switch(choice)
            {
                case 1:
                    product = prompt(`Введите товар`, "яблоко");
                    set.has(product) ? alert(`Такой товар уже есть`) : set.add(product);
                    break;
                case 2:
                    product = prompt(`Введите удаляемый товар`, "яблоко");
                    set.has(product) ? set.delete(product) : alert(`Такого товара нет`);
                    break;
                case 3:
                    product = prompt(`Введите искомый товар`, "яблоко");
                    set.has(product) ? alert(`Такой товар есть`) : alert(`Такого товара нет`);
                    break;
                case 4:
                    alert(`Кол-во товаров: ${set.size}`);
                    break;
                case 0:
                    alert("Выход");
                    break;
                default:
                    alert(`Неверный номер.`);
                
            }
        }
        break;
    case '5':
        // Задание №5
        let map = new Map();
        let choice2 = 1;
        let _data = {
            _id : Symbol(),
            _price : 0,
            _amount : 0
        };
        while(choice2 != 0)
        {
            choice2 = parseInt(prompt(`1 - Добавить товар\n2 - Удалить товар\n3 - Изменить кол-во товара\n4 - Рассчитать сумму заказа\n5 - Вывод\n0 - Выход`, 0));
            switch(choice2)
            {
                case 1:
                    _product = prompt(`Введите товар`, "яблоко");
                    if(map.has(_product))
                    {
                        alert(`Этот товар уже есть`);
                    }
                    else
                    {
                        _data._id = Symbol(_product);
                        _data._price = parseInt(prompt(`Введите цену(за один товар)`, 25));
                        _data._amount = parseInt(prompt(`Введите кол-во`, 10));
                        map.set(_product, _data);
                    }
                    break;
                case 2:
                    _product = prompt(`Введите удаляемый товар`, "яблоко");
                    map.has(_product) ? map.delete(_product) : alert(`Такого товара нет`);
                    break;
                case 3:
                    _product = prompt(`Введите изменяемый товар`, "яблоко");
                    if(map.has(_product)) 
                    {
                        map.forEach( (value, key, map) => {
                            if(map.has(_product))
                            {
                                value._amount = parseInt(prompt(`Новое кол-во`, 50));
                            }
                        })
                    }
                    else
                    {
                        alert(`Этого товара нет`);
                    }
                    break;
                case 4:
                    let sum = 0;
                    map.forEach( (value, key, map) => {
                        sum += value._amount * value._price;
                    })
                    alert(`Сумма: ${sum}`);
                    break;
                case 5:
                    map.forEach( (value, key, map) => {
                        alert(`Продукт:${key}\nКол-во${value._amount}\nЦена за штуку:${value._price}`)
                    })
                    break;
                case 0:
                    alert("Выход");
                    break;
                default:
                    alert(`Неверный номер.`);
                
            }
        }

        break;
    default:
        alert(`Неверный номер.`);
}