const simpleTest = [
  {radioQuestions: [    
    {
      name: "tag-for-link",
      question: "Який тег використовується для створення посилання?",
      answerOptions: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;src&gt;"],
      correctAnswer: "<a>",
    },
    {
      name: "alt-signature",
      question: "Що відображає браузер, якщо тегу &lt;img&gt; не вистачає атрибуту src?",
      answerOptions: [
        "Порожнє місце",
        "Помилка '404 Not Found'",
        "Текст з атрибуту alt",
        "Зображення не відображається",
      ],
      correctAnswer: "Текст з атрибуту alt",
    },
    {
      name: "alt-atribute",
      question: "Який атрибут використовується для вказання альтернативного тексту для зображення?",
      answerOptions: [
        "alt",
        "src",
        "title",
        "href",
      ],
      correctAnswer: "alt",
    },
    {
      name: "doctype",
      question: "Що з наведеного є правильним оголошенням DOCTYPE для HTML5?",
      answerOptions: [
        "&lt;!DOCTYPE html&gt;",
        "&lt;DOCTYPE html&gt;",
        "&lt;!DOCTYPE HTML5&gt;",
        "&lt;HTML5 DOCTYPE&gt;",
      ],
      correctAnswer: "<!DOCTYPE html>",
    },
    {
      name: "inline-element",
      question: "Який тег використовується для створення рядкового елемента?",
      answerOptions: [
        "&lt;span&gt;",
        "&lt;div&gt;",
        "&lt;section&gt;",
        "&lt;article&gt;",
      ],
      correctAnswer: "<span>",
    },
  ],},

  {checkboxQuestions: [
    {
      name: "structural-tags",
      question: "Які з наведених тегів є структурними елементами HTML-документа?",
      answerOptions: ["&lt;header&gt;", "&lt;footer&gt;", "&lt;style&gt;", "&lt;section&gt;", "&lt;picture&gt;"],
      correctAnswers: ["<header>", "<footer>", "<section>"],
    },
    {
      name: "table-tags",
      question: "Які з цих тегів використовуються для роботи з таблицями?",
      answerOptions: ["&lt;table&gt;", "&lt;tr&gt;", "&lt;th&gt;", "&lt;img&gt;>", "&lt;video&gt;"],
      correctAnswers: ["<table>", "<tr>", "<th>"],
    },
    {
      name: "input-types",
      question: "Які з цих значень може набувати атрибут type у тезі &lt;input&gt;?",
      answerOptions: ["text", "number", "date", "password", "button"],
      correctAnswers: ["text", "number", "date", "password"],
    },
    {
      name: "list-tags",
      question: "Які з цих тегів використовуються для створення списків?",
      answerOptions: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;div&gt;", "&lt;p&gt;"],
      correctAnswers: ["&lt;ul>", "&lt;ol&gt;", "&lt;li&gt;"],
    },
  ],},

  {selectQuestions: [
    {
      name: "video-tag",
      question: "Виберіть, який тег використовується для додавання мультимедіа (відео)?",
      answerOptions: ["&lt;audio&gt;", "&lt;ideo&gt;", "&lt;source&gt;", "&lt;iframe&gt;", "&lt;form&gt;"],
      correctAnswer: "<video>",
    },
    {
      name: "atribute-for-img",
      question: "Виберіть, який атрибут використовується для вказання URL-адреси зображення в тегу &lt;img&gt;",
      answerOptions: ["href", "src", "alt", "url", "a"],
      correctAnswer: "src",
    },
    {
      name: "list-type",
      question: "Який атрибут використовується для зміни типу маркера в ненумерованому списку?",
      answerOptions: ["type", "list", "style", "marker"],
      correctAnswer: "type",
    },
    {
      name: "input-placeholder",
      question: "Який атрибут використовується для додавання підказки у текстове поле?",
      answerOptions: ["placeholder", "hint", "label", "value"],
      correctAnswer: "placeholder",
    },
  ],},

  {matchQuestions: [
    {
      name: "tags-to-purpose",
      question: "Співставте HTML-теги з їхнім призначенням:",
      matchPairs: [
        { tag: "&lt;a&gt;", purpose: "Посилання" },
        { tag: "&lt;br&gt;", purpose: "Перенос рядка" },
        { tag: "&lt;strong&gt;", purpose: "Виділення жирним текстом" },
        { tag: "&lt;div&gt;", purpose: "Блок елемент" },
      ],
    },
    {
      name: "attributes-to-use",
      question: "Співставте атрибути з їхнім використанням:",
      matchPairs: [
        { attribute: "type", usage: "Тип елемента форми (текст, пароль)" },
        { attribute: "href", usage: "Посилання на URL" },
        { attribute: "src", usage: "Джерело зображення або медіа" },
        { attribute: "alt", usage: "Альтернативний текст для зображення" },
      ],
    },
    {
      name: "table-elements",
      question: "Співставте елементи таблиці з їхнім призначенням:",
      matchPairs: [
        { element: "&lt;table&gt;", purpose: "Створення таблиці" },
        { element: "&lt;tr&gt;", purpose: "Створення рядка таблиці" },
        { element: "&lt;th&gt;", purpose: "Заголовок колонки" },
        { element: "&lt;td&gt;", purpose: "Дані в комірці" },
      ],
    },
  ],},
];

window.addEventListener("DOMContentLoaded", function () {
  // Вибір рандомних запитань
  function getRandomQuestions(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Показати запитання
  function showQuestion() {
    const formContainer = document.querySelector("#form-container");
    formContainer.innerHTML = ""; // Очищаємо попередній вміст
  
    // Вибираємо випадкові запитання
    const radioQuestions = getRandomQuestions(simpleTest[0].radioQuestions, 4);
    const checkboxQuestions = getRandomQuestions(simpleTest[1].checkboxQuestions, 3);
    const selectQuestions = getRandomQuestions(simpleTest[2].selectQuestions, 2);
    const matchQuestions = getRandomQuestions(simpleTest[3].matchQuestions, 1);
  
    // Об'єднуємо всі запитання
    const allQuestions = [
      ...radioQuestions,
      ...checkboxQuestions,
      ...selectQuestions,
      ...matchQuestions,
    ];
  
    allQuestions.forEach((question, index) => {
      const questionContainer = document.createElement("div");
      questionContainer.classList.add("question-item");
  
      // Шаблон для тексту запитання
      const questionTemplate = `
        <div class="question-number-container">
          <span class="question-number">${index + 1}.</span>
        </div>
        <p class="question">${question.question}</p>
      `;
      questionContainer.innerHTML = questionTemplate;
  
      // Ініціалізуємо шаблон для відповідей
      let answersTemplate = "";
  
      // Логіка для Radio-питань
      if (simpleTest[0].radioQuestions.includes(question)) {
        answersTemplate = question.answerOptions
          .map(
            (option) => `
            <label>
              <input type="radio" name="question-${index}" value="${option}">
              ${option}
            </label>`
          )
          .join("");
      }
  
      // Логіка для Checkbox-питань
      else if (simpleTest[1].checkboxQuestions.includes(question)) {
        answersTemplate = question.answerOptions
          .map(
            (option) => `
            <label>
              <input type="checkbox" name="question-${index}" value="${option}">
              ${option}
            </label>`
          )
          .join("");
      }
  
      // Логіка для Select-питань
      else if (simpleTest[2].selectQuestions.includes(question)) {
        answersTemplate = `
          <select name="question-${index}">
            ${question.answerOptions
              .map(
                (option) => `
              <option value="${option}">${option}</option>`
              )
              .join("")}
          </select>
        `;
      }
  
      // Логіка для Match-питань
      else if (simpleTest[3].matchQuestions.includes(question)) {
        answersTemplate = `
          <div class="match-container">
            ${question.matchPairs
              .map(
                (pair) => `
              <div class="match-pair">
                <span>${pair.tag || pair.element || pair.attribute}</span>
                <input type="text" placeholder="Співставлення">
              </div>`
              )
              .join("")}
          </div>
        `;
      }
  
      // Додаємо відповіді до питання
      const answersContainer = document.createElement("div");
      answersContainer.classList.add("answers-container");
      answersContainer.innerHTML = answersTemplate;
  
      questionContainer.appendChild(answersContainer);
      formContainer.appendChild(questionContainer);
    });
  }
  

  showQuestion();
});

