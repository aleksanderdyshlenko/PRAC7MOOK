// Получаем элементы по id
const button = document.getElementById("myButton");
const text   = document.getElementById("text");

// Обработчик клика на кнопку
button.addEventListener("click", function () {
  text.textContent = "🎉 Кнопка была нажата!";
  text.style.color = "#27ae60";
  text.style.fontSize = "24px";
  text.style.fontWeight = "bold";
});

// Функция смены фона
function changeBackground() {
  const colors = [
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)",
    "linear-gradient(135deg, #667eea, #764ba2)"
  ];

  const random = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[random];
}
