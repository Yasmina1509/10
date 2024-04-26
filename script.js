function showAl() {
    var num1 = parseFloat(prompt("Введите первое число:"));
    var num2 = parseFloat(prompt("Введите второе число:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Одно из введенных значений не является числом.");
    } else {
        if (num1 > num2) {
            alert("Наибольшее значение: " + num1);
        } else {
            alert("Наибольшее значение: " + num2);
        }
    }
}
showAl();

