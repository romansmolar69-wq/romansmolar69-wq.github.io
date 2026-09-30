/**
 * Головний скрипт для взаємодії з розкладом та відображення даних
 */

document.addEventListener("DOMContentLoaded", () => {
  // Перевіряємо наявність даних
  if (typeof COLLEGE_DATA === "undefined") {
    console.error("COLLEGE_DATA не знайдено! Перевірте підключення data.js");
    return;
  }

  // Оновлюємо тему сайту
  initTheme();

  // Оновлюємо поточний день та дату в шапці (якщо є елементи)
  initHeaderMeta();

  // Визначаємо поточну сторінку за data-атрибутом тегу body або назвою файлу
  const pageType = document.body.dataset.page;

  if (pageType === "course") {
    initCoursePage();
  } else if (pageType === "teacher") {
    initTeacherPage();
  } else if (pageType === "teachers-list") {
    initTeachersListPage();
  } else if (pageType === "bells") {
    initBellsPage();
  }
});

/**
 * Перемикач темної / світлої теми з пам'яттю у localStorage
 */
function initTheme() {
  const savedTheme = localStorage.getItem("mppk_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Додаємо кнопку теми у навігацію або створюємо плаваючу кнопку
  const navUl = document.querySelector(".nav-links");
  if (navUl && !document.getElementById("theme-toggle-btn")) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.id = "theme-toggle-btn";
    btn.className = "nav-link";
    btn.style.cssText = "cursor: pointer; background: transparent; border: 1px solid var(--border-color); font-size: 0.9rem; padding: 6px 12px;";
    btn.innerHTML = savedTheme === "dark" ? "☀️ Світла" : "🌙 Темна";
    btn.title = "Перемкнути тему оформлення сайту";
    
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("mppk_theme", nextTheme);
      btn.innerHTML = nextTheme === "dark" ? "☀️ Світла" : "🌙 Темна";
    });

    li.appendChild(btn);
    navUl.appendChild(li);
  }
}

/**
 * Оновлення мета-інформації в шапці (поточний день, час, тиждень)
 */
function initHeaderMeta() {
  const dateEl = document.getElementById("current-date-badge");
  const weekEl = document.getElementById("current-week-badge");

  if (dateEl) {
    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateStr = now.toLocaleDateString('uk-UA', options);
    // Робимо першу букву великою
    dateEl.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
  }

  if (weekEl) {
    // Простий розрахунок парного / непарного тижня (чисельник / знаменник)
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const pastDaysOfYear = (now - startOfYear) / 86400000;
    const weekNum = Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
    const isNumerator = weekNum % 2 !== 0;
    weekEl.textContent = isNumerator ? "Тиждень: Чисельник (I)" : "Тиждень: Знаменник (II)";
  }
}

/**
 * Ініціалізація сторінки конкретного курсу (1, 2, 3 або Т)
 */
function initCoursePage() {
  const courseId = document.body.dataset.courseId; // "1", "2", "3", "t"
  const courseConfig = COLLEGE_DATA.courses.find(c => String(c.id) === String(courseId));

  if (!courseConfig) {
    console.error("Не знайдено курс з id:", courseId);
    return;
  }

  const container = document.getElementById("schedule-display");
  const groupFiltersContainer = document.getElementById("group-filters");
  const dayFiltersContainer = document.getElementById("day-filters");
  const searchInput = document.getElementById("schedule-search");

  let selectedGroup = "all";
  let selectedDay = "all";
  let searchQuery = "";

  // 1. Створюємо фільтри по групах цього курсу
  if (groupFiltersContainer) {
    groupFiltersContainer.innerHTML = "";
    
    // Кнопка "Всі групи"
    const allBtn = document.createElement("button");
    allBtn.className = "pill-btn active";
    allBtn.textContent = `Всі групи (${courseConfig.groups.length})`;
    allBtn.addEventListener("click", () => {
      setActivePill(groupFiltersContainer, allBtn);
      selectedGroup = "all";
      render();
    });
    groupFiltersContainer.appendChild(allBtn);

    // Кнопка для кожної групи
    courseConfig.groups.forEach(groupName => {
      const btn = document.createElement("button");
      btn.className = "pill-btn";
      btn.textContent = groupName;
      btn.addEventListener("click", () => {
        setActivePill(groupFiltersContainer, btn);
        selectedGroup = groupName;
        render();
      });
      groupFiltersContainer.appendChild(btn);
    });
  }

  // 2. Створюємо фільтри по днях
  if (dayFiltersContainer) {
    dayFiltersContainer.innerHTML = "";
    
    const allDayBtn = document.createElement("button");
    allDayBtn.className = "pill-btn active";
    allDayBtn.textContent = "Всі дні";
    allDayBtn.addEventListener("click", () => {
      setActivePill(dayFiltersContainer, allDayBtn);
      selectedDay = "all";
      render();
    });
    dayFiltersContainer.appendChild(allDayBtn);

    COLLEGE_DATA.days.forEach(day => {
      const btn = document.createElement("button");
      btn.className = "pill-btn";
      btn.textContent = day.short;
      btn.title = day.name;
      btn.addEventListener("click", () => {
        setActivePill(dayFiltersContainer, btn);
        selectedDay = day.id;
        render();
      });
      dayFiltersContainer.appendChild(btn);
    });
  }

  // 3. Пошуковий рядок
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      render();
    });
  }

  // Функція перемальовки
  function render() {
    renderCourseSchedule(container, courseConfig.groups, selectedGroup, selectedDay, searchQuery);
  }

  // Початковий рендер
  render();
}

/**
 * Рендеринг розкладу для списку груп
 */
function renderCourseSchedule(container, allCourseGroups, filterGroup, filterDay, searchQuery) {
  if (!container) return;

  const groupsToDisplay = filterGroup === "all" ? allCourseGroups : [filterGroup];
  let totalCardsCount = 0;
  let html = "";

  groupsToDisplay.forEach(groupName => {
    const groupSchedule = COLLEGE_DATA.schedule[groupName];
    if (!groupSchedule) return;

    let groupHtml = "";
    const daysToDisplay = filterDay === "all" ? COLLEGE_DATA.days : COLLEGE_DATA.days.filter(d => d.id === filterDay);

    daysToDisplay.forEach(day => {
      const lessons = groupSchedule[day.id] || [];
      
      // Фільтрація по пошуку
      const filteredLessons = lessons.filter(l => {
        if (!searchQuery) return true;
        const teacher = COLLEGE_DATA.teachers[l.teacherId];
        const teacherName = teacher ? teacher.name.toLowerCase() : "";
        const teacherShort = teacher ? teacher.shortName.toLowerCase() : "";
        return l.subject.toLowerCase().includes(searchQuery) ||
               l.room.toLowerCase().includes(searchQuery) ||
               teacherName.includes(searchQuery) ||
               teacherShort.includes(searchQuery);
      });

      if (filteredLessons.length > 0) {
        totalCardsCount += filteredLessons.length;
        groupHtml += `
          <div class="day-column">
            <div class="day-title">
              <span>📅 ${day.name}</span>
              <span class="day-count">${filteredLessons.length} пар</span>
            </div>
            <div class="lessons-list">
              ${filteredLessons.map(lesson => renderLessonCard(lesson, groupName)).join("")}
            </div>
          </div>
        `;
      }
    });

    if (groupHtml) {
      html += `
        <div class="group-section">
          <div class="group-header">
            <h2>👥 Група ${groupName}</h2>
            <span class="group-course-tag">Розклад занять</span>
          </div>
          <div class="days-grid">
            ${groupHtml}
          </div>
        </div>
      `;
    }
  });

  if (totalCardsCount === 0) {
    html = `
      <div style="text-align: center; padding: 60px 20px; background: white; border-radius: 16px; border: 1px dashed var(--border-color);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-bottom: 6px;">Занять не знайдено</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Спробуйте змінити фільтр групи, дня або пошуковий запит.</p>
      </div>
    `;
  }

  container.innerHTML = html;
}

/**
 * Рендеринг окремої картки заняття
 * ВАЖЛИВО: Назва уроку є клікабельним гіперпосиланням на сторінку викладача!
 */
function renderLessonCard(lesson, groupName) {
  const teacher = COLLEGE_DATA.teachers[lesson.teacherId];
  const bell = COLLEGE_DATA.bells.find(b => b.number === lesson.pair);
  const timeStr = bell ? `${bell.start} - ${bell.end}` : "";

  // Типи пар для бейджів
  let typeClass = "lecture";
  if (lesson.type === "Практична") typeClass = "practice";
  else if (lesson.type === "Лабораторна") typeClass = "lab";
  else if (lesson.type === "Консультація") typeClass = "consultation";

  // Посилання на сторінку викладача з передачею id та предмета
  const teacherUrl = `teacher.html?id=${lesson.teacherId}&fromSubject=${encodeURIComponent(lesson.subject)}&fromGroup=${encodeURIComponent(groupName)}`;

  return `
    <div class="lesson-card ${typeClass}">
      <div class="lesson-top">
        <div class="pair-badge">
          <span>${lesson.pair} пара</span>
          <span class="pair-time">${timeStr}</span>
        </div>
        <span class="type-pill ${typeClass}">${lesson.type}</span>
      </div>

      <!-- ГІПЕРПОСИЛАННЯ НА УРОЦІ: ПЕРЕКИДАЄ НА СТОРІНКУ ВИКЛАДАЧА -->
      <a href="${teacherUrl}" class="lesson-subject-link" title="Натисніть, щоб побачити профіль та розклад викладача цього уроку">
        ${lesson.subject}
      </a>

      <div class="lesson-bottom">
        <a href="${teacherUrl}" class="teacher-link" title="Переглянути викладача">
          ${teacher ? teacher.avatar : "👨‍🏫"} ${teacher ? teacher.shortName : "Викладач"}
        </a>
        <span class="room-badge">
          📍 ${lesson.room}
        </span>
      </div>
    </div>
  `;
}

/**
 * Ініціалізація сторінки викладача (teacher.html)
 */
function initTeacherPage() {
  const params = new URLSearchParams(window.location.search);
  let teacherId = params.get("id");
  const fromSubject = params.get("fromSubject");

  // Якщо id не вказано в параметрах, беремо першого викладача за замовчуванням
  if (!teacherId || !COLLEGE_DATA.teachers[teacherId]) {
    teacherId = Object.keys(COLLEGE_DATA.teachers)[0];
  }

  const teacher = COLLEGE_DATA.teachers[teacherId];
  if (!teacher) return;

  // Заповнюємо дані профілю
  const avatarEl = document.getElementById("teacher-avatar");
  const nameEl = document.getElementById("teacher-name");
  const titleEl = document.getElementById("teacher-title");
  const deptEl = document.getElementById("teacher-dept");
  const emailEl = document.getElementById("teacher-email");
  const phoneEl = document.getElementById("teacher-phone");
  const roomEl = document.getElementById("teacher-room");
  const consultEl = document.getElementById("teacher-consultations");
  const bioEl = document.getElementById("teacher-bio");
  const subjectsEl = document.getElementById("teacher-subjects");
  const teacherSelect = document.getElementById("teacher-selector");

  if (avatarEl) avatarEl.textContent = teacher.avatar;
  if (nameEl) nameEl.textContent = teacher.name;
  if (titleEl) titleEl.textContent = teacher.title;
  if (deptEl) deptEl.textContent = teacher.department;
  if (emailEl) emailEl.innerHTML = `<a href="mailto:${teacher.email}">${teacher.email}</a>`;
  if (phoneEl) phoneEl.innerHTML = `<a href="tel:${teacher.phone}">${teacher.phone}</a>`;
  if (roomEl) roomEl.textContent = teacher.room;
  if (consultEl) consultEl.textContent = teacher.consultations;
  if (bioEl) bioEl.textContent = teacher.bio;

  if (subjectsEl) {
    subjectsEl.innerHTML = teacher.subjects.map(s => {
      const isHighlighted = fromSubject && s.toLowerCase().includes(fromSubject.toLowerCase());
      const highlightStyle = isHighlighted ? 'style="background: #2563eb; color: white; border-color: #1d4ed8; box-shadow: 0 2px 8px rgba(37,99,235,0.3);"' : '';
      return `<span class="subject-badge" ${highlightStyle}>📖 ${s} ${isHighlighted ? '✓ (обраний урок)' : ''}</span>`;
    }).join("");
  }

  // Селектор швидкого вибору іншого викладача
  if (teacherSelect) {
    teacherSelect.innerHTML = Object.values(COLLEGE_DATA.teachers).map(t => `
      <option value="${t.id}" ${t.id === teacherId ? "selected" : ""}>
        ${t.name} (${t.subjects[0]})
      </option>
    `).join("");

    teacherSelect.addEventListener("change", (e) => {
      window.location.href = `teacher.html?id=${e.target.value}`;
    });
  }

  // Будуємо та відображаємо персональний розклад викладача по всіх групах!
  renderTeacherPersonalSchedule(teacherId);
}

/**
 * Будує персональний розклад викладача
 */
function renderTeacherPersonalSchedule(teacherId) {
  const container = document.getElementById("teacher-schedule-container");
  if (!container) return;

  const teacherScheduleByDay = {};
  COLLEGE_DATA.days.forEach(d => {
    teacherScheduleByDay[d.id] = [];
  });

  // Проходимо по всіх групах і збираємо уроки цього викладача
  Object.keys(COLLEGE_DATA.schedule).forEach(groupName => {
    const groupSched = COLLEGE_DATA.schedule[groupName];
    COLLEGE_DATA.days.forEach(day => {
      const dayLessons = groupSched[day.id] || [];
      dayLessons.forEach(lesson => {
        if (lesson.teacherId === teacherId) {
          teacherScheduleByDay[day.id].push({
            ...lesson,
            group: groupName
          });
        }
      });
    });
  });

  // Сортуємо уроки в кожен день за номером пари
  COLLEGE_DATA.days.forEach(d => {
    teacherScheduleByDay[d.id].sort((a, b) => a.pair - b.pair);
  });

  let daysHtml = "";
  COLLEGE_DATA.days.forEach(day => {
    const lessons = teacherScheduleByDay[day.id];
    daysHtml += `
      <div class="day-column">
        <div class="day-title">
          <span>📅 ${day.name}</span>
          <span class="day-count">${lessons.length} пар</span>
        </div>
        <div class="lessons-list">
          ${lessons.length === 0 ? `
            <div style="text-align: center; padding: 24px 10px; color: var(--text-light); font-size: 0.875rem;">
              Немає занять цього дня
            </div>
          ` : lessons.map(l => {
            const bell = COLLEGE_DATA.bells.find(b => b.number === l.pair);
            const timeStr = bell ? `${bell.start} - ${bell.end}` : "";
            let typeClass = l.type === "Практична" ? "practice" : (l.type === "Лабораторна" ? "lab" : "lecture");

            return `
              <div class="lesson-card ${typeClass}">
                <div class="lesson-top">
                  <div class="pair-badge">
                    <span>${l.pair} пара</span>
                    <span class="pair-time">${timeStr}</span>
                  </div>
                  <span class="type-pill ${typeClass}">${l.type}</span>
                </div>
                <div style="font-weight: 700; color: #1e293b; margin-bottom: 6px; font-size: 0.95rem;">
                  ${l.subject}
                </div>
                <div class="lesson-bottom">
                  <span class="group-tag" style="background: var(--primary-light); color: var(--primary); font-weight: 700;">
                    👥 Група ${l.group}
                  </span>
                  <span class="room-badge">📍 ${l.room}</span>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="group-section" style="margin-top: 24px;">
      <div class="group-header">
        <h2>📅 Повний тижневий розклад викладача</h2>
        <span class="group-course-tag">Усі курси та групи</span>
      </div>
      <div class="days-grid">
        ${daysHtml}
      </div>
    </div>
  `;
}

/**
 * Ініціалізація каталогу викладачів (teachers.html)
 */
function initTeachersListPage() {
  const container = document.getElementById("teachers-grid");
  const searchInput = document.getElementById("teachers-search");

  function render(searchQuery = "") {
    const teachers = Object.values(COLLEGE_DATA.teachers).filter(t => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return t.name.toLowerCase().includes(q) ||
             t.department.toLowerCase().includes(q) ||
             t.subjects.some(s => s.toLowerCase().includes(q));
    });

    if (teachers.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: white; border-radius: 16px;">
          Викладачів не знайдено за вашим запитом.
        </div>
      `;
      return;
    }

    container.innerHTML = teachers.map(t => `
      <div class="teacher-card">
        <div class="teacher-card-top">
          <div class="teacher-card-avatar">${t.avatar}</div>
          <div>
            <h3 class="teacher-card-name">${t.name}</h3>
            <p class="teacher-card-title">${t.title}</p>
          </div>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
          🏢 ${t.department}
        </div>
        <div style="font-size: 0.85rem; color: var(--text-main); margin-bottom: 14px; flex-grow: 1;">
          <strong>Предмети:</strong>
          <div style="margin-top: 6px; display: flex; flex-wrap: wrap; gap: 4px;">
            ${t.subjects.map(s => `<span class="group-tag" style="font-size: 0.75rem;">${s}</span>`).join("")}
          </div>
        </div>
        <div style="display: flex; gap: 8px; margin-top: auto; padding-top: 14px; border-top: 1px solid var(--border-color);">
          <a href="teacher.html?id=${t.id}" class="btn btn-primary" style="flex: 1; justify-content: center; font-size: 0.85rem; padding: 8px 12px;">
            Профіль та розклад →
          </a>
        </div>
      </div>
    `).join("");
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      render(e.target.value.trim());
    });
  }

  render();
}

/**
 * Ініціалізація таблиці розкладу дзвінків (bells.html)
 */
function initBellsPage() {
  const container = document.getElementById("bells-table-body");
  if (!container) return;

  container.innerHTML = COLLEGE_DATA.bells.map(bell => `
    <tr>
      <td>
        <span class="pair-number-circle">${bell.number}</span>
      </td>
      <td><strong>${bell.number} пара</strong></td>
      <td style="font-family: monospace; font-size: 1rem; font-weight: 600;">${bell.start} — ${bell.end}</td>
      <td>
        ${bell.breakAfter ? `<span class="group-tag" style="background: #eef2ff; color: #4338ca;">${bell.breakAfter}</span>` : '<span style="color: var(--text-light);">—</span>'}
      </td>
    </tr>
  `).join("");
}

/**
 * Допоміжна функція перемикання активного класу для кнопок-пігулок
 */
function setActivePill(parentEl, activeBtn) {
  const buttons = parentEl.querySelectorAll(".pill-btn");
  buttons.forEach(b => b.classList.remove("active"));
  activeBtn.classList.add("active");
}
