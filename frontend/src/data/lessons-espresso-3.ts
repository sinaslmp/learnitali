import { Lesson } from '@/types';

const BOOK_SLUG = 'nuovo-espresso-3';
const PDF_URL = '/books/nuovo-espresso-3.pdf';

export const lessonsEspresso3: Lesson[] = [
  {
    id: 21, number: 1, bookSlug: BOOK_SLUG, slug: 'ne3-lesson-1', pdfUrl: PDF_URL, startPage: 4, endPage: 17,
    title: 'Il congiuntivo presente', titleFa: 'حالت التزامی حال',
    subtitle: 'Expressing Doubt, Opinion and Emotion', subtitleFa: 'بیان تردید، نظر و احساس',
    overview: 'Impara a usare il congiuntivo per esprimere opinioni, dubbi ed emozioni.', overviewFa: 'یاد بگیر از حالت التزامی برای بیان نظر، تردید و احساسات استفاده کنی.',
    objectives: ['Form the present subjunctive', 'Use it after penso che/credo che', 'Express emotions with subjunctive', 'Use impersonal expressions'],
    objectivesFa: ['حالت التزامی حال را بساز', 'بعد از penso che/credo che استفاده کن', 'احساسات را با التزامی بیان کن', 'از عبارات غیرشخصی استفاده کن'],
    color: 'from-violet-600 to-purple-700', icon: '🤔', estimatedMinutes: 70,
    vocabulary: [
      { id: 'v21-1', lessonId: 21, word: 'penso che', translation: 'فکر می‌کنم که', pronunciation: 'ˈpɛnso ke', exampleIt: 'Penso che sia tardi.', exampleFa: 'فکر می‌کنم دیره.', difficulty: 'intermediate', category: 'opinions' },
      { id: 'v21-2', lessonId: 21, word: 'credo che', translation: 'باور دارم که', pronunciation: 'ˈkrɛːdo ke', exampleIt: 'Credo che abbiano ragione.', exampleFa: 'باور دارم که حق دارند.', difficulty: 'intermediate', category: 'opinions' },
      { id: 'v21-3', lessonId: 21, word: 'è importante che', translation: 'مهمه که', pronunciation: 'ɛ imporˈtante ke', exampleIt: 'È importante che tu studi.', exampleFa: 'مهمه که درس بخونی.', difficulty: 'intermediate', category: 'impersonal' },
      { id: 'v21-4', lessonId: 21, word: 'mi sembra che', translation: 'به نظرم میاد که', pronunciation: 'mi ˈsɛmbra ke', exampleIt: 'Mi sembra che sia stanco.', exampleFa: 'به نظرم میاد که خسته‌ست.', difficulty: 'intermediate', category: 'opinions' },
      { id: 'v21-5', lessonId: 21, word: 'sebbene / benché', translation: 'اگرچه', pronunciation: 'sebˈbeːne / benˈke', exampleIt: 'Sebbene sia difficile, continuo.', exampleFa: 'اگرچه سخته، ادامه می‌دم.', difficulty: 'advanced', category: 'conjunctions' },
      { id: 'v21-6', lessonId: 21, word: 'affinché', translation: 'تا اینکه / به خاطر اینکه', pronunciation: 'affinˈke', exampleIt: 'Ti spiego affinché tu capisca.', exampleFa: 'توضیح می‌دم تا بفهمی.', difficulty: 'advanced', category: 'conjunctions' },
    ],
    grammar: [
      {
        id: 'g21-1', lessonId: 21, title: 'Congiuntivo presente', titleFa: 'حالت التزامی حال',
        explanation: 'The subjunctive is used after verbs of opinion, doubt, emotion and certain conjunctions.',
        explanationFa: 'از التزامی بعد از افعال نظر، تردید، احساس و برخی接続詞 استفاده می‌شود.',
        examples: [
          { italian: 'parlare → parli, parli, parli, parliamo, parliate, parlino', persian: 'صحبت کنم/کنی/کند...' },
          { italian: 'essere → sia, sia, sia, siamo, siate, siano', persian: 'باشم/باشی/باشد...' },
          { italian: 'Penso che Marco sia intelligente.', persian: 'فکر می‌کنم مارکو باهوشه.' },
        ],
        commonMistakes: ['Use same subject → infinitive: "Voglio mangiare" not "Voglio che io mangia"', 'Essere is highly irregular in subjunctive'],
        exercises: [{ id: 'ex21-g1-1', type: 'fill_blank', question: 'Penso che lei ___ (essere) stanca.', correctAnswer: 'sia' }],
      },
    ],
    reading: [
      {
        id: 'r21-1', lessonId: 21, title: 'Opinioni sull\'italiano', titleFa: 'نظرات درباره ایتالیایی',
        content: `Molti studenti pensano che l\'italiano sia una lingua facile. Io credo che sia abbastanza difficile, ma molto bella. È importante che si pratichi ogni giorno. Mi sembra che la grammatica italiana sia complessa, soprattutto il congiuntivo! Sebbene ci voglia tempo, penso che valga la pena. Credo che chiunque voglia imparare l\'italiano possa farcela con impegno.`,
        translation: `خیلی از دانش‌آموزان فکر می‌کنند ایتالیایی زبان آسانیه. من باور دارم که نسبتاً سخته، ولی خیلی زیباست. مهمه که هر روز تمرین کنی. به نظرم میاد که گرامر ایتالیایی پیچیده‌ست، مخصوصاً التزامی! اگرچه وقت می‌بره، فکر می‌کنم ارزشش را داره. باور دارم هر کسی که بخواد ایتالیایی یاد بگیره با تلاش می‌تونه موفق بشه.`,
        vocabulary: ['v21-1', 'v21-2', 'v21-3', 'v21-4'],
      },
    ],
    listening: [
      {
        id: 'l21-1', lessonId: 21, title: 'Discussione in classe', titleFa: 'بحث در کلاس',
        transcript: `Prof: Cosa pensate del sistema scolastico italiano?
Studente A: Penso che sia molto tradizionale.
Studente B: Credo che sia migliorato negli ultimi anni.
Prof: È importante che esprimiate la vostra opinione con argomenti.
Studente A: Mi sembra che manchino risorse nei licei.
Studente B: Sebbene ci siano problemi, penso che i professori italiani siano bravi.`,
        translation: `استاد: درباره سیستم آموزشی ایتالیا چه فکری می‌کنید؟
دانش‌آموز A: فکر می‌کنم خیلی سنتیه.
دانش‌آموز B: باور دارم در سال‌های اخیر بهتر شده.
استاد: مهمه که نظرتون را با دلیل بیان کنید.
دانش‌آموز A: به نظرم میاد که در دبیرستان‌ها منابع کم داره.
دانش‌آموز B: اگرچه مشکلاتی هست، فکر می‌کنم معلم‌های ایتالیایی خوب هستند.`,
        duration: 60,
      },
    ],
    speaking: [
      {
        id: 'sp21-1', lessonId: 21, type: 'conversation', title: 'Expressing opinions', titleFa: 'بیان نظر',
        scenario: 'Discuss a topic of your choice using the subjunctive.',
        scenarioFa: 'با استفاده از التزامی درباره یه موضوع بحث کن.',
        lines: [
          { speaker: 'A', text: 'Cosa pensi della situazione economica?', translation: 'درباره وضعیت اقتصادی چه فکری می‌کنی؟' },
          { speaker: 'B', text: 'Penso che sia ___ . Credo che il governo debba ___.', translation: 'فکر می‌کنم ___ هست. باور دارم دولت باید ___.' },
          { speaker: 'A', text: 'Mi sembra che tu abbia ragione. Ma...', translation: 'به نظرم میاد که حق داری. ولی...' },
          { speaker: 'B', text: 'È importante che se ne parli di più.', translation: 'مهمه که بیشتر درباره‌اش صحبت بشه.' },
        ],
        tips: ['Penso/credo/mi sembra + che + subjunctive', 'Same subject = infinitive (no subjunctive)', 'Practice with opinions about news, culture, society'],
      },
    ],
    exercises: [
      { id: 'ex21-1', type: 'fill_blank', question: 'Credo che Marco ___ (avere) ragione.', correctAnswer: 'abbia' },
      { id: 'ex21-2', type: 'multiple_choice', question: 'When do you use subjunctive?', options: ['After so', 'After penso che', 'After ho', 'After vado'], correctAnswer: 'After penso che' },
    ],
    flashcards: [
      { id: 'fc21-1', lessonId: 21, front: 'penso che', back: 'فکر می‌کنم که', example: 'Penso che sia tardi.', pronunciation: 'ˈpɛnso ke', difficulty: 'intermediate' },
      { id: 'fc21-2', lessonId: 21, front: 'sebbene', back: 'اگرچه', example: 'Sebbene sia difficile, continuo.', pronunciation: 'sebˈbeːne', difficulty: 'advanced' },
      { id: 'fc21-3', lessonId: 21, front: 'è importante che', back: 'مهمه که', example: 'È importante che tu studi.', pronunciation: 'ɛ imporˈtante ke', difficulty: 'intermediate' },
    ],
  },

  {
    id: 22, number: 2, bookSlug: BOOK_SLUG, slug: 'ne3-lesson-2', pdfUrl: PDF_URL, startPage: 18, endPage: 30,
    title: 'Il condizionale', titleFa: 'حالت شرطی',
    subtitle: 'Wishes, Polite Requests and Hypotheticals', subtitleFa: 'آرزوها، درخواست‌های مؤدبانه و فرضیات',
    overview: 'Impara a usare il condizionale per fare richieste educate ed esprimere desideri.', overviewFa: 'یاد بگیر از شرطی برای درخواست‌های مؤدبانه و بیان آرزوها استفاده کنی.',
    objectives: ['Form the conditional tense', 'Make polite requests', 'Express wishes and hypotheticals', 'Use vorrei/potrebbe/dovrebbe'],
    objectivesFa: ['زمان شرطی را بساز', 'درخواست مؤدبانه کن', 'آرزوها و فرضیات را بیان کن', 'از vorrei/potrebbe/dovrebbe استفاده کن'],
    color: 'from-indigo-500 to-blue-600', icon: '💭', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v22-1', lessonId: 22, word: 'vorrei', translation: 'دوست داشتم / می‌خواستم', pronunciation: 'vorˈrɛi', exampleIt: 'Vorrei visitare il Giappone.', exampleFa: 'دوست داشتم برم ژاپن.', difficulty: 'intermediate', category: 'conditional' },
      { id: 'v22-2', lessonId: 22, word: 'potrebbe', translation: 'می‌توانست / ممکنه', pronunciation: 'poˈtrɛbbe', exampleIt: 'Potrebbe aiutarmi?', exampleFa: 'ممکنه کمکم کنید؟', difficulty: 'intermediate', category: 'conditional' },
      { id: 'v22-3', lessonId: 22, word: 'dovrebbe', translation: 'باید (توصیه)', pronunciation: 'doˈvrɛbbe', exampleIt: 'Dovresti studiare di più.', exampleFa: 'باید بیشتر درس بخونی.', difficulty: 'intermediate', category: 'conditional' },
      { id: 'v22-4', lessonId: 22, word: 'al posto tuo', translation: 'جای تو', pronunciation: 'al ˈposto ˈtuːo', exampleIt: 'Al posto tuo, accetterei l\'offerta.', exampleFa: 'جای تو، پیشنهاد را قبول می‌کردم.', difficulty: 'intermediate', category: 'expressions' },
      { id: 'v22-5', lessonId: 22, word: 'magari', translation: 'کاش / شاید', pronunciation: 'maˈɡaːri', exampleIt: 'Magari potessi venire!', exampleFa: 'کاش می‌تونستم بیام!', difficulty: 'intermediate', category: 'expressions' },
      { id: 'v22-6', lessonId: 22, word: 'mi piacerebbe', translation: 'دوست داشتم', pronunciation: 'mi pjaˈtʃerɛbbe', exampleIt: 'Mi piacerebbe imparare il piano.', exampleFa: 'دوست داشتم پیانو یاد بگیرم.', difficulty: 'intermediate', category: 'conditional' },
    ],
    grammar: [
      {
        id: 'g22-1', lessonId: 22, title: 'Condizionale presente', titleFa: 'شرطی حال',
        explanation: 'The conditional expresses wishes, polite requests, advice and hypotheticals.',
        explanationFa: 'شرطی برای آرزوها، درخواست‌های مؤدبانه، توصیه‌ها و فرضیات استفاده می‌شود.',
        examples: [
          { italian: 'parlare → parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero', persian: 'حرف می‌زدم، می‌زدی...' },
          { italian: 'Potresti aprire la finestra? (polite)', persian: 'می‌تونی پنجره را باز کنی؟' },
          { italian: 'Al posto tuo, studierei di più.', persian: 'جای تو بیشتر درس می‌خوندم.' },
        ],
        commonMistakes: ['Irregular roots same as futuro: andrei, verrei, sarei, avrei, farei', 'Conditional for polite requests (not imperative)'],
        exercises: [{ id: 'ex22-g1-1', type: 'fill_blank', question: '(io, volere) un caffè, per favore. (condizionale)', correctAnswer: 'Vorrei' }],
      },
    ],
    reading: [
      {
        id: 'r22-1', lessonId: 22, title: 'Se potessi...', titleFa: 'اگه می‌تونستم...',
        content: `Se potessi vivere in qualsiasi città del mondo, sceglierei Roma. Mi piacerebbe passeggiare ogni giorno tra le antichità. Vorrei mangiare la cacio e pepe autentica ogni sera! Al posto tuo, lascerei il lavoro e mi trasferirei subito. Dovresti venire a visitarmi — ti offrirei un tour privato. Magari potessimo andarci insieme il prossimo anno!`,
        translation: `اگه می‌تونستم در هر شهری از دنیا زندگی کنم، رُم را انتخاب می‌کردم. دوست داشتم هر روز بین آثار باستانی قدم بزنم. می‌خواستم هر شب کاچو ای پپه اصیل بخورم! جای تو شغلم را ول می‌کردم و فوراً می‌رفتم. باید بیای پیشم — یه تور خصوصی برات ترتیب می‌دادم. کاش می‌تونستیم سال آینده با هم بریم!`,
        vocabulary: ['v22-1', 'v22-2', 'v22-3', 'v22-4', 'v22-5', 'v22-6'],
      },
    ],
    listening: [
      {
        id: 'l22-1', lessonId: 22, title: 'Richieste educate', titleFa: 'درخواست‌های مؤدبانه',
        transcript: `A: Scusi, potrebbe abbassare il volume?
B: Certo, mi dispiace! Potrei chiederle di spostare la borsa dal mio posto?
A: Oh, scusi! Dovrei stare più attento.
B: Non si preoccupi. Mi piacerebbe sedermi vicino al finestrino.
A: Si accomodi pure. Vorrebbe dello spazio per i bagagli?
B: Sarebbe gentile, grazie mille!`,
        translation: `A: ببخشید، ممکنه صدا را کم کنید؟
B: البته، ببخشید! می‌تونم ازتون بخوام کیف را از جای من بردارید؟
A: اوه، ببخشید! باید بیشتر دقت می‌کردم.
B: نگران نباشید. دوست داشتم کنار پنجره بشینم.
A: بفرمایید. می‌خواستید جا برای بار؟
B: لطف می‌کردید، خیلی ممنون!`,
        duration: 55,
      },
    ],
    speaking: [
      {
        id: 'sp22-1', lessonId: 22, type: 'conversation', title: 'Polite requests', titleFa: 'درخواست مؤدبانه',
        scenario: 'Practice making polite requests and giving advice using conditional.',
        scenarioFa: 'با استفاده از شرطی درخواست مؤدبانه کن و توصیه بده.',
        lines: [
          { speaker: 'A', text: 'Potrebbe dirmi dov\'è la fermata?', translation: 'ممکنه بگید ایستگاه کجاست؟' },
          { speaker: 'B', text: 'Certo! Dovrebbe prendere la linea ___.', translation: 'البته! باید خط ___ را بگیرید.' },
          { speaker: 'A', text: 'E vorrebbe consigliarmi un ristorante?', translation: 'یه رستوران هم پیشنهاد می‌دید؟' },
          { speaker: 'B', text: 'Al posto suo, andrei da ___. È ottimo!', translation: 'جای شما، می‌رفتم ___. عالیه!' },
        ],
        tips: ['Potrebbe/Potresti for polite "could you"', 'Dovrebbe/Dovresti for advice "you should"', '"Al posto tuo/suo" = in your place'],
      },
    ],
    exercises: [
      { id: 'ex22-1', type: 'fill_blank', question: 'Al posto tuo, io ___ (studiare) di più.', correctAnswer: 'studierei' },
      { id: 'ex22-2', type: 'multiple_choice', question: 'Polite "could you" = ?', options: ['puoi', 'potresti', 'poteva', 'puoi potere'], correctAnswer: 'potresti' },
    ],
    flashcards: [
      { id: 'fc22-1', lessonId: 22, front: 'vorrei', back: 'دوست داشتم', example: 'Vorrei visitare il Giappone.', pronunciation: 'vorˈrɛi', difficulty: 'intermediate' },
      { id: 'fc22-2', lessonId: 22, front: 'dovrebbe', back: 'باید (توصیه)', example: 'Dovresti studiare di più.', pronunciation: 'doˈvrɛbbe', difficulty: 'intermediate' },
      { id: 'fc22-3', lessonId: 22, front: 'magari', back: 'کاش / شاید', example: 'Magari potessi venire!', pronunciation: 'maˈɡaːri', difficulty: 'intermediate' },
    ],
  },

  {
    id: 23, number: 3, bookSlug: BOOK_SLUG, slug: 'ne3-lesson-3', pdfUrl: PDF_URL, startPage: 32, endPage: 47,
    title: 'I pronomi relativi', titleFa: 'ضمایر موصولی',
    subtitle: 'Relative Pronouns and Complex Sentences', subtitleFa: 'ضمایر موصولی و جملات پیچیده',
    overview: 'Impara a usare che, cui, il quale per collegare frasi.', overviewFa: 'یاد بگیر از che, cui, il quale برای اتصال جملات استفاده کنی.',
    objectives: ['Use che as subject/object relative pronoun', 'Use cui after prepositions', 'Use il quale/la quale variants', 'Build complex sentences'],
    objectivesFa: ['از che به عنوان ضمیر موصولی استفاده کن', 'از cui بعد از حروف اضافه استفاده کن', 'از il quale/la quale استفاده کن', 'جملات پیچیده بساز'],
    color: 'from-teal-500 to-green-600', icon: '🔗', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v23-1', lessonId: 23, word: 'che (relativo)', translation: 'که (ضمیر موصولی)', pronunciation: 'ke', exampleIt: 'Il libro che ho letto è bellissimo.', exampleFa: 'کتابی که خوندم خیلی قشنگه.', difficulty: 'intermediate', category: 'pronouns' },
      { id: 'v23-2', lessonId: 23, word: 'cui', translation: 'که (بعد از حرف اضافه)', pronunciation: 'kwi', exampleIt: 'La ragazza con cui lavoro è simpatica.', exampleFa: 'دختری که باهاش کار می‌کنم جالبه.', difficulty: 'intermediate', category: 'pronouns' },
      { id: 'v23-3', lessonId: 23, word: 'il quale / la quale', translation: 'که / کسی که', pronunciation: 'il ˈkwaːle / la ˈkwaːle', exampleIt: 'Il professore, il quale insegna storia, è famoso.', exampleFa: 'استادی که تاریخ درس می‌ده، معروفه.', difficulty: 'advanced', category: 'pronouns' },
      { id: 'v23-4', lessonId: 23, word: 'chi', translation: 'کسی که (whoever)', pronunciation: 'ki', exampleIt: 'Chi studia ottiene buoni risultati.', exampleFa: 'کسی که درس می‌خونه نتایج خوب می‌گیره.', difficulty: 'intermediate', category: 'pronouns' },
      { id: 'v23-5', lessonId: 23, word: 'dove (relativo)', translation: 'جایی که', pronunciation: 'ˈdove', exampleIt: 'La città dove abito è piccola.', exampleFa: 'شهری که توش زندگی می‌کنم کوچیکه.', difficulty: 'intermediate', category: 'pronouns' },
      { id: 'v23-6', lessonId: 23, word: 'quanto', translation: 'هر چقدر که', pronunciation: 'ˈkwanto', exampleIt: 'Fai quanto puoi.', exampleFa: 'هر چقدر می‌تونی انجام بده.', difficulty: 'intermediate', category: 'pronouns' },
    ],
    grammar: [
      {
        id: 'g23-1', lessonId: 23, title: 'Pronomi relativi', titleFa: 'ضمایر موصولی',
        explanation: 'CHE is used for subject or direct object. CUI is used after prepositions.',
        explanationFa: 'CHE برای فاعل یا مفعول مستقیم. CUI بعد از حروف اضافه استفاده می‌شود.',
        examples: [
          { italian: 'Il film che ho visto era noioso. (object)', persian: 'فیلمی که دیدم کسل‌کننده بود.' },
          { italian: 'Lo studente che ha parlato è bravo. (subject)', persian: 'دانش‌آموزی که صحبت کرد خوبه.' },
          { italian: 'La persona con cui parlo è mia collega.', persian: 'کسی که باهاش حرف می‌زنم همکارمه.' },
        ],
        commonMistakes: ['Never use "che" after a preposition — use "cui"', '"Il quale" can replace both che and cui but needs gender/number agreement'],
        exercises: [{ id: 'ex23-g1-1', type: 'multiple_choice', question: 'L\'amico ___ ho incontrato è simpatico.', options: ['cui', 'che', 'il quale', 'dove'], correctAnswer: 'che' }],
      },
    ],
    reading: [
      {
        id: 'r23-1', lessonId: 23, title: 'La città che amo', titleFa: 'شهری که دوست دارم',
        content: `Roma è la città che amo di più. Il quartiere in cui abito è Trastevere, che è famoso per i suoi vicoli e ristoranti. Gli amici con cui esco spesso sono tutti appassionati di storia. Il museo che visito più spesso è la Galleria Borghese, la quale ospita opere di Bernini e Caravaggio. Chi vuole capire l\'Italia deve venire a Roma almeno una volta nella vita!`,
        translation: `رُم شهریه که بیشتر از همه دوست دارم. محله‌ای که توش زندگی می‌کنم تراستِوِره‌ست، که به کوچه‌ها و رستوران‌هاش معروفه. دوستایی که باهاشون بیرون می‌رم همه به تاریخ علاقه دارن. موزه‌ای که بیشتر بازدید می‌کنم گالری بورگزه‌ست که آثار برنینی و کاراواجو داره. کسی که می‌خواد ایتالیا را بفهمه باید حداقل یه بار به رُم بیاد!`,
        vocabulary: ['v23-1', 'v23-2', 'v23-3', 'v23-4', 'v23-5'],
      },
    ],
    listening: [
      {
        id: 'l23-1', lessonId: 23, title: 'Descrizioni', titleFa: 'توصیفات',
        transcript: `A: Chi è quella persona che parla con il professore?
B: È la studentessa che ha vinto il premio di letteratura.
A: Quella con cui stavi parlando ieri?
B: No, quella con cui parlavo ieri studia matematica. Questa è diversa.
A: Il premio che ha vinto è importante?
B: Sì, è il concorso più importante del nostro istituto, quello a cui partecipano tutti i migliori studenti.`,
        translation: `A: اون کسی که با استاد حرف می‌زنه کیه؟
B: اون دانش‌آموزیه که جایزه ادبیات را برده.
A: اونی که دیروز باهاش حرف می‌زدی؟
B: نه، اونی که باهاش حرف می‌زدم ریاضی می‌خونه. این یه نفر دیگه‌ست.
A: جایزه‌ای که برده مهمه؟
B: بله، مهم‌ترین مسابقه مؤسسه‌ماست، همونی که همه بهترین دانش‌آموزان توش شرکت می‌کنن.`,
        duration: 55,
      },
    ],
    speaking: [
      {
        id: 'sp23-1', lessonId: 23, type: 'conversation', title: 'Describing with relative clauses', titleFa: 'توصیف با ضمایر موصولی',
        scenario: 'Describe people, places and things using relative pronouns.',
        scenarioFa: 'با استفاده از ضمایر موصولی آدم‌ها، جاها و چیزها را توصیف کن.',
        lines: [
          { speaker: 'A', text: 'Dimmi di un posto che ami.', translation: 'از یه جایی که دوست داری برام بگو.' },
          { speaker: 'B', text: '___. È un posto dove ___ e che ___.', translation: '___. جاییه که ___ و ___.' },
          { speaker: 'A', text: 'E chi è la persona con cui ci sei andato?', translation: 'کسی که باهاش رفتی کیه؟' },
          { speaker: 'B', text: 'È ___, una persona che ___ e con cui ___.', translation: '___ هست، کسیه که ___ و باهاش ___.' },
        ],
        tips: ['"Che" for subject/object (no preposition)', '"Cui" always after a preposition', '"Dove" for place relative clauses'],
      },
    ],
    exercises: [
      { id: 'ex23-1', type: 'fill_blank', question: 'La ragazza con ___ lavoro è molto brava.', correctAnswer: 'cui' },
      { id: 'ex23-2', type: 'fill_blank', question: 'Il libro ___ ho letto è interessante.', correctAnswer: 'che' },
    ],
    flashcards: [
      { id: 'fc23-1', lessonId: 23, front: 'che (relativo)', back: 'که (فاعل/مفعول)', example: 'Il libro che leggo.', pronunciation: 'ke', difficulty: 'intermediate' },
      { id: 'fc23-2', lessonId: 23, front: 'cui', back: 'که (بعد از حرف اضافه)', example: 'La persona con cui parlo.', pronunciation: 'kwi', difficulty: 'intermediate' },
      { id: 'fc23-3', lessonId: 23, front: 'chi', back: 'کسی که', example: 'Chi studia, impara.', pronunciation: 'ki', difficulty: 'intermediate' },
    ],
  },

  {
    id: 24, number: 4, bookSlug: BOOK_SLUG, slug: 'ne3-lesson-4', pdfUrl: PDF_URL, startPage: 48, endPage: 61,
    title: 'Il passivo', titleFa: 'مجهول',
    subtitle: 'Passive Voice in Italian', subtitleFa: 'صدای مجهول در ایتالیایی',
    overview: 'Impara a costruire e usare la forma passiva in italiano.', overviewFa: 'یاد بگیر ساختار مجهول را در ایتالیایی بسازی و استفاده کنی.',
    objectives: ['Form passive with essere + participio', 'Form passive with venire', 'Use "da" to introduce the agent', 'Recognise si passivante'],
    objectivesFa: ['مجهول با essere + اسم مفعول بساز', 'مجهول با venire بساز', 'از "da" برای معرفی عامل استفاده کن', 'si passivante را بشناس'],
    color: 'from-amber-600 to-orange-700', icon: '🔄', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v24-1', lessonId: 24, word: 'essere costruito', translation: 'ساخته شده', pronunciation: 'ˈɛssere kostruˈiːto', exampleIt: 'Il Colosseo fu costruito nel 70 d.C.', exampleFa: 'کلیزه در سال ۷۰ میلادی ساخته شد.', difficulty: 'intermediate', category: 'passive' },
      { id: 'v24-2', lessonId: 24, word: 'viene venduto', translation: 'فروخته می‌شود', pronunciation: 'ˈvjɛːne venˈduːto', exampleIt: 'Il vino viene venduto in tutta Italia.', exampleFa: 'شراب در سراسر ایتالیا فروخته می‌شود.', difficulty: 'intermediate', category: 'passive' },
      { id: 'v24-3', lessonId: 24, word: 'da (agente)', translation: 'توسط (عامل)', pronunciation: 'da', exampleIt: 'Il quadro è stato dipinto da Leonardo.', exampleFa: 'تابلو توسط لئوناردو نقاشی شد.', difficulty: 'intermediate', category: 'passive' },
      { id: 'v24-4', lessonId: 24, word: 'si vende', translation: 'فروخته می‌شود (si passivante)', pronunciation: 'si ˈvɛnde', exampleIt: 'Qui si parlano molte lingue.', exampleFa: 'اینجا زبان‌های زیادی صحبت می‌شه.', difficulty: 'intermediate', category: 'passive' },
      { id: 'v24-5', lessonId: 24, word: 'essere stato/a', translation: 'شده بود', pronunciation: 'ˈɛssere ˈstaːto', exampleIt: 'La lettera è stata spedita ieri.', exampleFa: 'نامه دیروز فرستاده شد.', difficulty: 'intermediate', category: 'passive' },
      { id: 'v24-6', lessonId: 24, word: 'andare + participio', translation: 'باید ... شود', pronunciation: 'anˈdaːre', exampleIt: 'Questo documento va firmato.', exampleFa: 'این سند باید امضا بشه.', difficulty: 'advanced', category: 'passive' },
    ],
    grammar: [
      {
        id: 'g24-1', lessonId: 24, title: 'Forma passiva', titleFa: 'ساختار مجهول',
        explanation: 'Passive is formed with essere/venire + past participle. The participle agrees with the subject.',
        explanationFa: 'مجهول با essere/venire + اسم مفعول ساخته می‌شود. اسم مفعول با فاعل مطابقت دارد.',
        examples: [
          { italian: 'La pizza è mangiata (dal bambino). — essere', persian: 'پیتزا (توسط بچه) خورده می‌شه.' },
          { italian: 'La porta viene aperta ogni mattina. — venire', persian: 'در هر صبح باز می‌شه.' },
          { italian: 'Il film fu diretto da Fellini. — passato remoto passive', persian: 'فیلم توسط فلینی کارگردانی شد.' },
        ],
        commonMistakes: ['Venire cannot be used in compound tenses', 'Participle must agree: La lettera è stata spedita (fem.)'],
        exercises: [{ id: 'ex24-g1-1', type: 'fill_blank', question: 'La casa ___ (costruire, passive passato prossimo) nel 1990.', correctAnswer: 'è stata costruita' }],
      },
    ],
    reading: [
      {
        id: 'r24-1', lessonId: 24, title: 'L\'arte italiana nel mondo', titleFa: 'هنر ایتالیایی در جهان',
        content: `L\'arte italiana è apprezzata in tutto il mondo. La Gioconda, che fu dipinta da Leonardo da Vinci, viene visitata da milioni di persone ogni anno al Louvre. Il David di Michelangelo è conservato a Firenze. Molte opere vengono acquistate da musei internazionali. La cultura italiana si esporta attraverso il cinema, la moda e il design. In Italia si producono vini e formaggi che vengono esportati ovunque.`,
        translation: `هنر ایتالیایی در سراسر دنیا مورد تحسین است. موناالیزا که توسط لئوناردو داوینچی نقاشی شد، هر سال توسط میلیون‌ها نفر در لوور بازدید می‌شود. داوود میکلانژ در فلورانس نگهداری می‌شود. بسیاری از آثار توسط موزه‌های بین‌المللی خریداری می‌شوند. فرهنگ ایتالیایی از طریق سینما، مد و طراحی صادر می‌شود. در ایتالیا شراب و پنیر تولید می‌شود که همه جا صادر می‌شود.`,
        vocabulary: ['v24-1', 'v24-2', 'v24-3', 'v24-4', 'v24-5'],
      },
    ],
    listening: [
      {
        id: 'l24-1', lessonId: 24, title: 'Un documentario', titleFa: 'یه مستند',
        transcript: `Il Colosseo fu costruito tra il 72 e l'80 dopo Cristo. Fu voluto dall'imperatore Vespasiano. La struttura venne completata dal figlio Tito. Si stima che potesse contenere fino a 80.000 spettatori. Nel corso dei secoli è stato utilizzato come cava di marmo e come fortezza. Oggi viene visitato da oltre sei milioni di turisti ogni anno ed è considerato uno dei siti più importanti del mondo.`,
        translation: `کلیزه بین سال‌های ۷۲ تا ۸۰ میلادی ساخته شد. توسط امپراتور وسپاسیان خواسته شد. ساختار توسط پسرش تیتوس تکمیل شد. تخمین زده می‌شود تا ۸۰۰۰۰ تماشاگر جا داشته. در طول قرن‌ها به عنوان معدن مرمر و قلعه استفاده شده. امروز بیش از شش میلیون توریست هر سال از آن بازدید می‌کنند و یکی از مهم‌ترین مکان‌های دنیا محسوب می‌شود.`,
        duration: 60,
      },
    ],
    speaking: [
      {
        id: 'sp24-1', lessonId: 24, type: 'conversation', title: 'Discussing history and culture', titleFa: 'بحث درباره تاریخ و فرهنگ',
        scenario: 'Describe Italian monuments using the passive voice.',
        scenarioFa: 'با استفاده از مجهول، بناهای یادبود ایتالیا را توصیف کن.',
        lines: [
          { speaker: 'A', text: 'Sai quando è stato costruito il Pantheon?', translation: 'می‌دونی پانتئون کِی ساخته شد؟' },
          { speaker: 'B', text: 'Fu costruito da Adriano nel 125 d.C.', translation: 'توسط آدریان در سال ۱۲۵ میلادی ساخته شد.' },
          { speaker: 'A', text: 'E da chi viene gestito oggi?', translation: 'امروز توسط کی اداره می‌شه؟' },
          { speaker: 'B', text: 'Viene gestito dallo Stato ed è visitato ogni giorno.', translation: 'توسط دولت اداره می‌شه و هر روز بازدید می‌شه.' },
        ],
        tips: ['Essere + pp for states', 'Venire + pp for actions (not compound tenses)', '"Da" introduces the agent (by whom)'],
      },
    ],
    exercises: [
      { id: 'ex24-1', type: 'fill_blank', question: 'Il libro ___ scritto da Dante. (passive, presente)', correctAnswer: 'è stato scritto' },
      { id: 'ex24-2', type: 'multiple_choice', question: '"Si vende" is an example of?', options: ['Reflexive', 'Si passivante', 'Impersonal', 'Active'], correctAnswer: 'Si passivante' },
    ],
    flashcards: [
      { id: 'fc24-1', lessonId: 24, front: 'viene venduto', back: 'فروخته می‌شود', example: 'Il vino viene venduto ovunque.', pronunciation: 'ˈvjɛːne venˈduːto', difficulty: 'intermediate' },
      { id: 'fc24-2', lessonId: 24, front: 'da (agente)', back: 'توسط', example: 'Dipinto da Leonardo.', pronunciation: 'da', difficulty: 'intermediate' },
      { id: 'fc24-3', lessonId: 24, front: 'si parla', back: 'صحبت می‌شود', example: 'Qui si parla italiano.', pronunciation: 'si ˈparla', difficulty: 'intermediate' },
    ],
  },

  {
    id: 25, number: 5, bookSlug: BOOK_SLUG, slug: 'ne3-lesson-5', pdfUrl: PDF_URL, startPage: 62, endPage: 74,
    title: 'I verbi modali avanzati', titleFa: 'افعال مُدال پیشرفته',
    subtitle: 'Advanced Modal Verbs', subtitleFa: 'افعال مُدال پیشرفته',
    overview: 'Approfondisci l\'uso dei verbi modali in tutti i tempi.', overviewFa: 'استفاده از افعال مُدال در تمام زمان‌ها را عمیق‌تر یاد بگیر.',
    objectives: ['Use modals in past tenses', 'Distinguish nuances of dovere/potere/volere', 'Use sapere vs potere', 'Modal + infinito passato'],
    objectivesFa: ['افعال مُدال را در زمان گذشته استفاده کن', 'تفاوت‌های dovere/potere/volere را بفهم', 'sapere vs potere را تشخیص بده', 'مُدال + مصدر گذشته'],
    color: 'from-rose-500 to-red-600', icon: '⚙️', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v25-1', lessonId: 25, word: 'ho dovuto', translation: 'مجبور شدم', pronunciation: 'ɔ doˈvuːto', exampleIt: 'Ho dovuto lavorare tutto il giorno.', exampleFa: 'مجبور شدم تمام روز کار کنم.', difficulty: 'intermediate', category: 'modals_past' },
      { id: 'v25-2', lessonId: 25, word: 'ho potuto', translation: 'تونستم', pronunciation: 'ɔ poˈtuːto', exampleIt: 'Non ho potuto dormire.', exampleFa: 'نتونستم بخوابم.', difficulty: 'intermediate', category: 'modals_past' },
      { id: 'v25-3', lessonId: 25, word: 'sapere', translation: 'بلد بودن (مهارت)', pronunciation: 'saˈpeːre', exampleIt: 'So nuotare bene.', exampleFa: 'خوب شنا بلدم.', difficulty: 'intermediate', category: 'modals' },
      { id: 'v25-4', lessonId: 25, word: 'avrebbe dovuto', translation: 'باید می‌کرد (ولی نکرد)', pronunciation: 'avˈrɛbbe doˈvuːto', exampleIt: 'Avresti dovuto studiare di più.', exampleFa: 'باید بیشتر درس می‌خوندی.', difficulty: 'advanced', category: 'modals_conditional' },
      { id: 'v25-5', lessonId: 25, word: 'avrebbe potuto', translation: 'می‌تونست (ولی نکرد)', pronunciation: 'avˈrɛbbe poˈtuːto', exampleIt: 'Avrebbe potuto chiamarmi!', exampleFa: 'می‌تونست بهم زنگ بزنه!', difficulty: 'advanced', category: 'modals_conditional' },
      { id: 'v25-6', lessonId: 25, word: 'riuscire a', translation: 'موفق شدن', pronunciation: 'riˈuʃʃire a', exampleIt: 'Sei riuscito a risolvere il problema?', exampleFa: 'تونستی مشکل را حل کنی؟', difficulty: 'intermediate', category: 'modals' },
    ],
    grammar: [
      {
        id: 'g25-1', lessonId: 25, title: 'Modals in past tenses', titleFa: 'افعال مُدال در گذشته',
        explanation: 'Modals in passato prossimo use avere + pp. The choice of auxiliary can change meaning.',
        explanationFa: 'مُدال‌ها در گذشته از avere + اسم مفعول استفاده می‌کنند. انتخاب فعل کمکی معنا را تغییر می‌دهد.',
        examples: [
          { italian: 'Ho dovuto partire. (I had to leave — and did)', persian: 'مجبور شدم برم (و رفتم).' },
          { italian: 'Sono dovuto partire. (I had to leave — focus on leaving)', persian: 'مجبور شدم برم (تأکید روی رفتن).' },
          { italian: 'Sapere vs potere: So guidare (skill) vs Posso guidare (permission/ability now)', persian: 'بلد بودن vs توانستن/اجازه داشتن' },
        ],
        commonMistakes: ['Sapere = know how (skill); potere = be able to (circumstance)', 'Avrebbe potuto/dovuto = unrealized possibility/obligation'],
        exercises: [{ id: 'ex25-g1-1', type: 'fill_blank', question: 'Ieri non ___ (potere, io) venire.', correctAnswer: 'ho potuto' }],
      },
    ],
    reading: [
      {
        id: 'r25-1', lessonId: 25, title: 'Rimpianti', titleFa: 'تأسف‌ها',
        content: `Guardando indietro, ci sono tante cose che avrei dovuto fare diversamente. Da giovane avrei potuto studiare di più, ma preferivo uscire con gli amici. Avrei dovuto imparare il pianoforte quando ne avevo l\'opportunità. Non ho potuto viaggiare molto perché non avevo soldi. Però sono riuscito a costruire una bella famiglia e una carriera soddisfacente. In fondo, non mi lamento!`,
        translation: `نگاه به گذشته، کارهای زیادی هست که باید متفاوت انجام می‌دادم. جوان بودم باید بیشتر درس می‌خوندم، ولی ترجیح می‌دادم با دوستام بیرون برم. باید پیانو یاد می‌گرفتم وقتی فرصت داشتم. نتونستم خیلی سفر کنم چون پول نداشتم. ولی موفق شدم یه خانواده قشنگ و شغل رضایت‌بخش بسازم. در نهایت، شکایتی ندارم!`,
        vocabulary: ['v25-1', 'v25-2', 'v25-4', 'v25-5', 'v25-6'],
      },
    ],
    listening: [
      {
        id: 'l25-1', lessonId: 25, title: 'Un errore da non ripetere', titleFa: 'یه اشتباه که نباید تکرار بشه',
        transcript: `A: Com'è andato l'esame?
B: Malissimo. Non sono riuscito a finire tutti gli esercizi.
A: Ma non avevi studiato?
B: Sì, ma avrei dovuto ripassare anche i verbi modali. Ho potuto fare solo la metà.
A: Avresti potuto chiedermi aiuto, sai?
B: Lo so! La prossima volta dovrò organizzarmi meglio.
A: Dai, puoi rifarlo a settembre!`,
        translation: `A: امتحان چطور رفت؟
B: خیلی بد. نتونستم همه تمرین‌ها را تموم کنم.
A: مگه درس نخونده بودی؟
B: چرا، ولی باید افعال مُدال را هم مرور می‌کردم. فقط تونستم نصفش را انجام بدم.
A: می‌تونستی ازم کمک بخوای، می‌دونی؟
B: می‌دونم! دفعه بعد باید بهتر برنامه‌ریزی کنم.
A: بیا، می‌تونی شهریور دوباره بدی!`,
        duration: 55,
      },
    ],
    speaking: [
      {
        id: 'sp25-1', lessonId: 25, type: 'conversation', title: 'Regrets and missed opportunities', titleFa: 'تأسف و فرصت‌های از دست رفته',
        scenario: 'Talk about things you should have done or could have done differently.',
        scenarioFa: 'درباره کارهایی که باید انجام می‌دادی یا می‌تونستی متفاوت انجام بدی صحبت کن.',
        lines: [
          { speaker: 'A', text: 'Hai qualche rimpianto nella vita?', translation: 'تو زندگی‌ات تأسفی داری؟' },
          { speaker: 'B', text: 'Sì, avrei dovuto ___ quando ero giovane.', translation: 'بله، باید ___ وقتی جوان بودم.' },
          { speaker: 'A', text: 'Anch\'io! Avrei potuto ___ ma non l\'ho fatto.', translation: 'منم! می‌تونستم ___ ولی نکردم.' },
          { speaker: 'B', text: 'Be\', non si può cambiare il passato. Dobbiamo guardare avanti!', translation: 'خب، نمی‌شه گذشته را تغییر داد. باید به جلو نگاه کنیم!' },
        ],
        tips: ['"Avrei dovuto" = should have (regret)', '"Avrei potuto" = could have (missed opportunity)', '"Sono riuscito/a" = I managed to (success)'],
      },
    ],
    exercises: [
      { id: 'ex25-1', type: 'fill_blank', question: '___ (tu, dovere, condizionale passato) studiare di più.', correctAnswer: 'Avresti dovuto' },
      { id: 'ex25-2', type: 'multiple_choice', question: '"So cucinare" means?', options: ['I can cook today', 'I know how to cook', 'I must cook', 'I want to cook'], correctAnswer: 'I know how to cook' },
    ],
    flashcards: [
      { id: 'fc25-1', lessonId: 25, front: 'ho dovuto', back: 'مجبور شدم', example: 'Ho dovuto partire.', pronunciation: 'ɔ doˈvuːto', difficulty: 'intermediate' },
      { id: 'fc25-2', lessonId: 25, front: 'avrebbe dovuto', back: 'باید می‌کرد', example: 'Avresti dovuto studiare.', pronunciation: 'avˈrɛbbe doˈvuːto', difficulty: 'advanced' },
      { id: 'fc25-3', lessonId: 25, front: 'riuscire a', back: 'موفق شدن', example: 'Sono riuscito a finire.', pronunciation: 'riˈuʃʃire a', difficulty: 'intermediate' },
    ],
  },

  {
    id: 26, number: 6, bookSlug: BOOK_SLUG, slug: 'ne3-lesson-6', pdfUrl: PDF_URL, startPage: 76, endPage: 87,
    title: 'Il periodo ipotetico', titleFa: 'جملات شرطی',
    subtitle: 'Conditional Sentences (All Types)', subtitleFa: 'جملات شرطی (همه انواع)',
    overview: 'Impara tutti e tre i tipi di periodo ipotetico in italiano.', overviewFa: 'هر سه نوع جمله شرطی ایتالیایی را یاد بگیر.',
    objectives: ['Use type 1: real conditions (futuro)', 'Use type 2: hypothetical (congiuntivo + condizionale)', 'Use type 3: impossible past (congiuntivo passato + condizionale passato)', 'Mix types in conversation'],
    objectivesFa: ['نوع ۱: شرط واقعی (آینده)', 'نوع ۲: فرضی (التزامی + شرطی)', 'نوع ۳: غیرممکن در گذشته', 'انواع را در مکالمه ترکیب کن'],
    color: 'from-blue-600 to-cyan-700', icon: '🔀', estimatedMinutes: 70,
    vocabulary: [
      { id: 'v26-1', lessonId: 26, word: 'se (tipo 1)', translation: 'اگر (نوع ۱ - احتمالی)', pronunciation: 'se', exampleIt: 'Se pioverà, prenderò l\'ombrello.', exampleFa: 'اگه باران بباره، چتر می‌برم.', difficulty: 'intermediate', category: 'conditionals' },
      { id: 'v26-2', lessonId: 26, word: 'se (tipo 2)', translation: 'اگر (نوع ۲ - فرضی)', pronunciation: 'se', exampleIt: 'Se avessi i soldi, comprerei una villa.', exampleFa: 'اگه پول داشتم، یه ویلا می‌خریدم.', difficulty: 'advanced', category: 'conditionals' },
      { id: 'v26-3', lessonId: 26, word: 'se (tipo 3)', translation: 'اگر (نوع ۳ - غیرممکن)', pronunciation: 'se', exampleIt: 'Se avessi studiato, avrei superato l\'esame.', exampleFa: 'اگه درس خونده بودم، امتحان را پاس می‌کردم.', difficulty: 'advanced', category: 'conditionals' },
      { id: 'v26-4', lessonId: 26, word: 'purché', translation: 'مشروط بر اینکه', pronunciation: 'purˈke', exampleIt: 'Vengo, purché tu mi aspetti.', exampleFa: 'میام، مشروط بر اینکه صبرم کنی.', difficulty: 'advanced', category: 'conjunctions' },
      { id: 'v26-5', lessonId: 26, word: 'a meno che', translation: 'مگر اینکه', pronunciation: 'a ˈmeːno ke', exampleIt: 'Vengo, a meno che non piova.', exampleFa: 'میام، مگر اینکه باران بباره.', difficulty: 'advanced', category: 'conjunctions' },
      { id: 'v26-6', lessonId: 26, word: 'nel caso in cui', translation: 'در صورتی که', pronunciation: 'nel ˈkaːzo in kwi', exampleIt: 'Nel caso in cui ci fossero problemi, chiamami.', exampleFa: 'در صورتی که مشکلی بود، بهم زنگ بزن.', difficulty: 'advanced', category: 'conjunctions' },
    ],
    grammar: [
      {
        id: 'g26-1', lessonId: 26, title: 'Three types of conditional sentences', titleFa: 'سه نوع جمله شرطی',
        explanation: 'Italian has three conditional types based on how likely the condition is.',
        explanationFa: 'ایتالیایی سه نوع شرطی بر اساس احتمال شرط دارد.',
        examples: [
          { italian: 'Tipo 1: Se + futuro, futuro → Se verrà, lo saluto.', persian: 'اگه بیاد، سلام می‌کنم.' },
          { italian: 'Tipo 2: Se + congiuntivo imperfetto, condizionale → Se venisse, lo saluterei.', persian: 'اگه می‌اومد، سلام می‌کردم.' },
          { italian: 'Tipo 3: Se + congiuntivo trapassato, condizionale passato → Se fosse venuto, l\'avrei salutato.', persian: 'اگه اومده بود، سلام کرده بودم.' },
        ],
        commonMistakes: ['Never "se + futuro/condizionale" in hypothetical clauses', 'Type 2 uses congiuntivo IMPERFETTO, not presente'],
        exercises: [{ id: 'ex26-g1-1', type: 'multiple_choice', question: 'Tipo 2: Se avessi soldi, ___ una casa.', options: ['comprerei', 'comprerò', 'comprassi', 'compro'], correctAnswer: 'comprerei' }],
      },
    ],
    reading: [
      {
        id: 'r26-1', lessonId: 26, title: 'Un\'intervista impossibile', titleFa: 'یه مصاحبه غیرممکن',
        content: `Giornalista: Se potesse intervistare qualsiasi persona storica, chi sceglierebbe?
Artista: Se potessi scegliere, intervisterei Leonardo da Vinci.
Giornalista: E cosa gli chiederebbe?
Artista: Se avessi avuto quell\'occasione, gli avrei chiesto come faceva a essere così geniale. Se fosse vissuto oggi, avrebbe sicuramente inventato cose straordinarie. Nel caso in cui potesse venire al mio studio, gli mostrerei le mie opere.`,
        translation: `خبرنگار: اگه می‌تونستید با هر شخصیت تاریخی مصاحبه کنید، کی را انتخاب می‌کردید؟
هنرمند: اگه می‌تونستم انتخاب کنم، با لئوناردو داوینچی مصاحبه می‌کردم.
خبرنگار: چی ازش می‌پرسیدید؟
هنرمند: اگه اون فرصت را داشتم، می‌پرسیدم چطور این‌قدر نابغه بود. اگه امروز زنده بود، حتماً چیزهای شگفت‌انگیزی اختراع می‌کرد. در صورتی که می‌تونست به استودیوم بیاد، آثارم را نشونش می‌دادم.`,
        vocabulary: ['v26-1', 'v26-2', 'v26-3', 'v26-4', 'v26-5', 'v26-6'],
      },
    ],
    listening: [
      {
        id: 'l26-1', lessonId: 26, title: 'E se...?', titleFa: 'و اگه...؟',
        transcript: `A: Se vincessi alla lotteria, cosa faresti?
B: Se vincessi, viaggerei per tutto il mondo!
A: E dove andresti per prima cosa?
B: Se avessi milioni di euro, andrei in Giappone. E tu?
A: Io, se potessi, comprerei una piccola casa in Toscana.
B: Bella idea! A meno che non preferisca il mare.
A: Se avessi scelto il mare, avrei comprato in Sicilia.`,
        translation: `A: اگه لاتاری برنده می‌شدی، چیکار می‌کردی؟
B: اگه برنده می‌شدم، دور دنیا سفر می‌کردم!
A: اول کجا می‌رفتی؟
B: اگه میلیون‌ها یورو داشتم، می‌رفتم ژاپن. تو چطور؟
A: من اگه می‌تونستم، یه خونه کوچیک در توسکانا می‌خریدم.
B: ایده قشنگی! مگر اینکه دریا را ترجیح بدی.
A: اگه دریا را انتخاب کرده بودم، در سیسیل می‌خریدم.`,
        duration: 58,
      },
    ],
    speaking: [
      {
        id: 'sp26-1', lessonId: 26, type: 'conversation', title: 'Hypothetical conversations', titleFa: 'مکالمه‌های فرضی',
        scenario: 'Practice all three conditional types in conversation.',
        scenarioFa: 'هر سه نوع شرطی را در مکالمه تمرین کن.',
        lines: [
          { speaker: 'A', text: 'Se vincessi alla lotteria, cosa faresti?', translation: 'اگه لاتاری برنده می‌شدی، چیکار می‌کردی؟' },
          { speaker: 'B', text: 'Se vincessi, ___ . E tu?', translation: 'اگه برنده می‌شدم، ___. تو چطور؟' },
          { speaker: 'A', text: 'Se avessi potuto scegliere la mia vita...', translation: 'اگه می‌تونستم زندگیم را انتخاب کنم...' },
          { speaker: 'B', text: 'Se avessi saputo prima, avrei ___!', translation: 'اگه زودتر می‌دونستم، ___ می‌کردم!' },
        ],
        tips: ['Type 1: real/likely future → futuro in both', 'Type 2: hypothetical present → congiuntivo imp. + cond.', 'Type 3: impossible past → congiuntivo trap. + cond. passato'],
      },
    ],
    exercises: [
      { id: 'ex26-1', type: 'fill_blank', question: 'Se ___ (avere, tipo 2) più tempo, leggerei di più.', correctAnswer: 'avessi' },
      { id: 'ex26-2', type: 'fill_blank', question: 'Se avessi studiato, ___ (superare, tipo 3) l\'esame.', correctAnswer: 'avrei superato' },
    ],
    flashcards: [
      { id: 'fc26-1', lessonId: 26, front: 'tipo 2: se avessi', back: 'اگه داشتم (فرضی)', example: 'Se avessi soldi, viaggierei.', pronunciation: 'se avˈvɛssi', difficulty: 'advanced' },
      { id: 'fc26-2', lessonId: 26, front: 'tipo 3: se avessi avuto', back: 'اگه داشته بودم (غیرممکن)', example: 'Se avessi studiato, avrei passato.', pronunciation: 'se avˈvɛssi aˈvuːto', difficulty: 'advanced' },
      { id: 'fc26-3', lessonId: 26, front: 'purché', back: 'مشروط بر اینکه', example: 'Vengo, purché tu aspetti.', pronunciation: 'purˈke', difficulty: 'advanced' },
    ],
  },

  {
    id: 27, number: 7, bookSlug: BOOK_SLUG, slug: 'ne3-lesson-7', pdfUrl: PDF_URL, startPage: 88, endPage: 98,
    title: 'Cultura e tradizioni italiane', titleFa: 'فرهنگ و سنت‌های ایتالیایی',
    subtitle: 'Italian Culture, Customs and Identity', subtitleFa: 'فرهنگ، آداب و هویت ایتالیایی',
    overview: 'Scopri le tradizioni, i valori e le usanze della cultura italiana.', overviewFa: 'سنت‌ها، ارزش‌ها و آداب فرهنگ ایتالیایی را کشف کن.',
    objectives: ['Discuss Italian cultural values', 'Talk about regional differences', 'Use reported speech basics', 'Describe traditions and festivals'],
    objectivesFa: ['درباره ارزش‌های فرهنگی ایتالیا بحث کن', 'از تفاوت‌های منطقه‌ای صحبت کن', 'اصول نقل قول را استفاده کن', 'سنت‌ها و جشن‌ها را توصیف کن'],
    color: 'from-green-600 to-emerald-700', icon: '🎭', estimatedMinutes: 60,
    vocabulary: [
      { id: 'v27-1', lessonId: 27, word: 'la campanilismo', translation: 'تعصب محلی', pronunciation: 'la kampaniˈlizmo', exampleIt: 'Il campanilismo è forte in Italia.', exampleFa: 'تعصب محلی در ایتالیا قویه.', difficulty: 'advanced', category: 'culture' },
      { id: 'v27-2', lessonId: 27, word: 'il carnevale', translation: 'کارناوال', pronunciation: 'il karneˈvaːle', exampleIt: 'Il carnevale di Venezia è famoso in tutto il mondo.', exampleFa: 'کارناوال ونیز در سراسر دنیا مشهوره.', difficulty: 'beginner', category: 'festivals' },
      { id: 'v27-3', lessonId: 27, word: 'il Ferragosto', translation: 'تعطیلات ۱۵ اوت', pronunciation: 'il ferraˈɡosto', exampleIt: 'A Ferragosto tutti vanno in vacanza.', exampleFa: 'در فراگوستو همه می‌رن تعطیلات.', difficulty: 'intermediate', category: 'festivals' },
      { id: 'v27-4', lessonId: 27, word: 'il dolce far niente', translation: 'لذت از کسالت', pronunciation: 'il ˈdoltʃe far ˈnjɛnte', exampleIt: 'Gli italiani apprezzano il dolce far niente.', exampleFa: 'ایتالیایی‌ها از لذت کسالت قدردانی می‌کنند.', difficulty: 'intermediate', category: 'culture' },
      { id: 'v27-5', lessonId: 27, word: 'la bella figura', translation: 'ظاهر خوب / وجهه', pronunciation: 'la ˈbɛlla ˈfiɡura', exampleIt: 'Fare bella figura è importante per gli italiani.', exampleFa: 'ظاهر خوب برای ایتالیایی‌ها مهمه.', difficulty: 'intermediate', category: 'culture' },
      { id: 'v27-6', lessonId: 27, word: 'il dialetto', translation: 'لهجه محلی', pronunciation: 'il djaˈlɛtto', exampleIt: 'In Italia ci sono molti dialetti regionali.', exampleFa: 'در ایتالیا لهجه‌های محلی زیادی هست.', difficulty: 'intermediate', category: 'culture' },
    ],
    grammar: [
      {
        id: 'g27-1', lessonId: 27, title: 'Discorso indiretto (introduzione)', titleFa: 'نقل قول غیرمستقیم (مقدمه)',
        explanation: 'Reported speech shifts tenses when the reporting verb is past.',
        explanationFa: 'در نقل قول غیرمستقیم، وقتی فعل گزارش‌دهنده گذشته است، زمان‌ها عوض می‌شوند.',
        examples: [
          { italian: 'Dice che → no change: "Viene" → Dice che viene.', persian: 'می‌گه که میاد.' },
          { italian: 'Ha detto che → "viene" → Ha detto che veniva.', persian: 'گفت که میاد (می‌اومد).' },
          { italian: '"Sono stanco" → Ha detto che era stanco.', persian: 'گفت که خسته‌ست (بود).' },
        ],
        commonMistakes: ['Present → imperfetto in past reported speech', 'Futuro → condizionale in past reported speech'],
        exercises: [{ id: 'ex27-g1-1', type: 'fill_blank', question: 'Ha detto: "Sono felice." → Ha detto che ___ felice.', correctAnswer: 'era' }],
      },
    ],
    reading: [
      {
        id: 'r27-1', lessonId: 27, title: 'L\'identità italiana', titleFa: 'هویت ایتالیایی',
        content: `L\'Italia è un paese di forti contrasti. Il campanilismo — l\'attaccamento alla propria città o regione — è ancora molto presente. Un romano si sente diverso da un milanese, e un napoletano da un veneziano. Eppure, ci sono valori condivisi: la famiglia, il cibo, la bella figura e il dolce far niente. Il carnevale, la Pasqua, il Ferragosto sono feste celebrate in tutto il paese. I dialetti regionali resistono accanto all\'italiano standard.`,
        translation: `ایتالیا کشور تضادهای شدیده. تعصب محلی — دلبستگی به شهر یا منطقه خودت — هنوز خیلی حضور داره. یه رومی احساس می‌کنه با میلانی فرق داره، و یه ناپلی‌ای با ونیزی‌ای. با این حال، ارزش‌های مشترکی هست: خانواده، غذا، ظاهر خوب و لذت از کسالت. کارناوال، عید پاک، فراگوستو جشن‌هایی هستند که در سراسر کشور برگزار می‌شود. لهجه‌های منطقه‌ای در کنار ایتالیایی استاندارد دوام می‌آورند.`,
        vocabulary: ['v27-1', 'v27-2', 'v27-3', 'v27-4', 'v27-5', 'v27-6'],
      },
    ],
    listening: [
      {
        id: 'l27-1', lessonId: 27, title: 'Nord contro Sud?', titleFa: 'شمال در مقابل جنوب؟',
        transcript: `A: È vero che c'è divisione tra nord e sud in Italia?
B: C'è ancora qualche stereotipo, ma le differenze si stanno riducendo.
A: Un mio amico ha detto che i meridionali sono più calorosi.
B: Ha ragione! Ma ha detto anche che i nordici sono più efficienti.
A: Questi stereotipi esistono davvero?
B: Esistono, ma la realtà è più complessa. L'Italia è bella proprio perché è così diversa!`,
        translation: `A: آیا واقعاً بین شمال و جنوب ایتالیا تقسیم‌بندی هست؟
B: هنوز یه سری کلیشه وجود داره، ولی تفاوت‌ها کمتر می‌شه.
A: یه دوستم گفت که جنوبی‌ها گرم‌تر هستند.
B: حق داره! ولی گفت که شمالی‌ها هم کارآمدترند.
A: این کلیشه‌ها واقعاً وجود دارند؟
B: وجود دارند، ولی واقعیت پیچیده‌تره. ایتالیا دقیقاً به خاطر این تنوع قشنگه!`,
        duration: 55,
      },
    ],
    speaking: [
      {
        id: 'sp27-1', lessonId: 27, type: 'conversation', title: 'Comparing cultures', titleFa: 'مقایسه فرهنگ‌ها',
        scenario: 'Compare Italian culture with your own culture.',
        scenarioFa: 'فرهنگ ایتالیایی را با فرهنگ خودت مقایسه کن.',
        lines: [
          { speaker: 'A', text: 'Cosa ti colpisce di più della cultura italiana?', translation: 'از فرهنگ ایتالیایی چی بیشتر برات جالبه؟' },
          { speaker: 'B', text: 'Mi colpisce ___ . Nel mio paese invece ___.', translation: '___ برام جالبه. در کشور من اما ___.' },
          { speaker: 'A', text: 'E pensi che gli italiani siano felici della loro cultura?', translation: 'فکر می‌کنی ایتالیایی‌ها از فرهنگشون راضی هستند؟' },
          { speaker: 'B', text: 'Credo che siano orgogliosi, sebbene ci siano anche critiche.', translation: 'فکر می‌کنم افتخار می‌کنند، هرچند انتقاداتی هم هست.' },
        ],
        tips: ['Use "mi colpisce" for what strikes you', 'Combine subjunctive + concessive clauses', '"Sebbene + congiuntivo" = although'],
      },
    ],
    exercises: [
      { id: 'ex27-1', type: 'fill_blank', question: 'Ha detto che ___ (essere) stanco. (reported speech)', correctAnswer: 'era' },
      { id: 'ex27-2', type: 'multiple_choice', question: '"La bella figura" refers to?', options: ['A nice painting', 'Making a good impression', 'A slim figure', 'Italian fashion'], correctAnswer: 'Making a good impression' },
    ],
    flashcards: [
      { id: 'fc27-1', lessonId: 27, front: 'il campanilismo', back: 'تعصب محلی', example: 'Il campanilismo è forte.', pronunciation: 'la kampaniˈlizmo', difficulty: 'advanced' },
      { id: 'fc27-2', lessonId: 27, front: 'la bella figura', back: 'ظاهر خوب / وجهه', example: 'Fare bella figura.', pronunciation: 'la ˈbɛlla ˈfiɡura', difficulty: 'intermediate' },
      { id: 'fc27-3', lessonId: 27, front: 'il dolce far niente', back: 'لذت از کسالت', example: 'Godersi il dolce far niente.', pronunciation: 'il ˈdoltʃe far ˈnjɛnte', difficulty: 'intermediate' },
    ],
  },

  {
    id: 28, number: 8, bookSlug: BOOK_SLUG, slug: 'ne3-lesson-8', pdfUrl: PDF_URL, startPage: 100, endPage: 111,
    title: 'I media e la comunicazione', titleFa: 'رسانه و ارتباطات',
    subtitle: 'Media, News and Digital Communication', subtitleFa: 'رسانه، خبر و ارتباطات دیجیتال',
    overview: 'Impara a parlare di media, notizie e comunicazione digitale.', overviewFa: 'یاد بگیر درباره رسانه، خبر و ارتباطات دیجیتال صحبت کنی.',
    objectives: ['Discuss media and news', 'Use gerundio and participio', 'Express concession and contrast', 'Understand media vocabulary'],
    objectivesFa: ['درباره رسانه و خبر بحث کن', 'از gerundio و participio استفاده کن', 'تضاد و اعتراض را بیان کن', 'واژگان رسانه را یاد بگیر'],
    color: 'from-slate-500 to-gray-600', icon: '📱', estimatedMinutes: 60,
    vocabulary: [
      { id: 'v28-1', lessonId: 28, word: 'le notizie', translation: 'اخبار', pronunciation: 'le noˈtiːtsje', exampleIt: 'Guardo le notizie ogni sera.', exampleFa: 'هر شب اخبار می‌بینم.', difficulty: 'beginner', category: 'media' },
      { id: 'v28-2', lessonId: 28, word: 'il telegiornale', translation: 'اخبار تلویزیون', pronunciation: 'il teledʒorˈnaːle', exampleIt: 'Il telegiornale va in onda alle 20.', exampleFa: 'اخبار تلویزیون ساعت ۲۰ پخش می‌شه.', difficulty: 'intermediate', category: 'media' },
      { id: 'v28-3', lessonId: 28, word: 'le fake news', translation: 'اخبار جعلی', pronunciation: 'le feik njuːz', exampleIt: 'Dobbiamo verificare le fonti per evitare le fake news.', exampleFa: 'باید منابع را بررسی کنیم تا از اخبار جعلی اجتناب کنیم.', difficulty: 'intermediate', category: 'media' },
      { id: 'v28-4', lessonId: 28, word: 'condividere', translation: 'به اشتراک گذاشتن', pronunciation: 'kondiˈviːdere', exampleIt: 'Ho condiviso l\'articolo sui social.', exampleFa: 'مقاله را در شبکه‌های اجتماعی به اشتراک گذاشتم.', difficulty: 'intermediate', category: 'digital' },
      { id: 'v28-5', lessonId: 28, word: 'il podcast', translation: 'پادکست', pronunciation: 'il ˈpodkast', exampleIt: 'Ascolto un podcast di italiano ogni giorno.', exampleFa: 'هر روز یه پادکست ایتالیایی گوش می‌دم.', difficulty: 'beginner', category: 'digital' },
      { id: 'v28-6', lessonId: 28, word: 'influenzare', translation: 'تأثیر گذاشتن', pronunciation: 'influenˈtsaːre', exampleIt: 'I social media influenzano l\'opinione pubblica.', exampleFa: 'شبکه‌های اجتماعی روی نظر عمومی تأثیر می‌گذارند.', difficulty: 'intermediate', category: 'media' },
    ],
    grammar: [
      {
        id: 'g28-1', lessonId: 28, title: 'Gerundio', titleFa: 'فعل حالیه (Gerundio)',
        explanation: 'The gerundio expresses simultaneous or causal actions. It never changes form.',
        explanationFa: 'Gerundio اعمال همزمان یا علّی را بیان می‌کند. شکلش هیچ‌وقت تغییر نمی‌کند.',
        examples: [
          { italian: '-are → -ando: ascoltando, parlando, mangiando', persian: 'گوش دادن، صحبت کردن، خوردن' },
          { italian: '-ere/-ire → -endo: leggendo, dormendo, finendo', persian: 'خواندن، خوابیدن، تمام کردن' },
          { italian: 'Guardando la TV, ho mangiato la pizza.', persian: 'در حالی که تلویزیون می‌دیدم، پیتزا خوردم.' },
        ],
        commonMistakes: ['Gerundio subject must match the main clause subject', 'Use stare + gerundio for ongoing actions (sto guardando)'],
        exercises: [{ id: 'ex28-g1-1', type: 'fill_blank', question: '___ (leggere) il giornale, ho trovato una notizia interessante.', correctAnswer: 'Leggendo' }],
      },
    ],
    reading: [
      {
        id: 'r28-1', lessonId: 28, title: 'Il futuro dei media', titleFa: 'آینده رسانه',
        content: `Leggendo i dati recenti, si nota che i giovani italiani preferiscono informarsi online. Il telegiornale tradizionale perde spettatori ogni anno. Usando i social media, le persone si informano ma rischiano di leggere fake news. Condividendo notizie non verificate, si contribuisce alla disinformazione. I podcast stanno diventando sempre più popolari. Nonostante ciò, i giornali cartacei resistono ancora, soprattutto tra gli anziani.`,
        translation: `با خواندن داده‌های اخیر، می‌بینیم که جوانان ایتالیایی ترجیح می‌دهند آنلاین اطلاعات کسب کنند. اخبار تلویزیون سنتی هر سال بیننده از دست می‌دهد. با استفاده از شبکه‌های اجتماعی، مردم اطلاعات کسب می‌کنند ولی خطر خواندن اخبار جعلی را دارند. با اشتراک‌گذاری اخبار تأیید نشده، به اطلاعات غلط کمک می‌کنیم. پادکست‌ها محبوب‌تر می‌شوند. با وجود این، روزنامه‌های کاغذی هنوز دوام می‌آورند، مخصوصاً بین سالمندان.`,
        vocabulary: ['v28-1', 'v28-2', 'v28-3', 'v28-4', 'v28-5', 'v28-6'],
      },
    ],
    listening: [
      {
        id: 'l28-1', lessonId: 28, title: 'Notizie di oggi', titleFa: 'اخبار امروز',
        transcript: `Conduttore: Buonasera. Le notizie più importanti di oggi. Iniziando dall'economia, il governo ha annunciato nuove misure per il lavoro. Passando alla cultura, il Festival di Sanremo ha superato ogni record di ascolti. Guardando alla situazione internazionale, i leader mondiali si sono incontrati a Roma. Concludendo con lo sport, la nazionale ha vinto la partita per 2 a 1.`,
        translation: `گوینده: عصر بخیر. مهم‌ترین اخبار امروز. شروع از اقتصاد، دولت اقدامات جدیدی برای اشتغال اعلام کرد. رفتن به فرهنگ، جشنواره سانرمو رکورد بینندگان را شکست. نگاه به وضعیت بین‌المللی، رهبران جهانی در رُم با هم ملاقات کردند. ختم به ورزش، تیم ملی با نتیجه ۲ به ۱ برنده شد.`,
        duration: 50,
      },
    ],
    speaking: [
      {
        id: 'sp28-1', lessonId: 28, type: 'conversation', title: 'Discussing media habits', titleFa: 'بحث درباره عادت‌های رسانه‌ای',
        scenario: 'Talk about how you consume media and stay informed.',
        scenarioFa: 'درباره نحوه استفاده از رسانه و آگاه ماندن صحبت کن.',
        lines: [
          { speaker: 'A', text: 'Come ti informi sulle notizie?', translation: 'چطور از اخبار با خبر می‌شی؟' },
          { speaker: 'B', text: 'Leggendo ___ e ascoltando ___. E tu?', translation: 'با خوندن ___ و گوش دادن به ___. تو چطور؟' },
          { speaker: 'A', text: 'Pensi che i social media siano utili o pericolosi?', translation: 'فکر می‌کنی شبکه‌های اجتماعی مفیدند یا خطرناک؟' },
          { speaker: 'B', text: 'Credo che siano utili, sebbene vadano usati con cautela.', translation: 'باور دارم مفیدند، هرچند باید با احتیاط استفاده بشند.' },
        ],
        tips: ['Gerundio for simultaneous action: "Leggendo + main verb"', 'Subjunctive with opinion verbs', '"Nonostante/sebbene + congiuntivo" for concession'],
      },
    ],
    exercises: [
      { id: 'ex28-1', type: 'fill_blank', question: '___ (guardare) la TV, ho visto una pubblicità interessante.', correctAnswer: 'Guardando' },
      { id: 'ex28-2', type: 'multiple_choice', question: 'Gerundio of "leggere" = ?', options: ['leggendo', 'leggendo', 'letto', 'leggere'], correctAnswer: 'leggendo' },
    ],
    flashcards: [
      { id: 'fc28-1', lessonId: 28, front: 'le notizie', back: 'اخبار', example: 'Guardo le notizie.', pronunciation: 'le noˈtiːtsje', difficulty: 'beginner' },
      { id: 'fc28-2', lessonId: 28, front: 'condividere', back: 'به اشتراک گذاشتن', example: 'Ho condiviso sui social.', pronunciation: 'kondiˈviːdere', difficulty: 'intermediate' },
      { id: 'fc28-3', lessonId: 28, front: 'le fake news', back: 'اخبار جعلی', example: 'Attento alle fake news.', pronunciation: 'le feik njuːz', difficulty: 'intermediate' },
    ],
  },

  {
    id: 29, number: 9, bookSlug: BOOK_SLUG, slug: 'ne3-lesson-9', pdfUrl: PDF_URL, startPage: 112, endPage: 127,
    title: 'L\'ambiente', titleFa: 'محیط زیست',
    subtitle: 'Environment, Ecology and Sustainability', subtitleFa: 'محیط زیست، بوم‌شناسی و پایداری',
    overview: 'Impara a discutere di temi ambientali e sostenibilità.', overviewFa: 'یاد بگیر درباره مسائل محیط زیستی و پایداری بحث کنی.',
    objectives: ['Discuss environmental issues', 'Use subjunctive in complex sentences', 'Express purpose and result', 'Propose solutions'],
    objectivesFa: ['درباره مسائل محیط زیستی بحث کن', 'از التزامی در جملات پیچیده استفاده کن', 'هدف و نتیجه را بیان کن', 'راه‌حل پیشنهاد بده'],
    color: 'from-green-500 to-teal-600', icon: '🌍', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v29-1', lessonId: 29, word: 'il cambiamento climatico', translation: 'تغییرات آب و هوایی', pronunciation: 'il kamˈbjamento kliˈmaːtiko', exampleIt: 'Il cambiamento climatico è la sfida principale del nostro tempo.', exampleFa: 'تغییرات آب و هوایی چالش اصلی زمانه ماست.', difficulty: 'intermediate', category: 'environment' },
      { id: 'v29-2', lessonId: 29, word: 'l\'inquinamento', translation: 'آلودگی', pronunciation: 'linkwinaˈmento', exampleIt: 'L\'inquinamento dell\'aria è un problema serio.', exampleFa: 'آلودگی هوا یه مشکل جدیه.', difficulty: 'intermediate', category: 'environment' },
      { id: 'v29-3', lessonId: 29, word: 'riciclare', translation: 'بازیافت کردن', pronunciation: 'ritʃiˈklaːre', exampleIt: 'È importante riciclare i rifiuti.', exampleFa: 'مهمه که زباله‌ها را بازیافت کنیم.', difficulty: 'beginner', category: 'environment' },
      { id: 'v29-4', lessonId: 29, word: 'le energie rinnovabili', translation: 'انرژی‌های تجدیدپذیر', pronunciation: 'le eˈnɛrdʒje rinnoˈvaːbili', exampleIt: 'Dobbiamo investire nelle energie rinnovabili.', exampleFa: 'باید در انرژی‌های تجدیدپذیر سرمایه‌گذاری کنیم.', difficulty: 'advanced', category: 'environment' },
      { id: 'v29-5', lessonId: 29, word: 'la sostenibilità', translation: 'پایداری', pronunciation: 'la sostenibiliˈta', exampleIt: 'La sostenibilità è fondamentale per il futuro.', exampleFa: 'پایداری برای آینده اساسیه.', difficulty: 'advanced', category: 'environment' },
      { id: 'v29-6', lessonId: 29, word: 'risparmiare energia', translation: 'صرفه‌جویی در انرژی', pronunciation: 'risparˈmjaːre eneˈrdʒiːa', exampleIt: 'Dobbiamo risparmiare energia ogni giorno.', exampleFa: 'باید هر روز در انرژی صرفه‌جویی کنیم.', difficulty: 'intermediate', category: 'environment' },
    ],
    grammar: [
      {
        id: 'g29-1', lessonId: 29, title: 'Congiuntivo in purpose and result clauses', titleFa: 'التزامی در جملات هدف و نتیجه',
        explanation: 'Affinché, perché (so that), prima che, prima di require subjunctive.',
        explanationFa: 'Affinché, perché (به خاطر اینکه)، prima che، prima di نیاز به التزامی دارند.',
        examples: [
          { italian: 'Ricicliamo affinché il pianeta sopravviva.', persian: 'بازیافت می‌کنیم تا کره زمین زنده بماند.' },
          { italian: 'Prima che sia troppo tardi, dobbiamo agire.', persian: 'قبل از اینکه خیلی دیر بشه، باید اقدام کنیم.' },
          { italian: 'Benché ci siano leggi, l\'inquinamento continua.', persian: 'اگرچه قوانین هست، آلودگی ادامه داره.' },
        ],
        commonMistakes: ['Affinché/perché (purpose) ALWAYS take subjunctive', '"Prima che" (before someone else) = subjunctive; "prima di" (same subject) = infinitive'],
        exercises: [{ id: 'ex29-g1-1', type: 'fill_blank', question: 'Agisci ora, prima che ___ (essere) troppo tardi.', correctAnswer: 'sia' }],
      },
    ],
    reading: [
      {
        id: 'r29-1', lessonId: 29, title: 'L\'Italia e l\'ambiente', titleFa: 'ایتالیا و محیط زیست',
        content: `L\'Italia è uno dei paesi più colpiti dal cambiamento climatico in Europa. Le alluvioni nel Nord e le siccità nel Sud sono diventate sempre più frequenti. Benché l\'Italia abbia fatto progressi nelle energie rinnovabili, c\'è ancora molto da fare. È fondamentale che i cittadini riciclino e riducano i consumi affinché le prossime generazioni possano godere di un pianeta sano. Prima che sia troppo tardi, dobbiamo cambiare il nostro stile di vita.`,
        translation: `ایتالیا یکی از کشورهایی است که بیشتر از همه در اروپا تحت تأثیر تغییرات آب و هوایی قرار دارد. سیل در شمال و خشکسالی در جنوب بیشتر و بیشتر شده. اگرچه ایتالیا در انرژی‌های تجدیدپذیر پیشرفت کرده، هنوز کار زیادی باید انجام بشه. ضروریه که شهروندان بازیافت کنند و مصرف را کاهش دهند تا نسل‌های آینده بتوانند از یه کره زمین سالم بهره‌مند بشند. قبل از اینکه خیلی دیر بشه، باید سبک زندگیمان را تغییر دهیم.`,
        vocabulary: ['v29-1', 'v29-2', 'v29-3', 'v29-4', 'v29-5', 'v29-6'],
      },
    ],
    listening: [
      {
        id: 'l29-1', lessonId: 29, title: 'Dibattito sull\'ambiente', titleFa: 'بحث درباره محیط زیست',
        transcript: `A: Pensi che il governo faccia abbastanza per l'ambiente?
B: Credo che ci siano buone intenzioni, ma non bastino le parole.
A: Cosa dovremmo fare affinché la situazione migliori?
B: Prima che sia troppo tardi, dobbiamo investire nelle rinnovabili e ridurre le emissioni.
A: E a livello personale?
B: Ognuno dovrebbe riciclare, risparmiare energia e usare meno la macchina.
A: Sono d'accordo, benché non sia sempre facile.`,
        translation: `A: فکر می‌کنی دولت برای محیط زیست کافی انجام می‌ده؟
B: باور دارم نیت خوبه، ولی حرف کافی نیست.
A: برای اینکه وضعیت بهتر بشه باید چیکار کنیم؟
B: قبل از اینکه خیلی دیر بشه، باید در انرژی‌های تجدیدپذیر سرمایه‌گذاری کنیم و انتشار را کاهش بدیم.
A: و در سطح شخصی؟
B: هر کسی باید بازیافت کنه، در انرژی صرفه‌جویی کنه و کمتر از ماشین استفاده کنه.
A: موافقم، اگرچه همیشه آسون نیست.`,
        duration: 60,
      },
    ],
    speaking: [
      {
        id: 'sp29-1', lessonId: 29, type: 'conversation', title: 'Environmental debate', titleFa: 'بحث محیط زیستی',
        scenario: 'Discuss environmental issues and propose solutions.',
        scenarioFa: 'درباره مسائل محیط زیستی بحث کن و راه‌حل پیشنهاد بده.',
        lines: [
          { speaker: 'A', text: 'Qual è il problema ambientale più urgente?', translation: 'مهم‌ترین مشکل محیط زیستی کدامه؟' },
          { speaker: 'B', text: 'Penso che ___ sia il problema principale.', translation: 'فکر می‌کنم ___ مشکل اصلیه.' },
          { speaker: 'A', text: 'Cosa dovremmo fare affinché le cose migliorino?', translation: 'برای اینکه اوضاع بهتر بشه باید چیکار کنیم؟' },
          { speaker: 'B', text: 'Prima che sia troppo tardi, bisogna ___ e ___.', translation: 'قبل از اینکه خیلی دیر بشه، باید ___ و ___.' },
        ],
        tips: ['"Affinché + congiuntivo" = so that', '"Prima che + congiuntivo" = before (something happens)', 'Use "benché/sebbene + congiuntivo" for concession'],
      },
    ],
    exercises: [
      { id: 'ex29-1', type: 'fill_blank', question: 'Ricicliamo affinché il pianeta ___ (sopravvivere).', correctAnswer: 'sopravviva' },
      { id: 'ex29-2', type: 'multiple_choice', question: 'What does "l\'inquinamento" mean?', options: ['Recycling', 'Pollution', 'Sustainability', 'Climate'], correctAnswer: 'Pollution' },
    ],
    flashcards: [
      { id: 'fc29-1', lessonId: 29, front: 'il cambiamento climatico', back: 'تغییرات آب و هوایی', example: 'Il cambiamento climatico è reale.', pronunciation: 'il kamˈbjamento kliˈmaːtiko', difficulty: 'intermediate' },
      { id: 'fc29-2', lessonId: 29, front: 'riciclare', back: 'بازیافت کردن', example: 'Riciclo ogni giorno.', pronunciation: 'ritʃiˈklaːre', difficulty: 'beginner' },
      { id: 'fc29-3', lessonId: 29, front: 'la sostenibilità', back: 'پایداری', example: 'La sostenibilità è importante.', pronunciation: 'la sostenibiliˈta', difficulty: 'advanced' },
    ],
  },

  {
    id: 30, number: 10, bookSlug: BOOK_SLUG, slug: 'ne3-lesson-10', pdfUrl: PDF_URL, startPage: 128, endPage: 140,
    title: 'Lavoro e carriera', titleFa: 'کار و شغل',
    subtitle: 'Career, Job Market and Professional Life', subtitleFa: 'شغل، بازار کار و زندگی حرفه‌ای',
    overview: 'Discuti di carriera, colloqui di lavoro e vita professionale a livello avanzato.', overviewFa: 'درباره شغل، مصاحبه کاری و زندگی حرفه‌ای در سطح پیشرفته بحث کن.',
    objectives: ['Write a CV and cover letter', 'Ace a job interview in Italian', 'Discuss career goals and challenges', 'Use formal register'],
    objectivesFa: ['رزومه و نامه پوششی بنویس', 'مصاحبه شغلی ایتالیایی را با موفقیت انجام بده', 'درباره اهداف و چالش‌های شغلی بحث کن', 'از سبک رسمی استفاده کن'],
    color: 'from-gray-600 to-slate-700', icon: '🎯', estimatedMinutes: 70,
    vocabulary: [
      { id: 'v30-1', lessonId: 30, word: 'il curriculum vitae', translation: 'رزومه', pronunciation: 'il kurˈrikulum ˈviːtae', exampleIt: 'Ho aggiornato il mio curriculum vitae.', exampleFa: 'رزومه‌ام را به‌روز کردم.', difficulty: 'intermediate', category: 'career' },
      { id: 'v30-2', lessonId: 30, word: 'la lettera di presentazione', translation: 'نامه پوششی', pronunciation: 'la ˈlɛttera di presentaˈtsjone', exampleIt: 'La lettera di presentazione deve essere personalizzata.', exampleFa: 'نامه پوششی باید شخصی‌سازی بشه.', difficulty: 'advanced', category: 'career' },
      { id: 'v30-3', lessonId: 30, word: 'i punti di forza', translation: 'نقاط قوت', pronunciation: 'i ˈpunti di ˈfortsa', exampleIt: 'Quali sono i suoi punti di forza?', exampleFa: 'نقاط قوتتون چیه؟', difficulty: 'intermediate', category: 'career' },
      { id: 'v30-4', lessonId: 30, word: 'i punti deboli', translation: 'نقاط ضعف', pronunciation: 'i ˈpunti ˈdeːboli', exampleIt: 'Un punto debole? Sono troppo perfezionista.', exampleFa: 'یه نقطه ضعف؟ خیلی کمال‌گرا هستم.', difficulty: 'intermediate', category: 'career' },
      { id: 'v30-5', lessonId: 30, word: 'le competenze', translation: 'مهارت‌ها', pronunciation: 'le kompeˈtɛntse', exampleIt: 'Ho molte competenze nel campo digitale.', exampleFa: 'مهارت‌های زیادی در حوزه دیجیتال دارم.', difficulty: 'intermediate', category: 'career' },
      { id: 'v30-6', lessonId: 30, word: 'fare carriera', translation: 'پیشرفت شغلی', pronunciation: 'ˈfaːre karˈrjɛːra', exampleIt: 'Voglio fare carriera in ambito internazionale.', exampleFa: 'می‌خوام در حوزه بین‌المللی پیشرفت شغلی کنم.', difficulty: 'intermediate', category: 'career' },
    ],
    grammar: [
      {
        id: 'g30-1', lessonId: 30, title: 'Formal register (registro formale)', titleFa: 'سبک رسمی',
        explanation: 'In formal contexts, use Lei (3rd person singular) forms, avoid contractions, and use formal vocabulary.',
        explanationFa: 'در موقعیت‌های رسمی، از اشکال Lei استفاده کن، از مخفف‌ها اجتناب کن و از واژگان رسمی استفاده کن.',
        examples: [
          { italian: 'Lei + 3rd person singular verb: "Come si chiama?" "Ha esperienza?"', persian: 'اسمتون چیه؟ تجربه دارید؟' },
          { italian: 'Vorrei + infinitive for polite requests', persian: 'Vorrei chiedere... (می‌خواستم بپرسم...)' },
          { italian: '"Le" (indirect object) vs "ti": "Le mando il CV" (formal)', persian: 'رزومه را برایتان می‌فرستم (رسمی)' },
        ],
        commonMistakes: ['Never "tu" with strangers/authorities in formal settings', '"Le" = formal "to you"; "la" = formal "you" (direct object)'],
        exercises: [{ id: 'ex30-g1-1', type: 'fill_blank', question: 'Formal: "___ (Lei) parla inglese?" answer: "Sì, parlo inglese."', correctAnswer: 'Parla' }],
      },
    ],
    reading: [
      {
        id: 'r30-1', lessonId: 30, title: 'Lettera di candidatura', titleFa: 'نامه درخواست کار',
        content: `Gentile Dott.ssa Martini,

Le scrivo per candidarmi alla posizione di responsabile marketing pubblicata sul vostro sito. Laureata in Economia e Commercio, ho maturato cinque anni di esperienza in aziende multinazionali. Le mie competenze principali comprendono la gestione dei social media, l\'analisi dei dati e la creazione di contenuti in italiano, inglese e persiano. Sono convinta che le mie capacità possano contribuire significativamente al successo della vostra azienda. Allego il curriculum vitae e rimango a disposizione per un colloquio.

Distinti saluti,
Parisa Karimi`,
        translation: `سرکار خانم دکتر مارتینی گرامی،

برای داوطلب شدن برای سمت مسئول بازاریابی که در سایت شما منتشر شده می‌نویسم. با مدرک اقتصاد و بازرگانی، پنج سال تجربه در شرکت‌های چندملیتی کسب کرده‌ام. مهارت‌های اصلی من شامل مدیریت شبکه‌های اجتماعی، تجزیه و تحلیل داده‌ها و تولید محتوا به ایتالیایی، انگلیسی و فارسی می‌شود. مطمئنم که توانایی‌هایم می‌تواند به طور قابل توجهی به موفقیت شرکت شما کمک کند. رزومه را پیوست می‌کنم و برای مصاحبه در دسترس هستم.

با احترام،
پریسا کریمی`,
        vocabulary: ['v30-1', 'v30-2', 'v30-3', 'v30-5', 'v30-6'],
      },
    ],
    listening: [
      {
        id: 'l30-1', lessonId: 30, title: 'Colloquio di lavoro', titleFa: 'مصاحبه شغلی',
        transcript: `Selezionatore: Si accomodi. Le sembra difficile trasferirsi a Milano?
Candidata: No, anzi. Sono convinta che lavorare in una grande città offra opportunità uniche.
Selezionatore: Quali sono i suoi punti di forza?
Candidata: Direi che sono molto organizzata e lavoro bene in team. Inoltre parlo tre lingue.
Selezionatore: E un punto debole?
Candidata: Alle volte sono troppo ambiziosa — voglio sempre ottenere i migliori risultati.
Selezionatore: Ha domande per noi?
Candidata: Sì, vorrei sapere quali sono le possibilità di crescita professionale.`,
        translation: `انتخاب‌کننده: بفرمایید. آیا نقل مکان به میلان برایتان سخت به نظر می‌رسد؟
نامزد: نه، بالعکس. مطمئنم که کار در یک شهر بزرگ فرصت‌های منحصر به فردی ارائه می‌دهد.
انتخاب‌کننده: نقاط قوتتان چیه؟
نامزد: می‌گویم که خیلی منظم هستم و در تیم خوب کار می‌کنم. همچنین سه زبان بلدم.
انتخاب‌کننده: یک نقطه ضعف؟
نامزد: بعضی اوقات خیلی بلندپرواز هستم — همیشه می‌خوام بهترین نتایج را کسب کنم.
انتخاب‌کننده: سوالی دارید؟
نامزد: بله، می‌خواستم بدانم امکانات رشد حرفه‌ای چیست.`,
        duration: 65,
      },
    ],
    speaking: [
      {
        id: 'sp30-1', lessonId: 30, type: 'roleplay', title: 'Job interview simulation', titleFa: 'شبیه‌سازی مصاحبه شغلی',
        scenario: 'Simulate a job interview in Italian using formal register.',
        scenarioFa: 'یه مصاحبه شغلی ایتالیایی با سبک رسمی شبیه‌سازی کن.',
        lines: [
          { speaker: 'Interviewer', text: 'Mi parli di lei. Quali sono le sue esperienze?', translation: 'از خودتون بگید. چه تجربیاتی دارید؟' },
          { speaker: 'You', text: 'Ho lavorato come ___ per ___ anni. Le mie competenze sono ___.', translation: '___ سال به عنوان ___ کار کردم. مهارت‌هایم ___.' },
          { speaker: 'Interviewer', text: 'Perché vuole lavorare per noi?', translation: 'چرا می‌خواید برای ما کار کنید؟' },
          { speaker: 'You', text: 'Sono convinto/a che la vostra azienda ___ e credo di poter ___.', translation: 'مطمئنم که شرکت شما ___ و باور دارم می‌تونم ___.' },
        ],
        tips: ['Use "Lei" form with interviewer', '"Sono convinto/a che + congiuntivo"', '"Credo di poter + infinitive" for same subject'],
      },
    ],
    exercises: [
      { id: 'ex30-1', type: 'fill_blank', question: 'Formal: "___ (Lei) parlare più lentamente?" (could you)', correctAnswer: 'Potrebbe' },
      { id: 'ex30-2', type: 'multiple_choice', question: '"Le mie competenze" means?', options: ['My weaknesses', 'My skills', 'My experiences', 'My goals'], correctAnswer: 'My skills' },
    ],
    flashcards: [
      { id: 'fc30-1', lessonId: 30, front: 'i punti di forza', back: 'نقاط قوت', example: 'Quali sono i suoi punti di forza?', pronunciation: 'i ˈpunti di ˈfortsa', difficulty: 'intermediate' },
      { id: 'fc30-2', lessonId: 30, front: 'le competenze', back: 'مهارت‌ها', example: 'Ho molte competenze.', pronunciation: 'le kompeˈtɛntse', difficulty: 'intermediate' },
      { id: 'fc30-3', lessonId: 30, front: 'fare carriera', back: 'پیشرفت شغلی', example: 'Voglio fare carriera.', pronunciation: 'ˈfaːre karˈrjɛːra', difficulty: 'intermediate' },
    ],
  },
];
