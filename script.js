// Получаем элементы со страницы по их id
let button = document.getElementById("myButton");
let text = document.getElementById("text");
let bgButton = document.getElementById("bgButton");

// Добавляем обработчик события "click" на первую кнопку
button.addEventListener("click", function () {
    // Меняем текст элемента
    text.textContent = "Кнопка была нажата!";
    // Меняем стиль элемента через JS
    text.style.color = "green";
    text.style.fontSize = "22px";
});

// Функция смены фона страницы
function changeBackground() {
    document.body.style.backgroundColor = "#e0e0e0";
}

// Привязываем функцию смены фона ко второй кнопке
bgButton.addEventListener("click", changeBackground);
