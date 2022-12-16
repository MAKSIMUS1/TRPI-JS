function func1() {
    if(arguments.length <= 3) {
        let str = "";
        for(let i = 0; i < arguments.length; i++) {
            str = str + String(arguments[i]) + " ";
        }
        alert(str);
    }
    else if(arguments.length > 3 && arguments.length <= 5) {
        let str = "";
        for(let i = 0; i < arguments.length; i++) {
            str = str + String(typeof(arguments[i])) + " ";
        }
        alert(str);
    }
    else if(arguments.length > 5 && arguments.length <= 7) {
        alert(arguments.length);
    }
    else {
        alert(`Количество аргументов слишком большое`);
    }
    
}

function func2() {
    let pr = 1
    while(pr != 0) {
        pr = parseInt(prompt(`Введите номер задания`))
        switch(pr) {
            case 1:
                window.a;
                alert(a);
                break;
            case 2:
                alert(b);
                window.b = 2;
                break;
            case 3:
                alert(c);
                window.c = 2;
                let c;
                break;
            case 4:
                alert(d); 
                window.d = 2;
                var d;
                break;
            case 5:
                alert(e);
                let e = 2;
                break;
            case 6:
                let f = 2;
                window.f = 3;
                alert(f);
                break;
            case 7:
                var g = 2;
                window.g = 3;
                alert(g);
                break;
            case 0:
                break;
        }
    }
}

function func3() {
    let s = 5;
    function sum() {
        alert(s);
    }
    sum();
}

let check = 1;
while(check != 0)
{
    check = prompt("Выберите задание(1-7)");
    switch(Number(check)) {
        case 1:  
            func1("abcd", "test", 1);
            func1("kartoshka", true, 1, 2, 3);
            func1("pomidor", "true", 1, 2, 3, "ogurez");
            func1("morkovka", true, 1, 2, 3, "ms", 4, 7, 9);
            break;
        case 2:
            func2();
            break;
        case 3: 
            func3();
            break;
        case 4: 
            function makeCounter() {
                let currentCount = 1;
                return function() {
                    return currentCount++;
                }
            }
            let counter = makeCounter();
            alert(counter());
            alert(counter());
            alert(counter());
            let counter2 = makeCounter();
            alert(counter2());

            Count = 1;
            function Counter() {
                return function() {
                    return Count++;
                }
            }
            let count = Counter();
            let count2 = Counter();

            alert(count());
            alert(count());

            alert(count2());
            alert(count2());
            break;
        case 5:
            alert(func1.name);
            alert(func2.name);
            alert(makeCounter.name);
            alert(Counter.name);
            break;
        case 6: 
        function obyem(l) {
            return (w) => {
                return (p) => {
                    return l * w * p;
                }
                    
            }
        }
        alert(`Объем равен: ${obyem(50)(20)(45)}`);
        alert(`Объем равен: ${obyem(50)(50)(45)}`);
        alert(`Объем равен: ${obyem(50)(100)(45)}`);
            break;
        case 7: 
        function* generateSequence() {
            var a;
            let x = 0;
            let y = 0;
            for (let i = 0; i < 10; i++) {
                a = prompt("Введите направление");
            switch (a.toLowerCase()) {
                case "left":
                x -= 10;
            break;
                case "right":
                x += 10;
            break;
                case "up":
                y += 10;
            break;
                case "down":
                y -= 10;
            break;
            }
            yield [x, y];
            }
        }
            let generator = generateSequence();
            for (let i = 0; i < 10; i++) {
                alert(generator.next().value);
            }
            break;
        case 0:  
            break;
    } 
}