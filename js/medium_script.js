const simpleTest = [
  {
    radioQuestions: [
      {
        name: "download-file",
        question:
          "Обрери код, що дозволить користувачу завантажити файл net.pdf по кліку на посилання",
        answerOptions: [
          "&lt;a href='net.pdf' download&gt;CV&lt;/a&gt;",
          "&lt;a href='net.pdf' class='link'&gt;CV&lt;/a&gt;",
          "&lt;a href='net.pdf' class='download'&gt;CV&lt;/a&gt;",
          "&lt;a href='net.pdf' save&gt;CV&lt;/a&gt;",
        ],
        correctAnswer: "<a href='net.pdf' download>CV</a>",
      },
      {
        name: "alt-signature",
        question:
          "Що відображає браузер, якщо тегу &lt;img&gt; не вистачає атрибуту src?",
        answerOptions: ["1", "2", "3", "4"],
        correctAnswer: "3",
      },
      {
        name: "alt-atribute",
        question:
          "Який атрибут використовується для вказання альтернативного тексту для зображення?",
        answerOptions: ["alt", "src", "title", "href"],
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
    ],
  },

  {
    checkboxQuestions: [
      {
        name: "structural-tags",
        question:
          "Які з наведених тегів є структурними елементами HTML-документа?",
        answerOptions: [
          "&lt;header&gt;",
          "&lt;footer&gt;",
          "&lt;style&gt;",
          "&lt;section&gt;",
          "&lt;picture&gt;",
        ],
        correctAnswers: ["<header>", "<footer>", "<section>"],
      },
      {
        name: "table-tags",
        question: "Які з цих тегів використовуються для роботи з таблицями?",
        answerOptions: [
          "&lt;table&gt;",
          "&lt;tr&gt;",
          "&lt;th&gt;",
          "&lt;img&gt;",
          "&lt;video&gt;",
        ],
        correctAnswers: ["<table>", "<tr>", "<th>"],
      },
      {
        name: "input-types",
        question:
          "Які з цих значень може набувати атрибут type у тезі &lt;input&gt;?",
        answerOptions: ["text", "number", "date", "password", "button"],
        correctAnswers: ["text", "number", "date", "password", "button"],
      },
      {
        name: "list-tags",
        question: "Які з цих тегів використовуються для створення списків?",
        answerOptions: [
          "&lt;ul&gt;",
          "&lt;ol&gt;",
          "&lt;li&gt;",
          "&lt;div&gt;",
          "&lt;p&gt;",
        ],
        correctAnswers: ["&lt;ul>", "&lt;ol&gt;", "&lt;li&gt;"],
      },
    ],
  },

  {
    selectQuestions: [
      {
        name: "video-tag",
        question:
          "Виберіть, який тег використовується для додавання мультимедіа (відео)?",
        answerOptions: [
          "&lt;audio&gt;",
          "&lt;video&gt;",
          "&lt;source&gt;",
          "&lt;iframe&gt;",
          "&lt;form&gt;",
        ],
        correctAnswer: "<video>",
      },
      {
        name: "atribute-for-img",
        question:
          "Виберіть, який атрибут використовується для вказання URL-адреси зображення в тегу &lt;img&gt;",
        answerOptions: ["href", "src", "alt", "url", "a"],
        correctAnswer: "src",
      },
      {
        name: "list-type",
        question:
          "Який атрибут використовується для зміни типу маркера в ненумерованому списку?",
        answerOptions: ["type", "list", "style", "marker"],
        correctAnswer: "type",
      },
      {
        name: "input-placeholder",
        question:
          "Який атрибут використовується для додавання підказки у текстове поле?",
        answerOptions: ["placeholder", "hint", "label", "value"],
        correctAnswer: "placeholder",
      },
    ],
  },

  {
    matchQuestions: [
      {
        name: "tags-to-purpose",
        question: "Співставте HTML-теги з їхнім призначенням:",
        matchPairs: [
          { element: "&lt;a&gt;", purpose: "Посилання" },
          { element: "&lt;br&gt;", purpose: "Перенос рядка" },
          { element: "&lt;strong&gt;", purpose: "Виділення жирним текстом" },
          { element: "&lt;div&gt;", purpose: "Блок елемент" },
        ],
      },
      {
        name: "attributes-to-use",
        question: "Співставте атрибути з їхнім використанням:",
        matchPairs: [
          { element: "type", purpose: "Тип елемента форми (текст, пароль)" },
          { element: "href", purpose: "Посилання на URL" },
          { element: "src", purpose: "Джерело зображення або медіа" },
          { element: "alt", purpose: "Альтернативний текст для зображення" },
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
    ],
  },
];
let radioQuestions, checkboxQuestions, selectQuestions, matchQuestions;

window.addEventListener("DOMContentLoaded", function () {
  // Вибір рандомних запитань
  function getRandomQuestions(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // -------------------------------- DRAG AND DROP

  // ------------------------------- Drag-and-Drop без контейнера --------------------------
  function initializeDragAndDrop() {
    const draggables = document.querySelectorAll(".draggable-item");
    const droppables = document.querySelectorAll(".droppable-item");

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    droppables.forEach((droppable) => {
      droppable.addEventListener("dragover", (e) => {
        e.preventDefault();
        droppable.classList.add("dragover");
      });

      droppable.addEventListener("dragleave", () => {
        droppable.classList.remove("dragover");
      });

      droppable.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggable = document.querySelector(".dragging");
        if (draggable) {
          // Перевіряємо, чи зона порожня
          if (!droppable.querySelector(".draggable-item")) {
            droppable.appendChild(draggable);
          }
        }
        droppable.classList.remove("dragover");
      });
    });
  }

  // Викликаємо ініціалізацію після завантаження сторінки
  initializeDragAndDrop();

  // ------------------------------- функція Показати запитання --------------------------
  function showQuestion() {
    const formContainer = document.querySelector("#form-container");
    formContainer.innerHTML = ""; // Очищаємо попередній вміст

    // Вибираємо випадкові запитання
    radioQuestions = getRandomQuestions(simpleTest[0].radioQuestions, 4);
    checkboxQuestions = getRandomQuestions(simpleTest[1].checkboxQuestions, 3);
    selectQuestions = getRandomQuestions(simpleTest[2].selectQuestions, 2);
    matchQuestions = getRandomQuestions(simpleTest[3].matchQuestions, 1);

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
      const questionTemplate = `  <div class="question-number-container">
          <span class="question-number">${index + 1}.</span>
        </div>
        <p class="question">${question.question}</p>`;
      questionContainer.innerHTML = questionTemplate;

      // Ініціалізуємо шаблон для відповідей
      let answersTemplate = "";

      // Логіка для Radio-питань
      if (simpleTest[0].radioQuestions.includes(question)) {
        answersTemplate = question.answerOptions
          .map(
            (option) =>
              `  <label>
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
            (option) =>
              `  <label>
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
        .map((option) => `<option value="${option}">${option}</option>`)
        .join("")}
    </select>
  `;
      }

      // Логіка для Match-питань
      else if (simpleTest[3].matchQuestions.includes(question)) {
        const leftItems = question.matchPairs
          .map(
            (pair) =>
              `<div class="draggable-item" draggable="true" data-value="${pair.element}">
          ${pair.element}
        </div>`
          )
          .join("");

        const rightItems = question.matchPairs
          .map(
            (pair) =>
              `<div class="droppable-item" data-correct="${pair.purpose}">
          ${pair.purpose}
        </div>`
          )
          .join("");

        answersTemplate = `
    <div class="match-container">
      <div class="left-column">${leftItems}</div>
      <div class="right-column">${rightItems}</div>
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

  const matchContainers = document.querySelectorAll(".match-container");

  matchContainers.forEach((container) => {
    const draggables = container.querySelectorAll(".draggable-item");
    const droppables = container.querySelectorAll(".droppable-item");

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    droppables.forEach((droppable) => {
      droppable.addEventListener("dragover", (e) => {
        e.preventDefault();
        droppable.classList.add("dragover");
      });

      droppable.addEventListener("dragleave", () => {
        droppable.classList.remove("dragover");
      });

      droppable.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggable = document.querySelector(".dragging");
        if (draggable) {
          droppable.appendChild(draggable);
        }
        droppable.classList.remove("dragover");
      });
    });
  });

  // ------------------------------- функція перевірити відповіді --------------------------
  function checkAnswers() {
    const allQuestions = [
      ...radioQuestions,
      ...checkboxQuestions,
      ...selectQuestions,
      ...matchQuestions,
    ];

    let score = 0;

    allQuestions.forEach((question, index) => {
      let userAnswer = null;

      // Для Radio-питань
      if (simpleTest[0].radioQuestions.includes(question)) {
        const selectedRadio = document.querySelector(
          `input[name="question-${index}"]:checked`
        );
        if (selectedRadio) {
          userAnswer = selectedRadio.value;
          // Перевірка правильності відповіді
          if (userAnswer === question.correctAnswer) {
            score++;
          }
        }
      }

      // Для Checkbox-питань
      else if (simpleTest[1].checkboxQuestions.includes(question)) {
        const selectedCheckboxes = document.querySelectorAll(
          `input[name="question-${index}"]:checked`
        );
        userAnswer = Array.from(selectedCheckboxes).map(
          (checkbox) => checkbox.value
        );
        // Перевірка правильності відповіді
        if (
          JSON.stringify(userAnswer.sort()) ===
          JSON.stringify(question.correctAnswers.sort())
        ) {
          score++;
        }
      }

      // Для Select-питань
      else if (simpleTest[2].selectQuestions.includes(question)) {
        const selectedOption = document.querySelector(
          `select[name="question-${index}"]`
        );
        if (selectedOption) {
          userAnswer = selectedOption.value;
          // Перевірка правильності відповіді
          if (userAnswer === question.correctAnswer) {
            score++;
          }
        }
      }

      // Для Match-питань
      else if (simpleTest[3].matchQuestions.includes(question)) {
        const inputs = document.querySelectorAll(
          `input[name="question-${index}"]`
        );
        userAnswer = Array.from(inputs).map((input) => input.value);
        // Перевірка правильності відповіді
        const correctAnswers = question.matchPairs.map((pair) => pair.purpose);
        if (
          JSON.stringify(userAnswer.sort()) ===
          JSON.stringify(correctAnswers.sort())
        ) {
          score++;
        }
      }
    });
    console.log(`Ви набрали ${score} балів з ${allQuestions.length}`);
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = ` Ви набрали ${score} балів з ${allQuestions.length}.`;
  }
  // ------------------------------------------- МОДАЛКА

  // Викликаємо функцію перевірки при натисканні кнопки "send"
  const sendButton = document.querySelector(".send-btn");

  function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    document.body.classList.add("body-no-scroll"); // Забороняємо прокрутку сторінки
  }

  const closeBtn = document.querySelector(".close-btn");
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    document.body.classList.remove("body-no-scroll"); // Дозволяємо прокрутку сторінки
  }

  // Використовуємо ці функції для відкриття та закриття модального вікна
  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  sendButton.addEventListener("click", function (event) {
    event.preventDefault();
    checkAnswers();
    openModal(); // Відкриваємо модальне вікно
  });
});

