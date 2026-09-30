/**
 * ОФІЦІЙНА БАЗА ДАНИХ РОЗКЛАДУ МППК
 * Мукачівський Професійний Політехнічний Коледж
 * Розклад складено точно за наданим документом розкладу
 */

const COLLEGE_DATA = {
  college: {
    name: "Мукачівський Професійний Політехнічний Коледж",
    shortName: "МППК",
    logo: "logo.svg",
    year: "2026/2027 навчальний рік"
  },

  // Графік уроків / пар (1-8 уроки)
  bells: [
    { number: 1, start: "08:30", end: "09:15", breakAfter: "10 хв" },
    { number: 2, start: "09:25", end: "10:10", breakAfter: "10 хв" },
    { number: 3, start: "10:20", end: "11:05", breakAfter: "20 хв (Велика перерва)" },
    { number: 4, start: "11:25", end: "12:10", breakAfter: "10 хв" },
    { number: 5, start: "12:20", end: "13:05", breakAfter: "10 хв" },
    { number: 6, start: "13:15", end: "14:00", breakAfter: "10 хв" },
    { number: 7, start: "14:10", end: "14:55", breakAfter: "10 хв" },
    { number: 8, start: "15:05", end: "15:50", breakAfter: "" }
  ],

  // Список курсів та ВСІХ реальних груп
  courses: [
    {
      id: 1,
      title: "1 Курс",
      description: "Групи першого курсу (починаються на 1)",
      prefix: "КР-1",
      page: "course1.html",
      groups: ["КР-10", "КР-11", "КР-12", "КР-13", "КР-14", "КР-15", "КР-16", "КР-17", "КР-18", "КР-19"]
    },
    {
      id: 2,
      title: "2 Курс",
      description: "Групи другого курсу (починаються на 2)",
      prefix: "КР-2",
      page: "course2.html",
      groups: ["КР-21", "КР-22", "КР-23", "КР-24", "КР-25", "КР-27"]
    },
    {
      id: 3,
      title: "3 Курс",
      description: "Групи третього курсу (починаються на 3)",
      prefix: "КР-3",
      page: "course3.html",
      groups: ["КР-31", "КР-32", "КР-33", "КР-34", "КР-35", "КР-36", "КР-37"]
    },
    {
      id: "t",
      title: "Відділення Т",
      description: "Технологічні та спеціальні групи",
      prefix: "Т-",
      page: "course-t.html",
      groups: ["Т-1"]
    }
  ],

  // Викладачі (пробні та профільні педагоги коледжу МППК)
  teachers: {
    "petrenko": {
      id: "petrenko",
      name: "Петренко Петро Петрович",
      shortName: "Петренко П. П.",
      title: "Викладач вищої категорії, методист",
      department: "Циклова комісія математичних дисциплін МППК",
      avatar: "👨‍🏫",
      email: "petrenko.p@mppk.edu.ua",
      phone: "+380 (3131) 2-15-40",
      room: "Аудиторія 25 / 27 / 38",
      subjects: ["Математика", "Алгебра і геометрія"],
      consultations: "Вівторок: 14:00 - 15:30",
      bio: "Викладає математику для всіх курсів коледжу."
    },
    "shevchenko": {
      id: "shevchenko",
      name: "Шевченко Олена Іванівна",
      shortName: "Шевченко О. І.",
      title: "Викладач вищої категорії",
      department: "Циклова комісія гуманітарних дисциплін МППК",
      avatar: "👩‍🏫",
      email: "shevchenko.o@mppk.edu.ua",
      phone: "+380 (3131) 2-11-05",
      room: "Аудиторія 31 / 33 / 34",
      subjects: ["Українська мова", "Українська література", "Ділова українська мова"],
      consultations: "Середа: 13:45 - 15:00",
      bio: "Керівник літературного гуртка МППК, викладач філологічних дисциплін."
    },
    "kovalchuk": {
      id: "kovalchuk",
      name: "Ковальчук Сергій Миколайович",
      shortName: "Ковальчук С. М.",
      title: "Спеціаліст вищої категорії, інженер-програміст",
      department: "Циклова комісія комп'ютерної інженерії та програмування МППК",
      avatar: "👨‍💻",
      email: "kovalchuk.s@mppk.edu.ua",
      phone: "+380 (3131) 2-18-22",
      room: "Комп'ютерний клас 40 / 23 / 11",
      subjects: ["Інформатика", "Інформаційні технології", "Web-дизайн", "Комп'ютерна графіка", "ТОІ", "Основи програмування", "Комп'ютерна верстка", "Опер. системи", "Засоби КІС"],
      consultations: "Понеділок: 15:30 - 17:00",
      bio: "Викладає фахові ІТ-дисципліни, веб-розробку, комп'ютерну графіку та обслуговування ПК."
    },
    "tkachenko": {
      id: "tkachenko",
      name: "Ткаченко Дмитро Володимирович",
      shortName: "Ткаченко Д. В.",
      title: "Викладач електротехнічних дисциплін",
      department: "Циклова комісія електроніки та електротехніки МППК",
      avatar: "👨‍🔬",
      email: "tkachenko.d@mppk.edu.ua",
      phone: "+380 (3131) 2-14-77",
      room: "Кабінет 24 / 35 / 36 / 37",
      subjects: ["Фізика та астрономія", "Електротехніка", "Радіоелектроніка", "Ел.радіовимір", "Технологія РТА", "Технологія ЛОМ"],
      consultations: "П'ятниця: 12:00 - 13:30",
      bio: "Керівник лабораторії схемотехніки, радіоелектроніки та вимірювальних систем."
    },
    "savchenko": {
      id: "savchenko",
      name: "Савченко Ірина Борисівна",
      shortName: "Савченко І. Б.",
      title: "Викладач природничих дисциплін",
      department: "Циклова комісія природничих наук МППК",
      avatar: "👩‍🔬",
      email: "savchenko.i@mppk.edu.ua",
      phone: "+380 (3131) 2-19-55",
      room: "Кабінет 39 / 37 / 27 / 22",
      subjects: ["Хімія", "Біологія і екологія", "Основи мед.знань"],
      consultations: "Четвер: 14:00 - 15:30",
      bio: "Викладач хімії та екології, керівник екологічних проектів МППК."
    },
    "moroz": {
      id: "moroz",
      name: "Мороз Наталія Василівна",
      shortName: "Мороз Н. В.",
      title: "Викладач суспільних дисциплін",
      department: "Циклова комісія суспільно-гуманітарних дисциплін МППК",
      avatar: "👩‍💼",
      email: "moroz.n@mppk.edu.ua",
      phone: "+380 (3131) 2-12-33",
      room: "Аудиторія 32 / 41 / 22",
      subjects: ["Історія України", "Всесвітня історія", "Громадянська освіта", "Географія"],
      consultations: "Вівторок: 15:00 - 16:30",
      bio: "Викладач історії, географії та громадянської освіти."
    },
    "melnyk": {
      id: "melnyk",
      name: "Мельник Тетяна Олексіївна",
      shortName: "Мельник Т. О.",
      title: "Викладач іноземних мов",
      department: "Циклова комісія іноземних мов МППК",
      avatar: "👩‍🏫",
      email: "melnyk.t@mppk.edu.ua",
      phone: "+380 (3131) 2-30-18",
      room: "Аудиторія 42 / 43 / 22",
      subjects: ["Іноземна мова", "Зарубіжна література"],
      consultations: "Четвер: 14:00 - 15:30",
      bio: "Викладає англійську мову та зарубіжну літературу для всіх спеціальностей."
    },
    "lysenko": {
      id: "lysenko",
      name: "Лисенко Віктор Анатолійович",
      shortName: "Лисенко В. А.",
      title: "Викладач спецтехнології та креслення",
      department: "Циклова комісія машинобудування та технологій МППК",
      avatar: "👨‍🔧",
      email: "lysenko.v@mppk.edu.ua",
      phone: "+380 (3131) 2-16-92",
      room: "Аудиторія 12 / 21 / 35 / 38",
      subjects: ["Спецтехнологія", "Матеріалознавство", "Читання креслень", "Допуски і технічні вимірювання", "Технологія верстатних робіт", "Технології"],
      consultations: "Понеділок: 14:00 - 15:30",
      bio: "Провідний фахівець зі спецтехнології, креслення та матеріалознавства."
    },
    "kovalenko": {
      id: "kovalenko",
      name: "Коваленко Оксана Михайлівна",
      shortName: "Коваленко О. М.",
      title: "Викладач економічних дисциплін",
      department: "Циклова комісія економіки та обліку МППК",
      avatar: "👩‍💼",
      email: "kovalenko.o@mppk.edu.ua",
      phone: "+380 (3131) 2-17-45",
      room: "Аудиторія 34 / 11 / 23",
      subjects: ["Ринкова економіка", "Економіка підприємств", "Бухгалтерський облік", "Економічний аналіз", "Основи маркетингу", "Організаційна техніка"],
      consultations: "Середа: 14:30 - 16:00",
      bio: "Викладає бухгалтерський облік, економіку та маркетинг."
    },
    "boiko": {
      id: "boiko",
      name: "Бойко Володимир Сергійович",
      shortName: "Бойко В. С.",
      title: "Викладач військової та правової підготовки",
      department: "Циклова комісія захисту та безпеки життєдіяльності МППК",
      avatar: "👮‍♂️",
      email: "boiko.v@mppk.edu.ua",
      phone: "+380 (3131) 2-22-10",
      room: "Кабінет 13 / 27 / 37",
      subjects: ["Захист України", "Охорона праці", "ПДР", "Основи трудового права"],
      consultations: "Вівторок: 13:00 - 14:30",
      bio: "Керівник курсу 'Захист України', інструктор з охорони праці та ПДР."
    },
    "hryhorenko": {
      id: "hryhorenko",
      name: "Григоренко Максим Павлович",
      shortName: "Григоренко М. П.",
      title: "Керівник фізичного виховання",
      department: "Кафедра фізвиховання МППК",
      avatar: "🏃‍♂️",
      email: "hryhorenko.m@mppk.edu.ua",
      phone: "+380 (3131) 2-25-80",
      room: "Спортивний комплекс МППК",
      subjects: ["Фізична культура", "Фізкультура"],
      consultations: "Щодня у спортзалі",
      bio: "Головний тренер та викладач фізичної культури МППК."
    },
    "master": {
      id: "master",
      name: "Майстерня виробничого навчання",
      shortName: "Майстри виробн. навч.",
      title: "Майстри виробничого навчання МППК",
      department: "Навчально-виробничі майстерні МППК",
      avatar: "🛠️",
      email: "practice@mppk.edu.ua",
      phone: "+380 (3131) 2-00-11",
      room: "Виробничі лабораторії та майстерні",
      subjects: ["Виробниче навчання", "Виробнича практика"],
      consultations: "Згідно з графіком практики",
      bio: "Практична підготовка студентів на базі навчальних майстерень коледжу та партнерських підприємств."
    }
  },

  days: [
    { id: "mon", name: "Понеділок", short: "Пн" },
    { id: "tue", name: "Вівторок", short: "Вт" },
    { id: "wed", name: "Середа", short: "Ср" },
    { id: "thu", name: "Четвер", short: "Чт" },
    { id: "fri", name: "П'ятниця", short: "Пт" }
  ],

  // 100% ТОЧНИЙ РОЗКЛАД УСІХ ГРУП ІЗ ВАШОГО ДОКУМЕНТА
  schedule: {
    // ==========================================
    // 1 КУРС (КР-10 ... КР-19)
    // ==========================================
    "КР-10": {
      "mon": [
        { pair: 1, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 37", type: "Теорія" },
        { pair: 2, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 37", type: "Теорія" },
        { pair: 3, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 4, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 5, subject: "ПДР", teacherId: "boiko", room: "каб. 37", type: "Теорія" },
        { pair: 6, subject: "Радіоелектроніка", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" }
      ],
      "tue": [
        { pair: 1, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 2, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 3, subject: "Читання креслень", teacherId: "lysenko", room: "каб. 35", type: "Практика" },
        { pair: 4, subject: "Інформаційні технології", teacherId: "kovalchuk", room: "каб. 23", type: "Лабораторна" },
        { pair: 5, subject: "Технологія РТА", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 6, subject: "Технологія РТА", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 7, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" }
      ],
      "wed": [
        { pair: 1, subject: "Фізика та астрономія", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 2, subject: "Фізика та астрономія", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 3, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 4, subject: "Матеріалознавство", teacherId: "lysenko", room: "каб. 31", type: "Теорія" },
        { pair: 5, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 31", type: "Практика" },
        { pair: 6, subject: "Українська література", teacherId: "shevchenko", room: "каб. 25", type: "Теорія" },
        { pair: 7, subject: "Біологія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 8, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "thu": [
        { pair: 1, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 2, subject: "Технології", teacherId: "lysenko", room: "каб. 36", type: "Теорія" },
        { pair: 3, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 4, subject: "Охорона праці", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 5, subject: "Ел.радіо.вимір.", teacherId: "tkachenko", room: "каб. 35", type: "Практика" },
        { pair: 6, subject: "Всесвітня історія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 7, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" }
      ],
      "fri": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 5, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 6, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ]
    },

    "КР-11": {
      "mon": [
        { pair: 1, subject: "Ринкова економіка", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 2, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 3, subject: "Ел.радіовимір.", teacherId: "tkachenko", room: "каб. 35", type: "Практика" },
        { pair: 4, subject: "Читання креслень", teacherId: "lysenko", room: "каб. 35", type: "Практика" },
        { pair: 5, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" }
      ],
      "tue": [
        { pair: 1, subject: "Математика", teacherId: "petrenko", room: "каб. 27", type: "Теорія" },
        { pair: 2, subject: "Математика", teacherId: "petrenko", room: "каб. 27", type: "Практика" },
        { pair: 3, subject: "Географія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 4, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 5, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 6, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 7, subject: "Інформаційні технології", teacherId: "kovalchuk", room: "каб. 23", type: "Лабораторна" },
        { pair: 8, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" }
      ],
      "wed": [
        { pair: 1, subject: "Охорона праці", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 2, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 3, subject: "Фізика та астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 4, subject: "Фізика та астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 5, subject: "Біологія та екологія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 6, subject: "Біологія та екологія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 7, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 8, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" }
      ],
      "thu": [
        { pair: 1, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 2, subject: "Радіоелектроніка", teacherId: "tkachenko", room: "каб. 35", type: "Теорія" },
        { pair: 3, subject: "Основи трудового права", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 4, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" },
        { pair: 5, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 37", type: "Теорія" },
        { pair: 6, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 7, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 8, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" }
      ],
      "fri": [
        { pair: 1, subject: "Матеріалознавство", teacherId: "lysenko", room: "каб. 25", type: "Теорія" },
        { pair: 2, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 3, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 4, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 5, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 6, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 7, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" }
      ]
    },

    "КР-12": {
      "mon": [
        { pair: 1, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 2, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 3, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 4, subject: "Охорона праці", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 5, subject: "Матеріалознавство", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 6, subject: "Доп. і тех. вимірювання", teacherId: "lysenko", room: "каб. 21", type: "Практика" },
        { pair: 7, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 8, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" }
      ],
      "tue": [
        { pair: 1, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 2, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 3, subject: "Інформаційні технології", teacherId: "kovalchuk", room: "каб. 23", type: "Лабораторна" },
        { pair: 4, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 5, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Теорія" },
        { pair: 6, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" },
        { pair: 7, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" }
      ],
      "wed": [
        { pair: 1, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 2, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 3, subject: "Матеріалознавство", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 4, subject: "Матеріалознавство", teacherId: "lysenko", room: "каб. 21", type: "Практика" },
        { pair: 5, subject: "ПДР", teacherId: "boiko", room: "каб. 27", type: "Теорія" },
        { pair: 6, subject: "Географія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 7, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Допуски і технічні вимірювання", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 2, subject: "Допуски і технічні вимірювання", teacherId: "lysenko", room: "каб. 21", type: "Практика" },
        { pair: 3, subject: "Читання креслень", teacherId: "lysenko", room: "каб. 21", type: "Практика" },
        { pair: 4, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 5, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 6, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" },
        { pair: 7, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 8, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" }
      ],
      "fri": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 5, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 6, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ]
    },

    "КР-13": {
      "mon": [
        { pair: 1, subject: "Психол.діл.відн", teacherId: "moroz", room: "каб. 38", type: "Теорія" },
        { pair: 2, subject: "Бухгалтерський облік", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 3, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 4, subject: "Осн. док. забез.", teacherId: "kovalenko", room: "каб. 11", type: "Практика" },
        { pair: 5, subject: "Технології", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 6, subject: "Економіка підприємств", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 7, subject: "Основи мед.знань", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 8, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" }
      ],
      "tue": [
        { pair: 1, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 2, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 3, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 4, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 5, subject: "Інф.сист.і технол", teacherId: "kovalchuk", room: "каб. 23", type: "Лабораторна" },
        { pair: 6, subject: "Ділова українська мова", teacherId: "shevchenko", room: "каб. 23", type: "Практика" },
        { pair: 7, subject: "Бухгалтерський облік", teacherId: "kovalenko", room: "каб. 34", type: "Практика" },
        { pair: 8, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" }
      ],
      "wed": [
        { pair: 1, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 27", type: "Теорія" },
        { pair: 2, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 27", type: "Теорія" },
        { pair: 3, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 4, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 5, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 6, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" },
        { pair: 7, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 8, subject: "Охорона праці", teacherId: "boiko", room: "каб. 13", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Основи трудового права", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 2, subject: "Охорона праці", teacherId: "boiko", room: "каб. 22", type: "Теорія" },
        { pair: 3, subject: "Бухгалтерський облік", teacherId: "kovalenko", room: "каб. 34", type: "Практика" },
        { pair: 4, subject: "Осн. енергоефек.", teacherId: "boiko", room: "каб. 21", type: "Теорія" },
        { pair: 5, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 6, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" }
      ],
      "fri": [
        { pair: 1, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 2, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 3, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 4, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 5, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" },
        { pair: 6, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" }
      ]
    },

    "КР-14": {
      "mon": [
        { pair: 1, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 2, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 3, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 4, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 5, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 6, subject: "Технології", teacherId: "lysenko", room: "каб. 23", type: "Теорія" },
        { pair: 7, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" }
      ],
      "tue": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 5, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 6, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "wed": [
        { pair: 1, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 2, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 3, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 12", type: "Теорія" },
        { pair: 4, subject: "Читан.креслень", teacherId: "lysenko", room: "каб. 37", type: "Практика" },
        { pair: 5, subject: "Охорона праці", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 6, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 7, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 2, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 3, subject: "Ел.матер.знавст", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 4, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 5, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 6, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 7, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 8, subject: "Географія", teacherId: "moroz", room: "каб. 32", type: "Теорія" }
      ],
      "fri": [
        { pair: 1, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 2, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 31", type: "Практика" },
        { pair: 3, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 4, subject: "Ринкова економіка", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 5, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 6, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 37", type: "Теорія" }
      ]
    },

    "КР-15": {
      "mon": [
        { pair: 1, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 2, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 3, subject: "Технології", teacherId: "lysenko", room: "каб. 37", type: "Теорія" },
        { pair: 4, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 5, subject: "Охорона праці", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 6, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 7, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 8, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" }
      ],
      "tue": [
        { pair: 1, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 2, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 3, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 4, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 5, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 6, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 12", type: "Теорія" },
        { pair: 7, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 8, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" }
      ],
      "wed": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 5, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 6, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "thu": [
        { pair: 1, subject: "Чит.буд.креслен.", teacherId: "lysenko", room: "каб. 38", type: "Практика" },
        { pair: 2, subject: "Осн.матеріалозн", teacherId: "lysenko", room: "каб. 38", type: "Теорія" },
        { pair: 3, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 23", type: "Теорія" },
        { pair: 4, subject: "Географія", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 5, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 6, subject: "Ринкова економіка", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 7, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 34", type: "Практика" },
        { pair: 8, subject: "Українська література", teacherId: "shevchenko", room: "каб. 34", type: "Теорія" }
      ],
      "fri": [
        { pair: 1, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Теорія" },
        { pair: 2, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 3, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 4, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 5, subject: "Всесвітня історія", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 6, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" }
      ]
    },

    "КР-16": {
      "mon": [
        { pair: 1, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 2, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" },
        { pair: 3, subject: "Осн. роб на ПК", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 4, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 5, subject: "Електрорадіовимірювання", teacherId: "tkachenko", room: "каб. 35", type: "Практика" },
        { pair: 6, subject: "Електрорадіовимірювання", teacherId: "tkachenko", room: "каб. 35", type: "Практика" },
        { pair: 7, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 8, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 37", type: "Теорія" }
      ],
      "tue": [
        { pair: 1, subject: "ПДР", teacherId: "boiko", room: "каб. 41", type: "Теорія" },
        { pair: 2, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 3, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 4, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 5, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 6, subject: "Всесвітня історія", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 7, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" },
        { pair: 8, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" }
      ],
      "wed": [
        { pair: 1, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 2, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" },
        { pair: 3, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 4, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 5, subject: "Технологія ЛОМ", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 6, subject: "Технологія ЛОМ", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 22", type: "Теорія" },
        { pair: 2, subject: "Охорона праці", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 3, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 4, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 5, subject: "Інформаційні технології", teacherId: "kovalchuk", room: "каб. 25", type: "Лабораторна" },
        { pair: 6, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 7, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" }
      ],
      "fri": [
        { pair: 1, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 2, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 3, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 4, subject: "Читання креслень", teacherId: "lysenko", room: "каб. 36", type: "Практика" },
        { pair: 5, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" }
      ]
    },

    "КР-17": {
      "mon": [
        { pair: 1, subject: "Гарант. обслуговування", teacherId: "kovalchuk", room: "каб. 11", type: "Теорія" },
        { pair: 2, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 3, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 4, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 5, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 6, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 7, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" }
      ],
      "tue": [
        { pair: 1, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 2, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 3, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 4, subject: "Комп'ютерна графіка", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 5, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 6, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 7, subject: "Операційні системи", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 8, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "wed": [
        { pair: 1, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 2, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 3, subject: "Професійна етика", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 4, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 5, subject: "Засоби КІС", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 6, subject: "Географія", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 7, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 8, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 2, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" },
        { pair: 3, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Теорія" },
        { pair: 4, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 5, subject: "ТОІ", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 6, subject: "ТОІ", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 7, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" }
      ],
      "fri": [
        { pair: 1, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 22", type: "Теорія" },
        { pair: 2, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 22", type: "Теорія" },
        { pair: 3, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 4, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 5, subject: "Охорона праці", teacherId: "boiko", room: "каб. 31", type: "Теорія" }
      ]
    },

    "КР-18": {
      "mon": [
        { pair: 1, subject: "Осн.труд.закон.", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 2, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 3, subject: "Технологія монтажу ТС", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 4, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 5, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 6, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "tue": [
        { pair: 1, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 2, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" },
        { pair: 3, subject: "Технологія монтажу ТС", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 4, subject: "Технологія монтажу ТС", teacherId: "tkachenko", room: "каб. 36", type: "Практика" },
        { pair: 5, subject: "Матеріалознавство", teacherId: "lysenko", room: "каб. 35", type: "Теорія" }
      ],
      "wed": [
        { pair: 1, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" },
        { pair: 2, subject: "Тех.монт.ВЕДЖ", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 3, subject: "Технології", teacherId: "lysenko", room: "каб. 27", type: "Теорія" },
        { pair: 4, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 5, subject: "Охорона праці", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 6, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 7, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 34", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Тех.монт.ВЕДЖ", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 2, subject: "Осн. ІКУ", teacherId: "boiko", room: "каб. 27", type: "Теорія" },
        { pair: 3, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 4, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 5, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 6, subject: "Технологія монтажу ТС", teacherId: "tkachenko", room: "каб. 36", type: "Практика" },
        { pair: 7, subject: "Технологія монтажу ТС", teacherId: "tkachenko", room: "каб. 36", type: "Практика" },
        { pair: 8, subject: "Тех.креслення", teacherId: "lysenko", room: "каб. 37", type: "Практика" }
      ],
      "fri": [
        { pair: 1, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 2, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 3, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 4, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" },
        { pair: 5, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 6, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 7, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 8, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" }
      ]
    },

    "КР-19": {
      "mon": [
        { pair: 1, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 2, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" },
        { pair: 3, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" },
        { pair: 4, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" },
        { pair: 5, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 6, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 7, subject: "Операційні системи", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" }
      ],
      "tue": [
        { pair: 1, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 2, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 3, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 4, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 5, subject: "Комп'ютерна графіка", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 6, subject: "Комп'ютерна графіка", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 7, subject: "Географія", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 8, subject: "Охорона праці", teacherId: "boiko", room: "каб. 32", type: "Теорія" }
      ],
      "wed": [
        { pair: 1, subject: "ТОІ", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 2, subject: "ТОІ", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 3, subject: "Гарант. обслуговування", teacherId: "kovalchuk", room: "каб. 11", type: "Теорія" },
        { pair: 4, subject: "Професійна етика", teacherId: "shevchenko", room: "каб. 27", type: "Теорія" },
        { pair: 5, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 6, subject: "Засоби КІС", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 7, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 2, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 3, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 4, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 5, subject: "Захист України", teacherId: "boiko", room: "каб. 27", type: "Практика" },
        { pair: 6, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 7, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "fri": [
        { pair: 1, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" },
        { pair: 2, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 3, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 4, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 5, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 22", type: "Теорія" }
      ]
    },

    // ==========================================
    // 2 КУРС (КР-21 ... КР-27)
    // ==========================================
    "КР-21": {
      "mon": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 5, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 6, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "tue": [
        { pair: 1, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 2, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 3, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 4, subject: "Всесвітня історія", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 5, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 6, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 7, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 8, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "wed": [
        { pair: 1, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Теорія" },
        { pair: 2, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 3, subject: "Імп.та цифр.тех.", teacherId: "tkachenko", room: "каб. 35", type: "Лабораторна" },
        { pair: 4, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 5, subject: "Географія", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 6, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 31", type: "Теорія" },
        { pair: 7, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 8, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 2, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 3, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 4, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 5, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 6, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 7, subject: "Осн.радіоелектр", teacherId: "tkachenko", room: "каб. 35", type: "Теорія" },
        { pair: 8, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" }
      ],
      "fri": [
        { pair: 1, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 2, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 3, subject: "Технології", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 4, subject: "Технології", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 5, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 6, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" }
      ]
    },

    "КР-22": {
      "mon": [{ pair: 1, subject: "Виробнича практика", teacherId: "master", room: "База практики", type: "Практика" }],
      "tue": [{ pair: 1, subject: "Виробнича практика", teacherId: "master", room: "База практики", type: "Практика" }],
      "wed": [{ pair: 1, subject: "Виробнича практика", teacherId: "master", room: "База практики", type: "Практика" }],
      "thu": [{ pair: 1, subject: "Виробнича практика", teacherId: "master", room: "База практики", type: "Практика" }],
      "fri": [{ pair: 1, subject: "Виробнича практика", teacherId: "master", room: "База практики", type: "Практика" }]
    },

    "КР-23": {
      "mon": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "tue": [
        { pair: 1, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Теорія" },
        { pair: 2, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 3, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 4, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 5, subject: "Бухгалтерський облік", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 6, subject: "Бухгалтерський облік", teacherId: "kovalenko", room: "каб. 34", type: "Практика" },
        { pair: 7, subject: "Захист України (Осн. мед. знань)", teacherId: "savchenko", room: "каб. 38", type: "Практика" }
      ],
      "wed": [
        { pair: 1, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 31", type: "Теорія" },
        { pair: 2, subject: "Економіка підприємств", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 3, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 4, subject: "Всесвітня історія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 5, subject: "Географія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 6, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 7, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 8, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 27", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Технології", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 2, subject: "Технології", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 3, subject: "Інф.сист.бух.обл", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 4, subject: "Бухгалтерський облік", teacherId: "kovalenko", room: "каб. 34", type: "Практика" },
        { pair: 5, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 6, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 7, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 8, subject: "Основи мед.знань", teacherId: "savchenko", room: "каб. 31", type: "Теорія" }
      ],
      "fri": [
        { pair: 1, subject: "Економічний аналіз", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 2, subject: "Економічний аналіз", teacherId: "kovalenko", room: "каб. 34", type: "Практика" },
        { pair: 3, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 22", type: "Теорія" },
        { pair: 4, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 5, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 6, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" }
      ]
    },

    "КР-24": {
      "mon": [
        { pair: 1, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 2, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 3, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 4, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 5, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 6, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 7, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 12", type: "Теорія" }
      ],
      "tue": [
        { pair: 1, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 2, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" },
        { pair: 3, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 4, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 5, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 6, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 7, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 12", type: "Теорія" }
      ],
      "wed": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 5, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "thu": [
        { pair: 1, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 2, subject: "Географія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 3, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 4, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 5, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 34", type: "Теорія" },
        { pair: 6, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 7, subject: "Ел.матер.знав.", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 8, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" }
      ],
      "fri": [
        { pair: 1, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 2, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 3, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 4, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 5, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 12", type: "Теорія" },
        { pair: 6, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 12", type: "Теорія" },
        { pair: 7, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ]
    },

    "КР-25": {
      "mon": [
        { pair: 1, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 2, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 3, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 4, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" },
        { pair: 5, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 6, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 22", type: "Теорія" }
      ],
      "tue": [
        { pair: 1, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 2, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 3, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 4, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 5, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 6, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" },
        { pair: 7, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 8, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" }
      ],
      "wed": [
        { pair: 1, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Теорія" },
        { pair: 2, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" },
        { pair: 3, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 4, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 5, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 6, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 7, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 8, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 2, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 3, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 4, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 25", type: "Теорія" },
        { pair: 5, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 6, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 7, subject: "Географія", teacherId: "moroz", room: "каб. 41", type: "Теорія" }
      ],
      "fri": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 5, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ]
    },

    "КР-27": {
      "mon": [
        { pair: 1, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 2, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 3, subject: "Основи програмування", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 4, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 5, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" },
        { pair: 6, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 21", type: "Теорія" },
        { pair: 7, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 22", type: "Теорія" },
        { pair: 8, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 31", type: "Теорія" }
      ],
      "tue": [
        { pair: 1, subject: "Web-дизайн", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 2, subject: "Web-дизайн", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 3, subject: "ТОІ", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 4, subject: "Технології", teacherId: "kovalchuk", room: "каб. 11", type: "Теорія" },
        { pair: 5, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 6, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 21", type: "Теорія" },
        { pair: 7, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 8, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" }
      ],
      "wed": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "thu": [
        { pair: 1, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 2, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 3, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 4, subject: "Всесвітня історія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 5, subject: "Комп'ютерна верстка", teacherId: "kovalchuk", room: "каб. 23", type: "Лабораторна" },
        { pair: 6, subject: "Комп'ютерна верстка", teacherId: "kovalchuk", room: "каб. 23", type: "Лабораторна" },
        { pair: 7, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 8, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "fri": [
        { pair: 1, subject: "Web-дизайн", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 2, subject: "Географія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 3, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 4, subject: "Діагностика КІС", teacherId: "kovalchuk", room: "каб. 22", type: "Лабораторна" },
        { pair: 5, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 6, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" }
      ]
    },

    // ==========================================
    // 3 КУРС (КР-31 ... КР-37)
    // ==========================================
    "КР-31": {
      "mon": [
        { pair: 1, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 2, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 3, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 31", type: "Практика" },
        { pair: 4, subject: "Українська література", teacherId: "shevchenko", room: "каб. 31", type: "Теорія" },
        { pair: 5, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 6, subject: "Всесвітня історія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 7, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 8, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "tue": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "wed": [
        { pair: 1, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 2, subject: "Технології", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 3, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 4, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 5, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 6, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 27", type: "Теорія" },
        { pair: 7, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 27", type: "Теорія" },
        { pair: 8, subject: "Ел.радіо.вимір.", teacherId: "tkachenko", room: "каб. 35", type: "Практика" }
      ],
      "thu": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "fri": [
        { pair: 1, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 2, subject: "Імп.та цифр.техн", teacherId: "tkachenko", room: "каб. 35", type: "Лабораторна" },
        { pair: 3, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 4, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 5, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 33", type: "Теорія" },
        { pair: 6, subject: "Основи радіоелектроніка", teacherId: "tkachenko", room: "каб. 35", type: "Теорія" },
        { pair: 7, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ]
    },

    "КР-32": {
      "mon": [
        { pair: 1, subject: "Технологія верстатних робіт", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 2, subject: "Технологія верстатних робіт", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 3, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 4, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 5, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 6, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 7, subject: "Технологія верстатних робіт", teacherId: "lysenko", room: "каб. 21", type: "Практика" },
        { pair: 8, subject: "Технологія верстатних робіт", teacherId: "lysenko", room: "каб. 21", type: "Практика" }
      ],
      "tue": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "wed": [
        { pair: 1, subject: "Технологія верстатних робіт", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 2, subject: "Технологія верстатних робіт", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 3, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 4, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 5, subject: "Українська література", teacherId: "shevchenko", room: "каб. 33", type: "Теорія" },
        { pair: 6, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 7, subject: "Технологія верстатних робіт", teacherId: "lysenko", room: "каб. 21", type: "Практика" },
        { pair: 8, subject: "Технологія верстатних робіт", teacherId: "lysenko", room: "каб. 21", type: "Практика" }
      ],
      "thu": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "fri": [
        { pair: 1, subject: "Технологія верстатних робіт", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 2, subject: "Технологія верстатних робіт", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 3, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 4, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 5, subject: "Технології", teacherId: "lysenko", room: "каб. 21", type: "Теорія" },
        { pair: 6, subject: "Техн.верст.робіт", teacherId: "lysenko", room: "каб. 21", type: "Практика" },
        { pair: 7, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 8, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" }
      ]
    },

    "КР-33": {
      "mon": [
        { pair: 1, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 2, subject: "Географія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 3, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 22", type: "Теорія" },
        { pair: 4, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 5, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 6, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 7, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 31", type: "Теорія" },
        { pair: 8, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" }
      ],
      "tue": [
        { pair: 1, subject: "Обсл.відвідувачів.", teacherId: "kovalenko", room: "каб. 11", type: "Теорія" },
        { pair: 2, subject: "ІК забез.обслуг.", teacherId: "kovalchuk", room: "каб. 11", type: "Практика" },
        { pair: 3, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 4, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 5, subject: "Захист України (Осн. мед. знань)", teacherId: "savchenko", room: "каб. 27", type: "Практика" },
        { pair: 6, subject: "Захист України (Осн. мед. знань)", teacherId: "savchenko", room: "каб. 27", type: "Практика" },
        { pair: 7, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 22", type: "Практика" },
        { pair: 8, subject: "Українська література", teacherId: "shevchenko", room: "каб. 22", type: "Теорія" }
      ],
      "wed": [
        { pair: 1, subject: "Всесвітня історія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 2, subject: "Всесвітня історія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 3, subject: "Технології", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 4, subject: "Основи маркетингу", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 5, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 6, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 7, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 31", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "fri": [
        { pair: 1, subject: "Інформаційні технології", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 2, subject: "Організаційна техніка", teacherId: "kovalenko", room: "каб. 23", type: "Теорія" },
        { pair: 3, subject: "Фахова термінологія", teacherId: "shevchenko", room: "каб. 23", type: "Теорія" },
        { pair: 4, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 31", type: "Теорія" },
        { pair: 5, subject: "Докум.забезпеч.", teacherId: "kovalenko", room: "каб. 11", type: "Практика" },
        { pair: 6, subject: "План.орган.техн.", teacherId: "kovalenko", room: "каб. 11", type: "Теорія" },
        { pair: 7, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" }
      ]
    },

    "КР-34": {
      "mon": [{ pair: 1, subject: "Виробнича практика", teacherId: "master", room: "База практики", type: "Практика" }],
      "tue": [{ pair: 1, subject: "Виробнича практика", teacherId: "master", room: "База практики", type: "Практика" }],
      "wed": [{ pair: 1, subject: "Виробнича практика", teacherId: "master", room: "База практики", type: "Практика" }],
      "thu": [{ pair: 1, subject: "Виробнича практика", teacherId: "master", room: "База практики", type: "Практика" }],
      "fri": [{ pair: 1, subject: "Виробнича практика", teacherId: "master", room: "База практики", type: "Практика" }]
    },

    "КР-35": {
      "mon": [
        { pair: 1, subject: "Українська література", teacherId: "shevchenko", room: "каб. 25", type: "Теорія" },
        { pair: 2, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 22", type: "Теорія" },
        { pair: 3, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 4, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 5, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" },
        { pair: 6, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 7, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 8, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "tue": [
        { pair: 1, subject: "Українська література", teacherId: "shevchenko", room: "каб. 34", type: "Теорія" },
        { pair: 2, subject: "Українська література", teacherId: "shevchenko", room: "каб. 34", type: "Теорія" },
        { pair: 3, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 4, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 5, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 6, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" }
      ],
      "wed": [
        { pair: 1, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 2, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" },
        { pair: 3, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Теорія" },
        { pair: 4, subject: "Математика", teacherId: "petrenko", room: "каб. 38", type: "Практика" },
        { pair: 5, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 6, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 7, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 8, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "thu": [
        { pair: 1, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 2, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 3, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 4, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 22", type: "Теорія" },
        { pair: 5, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 6, subject: "Географія", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 7, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 38", type: "Теорія" },
        { pair: 8, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 38", type: "Теорія" }
      ],
      "fri": [
        { pair: 1, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 2, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 12", type: "Теорія" },
        { pair: 3, subject: "Технології", teacherId: "lysenko", room: "каб. 41", type: "Теорія" },
        { pair: 4, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" }
      ]
    },

    "КР-36": {
      "mon": [
        { pair: 1, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 2, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 3, subject: "Географія", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 4, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 5, subject: "Радіоелектроніка", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 6, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 7, subject: "Захист України", teacherId: "boiko", room: "каб. 13", type: "Практика" },
        { pair: 8, subject: "Електрорадіовим", teacherId: "tkachenko", room: "каб. 36", type: "Практика" }
      ],
      "tue": [
        { pair: 1, subject: "Технологія ЛОМ", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 2, subject: "Технологія ЛОМ", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 3, subject: "Громадянська освіта", teacherId: "moroz", room: "каб. 27", type: "Теорія" },
        { pair: 4, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 5, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 6, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 7, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "wed": [
        { pair: 1, subject: "Історія України", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 2, subject: "Всесвітня історія", teacherId: "moroz", room: "каб. 32", type: "Теорія" },
        { pair: 3, subject: "Технологія обсл. і ремонту ЛОМ", teacherId: "tkachenko", room: "каб. 36", type: "Практика" },
        { pair: 4, subject: "Технологія обсл. і ремонту ЛОМ", teacherId: "tkachenko", room: "каб. 36", type: "Практика" },
        { pair: 5, subject: "Зарубіжна література", teacherId: "melnyk", room: "каб. 23", type: "Теорія" },
        { pair: 6, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 7, subject: "Українська література", teacherId: "shevchenko", room: "каб. 38", type: "Теорія" },
        { pair: 8, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 33", type: "Практика" }
      ],
      "thu": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "fri": [
        { pair: 1, subject: "Технології", teacherId: "lysenko", room: "каб. 36", type: "Теорія" },
        { pair: 2, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42/43", type: "Практика" },
        { pair: 3, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" },
        { pair: 4, subject: "Математика", teacherId: "petrenko", room: "каб. 25", type: "Практика" },
        { pair: 5, subject: "Основи програмування", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 6, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ]
    },

    "КР-37": {
      "mon": [
        { pair: 1, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 31", type: "Практика" },
        { pair: 2, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 31", type: "Практика" },
        { pair: 3, subject: "Технологія ЛОМ", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 4, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 5, subject: "Фізика і астрономія", teacherId: "tkachenko", room: "каб. 24", type: "Теорія" },
        { pair: 6, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 37", type: "Теорія" },
        { pair: 7, subject: "Географія", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 8, subject: "Фізкультура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ],
      "tue": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "wed": [
        { pair: 1, subject: "Українська мова", teacherId: "shevchenko", room: "каб. 37", type: "Практика" },
        { pair: 2, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" },
        { pair: 3, subject: "Хімія", teacherId: "savchenko", room: "каб. 39", type: "Теорія" },
        { pair: 4, subject: "Математика", teacherId: "petrenko", room: "каб. 39", type: "Практика" },
        { pair: 5, subject: "Захист України", teacherId: "boiko", room: "каб. 21", type: "Практика" },
        { pair: 6, subject: "Українська література", teacherId: "shevchenko", room: "каб. 22", type: "Теорія" },
        { pair: 7, subject: "Українська література", teacherId: "shevchenko", room: "каб. 22", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Радіоелектроніка", teacherId: "tkachenko", room: "каб. 36", type: "Теорія" },
        { pair: 2, subject: "Біологія і екологія", teacherId: "savchenko", room: "каб. 37", type: "Теорія" },
        { pair: 3, subject: "Ел.радіовимір", teacherId: "tkachenko", room: "каб. 36", type: "Практика" },
        { pair: 4, subject: "Захист України", teacherId: "boiko", room: "каб. 36", type: "Практика" },
        { pair: 5, subject: "Історія України", teacherId: "moroz", room: "каб. 41", type: "Теорія" },
        { pair: 6, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 42", type: "Практика" },
        { pair: 7, subject: "Іноземна мова", teacherId: "melnyk", room: "каб. 43", type: "Практика" },
        { pair: 8, subject: "Інформатика", teacherId: "kovalchuk", room: "каб. 40", type: "Лабораторна" }
      ],
      "fri": [
        { pair: 1, subject: "Українська література", teacherId: "shevchenko", room: "каб. 37", type: "Теорія" },
        { pair: 2, subject: "Читання креслень", teacherId: "lysenko", room: "каб. 37", type: "Практика" },
        { pair: 3, subject: "Технології", teacherId: "lysenko", room: "каб. 11", type: "Теорія" },
        { pair: 4, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 5, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" }
      ]
    },

    // ==========================================
    // ВІДДІЛЕННЯ Т (Т-1)
    // ==========================================
    "Т-1": {
      "mon": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "tue": [
        { pair: 1, subject: "Електрорадіовимірювання", teacherId: "tkachenko", room: "каб. 35", type: "Практика" },
        { pair: 2, subject: "Електрорадіовимірювання", teacherId: "tkachenko", room: "каб. 35", type: "Практика" },
        { pair: 3, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 13", type: "Теорія" },
        { pair: 4, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 35", type: "Теорія" },
        { pair: 5, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 6, subject: "Фізична культура", teacherId: "hryhorenko", room: "спортзал", type: "Практика" },
        { pair: 7, subject: "Охорона праці", teacherId: "boiko", room: "каб. 35", type: "Теорія" },
        { pair: 8, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 35", type: "Теорія" }
      ],
      "wed": [
        { pair: 1, subject: "Ринкова економіка", teacherId: "kovalenko", room: "каб. 34", type: "Теорія" },
        { pair: 2, subject: "Електротехніка", teacherId: "tkachenko", room: "каб. 37", type: "Теорія" },
        { pair: 3, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 13", type: "Теорія" },
        { pair: 4, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 13", type: "Теорія" },
        { pair: 5, subject: "Читання креслень", teacherId: "lysenko", room: "каб. 35", type: "Практика" },
        { pair: 6, subject: "Читання креслень", teacherId: "lysenko", room: "каб. 35", type: "Практика" },
        { pair: 7, subject: "Основи трудового законодавства", teacherId: "boiko", room: "каб. 13", type: "Теорія" },
        { pair: 8, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 38", type: "Теорія" }
      ],
      "thu": [
        { pair: 1, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 2, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 3, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" },
        { pair: 4, subject: "Виробниче навчання", teacherId: "master", room: "майстерня", type: "Виробниче" }
      ],
      "fri": [
        { pair: 1, subject: "Читання креслень", teacherId: "lysenko", room: "каб. 35", type: "Практика" },
        { pair: 2, subject: "Інформаційні технології", teacherId: "kovalchuk", room: "каб. 11", type: "Лабораторна" },
        { pair: 3, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 37", type: "Теорія" },
        { pair: 4, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 37", type: "Теорія" },
        { pair: 5, subject: "Матеріалознавство", teacherId: "lysenko", room: "каб. 34", type: "Теорія" },
        { pair: 6, subject: "Спецтехнологія", teacherId: "lysenko", room: "каб. 34", type: "Теорія" },
        { pair: 7, subject: "Основи трудового законодавства", teacherId: "boiko", room: "каб. 13", type: "Теорія" }
      ]
    }
  }
};

if (typeof window !== "undefined") {
  window.COLLEGE_DATA = COLLEGE_DATA;
}
