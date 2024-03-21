// Негативне значення - шкала йде у ліво (наприклад в сторону перемоги)
// Позитивне значення - шкала йде на право (в сторону зради)

questions = [
    {
        "question": "Деокупація всіх окупованих територій України, включно з Кримом — ймовірний сценарій завершення війни",
        "effect": {
            "econ": -10,    // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Сьогоденний характер мобілізації є необхідною мірою",
        "effect": {
            "econ": -5,     // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": -1,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Для політичних дебатів і сварок є мирні часи",
        "effect": {
            "econ": -5,     // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 1,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Андрій Єрмак має занадто сильний вплив на політичні процеси країни",
        "effect": {
            "econ": 5,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Наше військове командування є ефективним",
        "effect": {
            "econ": -7,     // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Важливо слухати людей по той бік фронту",
        "effect": {
            "econ": 1,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 3,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 1       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Російська опозиція — наш союзник",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 7,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 1       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Немає сенсу витрачати час на пошук гарних росіян",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": -10,    // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": -1      // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Українські ЗМІ брешуть частіше за російскі",
        "effect": {
            "econ": 8,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Єдиний телемарафон — ефективне джерело боротьби проти дезінформації",
        "effect": {
            "econ": -7,     // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": -1,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Під час війни корупціонерів стало ще більше, а їх покарань — ще менше",
        "effect": {
            "econ": 7,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Росія завжди становитиме загрозу для існування України",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": -10,    // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Російськомовні українці частково винні у початку війни",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": -1,     // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": -10     // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Єдина державна мова приносить більше проблем, ніж користі",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 10      // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Мовний закон є порушенням прав громадянина",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 6      // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Більшість українців переоцінюють Європейський Союз",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": -9,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Укріплення своєї армії є більш надійним захистом для України, ніж спроби вступу до НАТО",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": -7,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Ганебно, що через російськомовство українців плутають з росіянинами за кордоном",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": -5      // МОВА         (немає різниці/державна)
        },
    },
    {  
        "question": "Прикро, що Україна не стала новим домом для росіян, які бігли з Росії",
        "effect": {
            "econ": 1,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 7,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 3       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Нам варто відмовитися від української ідентичності на користь російської, щоб більш ефективно протистояти режиму Путіна",
        "effect": {
            "econ": 1,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 10,     // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 7       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Міграційна політика країн Заходу може вирішити демографічну кризу в Україні",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 7,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Реклама, телебачення, кіно, тощо повинно бути виключно на українській мові",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": -5          // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "У майбутньому, економічна співпраця з Росією подекуди може бути не гіршою, ніж з Європейським Союзом",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 5,      // ВПЛИВ        (русофілія/українство)
            "govt": -5,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Російська література є частиною російської культурної експансії",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": -5,     // ВПЛИВ        (русофілія/українство)
            "govt": -1,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Втручання країн Заходу у внутрішню політику України приносить їй користь",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 7,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Мовна політика Європейського Союзу є безглуздою",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": -1,      // ВПЛИВ        (русофілія/українство)
            "govt": -5,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": -5      // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Не бачу проблеми в існуванні російськомовних шкіл",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 6       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Росіяни несуть колективну відповідальність за дії своєї влади",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": -7,     // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Не підписання Стамбульських домовленостей є помилкою України",
        "effect": {
            "econ": 10,     // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Захід підвів очікування України, не надаючи достатньої кількості зброї",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": -5,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    // {
    //     "question": "Давно пора легалізувати одностатеві шлюби",
    //     "effect": {
    //         "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
    //         "dipl": 0,      // ВПЛИВ        (русофілія/українство)
    //         "govt": 3,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
    //         "scty": 0       // МОВА         (немає різниці/державна)
    //     },
    // },
    {
        "question": "Російська культура належить не тільки Росії",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 7,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 3       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Держава повинна фінансувати розвиток українського інформаційного простору",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": -5,     // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": -5      // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Військовозабов'язані чоловіки, які втекли з України, повинні повернутися, щоб захищати свою Батьківщину",
        "effect": {
            "econ": -7,     // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": -1,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Зеленський напряму відповідає за збільшення корупції в Україні",
        "effect": {
            "econ": 6,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Не можна скидати всі проблеми України на президента",
        "effect": {
            "econ": -7,     // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Замороження конфлікту на сьогоднішній лінії розмежування є прийнятною умовою для закінчення війни",
        "effect": {
            "econ": 5,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Демократичні цінності відходять на другий план, коли йдеться про виживання",
        "effect": {
            "econ": -2,     // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": -7,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Допоки в Україні розмовляють російскою мовою, Росія завжди буде намагатися нас захопити",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": -3,     // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": -10     // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Санкції західних країн проти звичайних росіян є абсурдними",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 5,      // ВПЛИВ        (русофілія/українство)
            "govt": -1,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Ми можемо покластися на США та Європу, навіть після закінчення війни",
        "effect": {
            "econ": -5,     // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 5,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    // {
    //     "question": "Захід нас кине", // Фокус іді нахуй
    //     "effect": {
    //         "econ": -5,     // ПОЛІТИКА     (зрада/перемога)
    //         "dipl": 0,      // ВПЛИВ        (русофілія/українство)
    //         "govt": 5,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
    //         "scty": 0       // МОВА         (немає різниці/державна)
    //     },
    // },
    {
        "question": "Мігранти можуть не вчити державну мову, якщо вони сплачують достатню кількість податків",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 5,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 6       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Влада повинна була попередити населення про скоре російське вторгнення",
        "effect": {
            "econ": -5,     // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Безглуздо боротися з назвами вулиць і пам'ятниками",
        "effect": {
            "econ": 2,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 5,      // ВПЛИВ        (русофілія/українство)
            "govt": 1,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 3       // МОВА         (немає різниці/державна)
        },
    },
    // {
    //     "question": "Мене дратує, що у цьму тесті Росія пишеться з великої літери",
    //     "effect": {
    //         "econ": 0, // ПОЛІТИКА     (зрада/перемога)
    //         "dipl": 0,  // ВПЛИВ        (русофілія/українство)
    //         "govt": 0, // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
    //         "scty": -10   // МОВА         (немає різниці/державна)
    //     },
    // },
    {
        "question": "Усім було б краще, якби усі українці перейшли на українську мову",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": -5      // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Мовне питання потрібно відкласти якщо не назавжди, то хоча б до кінця війни",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 5       // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Влада дурить нас, розповідаючи про ймовірність вступу до НАТО",
        "effect": {
            "econ": 8, // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,  // ВПЛИВ       (русофілія/українство)
            "govt": 0, // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0   // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "В цілому, коректно говорити про українців і росіян, як про один народ",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 10,     // ВПЛИВ        (русофілія/українство)
            "govt": 0,      // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 5,      // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "Україні варто вступати в Європейський Союз",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": 10,     // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0,      // МОВА         (немає різниці/державна)
        },
    },
    {
        "question": "В умовах війни інтереси спільноти отримують перевагу над індивідуальними потребами",
        "effect": {
            "econ": 0,      // ПОЛІТИКА     (зрада/перемога)
            "dipl": 0,      // ВПЛИВ        (русофілія/українство)
            "govt": -8,    // ДИПЛОМАТІЯ   (євроатлантізм/самостійність)
            "scty": 0,      // МОВА         (немає різниці/державна)
        },
    },
];
questions.sort(() => Math.random() - 0.5);
