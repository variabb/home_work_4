const simpleTest = [
  {radioQuestions: [    
    {
      name: "tag-for-link",
      question: "Який тег використовується для створення посилання?",
      answerOptions: ["<a>", "<link>", "<href>", "<src>"],
      correctAnswer: "<a>",
    },
    {
      name: "alt-signature",
      question: "Що відображає браузер, якщо тегу <img> не вистачає атрибуту src?",
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
        "<!DOCTYPE html>",
        "<DOCTYPE html>",
        "<!DOCTYPE HTML5>",
        "<HTML5 DOCTYPE>",
      ],
      correctAnswer: "<!DOCTYPE html>",
    },
    {
      name: "inline-element",
      question: "Який тег використовується для створення рядкового елемента?",
      answerOptions: [
        "<span>",
        "<div>",
        "<section>",
        "<article>",
      ],
      correctAnswer: "<span>",
    },
  ],},

  {checkboxQuestions: [
    {
      name: "structural-tags",
      question: "Які з наведених тегів є структурними елементами HTML-документа?",
      answerOptions: ["<header>", "<footer>", "<style>", "<section>", "<picture>"],
      correctAnswers: ["<header>", "<footer>", "<section>"],
    },
    {
      name: "table-tags",
      question: "Які з цих тегів використовуються для роботи з таблицями?",
      answerOptions: ["<table>", "<tr>", "<th>", "<svg>", "<video>"],
      correctAnswers: ["<table>", "<tr>", "<th>"],
    },
    {
      name: "input-types",
      question: "Які з цих значень може набувати атрибут type у тезі <input>?",
      answerOptions: ["text", "number", "date", "password", "button"],
      correctAnswers: ["text", "number", "date", "password"],
    },
    {
      name: "list-tags",
      question: "Які з цих тегів використовуються для створення списків?",
      answerOptions: ["<ul>", "<ol>", "<li>", "<div>", "<p>"],
      correctAnswers: ["<ul>", "<ol>", "<li>"],
    },
  ],},

  {selectQuestions: [
    {
      name: "video-tag",
      question: "Виберіть, який тег використовується для додавання мультимедіа (відео)?",
      answerOptions: ["<audio>", "<video>", "<source>", "<iframe>", "<form>"],
      correctAnswer: "<video>",
    },
    {
      name: "atribute-for-img",
      question: "Виберіть, який атрибут використовується для вказання URL-адреси зображення в тегу <img>",
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
        { tag: "<a>", purpose: "Посилання" },
        { tag: "<br>", purpose: "Перенос рядка" },
        { tag: "<strong>", purpose: "Виділення жирним текстом" },
        { tag: "<div>", purpose: "Блок елемент" },
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
        { element: "<table>", purpose: "Створення таблиці" },
        { element: "<tr>", purpose: "Створення рядка таблиці" },
        { element: "<th>", purpose: "Заголовок колонки" },
        { element: "<td>", purpose: "Дані в комірці" },
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
    const headerContainer = document.querySelector("#header-container");

    formContainer.innerHTML = "";

    const radioQuestions = getRandomQuestions(simpleTest[0].radioQuestions, 4);
    const checkboxQuestions = getRandomQuestions(simpleTest[1].checkboxQuestions, 3);
    const selectQuestions = getRandomQuestions(simpleTest[2].selectQuestions, 2);
    const matchQuestions = getRandomQuestions(simpleTest[3].matchQuestions, 1);

    const allQuestions = [
      ...radioQuestions,
      ...checkboxQuestions,
      ...selectQuestions,
      ...matchQuestions,
    ];

    allQuestions.forEach((question, index) => {
      const questionContainer = document.createElement("div");
      questionContainer.classList.add("question-item");

      // Номер запитання
      const numberTemplate = `<div class="question-number-container">
                  <span class="question-number">${index + 1}</span>
              </div>`;
      headerContainer.innerHTML = numberTemplate;

      // Назва та контент запитання
      let questionTemplate = `<p class="question">${question.question}</p>`;
      questionContainer.innerHTML = questionTemplate;

      formContainer.appendChild(questionContainer);
    });
  }

  showQuestion();
});
