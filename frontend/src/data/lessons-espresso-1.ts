import { Lesson } from '@/types';

const BOOK_SLUG = 'nuovo-espresso-1';
const AUDIO_BASE = '/books/audio/nuovo-espresso-1';

export const lessonsEspresso1: Lesson[] = [
  // ─── Lesson 1 ─────────────────────────────────────────────────────────────
  {
    id: 1,
    number: 1,
    bookSlug: BOOK_SLUG,
    slug: 'lesson-1',
    pdfUrl: '/books/nuovo-espresso-1.pdf',
    title: 'Ciao! Come ti chiami?',
    titleFa: 'سلام! اسمت چیه؟',
    subtitle: 'Greetings & Introductions',
    subtitleFa: 'احوالپرسی و معرفی',
    overview: 'In questa lezione imparerai a salutare le persone e a presentarti in italiano.',
    overviewFa: 'در این درس یاد می‌گیری چطور به ایتالیایی سلام کنی و خودت را معرفی کنی.',
    objectives: [
      'Say hello and goodbye',
      'Introduce yourself',
      'Ask and answer "What is your name?"',
      'Use formal and informal greetings',
    ],
    objectivesFa: [
      'سلام و خداحافظی کردن',
      'معرفی خودت',
      'پرسیدن و جواب دادن به "اسمت چیه؟"',
      'استفاده از احوالپرسی رسمی و غیررسمی',
    ],
    color: 'from-blue-500 to-cyan-500',
    icon: '👋',
    estimatedMinutes: 45,
    vocabulary: [
      {
        id: 'v1-1', lessonId: 1, word: 'ciao', translation: 'سلام / خداحافظ',
        pronunciation: 'ˈtʃao', exampleIt: 'Ciao, come stai?', exampleFa: 'سلام، حالت چطوره؟',
        difficulty: 'beginner', category: 'greetings',
      },
      {
        id: 'v1-2', lessonId: 1, word: 'buongiorno', translation: 'صبح بخیر / روز بخیر',
        pronunciation: 'bwɔnˈdʒorno', exampleIt: 'Buongiorno, signora!', exampleFa: 'صبح بخیر خانم!',
        difficulty: 'beginner', category: 'greetings',
      },
      {
        id: 'v1-3', lessonId: 1, word: 'buonasera', translation: 'عصر بخیر / شب بخیر',
        pronunciation: 'ˌbwɔnaˈseːra', exampleIt: 'Buonasera a tutti!', exampleFa: 'عصر بخیر به همه!',
        difficulty: 'beginner', category: 'greetings',
      },
      {
        id: 'v1-4', lessonId: 1, word: 'arrivederci', translation: 'خداحافظ (رسمی)',
        pronunciation: 'arriˈveːdertʃi', exampleIt: 'Arrivederci, professore.', exampleFa: 'خداحافظ، استاد.',
        difficulty: 'beginner', category: 'greetings',
      },
      {
        id: 'v1-5', lessonId: 1, word: 'mi chiamo', translation: 'اسم من است',
        pronunciation: 'mi ˈkjaːmo', exampleIt: 'Mi chiamo Luca.', exampleFa: 'اسم من لوکاست.',
        difficulty: 'beginner', category: 'introductions',
      },
      {
        id: 'v1-6', lessonId: 1, word: 'come ti chiami?', translation: 'اسمت چیه؟ (غیررسمی)',
        pronunciation: 'ˈkome ti ˈkjaːmi', exampleIt: 'Come ti chiami?', exampleFa: 'اسمت چیه؟',
        difficulty: 'beginner', category: 'introductions',
      },
      {
        id: 'v1-7', lessonId: 1, word: 'piacere', translation: 'خوشوقتم',
        pronunciation: 'pjaˈtʃeːre', exampleIt: 'Piacere di conoscerti!', exampleFa: 'از آشنایی‌ات خوشوقتم!',
        difficulty: 'beginner', category: 'introductions',
      },
      {
        id: 'v1-8', lessonId: 1, word: 'grazie', translation: 'ممنون',
        pronunciation: 'ˈɡrattsje', exampleIt: 'Grazie mille!', exampleFa: 'خیلی ممنون!',
        difficulty: 'beginner', category: 'courtesy',
      },
      {
        id: 'v1-9', lessonId: 1, word: 'prego', translation: 'خواهش می‌کنم',
        pronunciation: 'ˈpreːɡo', exampleIt: 'Prego, si accomodi.', exampleFa: 'خواهش می‌کنم، بفرمایید.',
        difficulty: 'beginner', category: 'courtesy',
      },
      {
        id: 'v1-10', lessonId: 1, word: 'come stai?', translation: 'حالت چطوره؟ (غیررسمی)',
        pronunciation: 'ˈkome ˈstaːi', exampleIt: 'Ciao! Come stai?', exampleFa: 'سلام! حالت چطوره؟',
        difficulty: 'beginner', category: 'greetings',
      },
    ],
    grammar: [
      {
        id: 'g1-1', lessonId: 1,
        title: 'Subject Pronouns (Pronomi soggetto)',
        titleFa: 'ضمایر فاعلی',
        explanation: 'Italian subject pronouns are often omitted because the verb ending shows who is speaking.',
        explanationFa: 'در ایتالیایی، ضمایر فاعلی اغلب حذف می‌شوند چون پسوند فعل نشان می‌دهد چه کسی صحبت می‌کند.',
        examples: [
          { italian: 'Io mi chiamo Marco.', persian: 'اسم من مارکو هست.' },
          { italian: 'Tu come ti chiami?', persian: 'اسم تو چیه؟' },
          { italian: 'Lei è la professoressa.', persian: 'ایشان استاد هستند.' },
        ],
        commonMistakes: [
          'Don\'t confuse "lei" (she/formal you) with "Lei" (formal you)',
          'Io is rarely used — the verb form already implies it',
        ],
        exercises: [
          {
            id: 'ex1-g1-1', type: 'multiple_choice',
            question: 'What does "Lei" mean in formal Italian?',
            questionFa: '"Lei" در ایتالیایی رسمی به چه معناست؟',
            options: ['She', 'You (formal)', 'Both A and B', 'He'],
            correctAnswer: 'Both A and B',
          },
        ],
      },
      {
        id: 'g1-2', lessonId: 1,
        title: 'The verb "chiamarsi" (to be called)',
        titleFa: 'فعل "chiamarsi" (نامیده شدن)',
        explanation: 'Chiamarsi is a reflexive verb. We use it to say our name.',
        explanationFa: '"Chiamarsi" یک فعل بازتابی است. از آن برای گفتن اسم‌مان استفاده می‌کنیم.',
        examples: [
          { italian: 'Mi chiamo Sofia.', persian: 'اسمم سوفیاست.' },
          { italian: 'Ti chiami Marco?', persian: 'اسمت مارکو هست؟' },
          { italian: 'Si chiama professoressa Rossi.', persian: 'ایشان خانم روسی هستند.' },
        ],
        commonMistakes: [
          'Don\'t say "Io sono Marco" to give your name — use "Mi chiamo"',
          'The reflexive pronoun (mi, ti, si) must match the subject',
        ],
        exercises: [
          {
            id: 'ex1-g2-1', type: 'fill_blank',
            question: 'Complete: ___ chiamo Anna.',
            questionFa: 'جاهای خالی را پر کن: ___ chiamo Anna.',
            correctAnswer: 'Mi',
          },
        ],
      },
    ],
    reading: [
      {
        id: 'r1-1', lessonId: 1,
        title: 'Il primo giorno di scuola',
        titleFa: 'اولین روز مدرسه',
        content: `Marco: Ciao! Mi chiamo Marco. Come ti chiami?
Sofia: Ciao Marco! Mi chiamo Sofia. Piacere!
Marco: Piacere mio, Sofia! Di dove sei?
Sofia: Sono di Roma. E tu?
Marco: Io sono di Milano. Benvenuta a Firenze!
Sofia: Grazie! È una città bellissima.`,
        translation: `مارکو: سلام! اسمم مارکو هست. اسمت چیه؟
سوفیا: سلام مارکو! اسمم سوفیاست. خوشوقتم!
مارکو: منم خوشوقتم، سوفیا! اهل کجایی؟
سوفیا: اهل رُم هستم. تو چطور؟
مارکو: من اهل میلان هستم. خوش اومدی به فلورانس!
سوفیا: ممنون! شهر خیلی قشنگیه.`,
        vocabulary: ['v1-1', 'v1-5', 'v1-7', 'v1-8'],
      },
    ],
    listening: [
      {
        id: 'l1-1', audioUrl: `${AUDIO_BASE}/T_02.mp3`, lessonId: 1,
        title: 'Dialogo: Al bar',
        titleFa: 'مکالمه: در کافه',
        transcript: `Cameriere: Buongiorno! Come si chiama?
Cliente: Mi chiamo Luca Ferrari.
Cameriere: Piacere, signor Ferrari. Cosa desidera?
Cliente: Un caffè, grazie.
Cameriere: Prego!`,
        translation: `گارسون: صبح بخیر! اسمتون چیه؟
مشتری: اسمم لوکا فراری هست.
گارسون: خوشوقتم، آقای فراری. چی می‌خواید؟
مشتری: یه قهوه، ممنون.
گارسون: خواهش می‌کنم!`,
        duration: 45,
      },
    ],
    speaking: [
      {
        id: 'sp1-1', lessonId: 1, type: 'roleplay',
        title: 'First Meeting at University',
        titleFa: 'اولین ملاقات در دانشگاه',
        scenario: 'You are meeting a new classmate on the first day of Italian class.',
        scenarioFa: 'در اولین روز کلاس ایتالیایی با هم‌کلاسی جدیدت آشنا می‌شوی.',
        lines: [
          { speaker: 'Student A', text: 'Ciao! Mi chiamo ___. E tu?', translation: 'سلام! اسمم ___ هست. تو چطور؟' },
          { speaker: 'Student B', text: 'Ciao! Mi chiamo ___. Piacere!', translation: 'سلام! اسمم ___ هست. خوشوقتم!' },
          { speaker: 'Student A', text: 'Piacere mio! Di dove sei?', translation: 'منم خوشوقتم! اهل کجایی؟' },
          { speaker: 'Student B', text: 'Sono di ___. E tu?', translation: 'اهل ___ هستم. تو چطور؟' },
        ],
        tips: ['Use "ciao" with peers', 'Use "buongiorno" with teachers', 'Smile and make eye contact'],
      },
    ],
    exercises: [
      {
        id: 'ex1-1', type: 'multiple_choice',
        question: 'How do you say "Good morning" in Italian?',
        questionFa: 'چطور در ایتالیایی "صبح بخیر" می‌گویید؟',
        options: ['Ciao', 'Buongiorno', 'Buonasera', 'Arrivederci'],
        correctAnswer: 'Buongiorno',
        explanation: 'Buongiorno is used in the morning and early afternoon.',
        explanationFa: 'Buongiorno صبح و اوایل بعدازظهر استفاده می‌شود.',
      },
      {
        id: 'ex1-2', type: 'fill_blank',
        question: 'Mi ___ Marco. (My name is Marco)',
        questionFa: 'Mi ___ Marco. (اسمم مارکو هست)',
        correctAnswer: 'chiamo',
      },
      {
        id: 'ex1-3', type: 'true_false',
        question: '"Arrivederci" is used to say hello.',
        questionFa: '"Arrivederci" برای سلام کردن استفاده می‌شود.',
        options: ['True - درست', 'False - غلط'],
        correctAnswer: 'False - غلط',
        explanation: 'Arrivederci means "goodbye" (formal).',
        explanationFa: 'Arrivederci به معنای "خداحافظ" (رسمی) است.',
      },
      {
        id: 'ex1-4', type: 'matching',
        question: 'Match Italian with Persian: piacere',
        questionFa: 'ایتالیایی را با فارسی جور کن: piacere',
        options: ['خداحافظ', 'خوشوقتم', 'ممنون', 'صبح بخیر'],
        correctAnswer: 'خوشوقتم',
      },
      {
        id: 'ex1-5', type: 'translation',
        question: 'Translate: "Come ti chiami?"',
        questionFa: 'ترجمه کن: "Come ti chiami?"',
        correctAnswer: 'اسمت چیه؟',
      },
    ],
    flashcards: [
      { id: 'fc1-1', lessonId: 1, front: 'ciao', back: 'سلام / خداحافظ', example: 'Ciao, come stai?', pronunciation: 'ˈtʃao', difficulty: 'beginner' },
      { id: 'fc1-2', lessonId: 1, front: 'buongiorno', back: 'صبح بخیر', example: 'Buongiorno, signora!', pronunciation: 'bwɔnˈdʒorno', difficulty: 'beginner' },
      { id: 'fc1-3', lessonId: 1, front: 'mi chiamo', back: 'اسم من است', example: 'Mi chiamo Sofia.', pronunciation: 'mi ˈkjaːmo', difficulty: 'beginner' },
      { id: 'fc1-4', lessonId: 1, front: 'piacere', back: 'خوشوقتم', example: 'Piacere di conoscerti!', pronunciation: 'pjaˈtʃeːre', difficulty: 'beginner' },
      { id: 'fc1-5', lessonId: 1, front: 'grazie', back: 'ممنون', example: 'Grazie mille!', pronunciation: 'ˈɡrattsje', difficulty: 'beginner' },
    ],
  },

  // ─── Lesson 2 ─────────────────────────────────────────────────────────────
  {
    id: 2,
    number: 2,
    bookSlug: BOOK_SLUG,
    slug: 'lesson-2',
    pdfUrl: '/books/nuovo-espresso-1.pdf',
    title: 'Di dove sei?',
    titleFa: 'اهل کجایی؟',
    subtitle: 'Nationalities & Countries',
    subtitleFa: 'ملیت‌ها و کشورها',
    overview: 'Impara a parlare della tua nazionalità e del tuo paese d\'origine.',
    overviewFa: 'یاد بگیر درباره ملیت و کشور خودت صحبت کنی.',
    objectives: [
      'Say where you are from',
      'Name countries and nationalities',
      'Use the verb "essere" (to be)',
      'Learn masculine/feminine adjectives',
    ],
    objectivesFa: [
      'بگو اهل کجایی',
      'نام کشورها و ملیت‌ها را یاد بگیر',
      'فعل "essere" را یاد بگیر',
      'صفت‌های مذکر/مؤنث را یاد بگیر',
    ],
    color: 'from-green-500 to-emerald-500',
    icon: '🌍',
    estimatedMinutes: 50,
    vocabulary: [
      { id: 'v2-1', lessonId: 2, word: 'essere', translation: 'بودن', pronunciation: 'ˈɛssere', exampleIt: 'Sono italiano.', exampleFa: 'من ایتالیایی هستم.', difficulty: 'beginner', category: 'verbs' },
      { id: 'v2-2', lessonId: 2, word: 'italiano/a', translation: 'ایتالیایی', pronunciation: 'itaˈljaːno', exampleIt: 'Sono italiano.', exampleFa: 'من ایتالیایی هستم.', difficulty: 'beginner', category: 'nationalities' },
      { id: 'v2-3', lessonId: 2, word: 'iraniano/a', translation: 'ایرانی', pronunciation: 'iraˈnjaːno', exampleIt: 'Sei iraniana?', exampleFa: 'تو ایرانی هستی؟', difficulty: 'beginner', category: 'nationalities' },
      { id: 'v2-4', lessonId: 2, word: 'l\'Italia', translation: 'ایتالیا', pronunciation: 'iˈtaːlja', exampleIt: 'L\'Italia è bellissima.', exampleFa: 'ایتالیا خیلی قشنگه.', difficulty: 'beginner', category: 'countries' },
      { id: 'v2-5', lessonId: 2, word: 'l\'Iran', translation: 'ایران', pronunciation: 'iˈran', exampleIt: 'Vengo dall\'Iran.', exampleFa: 'از ایران میام.', difficulty: 'beginner', category: 'countries' },
      { id: 'v2-6', lessonId: 2, word: 'di dove sei?', translation: 'اهل کجایی؟', pronunciation: 'di ˈdove ˈsei', exampleIt: 'Di dove sei, Marco?', exampleFa: 'مارکو، اهل کجایی؟', difficulty: 'beginner', category: 'questions' },
      { id: 'v2-7', lessonId: 2, word: 'vengo da', translation: 'من از ... میام', pronunciation: 'ˈveŋɡo da', exampleIt: 'Vengo da Teheran.', exampleFa: 'من از تهران میام.', difficulty: 'beginner', category: 'origins' },
      { id: 'v2-8', lessonId: 2, word: 'abito a', translation: 'من در ... زندگی می‌کنم', pronunciation: 'ˈaːbito a', exampleIt: 'Abito a Milano.', exampleFa: 'در میلان زندگی می‌کنم.', difficulty: 'beginner', category: 'locations' },
    ],
    grammar: [
      {
        id: 'g2-1', lessonId: 2,
        title: 'The verb "essere" (to be)',
        titleFa: 'فعل "essere" (بودن)',
        explanation: 'Essere is one of the most important Italian verbs. It is irregular.',
        explanationFa: '"Essere" یکی از مهم‌ترین افعال ایتالیایی است. این فعل بی‌قاعده است.',
        examples: [
          { italian: 'Io sono italiano.', persian: 'من ایتالیایی هستم.' },
          { italian: 'Tu sei iraniana?', persian: 'تو ایرانی هستی؟' },
          { italian: 'Lei è di Roma.', persian: 'او اهل رُم است.' },
          { italian: 'Noi siamo studenti.', persian: 'ما دانشجو هستیم.' },
        ],
        commonMistakes: [
          'Don\'t confuse "sono" (I am / they are)',
          '"È" needs an accent — don\'t write "e" without it',
        ],
        exercises: [
          { id: 'ex2-g1-1', type: 'fill_blank', question: 'Tu ___ di Milano?', questionFa: 'Tu ___ di Milano?', correctAnswer: 'sei' },
        ],
      },
    ],
    reading: [
      {
        id: 'r2-1', lessonId: 2,
        title: 'Una studentessa internazionale',
        titleFa: 'یه دانشجوی بین‌المللی',
        content: `Ciao! Mi chiamo Parisa. Sono iraniana, ma abito a Roma da due anni. Studio italiano all'università. I miei compagni sono di molti paesi diversi: c'è Marco dall'Italia, Yuki dal Giappone e Ahmed dall'Egitto. Siamo tutti amici!`,
        translation: `سلام! اسمم پاریساست. من ایرانی هستم، اما دو ساله که در رُم زندگی می‌کنم. در دانشگاه ایتالیایی می‌خونم. هم‌کلاسی‌هام از کشورهای مختلفی هستن: مارکو از ایتالیا، یوکی از ژاپن و احمد از مصر. همه‌مون با هم دوستیم!`,
        vocabulary: ['v2-1', 'v2-2', 'v2-3'],
      },
    ],
    listening: [
      {
        id: 'l2-1', audioUrl: `${AUDIO_BASE}/T_09.mp3`, lessonId: 2,
        title: 'Intervista: Di dove sei?',
        titleFa: 'مصاحبه: اهل کجایی؟',
        transcript: `Giornalista: Buongiorno! Di dove sei?
Studente: Sono iraniano, di Teheran.
Giornalista: E abiti qui a Roma?
Studente: Sì, abito a Roma da sei mesi. Studio all'università.
Giornalista: Parli bene l'italiano!
Studente: Grazie, studio molto!`,
        translation: `خبرنگار: صبح بخیر! اهل کجایی؟
دانشجو: ایرانی هستم، از تهران.
خبرنگار: اینجا در رُم زندگی می‌کنی؟
دانشجو: بله، شش ماهه که در رُم زندگی می‌کنم. در دانشگاه درس می‌خونم.
خبرنگار: ایتالیایی‌ات خوبه!
دانشجو: ممنون، خیلی درس می‌خونم!`,
        duration: 52,
      },
    ],
    speaking: [
      {
        id: 'sp2-1', lessonId: 2, type: 'conversation',
        title: 'Where are you from?',
        titleFa: 'اهل کجایی؟',
        scenario: 'Practice asking and answering about nationalities.',
        scenarioFa: 'تمرین پرسیدن و جواب دادن درباره ملیت‌ها.',
        lines: [
          { speaker: 'A', text: 'Di dove sei?', translation: 'اهل کجایی؟' },
          { speaker: 'B', text: 'Sono di ___ . E tu?', translation: 'اهل ___ هستم. تو چطور؟' },
          { speaker: 'A', text: 'Io sono di ___ . Parli italiano?', translation: 'من اهل ___ هستم. ایتالیایی حرف می‌زنی؟' },
          { speaker: 'B', text: 'Sì, un po\'!', translation: 'بله، یه کم!' },
        ],
        tips: ['Practice country names', 'Remember masculine/feminine forms', 'Use "vengo da" for "I come from"'],
      },
    ],
    exercises: [
      { id: 'ex2-1', type: 'multiple_choice', question: 'What is the correct form of "essere" for "tu"?', questionFa: 'شکل صحیح "essere" برای "tu" کدام است؟', options: ['sono', 'sei', 'è', 'siamo'], correctAnswer: 'sei' },
      { id: 'ex2-2', type: 'fill_blank', question: 'Io ___ iraniano.', questionFa: 'Io ___ iraniano.', correctAnswer: 'sono' },
      { id: 'ex2-3', type: 'translation', question: 'Translate: "Where are you from?"', questionFa: 'ترجمه کن: "اهل کجایی؟"', correctAnswer: 'Di dove sei?' },
    ],
    flashcards: [
      { id: 'fc2-1', lessonId: 2, front: 'essere', back: 'بودن', example: 'Sono italiano.', pronunciation: 'ˈɛssere', difficulty: 'beginner' },
      { id: 'fc2-2', lessonId: 2, front: 'di dove sei?', back: 'اهل کجایی؟', example: 'Di dove sei, Marco?', pronunciation: 'di ˈdove ˈsei', difficulty: 'beginner' },
      { id: 'fc2-3', lessonId: 2, front: 'italiano', back: 'ایتالیایی', example: 'Sono italiano.', pronunciation: 'itaˈljaːno', difficulty: 'beginner' },
    ],
  },

  // ─── Lesson 3 ─────────────────────────────────────────────────────────────
  {
    id: 3, number: 3, bookSlug: BOOK_SLUG, slug: 'lesson-3', pdfUrl: '/books/nuovo-espresso-1.pdf',
    title: 'La famiglia',
    titleFa: 'خانواده',
    subtitle: 'Family & Relationships',
    subtitleFa: 'خانواده و روابط',
    overview: 'Impara a parlare della tua famiglia e delle relazioni familiari.',
    overviewFa: 'یاد بگیر درباره خانواده‌ات صحبت کنی.',
    objectives: ['Describe your family', 'Learn family vocabulary', 'Use possessive adjectives', 'Describe relationships'],
    objectivesFa: ['خانواده‌ات را توصیف کن', 'لغات خانواده را یاد بگیر', 'صفت‌های ملکی را یاد بگیر', 'روابط را توصیف کن'],
    color: 'from-pink-500 to-rose-500',
    icon: '👨‍👩‍👧‍👦',
    estimatedMinutes: 55,
    vocabulary: [
      { id: 'v3-1', lessonId: 3, word: 'la famiglia', translation: 'خانواده', pronunciation: 'la faˈmiʎʎa', exampleIt: 'La mia famiglia è grande.', exampleFa: 'خانواده‌ام بزرگه.', difficulty: 'beginner', category: 'family' },
      { id: 'v3-2', lessonId: 3, word: 'il padre', translation: 'پدر', pronunciation: 'il ˈpaːdre', exampleIt: 'Mio padre si chiama Carlo.', exampleFa: 'پدرم اسمش کارلو هست.', difficulty: 'beginner', category: 'family' },
      { id: 'v3-3', lessonId: 3, word: 'la madre', translation: 'مادر', pronunciation: 'la ˈmaːdre', exampleIt: 'Mia madre è medico.', exampleFa: 'مادرم دکتره.', difficulty: 'beginner', category: 'family' },
      { id: 'v3-4', lessonId: 3, word: 'il fratello', translation: 'برادر', pronunciation: 'il fraˈtɛllo', exampleIt: 'Ho un fratello.', exampleFa: 'یه برادر دارم.', difficulty: 'beginner', category: 'family' },
      { id: 'v3-5', lessonId: 3, word: 'la sorella', translation: 'خواهر', pronunciation: 'la soˈrɛlla', exampleIt: 'Mia sorella studia medicina.', exampleFa: 'خواهرم پزشکی می‌خونه.', difficulty: 'beginner', category: 'family' },
      { id: 'v3-6', lessonId: 3, word: 'il marito', translation: 'شوهر', pronunciation: 'il maˈriːto', exampleIt: 'Mio marito è ingegnere.', exampleFa: 'شوهرم مهندسه.', difficulty: 'beginner', category: 'family' },
      { id: 'v3-7', lessonId: 3, word: 'la moglie', translation: 'همسر (زن)', pronunciation: 'la ˈmɔʎʎe', exampleIt: 'Mia moglie è insegnante.', exampleFa: 'همسرم معلمه.', difficulty: 'beginner', category: 'family' },
      { id: 'v3-8', lessonId: 3, word: 'il figlio/la figlia', translation: 'پسر/دختر', pronunciation: 'il ˈfiʎʎo/la ˈfiʎʎa', exampleIt: 'Ho due figli.', exampleFa: 'دو تا بچه دارم.', difficulty: 'beginner', category: 'family' },
    ],
    grammar: [
      {
        id: 'g3-1', lessonId: 3, title: 'Possessive Adjectives (Aggettivi possessivi)', titleFa: 'صفت‌های ملکی',
        explanation: 'Possessive adjectives agree with the noun they modify, not with the owner.',
        explanationFa: 'صفت‌های ملکی با اسمی که توصیف می‌کنند مطابقت دارند، نه با صاحب.',
        examples: [
          { italian: 'mio padre (my father)', persian: 'پدر من' },
          { italian: 'mia madre (my mother)', persian: 'مادر من' },
          { italian: 'il mio amico (my friend - m)', persian: 'دوست پسرم' },
          { italian: 'la mia amica (my friend - f)', persian: 'دوست دخترم' },
        ],
        commonMistakes: [
          'Family members in singular don\'t use the article: "mio padre" NOT "il mio padre"',
          'Exception: "loro" (their) always uses the article',
        ],
        exercises: [
          { id: 'ex3-g1-1', type: 'fill_blank', question: '___ sorella si chiama Anna. (my)', correctAnswer: 'Mia' },
        ],
      },
    ],
    reading: [
      {
        id: 'r3-1', lessonId: 3, title: 'La famiglia di Giulia', titleFa: 'خانواده جولیا',
        content: `Mi chiamo Giulia e ho una famiglia molto numerosa. Mio padre si chiama Roberto e mia madre si chiama Anna. Ho due fratelli: Marco, che ha 25 anni, e Luca, che ha 18 anni. Ho anche una sorella, Chiara, che ha 22 anni. I miei nonni abitano vicino a noi. La domenica mangiamo tutti insieme - è la mia tradizione preferita!`,
        translation: `اسمم جولیاست و خانواده خیلی بزرگی دارم. پدرم اسمش روبرتو و مادرم اسمش آنا هست. دو تا برادر دارم: مارکو که ۲۵ سالشه، و لوکا که ۱۸ سالشه. یه خواهرم هم دارم، کیارا، که ۲۲ سالشه. پدربزرگ و مادربزرگم نزدیک ما زندگی می‌کنن. یکشنبه‌ها همه با هم غذا می‌خوریم - این سنت مورد علاقه‌امه!`,
        vocabulary: ['v3-1', 'v3-2', 'v3-3', 'v3-4', 'v3-5'],
      },
    ],
    listening: [
      {
        id: 'l3-1', audioUrl: `${AUDIO_BASE}/T_16.mp3`, lessonId: 3, title: 'Descrivi la tua famiglia', titleFa: 'خانواده‌ات را توصیف کن',
        transcript: `Intervistatore: Hai una famiglia grande?
Studente: Abbastanza! Ho i miei genitori, un fratello e due sorelle.
Intervistatore: E i nonni?
Studente: I miei nonni paterni abitano a Napoli. I nonni materni sono di Milano.
Intervistatore: Sei sposato?
Studente: No, non ancora. Ma ho una ragazza!`,
        translation: `مصاحبه‌گر: خانواده بزرگی داری؟
دانشجو: نسبتاً! پدر و مادر، یه برادر و دو تا خواهر دارم.
مصاحبه‌گر: پدربزرگ و مادربزرگ‌ها چی؟
دانشجو: پدربزرگ و مادربزرگ پدری‌ام در ناپل زندگی می‌کنن. پدربزرگ و مادربزرگ مادری‌ام از میلان هستن.
مصاحبه‌گر: ازدواج کردی؟
دانشجو: نه، هنوز نه. ولی یه دوست دختر دارم!`,
        duration: 58,
      },
    ],
    speaking: [
      {
        id: 'sp3-1', lessonId: 3, type: 'conversation', title: 'Talking about your family', titleFa: 'صحبت درباره خانواده',
        scenario: 'Describe your family to a new Italian friend.',
        scenarioFa: 'خانواده‌ات را به یه دوست ایتالیایی جدید معرفی کن.',
        lines: [
          { speaker: 'A', text: 'Hai fratelli?', translation: 'برادر یا خواهر داری؟' },
          { speaker: 'B', text: 'Sì, ho ___ fratelli/sorelle.', translation: 'بله، ___ برادر/خواهر دارم.' },
          { speaker: 'A', text: 'Come si chiama tuo padre?', translation: 'پدرت اسمش چیه؟' },
          { speaker: 'B', text: 'Mio padre si chiama ___.', translation: 'پدرم اسمش ___ هست.' },
        ],
        tips: ['No article before singular family nouns', 'Use "Ho" for "I have"'],
      },
    ],
    exercises: [
      { id: 'ex3-1', type: 'multiple_choice', question: 'How do you say "my mother" in Italian?', questionFa: '"مادرم" را به ایتالیایی چطور می‌گویند؟', options: ['il mio madre', 'mia madre', 'la mia madre', 'mio madre'], correctAnswer: 'mia madre' },
      { id: 'ex3-2', type: 'fill_blank', question: 'Ho ___ fratello e due sorelle.', correctAnswer: 'un' },
    ],
    flashcards: [
      { id: 'fc3-1', lessonId: 3, front: 'la famiglia', back: 'خانواده', example: 'La mia famiglia è grande.', pronunciation: 'la faˈmiʎʎa', difficulty: 'beginner' },
      { id: 'fc3-2', lessonId: 3, front: 'il padre', back: 'پدر', example: 'Mio padre si chiama Carlo.', pronunciation: 'il ˈpaːdre', difficulty: 'beginner' },
      { id: 'fc3-3', lessonId: 3, front: 'la madre', back: 'مادر', example: 'Mia madre è medico.', pronunciation: 'la ˈmaːdre', difficulty: 'beginner' },
      { id: 'fc3-4', lessonId: 3, front: 'il fratello', back: 'برادر', example: 'Ho un fratello.', pronunciation: 'il fraˈtɛllo', difficulty: 'beginner' },
    ],
  },

  // ─── Lesson 4 ─────────────────────────────────────────────────────────────
  {
    id: 4, number: 4, bookSlug: BOOK_SLUG, slug: 'lesson-4', pdfUrl: '/books/nuovo-espresso-1.pdf',
    title: 'Al bar',
    titleFa: 'در کافه',
    subtitle: 'Ordering at a Café',
    subtitleFa: 'سفارش دادن در کافه',
    overview: 'Impara a ordinare da bere e da mangiare al bar italiano.',
    overviewFa: 'یاد بگیر در کافه ایتالیایی نوشیدنی و غذا سفارش بدی.',
    objectives: ['Order drinks and snacks', 'Use numbers 1-10', 'Ask for the bill', 'Talk about preferences'],
    objectivesFa: ['نوشیدنی و میان‌وعده سفارش بده', 'اعداد ۱-۱۰ را یاد بگیر', 'صورت‌حساب بخواه', 'درباره ترجیحاتت صحبت کن'],
    color: 'from-amber-500 to-orange-500',
    icon: '☕',
    estimatedMinutes: 50,
    vocabulary: [
      { id: 'v4-1', lessonId: 4, word: 'un caffè', translation: 'یه قهوه', pronunciation: 'un kafˈfɛ', exampleIt: 'Vorrei un caffè, per favore.', exampleFa: 'یه قهوه می‌خوام، لطفاً.', difficulty: 'beginner', category: 'drinks' },
      { id: 'v4-2', lessonId: 4, word: 'un cappuccino', translation: 'یه کاپوچینو', pronunciation: 'un kapputˈtʃiːno', exampleIt: 'Un cappuccino, grazie!', exampleFa: 'یه کاپوچینو، ممنون!', difficulty: 'beginner', category: 'drinks' },
      { id: 'v4-3', lessonId: 4, word: 'un\'acqua', translation: 'یه آب', pronunciation: 'unˈakkwa', exampleIt: 'Un\'acqua naturale, per favore.', exampleFa: 'یه آب معدنی، لطفاً.', difficulty: 'beginner', category: 'drinks' },
      { id: 'v4-4', lessonId: 4, word: 'un cornetto', translation: 'یه کروسان', pronunciation: 'un korˈnetto', exampleIt: 'Un cornetto al cioccolato!', exampleFa: 'یه کروسان شکلاتی!', difficulty: 'beginner', category: 'food' },
      { id: 'v4-5', lessonId: 4, word: 'il conto', translation: 'صورت‌حساب', pronunciation: 'il ˈkonto', exampleIt: 'Il conto, per favore.', exampleFa: 'صورت‌حساب، لطفاً.', difficulty: 'beginner', category: 'restaurant' },
      { id: 'v4-6', lessonId: 4, word: 'vorrei', translation: 'می‌خواهم (مؤدبانه)', pronunciation: 'vorˈrɛi', exampleIt: 'Vorrei un tè, per favore.', exampleFa: 'یه چای می‌خوام، لطفاً.', difficulty: 'beginner', category: 'ordering' },
      { id: 'v4-7', lessonId: 4, word: 'per favore', translation: 'لطفاً', pronunciation: 'per faˈvoːre', exampleIt: 'Il menu, per favore.', exampleFa: 'منو، لطفاً.', difficulty: 'beginner', category: 'courtesy' },
      { id: 'v4-8', lessonId: 4, word: 'quanto costa?', translation: 'چقدر می‌شه؟', pronunciation: 'ˈkwanto ˈkɔsta', exampleIt: 'Quanto costa un cappuccino?', exampleFa: 'یه کاپوچینو چقدر می‌شه؟', difficulty: 'beginner', category: 'money' },
    ],
    grammar: [
      {
        id: 'g4-1', lessonId: 4, title: 'Numbers 1-20 (I numeri)', titleFa: 'اعداد ۱-۲۰',
        explanation: 'Italian numbers from 1-20 must be memorized. From 20 onwards they follow a pattern.',
        explanationFa: 'اعداد ۱-۲۰ ایتالیایی باید حفظ شوند. از ۲۰ به بعد از یک الگو پیروی می‌کنند.',
        examples: [
          { italian: 'uno, due, tre, quattro, cinque', persian: 'یک، دو، سه، چهار، پنج' },
          { italian: 'sei, sette, otto, nove, dieci', persian: 'شش، هفت، هشت، نه، ده' },
          { italian: 'undici, dodici, tredici, quattordici, quindici', persian: 'یازده، دوازده، سیزده، چهارده، پانزده' },
        ],
        commonMistakes: [
          '"Uno" becomes "un" before masculine nouns: "un caffè"',
          '"Una" before feminine nouns: "una pizza"',
        ],
        exercises: [
          { id: 'ex4-g1-1', type: 'multiple_choice', question: 'How do you say "8" in Italian?', options: ['sette', 'nove', 'otto', 'sei'], correctAnswer: 'otto' },
        ],
      },
      {
        id: 'g4-2', lessonId: 4, title: 'Condizionale: Vorrei', titleFa: 'شرطی: Vorrei',
        explanation: '"Vorrei" is the polite way to order. It means "I would like."',
        explanationFa: '"Vorrei" روش مؤدبانه سفارش دادن است. به معنای "می‌خواستم" است.',
        examples: [
          { italian: 'Vorrei un caffè.', persian: 'یه قهوه می‌خوام.' },
          { italian: 'Vorrei un tavolo per due.', persian: 'یه میز برای دو نفر می‌خوام.' },
        ],
        commonMistakes: [
          'Don\'t say "Voglio" (I want) — it sounds rude in restaurants',
          'Always say "per favore" to be extra polite',
        ],
        exercises: [
          { id: 'ex4-g2-1', type: 'fill_blank', question: '___ un cappuccino, per favore. (I would like)', correctAnswer: 'Vorrei' },
        ],
      },
    ],
    reading: [
      {
        id: 'r4-1', lessonId: 4, title: 'Al bar con gli amici', titleFa: 'در کافه با دوستا',
        content: `Marco e Sofia sono al bar. Il cameriere si avvicina.
Cameriere: Buongiorno! Cosa prendete?
Marco: Io vorrei un cappuccino e un cornetto al cioccolato.
Sofia: Per me, un caffè macchiato e una brioche, per favore.
Cameriere: Subito! Altro?
Marco: No, grazie. Quanto viene?
Cameriere: Cinque euro e cinquanta centesimi.
Marco: Ecco a lei. Grazie mille!
Cameriere: Prego, buona giornata!`,
        translation: `مارکو و سوفیا در کافه هستند. گارسون نزدیک می‌شود.
گارسون: صبح بخیر! چی می‌خورید؟
مارکو: من یه کاپوچینو و یه کروسان شکلاتی می‌خوام.
سوفیا: برای من، یه قهوه ماکیاتو و یه بریوش، لطفاً.
گارسون: همین الان! چیز دیگه‌ای؟
مارکو: نه، ممنون. چقدر می‌شه؟
گارسون: پنج یورو و پنجاه سنت.
مارکو: بفرمایید. خیلی ممنون!
گارسون: خواهش می‌کنم، روز خوبی داشته باشید!`,
        vocabulary: ['v4-1', 'v4-2', 'v4-4', 'v4-5', 'v4-6', 'v4-7'],
      },
    ],
    listening: [
      {
        id: 'l4-1', audioUrl: `${AUDIO_BASE}/T_23.mp3`, lessonId: 4, title: 'Ordine al bar', titleFa: 'سفارش در کافه',
        transcript: `Cliente: Buonasera! Vorrei un tè al limone, per favore.
Barista: Certo! Desidera altro?
Cliente: Sì, un tramezzino al prosciutto.
Barista: Subito. Si accomodi pure.
Cliente: Grazie. Quanto costa tutto?
Barista: Quattro euro in tutto.
Cliente: Ecco cinque euro.
Barista: Un euro di resto. Grazie e buona serata!`,
        translation: `مشتری: عصر بخیر! یه چای لیمو می‌خوام، لطفاً.
بار: البته! چیز دیگه‌ای می‌خواید؟
مشتری: بله، یه ساندویچ ژامبون.
بار: همین الان. بفرمایید بشینید.
مشتری: ممنون. همه چیز چقدر می‌شه؟
بار: روی هم چهار یورو.
مشتری: بفرمایید پنج یورو.
بار: یه یورو خرده‌ات. ممنون و عصر بخیر!`,
        duration: 62,
      },
    ],
    speaking: [
      {
        id: 'sp4-1', lessonId: 4, type: 'roleplay', title: 'At the Italian Café', titleFa: 'در کافه ایتالیایی',
        scenario: 'You are a customer at an Italian bar. Order your favourite drink and snack.',
        scenarioFa: 'تو مشتری یه کافه ایتالیایی هستی. نوشیدنی و میان‌وعده مورد علاقه‌ات را سفارش بده.',
        lines: [
          { speaker: 'Barista', text: 'Buongiorno! Cosa prende?', translation: 'صبح بخیر! چی می‌خورید؟' },
          { speaker: 'You', text: 'Vorrei ___, per favore.', translation: 'یه ___ می‌خوام، لطفاً.' },
          { speaker: 'Barista', text: 'Altro?', translation: 'چیز دیگه‌ای؟' },
          { speaker: 'You', text: 'No grazie. Il conto, per favore.', translation: 'نه ممنون. صورت‌حساب، لطفاً.' },
        ],
        tips: ['Always say "per favore"', 'Use "vorrei" not "voglio"', 'Say "grazie" when you receive your order'],
      },
    ],
    exercises: [
      { id: 'ex4-1', type: 'multiple_choice', question: 'What is the polite way to order in Italian?', options: ['Voglio', 'Vorrei', 'Dammi', 'Prendo'], correctAnswer: 'Vorrei' },
      { id: 'ex4-2', type: 'fill_blank', question: 'Il ___, per favore. (the bill)', correctAnswer: 'conto' },
    ],
    flashcards: [
      { id: 'fc4-1', lessonId: 4, front: 'vorrei', back: 'می‌خواستم (مؤدبانه)', example: 'Vorrei un caffè.', pronunciation: 'vorˈrɛi', difficulty: 'beginner' },
      { id: 'fc4-2', lessonId: 4, front: 'il conto', back: 'صورت‌حساب', example: 'Il conto, per favore.', pronunciation: 'il ˈkonto', difficulty: 'beginner' },
      { id: 'fc4-3', lessonId: 4, front: 'per favore', back: 'لطفاً', example: 'Un caffè per favore.', pronunciation: 'per faˈvoːre', difficulty: 'beginner' },
    ],
  },

  // ─── Lesson 5 ─────────────────────────────────────────────────────────────
  {
    id: 5, number: 5, bookSlug: BOOK_SLUG, slug: 'lesson-5', pdfUrl: '/books/nuovo-espresso-1.pdf',
    title: 'Che ore sono?',
    titleFa: 'ساعت چنده؟',
    subtitle: 'Time & Daily Routine',
    subtitleFa: 'ساعت و برنامه روزانه',
    overview: 'Impara a dire l\'ora e a parlare della tua routine quotidiana.',
    overviewFa: 'یاد بگیر ساعت بگی و درباره برنامه روزانه‌ات صحبت کنی.',
    objectives: ['Tell the time', 'Describe your daily routine', 'Use reflexive verbs', 'Talk about frequency'],
    objectivesFa: ['ساعت بگو', 'برنامه روزانه‌ات را توصیف کن', 'افعال بازتابی را یاد بگیر', 'درباره تکرار صحبت کن'],
    color: 'from-violet-500 to-purple-500',
    icon: '🕐',
    estimatedMinutes: 55,
    vocabulary: [
      { id: 'v5-1', lessonId: 5, word: 'che ore sono?', translation: 'ساعت چنده؟', pronunciation: 'ke ˈoːre ˈsoːno', exampleIt: 'Scusa, che ore sono?', exampleFa: 'ببخشید، ساعت چنده؟', difficulty: 'beginner', category: 'time' },
      { id: 'v5-2', lessonId: 5, word: 'sono le...', translation: 'ساعت ... هست', pronunciation: 'ˈsoːno le', exampleIt: 'Sono le tre.', exampleFa: 'ساعت سه هست.', difficulty: 'beginner', category: 'time' },
      { id: 'v5-3', lessonId: 5, word: 'la mattina', translation: 'صبح', pronunciation: 'la matˈtiːna', exampleIt: 'La mattina faccio colazione.', exampleFa: 'صبح صبحانه می‌خورم.', difficulty: 'beginner', category: 'time' },
      { id: 'v5-4', lessonId: 5, word: 'il pomeriggio', translation: 'بعدازظهر', pronunciation: 'il pomeˈriddʒo', exampleIt: 'Il pomeriggio studio.', exampleFa: 'بعدازظهر درس می‌خونم.', difficulty: 'beginner', category: 'time' },
      { id: 'v5-5', lessonId: 5, word: 'la sera', translation: 'شب / عصر', pronunciation: 'la ˈseːra', exampleIt: 'La sera guardo la televisione.', exampleFa: 'شب تلویزیون نگاه می‌کنم.', difficulty: 'beginner', category: 'time' },
      { id: 'v5-6', lessonId: 5, word: 'svegliarsi', translation: 'بیدار شدن', pronunciation: 'zveʎˈʎaːrsi', exampleIt: 'Mi sveglio alle sette.', exampleFa: 'ساعت هفت بیدار می‌شم.', difficulty: 'beginner', category: 'routine' },
      { id: 'v5-7', lessonId: 5, word: 'fare colazione', translation: 'صبحانه خوردن', pronunciation: 'ˈfaːre kolatˈtsjoːne', exampleIt: 'Faccio colazione alle otto.', exampleFa: 'ساعت هشت صبحانه می‌خورم.', difficulty: 'beginner', category: 'routine' },
      { id: 'v5-8', lessonId: 5, word: 'andare a letto', translation: 'به رختخواب رفتن', pronunciation: 'anˈdaːre a ˈlɛtto', exampleIt: 'Vado a letto a mezzanotte.', exampleFa: 'نیمه‌شب می‌رم بخوابم.', difficulty: 'beginner', category: 'routine' },
    ],
    grammar: [
      {
        id: 'g5-1', lessonId: 5, title: 'Reflexive Verbs (Verbi riflessivi)', titleFa: 'افعال بازتابی',
        explanation: 'Reflexive verbs describe actions you do to yourself. They use reflexive pronouns.',
        explanationFa: 'افعال بازتابی اعمالی را توصیف می‌کنند که به خودت انجام می‌دهی. از ضمایر بازتابی استفاده می‌کنند.',
        examples: [
          { italian: 'Mi sveglio alle 7. (I wake up at 7)', persian: 'ساعت ۷ بیدار می‌شم.' },
          { italian: 'Ti alzi tardi? (Do you get up late?)', persian: 'دیر بیدار می‌شی؟' },
          { italian: 'Si chiama Marco. (He is called Marco)', persian: 'اسمش مارکو هست.' },
          { italian: 'Ci vediamo domani! (See you tomorrow!)', persian: 'فردا می‌بینمت!' },
        ],
        commonMistakes: [
          'The reflexive pronoun comes before the conjugated verb',
          'With infinitives, the pronoun attaches to the end: "svegliarsi"',
        ],
        exercises: [
          { id: 'ex5-g1-1', type: 'fill_blank', question: '___ sveglio alle sette. (I wake up)', correctAnswer: 'Mi' },
        ],
      },
    ],
    reading: [
      {
        id: 'r5-1', lessonId: 5, title: 'La giornata di Alessia', titleFa: 'روز الساندرا',
        content: `Mi chiamo Alessia e questa è la mia giornata tipica. Mi sveglio alle sette di mattina. Faccio la doccia e poi faccio colazione: un cappuccino e un cornetto. Alle otto e mezza vado all'università. Le lezioni finiscono alle due del pomeriggio. Dopo pranzo, mi riposo un po' e poi studio. La sera, ceno con la mia famiglia. Vado a letto verso le undici.`,
        translation: `اسمم الساندرا هست و این یه روز معمولی منه. ساعت هفت صبح بیدار می‌شم. دوش می‌گیرم و بعد صبحانه می‌خورم: یه کاپوچینو و یه کروسان. ساعت هشت و نیم می‌رم دانشگاه. کلاس‌ها ساعت دو بعدازظهر تموم می‌شن. بعد از ناهار، یه کم استراحت می‌کنم و بعد درس می‌خونم. شب با خانواده‌ام شام می‌خورم. حدود ساعت یازده می‌رم بخوابم.`,
        vocabulary: ['v5-1', 'v5-3', 'v5-4', 'v5-5', 'v5-6', 'v5-7'],
      },
    ],
    listening: [
      {
        id: 'l5-1', audioUrl: `${AUDIO_BASE}/T_30.mp3`, lessonId: 5, title: 'Che ore sono?', titleFa: 'ساعت چنده؟',
        transcript: `A: Scusa, che ore sono?
B: Sono le dieci e venti.
A: Grazie! Ho lezione alle dieci e mezza.
B: Allora hai dieci minuti!
A: Oddio, devo correre! Ciao!
B: In bocca al lupo!`,
        translation: `A: ببخشید، ساعت چنده؟
B: ساعت ده و بیسته.
A: ممنون! کلاسم ساعت ده و نیمه.
B: پس ده دقیقه داری!
A: وای خدا، باید بدوم! داری!
B: موفق باشی!`,
        duration: 40,
      },
    ],
    speaking: [
      {
        id: 'sp5-1', lessonId: 5, type: 'conversation', title: 'Asking for the time', titleFa: 'پرسیدن ساعت',
        scenario: 'Practice asking for and telling the time in Italian.',
        scenarioFa: 'تمرین پرسیدن و گفتن ساعت به ایتالیایی.',
        lines: [
          { speaker: 'A', text: 'Scusa, che ore sono?', translation: 'ببخشید، ساعت چنده؟' },
          { speaker: 'B', text: 'Sono le ___.', translation: 'ساعت ___ هست.' },
          { speaker: 'A', text: 'Grazie mille!', translation: 'خیلی ممنون!' },
          { speaker: 'B', text: 'Prego!', translation: 'خواهش می‌کنم!' },
        ],
        tips: ['Use "È l\'una" for 1 o\'clock', 'Use "Sono le..." for all other times', 'Add "e mezza" for half past'],
      },
    ],
    exercises: [
      { id: 'ex5-1', type: 'multiple_choice', question: 'How do you say "It\'s 3 o\'clock" in Italian?', options: ['È le tre', 'Sono le tre', 'Ho le tre', 'Fa le tre'], correctAnswer: 'Sono le tre' },
      { id: 'ex5-2', type: 'fill_blank', question: 'Mi ___ alle sette. (I wake up)', correctAnswer: 'sveglio' },
    ],
    flashcards: [
      { id: 'fc5-1', lessonId: 5, front: 'che ore sono?', back: 'ساعت چنده؟', example: 'Scusa, che ore sono?', pronunciation: 'ke ˈoːre ˈsoːno', difficulty: 'beginner' },
      { id: 'fc5-2', lessonId: 5, front: 'la mattina', back: 'صبح', example: 'La mattina faccio colazione.', pronunciation: 'la matˈtiːna', difficulty: 'beginner' },
      { id: 'fc5-3', lessonId: 5, front: 'svegliarsi', back: 'بیدار شدن', example: 'Mi sveglio alle sette.', pronunciation: 'zveʎˈʎaːrsi', difficulty: 'beginner' },
    ],
  },

  // ─── Lessons 6-10 (compact but complete) ─────────────────────────────────
  {
    id: 6, number: 6, bookSlug: BOOK_SLUG, slug: 'lesson-6', pdfUrl: '/books/nuovo-espresso-1.pdf',
    title: 'Dove abiti?',
    titleFa: 'کجا زندگی می‌کنی؟',
    subtitle: 'Home & City',
    subtitleFa: 'خانه و شهر',
    overview: 'Descrivi la tua casa e il tuo quartiere.',
    overviewFa: 'خانه و محله‌ات را توصیف کن.',
    objectives: ['Describe your home', 'Talk about your neighborhood', 'Use prepositions of place', 'Give directions'],
    objectivesFa: ['خانه‌ات را توصیف کن', 'درباره محله‌ات صحبت کن', 'حروف اضافه مکان را یاد بگیر', 'مسیر نشان بده'],
    color: 'from-teal-500 to-green-500',
    icon: '🏠',
    estimatedMinutes: 55,
    vocabulary: [
      { id: 'v6-1', lessonId: 6, word: 'la casa', translation: 'خانه', pronunciation: 'la ˈkaːza', exampleIt: 'La mia casa è grande.', exampleFa: 'خانه‌ام بزرگه.', difficulty: 'beginner', category: 'home' },
      { id: 'v6-2', lessonId: 6, word: 'il quartiere', translation: 'محله', pronunciation: 'il kwarˈtjɛːre', exampleIt: 'Il mio quartiere è tranquillo.', exampleFa: 'محله‌ام آرومه.', difficulty: 'beginner', category: 'city' },
      { id: 'v6-3', lessonId: 6, word: 'vicino a', translation: 'نزدیک به', pronunciation: 'viˈtʃiːno a', exampleIt: 'Abito vicino al parco.', exampleFa: 'نزدیک پارک زندگی می‌کنم.', difficulty: 'beginner', category: 'prepositions' },
      { id: 'v6-4', lessonId: 6, word: 'lontano da', translation: 'دور از', pronunciation: 'lonˈtaːno da', exampleIt: 'Sono lontano dal centro.', exampleFa: 'از مرکز شهر دورم.', difficulty: 'beginner', category: 'prepositions' },
      { id: 'v6-5', lessonId: 6, word: 'a destra', translation: 'سمت راست', pronunciation: 'a ˈdɛstra', exampleIt: 'Gira a destra!', exampleFa: 'دور بزن سمت راست!', difficulty: 'beginner', category: 'directions' },
      { id: 'v6-6', lessonId: 6, word: 'a sinistra', translation: 'سمت چپ', pronunciation: 'a siˈnistra', exampleIt: 'È a sinistra del bar.', exampleFa: 'سمت چپ کافه هست.', difficulty: 'beginner', category: 'directions' },
    ],
    grammar: [
      {
        id: 'g6-1', lessonId: 6, title: 'Prepositions + Articles (Preposizioni articolate)', titleFa: 'حروف اضافه + حروف تعریف',
        explanation: 'In Italian, prepositions combine with definite articles to form contractions.',
        explanationFa: 'در ایتالیایی، حروف اضافه با حروف تعریف معین ترکیب می‌شوند.',
        examples: [
          { italian: 'a + il = al (al bar)', persian: 'در کافه' },
          { italian: 'di + il = del (del parco)', persian: 'از پارک' },
          { italian: 'in + il = nel (nel centro)', persian: 'در مرکز' },
        ],
        commonMistakes: ['Don\'t forget contractions — "a il" is wrong, "al" is correct'],
        exercises: [
          { id: 'ex6-g1-1', type: 'fill_blank', question: 'Vado ___ bar. (a + il)', correctAnswer: 'al' },
        ],
      },
    ],
    reading: [
      {
        id: 'r6-1', lessonId: 6, title: 'Il mio appartamento', titleFa: 'آپارتمان من',
        content: `Abito in un appartamento in centro. È al terzo piano. Ha tre stanze: un soggiorno, una camera da letto e uno studio. La cucina è piccola ma moderna. Il bagno è grande con la vasca. Dal balcone si vede tutta la città. Amo il mio quartiere perché è vicino a tutto: al supermercato, alla farmacia e alla metropolitana.`,
        translation: `در یه آپارتمان در مرکز شهر زندگی می‌کنم. طبقه سومه. سه تا اتاق داره: یه اتاق نشیمن، یه اتاق خواب و یه دفتر. آشپزخانه کوچیکه ولی مدرنه. حمام بزرگه با وانه. از بالکن می‌شه همه شهر را دید. محله‌ام را دوست دارم چون به همه چیز نزدیکه: سوپرمارکت، داروخانه و مترو.`,
        vocabulary: ['v6-1', 'v6-2', 'v6-3'],
      },
    ],
    listening: [
      {
        id: 'l6-1', audioUrl: `${AUDIO_BASE}/T_37.mp3`, lessonId: 6, title: 'Dov\'è la farmacia?', titleFa: 'داروخانه کجاست؟',
        transcript: `Turista: Scusi, dov'è la farmacia più vicina?
Passante: È in Via Roma, a destra della banca.
Turista: È lontano?
Passante: No, cinque minuti a piedi. Prenda questa strada, giri a destra al semaforo.
Turista: Grazie mille!
Passante: Prego, buona giornata!`,
        translation: `توریست: ببخشید، نزدیک‌ترین داروخانه کجاست؟
رهگذر: در خیابان رُم هست، سمت راست بانک.
توریست: دوره؟
رهگذر: نه، پنج دقیقه پیاده. این خیابون را برو، سر چراغ بپیچ سمت راست.
توریست: خیلی ممنون!
رهگذر: خواهش می‌کنم، روز بخیر!`,
        duration: 55,
      },
    ],
    speaking: [
      {
        id: 'sp6-1', lessonId: 6, type: 'conversation', title: 'Asking for Directions', titleFa: 'پرسیدن مسیر',
        scenario: 'You are lost in an Italian city. Ask for directions to the train station.',
        scenarioFa: 'در یه شهر ایتالیایی گم شدی. برای ایستگاه قطار مسیر بپرس.',
        lines: [
          { speaker: 'You', text: 'Scusi, dov\'è la stazione?', translation: 'ببخشید، ایستگاه کجاست؟' },
          { speaker: 'Local', text: 'È dritto, poi a sinistra.', translation: 'مستقیم برو، بعد سمت چپ.' },
          { speaker: 'You', text: 'È lontano?', translation: 'دوره؟' },
          { speaker: 'Local', text: 'No, dieci minuti a piedi.', translation: 'نه، ده دقیقه پیاده.' },
        ],
        tips: ['Use "Scusi" for formal, "Scusa" for informal', '"A piedi" = on foot', '"In macchina" = by car'],
      },
    ],
    exercises: [
      { id: 'ex6-1', type: 'multiple_choice', question: '"a + il" = ?', options: ['ali', 'al', 'all', 'ail'], correctAnswer: 'al' },
    ],
    flashcards: [
      { id: 'fc6-1', lessonId: 6, front: 'la casa', back: 'خانه', example: 'La mia casa è grande.', pronunciation: 'la ˈkaːza', difficulty: 'beginner' },
      { id: 'fc6-2', lessonId: 6, front: 'vicino a', back: 'نزدیک به', example: 'Abito vicino al parco.', pronunciation: 'viˈtʃiːno a', difficulty: 'beginner' },
    ],
  },

  {
    id: 7, number: 7, bookSlug: BOOK_SLUG, slug: 'lesson-7', pdfUrl: '/books/nuovo-espresso-1.pdf',
    title: 'Cosa fai nel tempo libero?',
    titleFa: 'وقت آزادت چی‌کار می‌کنی؟',
    subtitle: 'Hobbies & Free Time',
    subtitleFa: 'سرگرمی‌ها و اوقات فراغت',
    overview: 'Parla dei tuoi hobby e delle attività del tempo libero.',
    overviewFa: 'درباره سرگرمی‌ها و فعالیت‌های وقت آزادت صحبت کن.',
    objectives: ['Talk about hobbies', 'Use regular -are, -ere, -ire verbs', 'Express likes and dislikes', 'Talk about sports'],
    objectivesFa: ['درباره سرگرمی‌ها صحبت کن', 'افعال منظم -are, -ere, -ire را یاد بگیر', 'دوست داشتن و نداشتن را بیان کن', 'درباره ورزش صحبت کن'],
    color: 'from-orange-500 to-red-500',
    icon: '⚽',
    estimatedMinutes: 60,
    vocabulary: [
      { id: 'v7-1', lessonId: 7, word: 'giocare a calcio', translation: 'فوتبال بازی کردن', pronunciation: 'dʒoˈkaːre a ˈkaltʃo', exampleIt: 'Gioco a calcio ogni settimana.', exampleFa: 'هر هفته فوتبال بازی می‌کنم.', difficulty: 'beginner', category: 'sports' },
      { id: 'v7-2', lessonId: 7, word: 'leggere', translation: 'خواندن', pronunciation: 'ˈlɛddʒere', exampleIt: 'Mi piace leggere romanzi.', exampleFa: 'دوست دارم رمان بخونم.', difficulty: 'beginner', category: 'hobbies' },
      { id: 'v7-3', lessonId: 7, word: 'ascoltare musica', translation: 'موسیقی گوش دادن', pronunciation: 'askolˈtaːre ˈmuːzika', exampleIt: 'Ascolto musica ogni giorno.', exampleFa: 'هر روز موسیقی گوش می‌دم.', difficulty: 'beginner', category: 'hobbies' },
      { id: 'v7-4', lessonId: 7, word: 'mi piace', translation: 'دوست دارم', pronunciation: 'mi ˈpjaːtʃe', exampleIt: 'Mi piace la pizza!', exampleFa: 'پیتزا دوست دارم!', difficulty: 'beginner', category: 'preferences' },
      { id: 'v7-5', lessonId: 7, word: 'non mi piace', translation: 'دوست ندارم', pronunciation: 'non mi ˈpjaːtʃe', exampleIt: 'Non mi piace alzarmi presto.', exampleFa: 'دوست ندارم زود بیدار شم.', difficulty: 'beginner', category: 'preferences' },
      { id: 'v7-6', lessonId: 7, word: 'fare sport', translation: 'ورزش کردن', pronunciation: 'ˈfaːre ˈspɔrt', exampleIt: 'Faccio sport tre volte a settimana.', exampleFa: 'هفته‌ای سه بار ورزش می‌کنم.', difficulty: 'beginner', category: 'sports' },
    ],
    grammar: [
      {
        id: 'g7-1', lessonId: 7, title: 'Regular Verbs: -are, -ere, -ire', titleFa: 'افعال منظم: -are, -ere, -ire',
        explanation: 'Italian verbs belong to three conjugation groups based on their infinitive ending.',
        explanationFa: 'افعال ایتالیایی بر اساس پسوند مصدرشان به سه گروه تقسیم می‌شوند.',
        examples: [
          { italian: 'parlare → parlo, parli, parla, parliamo, parlate, parlano', persian: 'حرف زدن' },
          { italian: 'leggere → leggo, leggi, legge, leggiamo, leggete, leggono', persian: 'خواندن' },
          { italian: 'dormire → dormo, dormi, dorme, dormiamo, dormite, dormono', persian: 'خوابیدن' },
        ],
        commonMistakes: ['Don\'t mix up the three conjugation patterns', '"Fare" is irregular — faccio, fai, fa, facciamo, fate, fanno'],
        exercises: [
          { id: 'ex7-g1-1', type: 'fill_blank', question: 'Io ___ (parlare) italiano.', correctAnswer: 'parlo' },
        ],
      },
    ],
    reading: [
      {
        id: 'r7-1', lessonId: 7, title: 'I miei hobby', titleFa: 'سرگرمی‌های من',
        content: `Nel tempo libero, mi piace fare molte cose. Gioco a calcio con i miei amici il sabato. Durante la settimana, ascolto musica e leggo libri. Mi piace molto la fotografia - ho una macchina fotografica professionale. Non mi piace guardare troppa televisione. Preferisco uscire con gli amici o andare in palestra. Il venerdì sera, di solito vado al cinema o a teatro.`,
        translation: `وقت آزادم، دوست دارم کارهای زیادی انجام بدم. شنبه‌ها با دوستام فوتبال بازی می‌کنم. در طول هفته، موسیقی گوش می‌دم و کتاب می‌خونم. عکاسی را خیلی دوست دارم - یه دوربین حرفه‌ای دارم. دوست ندارم زیاد تلویزیون نگاه کنم. ترجیح می‌دم با دوستام بیرون برم یا به باشگاه برم. جمعه شب‌ها معمولاً می‌رم سینما یا تئاتر.`,
        vocabulary: ['v7-1', 'v7-2', 'v7-3', 'v7-4'],
      },
    ],
    listening: [
      {
        id: 'l7-1', audioUrl: `${AUDIO_BASE}/T_44.mp3`, lessonId: 7, title: 'Cosa fai nel weekend?', titleFa: 'آخر هفته چی‌کار می‌کنی؟',
        transcript: `A: Cosa fai di solito nel weekend?
B: Il sabato mattina vado in palestra. Il pomeriggio gioco a tennis con mio fratello.
A: E la domenica?
B: La domenica resto a casa. Leggo, guardo film, cucino. E tu?
A: Io di solito vado in montagna o in bici. Mi piace stare all'aria aperta.
B: Che bello! Anch'io voglio provare!`,
        translation: `A: معمولاً آخر هفته چی‌کار می‌کنی؟
B: شنبه صبح می‌رم باشگاه. بعدازظهر با برادرم تنیس بازی می‌کنم.
A: یکشنبه چی؟
B: یکشنبه خونه می‌مونم. می‌خونم، فیلم می‌بینم، آشپزی می‌کنم. تو چطور؟
A: من معمولاً می‌رم کوه یا دوچرخه‌سواری. دوست دارم در هوای آزاد باشم.
B: چه خوب! منم می‌خوام امتحان کنم!`,
        duration: 68,
      },
    ],
    speaking: [
      {
        id: 'sp7-1', lessonId: 7, type: 'conversation', title: 'Talking about hobbies', titleFa: 'صحبت درباره سرگرمی‌ها',
        scenario: 'Ask your Italian friend about their hobbies and share yours.',
        scenarioFa: 'از دوست ایتالیایی‌ات درباره سرگرمی‌هاش بپرس و سرگرمی‌های خودت را هم بگو.',
        lines: [
          { speaker: 'A', text: 'Cosa ti piace fare nel tempo libero?', translation: 'وقت آزادت چی دوست داری انجام بدی؟' },
          { speaker: 'B', text: 'Mi piace ___. E a te?', translation: 'دوست دارم ___. تو چطور؟' },
          { speaker: 'A', text: 'Anch\'io! / Invece, io preferisco ___.', translation: 'منم! / من به جاش ___ ترجیح می‌دم.' },
        ],
        tips: ['Mi piace + infinitive verb', 'Mi piacciono + plural noun', '"Anch\'io" = "me too"'],
      },
    ],
    exercises: [
      { id: 'ex7-1', type: 'fill_blank', question: 'Mi ___ la pizza. (I like)', correctAnswer: 'piace' },
      { id: 'ex7-2', type: 'multiple_choice', question: 'Which is an -ire verb?', options: ['parlare', 'leggere', 'dormire', 'mangiare'], correctAnswer: 'dormire' },
    ],
    flashcards: [
      { id: 'fc7-1', lessonId: 7, front: 'mi piace', back: 'دوست دارم', example: 'Mi piace la pizza!', pronunciation: 'mi ˈpjaːtʃe', difficulty: 'beginner' },
      { id: 'fc7-2', lessonId: 7, front: 'leggere', back: 'خواندن', example: 'Mi piace leggere.', pronunciation: 'ˈlɛddʒere', difficulty: 'beginner' },
    ],
  },

  {
    id: 8, number: 8, bookSlug: BOOK_SLUG, slug: 'lesson-8', pdfUrl: '/books/nuovo-espresso-1.pdf',
    title: 'Andiamo a fare la spesa!',
    titleFa: 'بریم خرید!',
    subtitle: 'Shopping & Food',
    subtitleFa: 'خرید و غذا',
    overview: 'Impara a fare la spesa e a comprare cibo al mercato.',
    overviewFa: 'یاد بگیر خرید کنی و در بازار غذا بخری.',
    objectives: ['Shop for groceries', 'Use quantity expressions', 'Understand Italian food culture', 'Use partitive articles'],
    objectivesFa: ['مواد غذایی بخر', 'عبارات مقدار را یاد بگیر', 'فرهنگ غذایی ایتالیایی را بفهم', 'حروف تعریف تبعیضی را یاد بگیر'],
    color: 'from-yellow-500 to-amber-500',
    icon: '🛒',
    estimatedMinutes: 55,
    vocabulary: [
      { id: 'v8-1', lessonId: 8, word: 'il mercato', translation: 'بازار', pronunciation: 'il merˈkaːto', exampleIt: 'Vado al mercato ogni mattina.', exampleFa: 'هر صبح می‌رم بازار.', difficulty: 'beginner', category: 'shopping' },
      { id: 'v8-2', lessonId: 8, word: 'quanto costa?', translation: 'چقدر می‌شه؟', pronunciation: 'ˈkwanto ˈkɔsta', exampleIt: 'Quanto costano queste mele?', exampleFa: 'این سیب‌ها چقدر می‌شن؟', difficulty: 'beginner', category: 'shopping' },
      { id: 'v8-3', lessonId: 8, word: 'un chilo di', translation: 'یه کیلو از', pronunciation: 'un ˈkiːlo di', exampleIt: 'Un chilo di pomodori, per favore.', exampleFa: 'یه کیلو گوجه، لطفاً.', difficulty: 'beginner', category: 'quantities' },
      { id: 'v8-4', lessonId: 8, word: 'mezzo chilo', translation: 'نیم کیلو', pronunciation: 'ˈmɛddzo ˈkiːlo', exampleIt: 'Mezzo chilo di mozzarella.', exampleFa: 'نیم کیلو موتزارلا.', difficulty: 'beginner', category: 'quantities' },
      { id: 'v8-5', lessonId: 8, word: 'la verdura', translation: 'سبزیجات', pronunciation: 'la verˈduːra', exampleIt: 'La verdura fresca è in offerta.', exampleFa: 'سبزیجات تازه حراجه.', difficulty: 'beginner', category: 'food' },
      { id: 'v8-6', lessonId: 8, word: 'la frutta', translation: 'میوه', pronunciation: 'la ˈfrutta', exampleIt: 'Mangio molta frutta.', exampleFa: 'خیلی میوه می‌خورم.', difficulty: 'beginner', category: 'food' },
    ],
    grammar: [
      {
        id: 'g8-1', lessonId: 8, title: 'Partitive Articles (Articoli partitivi)', titleFa: 'حروف تعریف تبعیضی',
        explanation: 'Partitive articles express "some" or "any". They are formed with di + definite article.',
        explanationFa: 'حروف تعریف تبعیضی "مقداری" یا "کمی" را بیان می‌کنند. با di + حرف تعریف معین ساخته می‌شوند.',
        examples: [
          { italian: 'del pane (some bread)', persian: 'مقداری نان' },
          { italian: 'della frutta (some fruit)', persian: 'مقداری میوه' },
          { italian: 'degli spaghetti (some spaghetti)', persian: 'مقداری اسپاگتی' },
          { italian: 'delle verdure (some vegetables)', persian: 'مقداری سبزیجات' },
        ],
        commonMistakes: ['In negative sentences, don\'t use partitives: "Non ho pane" (not "del pane")'],
        exercises: [
          { id: 'ex8-g1-1', type: 'fill_blank', question: 'Vorrei ___ pane (di + il = ?).', correctAnswer: 'del' },
        ],
      },
    ],
    reading: [
      {
        id: 'r8-1', lessonId: 8, title: 'La spesa di Nonna Maria', titleFa: 'خرید نونا ماریا',
        content: `Ogni venerdì mattina, nonna Maria va al mercato del quartiere. Prima compra la frutta: un chilo di mele, mezzo chilo di uva e delle pesche. Poi passa dal fruttivendolo per le verdure: pomodori, zucchine e carote. Dal macellaio prende del pollo e della bistecca per il weekend. Infine, dalla panetteria, compra del pane fresco e dei cornetti per la colazione. Nonna Maria dice sempre: "Al mercato si trova il meglio!"`,
        translation: `هر جمعه صبح، نونا ماریا می‌ره بازار محله. اول میوه می‌خره: یه کیلو سیب، نیم کیلو انگور و مقداری هلو. بعد می‌ره پیش سبزی‌فروش: گوجه، کدو و هویج. از قصابی مقداری مرغ و گوشت گاو برای آخر هفته می‌گیره. آخرش، از نانوایی، مقداری نان تازه و کروسان برای صبحانه می‌خره. نونا ماریا همیشه می‌گه: "بهترین‌ها را توی بازار پیدا می‌کنی!"`,
        vocabulary: ['v8-1', 'v8-3', 'v8-4', 'v8-5', 'v8-6'],
      },
    ],
    listening: [
      {
        id: 'l8-1', audioUrl: `${AUDIO_BASE}/T_51.mp3`, lessonId: 8, title: 'Al mercato', titleFa: 'در بازار',
        transcript: `Cliente: Buongiorno! Vorrei delle mele, per favore.
Fruttivendolo: Quante? Abbiamo le Golden e le Fuji.
Cliente: Un chilo di Golden, grazie. E quanto costano le pesche?
Fruttivendolo: Due euro al chilo. Sono freschissime!
Cliente: Allora mezzo chilo di pesche. Quant'è in tutto?
Fruttivendolo: Tre euro e cinquanta.
Cliente: Ecco quattro euro.
Fruttivendolo: Cinquanta centesimi di resto. Grazie e buona giornata!`,
        translation: `مشتری: صبح بخیر! یه مقدار سیب می‌خوام، لطفاً.
میوه‌فروش: چقدر؟ گلدن و فوجی داریم.
مشتری: یه کیلو گلدن، ممنون. هلوها چقدرن؟
میوه‌فروش: دو یورو کیلو. خیلی تازه‌ان!
مشتری: پس نیم کیلو هلو. روی هم چقدر می‌شه؟
میوه‌فروش: سه یورو و پنجاه.
مشتری: بفرمایید چهار یورو.
میوه‌فروش: پنجاه سنت خرده‌ات. ممنون و روز بخیر!`,
        duration: 62,
      },
    ],
    speaking: [
      {
        id: 'sp8-1', lessonId: 8, type: 'roleplay', title: 'At the Market', titleFa: 'در بازار',
        scenario: 'You are shopping at an Italian market. Buy fruit and vegetables.',
        scenarioFa: 'داری در یه بازار ایتالیایی خرید می‌کنی. میوه و سبزیجات بخر.',
        lines: [
          { speaker: 'Vendor', text: 'Buongiorno! Cosa desidera?', translation: 'صبح بخیر! چی می‌خواید؟' },
          { speaker: 'You', text: 'Vorrei ___, per favore.', translation: 'یه ___ می‌خوام، لطفاً.' },
          { speaker: 'Vendor', text: 'Quante/Quanto?', translation: 'چقدر؟' },
          { speaker: 'You', text: 'Un chilo, per favore. Quanto costa?', translation: 'یه کیلو، لطفاً. چقدر می‌شه؟' },
        ],
        tips: ['Use "dei/delle" for some', 'Un chilo, mezzo chilo, etto', 'Always check prices: "Quanto costa?"'],
      },
    ],
    exercises: [
      { id: 'ex8-1', type: 'fill_blank', question: 'Vorrei ___ pane. (some / di + il)', correctAnswer: 'del' },
    ],
    flashcards: [
      { id: 'fc8-1', lessonId: 8, front: 'il mercato', back: 'بازار', example: 'Vado al mercato.', pronunciation: 'il merˈkaːto', difficulty: 'beginner' },
      { id: 'fc8-2', lessonId: 8, front: 'un chilo di', back: 'یه کیلو از', example: 'Un chilo di mele.', pronunciation: 'un ˈkiːlo di', difficulty: 'beginner' },
    ],
  },

  {
    id: 9, number: 9, bookSlug: BOOK_SLUG, slug: 'lesson-9', pdfUrl: '/books/nuovo-espresso-1.pdf',
    title: 'Com\'è il tempo?',
    titleFa: 'هوا چطوره؟',
    subtitle: 'Weather & Seasons',
    subtitleFa: 'آب و هوا و فصل‌ها',
    overview: 'Parla del tempo e delle stagioni in Italia.',
    overviewFa: 'درباره آب و هوا و فصل‌ها در ایتالیا صحبت کن.',
    objectives: ['Describe the weather', 'Name the seasons', 'Use weather expressions', 'Talk about climate preferences'],
    objectivesFa: ['آب و هوا را توصیف کن', 'فصل‌ها را نام ببر', 'عبارات آب و هوایی را یاد بگیر', 'درباره ترجیحات آب و هوایی صحبت کن'],
    color: 'from-sky-500 to-blue-500',
    icon: '☀️',
    estimatedMinutes: 50,
    vocabulary: [
      { id: 'v9-1', lessonId: 9, word: 'fa caldo', translation: 'گرمه', pronunciation: 'fa ˈkaldo', exampleIt: 'In estate fa molto caldo.', exampleFa: 'تابستان خیلی گرمه.', difficulty: 'beginner', category: 'weather' },
      { id: 'v9-2', lessonId: 9, word: 'fa freddo', translation: 'سرده', pronunciation: 'fa ˈfrɛddo', exampleIt: 'In inverno fa freddo.', exampleFa: 'زمستان سرده.', difficulty: 'beginner', category: 'weather' },
      { id: 'v9-3', lessonId: 9, word: 'piove', translation: 'باران می‌باره', pronunciation: 'ˈpjoːve', exampleIt: 'Oggi piove molto.', exampleFa: 'امروز خیلی باران می‌باره.', difficulty: 'beginner', category: 'weather' },
      { id: 'v9-4', lessonId: 9, word: 'nevica', translation: 'برف می‌باره', pronunciation: 'ˈneːvika', exampleIt: 'A dicembre nevica sulle Alpi.', exampleFa: 'دسامبر روی آلپ برف می‌باره.', difficulty: 'beginner', category: 'weather' },
      { id: 'v9-5', lessonId: 9, word: 'c\'è il sole', translation: 'آفتابیه', pronunciation: 'tʃɛ il ˈsoːle', exampleIt: 'Che bello, c\'è il sole!', exampleFa: 'چه خوب، آفتابیه!', difficulty: 'beginner', category: 'weather' },
      { id: 'v9-6', lessonId: 9, word: 'le stagioni', translation: 'فصل‌ها', pronunciation: 'le staˈdʒoːni', exampleIt: 'L\'Italia ha quattro stagioni belle.', exampleFa: 'ایتالیا چهار فصل قشنگ داره.', difficulty: 'beginner', category: 'seasons' },
      { id: 'v9-7', lessonId: 9, word: 'l\'estate', translation: 'تابستان', pronunciation: 'leˈstaːte', exampleIt: 'D\'estate vado al mare.', exampleFa: 'تابستون می‌رم دریا.', difficulty: 'beginner', category: 'seasons' },
      { id: 'v9-8', lessonId: 9, word: 'l\'inverno', translation: 'زمستان', pronunciation: 'linˈvɛrno', exampleIt: 'L\'inverno a Milano è rigido.', exampleFa: 'زمستان میلان سخته.', difficulty: 'beginner', category: 'seasons' },
    ],
    grammar: [
      {
        id: 'g9-1', lessonId: 9, title: 'Weather Expressions', titleFa: 'عبارات آب و هوایی',
        explanation: 'Italian weather expressions use "fa", "c\'è", or impersonal verbs.',
        explanationFa: 'عبارات آب و هوایی ایتالیایی از "fa"، "c\'è" یا افعال غیرشخصی استفاده می‌کنند.',
        examples: [
          { italian: 'Fa caldo/freddo/bello/brutto.', persian: 'گرمه/سرده/خوبه/بده.' },
          { italian: 'C\'è il sole/vento/nebbia.', persian: 'آفتابیه/بادیه/مه‌آلوده.' },
          { italian: 'Piove / Nevica / Grandina.', persian: 'باران/برف/تگرگ می‌باره.' },
        ],
        commonMistakes: ['"Fa caldo" not "È caldo" for weather', '"Piove" has no subject — it\'s impersonal'],
        exercises: [
          { id: 'ex9-g1-1', type: 'multiple_choice', question: 'How do you say "It\'s snowing"?', options: ['Fa neve', 'Nevica', 'C\'è neve', 'Piove neve'], correctAnswer: 'Nevica' },
        ],
      },
    ],
    reading: [
      {
        id: 'r9-1', lessonId: 9, title: 'Le stagioni in Italia', titleFa: 'فصل‌ها در ایتالیا',
        content: `L'Italia è famosa per il suo clima mediterraneo. In primavera fa bel tempo: non troppo caldo, non troppo freddo. I fiori sbocciano ovunque. D'estate fa molto caldo, specialmente al Sud. La gente va al mare e alle montagne. In autunno i colori diventano meravigliosi: rossi, arancioni e gialli. D'inverno nevica nelle regioni del Nord e sulle Alpi. Roma invece ha inverni miti. Gli italiani amano molto le vacanze estive!`,
        translation: `ایتالیا به آب و هوای مدیترانه‌ای‌اش معروفه. بهار هوا خوبه: نه خیلی گرم، نه خیلی سرد. همه جا گل‌ها شکوفا می‌شن. تابستون خیلی گرمه، مخصوصاً جنوب. مردم می‌رن دریا و کوه. پاییز رنگ‌ها خیلی قشنگ می‌شن: قرمز، نارنجی و زرد. زمستون در مناطق شمالی و روی آلپ برف می‌باره. رُم اما زمستون‌های ملایمی داره. ایتالیایی‌ها تعطیلات تابستانی را خیلی دوست دارن!`,
        vocabulary: ['v9-1', 'v9-2', 'v9-3', 'v9-4', 'v9-5', 'v9-6', 'v9-7', 'v9-8'],
      },
    ],
    listening: [
      {
        id: 'l9-1', audioUrl: `${AUDIO_BASE}/T_58.mp3`, lessonId: 9, title: 'Previsioni del tempo', titleFa: 'پیش‌بینی آب و هوا',
        transcript: `Oggi a Roma fa bello e c'è il sole. La temperatura è di 22 gradi. Al Nord invece piove: Milano e Torino hanno tempo nuvoloso. Domani le notizie sono meno buone: arriva un fronte freddo. Le temperature scenderanno di 10 gradi. Sabato e domenica si prevede pioggia su tutta la penisola. Portatevi l'ombrello!`,
        translation: `امروز در رُم هوا خوبه و آفتابیه. دما ۲۲ درجه هست. در شمال اما باران می‌باره: میلان و تورین ابریه. فردا اخبار بهتر نیست: یه جبهه سرد میاد. دما ۱۰ درجه کاهش پیدا می‌کنه. شنبه و یکشنبه در سراسر شبه‌جزیره باران پیش‌بینی می‌شه. چترتون را ببرید!`,
        duration: 58,
      },
    ],
    speaking: [
      {
        id: 'sp9-1', lessonId: 9, type: 'conversation', title: 'Talking about the weather', titleFa: 'صحبت درباره آب و هوا',
        scenario: 'Chat with an Italian friend about today\'s weather and your favourite season.',
        scenarioFa: 'با یه دوست ایتالیایی درباره هوای امروز و فصل مورد علاقه‌ات صحبت کن.',
        lines: [
          { speaker: 'A', text: 'Com\'è il tempo oggi da te?', translation: 'امروز هوا پیشت چطوره؟' },
          { speaker: 'B', text: 'Oggi ___. E lì?', translation: 'امروز ___. اونجا چطور؟' },
          { speaker: 'A', text: 'Qui ___. Qual è la tua stagione preferita?', translation: 'اینجا ___. فصل مورد علاقه‌ات کدومه؟' },
          { speaker: 'B', text: 'Preferisco ___ perché ___.', translation: '___ را ترجیح می‌دم چون ___.' },
        ],
        tips: ['Start conversations with weather — it\'s very Italian!', 'Use "fa" + adjective or impersonal verbs'],
      },
    ],
    exercises: [
      { id: 'ex9-1', type: 'multiple_choice', question: 'How do you say "It\'s hot" in Italian?', options: ['È caldo', 'Fa caldo', 'C\'è caldo', 'Ho caldo'], correctAnswer: 'Fa caldo' },
      { id: 'ex9-2', type: 'fill_blank', question: 'Oggi ___ molto. (it\'s raining)', correctAnswer: 'piove' },
    ],
    flashcards: [
      { id: 'fc9-1', lessonId: 9, front: 'fa caldo', back: 'گرمه', example: 'In estate fa caldo.', pronunciation: 'fa ˈkaldo', difficulty: 'beginner' },
      { id: 'fc9-2', lessonId: 9, front: 'piove', back: 'باران می‌باره', example: 'Oggi piove.', pronunciation: 'ˈpjoːve', difficulty: 'beginner' },
      { id: 'fc9-3', lessonId: 9, front: 'l\'estate', back: 'تابستان', example: 'D\'estate vado al mare.', pronunciation: 'leˈstaːte', difficulty: 'beginner' },
    ],
  },

  {
    id: 10, number: 10, bookSlug: BOOK_SLUG, slug: 'lesson-10', pdfUrl: '/books/nuovo-espresso-1.pdf',
    title: 'Passato prossimo',
    titleFa: 'گذشته نزدیک',
    subtitle: 'Talking about the Past',
    subtitleFa: 'صحبت درباره گذشته',
    overview: 'Impara a raccontare eventi passati usando il passato prossimo.',
    overviewFa: 'یاد بگیر با passato prossimo از رویدادهای گذشته بگی.',
    objectives: ['Form and use passato prossimo', 'Use avere and essere as auxiliaries', 'Talk about past events', 'Use time expressions'],
    objectivesFa: ['passato prossimo را بسازی و استفاده کنی', 'از avere و essere به عنوان کمکی استفاده کنی', 'از رویدادهای گذشته بگی', 'عبارات زمانی را استفاده کنی'],
    color: 'from-indigo-500 to-violet-500',
    icon: '📅',
    estimatedMinutes: 65,
    vocabulary: [
      { id: 'v10-1', lessonId: 10, word: 'ieri', translation: 'دیروز', pronunciation: 'ˈjɛːri', exampleIt: 'Ieri sono andato al cinema.', exampleFa: 'دیروز رفتم سینما.', difficulty: 'beginner', category: 'time' },
      { id: 'v10-2', lessonId: 10, word: 'la settimana scorsa', translation: 'هفته گذشته', pronunciation: 'la settiˈmaːna ˈskɔrsa', exampleIt: 'La settimana scorsa ho studiato molto.', exampleFa: 'هفته گذشته خیلی درس خوندم.', difficulty: 'beginner', category: 'time' },
      { id: 'v10-3', lessonId: 10, word: 'ho mangiato', translation: 'خوردم', pronunciation: 'ɔ manˈdʒaːto', exampleIt: 'Ho mangiato una pizza deliziosa.', exampleFa: 'یه پیتزای خوشمزه خوردم.', difficulty: 'beginner', category: 'past_tense' },
      { id: 'v10-4', lessonId: 10, word: 'sono andato/a', translation: 'رفتم', pronunciation: 'ˈsoːno anˈdaːto', exampleIt: 'Sono andato a Roma.', exampleFa: 'رفتم رُم.', difficulty: 'beginner', category: 'past_tense' },
      { id: 'v10-5', lessonId: 10, word: 'ho visto', translation: 'دیدم', pronunciation: 'ɔ ˈvisto', exampleIt: 'Ho visto un bel film.', exampleFa: 'یه فیلم خوب دیدم.', difficulty: 'intermediate', category: 'past_tense' },
      { id: 'v10-6', lessonId: 10, word: 'fa', translation: 'پیش (زمان)', pronunciation: 'fa', exampleIt: 'Due giorni fa sono partito.', exampleFa: 'دو روز پیش رفتم.', difficulty: 'beginner', category: 'time' },
    ],
    grammar: [
      {
        id: 'g10-1', lessonId: 10, title: 'Passato Prossimo', titleFa: 'گذشته نزدیک',
        explanation: 'Passato prossimo is used for completed past actions. It uses avere or essere + past participle.',
        explanationFa: 'Passato prossimo برای اعمال تمام‌شده در گذشته استفاده می‌شه. از avere یا essere + اسم مفعول گذشته استفاده می‌کنه.',
        examples: [
          { italian: 'Ho mangiato (avere + mangiato)', persian: 'خوردم' },
          { italian: 'Ho dormito (avere + dormito)', persian: 'خوابیدم' },
          { italian: 'Sono andato/a (essere + andato/a)', persian: 'رفتم' },
          { italian: 'Sono arrivato/a (essere + arrivato/a)', persian: 'رسیدم' },
        ],
        commonMistakes: [
          'Movement/state verbs use "essere": andare, venire, arrivare, partire',
          'With essere, the participle agrees with subject gender/number',
          'Transitive verbs usually take "avere"',
        ],
        exercises: [
          { id: 'ex10-g1-1', type: 'multiple_choice', question: 'Which auxiliary does "andare" use in passato prossimo?', options: ['avere', 'essere', 'stare', 'fare'], correctAnswer: 'essere' },
          { id: 'ex10-g1-2', type: 'fill_blank', question: 'Ieri ___ mangiato una pizza. (I ate)', correctAnswer: 'ho' },
        ],
      },
    ],
    reading: [
      {
        id: 'r10-1', lessonId: 10, title: 'Il weekend di Matteo', titleFa: 'آخر هفته ماتئو',
        content: `Il fine settimana scorso è stato fantastico! Sabato mattina mi sono svegliato tardi - alle dieci! Ho fatto colazione con calma e poi sono uscito con i miei amici. Abbiamo pranzato in un ristorante nuovo vicino al duomo. Ho ordinato le tagliatelle al ragù - erano deliziose! Nel pomeriggio siamo andati a visitare una mostra d'arte moderna. La sera abbiamo cenato a casa mia e abbiamo guardato un film. Domenica invece ho riposato e ho letto un libro interessante. È stato un weekend perfetto!`,
        translation: `آخر هفته گذشته عالی بود! شنبه صبح دیر بیدار شدم - ساعت ده! با حوصله صبحانه خوردم و بعد با دوستام رفتم بیرون. نزدیک کلیسای جامع یه رستوران جدید ناهار خوردیم. تالیاتله با راگو سفارش دادم - خوشمزه بود! بعدازظهر رفتیم یه نمایشگاه هنر مدرن ببینیم. شب خونه‌ام شام خوردیم و فیلم دیدیم. یکشنبه اما استراحت کردم و یه کتاب جالب خوندم. آخر هفته کاملی بود!`,
        vocabulary: ['v10-1', 'v10-2', 'v10-3', 'v10-4', 'v10-5'],
      },
    ],
    listening: [
      {
        id: 'l10-1', audioUrl: `${AUDIO_BASE}/T_65.mp3`, lessonId: 10, title: 'Racconta il tuo weekend', titleFa: 'آخر هفته‌ات را تعریف کن',
        transcript: `A: Com'è stato il tuo weekend?
B: Fantastico! Venerdì sera sono andata a un concerto.
A: Davvero? Di chi?
B: Un cantante italiano. Ho cantato tutta la sera!
A: E sabato?
B: Ho dormito fino a mezzogiorno! Poi ho fatto la spesa e ho cucinato per i miei.
A: Che brava! Ho capito che sai cucinare bene!
B: Un po'! E tu, cosa hai fatto?
A: Sono rimasto a casa. Ho lavorato su un progetto.
B: Peccato! La prossima volta vieni con me al concerto!`,
        translation: `A: آخر هفته‌ات چطور بود؟
B: عالی! جمعه شب رفتم کنسرت.
A: واقعاً؟ از کی؟
B: یه خواننده ایتالیایی. تمام شب آواز خوندم!
A: شنبه چی؟
B: تا ظهر خوابیدم! بعد خرید کردم و برای خانواده‌ام آشپزی کردم.
A: آفرین! فهمیدم که خوب آشپزی می‌کنی!
B: یه کم! تو چی‌کار کردی؟
A: خونه موندم. روی یه پروژه کار کردم.
B: حیف! دفعه بعد بیا باهام به کنسرت!`,
        duration: 75,
      },
    ],
    speaking: [
      {
        id: 'sp10-1', lessonId: 10, type: 'conversation', title: 'Talking about last weekend', titleFa: 'صحبت درباره آخر هفته گذشته',
        scenario: 'Tell your Italian classmate what you did last weekend.',
        scenarioFa: 'به هم‌کلاسی ایتالیایی‌ات بگو آخر هفته گذشته چی‌کار کردی.',
        lines: [
          { speaker: 'A', text: 'Com\'è stato il tuo weekend?', translation: 'آخر هفته‌ات چطور بود؟' },
          { speaker: 'B', text: 'Sabato ho ___ e domenica sono ___.', translation: 'شنبه ___ و یکشنبه ___.' },
          { speaker: 'A', text: 'Che bello! Sei andato/a anche ___?', translation: 'چه خوب! رفتی ___ هم؟' },
          { speaker: 'B', text: 'Sì! / No, invece ho ___.', translation: 'بله! / نه، به جاش ___.' },
        ],
        tips: ['Remember avere vs essere!', 'Feminine subjects: "sono andata" not "andata"', 'Use ieri, la settimana scorsa, fa'],
      },
    ],
    exercises: [
      { id: 'ex10-1', type: 'multiple_choice', question: '"Sono andato" uses which auxiliary?', options: ['avere', 'essere', 'stare', 'venire'], correctAnswer: 'essere' },
      { id: 'ex10-2', type: 'fill_blank', question: 'Ieri ___ mangiato la pizza. (io)', correctAnswer: 'ho' },
      { id: 'ex10-3', type: 'translation', question: 'Translate: "I went to Rome yesterday."', correctAnswer: 'Ieri sono andato/a a Roma.' },
    ],
    flashcards: [
      { id: 'fc10-1', lessonId: 10, front: 'ho mangiato', back: 'خوردم', example: 'Ho mangiato una pizza.', pronunciation: 'ɔ manˈdʒaːto', difficulty: 'intermediate' },
      { id: 'fc10-2', lessonId: 10, front: 'sono andato/a', back: 'رفتم', example: 'Sono andato a Roma.', pronunciation: 'ˈsoːno anˈdaːto', difficulty: 'intermediate' },
      { id: 'fc10-3', lessonId: 10, front: 'ieri', back: 'دیروز', example: 'Ieri ho studiato.', pronunciation: 'ˈjɛːri', difficulty: 'beginner' },
    ],
  },
];

export const getLessonById = (id: number): Lesson | undefined =>
  lessonsEspresso1.find((l) => l.id === id);

export const getLessonBySlug = (slug: string): Lesson | undefined =>
  lessonsEspresso1.find((l) => l.slug === slug);
