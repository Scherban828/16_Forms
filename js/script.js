"use strict";
//Вывод формы
console.log(document.forms);
const textform = document.forms.main;
console.log(textform);
//Вывод элементов формы 
console.log(textform.elements);
const txt = textform.elements.text;
console.log(txt);
const radio1 = textform.elements.radio;
console.log(radio1);
//Вывод значений элементов формы
const txtarea = textform.textarea;
console.log(txt.value);
console.log(txtarea.value);
//Присвоение знакчения 
txt.value = 'Привет!';
txtarea.value = 'Пока!';
console.log(txt.value);
console.log(txtarea.value);
//Проверка значений Булевых элементов
const radio = textform.radio;
console.log(radio[0].value);
console.log(radio[1].value);
console.log(radio[0].checked);
console.log(radio[1].checked);
//Присвоение значения 
radio[0].value = 'Up';
radio[1].value = 'Нижняя кнопка';
radio[0].checked = true;
console.log(radio[0].value);
console.log(radio[1].value);
//Вывод данных выкикидного списка
const select = textform.elements.select;
console.log(select.options);
const selectI = select.selectedIndex;
console.log(selectI);
//Присвоене значений
select.options[1].selected = true;
//Добпаление нового пункта списка
//Option (text,value, defaultSelected, selected)
let newOption = new Option('100', '4', false, false);
select.append(newOption);
console.log(select.options);
//Change
//Выводит информацию об изменении в элементе
select.addEventListener('change', function (event) {
    console.log('Сработало change в Select');
});
txt.addEventListener('change', function (event) {
    console.log('Сработало change в txt');
});
//Copy,Paste,Cut
txt.addEventListener('copy', function (event) {
    console.log('Копируем');
});
txt.addEventListener('paste', function (event) {
    console.log('Вставляем');
    //Запрет на вставку
    event.preventDefault();
});
txt.addEventListener('cut', function (event) {
    console.log('Вырезаем');
});
//Отправка формы
textform.addEventListener('submit', function () {
    console.log('Форма отправляется...');
    if (!txt.value) {
        console.log('Поле txt не заполнено');
        event.preventDefault();
    };
});
//Проверка веедения имэйл в форме
textform.addEventListener("submit", function (event) {
    if (emailTest(txt)) {
        txt.parentElement.insertAdjacentHTML(
            "beforeend", `<div class="form__error">Введите Email</div>`);
    };
    event.preventDefault;
});
txt.addEventListener('focus', function (event) {
    if (txt.nextElementSibling) {
        txt.nextElementSibling.remove();
    }
});
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};



