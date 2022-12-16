$(document).ready(function () {

    $(".dws-form").on("click", ".tab", function () {
        //Удаляем классы active
        $(".dws-form").find(".active").removeClass("active");

        //Добавляем класс active
        $(this).addClass("active");
        $(".tab-form").eq($(this).index()).addClass("active");
    });
});

let inputEmail = document.getElementById('inputEmail');
let errorEmail = document.getElementById('errorEmail');
let inputDate = document.getElementById('inputDate');
let errorDate = document.getElementById('errorDate');
inputEmail.onblur = function () {
    if (!inputEmail.value.includes('@')) { // не email
        inputEmail.classList.add('invalid');
        errorEmail.innerHTML = 'Пожалуйста, введите правильный email.'
    }
};
inputEmail.onfocus = function () {
    if (this.classList.contains('invalid')) {
        // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
        this.classList.remove('invalid');
        errorEmail.innerHTML = "";
    }
};



inputDate.onblur = function () {

    var ExpiryDate = document.getElementById('inputDate').value;
    if (isDate(ExpiryDate)) {
        if (this.classList.contains('invalid')) {
            // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
            this.classList.remove('invalid');
            errorDate.innerHTML = "";
        }
    } else {
        inputDate.classList.add('invalid');
        errorDate.innerHTML = 'Пожалуйста, введите правильную дату.'
    }
};
inputDate.onfocus = function () {
    if (this.classList.contains('invalid')) {
        // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
        this.classList.remove('invalid');
        errorDate.innerHTML = "";
    }
};







function isDate(ExpiryDate) {
    var objDate, // date object initialized from the ExpiryDate string 
        mSeconds, // ExpiryDate in milliseconds 
        day, // day 
        month, // month 
        year; // year 
    // date length should be 10 characters (no more no less) 
    if (ExpiryDate.length !== 10) {
        return false;
    }
    // third and sixth character should be '/' 
    if (ExpiryDate.substring(2, 3) !== '.' || ExpiryDate.substring(5, 6) !== '.') {
        return false;
    }
    // extract month, day and year from the ExpiryDate (expected format is mm/dd/yyyy) 
    // subtraction will cast variables to integer implicitly (needed 
    // for !== comparing) 
    month = ExpiryDate.substring(0, 2) - 1; // because months in JS start from 0 
    day = ExpiryDate.substring(3, 5) - 0;
    year = ExpiryDate.substring(6, 10) - 0;
    // test year range 
    if (year < 1000 || year > 3000) {
        return false;
    }
    // convert ExpiryDate to milliseconds 
    mSeconds = (new Date(year, month, day)).getTime();
    // initialize Date() object from calculated milliseconds 
    objDate = new Date();
    objDate.setTime(mSeconds);
    // compare input date and parts from Date() object 
    // if difference exists then date isn't valid 
    if (objDate.getFullYear() !== year ||
        objDate.getMonth() !== month ||
        objDate.getDate() !== day) {
        return false;
    }
    // otherwise return true 
    return true;
}

function checkDate() {
    // define date string to test 
    var ExpiryDate = document.getElementById('inputDate').value;
    // check date and print message 
    if (isDate(ExpiryDate)) {
        alert('OK');
    } else {
        alert('Invalid date format!');
    }
}