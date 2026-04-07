export type LocaleCode = "uk" | "en" | "zh-CN";

export type AppDictionary = {
  home: {
    seoTitle: string;
    seoDescription: string;
    heroAriaLabel: string;
    heroImageAlt: string;
    heroKicker: string;
    heroTitle: string;
    heroServicesCta: string;
    heroContactCta: string;
    heroDescription: string;
    productAriaLabel: string;
    productKicker: string;
    productLead: string;
    productImageAlts: [string, string, string];
    statsAriaLabel: string;
    statsAreaLabel: string;
    statsWorkersLabel: string;
    statsRawLabel: string;
    statsQuoteAriaLabel: string;
    statsQuoteText: string;
    showcaseAriaLabel: string;
    showcaseLead: string;
    showcaseReadMore: string;
    showcaseToggleOpen: string;
    showcaseToggleClose: string;
    showcaseTabs: Array<{
      label: string;
      headline: string;
      imageSrc: string;
      imageAlt: string;
      details: string;
    }>;
    awardsAriaLabel: string;
    awardsKicker: string;
    awardsTitle: string;
    awardsReadMore: string;
    awardsDescription: string;
  };
  advantages: {
    seoTitle: string;
    seoDescription: string;
    heroAriaLabel: string;
    heroKicker: string;
    heroTitle: string;
    descriptionAriaLabel: string;
    descriptionText: string;
    cardsAriaLabel: string;
    cards: Array<{ src: string; title: string; text: string }>;
    awardsIntroAriaLabel: string;
    awardsKicker: string;
    awardsTitle: string;
    awardsText: string;
    precisionAriaLabel: string;
    precisionKicker: string;
    precisionTitle: string;
    precisionText: string;
    videoGalleryAriaLabel: string;
    videoGalleryTitle: string;
    prevVideosLabel: string;
    nextVideosLabel: string;
    videoLabel: string;
  };
  about: {
    seoTitle: string;
    seoDescription: string;
    introAriaLabel: string;
    aboutKicker: string;
    aboutTitle: string;
    aboutLead: string;
    topImageAlt: string;
    bottomImageAlt: string;
    aboutBottomText1: string;
    aboutBottomText2: string;
    impactAriaLabel: string;
    impactTitle: string;
    impactLead: string;
    impactYearsLabel: string;
    impactShippingAlt: string;
    impactShippingLabel: string;
    solutionsAriaLabel: string;
    solutionsKicker: string;
    solutionsTitle: string;
    solutionsCards: Array<{ title: string; text: string }>;
  };
  contact: {
    seoTitle: string;
    seoDescription: string;
    formAriaLabel: string;
    kicker: string;
    lead: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    interestsLegend: string;
    interestLamels: string;
    interestCuttings: string;
    interestOther: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    agreementLabel: string;
    submit: string;
  };
  notFound: {
    seoTitle: string;
    seoDescription: string;
    ariaLabel: string;
    title: string;
    description: string;
    backHome: string;
  };
  footer: {
    brandDescription: string;
    contactCta: string;
    productionHeading: string;
    menuHeading: string;
    navAriaLabel: string;
    home: string;
    services: string;
    advantages: string;
    about: string;
    contact: string;
    addressLines: [string, string, string, string];
  };
  upFooter: {
    sustainabilityAriaLabel: string;
    sustainabilityKicker: string;
    sustainabilityTitle: string;
    sustainabilityText: string;
    consultationAriaLabel: string;
    consultationTitle: string;
    consultationText: string;
    consultationCta: string;
  };
};

export function resolveLocale(locale?: string): LocaleCode {
  if (locale === "uk" || locale === "en" || locale === "zh-CN") return locale;
  if (locale?.startsWith("zh")) return "zh-CN";
  return "uk";
}

export const DICTIONARIES: Record<LocaleCode, AppDictionary> = {
  uk: {
    home: {
      seoTitle: "Kavlora | Дубові ламелі та заготовки для паркету",
      seoDescription:
        "Kavlora виробляє дубові ламелі та заготовки для паркетної дошки за розмірами замовника з контролем якості на кожному етапі.",
      heroAriaLabel: "Головний банер",
      heroImageAlt: "Банер",
      heroKicker: "ДУБОВІ ЛАМЕЛІ ТА ЗАГОТОВКИ ДЛЯ ПАРКЕТУ",
      heroTitle: "Дуб, який видно. Якість, яку відчувають.",
      heroServicesCta: "Послуги",
      heroContactCta: "Записатись",
      heroDescription: "Ламелі від 2 мм, класи A/B/C/D. Заготовки для паркетної дошки за розмірами вашого замовлення.",
      productAriaLabel: "Про продукт",
      productKicker: "СТВОРЕНО ДЛЯ ВАС",
      productLead:
        "Компанія KAVLORA спеціалізується на виробництві дубових ламелей та заготовки для паркетної дошки. Від відбору сировини до фінальної геометрії - кожна деталь під контролем якості.",
      productImageAlts: ["Інтер'єр з дверима", "Вхідна група", "Дизайнерський інтер'єр"],
      statsAriaLabel: "Статистика",
      statsAreaLabel: "Загальної площі приміщень",
      statsWorkersLabel: "Працівників компанії",
      statsRawLabel: "Переробки сировини в місяць",
      statsQuoteAriaLabel: "Відгук",
      statsQuoteText:
        "У Kavlora ми виготовляємо дубові ламелі товщиною від 2 мм у класах якості A, B, C, D та заготовки для паркетної дошки за індивідуальними розмірами замовника. Для нас важливі прозора комунікація, точна геометрія та стабільна якість у кожній партії. Наша мета проста: дати вам надійний матеріал, з яким зручно працювати і який гарантує довговічний результат від виробництва.",
      showcaseAriaLabel: "Переваги продукції",
      showcaseLead:
        "Ми поєднуємо стабільність виробництва, контроль якості та гнучкий підхід до ваших задач, щоб ви отримували прогнозований результат у кожній партії.",
      showcaseReadMore: "Детальніше",
      showcaseToggleOpen: "Розгорнути деталі",
      showcaseToggleClose: "Згорнути деталі",
      showcaseTabs: [
        {
          label: "Перевага 1",
          headline: "Стабільна геометрія та контроль якості",
          imageSrc: "/main/photo4.png",
          imageAlt: "Контроль якості продукції",
          details:
            "Кожна партія проходить перевірку на ключових етапах виробництва, щоб забезпечити стабільні параметри та прогнозований результат для вашого виробництва.",
        },
        {
          label: "Перевага 2",
          headline: "Гнучкість під індивідуальні параметри",
          imageSrc: "/main/photo5.png",
          imageAlt: "Індивідуальне налаштування виробництва",
          details:
            "Ми виготовляємо ламелі та заготовки під ваші розміри, класи якості й специфікації, що допомагає швидше інтегрувати матеріал у ваші процеси.",
        },
        {
          label: "Перевага 3",
          headline: "Масштаб виробництва та надійні поставки",
          imageSrc: "/main/photo6.png",
          imageAlt: "Виробничі потужності Kavlora",
          details:
            "Площа комплексу понад 10 000 м2 та команда фахівців дозволяють нам підтримувати стабільні обсяги виробництва й ритмічні поставки.",
        },
        {
          label: "Перевага 4",
          headline: "Відповідальне походження сировини",
          imageSrc: "/main/photo7.png",
          imageAlt: "Сертифікована деревина",
          details:
            "FSC-сертифікація підтверджує, що ми працюємо з деревиною відповідального походження з дотриманням екологічних і соціальних стандартів.",
        },
      ],
      awardsAriaLabel: "Сертифікація",
      awardsKicker: "СЕРТИФІКАЦІЯ",
      awardsTitle: "Forest Stewardship Council®",
      awardsReadMore: "Детальніше",
      awardsDescription:
        "FSC-сертифікат - це міжнародний знак екологічної та соціальної відповідальності лісової продукції, що підтверджує її походження з лісів, де ведеться стале, законне та бережливе господарство.",
    },
    advantages: {
      seoTitle: "Переваги | Kavlora",
      seoDescription: "Переваги співпраці з Kavlora: якість, стабільність та виробничий супровід.",
      heroAriaLabel: "Переваги",
      heroKicker: "ПЕРЕВАГИ",
      heroTitle: "Технологічність, якій довіряють",
      descriptionAriaLabel: "Опис переваг",
      descriptionText:
        "Kavlora створює дерев'яні рішення, у яких природна естетика дуба поєднується з сучасним виробничим підходом. Ми працюємо над ламелями та заготовками для паркетної дошки, зберігаючи високі стандарти якості й індивідуальний підхід до кожного запиту.",
      cardsAriaLabel: "Картки переваг",
      cards: [
        {
          src: "/technology/1.png",
          title: "Цільноламельна дубова ламель",
          text: "Виготовляємо цільноламельну дубову ламель у форматі напівфабрикату: товщина 2-6 мм, ширина 50-300 мм, довжина до 3000 мм.",
        },
        {
          src: "/technology/2.jpg",
          title: "Сфери застосування",
          text: "Наша ламель використовується для меблів, паркету та підлоги, сходів, дверей, стільниць, щитів і клеєних виробів.",
        },
        {
          src: "/technology/3.png",
          title: "Сортування та вологість",
          text: "Працюємо з класами якості від A до D/F. На заводі встановлено 8 сушильних камер для доведення вологості до заданих параметрів.",
        },
        {
          src: "/technology/4.jpg",
          title: "Заготовки для паркету",
          text: "Другий ключовий напрям - заготовка під масивний паркет із правильною породою, базовими розмірами та стабільною вологістю.",
        },
        {
          src: "/technology/5.png",
          title: "Основа для точної доробки",
          text: "Заготовки проходять калібрування та підготовку до профілювання, точного розкрою, формування паза/гребеня та шліфування.",
        },
        {
          src: "/technology/6.png",
          title: "Масштаб і відповідальність",
          text: "Виробничий комплекс понад 10 000 м2, команда понад 50 фахівців і переробка більш як 1000 м3 сировини щомісяця.",
        },
      ],
      awardsIntroAriaLabel: "Сертифікація",
      awardsKicker: "СЕРТИФІКАЦІЯ",
      awardsTitle: "Підтверджена відповідальність",
      awardsText:
        "FSC-сертифікація (Forest Stewardship Council®) підтверджує, що деревина походить із лісів, де ведеться стале, законне та бережливе господарство з дотриманням екологічних і соціальних стандартів.",
      precisionAriaLabel: "Відеогалерея",
      precisionKicker: "ВІДЕОГАЛЕРЕЯ",
      precisionTitle: "Детальніше про виробництво",
      precisionText:
        "Якщо ви хочете дізнатися більше про нашу продукцію, етапи обробки дуба та виробничі можливості, перегляньте відео в галереї нижче.",
      videoGalleryAriaLabel: "Відеогалерея",
      videoGalleryTitle: "Відеогалерея",
      prevVideosLabel: "Попередні відео",
      nextVideosLabel: "Наступні відео",
      videoLabel: "Відео",
    },
    about: {
      seoTitle: "Про нас | Kavlora",
      seoDescription:
        "Дізнайтесь більше про Kavlora: виробничі потужності, підхід до якості, FSC-сертифікацію та досвід у виробництві дубових ламелей.",
      introAriaLabel: "Про нас",
      aboutKicker: "МАЙСТЕРНІСТЬ, ПІДТВЕРДЖЕНА ЯКІСТЮ",
      aboutTitle: "Від сировини до готових рішень для вашого будинку",
      aboutLead:
        "Ми працюємо з дубом щодня, перетворюючи натуральну сировину на якісні ламелі та заготовки для паркетної дошки за параметрами замовника.",
      topImageAlt: "Виробничий процес",
      bottomImageAlt: "Обробка дуба",
      aboutBottomText1:
        "Виробнича інфраструктура охоплює комплекс приміщень загальною площею понад 10 000 м2, що дозволяє ефективно організовувати всі етапи обробки.",
      aboutBottomText2:
        "Ми поєднуємо практичний досвід деревообробки з постійним розвитком технологій. FSC-сертифікація підтверджує відповідальне походження деревини.",
      impactAriaLabel: "Показники компанії",
      impactTitle: "Наш досвід і можливості",
      impactLead: "Поєднуємо перевірений часом досвід, стабільне виробництво та міжнародну логістику для надійної співпраці.",
      impactYearsLabel: "років на ринку",
      impactShippingAlt: "Авіадоставка",
      impactShippingLabel: "Доставка по всьому світу",
      solutionsAriaLabel: "Виробничі можливості",
      solutionsKicker: "НАШІ ВИРОБНИЧІ МОЖЛИВОСТІ",
      solutionsTitle: "Дубові паркетні рішення для сучасних проєктів",
      solutionsCards: [
        {
          title: "Виготовлення дубових ламелей",
          text: "Виробляємо дубові ламелі товщиною від 2 мм із стабільною геометрією та контрольованою якістю.",
        },
        {
          title: "Природна основа якості",
          text: "Працюємо з дубом, зберігаючи баланс між природною естетикою деревини та технологічною точністю процесів.",
        },
        {
          title: "Індивідуальний підхід до замовлення",
          text: "Виготовляємо ламелі та заготовки для паркетної дошки під конкретні параметри клієнта.",
        },
      ],
    },
    contact: {
      seoTitle: "Контакти | Kavlora",
      seoDescription: "Зв'яжіться з командою Kavlora для консультації щодо дубових ламелей та заготовок для паркетної дошки.",
      formAriaLabel: "Контактна форма",
      kicker: "ЗАПИТ НА КОНСУЛЬТАЦІЮ",
      lead:
        "Залиште коротку інформацію про ваш запит - і команда Kavlora проконсультує, щоб ви отримали матеріал під ваші точні розміри та потреби.",
      nameLabel: "Ім'я",
      namePlaceholder: "Введіть ваше ім'я",
      emailLabel: "Email",
      emailPlaceholder: "Введіть ваш email",
      phoneLabel: "Номер телефону",
      phonePlaceholder: "Введіть ваш номер телефону",
      interestsLegend: "Що вас цікавить? (необов'язково)",
      interestLamels: "Ламелі",
      interestCuttings: "Заготовки для паркетної дошки",
      interestOther: "Інше",
      detailsLabel: "Детальніше про ваш запит",
      detailsPlaceholder: "Напишіть детальніше про ваш запит",
      agreementLabel: "Я погоджуюся з тим, що мої введені дані збираються та зберігаються.",
      submit: "Відправити",
    },
    notFound: {
      seoTitle: "Сторінку не знайдено | Kavlora",
      seoDescription: "Сторінку не знайдено. Поверніться на головну сторінку Kavlora.",
      ariaLabel: "Сторінку не знайдено",
      title: "Сторінку не знайдено",
      description: "Схоже ви заблукали. Поверніться на головну сторінку Kavlora.",
      backHome: "На головну",
    },
    footer: {
      brandDescription:
        "KAVLORA виготовляє преміальні дубові ламелі та заготовки для паркету, що природно інтегруються в інтер'єр, з чіткою комунікацією від першого запиту до фінальної поставки.",
      contactCta: "Зв'язатися з нами",
      productionHeading: "Виробництво",
      menuHeading: "Меню",
      navAriaLabel: "Навігація футера",
      home: "Головна",
      services: "Послуги",
      advantages: "Переваги",
      about: "Про нас",
      contact: "Контакти",
      addressLines: ["08730, Київська обл.,", "Обухівський район,", "село Мала Вільшанка,", "вул. Шевченка, 125"],
    },
    upFooter: {
      sustainabilityAriaLabel: "Сталий розвиток",
      sustainabilityKicker: "SUSTAINABILITY",
      sustainabilityTitle: "Традиція дерева. Сучасна культура виробництва.",
      sustainabilityText:
        "Наше підприємство - це сильна команда, великий виробничий простір і щоденна робота з натуральною сировиною. Ми будуємо процеси так, щоб поєднати надійність постачання, акуратну обробку матеріалу та стабільний результат для клієнта.",
      consultationAriaLabel: "Запис на консультацію",
      consultationTitle: "Запис на консультацію",
      consultationText:
        "Ми супроводжуємо вас на кожному етапі - від першої ідеї до фінального результату. Розкажіть про ваш запит, а ми запропонуємо оптимальне рішення.",
      consultationCta: "Зв'яжіться з нами",
    },
  },
  en: {
    home: {
      seoTitle: "Kavlora | Oak Lamellas and Parquet Blanks",
      seoDescription:
        "Kavlora manufactures oak lamellas and parquet board blanks to customer dimensions with quality control at every stage.",
      heroAriaLabel: "Main banner",
      heroImageAlt: "Banner",
      heroKicker: "OAK LAMELLAS AND PARQUET BLANKS",
      heroTitle: "Oak you can see. Quality you can feel.",
      heroServicesCta: "Services",
      heroContactCta: "Book now",
      heroDescription: "Lamellas from 2 mm, grades A/B/C/D. Parquet board blanks made to your dimensions.",
      productAriaLabel: "About the product",
      productKicker: "MADE FOR YOU",
      productLead:
        "KAVLORA specializes in oak lamellas and parquet board blanks. From raw material selection to final geometry, every detail is quality controlled.",
      productImageAlts: ["Interior with doors", "Entrance group", "Designer interior"],
      statsAriaLabel: "Statistics",
      statsAreaLabel: "Total facility area",
      statsWorkersLabel: "Company employees",
      statsRawLabel: "Raw material processing per month",
      statsQuoteAriaLabel: "Quote",
      statsQuoteText:
        "At Kavlora, we produce oak lamellas from 2 mm in grades A, B, C, D and parquet board blanks tailored to customer dimensions. We value transparent communication, precise geometry, and consistent quality in every batch.",
      showcaseAriaLabel: "Product strengths",
      showcaseLead:
        "We combine stable production, quality control, and flexible collaboration so you can rely on predictable results in every batch.",
      showcaseReadMore: "Read more",
      showcaseToggleOpen: "Expand details",
      showcaseToggleClose: "Collapse details",
      showcaseTabs: [
        {
          label: "Benefit 1",
          headline: "Stable geometry and quality control",
          imageSrc: "/main/photo4.png",
          imageAlt: "Product quality control",
          details:
            "Every batch is checked at critical production stages to ensure stable dimensions and predictable performance for your workflow.",
        },
        {
          label: "Benefit 2",
          headline: "Flexible manufacturing by your specification",
          imageSrc: "/main/photo5.png",
          imageAlt: "Custom production setup",
          details:
            "We manufacture lamellas and blanks by your dimensions, grade, and requirements to fit smoothly into your process.",
        },
        {
          label: "Benefit 3",
          headline: "Production scale and reliable deliveries",
          imageSrc: "/main/photo6.png",
          imageAlt: "Kavlora production facilities",
          details:
            "A 10,000 m2 production complex and an experienced team allow us to sustain stable volumes and consistent shipment schedules.",
        },
        {
          label: "Benefit 4",
          headline: "Responsible raw material sourcing",
          imageSrc: "/main/photo7.png",
          imageAlt: "Certified timber",
          details:
            "FSC certification confirms responsible wood sourcing with compliance to environmental and social standards.",
        },
      ],
      awardsAriaLabel: "Certification",
      awardsKicker: "CERTIFICATION",
      awardsTitle: "Forest Stewardship Council®",
      awardsReadMore: "Read more",
      awardsDescription:
        "FSC certification is an international mark of environmental and social responsibility that confirms timber originates from responsibly managed forests.",
    },
    advantages: {
      seoTitle: "Advantages | Kavlora",
      seoDescription: "Why work with Kavlora: quality, reliability, and production support.",
      heroAriaLabel: "Advantages",
      heroKicker: "ADVANTAGES",
      heroTitle: "Technology you can trust",
      descriptionAriaLabel: "Advantages description",
      descriptionText:
        "Kavlora creates wood solutions where natural oak aesthetics meet modern production standards. We produce lamellas and parquet blanks with consistent quality and a custom approach.",
      cardsAriaLabel: "Advantages cards",
      cards: [
        {
          src: "/technology/1.png",
          title: "Solid oak lamella",
          text: "We produce solid oak lamellas as semi-finished products: 2-6 mm thickness, 50-300 mm width, and length up to 3000 mm.",
        },
        {
          src: "/technology/2.jpg",
          title: "Application areas",
          text: "Our lamella is used for furniture, parquet and flooring, stairs, doors, countertops, panels, and glued products.",
        },
        {
          src: "/technology/3.png",
          title: "Sorting and moisture",
          text: "We work with grades from A to D/F. The facility has 8 drying chambers to reach target moisture levels.",
        },
        {
          src: "/technology/4.jpg",
          title: "Parquet blanks",
          text: "The second key direction is blank preparation for solid parquet with proper species, base dimensions, and stable moisture.",
        },
        {
          src: "/technology/5.png",
          title: "Base for precision finishing",
          text: "Blanks are calibrated and prepared for profiling, precise cutting, tongue-and-groove shaping, and sanding.",
        },
        {
          src: "/technology/6.png",
          title: "Scale and responsibility",
          text: "Production area over 10,000 m2, team of 50+ specialists, and over 1000 m3 processed monthly.",
        },
      ],
      awardsIntroAriaLabel: "Certification",
      awardsKicker: "CERTIFICATION",
      awardsTitle: "Proven responsibility",
      awardsText:
        "FSC certification confirms that timber comes from forests managed legally and sustainably, in compliance with environmental and social standards.",
      precisionAriaLabel: "Video gallery",
      precisionKicker: "VIDEO GALLERY",
      precisionTitle: "Learn more about production",
      precisionText: "If you want to learn more about our products and production capabilities, watch the videos below.",
      videoGalleryAriaLabel: "Video gallery",
      videoGalleryTitle: "Video gallery",
      prevVideosLabel: "Previous videos",
      nextVideosLabel: "Next videos",
      videoLabel: "Video",
    },
    about: {
      seoTitle: "About us | Kavlora",
      seoDescription:
        "Learn more about Kavlora: production capacity, quality approach, FSC certification, and expertise in oak lamella manufacturing.",
      introAriaLabel: "About us intro",
      aboutKicker: "CRAFTSMANSHIP CONFIRMED BY QUALITY",
      aboutTitle: "From raw material to complete solutions for your home",
      aboutLead:
        "We work with oak every day, turning natural raw material into quality lamellas and parquet blanks tailored to customer requirements.",
      topImageAlt: "Production process",
      bottomImageAlt: "Oak processing",
      aboutBottomText1:
        "Our production infrastructure includes facilities with total area over 10,000 m2, allowing efficient organization of all processing stages.",
      aboutBottomText2:
        "We combine practical woodworking expertise with continuous technology development. FSC certification confirms responsible timber sourcing.",
      impactAriaLabel: "Impact in numbers",
      impactTitle: "Our experience and capabilities",
      impactLead: "We combine proven expertise, stable production, and global logistics for reliable cooperation.",
      impactYearsLabel: "years in the market",
      impactShippingAlt: "Air shipping",
      impactShippingLabel: "Worldwide delivery",
      solutionsAriaLabel: "Building solutions",
      solutionsKicker: "OUR PRODUCTION CAPABILITIES",
      solutionsTitle: "Oak parquet solutions for modern projects",
      solutionsCards: [
        {
          title: "Oak lamella manufacturing",
          text: "We produce oak lamellas from 2 mm with stable geometry and controlled quality.",
        },
        {
          title: "Natural foundation of quality",
          text: "We preserve a balance between natural wood aesthetics and process precision.",
        },
        {
          title: "Custom approach to every order",
          text: "We produce lamellas and parquet blanks tailored to each client's specifications.",
        },
      ],
    },
    contact: {
      seoTitle: "Contacts | Kavlora",
      seoDescription: "Contact Kavlora for consultation on oak lamellas and parquet board blanks.",
      formAriaLabel: "Contact form",
      kicker: "CONSULTATION REQUEST",
      lead:
        "Leave brief information about your request, and the Kavlora team will contact you with guidance for your exact dimensions and needs.",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      phoneLabel: "Phone number",
      phonePlaceholder: "Enter your phone number",
      interestsLegend: "What are you interested in? (optional)",
      interestLamels: "Lamellas",
      interestCuttings: "Parquet board blanks",
      interestOther: "Other",
      detailsLabel: "More details about your request",
      detailsPlaceholder: "Please describe your request",
      agreementLabel: "I agree that my entered data can be collected and stored.",
      submit: "Submit",
    },
    notFound: {
      seoTitle: "Page not found | Kavlora",
      seoDescription: "Page not found. Return to the Kavlora home page.",
      ariaLabel: "Page not found",
      title: "Page not found",
      description: "Looks like you got lost. Return to the Kavlora home page.",
      backHome: "Back to home",
    },
    footer: {
      brandDescription:
        "KAVLORA manufactures premium oak lamellas and parquet blanks that naturally integrate into interiors, with clear communication from first request to final delivery.",
      contactCta: "Contact us",
      productionHeading: "Production",
      menuHeading: "Menu",
      navAriaLabel: "Footer navigation",
      home: "Home",
      services: "Services",
      advantages: "Advantages",
      about: "About us",
      contact: "Contacts",
      addressLines: ["08730, Kyiv region,", "Obukhiv district,", "Mala Vilshanka village,", "125 Shevchenka street"],
    },
    upFooter: {
      sustainabilityAriaLabel: "Sustainability",
      sustainabilityKicker: "SUSTAINABILITY",
      sustainabilityTitle: "Wood tradition. Modern production culture.",
      sustainabilityText:
        "Our company combines a strong team, large-scale production facilities, and daily work with natural raw materials. We design processes to ensure reliable supply, precise material processing, and stable outcomes for every client.",
      consultationAriaLabel: "Book a consultation",
      consultationTitle: "Book a consultation",
      consultationText:
        "We support you at every stage - from the first idea to the final result. Share your request, and we will propose the best solution and coordinate all details.",
      consultationCta: "Contact us",
    },
  },
  "zh-CN": {
    home: {
      seoTitle: "Kavlora | 橡木贴片与地板坯料",
      seoDescription: "Kavlora 按客户尺寸生产橡木贴片和地板坯料，并在每个阶段进行质量控制。",
      heroAriaLabel: "主横幅",
      heroImageAlt: "横幅",
      heroKicker: "橡木贴片与地板坯料",
      heroTitle: "看得见的橡木，感受得到的品质。",
      heroServicesCta: "服务",
      heroContactCta: "立即咨询",
      heroDescription: "2mm 起贴片，A/B/C/D 等级。按需定制地板坯料。",
      productAriaLabel: "产品介绍",
      productKicker: "为您而制",
      productLead: "KAVLORA 专注于橡木贴片与地板坯料。原料筛选到最终尺寸，每一步都严格把控质量。",
      productImageAlts: ["室内案例", "入口区域", "设计空间"],
      statsAriaLabel: "数据统计",
      statsAreaLabel: "厂区总面积",
      statsWorkersLabel: "员工人数",
      statsRawLabel: "每月原料加工量",
      statsQuoteAriaLabel: "介绍",
      statsQuoteText:
        "Kavlora 生产 2mm 起的橡木贴片（A/B/C/D 等级）以及按客户尺寸定制的地板坯料。我们重视沟通透明、尺寸精度和批次稳定性。",
      showcaseAriaLabel: "产品优势",
      showcaseLead: "我们结合稳定产能、质量控制和灵活协作，确保每一批次都可预期、可复用。",
      showcaseReadMore: "了解更多",
      showcaseToggleOpen: "展开详情",
      showcaseToggleClose: "收起详情",
      showcaseTabs: [
        {
          label: "优势 1",
          headline: "稳定尺寸与质量控制",
          imageSrc: "/main/photo4.png",
          imageAlt: "产品质量控制",
          details: "每个关键生产环节都进行检测，确保尺寸稳定、品质可预测，方便您后续加工使用。",
        },
        {
          label: "优势 2",
          headline: "按需求灵活定制",
          imageSrc: "/main/photo5.png",
          imageAlt: "定制化生产",
          details: "我们可按尺寸、等级与技术要求生产，帮助您更顺畅地接入现有生产流程。",
        },
        {
          label: "优势 3",
          headline: "产能规模与稳定交付",
          imageSrc: "/main/photo6.png",
          imageAlt: "Kavlora 产能",
          details: "超过 10,000 平方米的生产基地和专业团队，保障稳定产量与规律交付。",
        },
        {
          label: "优势 4",
          headline: "可追溯且负责的原料来源",
          imageSrc: "/main/photo7.png",
          imageAlt: "认证木材",
          details: "FSC 认证证明木材来源合规、可持续，并符合环境与社会责任标准。",
        },
      ],
      awardsAriaLabel: "认证",
      awardsKicker: "认证",
      awardsTitle: "Forest Stewardship Council®",
      awardsReadMore: "了解更多",
      awardsDescription: "FSC 认证是国际环保与社会责任标志，证明木材来自可持续经营的森林。",
    },
    advantages: {
      seoTitle: "优势 | Kavlora",
      seoDescription: "选择 Kavlora 的优势：品质稳定、交付可靠、生产支持完善。",
      heroAriaLabel: "优势",
      heroKicker: "优势",
      heroTitle: "值得信赖的工艺能力",
      descriptionAriaLabel: "优势介绍",
      descriptionText: "Kavlora 将橡木天然美感与现代化生产结合，持续提供稳定品质与定制服务。",
      cardsAriaLabel: "优势卡片",
      cards: [
        {
          src: "/technology/1.png",
          title: "整板橡木贴片",
          text: "提供半成品贴片：厚度 2-6 mm，宽度 50-300 mm，长度最高 3000 mm。",
        },
        {
          src: "/technology/2.jpg",
          title: "应用领域",
          text: "适用于家具、地板、楼梯、门、台面、拼板和胶合制品。",
        },
        {
          src: "/technology/3.png",
          title: "分级与含水率",
          text: "支持 A 到 D/F 等级；工厂配备 8 间干燥窑，确保目标含水率。",
        },
        {
          src: "/technology/4.jpg",
          title: "地板坯料",
          text: "提供用于实木地板的坯料，具备正确树种、基础尺寸与稳定含水率。",
        },
        {
          src: "/technology/5.png",
          title: "精加工基础",
          text: "坯料经过校准并可用于开槽、开榫、精切与打磨等后续工序。",
        },
        {
          src: "/technology/6.png",
          title: "规模与责任",
          text: "生产基地超过 10,000 平方米，50+ 专业人员，每月加工原料超 1000 立方米。",
        },
      ],
      awardsIntroAriaLabel: "认证",
      awardsKicker: "认证",
      awardsTitle: "责任可验证",
      awardsText: "FSC 认证证明木材来自合法、可持续经营的森林，并符合环境与社会标准。",
      precisionAriaLabel: "视频画廊",
      precisionKicker: "视频画廊",
      precisionTitle: "深入了解生产流程",
      precisionText: "想了解更多产品与生产能力，可查看下方视频。",
      videoGalleryAriaLabel: "视频画廊",
      videoGalleryTitle: "视频画廊",
      prevVideosLabel: "上一组视频",
      nextVideosLabel: "下一组视频",
      videoLabel: "视频",
    },
    about: {
      seoTitle: "关于我们 | Kavlora",
      seoDescription: "了解 Kavlora：生产能力、质量体系、FSC 认证与橡木加工经验。",
      introAriaLabel: "关于我们",
      aboutKicker: "以品质验证的工艺",
      aboutTitle: "从原木到成品方案",
      aboutLead: "我们每天与橡木打交道，将天然原料转化为高品质贴片与地板坯料。",
      topImageAlt: "生产流程",
      bottomImageAlt: "橡木加工细节",
      aboutBottomText1: "我们的生产设施总面积超过 10,000 平方米，可高效组织各环节加工。",
      aboutBottomText2: "我们结合木工经验与持续技术升级，FSC 认证证明原料来源负责可靠。",
      impactAriaLabel: "关键数据",
      impactTitle: "我们的经验与能力",
      impactLead: "我们以成熟经验、稳定产能与国际物流支持长期合作。",
      impactYearsLabel: "年行业经验",
      impactShippingAlt: "空运",
      impactShippingLabel: "全球配送",
      solutionsAriaLabel: "制造能力",
      solutionsKicker: "我们的制造能力",
      solutionsTitle: "面向现代项目的橡木方案",
      solutionsCards: [
        {
          title: "橡木贴片制造",
          text: "生产厚度 2mm 起的橡木贴片，尺寸稳定、质量可控。",
        },
        {
          title: "天然与工艺平衡",
          text: "在木材天然美感与生产精度之间保持平衡。",
        },
        {
          title: "按订单参数定制",
          text: "根据客户具体参数生产贴片与地板坯料。",
        },
      ],
    },
    contact: {
      seoTitle: "联系我们 | Kavlora",
      seoDescription: "欢迎联系 Kavlora，咨询橡木贴片与地板坯料方案。",
      formAriaLabel: "联系表单",
      kicker: "咨询申请",
      lead: "请留下您的需求信息，Kavlora 团队会为您提供尺寸与材料建议。",
      nameLabel: "姓名",
      namePlaceholder: "请输入姓名",
      emailLabel: "邮箱",
      emailPlaceholder: "请输入邮箱",
      phoneLabel: "电话",
      phonePlaceholder: "请输入电话号码",
      interestsLegend: "您感兴趣的是？（可选）",
      interestLamels: "贴片",
      interestCuttings: "地板坯料",
      interestOther: "其他",
      detailsLabel: "更多需求说明",
      detailsPlaceholder: "请描述您的需求",
      agreementLabel: "我同意所填写的数据被收集与存储。",
      submit: "提交",
    },
    notFound: {
      seoTitle: "页面未找到 | Kavlora",
      seoDescription: "页面未找到。请返回 Kavlora 首页。",
      ariaLabel: "页面未找到",
      title: "页面未找到",
      description: "看起来您迷路了。请返回 Kavlora 首页。",
      backHome: "返回首页",
    },
    footer: {
      brandDescription: "KAVLORA 生产高品质橡木贴片与地板坯料，流程沟通清晰，从需求到交付全程可控。",
      contactCta: "联系我们",
      productionHeading: "生产基地",
      menuHeading: "菜单",
      navAriaLabel: "页脚导航",
      home: "首页",
      services: "服务",
      advantages: "优势",
      about: "关于我们",
      contact: "联系我们",
      addressLines: ["08730, 基辅州,", "奥布霍夫区,", "马拉维尔尚卡村,", "舍甫琴科街 125 号"],
    },
    upFooter: {
      sustainabilityAriaLabel: "可持续发展",
      sustainabilityKicker: "SUSTAINABILITY",
      sustainabilityTitle: "木材传统与现代制造文化的结合。",
      sustainabilityText:
        "我们拥有专业团队、充足产能与规范流程，专注天然木材加工，确保供应稳定、加工精细、结果可靠。",
      consultationAriaLabel: "预约咨询",
      consultationTitle: "预约咨询",
      consultationText: "我们在每个阶段为您提供支持。从想法到结果，欢迎告诉我们需求，我们将提供合适方案。",
      consultationCta: "联系我们",
    },
  },
};
