const mediumTest = [
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
        name: "meta-tag",
        question:
          "Який тег використовується для вказання мета-інформації про HTML-документ?",
        answerOptions: [
          "&lt;meta&gt;",
          "&lt;head&gt;",
          "&lt;title&gt;",
          "&lt;link&gt;",
        ],
        correctAnswer: "<meta>",
      },
      {
        name: "css-in-html",
        question:
          "Який атрибут використовується для додавання CSS-стилів безпосередньо до HTML-елемента?",
        answerOptions: ["style", "class", "id", "css"],
        correctAnswer: "style",
      },
      {
        name: "semantic-tags",
        question: "Який з тегів є семантичним у HTML5?",
        answerOptions: [
          "&lt;article&gt;",
          "&lt;div&gt;",
          "&lt;span&gt;",
          "&lt;font&gt;",
        ],
        correctAnswer: "<article>",
      },
      {
        name: "favicon",
        question:
          "Який тег використовується для додавання іконки сайту (favicon)?",
        answerOptions: [
          "&lt;link&gt;",
          "&lt;meta&gt;",
          "&lt;icon&gt;",
          "&lt;head&gt;",
        ],
        correctAnswer: "<link>",
      },
    ],
  },

  {
    checkboxQuestions: [
      {
        name: "global-attributes",
        question: "Які з наведених є глобальними атрибутами HTML?",
        answerOptions: ["id", "class", "style", "src", "alt"],
        correctAnswers: ["id", "class", "style"],
      },
      {
        name: "html5-tags",
        question: "Які з цих тегів додані в HTML5?",
        answerOptions: [
          "&lt;header&gt;",
          "&lt;footer&gt;",
          "&lt;aside&gt;",
          "&lt;font&gt;",
          "&lt;blink&gt;",
        ],
        correctAnswers: ["<header>", "<footer>", "<aside>"],
      },
      {
        name: "input-attributes",
        question: "Які атрибути можуть бути використані з тегом &lt;input&gt;?",
        answerOptions: [
          "placeholder",
          "required",
          "disabled",
          "loop",
          "controls",
        ],
        correctAnswers: ["placeholder", "required", "disabled"],
      },
      {
        name: "media-elements",
        question: "Які теги використовуються для роботи з мультимедіа?",
        answerOptions: [
          "&lt;audio&gt;",
          "&lt;video&gt;",
          "&lt;source&gt;",
          "&lt;track&gt;",
          "&lt;script&gt;",
        ],
        correctAnswers: ["<audio>", "<video>", "<source>", "<track>"],
      },
    ],
  },

  {
    selectQuestions: [
      {
        name: "form-method",
        question: "Який атрибут форми вказує метод передачі даних?",
        answerOptions: ["method", "action", "type", "name"],
        correctAnswer: "method",
      },
      {
        name: "table-attributes",
        question:
          "Який атрибут використовується для об'єднання кількох колонок у таблиці?",
        answerOptions: ["colspan", "rowspan", "merge", "span"],
        correctAnswer: "colspan",
      },
      {
        name: "input-file",
        question:
          "Яке значення атрибута type використовується для створення поля завантаження файлів?",
        answerOptions: ["file", "upload", "submit", "text"],
        correctAnswer: "file",
      },
      {
        name: "iframe-attribute",
        question:
          "Який атрибут використовується для вказання URL у тезі &lt;iframe&gt;?",
        answerOptions: ["src", "href", "link", "url"],
        correctAnswer: "src",
      },
    ],
  },

  {
    matchQuestions: [
      {
        name: "html-to-purpose",
        question: "Співставте HTML-теги з їхнім призначенням:",
        matchPairs: [
          { element: "&lt;nav&gt;", purpose: "Навігація по сайту" },
          {
            element: "&lt;figure&gt;",
            purpose: "Контейнер для зображень або схем",
          },
          {
            element: "&lt;aside&gt;",
            purpose: "Бічний контент або додаткова інформація",
          },
          { element: "&lt;main&gt;", purpose: "Основний контент сторінки" },
        ],
      },
      {
        name: "attributes-to-purpose",
        question: "Співставте атрибути з їхнім призначенням:",
        matchPairs: [
          { element: "autoplay", purpose: "Автоматичне відтворення медіа" },
          { element: "required", purpose: "Обов'язкове поле форми" },
          { element: "disabled", purpose: "Забороняє взаємодію з елементом" },
          { element: "controls", purpose: "Показує елементи керування медіа" },
        ],
      },
      {
        name: "css-properties",
        question: "Співставте CSS-властивості з їхнім призначенням:",
        matchPairs: [
          { element: "color", purpose: "Колір тексту" },
          { element: "background-color", purpose: "Колір фону" },
          { element: "margin", purpose: "Зовнішні відступи" },
          { element: "padding", purpose: "Внутрішні відступи" },
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
    radioQuestions = getRandomQuestions(mediumTest[0].radioQuestions, 4);
    checkboxQuestions = getRandomQuestions(mediumTest[1].checkboxQuestions, 3);
    selectQuestions = getRandomQuestions(mediumTest[2].selectQuestions, 2);
    matchQuestions = getRandomQuestions(mediumTest[3].matchQuestions, 1);

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
      if (mediumTest[0].radioQuestions.includes(question)) {
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
      else if (mediumTest[1].checkboxQuestions.includes(question)) {
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
      else if (mediumTest[2].selectQuestions.includes(question)) {
        answersTemplate = `
    <select name="question-${index}">
      ${question.answerOptions
        .map((option) => `<option value="${option}">${option}</option>`)
        .join("")}
    </select>
  `;
      }

      // Логіка для Match-питань
      else if (mediumTest[3].matchQuestions.includes(question)) {
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
      if (mediumTest[0].radioQuestions.includes(question)) {
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
      else if (mediumTest[1].checkboxQuestions.includes(question)) {
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
      else if (mediumTest[2].selectQuestions.includes(question)) {
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
      else if (mediumTest[3].matchQuestions.includes(question)) {
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

