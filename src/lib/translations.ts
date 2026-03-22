export type Language = "ar" | "en";

const ar = {
  header: {
    logo: "بورتفوليو",
    nav: [
      { label: "من أنا", href: "#about" },
      { label: "خدماتي", href: "#services" },
      { label: "مشاريعي", href: "#projects" },
      { label: "آراء العملاء", href: "#testimonials" },
      { label: "الأسئلة المتكررة", href: "#faq" },
    ],
    cta: "تواصل معي",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    switchLang: "EN",
  },
  hero: {
    badge: "متاح للعمل الحر",
    titlePart1: "أصنع تجارب",
    titleHighlight1: "مرحة",
    titlePart2: "ولا تُنسى",
    titleHighlight2: "رقمية",
    titlePart3: "مميزة",
    description:
      "مطور مبدع يحوّل الأفكار إلى مواقع وتطبيقات تفاعلية ممتعة. كود نظيف، تصميم مبتكر، وتجربة مستخدم رائعة.",
    ctaPrimary: "شاهد أعمالي",
    ctaSecondary: "تحميل السيرة الذاتية",
    stats: [
      { value: "+50", label: "مشروع" },
      { value: "+30", label: "عميل راضٍ" },
      { value: "+5", label: "سنوات خبرة" },
    ],
    available: "متاح",
    forWork: "للعمل",
  },
  about: {
    creative: "شغوف بالإبداع",
    yearsCount: "+5",
    yearsLabel: "سنوات",
    badge: "من أنا",
    titlePart1: "مطور يركز على ",
    titleHighlight1: "الحرفية",
    titleMiddle: " و ",
    titleHighlight2: "التفاصيل",
    description1:
      "أنا مطور مبدع شغوف بإنشاء تجارب ويب جميلة وسهلة الاستخدام. أؤمن بأن التصميم الرائع يجب أن يلتقي بالهندسة الممتازة.",
    description2:
      "عندما لا أكتب الأكواد، ستجدني أرسم واجهات المستخدم، أتابع أحدث اتجاهات التصميم، أو أحضّر فنجان القهوة المثالي.",
    skills: [
      "React & Next.js",
      "TypeScript",
      "تصميم واجهات المستخدم",
      "Tailwind CSS",
      "Node.js",
      "حركات إبداعية",
    ],
  },
  services: {
    label: "الخدمات",
    title: "ما يمكنني تقديمه لك",
    highlightWord: "تقديمه",
    description:
      "من الفكرة إلى الإطلاق، أقدّم مجموعة متكاملة من خدمات التطوير الإبداعي.",
    items: [
      {
        title: "تطوير الويب",
        description:
          "مواقع حديثة وسريعة الأداء باستخدام React و Next.js وأحدث التقنيات.",
      },
      {
        title: "تصميم واجهات المستخدم",
        description:
          "واجهات جميلة وسهلة الاستخدام، بدءاً من الإطارات الأولية إلى التصميم النهائي.",
      },
      {
        title: "تطبيقات الجوال",
        description:
          "تطبيقات متعددة المنصات تعمل بسلاسة وتشعر وكأنها أصلية.",
      },
      {
        title: "تحسين السيو والأداء",
        description: "أوقات تحميل أسرع وترتيب أفضل في محركات البحث.",
      },
      {
        title: "تكامل API",
        description:
          "تكامل سلس مع الخدمات الخارجية وواجهات خلفية قوية لتطبيقاتك.",
      },
      {
        title: "أنظمة التصميم",
        description:
          "مكتبات مكونات قابلة للتوسع تضمن اتساق علامتك التجارية في كل مكان.",
      },
    ],
  },
  projects: {
    label: "مشاريعي",
    title: "أعمال قمت ببنائها",
    highlightWord: "ببنائها",
    description:
      "مجموعة من مشاريع العملاء وأعمالي الشخصية، تم تصميمها بعناية لتقديم أفضل تجربة للمستخدم.",
    filters: [
      { label: "كل المشاريع", value: "all" },
      { label: "لوحات تحكم", value: "Dashboards" },
      { label: "تجارة إلكترونية", value: "E-commerce" },
      { label: "توصيل طلبات", value: "Delivery" },
      { label: "صفحات هبوط", value: "Landing Pages" },
      { label: "مدونات", value: "Blogs" },
    ],
    forSale: "💰 للبيع",
    viewProject: "عرض",
    items: [
      {
        title: "Mernify",
        description:
          "تطبيق محادثة فوري مبني على MERN (MongoDB, Express.js, React, Node.js). يدعم تسجيل المستخدمين، المراسلة الفورية، وتصميم متجاوب.",
      },
      {
        title: "Anone",
        description:
          "منصة تجارة إلكترونية باستخدام React و Firebase، مع فلترة المنتجات، عربة تسوق، ومعالجة دفع آمنة، ولوحة تحكم لإدارة المخزون.",
      },
      {
        title: "FoodieLand",
        description:
          "قالب صفحة هبوط حديث، متجاوب مع جميع الأجهزة، يتضمن إحصائيات متحركة وعناصر تفاعلية، مبني بـ HTML و CSS و JavaScript.",
      },
    ],
  },
  testimonials: {
    label: "آراء العملاء",
    title: "كلمات رائعة من عملاء راضين",
    highlightWord: "راضين",
    description: "لا تأخذ كلامي فقط — إليك ما يقوله عملائي.",
    prevLabel: "الشهادة السابقة",
    nextLabel: "الشهادة التالية",
    goToLabel: "اذهب للشهادة",
    items: [
      {
        name: "creative2tg",
        country: "Canada",
        text: "كان لديهم طلب محدد وفهمه على الفور ونفذه تماماً كما توقعنا. قيمة ممتازة وتواصل رائع. العمل معه كان 10/10 — بالتأكيد سنتعامل معه مرة أخرى!",
      },
      {
        name: "Hassan",
        country: "Saudi Arabia",
        text: "لم يقدم تصميمًا رائعًا فقط، بل كانت جودة الكود ممتازة، نظيف، قابل للصيانة وموثق جيدًا. محترف بحق!",
      },
      {
        name: "Jasim",
        country: "Morocco",
        text: "القالب الذي اشتريناه تجاوز كل توقعاتنا. سهل التخصيص، موثق جيدًا، ونظام التصميم متين جدًا. يستحق كل درهم.",
      },
    ],
  },
  cta: {
    title: "هل لديك مشروع في ذهنك؟",
    description:
      "لنصنع شيئًا مذهلًا معًا. متحمس دائمًا للعمل على تحديات جديدة وتحويل الأفكار الإبداعية إلى واقع.",
    primaryBtn: "ابدأ المحادثة",
    secondaryBtn: "اطلب عرض السعر",
  },
  faq: {
    label: "الأسئلة المتكررة",
    title: "أسئلة؟ إليك الإجابات",
    highlightWord: "الإجابات",
    description: "بعض الأسئلة الشائعة. لم تجد ما تبحث عنه؟ تواصل معي!",
    items: [
      {
        question: "ما التقنيات التي تستخدمها؟",
        answer:
          "أعمل بشكل رئيسي مع React و Next.js و TypeScript و Tailwind CSS للواجهة الأمامية. وللخلفية أستخدم Node.js و Express مع قواعد بيانات مثل PostgreSQL و MongoDB.",
      },
      {
        question: "كم يستغرق المشروع عادةً؟",
        answer:
          "مدة المشروع تختلف حسب التعقيد. صفحة هبوط: 1-2 أسبوع، موقع كامل: 3-6 أسابيع، تطبيق ويب معقد: 2-4 أشهر. سأقدم جدولًا تفصيليًا بعد الاستشارة الأولى.",
      },
      {
        question: "هل توفر صيانة مستمرة؟",
        answer:
          "نعم، أقدم باقات صيانة شهرية تشمل إصلاح الأخطاء، تحديثات الأمان، تحسين الأداء، وإضافة ميزات بسيطة لضمان استمرار عمل مشروعك بكفاءة.",
      },
      {
        question: "ماذا يشمل قسم 'للبيع' في القوالب؟",
        answer:
          "يشمل الكود المصدري كامل، توثيق مفصل، تصميم متجاوب لجميع الأجهزة، توافق مع معايير الوصول، ودعم عبر البريد لمدة 30 يومًا.",
      },
      {
        question: "هل يمكنني رؤية سير العمل قبل الالتزام؟",
        answer:
          "بالتأكيد، أبدأ كل مشروع بمكالمة استكشافية مجانية لمناقشة احتياجاتك وأهدافك. ثم أقدّم عرضًا يشمل لوحات مزاجية وإطارات سلكية ونطاق عمل واضح.",
      },
      {
        question: "ما هي شروط الدفع؟",
        answer:
          "عادةً أطلب 50% مقدم و50% عند الانتهاء. للمشاريع الكبيرة يمكن ترتيب دفعات مرحلية. القوالب تدفع مرة واحدة بدون رسوم إضافية.",
      },
    ],
  },
  footer: {
    brand: "بورتفوليو",
    brandDescription:
      "نصنع تجارب رقمية ممتعة ولا تُنسى تجعل المستخدمين يبتسمون.",
    groups: [
      {
        title: "التنقل",
        links: [
          { label: "من أنا", href: "#about" },
          { label: "خدماتي", href: "#services" },
          { label: "مشاريعي", href: "#projects" },
          { label: "آراء العملاء", href: "#testimonials" },
        ],
      },
      {
        title: "تواصل معنا",
        links: [
          { label: "تويتر", href: "#" },
          { label: "جيت هب", href: "#" },
          { label: "لينكد إن", href: "#" },
          { label: "دريبل", href: "#" },
        ],
      },
    ],
    madeWith: "صُنع بـ",
    andCoffee: "والكثير من القهوة",
    backToTop: "العودة للأعلى",
  },
};

const en: typeof ar = {
  header: {
    logo: "Portfolio",
    nav: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Contact Me",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "عربي",
  },
  hero: {
    badge: "Available for Freelance",
    titlePart1: "I Build",
    titleHighlight1: "Playful",
    titlePart2: "& Memorable",
    titleHighlight2: "Digital",
    titlePart3: "Experiences",
    description:
      "A creative developer who transforms ideas into fun, interactive websites and apps. Clean code, bold design, happy users.",
    ctaPrimary: "View My Work",
    ctaSecondary: "Download Resume",
    stats: [
      { value: "50+", label: "Projects" },
      { value: "30+", label: "Happy Clients" },
      { value: "5+", label: "Years Experience" },
    ],
    available: "Available",
    forWork: "for Work",
  },
  about: {
    creative: "Creative at Heart",
    yearsCount: "5+",
    yearsLabel: "Years",
    badge: "About Me",
    titlePart1: "A Developer Who Cares About ",
    titleHighlight1: "Craft",
    titleMiddle: " & ",
    titleHighlight2: "Details",
    description1:
      "I'm a creative developer passionate about building beautiful, functional, and accessible web experiences. I believe great design meets excellent engineering.",
    description2:
      "When I'm not coding, you'll find me sketching UI concepts, exploring new design trends, or brewing the perfect cup of coffee.",
    skills: [
      "React & Next.js",
      "TypeScript",
      "UI/UX Design",
      "Tailwind CSS",
      "Node.js",
      "Creative Animations",
    ],
  },
  services: {
    label: "Services",
    title: "What I Can Offer You",
    highlightWord: "Offer",
    description:
      "From idea to launch, I provide a full suite of creative development services.",
    items: [
      {
        title: "Web Development",
        description:
          "Modern, high-performance websites built with React, Next.js, and the latest technologies.",
      },
      {
        title: "UI/UX Design",
        description:
          "Intuitive and beautiful interfaces designed with the user in mind. From wireframe to final design.",
      },
      {
        title: "Mobile Apps",
        description:
          "Cross-platform mobile apps that feel native and perform excellently.",
      },
      {
        title: "SEO & Performance",
        description:
          "Faster load times, better rankings. Optimization that makes your site shine.",
      },
      {
        title: "API Integration",
        description:
          "Seamless integrations with external services and robust backend connections for your apps.",
      },
      {
        title: "Design Systems",
        description:
          "Scalable component libraries that keep your brand consistent everywhere.",
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Things I've Built & Made",
    highlightWord: "Made",
    description: "A mix of client work and personal projects. Carefully crafted and designed to provide the best user experience.",
    filters: [
      { label: "All Projects", value: "all" },
      { label: "Dashboards", value: "Dashboards" },
      { label: "E-commerce", value: "E-commerce" },
      { label: "Delivery", value: "Delivery" },
      { label: "Landing Pages", value: "Landing Pages" },
      { label: "Blogs", value: "Blogs" },
    ],
    forSale: "💰 For Sale",
    viewProject: "View",
    items: [
      {
        title: "Mernify",
        description: "A Real time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js). It features user authentication, real-time messaging, and a responsive design. Users can create accounts, join chat rooms, and send messages instantly.",
      },
      {
        title: "Anone",
        description: "An e-commerce platform built with React and Firebase, featuring product filtering, shopping cart functionality, and secure payment processing. Includes admin dashboard for inventory management.",
      },
      {
        title: "FoodieLand",
        description: "A modern landing page template for financial services, featuring responsive design, animated statistics, and interactive UI elements. Built with HTML, CSS, and JavaScript.",
      }
    ],
  },
  testimonials: {
    label: "Testimonials",
    title: "Kind Words from Happy Clients",
    highlightWord: "Happy",
    description:
      "Don't just take my word for it — here's what people I've worked with have to say.",
    prevLabel: "Previous testimonial",
    nextLabel: "Next testimonial",
    goToLabel: "Go to testimonial",
    items: [
      {
        name: "creative2tg",
        country: "Canada",
        text: "We had a specific coding requirement and he understood it immediately and put it together exactly as we’d hoped. Incredible value for the work he did and fantastic communication. Working with him was a 10/10 - we’ll definitely be using him again!"

,
      },
    
      {
        name: "Hassan",
        country: "Saudi Arabia",
        text: "They didn't just deliver stunning design — the code quality was exceptional. Clean, maintainable, and well-documented. A true professional!",
      },
      {
        name: "Jasim",
        country: "Morocco",
        text: "The template we purchased exceeded all expectations. Easy to customize, great documentation, and the design system is rock solid. Worth every penny.",
      },
    ],
  },
  cta: {
    title: "Got a Project in Mind?",
    description:
      "Let's build something amazing together. Always excited to work on new challenges and turn creative ideas into reality.",
    primaryBtn: "Start a Conversation",
    secondaryBtn: "View Pricing",
  },
  faq: {
    label: "FAQ",
    title: "Questions? I Have Answers",
    highlightWord: "Answers",
    description:
      "Here are some common questions. Didn't find what you're looking for? Contact me!",
    items: [
      {
        question: "What technologies do you work with?",
        answer:
          "I primarily work with React, Next.js, TypeScript, and Tailwind CSS for frontend development. For backend needs, I use Node.js, Express, and various databases like PostgreSQL and MongoDB.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Timelines vary by complexity. A landing page takes 1-2 weeks, a full website 3-6 weeks, and a complex web app 2-4 months. I'll provide a detailed timeline during the initial consultation.",
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer:
          "Yes! I offer monthly maintenance packages that include bug fixes, security updates, performance optimization, and minor additions. This ensures your project stays in top shape after launch.",
      },
      {
        question: "What does the 'For Sale' section include?",
        answer:
          "Each template includes full source code, detailed documentation, responsive design for all devices, accessibility compliance, and 30-day email support.",
      },
      {
        question: "Can I see the process before committing?",
        answer:
          "Absolutely! I start every project with a free discovery call to discuss your needs, goals, and timeline. Then I provide a proposal with mood boards, wireframes, and a clear scope of work.",
      },
      {
        question: "What are the payment terms?",
        answer:
          "For project work, I typically require 50% upfront and 50% upon completion. For larger projects, we can arrange milestone payments. For templates, it's a one-time payment with no recurring fees.",
      },
    ],
  },
  footer: {
    brand: "Portfolio",
    brandDescription:
      "We craft playful and unforgettable digital experiences that make users smile.",
    groups: [
      {
        title: "Navigation",
        links: [
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Projects", href: "#projects" },
          { label: "Testimonials", href: "#testimonials" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Twitter", href: "#" },
          { label: "GitHub", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "Dribbble", href: "#" },
        ],
      },
    ],
    madeWith: "Made with",
    andCoffee: "and lots of coffee",
    backToTop: "Back to top",
  },
};

export const translations = { ar, en };
