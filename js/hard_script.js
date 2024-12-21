const hardTest = [
  {
    inputOutputQuestions: [
      {
        name: "custom-head-tag",
        question:
          "Напишіть код, який створить кастомний заголовок рівня 2 з текстом 'HTML Advanced' та додасть йому клас 'highlight'.",
        placeholder: "Введіть ваш HTML код тут...",
        correctAnswer: "<h2 class='highlight'>HTML Advanced</h2>",
      },
    ],
  },
  {
    radioQuestions: [
      {
        name: "html-version",
        question:
          "Яка версія HTML була останньою стабільною на момент випуску HTML5?",
        answerOptions: ["HTML4", "XHTML 1.0", "HTML5", "HTML5.1"],
        correctAnswer: "HTML5",
      },
      {
        name: "html5-api",
        question:
          "Який API в HTML5 дозволяє зберігати дані на стороні клієнта?",
        answerOptions: [
          "LocalStorage",
          "SessionStorage",
          "Cookies",
          "Web Storage",
        ],
        correctAnswer: "LocalStorage",
      },
      {
        name: "semantic-header",
        question:
          "Який тег HTML5 використовується для заголовка документа або розділу?",
        answerOptions: [
          "&lt;header&gt;",
          "&lt;title&gt;",
          "&lt;section&gt;",
          "&lt;article&gt;",
        ],
        correctAnswer: "<header>",
      },
    ],
  },
  {
    checkboxQuestions: [
      {
        name: "table-tags",
        question:
          "Які з наведених тегів використовуються для побудови таблиць в HTML?",
        answerOptions: [
          "&lt;thead&gt;",
          "&lt;tbody&gt;",
          "&lt;td&gt;",
          "&lt;thead&gt;",
          "&lt;tfoot&gt;",
        ],
        correctAnswers: ["<thead>", "<tbody>", "<td>", "<tfoot>"],
      },
      {
        name: "form-attributes",
        question:
          "Які з цих атрибутів можна використовувати в тегу &lt;form&gt;?",
        answerOptions: ["method", "action", "enctype", "type"],
        correctAnswers: ["method", "action", "enctype"],
      },
    ],
  },

  {
    selectQuestions: [
      {
        name: "element-align",
        question:
          "Який атрибут використовується для вирівнювання елемента по горизонталі?",
        answerOptions: ["align", "justify", "center", "float"],
        correctAnswer: "align",
      },
      {
        name: "form-input-type",
        question:
          "Який атрибут використовується для створення поля для введення пароля в HTML?",
        answerOptions: ["password", "text", "email", "hidden"],
        correctAnswer: "password",
      },
      {
        name: "iframe-attributes",
        question:
          "Який атрибут використовується для вказання висоти та ширини в елементі &lt;iframe&gt;?",
        answerOptions: ["width", "height", "frameborder", "srcdoc"],
        correctAnswer: "width",
      },
    ],
  },

  {
    matchQuestions: [
      {
        name: "html-tags-to-description",
        question: "Співставте HTML-теги з їхнім призначенням:",
        matchPairs: [
          { element: "&lt;nav&gt;", purpose: "Навігація по сайту" },
          { element: "&lt;header&gt;", purpose: "Верхній розділ сторінки" },
          { element: "&lt;footer&gt;", purpose: "Нижній розділ сторінки" },
          {
            element: "&lt;section&gt;",
            purpose: "Розділ контенту в документі",
          },
        ],
      },
      {
        name: "html-tags-to-semantics",
        question: "Співставте HTML5 теги з їхнім семантичним значенням:",
        matchPairs: [
          { element: "&lt;article&gt;", purpose: "Окремий блок контенту" },
          {
            element: "&lt;footer&gt;",
            purpose: "Нижній колонтитул сторінки або розділу",
          },
          {
            element: "&lt;figure&gt;",
            purpose: "Контейнер для зображень і медіа-контенту",
          },
          { element: "&lt;mark&gt;", purpose: "Виділення тексту" },
        ],
      },
      {
        name: "html-forms-to-purpose",
        question: "Співставте атрибути форми з їхнім призначенням:",
        matchPairs: [
          { element: "action", purpose: "URL для відправки даних форми" },
          { element: "method", purpose: "Метод передачі даних (GET/POST)" },
          { element: "enctype", purpose: "Тип кодування даних форми" },
          {
            element: "target",
            purpose:
              "Місце для відкриття результату форми (наприклад, нова вкладка)",
          },
        ],
      },
    ],
  },
];

let inputOutputQuestions,
  radioQuestions,
  checkboxQuestions,
  selectQuestions,
  matchQuestions;

window.addEventListener("DOMContentLoaded", function () {
  // Вибір рандомних запитань
  function getRandomQuestions(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

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
  // --------------------------------- INPUT

  // ------------------------------- функція Показати запитання --------------------------
  function showQuestion() {
    const formContainer = document.querySelector("#form-container");
    formContainer.innerHTML = ""; // Очищуємо попередній вміст

    // Вибір випадкових запитань
    const inputOutputQuestions = getRandomQuestions(
      hardTest[0].inputOutputQuestions,
      1
    );
    const radioQuestions = getRandomQuestions(hardTest[1].radioQuestions, 3);
    const checkboxQuestions = getRandomQuestions(
      hardTest[2].checkboxQuestions,
      4
    );
    const selectQuestions = getRandomQuestions(hardTest[3].selectQuestions, 2);
    const matchQuestions = getRandomQuestions(hardTest[4].matchQuestions, 1);

    // Об'єднуємо всі запитання
    const allQuestions = [
      ...inputOutputQuestions,
      ...radioQuestions,
      ...checkboxQuestions,
      ...selectQuestions,
      ...matchQuestions,
    ];

    // Обробка кожного запитання
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

      if (hardTest[0].inputOutputQuestions.includes(question)) {
        answersTemplate = `
        <textarea 
          name="input-question-${index}" 
          placeholder="${question.placeholder || "Введіть відповідь"}" 
          rows="3" 
          class="input-code-area"></textarea>
      `;
      } else if (hardTest[1].radioQuestions.includes(question)) {
        answersTemplate = question.answerOptions
          .map(
            (option) => `
          <label>
            <input type="radio" name="question-${index}" value="${option}">
            ${option}
          </label>`
          )
          .join("");
      } else if (hardTest[2].checkboxQuestions.includes(question)) {
        answersTemplate = question.answerOptions
          .map(
            (option) => `
          <label>
            <input type="checkbox" name="question-${index}" value="${option}">
            ${option}
          </label>`
          )
          .join("");
      } else if (hardTest[3].selectQuestions.includes(question)) {
        answersTemplate = `
        <select name="question-${index}">
          ${question.answerOptions
            .map((option) => `<option value="${option}">${option}</option>`)
            .join("")}
        </select>
      `;
      } else if (hardTest[4].matchQuestions.includes(question)) {
        const leftItems = question.matchPairs
          .map(
            (pair) => `
          <div class="draggable-item" draggable="true" data-value="${pair.element}">
            ${pair.element}
          </div>`
          )
          .join("");

        const rightItems = question.matchPairs
          .map(
            (pair) => `
          <div class="droppable-item" data-correct="${pair.purpose}">
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

  // Виклик функції для показу запитань
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

  // ------------------------------- функція перевірити відповіді -------------------------
  function checkAnswers() {
    const inputOutputQuestions = hardTest[0].inputOutputQuestions;
    const radioQuestions = hardTest[1].radioQuestions;
    const checkboxQuestions = hardTest[2].checkboxQuestions;
    const selectQuestions = hardTest[3].selectQuestions;
    const matchQuestions = hardTest[4].matchQuestions;

    const allQuestions = [
      ...inputOutputQuestions,
      ...radioQuestions,
      ...checkboxQuestions,
      ...selectQuestions,
      ...matchQuestions,
    ];

    let score = 0;

    allQuestions.forEach((question, index) => {
      let userAnswer = null;

      if (inputOutputQuestions.includes(question)) {
        const userInputElement = document.querySelector(
          `textarea[name="input-question-${index}"]`
        );

        console.log(userInputElement); // Для перевірки

        if (userInputElement) {
          const userInput = userInputElement.value.trim(); // Обрізаємо пробіли
          console.log(userInput); // Для перевірки введеного значення

          // Порівнюємо відповідь із правильною
          if (userInput === question.correctAnswer) {
            score++;
          }
        } else {
          console.warn(`Не знайдено textarea для input-question-${index}`);
        }
      }

      // Для Radio-питань
      else if (radioQuestions.includes(question)) {
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
      else if (checkboxQuestions.includes(question)) {
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
      else if (selectQuestions.includes(question)) {
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
      else if (matchQuestions.includes(question)) {
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
    scoreElement.textContent = ` Ви набрали ${score} балів з 10.`;
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
