// ===== ВАРИАНТ 2: картинка по ссылке =====
// Вставь сюда прямую ссылку на картинку
const BG_URL = "https://i.ibb.co.com/RpxXNqr4/artworks-RKYCj-PSQp6-Ag-HTNa-d-YZl-OQ-t500x500.jpg";

// Ставим картинку на фон при загрузке страницы
document.body.style.backgroundImage = `url('${BG_URL}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

// ===== Логика кнопок =====

// Получаем элементы со страницы по их id
let button = document.getElementById("myButton");
let text = document.getElementById("text");
let bgButton = document.getElementById("bgButton");

// Кнопка "Нажми меня" — меняет текст и стиль
button.addEventListener("click", function () {
    text.textContent = "Кнопка была нажата!";
    text.style.color = "green";
    text.style.fontSize = "22px";
});

// Кнопка "Изменить фон" — снова ставит картинку
function changeBackground() {
    document.body.style.backgroundImage = `url('${BG_URL}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

bgButton.addEventListener("click", changeBackground);
