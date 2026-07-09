import { Lesson } from '@/types';

const BOOK_SLUG = 'nuovo-espresso-2';
const PDF_URL = '/books/nuovo-espresso-2.pdf';

export const lessonsEspresso2: Lesson[] = [
  // ─── Lesson 11 ────────────────────────────────────────────────
  {
    id: 11, number: 1, bookSlug: BOOK_SLUG, slug: 'ne2-lesson-1', pdfUrl: PDF_URL, startPage: 7, endPage: 22,
    title: 'Imperfetto e passato prossimo',
    titleFa: 'گذشته استمراری و گذشته نزدیک',
    subtitle: 'Talking about Past Events',
    subtitleFa: 'صحبت درباره رویدادهای گذشته',
    overview: 'Impara a usare il passato prossimo e l\'imperfetto per raccontare storie.',
    overviewFa: 'یاد بگیر از گذشته نزدیک و استمراری برای تعریف داستان استفاده کنی.',
    objectives: ['Use passato prossimo for completed actions', 'Use imperfetto for ongoing past states', 'Combine both tenses in narration', 'Use time markers'],
    objectivesFa: ['از passato prossimo برای اعمال تمام‌شده استفاده کن', 'از imperfetto برای حالت‌های مستمر گذشته استفاده کن', 'هر دو زمان را در روایت ترکیب کن', 'از نشانگرهای زمانی استفاده کن'],
    color: 'from-blue-600 to-indigo-600', icon: '📖', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v11-1', lessonId: 11, word: 'mentre', translation: 'در حالی که', pronunciation: 'ˈmɛntre', exampleIt: 'Mentre studiavo, squillò il telefono.', exampleFa: 'داشتم درس می‌خوندم که تلفن زنگ خورد.', difficulty: 'intermediate', category: 'conjunctions' },
      { id: 'v11-2', lessonId: 11, word: 'di solito', translation: 'معمولاً', pronunciation: 'di ˈsoːlito', exampleIt: 'Di solito andavo a scuola a piedi.', exampleFa: 'معمولاً پیاده می‌رفتم مدرسه.', difficulty: 'beginner', category: 'adverbs' },
      { id: 'v11-3', lessonId: 11, word: 'all\'improvviso', translation: 'ناگهان', pronunciation: 'alimˈprovvizo', exampleIt: 'All\'improvviso è arrivato Marco.', exampleFa: 'ناگهان مارکو رسید.', difficulty: 'intermediate', category: 'adverbs' },
      { id: 'v11-4', lessonId: 11, word: 'ogni giorno', translation: 'هر روز', pronunciation: 'ˈoɲɲi ˈdʒorno', exampleIt: 'Ogni giorno facevo una passeggiata.', exampleFa: 'هر روز یه قدم می‌زدم.', difficulty: 'beginner', category: 'time' },
      { id: 'v11-5', lessonId: 11, word: 'da bambino/a', translation: 'وقتی بچه بودم', pronunciation: 'da bamˈbiːno', exampleIt: 'Da bambino giocavo in giardino.', exampleFa: 'وقتی بچه بودم توی باغ بازی می‌کردم.', difficulty: 'beginner', category: 'time' },
      { id: 'v11-6', lessonId: 11, word: 'un tempo', translation: 'زمانی / قدیماً', pronunciation: 'un ˈtɛmpo', exampleIt: 'Un tempo qui c\'era un bosco.', exampleFa: 'زمانی اینجا یه جنگل بود.', difficulty: 'intermediate', category: 'time' },
    ],
    grammar: [
      {
        id: 'g11-1', lessonId: 11, title: 'Imperfetto', titleFa: 'گذشته استمراری',
        explanation: 'Imperfetto describes ongoing states, habits, or background actions in the past.',
        explanationFa: 'Imperfetto برای توصیف حالت‌های مستمر، عادت‌ها یا اعمال پس‌زمینه در گذشته استفاده می‌شود.',
        examples: [
          { italian: 'Parlavo → parlavo, parlavi, parlava, parlavamo, parlavate, parlavano', persian: 'حرف می‌زدم، می‌زدی، می‌زد...' },
          { italian: 'Da piccolo abitavo a Milano.', persian: 'وقتی کوچیک بودم در میلان زندگی می‌کردم.' },
          { italian: 'Mentre guardavo la TV, è arrivato Marco.', persian: 'داشتم تلویزیون می‌دیدم که مارکو اومد.' },
        ],
        commonMistakes: ['Essere irregular: ero, eri, era, eravamo, eravate, erano', 'Use imperfetto for background, passato prossimo for new events'],
        exercises: [{ id: 'ex11-g1-1', type: 'fill_blank', question: 'Da piccolo io ___ (giocare) a calcio.', correctAnswer: 'giocavo' }],
      },
    ],
    reading: [
      {
        id: 'r11-1', lessonId: 11, title: 'La mia infanzia', titleFa: 'کودکی من',
        content: `Quando ero bambino, abitavo in un piccolo paese in montagna. Ogni mattina mi svegliavo presto e andavo a scuola a piedi. La maestra si chiamava signora Bianchi ed era molto brava. Nel pomeriggio giocavo con gli amici nel parco. Non c\'erano smartphone — ci divertivamo con i giochi tradizionali. La vita era semplice ma felice.`,
        translation: `وقتی بچه بودم، در یه روستای کوچیک در کوهستان زندگی می‌کردم. هر صبح زود بیدار می‌شدم و پیاده می‌رفتم مدرسه. معلم اسمش خانم بیانکی بود و خیلی خوب بود. بعدازظهرها با دوستام توی پارک بازی می‌کردم. موبایل نبود — با بازی‌های سنتی خوش می‌گذشت. زندگی ساده ولی خوش بود.`,
        vocabulary: ['v11-2', 'v11-4', 'v11-5'],
      },
    ],
    listening: [
      {
        id: 'l11-1', lessonId: 11, title: 'Racconto del passato', titleFa: 'روایت از گذشته',
        transcript: `A: Com'eri da bambino?
B: Ero molto timido! Non parlavo mai con gli estranei.
A: E cosa facevi nel tempo libero?
B: Leggevo tantissimo. Avevo sempre un libro in mano.
A: Quando hai iniziato a studiare l'italiano?
B: Ho iniziato tre anni fa, ma da piccolo studiavo il francese.`,
        translation: `A: بچه که بودی چطور بودی؟
B: خیلی خجالتی بودم! هیچوقت با غریبه‌ها حرف نمی‌زدم.
A: وقت آزادت چیکار می‌کردی؟
B: خیلی زیاد کتاب می‌خوندم. همیشه یه کتاب تو دستم بود.
A: کی شروع کردی ایتالیایی یاد گرفتن؟
B: سه سال پیش شروع کردم، ولی بچه که بودم فرانسه می‌خوندم.`,
        duration: 55,
      },
    ],
    speaking: [
      {
        id: 'sp11-1', lessonId: 11, type: 'conversation', title: 'Childhood memories', titleFa: 'خاطرات کودکی',
        scenario: 'Talk about what you used to do as a child.',
        scenarioFa: 'درباره کارهایی که وقتی بچه بودی انجام می‌دادی صحبت کن.',
        lines: [
          { speaker: 'A', text: 'Da bambino/a, dove abitavi?', translation: 'بچه که بودی کجا زندگی می‌کردی؟' },
          { speaker: 'B', text: 'Abitavo a ___. E tu?', translation: 'در ___ زندگی می‌کردم. تو چطور؟' },
          { speaker: 'A', text: 'Cosa facevi nel tempo libero?', translation: 'وقت آزادت چیکار می‌کردی؟' },
          { speaker: 'B', text: 'Di solito ___ e ___. Mi piaceva molto!', translation: 'معمولاً ___ و ___. خیلی دوست داشتم!' },
        ],
        tips: ['Imperfetto = repeated/habitual past', 'Use "di solito" for habits', '"Da bambino/a" = when I was a child'],
      },
    ],
    exercises: [
      { id: 'ex11-1', type: 'multiple_choice', question: 'Which tense is used for past habits?', options: ['Passato prossimo', 'Imperfetto', 'Futuro', 'Presente'], correctAnswer: 'Imperfetto' },
      { id: 'ex11-2', type: 'fill_blank', question: 'Ieri ___ (io, mangiare) la pizza.', correctAnswer: 'ho mangiato' },
      { id: 'ex11-3', type: 'fill_blank', question: 'Da bambino ___ (io, giocare) a calcio ogni giorno.', correctAnswer: 'giocavo' },
    ],
    flashcards: [
      { id: 'fc11-1', lessonId: 11, front: 'mentre', back: 'در حالی که', example: 'Mentre studiavo, squillò il telefono.', pronunciation: 'ˈmɛntre', difficulty: 'intermediate' },
      { id: 'fc11-2', lessonId: 11, front: 'di solito', back: 'معمولاً', example: 'Di solito vado al bar.', pronunciation: 'di ˈsoːlito', difficulty: 'beginner' },
      { id: 'fc11-3', lessonId: 11, front: 'all\'improvviso', back: 'ناگهان', example: 'All\'improvviso è arrivato.', pronunciation: 'alimˈprovvizo', difficulty: 'intermediate' },
    ],
  },

  // ─── Lesson 12 ────────────────────────────────────────────────
  {
    id: 12, number: 2, bookSlug: BOOK_SLUG, slug: 'ne2-lesson-2', pdfUrl: PDF_URL, startPage: 23, endPage: 35,
    title: 'La casa ideale',
    titleFa: 'خانه ایده‌آل',
    subtitle: 'Describing Rooms & Furniture',
    subtitleFa: 'توصیف اتاق‌ها و مبلمان',
    overview: 'Descrivi la tua casa ideale, le stanze e l\'arredamento.',
    overviewFa: 'خانه ایده‌آلت، اتاق‌ها و مبلمان را توصیف کن.',
    objectives: ['Name rooms and furniture', 'Use c\'è / ci sono', 'Describe location with prepositions', 'Express preferences about homes'],
    objectivesFa: ['اتاق‌ها و مبلمان را نام ببر', 'از c\'è / ci sono استفاده کن', 'مکان را با حروف اضافه توصیف کن', 'ترجیحاتت درباره خانه را بیان کن'],
    color: 'from-teal-500 to-cyan-600', icon: '🏠', estimatedMinutes: 55,
    vocabulary: [
      { id: 'v12-1', lessonId: 12, word: 'il soggiorno', translation: 'اتاق نشیمن', pronunciation: 'il sodˈdʒorno', exampleIt: 'Il soggiorno è grande e luminoso.', exampleFa: 'اتاق نشیمن بزرگ و روشنه.', difficulty: 'beginner', category: 'rooms' },
      { id: 'v12-2', lessonId: 12, word: 'la cucina', translation: 'آشپزخانه', pronunciation: 'la kuˈtʃiːna', exampleIt: 'La cucina è moderna.', exampleFa: 'آشپزخانه مدرنه.', difficulty: 'beginner', category: 'rooms' },
      { id: 'v12-3', lessonId: 12, word: 'il bagno', translation: 'حمام', pronunciation: 'il ˈbaɲɲo', exampleIt: 'Il bagno ha la vasca e la doccia.', exampleFa: 'حمام وان و دوش داره.', difficulty: 'beginner', category: 'rooms' },
      { id: 'v12-4', lessonId: 12, word: 'il divano', translation: 'مبل', pronunciation: 'il diˈvaːno', exampleIt: 'Il divano è comodo.', exampleFa: 'مبل راحته.', difficulty: 'beginner', category: 'furniture' },
      { id: 'v12-5', lessonId: 12, word: 'l\'armadio', translation: 'کمد', pronunciation: 'larˈmaːdjo', exampleIt: 'L\'armadio è pieno di vestiti.', exampleFa: 'کمد پر از لباسه.', difficulty: 'beginner', category: 'furniture' },
      { id: 'v12-6', lessonId: 12, word: 'c\'è / ci sono', translation: 'هست / هستند', pronunciation: 'tʃɛ / tʃi ˈsoːno', exampleIt: 'C\'è un balcone. Ci sono tre stanze.', exampleFa: 'یه بالکن هست. سه تا اتاق هست.', difficulty: 'beginner', category: 'grammar' },
    ],
    grammar: [
      {
        id: 'g12-1', lessonId: 12, title: 'C\'è and Ci sono', titleFa: 'C\'è و Ci sono',
        explanation: 'C\'è (there is) is used for singular, ci sono (there are) for plural.',
        explanationFa: 'C\'è برای مفرد و ci sono برای جمع استفاده می‌شود.',
        examples: [
          { italian: 'C\'è un letto nella camera.', persian: 'توی اتاق خواب یه تخت هست.' },
          { italian: 'Ci sono due bagni nell\'appartamento.', persian: 'توی آپارتمان دو تا حمام هست.' },
          { italian: 'Non c\'è il garage.', persian: 'پارکینگ نیست.' },
        ],
        commonMistakes: ['Don\'t say "È un letto" for "there is a bed"', 'Use "non c\'è/non ci sono" for negation'],
        exercises: [{ id: 'ex12-g1-1', type: 'fill_blank', question: '___ tre camere da letto. (there are)', correctAnswer: 'Ci sono' }],
      },
    ],
    reading: [
      {
        id: 'r12-1', lessonId: 12, title: 'Annuncio immobiliare', titleFa: 'آگهی ملکی',
        content: `Affittasi appartamento luminoso al secondo piano. C\'è un ingresso, un soggiorno-cucina, due camere da letto e un bagno. Ci sono parquet e doppi vetri. L\'appartamento è vicino alla metro e ai negozi. C\'è anche un piccolo balcone con vista sul giardino. Riscaldamento autonomo. 850 euro al mese.`,
        translation: `آپارتمان روشن در طبقه دوم اجاره داده می‌شود. یه ورودی، یه اتاق نشیمن-آشپزخانه، دو اتاق خواب و یه حمام هست. پارکت و پنجره دوجداره داره. آپارتمان نزدیک مترو و مغازه‌هاست. یه بالکن کوچیک با دید به باغ هم هست. سیستم گرمایش مجزا. ۸۵۰ یورو در ماه.`,
        vocabulary: ['v12-1', 'v12-2', 'v12-3', 'v12-6'],
      },
    ],
    listening: [
      {
        id: 'l12-1', lessonId: 12, title: 'Cerco casa', titleFa: 'دنبال خانه می‌گردم',
        transcript: `Agente: Buongiorno, posso aiutarla?
Cliente: Sì, cerco un appartamento in affitto.
Agente: Quante stanze vuole?
Cliente: Almeno due camere. E deve esserci un balcone.
Agente: Abbiamo un bilocale in zona centrale, 700 euro al mese.
Cliente: C'è il posto auto?
Agente: No, ma c'è un garage in affitto vicino.
Cliente: Posso vederlo domani?`,
        translation: `مشاور: صبح بخیر، می‌تونم کمک کنم؟
مشتری: بله، دنبال آپارتمان اجاری می‌گردم.
مشاور: چند اتاق می‌خواید؟
مشتری: حداقل دو اتاق خواب. و باید بالکن داشته باشه.
مشاور: یه آپارتمان دو اتاقه در منطقه مرکزی داریم، ۷۰۰ یورو در ماه.
مشتری: پارکینگ داره؟
مشاور: نه، ولی یه گاراژ اجاری نزدیکشه.
مشتری: فردا می‌تونم ببینمش؟`,
        duration: 60,
      },
    ],
    speaking: [
      {
        id: 'sp12-1', lessonId: 12, type: 'conversation', title: 'Describing your home', titleFa: 'توصیف خانه‌ات',
        scenario: 'Describe your home or dream home to an Italian friend.',
        scenarioFa: 'خانه‌ات یا خانه رویاییت را برای یه دوست ایتالیایی توصیف کن.',
        lines: [
          { speaker: 'A', text: 'Com\'è la tua casa?', translation: 'خانه‌ات چطوره؟' },
          { speaker: 'B', text: 'C\'è ___ e ci sono ___. È al ___ piano.', translation: '___ هست و ___ هستند. طبقه ___ هست.' },
          { speaker: 'A', text: 'C\'è il balcone?', translation: 'بالکن داره؟' },
          { speaker: 'B', text: 'Sì, c\'è un bel balcone! / No, purtroppo non c\'è.', translation: 'بله، یه بالکن قشنگ داره! / نه، متأسفانه نداره.' },
        ],
        tips: ['Use c\'è for singular, ci sono for plural', 'Use al primo/secondo piano for floor numbers'],
      },
    ],
    exercises: [
      { id: 'ex12-1', type: 'multiple_choice', question: '"There are two bathrooms" = ?', options: ['C\'è due bagni', 'Ci sono due bagni', 'È due bagni', 'Ci è due bagni'], correctAnswer: 'Ci sono due bagni' },
      { id: 'ex12-2', type: 'fill_blank', question: '___ un divano nel soggiorno. (there is)', correctAnswer: 'C\'è' },
    ],
    flashcards: [
      { id: 'fc12-1', lessonId: 12, front: 'il soggiorno', back: 'اتاق نشیمن', example: 'Il soggiorno è grande.', pronunciation: 'il sodˈdʒorno', difficulty: 'beginner' },
      { id: 'fc12-2', lessonId: 12, front: 'c\'è / ci sono', back: 'هست / هستند', example: 'C\'è un balcone.', pronunciation: 'tʃɛ / tʃi ˈsoːno', difficulty: 'beginner' },
      { id: 'fc12-3', lessonId: 12, front: 'il divano', back: 'مبل', example: 'Il divano è comodo.', pronunciation: 'il diˈvaːno', difficulty: 'beginner' },
    ],
  },

  // ─── Lesson 13 ────────────────────────────────────────────────
  {
    id: 13, number: 3, bookSlug: BOOK_SLUG, slug: 'ne2-lesson-3', pdfUrl: PDF_URL, startPage: 39, endPage: 54,
    title: 'Il lavoro', titleFa: 'کار و شغل',
    subtitle: 'Jobs and Professions', subtitleFa: 'شغل‌ها و حرفه‌ها',
    overview: 'Impara a parlare di professioni, luoghi di lavoro e orari.', overviewFa: 'یاد بگیر درباره مشاغل، محل کار و ساعات کار صحبت کنی.',
    objectives: ['Name professions', 'Describe a work day', 'Use modal verbs dovere/potere/volere', 'Talk about workplace'],
    objectivesFa: ['مشاغل را نام ببر', 'یه روز کاری را توصیف کن', 'از افعال مُدال استفاده کن', 'درباره محل کار صحبت کن'],
    color: 'from-slate-600 to-gray-700', icon: '💼', estimatedMinutes: 60,
    vocabulary: [
      { id: 'v13-1', lessonId: 13, word: 'il medico', translation: 'دکتر', pronunciation: 'il ˈmɛːdiko', exampleIt: 'Mia sorella è medico.', exampleFa: 'خواهرم دکتره.', difficulty: 'beginner', category: 'professions' },
      { id: 'v13-2', lessonId: 13, word: 'l\'avvocato', translation: 'وکیل', pronunciation: 'lavvoˈkaːto', exampleIt: 'Ho bisogno di un avvocato.', exampleFa: 'به یه وکیل نیاز دارم.', difficulty: 'beginner', category: 'professions' },
      { id: 'v13-3', lessonId: 13, word: 'l\'ingegnere', translation: 'مهندس', pronunciation: 'lindʒeˈɲɛːre', exampleIt: 'Lavoro come ingegnere.', exampleFa: 'به عنوان مهندس کار می‌کنم.', difficulty: 'beginner', category: 'professions' },
      { id: 'v13-4', lessonId: 13, word: 'dovere', translation: 'باید', pronunciation: 'doˈveːre', exampleIt: 'Devo lavorare fino alle sei.', exampleFa: 'باید تا ساعت شش کار کنم.', difficulty: 'intermediate', category: 'modals' },
      { id: 'v13-5', lessonId: 13, word: 'potere', translation: 'توانستن / می‌توان', pronunciation: 'poˈteːre', exampleIt: 'Posso aiutarti?', exampleFa: 'می‌تونم کمکت کنم؟', difficulty: 'intermediate', category: 'modals' },
      { id: 'v13-6', lessonId: 13, word: 'lo stipendio', translation: 'حقوق', pronunciation: 'lo stipˈɛndjo', exampleIt: 'Lo stipendio è buono.', exampleFa: 'حقوق خوبه.', difficulty: 'intermediate', category: 'work' },
    ],
    grammar: [
      {
        id: 'g13-1', lessonId: 13, title: 'Modal Verbs (Verbi modali)', titleFa: 'افعال مُدال',
        explanation: 'Modal verbs (dovere, potere, volere) are followed by an infinitive.',
        explanationFa: 'افعال مُدال (dovere, potere, volere) با مصدر فعل می‌آیند.',
        examples: [
          { italian: 'Devo/Devi/Deve/Dobbiamo/Dovete/Devono + infinito', persian: 'باید... (مصدر)' },
          { italian: 'Posso lavorare da casa oggi.', persian: 'امروز می‌تونم از خونه کار کنم.' },
          { italian: 'Voglio cambiare lavoro.', persian: 'می‌خوام شغلم را عوض کنم.' },
        ],
        commonMistakes: ['Modal + infinitive (not conjugated): "devo andare" not "devo vado"'],
        exercises: [{ id: 'ex13-g1-1', type: 'fill_blank', question: 'Non ___ (potere, io) venire domani.', correctAnswer: 'posso' }],
      },
    ],
    reading: [
      {
        id: 'r13-1', lessonId: 13, title: 'La mia giornata lavorativa', titleFa: 'روز کاری من',
        content: `Sono architetto e lavoro in uno studio in centro. Di solito arrivo in ufficio alle nove. La mattina devo rispondere alle email e partecipare alle riunioni. All\'una vado a pranzo con i colleghi. Il pomeriggio lavoro ai progetti. Alle sei posso finalmente andare a casa. Il venerdì finisco prima — alle cinque. Amo il mio lavoro perché ogni progetto è diverso!`,
        translation: `معمار هستم و در یه استودیو در مرکز شهر کار می‌کنم. معمولاً ساعت نه می‌رسم دفتر. صبح‌ها باید به ایمیل‌ها جواب بدم و در جلسات شرکت کنم. ساعت یک با همکاران می‌رم ناهار. بعدازظهر روی پروژه‌ها کار می‌کنم. ساعت شش بالاخره می‌تونم برم خونه. جمعه‌ها زودتر تموم می‌کنم — ساعت پنج. کارم را دوست دارم چون هر پروژه متفاوته!`,
        vocabulary: ['v13-1', 'v13-4', 'v13-5'],
      },
    ],
    listening: [
      {
        id: 'l13-1', lessonId: 13, title: 'Colloquio di lavoro', titleFa: 'مصاحبه شغلی',
        transcript: `Datore: Buongiorno. Si accomodi. Può presentarsi?
Candidato: Certo. Mi chiamo Fabrizio Boni. Sono ingegnere informatico.
Datore: Quanto anni di esperienza ha?
Candidato: Ho cinque anni di esperienza in aziende internazionali.
Datore: Parla lingue straniere?
Candidato: Sì, parlo inglese e un po' di persiano.
Datore: Ottimo! Quando potrebbe iniziare?
Candidato: Potrei iniziare subito.`,
        translation: `Datore: صبح بخیر. بفرمایید. می‌تونید معرفی کنید؟
نامزد: البته. اسمم فابریتزیو بونی هست. مهندس نرم‌افزار هستم.
Datore: چند سال سابقه دارید؟
نامزد: پنج سال سابقه در شرکت‌های بین‌المللی دارم.
Datore: زبان خارجی بلد هستید؟
نامزد: بله، انگلیسی و کمی فارسی بلدم.
Datore: عالی! کِی می‌تونید شروع کنید؟
نامزد: می‌تونم همین الان شروع کنم.`,
        duration: 65,
      },
    ],
    speaking: [
      {
        id: 'sp13-1', lessonId: 13, type: 'conversation', title: 'Talking about work', titleFa: 'صحبت درباره کار',
        scenario: 'Talk about your job or ideal job with an Italian colleague.',
        scenarioFa: 'با یه همکار ایتالیایی درباره شغلت یا شغل ایده‌آلت صحبت کن.',
        lines: [
          { speaker: 'A', text: 'Che lavoro fai?', translation: 'چه کاری می‌کنی؟' },
          { speaker: 'B', text: 'Sono ___. Lavoro in ___.', translation: '___ هستم. در ___ کار می‌کنم.' },
          { speaker: 'A', text: 'Ti piace il tuo lavoro?', translation: 'کارت را دوست داری؟' },
          { speaker: 'B', text: 'Sì, devo lavorare molto ma posso ___.', translation: 'بله، باید خیلی کار کنم ولی می‌تونم ___.' },
        ],
        tips: ['Use "Sono + profession" (no article)', 'Lavoro in/da/per + place', 'Modal verbs need infinitive after them'],
      },
    ],
    exercises: [
      { id: 'ex13-1', type: 'multiple_choice', question: 'Correct: "I have to work" = ?', options: ['Devo lavoro', 'Devo lavorare', 'Dovere lavorare', 'Posso lavorare'], correctAnswer: 'Devo lavorare' },
      { id: 'ex13-2', type: 'fill_blank', question: '___ (volere, tu) un caffè?', correctAnswer: 'Vuoi' },
    ],
    flashcards: [
      { id: 'fc13-1', lessonId: 13, front: 'dovere', back: 'باید', example: 'Devo lavorare.', pronunciation: 'doˈveːre', difficulty: 'intermediate' },
      { id: 'fc13-2', lessonId: 13, front: 'potere', back: 'توانستن', example: 'Posso aiutarti?', pronunciation: 'poˈteːre', difficulty: 'intermediate' },
      { id: 'fc13-3', lessonId: 13, front: 'lo stipendio', back: 'حقوق', example: 'Lo stipendio è buono.', pronunciation: 'lo stipˈɛndjo', difficulty: 'intermediate' },
    ],
  },

  // ─── Lesson 14 ────────────────────────────────────────────────
  {
    id: 14, number: 4, bookSlug: BOOK_SLUG, slug: 'ne2-lesson-4', pdfUrl: PDF_URL, startPage: 55, endPage: 68,
    title: 'La salute', titleFa: 'سلامتی',
    subtitle: 'Health, Body and Doctor Visits', subtitleFa: 'سلامت، بدن و ویزیت پزشک',
    overview: 'Impara a descrivere sintomi e andare dal medico.', overviewFa: 'یاد بگیر علائم را توصیف کنی و پیش دکتر بری.',
    objectives: ['Name body parts', 'Describe symptoms', 'Make a doctor\'s appointment', 'Understand medical advice'],
    objectivesFa: ['اعضای بدن را نام ببر', 'علائم را توصیف کن', 'وقت دکتر بگیر', 'توصیه‌های پزشکی را بفهم'],
    color: 'from-red-500 to-rose-600', icon: '🏥', estimatedMinutes: 55,
    vocabulary: [
      { id: 'v14-1', lessonId: 14, word: 'ho mal di testa', translation: 'سردرد دارم', pronunciation: 'ɔ mal di ˈtɛsta', exampleIt: 'Ho mal di testa da ieri.', exampleFa: 'از دیروز سردرد دارم.', difficulty: 'beginner', category: 'health' },
      { id: 'v14-2', lessonId: 14, word: 'ho la febbre', translation: 'تب دارم', pronunciation: 'ɔ la ˈfɛbbre', exampleIt: 'Ho la febbre a 38.', exampleFa: '۳۸ تب دارم.', difficulty: 'beginner', category: 'health' },
      { id: 'v14-3', lessonId: 14, word: 'mi fa male', translation: 'دردم می‌کنه', pronunciation: 'mi fa ˈmaːle', exampleIt: 'Mi fa male la gola.', exampleFa: 'گلوم درد می‌کنه.', difficulty: 'beginner', category: 'health' },
      { id: 'v14-4', lessonId: 14, word: 'la ricetta', translation: 'نسخه', pronunciation: 'la riˈtʃetta', exampleIt: 'Il dottore mi ha dato una ricetta.', exampleFa: 'دکتر بهم نسخه داد.', difficulty: 'intermediate', category: 'medical' },
      { id: 'v14-5', lessonId: 14, word: 'la medicina', translation: 'دارو', pronunciation: 'la mediˈtʃiːna', exampleIt: 'Devo prendere questa medicina.', exampleFa: 'باید این دارو را بخورم.', difficulty: 'beginner', category: 'medical' },
      { id: 'v14-6', lessonId: 14, word: 'stare a letto', translation: 'استراحت در تخت', pronunciation: 'ˈstaːre a ˈlɛtto', exampleIt: 'Deve stare a letto per tre giorni.', exampleFa: 'باید سه روز استراحت کنه.', difficulty: 'beginner', category: 'health' },
    ],
    grammar: [
      {
        id: 'g14-1', lessonId: 14, title: 'Stare + gerundio', titleFa: 'Stare + فعل حالیه',
        explanation: 'Stare + gerundio expresses an action in progress right now.',
        explanationFa: 'Stare + gerundio نشان می‌دهد که عملی همین الان در حال انجام است.',
        examples: [
          { italian: 'Sto dormendo. (I am sleeping)', persian: 'دارم می‌خوابم.' },
          { italian: 'Stai mangiando? (Are you eating?)', persian: 'داری می‌خوری؟' },
          { italian: 'Il dottore sta visitando un paziente.', persian: 'دکتر داره یه بیمار ویزیت می‌کنه.' },
        ],
        commonMistakes: ['Gerundio: -are → -ando, -ere/-ire → -endo', '"Stavo + gerundio" for past progressive'],
        exercises: [{ id: 'ex14-g1-1', type: 'fill_blank', question: 'Sta ___ (dormire) il bambino?', correctAnswer: 'dormendo' }],
      },
    ],
    reading: [
      {
        id: 'r14-1', lessonId: 14, title: 'Dal medico', titleFa: 'پیش دکتر',
        content: `Paziente: Buongiorno, dottore. Non mi sento bene.
Dottore: Cosa ha?
Paziente: Ho mal di gola e ho la febbre. Mi fanno male anche le ossa.
Dottore: Da quanto tempo?
Paziente: Da ieri mattina.
Dottore: Apra la bocca... Ha un\'infezione alla gola. Le scrivo una ricetta. Deve prendere questi antibiotici e stare a letto per due giorni.
Paziente: Posso andare al lavoro domani?
Dottore: No, assolutamente no. Riposi!`,
        translation: `بیمار: صبح بخیر دکتر. حالم خوب نیست.
دکتر: چه مشکلی داری؟
بیمار: گلودرد دارم و تب دارم. استخوان‌هام هم درد می‌کنن.
دکتر: از کی؟
بیمار: از دیروز صبح.
دکتر: دهنت را باز کن... عفونت گلو داری. یه نسخه برات می‌نویسم. باید این آنتی‌بیوتیک‌ها را بخوری و دو روز استراحت کنی.
بیمار: فردا می‌تونم برم سر کار؟
دکتر: نه، اصلاً. استراحت کن!`,
        vocabulary: ['v14-1', 'v14-2', 'v14-3', 'v14-4', 'v14-5', 'v14-6'],
      },
    ],
    listening: [
      {
        id: 'l14-1', lessonId: 14, title: 'Appuntamento dal medico', titleFa: 'وقت گرفتن از دکتر',
        transcript: `Segretaria: Studio medico, buongiorno.
Paziente: Buongiorno, vorrei un appuntamento con il dottore.
Segretaria: Per quale giorno?
Paziente: Il prima possibile. Ho mal di schiena da tre giorni.
Segretaria: Domani alle dieci va bene?
Paziente: Sì, perfetto. Mi chiamo Kamila Rossi.
Segretaria: Benissimo, la aspettiamo domani.`,
        translation: `منشی: مطب پزشکی، صبح بخیر.
بیمار: صبح بخیر، می‌خوام وقت بگیرم.
منشی: برای چه روزی؟
بیمار: هر چه زودتر. سه روزه کمردرد دارم.
منشی: فردا ساعت ده مناسبه؟
بیمار: بله، عالیه. اسمم کامیلا روسی هست.
منشی: خیلی خوب، فردا منتظرتون هستیم.`,
        duration: 50,
      },
    ],
    speaking: [
      {
        id: 'sp14-1', lessonId: 14, type: 'roleplay', title: 'At the doctor\'s', titleFa: 'پیش دکتر',
        scenario: 'You are at the doctor\'s. Describe your symptoms.',
        scenarioFa: 'پیش دکتر هستی. علائمت را توصیف کن.',
        lines: [
          { speaker: 'Doctor', text: 'Cosa ha? Come si sente?', translation: 'مشکلت چیه؟ حالت چطوره؟' },
          { speaker: 'You', text: 'Ho ___ e mi fa male ___. Ho anche la febbre.', translation: '___ دارم و ___ دردم می‌کنه. تب هم دارم.' },
          { speaker: 'Doctor', text: 'Da quanto tempo ha questi sintomi?', translation: 'از کِی این علائم را داری؟' },
          { speaker: 'You', text: 'Da ___ giorni/ore.', translation: 'از ___ روز/ساعت پیش.' },
        ],
        tips: ['Ho mal di + body part for pain', 'Mi fa male + body part also works', 'Da + time = since / for (how long)'],
      },
    ],
    exercises: [
      { id: 'ex14-1', type: 'multiple_choice', question: '"I have a headache" = ?', options: ['Ho la testa', 'Ho mal di testa', 'Mi fa male', 'Sono testa'], correctAnswer: 'Ho mal di testa' },
      { id: 'ex14-2', type: 'fill_blank', question: 'Sto ___ (dormire) — don\'t disturb me!', correctAnswer: 'dormendo' },
    ],
    flashcards: [
      { id: 'fc14-1', lessonId: 14, front: 'ho mal di testa', back: 'سردرد دارم', example: 'Ho mal di testa da ieri.', pronunciation: 'ɔ mal di ˈtɛsta', difficulty: 'beginner' },
      { id: 'fc14-2', lessonId: 14, front: 'mi fa male', back: 'دردم می‌کنه', example: 'Mi fa male la schiena.', pronunciation: 'mi fa ˈmaːle', difficulty: 'beginner' },
      { id: 'fc14-3', lessonId: 14, front: 'la ricetta', back: 'نسخه', example: 'Ho bisogno della ricetta.', pronunciation: 'la riˈtʃetta', difficulty: 'intermediate' },
    ],
  },

  // ─── Lesson 15 ────────────────────────────────────────────────
  {
    id: 15, number: 5, bookSlug: BOOK_SLUG, slug: 'ne2-lesson-5', pdfUrl: PDF_URL, startPage: 69, endPage: 81,
    title: 'In giro per la città', titleFa: 'در شهر',
    subtitle: 'Getting Around Town', subtitleFa: 'جابجایی در شهر',
    overview: 'Impara a usare i mezzi pubblici e orientarti in città.', overviewFa: 'یاد بگیر از وسایل حمل‌ونقل عمومی استفاده کنی و توی شهر پیدا بشی.',
    objectives: ['Use public transport', 'Buy tickets', 'Ask for and give directions', 'Read a map'],
    objectivesFa: ['از حمل‌ونقل عمومی استفاده کن', 'بلیت بخر', 'مسیر بپرس و نشان بده', 'نقشه بخون'],
    color: 'from-cyan-500 to-blue-500', icon: '🚇', estimatedMinutes: 55,
    vocabulary: [
      { id: 'v15-1', lessonId: 15, word: 'la metropolitana', translation: 'مترو', pronunciation: 'la metropolitˈaːna', exampleIt: 'Prendo la metropolitana.', exampleFa: 'با مترو می‌رم.', difficulty: 'beginner', category: 'transport' },
      { id: 'v15-2', lessonId: 15, word: 'il biglietto', translation: 'بلیت', pronunciation: 'il biʎˈʎetto', exampleIt: 'Devo comprare un biglietto.', exampleFa: 'باید بلیت بخرم.', difficulty: 'beginner', category: 'transport' },
      { id: 'v15-3', lessonId: 15, word: 'scendere', translation: 'پیاده شدن', pronunciation: 'ˈʃɛndere', exampleIt: 'Scendo alla prossima fermata.', exampleFa: 'ایستگاه بعدی پیاده می‌شم.', difficulty: 'beginner', category: 'transport' },
      { id: 'v15-4', lessonId: 15, word: 'cambiare', translation: 'تعویض کردن / جابجا شدن', pronunciation: 'kamˈbjaːre', exampleIt: 'Devo cambiare alla stazione centrale.', exampleFa: 'باید ایستگاه مرکزی عوض کنم.', difficulty: 'beginner', category: 'transport' },
      { id: 'v15-5', lessonId: 15, word: 'in orario', translation: 'سر وقت', pronunciation: 'in oˈraːrjo', exampleIt: 'Il treno è in orario.', exampleFa: 'قطار سر وقته.', difficulty: 'beginner', category: 'transport' },
      { id: 'v15-6', lessonId: 15, word: 'è in ritardo', translation: 'دیر کرده', pronunciation: 'ɛ in riˈtardo', exampleIt: 'L\'autobus è in ritardo di 10 minuti.', exampleFa: 'اتوبوس ۱۰ دقیقه دیر کرده.', difficulty: 'beginner', category: 'transport' },
    ],
    grammar: [
      {
        id: 'g15-1', lessonId: 15, title: 'Imperative (Imperativo)', titleFa: 'فعل امر',
        explanation: 'The imperative is used for giving directions and instructions.',
        explanationFa: 'از فعل امر برای دادن مسیر و دستورالعمل استفاده می‌شود.',
        examples: [
          { italian: 'Vai dritto! (Go straight) — informal', persian: 'مستقیم برو!' },
          { italian: 'Prenda la seconda a destra! — formal', persian: 'دومی را به سمت راست بپیچید!' },
          { italian: 'Scendi alla fermata Centrale!', persian: 'ایستگاه مرکزی پیاده بشو!' },
        ],
        commonMistakes: ['Formal imperative (Lei) uses present subjunctive for -are verbs: vada, prenda', 'Negative informal: "Non andare!" (infinitive)'],
        exercises: [{ id: 'ex15-g1-1', type: 'multiple_choice', question: 'Formal imperative of "prendere" = ?', options: ['prendi', 'prendete', 'prenda', 'prendono'], correctAnswer: 'prenda' }],
      },
    ],
    reading: [
      {
        id: 'r15-1', lessonId: 15, title: 'Come arrivare al Colosseo', titleFa: 'چطور به کلیزه برسیم',
        content: `Per arrivare al Colosseo dalla stazione Termini, prendi la metro linea B. Scendi alla fermata Colosseo — è solo tre fermate. In alternativa, puoi prendere il tram numero 3. Se vuoi camminare, ci vuole circa 20 minuti a piedi. Il Colosseo apre alle 9 di mattina. Ti consiglio di comprare il biglietto online per evitare le code!`,
        translation: `برای رسیدن به کلیزه از ایستگاه ترمینی، متروی خط B را سوار شو. ایستگاه کلیزه پیاده بشو — فقط سه ایستگاهه. یه راه دیگه اینکه می‌تونی ترامواری شماره ۳ را سوار بشی. اگه می‌خوای پیاده بری، حدود ۲۰ دقیقه طول می‌کشه. کلیزه ساعت ۹ صبح باز می‌شه. توصیه می‌کنم بلیت را آنلاین بخری تا در صف نمونی!`,
        vocabulary: ['v15-1', 'v15-2', 'v15-3', 'v15-4'],
      },
    ],
    listening: [
      {
        id: 'l15-1', lessonId: 15, title: 'All\'informazioni', titleFa: 'در اطلاعات',
        transcript: `Turista: Scusi, come arrivo alla stazione?
Passante: Prenda l'autobus numero 12, scenda alla terza fermata.
Turista: Quanto tempo ci vuole?
Passante: Una decina di minuti.
Turista: Dove posso comprare il biglietto?
Passante: All'edicola lì, o alla macchinetta automatica.
Turista: Grazie mille!
Passante: Prego, buona giornata!`,
        translation: `توریست: ببخشید، چطور برم ایستگاه؟
رهگذر: اتوبوس شماره ۱۲ را بگیر، ایستگاه سوم پیاده بشو.
توریست: چقدر طول می‌کشه؟
رهگذر: حدود ده دقیقه.
توریست: کجا می‌تونم بلیت بخرم؟
رهگذر: در دکه روزنامه‌فروشی اونجا، یا دستگاه خودکار.
توریست: خیلی ممنون!
رهگذر: خواهش می‌کنم، روز بخیر!`,
        duration: 52,
      },
    ],
    speaking: [
      {
        id: 'sp15-1', lessonId: 15, type: 'roleplay', title: 'Getting around', titleFa: 'جابجایی در شهر',
        scenario: 'You are a tourist asking for directions to a famous landmark.',
        scenarioFa: 'توریست هستی و مسیر یه جای مشهور را می‌پرسی.',
        lines: [
          { speaker: 'You', text: 'Scusi, come arrivo a ___?', translation: 'ببخشید، چطور می‌رسم به ___؟' },
          { speaker: 'Local', text: 'Prenda la metro/l\'autobus ___, scenda a ___.', translation: 'مترو/اتوبوس ___ را بگیرید، در ___ پیاده بشید.' },
          { speaker: 'You', text: 'È lontano? Quanto tempo ci vuole?', translation: 'دوره؟ چقدر طول می‌کشه؟' },
          { speaker: 'Local', text: 'Circa ___ minuti.', translation: 'حدود ___ دقیقه.' },
        ],
        tips: ['Formal: use "Prenda, Scenda, Vada" (Lei form)', 'Informal: use "Prendi, Scendi, Vai"', '"Ci vuole" = it takes (time)'],
      },
    ],
    exercises: [
      { id: 'ex15-1', type: 'fill_blank', question: 'Prenda la metro e ___ (scendere) alla terza fermata.', correctAnswer: 'scenda' },
      { id: 'ex15-2', type: 'multiple_choice', question: '"The bus is late" = ?', options: ['Il bus è in ritardo', 'Il bus è in orario', 'Il bus è lento', 'Il bus è tardi'], correctAnswer: 'Il bus è in ritardo' },
    ],
    flashcards: [
      { id: 'fc15-1', lessonId: 15, front: 'la metropolitana', back: 'مترو', example: 'Prendo la metropolitana.', pronunciation: 'la metropolitˈaːna', difficulty: 'beginner' },
      { id: 'fc15-2', lessonId: 15, front: 'scendere', back: 'پیاده شدن', example: 'Scendo alla prossima.', pronunciation: 'ˈʃɛndere', difficulty: 'beginner' },
      { id: 'fc15-3', lessonId: 15, front: 'in ritardo', back: 'دیر کرده', example: 'Il treno è in ritardo.', pronunciation: 'in riˈtardo', difficulty: 'beginner' },
    ],
  },

  // ─── Lesson 16 ────────────────────────────────────────────────
  {
    id: 16, number: 6, bookSlug: BOOK_SLUG, slug: 'ne2-lesson-6', pdfUrl: PDF_URL, startPage: 85, endPage: 98,
    title: 'Al ristorante', titleFa: 'در رستوران',
    subtitle: 'Ordering a Full Meal', subtitleFa: 'سفارش یک وعده کامل',
    overview: 'Impara a ordinare un pasto completo al ristorante italiano.', overviewFa: 'یاد بگیر توی رستوران ایتالیایی یه وعده کامل سفارش بدی.',
    objectives: ['Read a menu', 'Order appetizers, main course and dessert', 'Interact with the waiter', 'Pay the bill'],
    objectivesFa: ['منو بخوان', 'پیش‌غذا، غذای اصلی و دسر سفارش بده', 'با گارسون تعامل داشته باش', 'صورت‌حساب را پرداخت کن'],
    color: 'from-orange-500 to-amber-600', icon: '🍝', estimatedMinutes: 60,
    vocabulary: [
      { id: 'v16-1', lessonId: 16, word: 'l\'antipasto', translation: 'پیش‌غذا', pronunciation: 'lantiˈpasto', exampleIt: 'Come antipasto, prendo la bruschetta.', exampleFa: 'به عنوان پیش‌غذا بروسکتا می‌گیرم.', difficulty: 'beginner', category: 'food' },
      { id: 'v16-2', lessonId: 16, word: 'il primo piatto', translation: 'اول غذا (پاستا یا سوپ)', pronunciation: 'il ˈpriːmo ˈpjatto', exampleIt: 'Per primo, le tagliatelle al ragù.', exampleFa: 'برای اول تالیاتله با راگو.', difficulty: 'beginner', category: 'food' },
      { id: 'v16-3', lessonId: 16, word: 'il secondo piatto', translation: 'دوم غذا (گوشت یا ماهی)', pronunciation: 'il seˈkondo ˈpjatto', exampleIt: 'Per secondo, la bistecca alla fiorentina.', exampleFa: 'برای دوم، استیک فلورانسی.', difficulty: 'intermediate', category: 'food' },
      { id: 'v16-4', lessonId: 16, word: 'il dolce', translation: 'دسر', pronunciation: 'il ˈdoltʃe', exampleIt: 'Come dolce, il tiramisù, per favore.', exampleFa: 'برای دسر تیرامیسو، لطفاً.', difficulty: 'beginner', category: 'food' },
      { id: 'v16-5', lessonId: 16, word: 'Cosa consiglia?', translation: 'چی پیشنهاد می‌دید؟', pronunciation: 'ˈkɔza konˈsiʎʎa', exampleIt: 'Cosa consiglia oggi?', exampleFa: 'امروز چی پیشنهاد می‌دید؟', difficulty: 'intermediate', category: 'restaurant' },
      { id: 'v16-6', lessonId: 16, word: 'alla fine', translation: 'آخر سر', pronunciation: 'ˈalla ˈfiːne', exampleIt: 'Alla fine, il caffè.', exampleFa: 'آخر سر، قهوه.', difficulty: 'beginner', category: 'sequence' },
    ],
    grammar: [
      {
        id: 'g16-1', lessonId: 16, title: 'Indirect Object Pronouns (Pronomi indiretti)', titleFa: 'ضمایر مفعول غیرمستقیم',
        explanation: 'Indirect object pronouns replace "to/for + person".',
        explanationFa: 'ضمایر مفعول غیرمستقیم جایگزین "به/برای + شخص" می‌شوند.',
        examples: [
          { italian: 'Mi (to me), ti (to you), gli (to him), le (to her), ci (to us), vi (to you pl.), gli (to them)', persian: 'به من، به تو، به او (م)، به او (ز)، به ما، به شما، به آنها' },
          { italian: 'Il cameriere mi porta il menù.', persian: 'گارسون منو را برام می‌آره.' },
          { italian: 'Le consiglio la pasta al pesto.', persian: 'پاستا با پستو را بهتون پیشنهاد می‌دم.' },
        ],
        commonMistakes: ['Gli = to him AND to them; Le = to her AND formal "to you"', 'Position: before conjugated verb or attached to infinitive'],
        exercises: [{ id: 'ex16-g1-1', type: 'fill_blank', question: 'Il cameriere ___ (a noi) porta il menù.', correctAnswer: 'ci' }],
      },
    ],
    reading: [
      {
        id: 'r16-1', lessonId: 16, title: 'Una cena speciale', titleFa: 'یه شام خاص',
        content: `Cameriere: Buonasera! Ecco il menù. Posso consigliarvi qualcosa?
Giada: Sì, grazie. Cosa consiglia come primo?
Cameriere: Vi consiglio le pappardelle al cinghiale — sono la specialità della casa.
Marco: Perfetto! Prendo quelle. E come secondo?
Cameriere: Abbiamo un ottimo filetto di manzo alla griglia.
Giada: Per me, il pesce — il branzino al forno.
Cameriere: Ottima scelta! E da bere?
Marco: Una bottiglia di Chianti, grazie.`,
        translation: `گارسون: عصر بخیر! منو اینجاست. می‌تونم چیزی پیشنهاد بدم؟
جیادا: بله، ممنون. اول غذا چی پیشنهاد می‌دید؟
گارسون: پاپاردله با گوشت گراز وحشی پیشنهاد می‌دم — تخصص خونه‌ماست.
مارکو: عالیه! اونو می‌گیرم. دوم غذا چی؟
گارسون: یه فیله گوساله کبابی عالی داریم.
جیادا: برای من، ماهی — ماهی سی‌باس در فر.
گارسون: انتخاب عالی! نوشیدنی؟
مارکو: یه بطری کیانتی، ممنون.`,
        vocabulary: ['v16-1', 'v16-2', 'v16-3', 'v16-4', 'v16-5'],
      },
    ],
    listening: [
      {
        id: 'l16-1', lessonId: 16, title: 'Prenotazione al ristorante', titleFa: 'رزرو رستوران',
        transcript: `Ristorante: Ristorante Da Luigi, buonasera.
Cliente: Buonasera, vorrei prenotare un tavolo per sabato sera.
Ristorante: Per quante persone?
Cliente: Siamo in quattro.
Ristorante: A che ora?
Cliente: Alle otto e mezza, se è possibile.
Ristorante: Perfetto. A che nome?
Cliente: Neri, come N di Napoli.
Ristorante: Benissimo, l'aspettiamo sabato.`,
        translation: `رستوران: رستوران دا لوئیجی، عصر بخیر.
مشتری: عصر بخیر، می‌خوام شنبه شب میز رزرو کنم.
رستوران: چند نفر؟
مشتری: چهار نفریم.
رستوران: چه ساعتی؟
مشتری: ساعت هشت و نیم، اگه ممکنه.
رستوران: عالیه. به چه اسمی؟
مشتری: نری، N مثل ناپل.
رستوران: خیلی خوب، شنبه منتظرتون هستیم.`,
        duration: 55,
      },
    ],
    speaking: [
      {
        id: 'sp16-1', lessonId: 16, type: 'roleplay', title: 'At the restaurant', titleFa: 'در رستوران',
        scenario: 'You are at an Italian restaurant. Order a full three-course meal.',
        scenarioFa: 'در یه رستوران ایتالیایی هستی. یه وعده کامل سه دوره‌ای سفارش بده.',
        lines: [
          { speaker: 'Waiter', text: 'Cosa prende?', translation: 'چی می‌خورید؟' },
          { speaker: 'You', text: 'Come antipasto ___. Per primo ___.', translation: 'پیش‌غذا ___. اول ___.' },
          { speaker: 'Waiter', text: 'E come secondo?', translation: 'دوم چی؟' },
          { speaker: 'You', text: 'Per secondo ___ e come dolce ___. Grazie!', translation: 'دوم ___ و دسر ___. ممنون!' },
        ],
        tips: ['Come antipasto/primo/secondo/dolce = as starter/first/main/dessert', '"Cosa consiglia?" = What do you recommend?', 'Learn the structure of Italian meals'],
      },
    ],
    exercises: [
      { id: 'ex16-1', type: 'multiple_choice', question: 'Indirect pronoun for "to her" = ?', options: ['mi', 'ti', 'gli', 'le'], correctAnswer: 'le' },
      { id: 'ex16-2', type: 'fill_blank', question: 'Il cameriere ___ porta il menù. (to us)', correctAnswer: 'ci' },
    ],
    flashcards: [
      { id: 'fc16-1', lessonId: 16, front: 'il primo piatto', back: 'اول غذا', example: 'Per primo, la pasta.', pronunciation: 'il ˈpriːmo ˈpjatto', difficulty: 'beginner' },
      { id: 'fc16-2', lessonId: 16, front: 'cosa consiglia?', back: 'چی پیشنهاد می‌دید؟', example: 'Cosa consiglia oggi?', pronunciation: 'ˈkɔza konˈsiʎʎa', difficulty: 'intermediate' },
      { id: 'fc16-3', lessonId: 16, front: 'il dolce', back: 'دسر', example: 'Come dolce, il tiramisù.', pronunciation: 'il ˈdoltʃe', difficulty: 'beginner' },
    ],
  },

  // ─── Lesson 17 ────────────────────────────────────────────────
  {
    id: 17, number: 7, bookSlug: BOOK_SLUG, slug: 'ne2-lesson-7', pdfUrl: PDF_URL, startPage: 99, endPage: 111,
    title: 'Le vacanze', titleFa: 'تعطیلات',
    subtitle: 'Planning and Talking about Holidays', subtitleFa: 'برنامه‌ریزی و صحبت درباره تعطیلات',
    overview: 'Impara a parlare delle vacanze, pianificare un viaggio e raccontare esperienze.', overviewFa: 'یاد بگیر درباره تعطیلات صحبت کنی، سفر برنامه‌ریزی کنی و تجربیات را تعریف کنی.',
    objectives: ['Plan a holiday', 'Book accommodation', 'Talk about past holidays', 'Express excitement and preferences'],
    objectivesFa: ['تعطیلات برنامه‌ریزی کن', 'اقامت رزرو کن', 'درباره تعطیلات گذشته صحبت کن', 'هیجان و ترجیحات را بیان کن'],
    color: 'from-sky-500 to-indigo-500', icon: '✈️', estimatedMinutes: 60,
    vocabulary: [
      { id: 'v17-1', lessonId: 17, word: 'prenotare', translation: 'رزرو کردن', pronunciation: 'prenoˈtaːre', exampleIt: 'Ho prenotato l\'albergo online.', exampleFa: 'هتل را آنلاین رزرو کردم.', difficulty: 'beginner', category: 'travel' },
      { id: 'v17-2', lessonId: 17, word: 'il volo', translation: 'پرواز', pronunciation: 'il ˈvoːlo', exampleIt: 'Il volo parte alle sei.', exampleFa: 'پرواز ساعت شش حرکت می‌کنه.', difficulty: 'beginner', category: 'travel' },
      { id: 'v17-3', lessonId: 17, word: 'l\'albergo', translation: 'هتل', pronunciation: 'lalˈbɛrɡo', exampleIt: 'L\'albergo è in centro città.', exampleFa: 'هتل مرکز شهره.', difficulty: 'beginner', category: 'accommodation' },
      { id: 'v17-4', lessonId: 17, word: 'fare le valigie', translation: 'چمدون بستن', pronunciation: 'ˈfaːre le vaˈliːdʒe', exampleIt: 'Devo ancora fare le valigie!', exampleFa: 'هنوز باید چمدون ببندم!', difficulty: 'beginner', category: 'travel' },
      { id: 'v17-5', lessonId: 17, word: 'in giro', translation: 'در حال گردش', pronunciation: 'in ˈdʒiːro', exampleIt: 'Siamo stati in giro tutto il giorno.', exampleFa: 'تمام روز در حال گردش بودیم.', difficulty: 'intermediate', category: 'travel' },
      { id: 'v17-6', lessonId: 17, word: 'ho visitato', translation: 'بازدید کردم', pronunciation: 'ɔ viziˈtaːto', exampleIt: 'Ho visitato il Vaticano.', exampleFa: 'از واتیکان بازدید کردم.', difficulty: 'beginner', category: 'travel' },
    ],
    grammar: [
      {
        id: 'g17-1', lessonId: 17, title: 'Futuro semplice', titleFa: 'آینده ساده',
        explanation: 'The simple future tense is used for plans, predictions and promises.',
        explanationFa: 'زمان آینده ساده برای برنامه‌ها، پیش‌بینی‌ها و وعده‌ها استفاده می‌شود.',
        examples: [
          { italian: 'parlare → parlerò, parlerai, parlerà, parleremo, parlerete, parleranno', persian: 'حرف خواهم زد، خواهی زد...' },
          { italian: 'L\'anno prossimo andrò in Italia.', persian: 'سال آینده می‌رم ایتالیا.' },
          { italian: 'Verrò da te domani.', persian: 'فردا پیشت میام.' },
        ],
        commonMistakes: ['Irregular: andare→andrò, venire→verrò, essere→sarò, avere→avrò, fare→farò', 'Can also use "andare + a + inf." for near future: "Vado a mangiare."'],
        exercises: [{ id: 'ex17-g1-1', type: 'fill_blank', question: 'L\'anno prossimo ___ (noi, andare) in vacanza a Sicilia.', correctAnswer: 'andremo' }],
      },
    ],
    reading: [
      {
        id: 'r17-1', lessonId: 17, title: 'Le mie vacanze estive', titleFa: 'تعطیلات تابستانی من',
        content: `Quest\'estate sono andato in Sardegna con la mia famiglia. Abbiamo prenotato un appartamento vicino al mare. Il primo giorno abbiamo visitato la spiaggia di La Pelosa — l\'acqua era cristallina! Nei giorni seguenti abbiamo mangiato piatti tipici sardi: porceddu, culurgiones e mirto. Ho anche imparato a fare windsurf. È stata la vacanza più bella della mia vita!`,
        translation: `این تابستون با خانواده‌ام رفتم ساردینیا. یه آپارتمان نزدیک دریا رزرو کردیم. روز اول به ساحل لا پلوسا رفتیم — آب کاملاً شفاف بود! روزهای بعد غذاهای سنتی ساردینیایی خوردیم: بره بو داده، کولورجیونس و میرتو. موج‌سواری با بادبان هم یاد گرفتم. بهترین تعطیلات زندگیم بود!`,
        vocabulary: ['v17-1', 'v17-3', 'v17-5', 'v17-6'],
      },
    ],
    listening: [
      {
        id: 'l17-1', lessonId: 17, title: 'Piani per le vacanze', titleFa: 'برنامه‌های تعطیلات',
        transcript: `A: Hai già fatto i piani per l'estate?
B: Sì! Andrò in Grecia con alcuni amici.
A: Che bello! Quando partite?
B: Partiremo il 15 luglio e torneremo il 30.
A: Avete già prenotato?
B: Ho prenotato il volo la settimana scorsa. L'albergo lo prenotiamo questa settimana.
A: Vi divertirete sicuramente!`,
        translation: `A: برنامه‌های تابستون را چیدی؟
B: بله! با چند تا دوست می‌رم یونان.
A: چه خوب! کِی حرکت می‌کنید؟
B: ۱۵ جولای حرکت می‌کنیم و ۳۰ برمی‌گردیم.
A: رزرو کردید؟
B: پرواز را هفته گذشته رزرو کردم. هتل را این هفته رزرو می‌کنیم.
A: حتماً خوش می‌گذره!`,
        duration: 58,
      },
    ],
    speaking: [
      {
        id: 'sp17-1', lessonId: 17, type: 'conversation', title: 'Talking about holidays', titleFa: 'صحبت درباره تعطیلات',
        scenario: 'Talk about your last holiday and your next holiday plans.',
        scenarioFa: 'درباره تعطیلات آخرت و برنامه‌های تعطیلات بعدیت صحبت کن.',
        lines: [
          { speaker: 'A', text: 'Dove sei andato/a in vacanza l\'anno scorso?', translation: 'پارسال کجا رفتی تعطیلات؟' },
          { speaker: 'B', text: 'Sono andato/a a ___. È stato/a bellissimo/a!', translation: 'رفتم ___. خیلی قشنگ بود!' },
          { speaker: 'A', text: 'E quest\'estate, cosa farai?', translation: 'این تابستون چی‌کار می‌کنی؟' },
          { speaker: 'B', text: 'Andrò in ___ e visiterò ___.', translation: 'می‌رم ___ و از ___ بازدید می‌کنم.' },
        ],
        tips: ['Past holiday = passato prossimo (sono andato/a)', 'Future plans = futuro (andrò, visiterò)', '"È stato" = it was (masculine)'],
      },
    ],
    exercises: [
      { id: 'ex17-1', type: 'fill_blank', question: 'Domani ___ (io, partire) per Roma.', correctAnswer: 'partirò' },
      { id: 'ex17-2', type: 'multiple_choice', question: 'Future of "essere" = ?', options: ['essero', 'sarò', 'serò', 'essrò'], correctAnswer: 'sarò' },
    ],
    flashcards: [
      { id: 'fc17-1', lessonId: 17, front: 'prenotare', back: 'رزرو کردن', example: 'Ho prenotato l\'hotel.', pronunciation: 'prenoˈtaːre', difficulty: 'beginner' },
      { id: 'fc17-2', lessonId: 17, front: 'il volo', back: 'پرواز', example: 'Il volo parte alle sei.', pronunciation: 'il ˈvoːlo', difficulty: 'beginner' },
      { id: 'fc17-3', lessonId: 17, front: 'fare le valigie', back: 'چمدون بستن', example: 'Devo fare le valigie.', pronunciation: 'ˈfaːre le vaˈliːdʒe', difficulty: 'beginner' },
    ],
  },

  // ─── Lesson 18 ────────────────────────────────────────────────
  {
    id: 18, number: 8, bookSlug: BOOK_SLUG, slug: 'ne2-lesson-8', pdfUrl: PDF_URL, startPage: 115, endPage: 130,
    title: 'Lo shopping', titleFa: 'خرید لباس',
    subtitle: 'Clothes, Sizes and Shopping', subtitleFa: 'لباس، سایز و خرید',
    overview: 'Impara a fare shopping, parlare di abbigliamento e fare confronti.', overviewFa: 'یاد بگیر لباس بخری، درباره پوشاک صحبت کنی و مقایسه کنی.',
    objectives: ['Name clothing items', 'Ask for sizes and colors', 'Use comparative and superlative', 'Make purchases'],
    objectivesFa: ['اسم لباس‌ها را بدونی', 'سایز و رنگ بپرسی', 'از مقایسه و عالی استفاده کنی', 'خرید کنی'],
    color: 'from-pink-500 to-rose-500', icon: '👗', estimatedMinutes: 55,
    vocabulary: [
      { id: 'v18-1', lessonId: 18, word: 'il vestito', translation: 'لباس', pronunciation: 'il vesˈtiːto', exampleIt: 'Questo vestito mi piace molto.', exampleFa: 'این لباس را خیلی دوست دارم.', difficulty: 'beginner', category: 'clothing' },
      { id: 'v18-2', lessonId: 18, word: 'la taglia', translation: 'سایز (لباس)', pronunciation: 'la ˈtaʎʎa', exampleIt: 'Che taglia porta?', exampleFa: 'چه سایزی می‌پوشید؟', difficulty: 'beginner', category: 'shopping' },
      { id: 'v18-3', lessonId: 18, word: 'provare', translation: 'امتحان کردن / پرو کردن', pronunciation: 'proˈvaːre', exampleIt: 'Posso provare questa giacca?', exampleFa: 'می‌تونم این کت را پرو کنم؟', difficulty: 'beginner', category: 'shopping' },
      { id: 'v18-4', lessonId: 18, word: 'mi sta bene', translation: 'بهم میاد', pronunciation: 'mi sta ˈbɛːne', exampleIt: 'Questo colore mi sta bene.', exampleFa: 'این رنگ بهم میاد.', difficulty: 'beginner', category: 'shopping' },
      { id: 'v18-5', lessonId: 18, word: 'è troppo', translation: 'خیلی زیاده', pronunciation: 'ɛ ˈtroppo', exampleIt: 'È troppo caro! / È troppo grande.', exampleFa: 'خیلی گرونه! / خیلی بزرگه.', difficulty: 'beginner', category: 'shopping' },
      { id: 'v18-6', lessonId: 18, word: 'lo sconto', translation: 'تخفیف', pronunciation: 'lo ˈskonto', exampleIt: 'C\'è lo sconto del 20%?', exampleFa: 'بیست درصد تخفیف داره؟', difficulty: 'beginner', category: 'shopping' },
    ],
    grammar: [
      {
        id: 'g18-1', lessonId: 18, title: 'Comparativo e superlativo', titleFa: 'مقایسه و عالی',
        explanation: 'Use più/meno + adj + di for comparisons, and il/la più + adj for superlative.',
        explanationFa: 'از più/meno + صفت + di برای مقایسه، و il/la più + صفت برای عالی استفاده کن.',
        examples: [
          { italian: 'Questa scarpa è più bella di quella.', persian: 'این کفش از اون قشنگ‌تره.' },
          { italian: 'Il vestito rosso è meno caro del nero.', persian: 'لباس قرمز ارزون‌تر از مشکیه.' },
          { italian: 'Questa è la borsa più elegante del negozio.', persian: 'این شیک‌ترین کیف مغازه‌ست.' },
        ],
        commonMistakes: ['Irregular: buono→migliore, cattivo→peggiore, grande→maggiore', 'Use "di" not "che" when comparing nouns'],
        exercises: [{ id: 'ex18-g1-1', type: 'fill_blank', question: 'Questo è ___ caro di quello. (more)', correctAnswer: 'più' }],
      },
    ],
    reading: [
      {
        id: 'r18-1', lessonId: 18, title: 'Una giornata di shopping', titleFa: 'یه روز خرید',
        content: `Commessa: Posso aiutarla?
Lara: Sì, sto cercando un vestito per una festa.
Commessa: Che taglia porta?
Lara: La 42. Mi piacciono i colori vivaci.
Commessa: Guardi questo — è arrivato ieri. È rosso corallo, molto elegante.
Lara: Posso provarlo?
Commessa: Certo, il camerino è là.
[Dopo qualche minuto]
Lara: Mi sta un po' largo. Avete la 40?
Commessa: Sì, eccola. Come le sta?
Lara: Perfetto! Quanto costa?
Commessa: 89 euro. Questa settimana c\'è lo sconto del 15%.
Lara: Ottimo! Lo prendo!`,
        translation: `کارمند: کمکتون می‌تونم؟
لارا: بله، دنبال یه لباس برای یه جشن می‌گردم.
کارمند: چه سایزی می‌پوشید؟
لارا: ۴۲. رنگ‌های شاد دوست دارم.
کارمند: این را ببینید — دیروز رسیده. مرجانی قرمزه، خیلی شیکه.
لارا: می‌تونم پرو کنم؟
کارمند: البته، اتاق پرو اونجاست.
[بعد چند دقیقه]
لارا: کمی گشاده. ۴۰ دارید؟
کارمند: بله، بفرمایید. چطوره؟
لارا: عالیه! چقدره؟
کارمند: ۸۹ یورو. این هفته ۱۵ درصد تخفیف داره.
لارا: عالیه! می‌گیرمش!`,
        vocabulary: ['v18-2', 'v18-3', 'v18-4', 'v18-5', 'v18-6'],
      },
    ],
    listening: [
      {
        id: 'l18-1', lessonId: 18, title: 'Saldi invernali', titleFa: 'حراج زمستانی',
        transcript: `A: Hai visto i saldi? Tutto al 50%!
B: Davvero? Dove?
A: Da Zara e H&M. Sono andata stamattina.
B: Hai comprato qualcosa di bello?
A: Sì, un cappotto blu e due maglioni. Il cappotto costava 120 euro ma l'ho preso a 60!
B: Fantastico! E i maglioni?
A: 15 euro l'uno. Erano bellissimi.
B: Ci vado anch'io domani!`,
        translation: `A: دیدی حراج؟ همه چیز ۵۰٪!
B: واقعاً؟ کجا؟
A: زارا و H&M. صبح رفتم.
B: چیز قشنگی خریدی؟
A: بله، یه پالتو آبی و دو تا پلیور. پالتو ۱۲۰ یورو بود ولی ۶۰ گرفتم!
B: خیلی خوبه! پلیورها چطور؟
A: هر کدوم ۱۵ یورو. خیلی قشنگ بودن.
B: منم فردا می‌رم!`,
        duration: 55,
      },
    ],
    speaking: [
      {
        id: 'sp18-1', lessonId: 18, type: 'roleplay', title: 'Shopping for clothes', titleFa: 'خرید لباس',
        scenario: 'You are shopping for clothes in an Italian store.',
        scenarioFa: 'داری در یه مغازه ایتالیایی لباس می‌خری.',
        lines: [
          { speaker: 'Shop assistant', text: 'Posso aiutarla?', translation: 'کمکتون می‌تونم؟' },
          { speaker: 'You', text: 'Sto cercando ___ . Ce l\'avete in taglia ___?', translation: 'دنبال ___ می‌گردم. سایز ___ دارید؟' },
          { speaker: 'Shop assistant', text: 'Che colore preferisce?', translation: 'چه رنگی ترجیح می‌دید؟' },
          { speaker: 'You', text: 'Preferisco il ___. Posso provarlo?', translation: '___ ترجیح می‌دم. می‌تونم پرو کنم؟' },
        ],
        tips: ['Sto cercando = I\'m looking for (stare + gerundio)', '"Ce l\'avete?" = do you have it?', 'Mi sta bene/male = it fits me well/badly'],
      },
    ],
    exercises: [
      { id: 'ex18-1', type: 'fill_blank', question: 'Questo vestito è ___ bello di quello. (more)', correctAnswer: 'più' },
      { id: 'ex18-2', type: 'multiple_choice', question: '"buono" superlative = ?', options: ['più buono', 'migliore', 'benissimo', 'ottimale'], correctAnswer: 'migliore' },
    ],
    flashcards: [
      { id: 'fc18-1', lessonId: 18, front: 'provare', back: 'پرو کردن', example: 'Posso provare questa?', pronunciation: 'proˈvaːre', difficulty: 'beginner' },
      { id: 'fc18-2', lessonId: 18, front: 'mi sta bene', back: 'بهم میاد', example: 'Questo colore mi sta bene.', pronunciation: 'mi sta ˈbɛːne', difficulty: 'beginner' },
      { id: 'fc18-3', lessonId: 18, front: 'lo sconto', back: 'تخفیف', example: 'C\'è lo sconto?', pronunciation: 'lo ˈskonto', difficulty: 'beginner' },
    ],
  },

  // ─── Lesson 19 ────────────────────────────────────────────────
  {
    id: 19, number: 9, bookSlug: BOOK_SLUG, slug: 'ne2-lesson-9', pdfUrl: PDF_URL, startPage: 131, endPage: 144,
    title: 'In treno e in aereo', titleFa: 'با قطار و هواپیما',
    subtitle: 'Travel by Train and Plane', subtitleFa: 'سفر با قطار و هواپیما',
    overview: 'Impara a prenotare biglietti e viaggiare in treno o aereo.', overviewFa: 'یاد بگیر بلیت رزرو کنی و با قطار یا هواپیما سفر کنی.',
    objectives: ['Book train and plane tickets', 'Understand departure boards', 'Ask about delays', 'Use ci vuole/ci vogliono'],
    objectivesFa: ['بلیت قطار و هواپیما رزرو کن', 'تابلوهای حرکت را بخون', 'درباره تأخیر بپرس', 'از ci vuole/ci vogliono استفاده کن'],
    color: 'from-emerald-500 to-teal-600', icon: '🚄', estimatedMinutes: 55,
    vocabulary: [
      { id: 'v19-1', lessonId: 19, word: 'il binario', translation: 'سکوی قطار', pronunciation: 'il biˈnaːrjo', exampleIt: 'Il treno parte dal binario 5.', exampleFa: 'قطار از سکوی ۵ حرکت می‌کنه.', difficulty: 'beginner', category: 'travel' },
      { id: 'v19-2', lessonId: 19, word: 'andata e ritorno', translation: 'رفت و برگشت', pronunciation: 'anˈdaːta e riˈtorno', exampleIt: 'Un biglietto andata e ritorno, per favore.', exampleFa: 'یه بلیت رفت و برگشت، لطفاً.', difficulty: 'beginner', category: 'travel' },
      { id: 'v19-3', lessonId: 19, word: 'il ritardo', translation: 'تأخیر', pronunciation: 'il riˈtardo', exampleIt: 'Il treno ha un ritardo di 20 minuti.', exampleFa: 'قطار ۲۰ دقیقه تأخیر داره.', difficulty: 'beginner', category: 'travel' },
      { id: 'v19-4', lessonId: 19, word: 'fare il check-in', translation: 'چک‌این کردن', pronunciation: 'ˈfaːre il tʃekˈin', exampleIt: 'Devo fare il check-in online.', exampleFa: 'باید آنلاین چک‌این کنم.', difficulty: 'beginner', category: 'airport' },
      { id: 'v19-5', lessonId: 19, word: 'il bagaglio a mano', translation: 'بار دستی', pronunciation: 'il baˈɡaʎʎo a ˈmaːno', exampleIt: 'Ho solo il bagaglio a mano.', exampleFa: 'فقط بار دستی دارم.', difficulty: 'intermediate', category: 'airport' },
      { id: 'v19-6', lessonId: 19, word: 'ci vuole', translation: 'طول می‌کشه', pronunciation: 'tʃi ˈvwɔle', exampleIt: 'Ci vuole un\'ora per arrivare.', exampleFa: 'یه ساعت طول می‌کشه تا برسیم.', difficulty: 'intermediate', category: 'time' },
    ],
    grammar: [
      {
        id: 'g19-1', lessonId: 19, title: 'Ci vuole / Ci vogliono', titleFa: 'طول می‌کشه / لازمه',
        explanation: '"Ci vuole" means "it takes" or "you need" (singular). "Ci vogliono" for plural.',
        explanationFa: '"Ci vuole" یعنی "طول می‌کشه" یا "لازمه" (مفرد). "Ci vogliono" برای جمع.',
        examples: [
          { italian: 'Ci vuole un\'ora. (It takes one hour)', persian: 'یه ساعت طول می‌کشه.' },
          { italian: 'Ci vogliono due ore. (It takes two hours)', persian: 'دو ساعت طول می‌کشه.' },
          { italian: 'Ci vuole il passaporto. (You need the passport)', persian: 'پاسپورت لازمه.' },
        ],
        commonMistakes: ['Ci vuole = singular thing/amount; ci vogliono = plural', '"Quanto ci vuole?" = How long does it take?'],
        exercises: [{ id: 'ex19-g1-1', type: 'fill_blank', question: '___ due ore per arrivare a Roma. (it takes)', correctAnswer: 'Ci vogliono' }],
      },
    ],
    reading: [
      {
        id: 'r19-1', lessonId: 19, title: 'In biglietteria', titleFa: 'در باجه بلیت',
        content: `Cliente: Buongiorno. Vorrei un biglietto per Firenze.
Bigliettaio: Andata semplice o andata e ritorno?
Cliente: Andata e ritorno. Parto domani mattina e torno domenica sera.
Bigliettaio: C\'è un Frecciarossa alle 8:15, arriva a Firenze alle 9:50.
Cliente: Quanto ci vuole?
Bigliettaio: Un\'ora e trentacinque minuti. Vuole la prima o la seconda classe?
Cliente: Seconda classe va bene. Quanto costa?
Bigliettaio: 54 euro andata e ritorno.
Cliente: Perfetto. Pago con carta.`,
        translation: `مشتری: صبح بخیر. می‌خوام یه بلیت برای فلورانس بگیرم.
باجه‌دار: یک طرفه یا رفت و برگشت؟
مشتری: رفت و برگشت. فردا صبح می‌رم و یکشنبه شب برمی‌گردم.
باجه‌دار: فرچاروسا ساعت ۸:۱۵ هست، ساعت ۹:۵۰ می‌رسه فلورانس.
مشتری: چقدر طول می‌کشه؟
باجه‌دار: یه ساعت و سی و پنج دقیقه. اول می‌خواید یا دوم؟
مشتری: دوم کلاس کافیه. چقدره؟
باجه‌دار: رفت و برگشت ۵۴ یورو.
مشتری: عالیه. با کارت پرداخت می‌کنم.`,
        vocabulary: ['v19-1', 'v19-2', 'v19-3', 'v19-6'],
      },
    ],
    listening: [
      {
        id: 'l19-1', lessonId: 19, title: 'Annuncio in aeroporto', titleFa: 'اعلام در فرودگاه',
        transcript: `Attenzione, attenzione. Informazione per i passeggeri del volo AZ1234 per Milano Malpensa. Il volo è in ritardo di circa trenta minuti a causa del traffico aereo. L'imbarco inizierà alle 14:30 al gate B12. Si prega i passeggeri di restare in zona imbarco. Grazie per la pazienza e ci scusiamo per il disagio.`,
        translation: `توجه، توجه. اطلاع برای مسافران پرواز AZ1234 به میلان مالپنسا. پرواز به خاطر ترافیک هوایی حدود سی دقیقه تأخیر دارد. سوار شدن ساعت ۱۴:۳۰ در گیت B12 شروع می‌شود. از مسافران خواهش می‌شود در منطقه پرواز بمانند. ممنون از صبوری شما و بابت مشکل پیش آمده عذرخواهی می‌کنیم.`,
        duration: 45,
      },
    ],
    speaking: [
      {
        id: 'sp19-1', lessonId: 19, type: 'roleplay', title: 'Buying a train ticket', titleFa: 'خرید بلیت قطار',
        scenario: 'You are at a train station ticket office in Italy.',
        scenarioFa: 'در باجه بلیت قطار در ایتالیا هستی.',
        lines: [
          { speaker: 'You', text: 'Buongiorno! Un biglietto per ___, per favore.', translation: 'صبح بخیر! یه بلیت برای ___، لطفاً.' },
          { speaker: 'Clerk', text: 'Andata semplice o andata e ritorno?', translation: 'یک طرفه یا رفت و برگشت؟' },
          { speaker: 'You', text: 'Andata e ritorno. Quando parte il prossimo treno?', translation: 'رفت و برگشت. قطار بعدی کِی حرکت می‌کنه؟' },
          { speaker: 'Clerk', text: 'C\'è un treno alle ___, binario ___.', translation: 'ساعت ___ قطار هست، سکوی ___.' },
        ],
        tips: ['Andata semplice = one way', 'Ci vuole + singular time period', 'Ask "Da quale binario?" for the platform'],
      },
    ],
    exercises: [
      { id: 'ex19-1', type: 'fill_blank', question: '___ un\'ora per arrivare. (It takes)', correctAnswer: 'Ci vuole' },
      { id: 'ex19-2', type: 'multiple_choice', question: '"Round trip" = ?', options: ['Andata semplice', 'Andata e ritorno', 'Solo andata', 'Doppio viaggio'], correctAnswer: 'Andata e ritorno' },
    ],
    flashcards: [
      { id: 'fc19-1', lessonId: 19, front: 'il binario', back: 'سکوی قطار', example: 'Binario 5.', pronunciation: 'il biˈnaːrjo', difficulty: 'beginner' },
      { id: 'fc19-2', lessonId: 19, front: 'ci vuole', back: 'طول می‌کشه', example: 'Ci vuole un\'ora.', pronunciation: 'tʃi ˈvwɔle', difficulty: 'intermediate' },
      { id: 'fc19-3', lessonId: 19, front: 'il ritardo', back: 'تأخیر', example: 'Il treno ha ritardo.', pronunciation: 'il riˈtardo', difficulty: 'beginner' },
    ],
  },

  // ─── Lesson 20 ────────────────────────────────────────────────
  {
    id: 20, number: 10, bookSlug: BOOK_SLUG, slug: 'ne2-lesson-10', pdfUrl: PDF_URL, startPage: 145, endPage: 157,
    title: 'Parliamo del futuro', titleFa: 'درباره آینده صحبت کنیم',
    subtitle: 'Future Plans and Dreams', subtitleFa: 'برنامه‌ها و رویاهای آینده',
    overview: 'Impara a parlare di progetti futuri, sogni e ambizioni.', overviewFa: 'یاد بگیر درباره برنامه‌های آینده، رویاها و جاه‌طلبی‌ها صحبت کنی.',
    objectives: ['Express future plans', 'Talk about dreams and ambitions', 'Use se + futuro', 'Express conditions and consequences'],
    objectivesFa: ['برنامه‌های آینده را بیان کن', 'درباره رویاها و جاه‌طلبی‌ها صحبت کن', 'از se + آینده استفاده کن', 'شرط و نتیجه را بیان کن'],
    color: 'from-violet-500 to-indigo-600', icon: '🌟', estimatedMinutes: 60,
    vocabulary: [
      { id: 'v20-1', lessonId: 20, word: 'il sogno', translation: 'رویا', pronunciation: 'il ˈsoɲɲo', exampleIt: 'Il mio sogno è vivere in Italia.', exampleFa: 'رویام اینه که در ایتالیا زندگی کنم.', difficulty: 'beginner', category: 'aspirations' },
      { id: 'v20-2', lessonId: 20, word: 'in futuro', translation: 'در آینده', pronunciation: 'in fuˈtuːro', exampleIt: 'In futuro voglio aprire un ristorante.', exampleFa: 'در آینده می‌خوام یه رستوران باز کنم.', difficulty: 'beginner', category: 'time' },
      { id: 'v20-3', lessonId: 20, word: 'forse', translation: 'شاید', pronunciation: 'ˈforse', exampleIt: 'Forse traslocherò a Milano.', exampleFa: 'شاید برم میلان.', difficulty: 'beginner', category: 'adverbs' },
      { id: 'v20-4', lessonId: 20, word: 'spero di', translation: 'امیدوارم', pronunciation: 'ˈspɛːro di', exampleIt: 'Spero di diventare architetto.', exampleFa: 'امیدوارم معمار بشم.', difficulty: 'intermediate', category: 'aspirations' },
      { id: 'v20-5', lessonId: 20, word: 'riuscire a', translation: 'موفق شدن در', pronunciation: 'riˈuʃʃire a', exampleIt: 'Spero di riuscire a imparare l\'italiano.', exampleFa: 'امیدوارم بتونم ایتالیایی یاد بگیرم.', difficulty: 'intermediate', category: 'aspirations' },
      { id: 'v20-6', lessonId: 20, word: 'chissà', translation: 'کی می‌دونه', pronunciation: 'kisˈsa', exampleIt: 'Chissà cosa succederà!', exampleFa: 'کی می‌دونه چی پیش میاد!', difficulty: 'intermediate', category: 'expressions' },
    ],
    grammar: [
      {
        id: 'g20-1', lessonId: 20, title: 'Se + Futuro (First Conditional)', titleFa: 'اگر + آینده',
        explanation: 'In Italian, "if" clauses about likely future situations use the future tense in BOTH clauses.',
        explanationFa: 'در ایتالیایی، در جملات "اگر" درباره موقعیت‌های محتمل آینده، هر دو بند از زمان آینده استفاده می‌کنند.',
        examples: [
          { italian: 'Se andrò in Italia, visiterò Roma.', persian: 'اگه برم ایتالیا، از رُم بازدید می‌کنم.' },
          { italian: 'Se studierai di più, progredirai.', persian: 'اگه بیشتر درس بخونی، پیشرفت می‌کنی.' },
          { italian: 'Se avrò tempo, verrò a trovarti.', persian: 'اگه وقت داشتم، میام پیشت.' },
        ],
        commonMistakes: ['Italian uses future in both clauses (unlike English: "if I go" not "if I will go")', 'Se + futuro (not congiuntivo for this type)'],
        exercises: [{ id: 'ex20-g1-1', type: 'fill_blank', question: 'Se ___ (avere) tempo, vengo con te.', correctAnswer: 'avrò' }],
      },
    ],
    reading: [
      {
        id: 'r20-1', lessonId: 20, title: 'I miei progetti', titleFa: 'پروژه‌های من',
        content: `Ho tanti progetti per il futuro! Il prossimo anno finirò l\'università e poi cercherò lavoro in un\'azienda internazionale. Se troverò un buon lavoro, forse mi trasferirò a Milano. Spero di riuscire a mettere da parte dei soldi per comprare casa. Il mio grande sogno? Aprire una piccola libreria in centro. Chissà, forse un giorno ci riuscirò! Per ora, continuerò a studiare e a lavorare sodo.`,
        translation: `برنامه‌های زیادی برای آینده دارم! سال آینده دانشگاه را تموم می‌کنم و بعد توی یه شرکت بین‌المللی دنبال کار می‌گردم. اگه یه کار خوب پیدا کنم، شاید برم میلان. امیدوارم بتونم پس‌انداز کنم تا خونه بخرم. رویای بزرگم؟ یه کتابفروشی کوچیک در مرکز شهر باز کنم. کی می‌دونه، شاید یه روز موفق بشم! فعلاً به درس خوندن و کار کردن ادامه می‌دم.`,
        vocabulary: ['v20-1', 'v20-2', 'v20-3', 'v20-4', 'v20-5', 'v20-6'],
      },
    ],
    listening: [
      {
        id: 'l20-1', lessonId: 20, title: 'Sogni e progetti', titleFa: 'رویاها و برنامه‌ها',
        transcript: `A: Cosa farai dopo la laurea?
B: Non so ancora con certezza. Spero di trovare lavoro nel campo del marketing.
A: E se non trovi subito?
B: Forse farò un master all'estero. Se avrò abbastanza soldi, andrò a Londra.
A: Il tuo sogno?
B: Lavorare per un'azienda internazionale. E tu?
A: Io aprirò un'agenzia di viaggi. Ho già un piano!
B: Ottimo! Chissà dove saremo tra dieci anni!`,
        translation: `A: بعد از فارغ‌التحصیلی چیکار می‌کنی؟
B: هنوز مطمئن نیستم. امیدوارم تو حوزه بازاریابی کار پیدا کنم.
A: اگه زود پیدا نکردی؟
B: شاید یه ماستر خارج از کشور بخونم. اگه پول کافی داشتم، می‌رم لندن.
A: رویات چیه؟
B: برای یه شرکت بین‌المللی کار کنم. تو چی؟
A: من یه آژانس مسافرتی باز می‌کنم. برنامه‌ام را دارم!
B: عالیه! کی می‌دونه ده سال دیگه کجاییم!`,
        duration: 62,
      },
    ],
    speaking: [
      {
        id: 'sp20-1', lessonId: 20, type: 'conversation', title: 'Future plans', titleFa: 'برنامه‌های آینده',
        scenario: 'Talk about your future plans and dreams with an Italian friend.',
        scenarioFa: 'با یه دوست ایتالیایی درباره برنامه‌ها و رویاهات صحبت کن.',
        lines: [
          { speaker: 'A', text: 'Quali sono i tuoi piani per il futuro?', translation: 'برنامه‌هات برای آینده چیه؟' },
          { speaker: 'B', text: 'In futuro voglio ___. Spero di riuscire a ___.', translation: 'در آینده می‌خوام ___. امیدوارم بتونم ___.' },
          { speaker: 'A', text: 'E se non ci riesci?', translation: 'اگه موفق نشدی چی؟' },
          { speaker: 'B', text: 'Se non riuscirò, forse ___. Chissà!', translation: 'اگه موفق نشدم، شاید ___. کی می‌دونه!' },
        ],
        tips: ['Futuro semplice for definite plans', '"Spero di + infinito" for hopes', '"Se + futuro, futuro" for conditions'],
      },
    ],
    exercises: [
      { id: 'ex20-1', type: 'fill_blank', question: 'Se ___ (io, avere) tempo, verrò da te.', correctAnswer: 'avrò' },
      { id: 'ex20-2', type: 'multiple_choice', question: 'Future of "venire" = ?', options: ['venirò', 'venrò', 'verrò', 'venirà'], correctAnswer: 'verrò' },
      { id: 'ex20-3', type: 'translation', question: 'Translate: "My dream is to live in Italy."', correctAnswer: 'Il mio sogno è vivere in Italia.' },
    ],
    flashcards: [
      { id: 'fc20-1', lessonId: 20, front: 'il sogno', back: 'رویا', example: 'Il mio sogno è vivere in Italia.', pronunciation: 'il ˈsoɲɲo', difficulty: 'beginner' },
      { id: 'fc20-2', lessonId: 20, front: 'spero di', back: 'امیدوارم', example: 'Spero di trovare lavoro.', pronunciation: 'ˈspɛːro di', difficulty: 'intermediate' },
      { id: 'fc20-3', lessonId: 20, front: 'chissà', back: 'کی می‌دونه', example: 'Chissà cosa succederà!', pronunciation: 'kisˈsa', difficulty: 'intermediate' },
    ],
  },
];
