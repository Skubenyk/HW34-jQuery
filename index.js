
//* Створи калькулятор.

$(document).ready(function () {
  $("button").click(function () {
    //Оброблюємо клік по кнопці
    let firstNumber = $(".first-number").val(); //Вносимо перше число в змінну
    let secondNumber = $(".second-number").val(); //Вносимо друге число в змінну

    let sendForm = true;

    if (firstNumber.length == 0) {
      //Перевіряєм чи порожня строка для першого числа
      $(".first-number").css("background", "orange"); //Якщо строка порожня, то підсвічуємо її оранжевим кольором
      sendForm = false;
    }

    if (secondNumber.length == 0) {
      //Перевіряєм чи порожня строка для першого числа
      $(".second-number").css("background", "orange"); //Якщо строка порожня, то підсвічуємо її оранжевим кольором
      sendForm = false;
    }

    if (sendForm == true) {
      let type = $(this).attr("type"); //Отримуємо тип математичної із атрибута type
      let result = 0;
      switch (type) {
        case 'plus':
          result = firstNumber + secondNumber; // Якщо type додавання, то додаємо
          break;
        case 'minus':
          result = firstNumber - secondNumber; // Якщо type віднімання, то віднімаємо
          break;
        case 'multiply':
          result = firstNumber * secondNumber; // Якщо type множення, то множимо
          break;
        case 'divide':
          result = firstNumber / secondNumber; // Якщо type ділення, то ділимо
          break;
      }
      $(".result span").text(result);
    } else {
      $(".result span").text("_");
    }
  });
});
