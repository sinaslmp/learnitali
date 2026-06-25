import { Lesson } from '@/types';

const BOOK_SLUG = 'nuovo-espresso-4';
const PDF_URL = '/books/nuovo-espresso-4.pdf';

export const lessonsEspresso4: Lesson[] = [
  {
    id: 31, number: 1, bookSlug: BOOK_SLUG, slug: 'ne4-lesson-1', pdfUrl: PDF_URL,
    title: 'Il congiuntivo imperfetto', titleFa: 'التزامی ناقص',
    subtitle: 'Past Subjunctive for Hypotheticals and Reported Speech', subtitleFa: 'التزامی گذشته برای فرضیات و نقل قول',
    overview: 'Impara il congiuntivo imperfetto e trapassato per completare i periodi ipotetici.', overviewFa: 'التزامی ناقص و بعید را برای جملات شرطی یاد بگیر.',
    objectives: ['Form the imperfect subjunctive', 'Use it in type 2 conditionals', 'Use the pluperfect subjunctive', 'Recognise it in reported speech'],
    objectivesFa: ['التزامی ناقص را بساز', 'در شرطی نوع ۲ استفاده کن', 'التزامی بعید را یاد بگیر', 'آن را در نقل قول بشناس'],
    color: 'from-orange-500 to-rose-600', icon: '🌊', estimatedMinutes: 75,
    vocabulary: [
      { id: 'v31-1', lessonId: 31, word: 'se fossi', translation: 'اگه بودم', pronunciation: 'se ˈfɔssi', exampleIt: 'Se fossi ricco, viaggerei ovunque.', exampleFa: 'اگه پولدار بودم، همه جا می‌رفتم.', difficulty: 'advanced', category: 'subjunctive' },
      { id: 'v31-2', lessonId: 31, word: 'se avessi', translation: 'اگه داشتم', pronunciation: 'se avˈvɛssi', exampleIt: 'Se avessi tempo, studierei di più.', exampleFa: 'اگه وقت داشتم، بیشتر درس می‌خوندم.', difficulty: 'advanced', category: 'subjunctive' },
      { id: 'v31-3', lessonId: 31, word: 'se fosse venuto', translation: 'اگه اومده بود', pronunciation: 'se ˈfɔsse veˈnuːto', exampleIt: 'Se fosse venuto, l\'avrei salutato.', exampleFa: 'اگه اومده بود، سلام می‌کردم.', difficulty: 'advanced', category: 'subjunctive_past' },
      { id: 'v31-4', lessonId: 31, word: 'benché / sebbene', translation: 'اگرچه (+ التزامی)', pronunciation: 'benˈke / sebˈbeːne', exampleIt: 'Benché fosse tardi, continuò a lavorare.', exampleFa: 'اگرچه دیر بود، به کار ادامه داد.', difficulty: 'advanced', category: 'conjunctions' },
      { id: 'v31-5', lessonId: 31, word: 'prima che', translation: 'قبل از اینکه (+ التزامی)', pronunciation: 'ˈpriːma ke', exampleIt: 'Parti prima che arrivi la pioggia.', exampleFa: 'قبل از اینکه باران بیاد برو.', difficulty: 'advanced', category: 'conjunctions' },
      { id: 'v31-6', lessonId: 31, word: 'affinché / perché', translation: 'تا اینکه / برای اینکه (التزامی)', pronunciation: 'affinˈke / perˈke', exampleIt: 'Te lo spiego affinché tu capisca.', exampleFa: 'توضیح می‌دم تا بفهمی.', difficulty: 'advanced', category: 'conjunctions' },
    ],
    grammar: [
      {
        id: 'g31-1', lessonId: 31, title: 'Congiuntivo imperfetto e trapassato', titleFa: 'التزامی ناقص و بعید',
        explanation: 'The imperfect subjunctive is used in type 2 conditionals and after certain conjunctions referring to the past.',
        explanationFa: 'التزامی ناقص در شرطی نوع ۲ و بعد از برخی接続詞 که به گذشته اشاره دارند استفاده می‌شود.',
        examples: [
          { italian: 'essere: fossi, fossi, fosse, fossimo, foste, fossero', persian: 'بودم، بودی، بود...' },
          { italian: 'avere: avessi, avessi, avesse, avessimo, aveste, avessero', persian: 'داشتم، داشتی، داشت...' },
          { italian: 'Tipo 2: Se avessi soldi, comprerei casa.', persian: 'اگه پول داشتم، خونه می‌خریدم.' },
          { italian: 'Tipo 3 (trapassato): Se avessi studiato, avrei passato.', persian: 'اگه درس خونده بودم، پاس می‌کردم.' },
        ],
        commonMistakes: ['All verbs use -are→ -assi/-asse/-assimo/-aste/-assero pattern', 'Essere and avere are irregular: fossi/avessi', 'Never "se + condizionale" — use subjunctive in the "se" clause'],
        exercises: [{ id: 'ex31-g1-1', type: 'fill_blank', question: 'Se ___ (avere) più soldi, comprerei un appartamento.', correctAnswer: 'avessi' }],
      },
    ],
    reading: [
      {
        id: 'r31-1', lessonId: 31, title: 'Un sogno impossibile', titleFa: 'یه رویای غیرممکن',
        content: `Se potessi tornare indietro nel tempo, andrei nell'Italia rinascimentale. Vorrei conoscere Leonardo da Vinci, benché fosse probabilmente molto occupato. Se avessi vissuto nel Cinquecento, avrei imparato a dipingere e a scolpire. Prima che il Rinascimento finisse, avrei visitato tutte le botteghe degli artisti. Sebbene la vita fosse più difficile senza tecnologia moderna, sarebbe stata straordinariamente stimolante. Se fossi nato in quell'epoca, avrei dedicato la vita all'arte e alla scienza.`,
        translation: `اگه می‌تونستم به گذشته برگردم، به ایتالیای رنسانس می‌رفتم. می‌خواستم لئوناردو داوینچی را بشناسم، اگرچه احتمالاً خیلی مشغول بود. اگه در قرن شانزدهم زندگی کرده بودم، نقاشی و مجسمه‌سازی یاد می‌گرفتم. قبل از اینکه رنسانس تموم بشه، از تمام کارگاه‌های هنرمندان بازدید می‌کردم. اگرچه زندگی بدون تکنولوژی مدرن سخت‌تر بود، فوق‌العاده هیجان‌انگیز می‌بود. اگه در اون دوران متولد شده بودم، زندگیم را وقف هنر و علم می‌کردم.`,
        vocabulary: ['v31-1', 'v31-2', 'v31-3', 'v31-4', 'v31-5'],
      },
    ],
    listening: [
      {
        id: 'l31-1', lessonId: 31, title: 'Se potessi scegliere...', titleFa: 'اگه می‌تونستی انتخاب کنی...',
        transcript: `A: Se potessi vivere in un altro paese, dove andresti?
B: Se potessi scegliere, vivrei in Giappone. Tu?
A: Io, se fossi più coraggioso, vivrei in Brasile.
B: Sebbene sia lontano, deve essere meraviglioso.
A: Se avessi studiato il portoghese, ci sarei andato anni fa!
B: Prima che sia troppo tardi, dovresti impararlo adesso!`,
        translation: `A: اگه می‌تونستی در کشور دیگه‌ای زندگی کنی، کجا می‌رفتی؟
B: اگه می‌تونستم انتخاب کنم، در ژاپن زندگی می‌کردم. تو چطور؟
A: من، اگه شجاع‌تر بودم، در برزیل زندگی می‌کردم.
B: اگرچه دوره، باید فوق‌العاده باشه.
A: اگه پرتغالی یاد گرفته بودم، سال‌ها پیش رفته بودم!
B: قبل از اینکه خیلی دیر بشه، الان باید یاد بگیری!`,
        duration: 60,
      },
    ],
    speaking: [
      {
        id: 'sp31-1', lessonId: 31, type: 'conversation', title: 'Hypothetical life choices', titleFa: 'انتخاب‌های فرضی زندگی',
        scenario: 'Discuss what you would do if circumstances were different.',
        scenarioFa: 'درباره اینکه اگه اوضاع متفاوت بود چیکار می‌کردی صحبت کن.',
        lines: [
          { speaker: 'A', text: 'Se non avessi scelto questo lavoro, cosa avresti fatto?', translation: 'اگه این شغل را انتخاب نکرده بودی، چیکار می‌کردی؟' },
          { speaker: 'B', text: 'Se avessi potuto scegliere liberamente, ___.', translation: 'اگه می‌تونستم آزادانه انتخاب کنم، ___.' },
          { speaker: 'A', text: 'Sebbene sia difficile, penso che tu ___.', translation: 'اگرچه سخته، فکر می‌کنم ___.' },
          { speaker: 'B', text: 'Se fossi nei tuoi panni, cosa faresti?', translation: 'اگه جای تو بودم، چیکار می‌کردم؟' },
        ],
        tips: ['Type 2: se + congiuntivo imperfetto + condizionale presente', 'Type 3: se + congiuntivo trapassato + condizionale passato', 'Can mix: Se avessi studiato (past), sarei (present) più sicuro'],
      },
    ],
    exercises: [
      { id: 'ex31-1', type: 'fill_blank', question: 'Se ___ (essere) in Italia, mangerei la pizza ogni giorno.', correctAnswer: 'fossi' },
      { id: 'ex31-2', type: 'fill_blank', question: 'Se avesse studiato, ___ (passare) l\'esame.', correctAnswer: 'avrebbe passato' },
      { id: 'ex31-3', type: 'multiple_choice', question: '"Benché" requires which mood?', options: ['indicativo', 'condizionale', 'congiuntivo', 'imperativo'], correctAnswer: 'congiuntivo' },
    ],
    flashcards: [
      { id: 'fc31-1', lessonId: 31, front: 'se fossi', back: 'اگه بودم', example: 'Se fossi ricco, viaggierei.', pronunciation: 'se ˈfɔssi', difficulty: 'advanced' },
      { id: 'fc31-2', lessonId: 31, front: 'se avessi avuto', back: 'اگه داشته بودم', example: 'Se avessi studiato, avrei passato.', pronunciation: 'se avˈvɛssi aˈvuːto', difficulty: 'advanced' },
      { id: 'fc31-3', lessonId: 31, front: 'benché + congiuntivo', back: 'اگرچه + التزامی', example: 'Benché fosse tardi, lavorò.', pronunciation: 'benˈke', difficulty: 'advanced' },
    ],
  },

  {
    id: 32, number: 2, bookSlug: BOOK_SLUG, slug: 'ne4-lesson-2', pdfUrl: PDF_URL,
    title: 'Il discorso indiretto', titleFa: 'نقل قول غیرمستقیم',
    subtitle: 'Reported Speech: Tense Shifts and Pronouns', subtitleFa: 'نقل قول: تغییر زمان و ضمایر',
    overview: 'Impara a riportare le parole degli altri con i cambiamenti di tempo necessari.', overviewFa: 'یاد بگیر حرف‌های دیگران را با تغییرات زمانی لازم نقل کنی.',
    objectives: ['Apply tense shifts in reported speech', 'Change pronouns and time expressions', 'Report questions with se and interrogatives', 'Report commands'],
    objectivesFa: ['تغییرات زمانی در نقل قول را اعمال کن', 'ضمایر و عبارات زمانی را تغییر بده', 'سوال‌ها را با se و کلمات استفهامی نقل کن', 'دستورات را نقل کن'],
    color: 'from-rose-500 to-pink-600', icon: '💬', estimatedMinutes: 70,
    vocabulary: [
      { id: 'v32-1', lessonId: 32, word: 'ha detto che', translation: 'گفت که', pronunciation: 'a ˈdɛtto ke', exampleIt: 'Ha detto che era stanco.', exampleFa: 'گفت که خسته‌ست.', difficulty: 'intermediate', category: 'reported_speech' },
      { id: 'v32-2', lessonId: 32, word: 'ha chiesto se', translation: 'پرسید آیا', pronunciation: 'a ˈkjɛsto se', exampleIt: 'Ha chiesto se venivo alla festa.', exampleFa: 'پرسید آیا به مهمونی میام.', difficulty: 'intermediate', category: 'reported_speech' },
      { id: 'v32-3', lessonId: 32, word: 'ha risposto che', translation: 'جواب داد که', pronunciation: 'a risˈposto ke', exampleIt: 'Ha risposto che non sapeva.', exampleFa: 'جواب داد که نمی‌دونست.', difficulty: 'intermediate', category: 'reported_speech' },
      { id: 'v32-4', lessonId: 32, word: 'mi ha ordinato di', translation: 'بهم دستور داد که', pronunciation: 'mi a ordiˈnaːto di', exampleIt: 'Mi ha ordinato di finire subito.', exampleFa: 'بهم دستور داد فوری تموم کنم.', difficulty: 'advanced', category: 'reported_speech' },
      { id: 'v32-5', lessonId: 32, word: 'ha aggiunto che', translation: 'اضافه کرد که', pronunciation: 'a adˈdʒunto ke', exampleIt: 'Ha aggiunto che sarebbe tornato presto.', exampleFa: 'اضافه کرد که زود برمی‌گرده.', difficulty: 'intermediate', category: 'reported_speech' },
      { id: 'v32-6', lessonId: 32, word: 'sosteneva che', translation: 'ادعا می‌کرد که', pronunciation: 'sosteˈneːva ke', exampleIt: 'Sosteneva che avesse ragione lui.', exampleFa: 'ادعا می‌کرد که حق با اونه.', difficulty: 'advanced', category: 'reported_speech' },
    ],
    grammar: [
      {
        id: 'g32-1', lessonId: 32, title: 'Tense shifts in reported speech', titleFa: 'تغییر زمان در نقل قول',
        explanation: 'When the reporting verb is in the past, tenses shift back: presente→imperfetto, passato prossimo→trapassato, futuro→condizionale.',
        explanationFa: 'وقتی فعل گزارشی در گذشته‌ست، زمان‌ها عقب می‌روند.',
        examples: [
          { italian: '"Sono stanco" → Ha detto che era stanco.', persian: 'گفت که خسته‌ست.' },
          { italian: '"Ho mangiato" → Ha detto che aveva mangiato.', persian: 'گفت که خورده بود.' },
          { italian: '"Verrò" → Ha detto che sarebbe venuto.', persian: 'گفت که می‌اومد.' },
          { italian: '"Vieni!" → Mi ha detto di venire.', persian: 'بهم گفت بیام.' },
          { italian: '"Sei venuto?" → Ha chiesto se ero venuto.', persian: 'پرسید آیا اومده بودم.' },
        ],
        commonMistakes: ['Commands become "di + infinito", not subjunctive', '"Qui/oggi/domani" shift: qui→lì, oggi→quel giorno, domani→il giorno dopo'],
        exercises: [{ id: 'ex32-g1-1', type: 'fill_blank', question: '"Parto domani." → Ha detto che ___ il giorno dopo.', correctAnswer: 'sarebbe partito' }],
      },
    ],
    reading: [
      {
        id: 'r32-1', lessonId: 32, title: 'Pettegolezzi in ufficio', titleFa: 'شایعات اداری',
        content: `Marco mi ha raccontato tutto quello che era successo in riunione. Ha detto che il direttore era arrivato in ritardo e sembrava molto agitato. Ha aggiunto che aveva annunciato dei cambiamenti importanti. Gli ho chiesto se avesse spiegato i motivi. Ha risposto che aveva solo detto che la situazione economica era difficile e che avrebbero dovuto ridurre i costi. Sosteneva che tutti fossero preoccupati. Mi ha ordinato di non dire niente a nessuno. Come se potessi tacere!`,
        translation: `مارکو همه چیزی که در جلسه اتفاق افتاده بود را برام تعریف کرد. گفت که مدیر دیر اومده بود و خیلی به نظر می‌رسید ناراحته. اضافه کرد که تغییرات مهمی اعلام کرده بود. پرسیدم آیا دلایل را توضیح داده بود. جواب داد که فقط گفته بود وضعیت اقتصادی سخته و باید هزینه‌ها را کاهش بدن. ادعا می‌کرد که همه نگران بودند. بهم دستور داد به هیچ‌کس چیزی نگم. انگار می‌تونستم ساکت باشم!`,
        vocabulary: ['v32-1', 'v32-2', 'v32-3', 'v32-4', 'v32-5', 'v32-6'],
      },
    ],
    listening: [
      {
        id: 'l32-1', lessonId: 32, title: 'Cosa ha detto?', titleFa: 'چی گفت؟',
        transcript: `A: Hai parlato con la professoressa?
B: Sì! Ha detto che il nostro progetto era molto buono.
A: Sul serio? Ha detto altro?
B: Ha aggiunto che avremmo dovuto approfondire la ricerca.
A: Ha chiesto quando consegnavamo?
B: Sì, ha chiesto se avevamo già fissato una data. Le ho detto che stavamo ancora lavorando.
A: Perfetto. Ha detto di portare anche la bibliografia?
B: No, ha detto solo di inviare il file entro venerdì.`,
        translation: `A: با استاد صحبت کردی؟
B: بله! گفت که پروژه‌مون خیلی خوب بود.
A: جدی؟ چیز دیگه‌ای هم گفت؟
B: اضافه کرد که باید تحقیق را عمیق‌تر می‌کردیم.
A: پرسید کِی تحویل می‌دیم؟
B: بله، پرسید آیا تاریخی تعیین کرده‌ایم. بهش گفتم هنوز داریم کار می‌کنیم.
A: عالی. گفت کتاب‌نامه هم بیاریم؟
B: نه، فقط گفت فایل را تا جمعه بفرستیم.`,
        duration: 60,
      },
    ],
    speaking: [
      {
        id: 'sp32-1', lessonId: 32, type: 'conversation', title: 'Relaying information', titleFa: 'انتقال اطلاعات',
        scenario: 'Report what someone else said to a third person.',
        scenarioFa: 'حرف‌های یه نفر را به نفر سوم نقل کن.',
        lines: [
          { speaker: 'A', text: 'Cos\'ha detto il medico?', translation: 'دکتر چی گفت؟' },
          { speaker: 'B', text: 'Ha detto che ___ e che dovevo ___.', translation: 'گفت که ___ و باید ___.' },
          { speaker: 'A', text: 'Ha chiesto se avevi preso le medicine?', translation: 'پرسید داروها را خورده بودی؟' },
          { speaker: 'B', text: 'Sì, e ha aggiunto che ___ il giorno dopo.', translation: 'بله، و اضافه کرد که ___ روز بعد.' },
        ],
        tips: ['presente→imperfetto, passato→trapassato, futuro→condizionale', 'Questions: ha chiesto SE + indicativo (shifted)', 'Commands: ha detto DI + infinito'],
      },
    ],
    exercises: [
      { id: 'ex32-1', type: 'fill_blank', question: '"Vengo domani." → Ha detto che ___ il giorno dopo.', correctAnswer: 'sarebbe venuto' },
      { id: 'ex32-2', type: 'fill_blank', question: '"Hai mangiato?" → Ha chiesto se ___.', correctAnswer: 'avevo mangiato' },
      { id: 'ex32-3', type: 'multiple_choice', question: 'How do you report "Vieni!" in the past?', options: ['Ha detto che vieni', 'Ha detto di venire', 'Ha detto che venivi', 'Ha chiesto di venire'], correctAnswer: 'Ha detto di venire' },
    ],
    flashcards: [
      { id: 'fc32-1', lessonId: 32, front: 'ha detto che', back: 'گفت که', example: 'Ha detto che era stanco.', pronunciation: 'a ˈdɛtto ke', difficulty: 'intermediate' },
      { id: 'fc32-2', lessonId: 32, front: 'ha chiesto se', back: 'پرسید آیا', example: 'Ha chiesto se venivi.', pronunciation: 'a ˈkjɛsto se', difficulty: 'intermediate' },
      { id: 'fc32-3', lessonId: 32, front: 'ha detto di + inf.', back: 'گفت که (دستور)', example: 'Ha detto di aspettare.', pronunciation: 'a ˈdɛtto di', difficulty: 'advanced' },
    ],
  },

  {
    id: 33, number: 3, bookSlug: BOOK_SLUG, slug: 'ne4-lesson-3', pdfUrl: PDF_URL,
    title: 'Il gerundio', titleFa: 'صفت مفعولی (گروندیو)',
    subtitle: 'Gerund for Simultaneous and Cause-Effect Actions', subtitleFa: 'گروندیو برای اعمال همزمان و علت و معلولی',
    overview: 'Impara a usare il gerundio presente e passato per arricchire il tuo italiano.', overviewFa: 'استفاده از گروندیوی حال و گذشته را برای غنی‌سازی ایتالیاییت یاد بگیر.',
    objectives: ['Form present and past gerund', 'Use gerund for simultaneous actions (stare + gerundio)', 'Use gerund for cause, manner, condition', 'Use absolute gerund clauses'],
    objectivesFa: ['گروندیوی حال و گذشته را بساز', 'از گروندیو برای اعمال همزمان استفاده کن', 'برای علت، روش و شرط استفاده کن', 'جملات مطلق با گروندیو'],
    color: 'from-amber-500 to-yellow-600', icon: '⚡', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v33-1', lessonId: 33, word: 'parlando', translation: 'در حال صحبت کردن', pronunciation: 'parˈlando', exampleIt: 'Parlando con lui, ho capito tutto.', exampleFa: 'درحالی‌که با او صحبت می‌کردم، همه چیز را فهمیدم.', difficulty: 'intermediate', category: 'gerund' },
      { id: 'v33-2', lessonId: 33, word: 'essendo', translation: 'بودن به صورت', pronunciation: 'ˈɛssendo', exampleIt: 'Essendo stanco, sono andato a letto.', exampleFa: 'چون خسته بودم، رفتم بخوابم.', difficulty: 'intermediate', category: 'gerund' },
      { id: 'v33-3', lessonId: 33, word: 'avendo + participio', translation: 'بعد از اینکه (گروندیو گذشته)', pronunciation: 'aˈvendo', exampleIt: 'Avendo mangiato, siamo usciti.', exampleFa: 'بعد از اینکه خوردیم، بیرون رفتیم.', difficulty: 'advanced', category: 'gerund_past' },
      { id: 'v33-4', lessonId: 33, word: 'stare + gerundio', translation: 'دارم... می‌کنم (حال استمراری)', pronunciation: 'ˈstaːre', exampleIt: 'Sto studiando l\'italiano.', exampleFa: 'دارم ایتالیایی درس می‌خونم.', difficulty: 'beginner', category: 'gerund_progressive' },
      { id: 'v33-5', lessonId: 33, word: 'pur + gerundio', translation: 'با وجود اینکه', pronunciation: 'pur', exampleIt: 'Pur sapendo la verità, ha taciuto.', exampleFa: 'با وجود اینکه حقیقت را می‌دونست، ساکت موند.', difficulty: 'advanced', category: 'gerund_concessive' },
      { id: 'v33-6', lessonId: 33, word: 'andando / venendo', translation: 'در راه رفتن / اومدن', pronunciation: 'anˈdando / veˈnendo', exampleIt: 'Andando a scuola, ho incontrato Marco.', exampleFa: 'در راه مدرسه، مارکو را دیدم.', difficulty: 'intermediate', category: 'gerund' },
    ],
    grammar: [
      {
        id: 'g33-1', lessonId: 33, title: 'Il gerundio presente e passato', titleFa: 'گروندیوی حال و گذشته',
        explanation: 'The gerund expresses simultaneous, causal, conditional, or concessive actions. The subject must be the same as the main clause.',
        explanationFa: 'گروندیو اعمال همزمان، علّی، شرطی یا تقابلی را بیان می‌کند. فاعل باید همان فاعل جمله اصلی باشد.',
        examples: [
          { italian: '-are → -ando: parlare → parlando', persian: 'صحبت کردن → درحالی‌که صحبت می‌کند' },
          { italian: '-ere/-ire → -endo: scrivere → scrivendo, finire → finendo', persian: 'نوشتن → درحالی‌که می‌نویسد' },
          { italian: 'Passato: avendo + pp / essendo + pp', persian: 'بعد از اینکه انجام داد' },
          { italian: 'Sto leggendo (prog.); Leggendo, ho capito. (cause); Pur essendo stanco, ha lavorato. (conc.)', persian: 'دارم می‌خونم؛ درحالی‌که می‌خوندم فهمیدم؛ با وجود خستگی کار کرد.' },
        ],
        commonMistakes: ['Subject must be identical in both clauses (no change in person)', '"Pur + gerundio" = concessive (even though); "avendo + pp" = after having done'],
        exercises: [{ id: 'ex33-g1-1', type: 'fill_blank', question: '___ (studiare) tutto il giorno, ho superato l\'esame.', correctAnswer: 'Avendo studiato' }],
      },
    ],
    reading: [
      {
        id: 'r33-1', lessonId: 33, title: 'Una giornata frenetica', titleFa: 'یه روز شلوغ',
        content: `Mi sono svegliato tardi, correndo al bagno per lavarmi in fretta. Preparandomi, ho ascoltato le notizie alla radio. Uscendo di casa, ho incontrato la vicina che stava portando a spasso il cane. Prendendo la metropolitana, stavo leggendo un libro quando il telefono ha squillato. Avendo dimenticato una riunione importante, ho dovuto correre in ufficio. Pur essendo esausto, ho completato tutti i compiti del giorno. Tornando a casa, mi sono promesso di organizzarmi meglio.`,
        translation: `دیر بیدار شدم، دویدم به حمام تا سریع بشورم. درحالی‌که آماده می‌شدم، اخبار رادیو گوش دادم. درحالی‌که از خونه بیرون می‌رفتم، همسایه را دیدم که داشت سگ را می‌برد. درحالی‌که با مترو می‌رفتم، داشتم کتاب می‌خوندم که تلفن زنگ زد. بعد از اینکه یاد اومدم یه جلسه مهم فراموش کردم، مجبور شدم به دفتر بدوم. با وجود اینکه خسته بودم، همه کارهای روز را انجام دادم. درحالی‌که به خونه برمی‌گشتم، به خودم قول دادم بهتر برنامه‌ریزی کنم.`,
        vocabulary: ['v33-1', 'v33-2', 'v33-3', 'v33-4', 'v33-5', 'v33-6'],
      },
    ],
    listening: [
      {
        id: 'l33-1', lessonId: 33, title: 'Multitasking', titleFa: 'چند کار همزمان',
        transcript: `A: Cosa stai facendo?
B: Sto studiando mentre sto mangiando. Non è ideale...
A: Studiando e mangiando insieme non si riesce a concentrarsi!
B: Lo so. Avendo già rimandato lo studio, non ho scelta.
A: Pur capendo la situazione, ti consiglio di finire prima di mangiare.
B: Sì, hai ragione. Avendo detto questo, mi fermo e finisco di mangiare.`,
        translation: `A: داری چیکار می‌کنی؟
B: دارم درس می‌خونم درحالی‌که دارم غذا می‌خورم. ایده‌آل نیست...
A: درحالی‌که همزمان درس می‌خونی و غذا می‌خوری، نمی‌شه تمرکز کرد!
B: می‌دونم. بعد از اینکه درس را به تعویق انداختم، چاره‌ای ندارم.
A: با وجود اینکه وضعیت را می‌فهمم، توصیه می‌کنم اول غذا را تموم کنی.
B: بله، حق داری. بعد از گفتن این، می‌ایستم و غذا را تموم می‌کنم.`,
        duration: 55,
      },
    ],
    speaking: [
      {
        id: 'sp33-1', lessonId: 33, type: 'conversation', title: 'Describing actions in progress and causes', titleFa: 'توصیف اعمال در حال انجام و علت‌ها',
        scenario: 'Use gerunds to describe how you do things and why.',
        scenarioFa: 'از گروندیو برای توصیف چگونگی و دلیل انجام کارها استفاده کن.',
        lines: [
          { speaker: 'A', text: 'Cosa stavi facendo quando ti ho chiamato?', translation: 'وقتی زنگ زدم داشتی چیکار می‌کردی؟' },
          { speaker: 'B', text: 'Stavo ___ e contemporaneamente ___.', translation: 'داشتم ___ و همزمان ___.' },
          { speaker: 'A', text: 'E come mai non hai risposto subito?', translation: 'چرا فوری جواب ندادی؟' },
          { speaker: 'B', text: 'Essendo ___, non ho sentito il telefono.', translation: 'چون ___ بودم، تلفن را نشنیدم.' },
        ],
        tips: ['stare + gerundio for progressive (in progress)', 'gerundio alone for cause/manner (comma + gerund)', '"pur + gerundio" = even though (concessive)'],
      },
    ],
    exercises: [
      { id: 'ex33-1', type: 'fill_blank', question: 'Sto ___ (leggere) un libro interessante.', correctAnswer: 'leggendo' },
      { id: 'ex33-2', type: 'fill_blank', question: '___ (avere) fame, ho mangiato subito.', correctAnswer: 'Avendo' },
      { id: 'ex33-3', type: 'multiple_choice', question: '"Pur + gerundio" expresses?', options: ['cause', 'time', 'concession', 'condition'], correctAnswer: 'concession' },
    ],
    flashcards: [
      { id: 'fc33-1', lessonId: 33, front: 'parlando', back: 'درحالی‌که صحبت می‌کند', example: 'Parlando con lui, ho capito.', pronunciation: 'parˈlando', difficulty: 'intermediate' },
      { id: 'fc33-2', lessonId: 33, front: 'avendo + pp', back: 'بعد از اینکه (گذشته)', example: 'Avendo mangiato, siamo usciti.', pronunciation: 'aˈvendo', difficulty: 'advanced' },
      { id: 'fc33-3', lessonId: 33, front: 'pur + gerundio', back: 'با وجود اینکه', example: 'Pur sapendo, ha taciuto.', pronunciation: 'pur', difficulty: 'advanced' },
    ],
  },

  {
    id: 34, number: 4, bookSlug: BOOK_SLUG, slug: 'ne4-lesson-4', pdfUrl: PDF_URL,
    title: 'Il futuro anteriore', titleFa: 'آینده قبلی',
    subtitle: 'Future Perfect and Future for Conjecture', subtitleFa: 'آینده کامل و آینده برای حدس',
    overview: 'Impara il futuro anteriore e l\'uso del futuro per fare supposizioni.', overviewFa: 'آینده قبلی و استفاده از آینده برای حدس‌زدن را یاد بگیر.',
    objectives: ['Form the future perfect', 'Use it for completed future actions', 'Use simple future for conjecture', 'Combine futuro anteriore with simple future'],
    objectivesFa: ['آینده قبلی را بساز', 'برای اعمال تکمیل‌شده در آینده استفاده کن', 'از آینده ساده برای حدس استفاده کن', 'آینده قبلی را با آینده ساده ترکیب کن'],
    color: 'from-cyan-500 to-sky-600', icon: '🔭', estimatedMinutes: 60,
    vocabulary: [
      { id: 'v34-1', lessonId: 34, word: 'avrò finito', translation: 'تموم کرده خواهم بود', pronunciation: 'aˈvrɔ fiˈniːto', exampleIt: 'Quando avrò finito, ti chiamo.', exampleFa: 'وقتی تموم کردم، زنگ می‌زنم.', difficulty: 'advanced', category: 'future_perfect' },
      { id: 'v34-2', lessonId: 34, word: 'sarò arrivato', translation: 'رسیده خواهم بود', pronunciation: 'saˈrɔ arriˈvaːto', exampleIt: 'Quando sarò arrivato, mando un messaggio.', exampleFa: 'وقتی رسیدم، پیام می‌فرستم.', difficulty: 'advanced', category: 'future_perfect' },
      { id: 'v34-3', lessonId: 34, word: 'avrà dimenticato', translation: 'فراموش کرده خواهد بود (حدس)', pronunciation: 'aˈvra dimenˈtikaːto', exampleIt: 'Non risponde — avrà dimenticato il telefono.', exampleFa: 'جواب نمیده — احتمالاً تلفن را فراموش کرده.', difficulty: 'advanced', category: 'conjecture' },
      { id: 'v34-4', lessonId: 34, word: 'non appena', translation: 'به محض اینکه', pronunciation: 'non apˈpeːna', exampleIt: 'Non appena avrò finito, uscirò.', exampleFa: 'به محض اینکه تموم کنم، بیرون می‌رم.', difficulty: 'intermediate', category: 'conjunctions_time' },
      { id: 'v34-5', lessonId: 34, word: 'dopo che', translation: 'بعد از اینکه', pronunciation: 'ˈdopo ke', exampleIt: 'Dopo che avrai mangiato, riposiamo.', exampleFa: 'بعد از اینکه خوردی، استراحت می‌کنیم.', difficulty: 'intermediate', category: 'conjunctions_time' },
      { id: 'v34-6', lessonId: 34, word: 'sarà stato', translation: 'بوده خواهد بود / احتمالاً بوده', pronunciation: 'saˈra ˈstaːto', exampleIt: 'Sarà stato lui a chiamare.', exampleFa: 'احتمالاً اون بوده که زنگ زده.', difficulty: 'advanced', category: 'conjecture' },
    ],
    grammar: [
      {
        id: 'g34-1', lessonId: 34, title: 'Futuro anteriore', titleFa: 'آینده قبلی',
        explanation: 'Future perfect = futuro semplice of avere/essere + past participle. Used for actions completed before another future action, and for conjecture about the past.',
        explanationFa: 'آینده قبلی = آینده ساده avere/essere + اسم مفعول. برای اعمال تکمیل‌شده قبل از یه عمل آینده دیگر، و برای حدس درباره گذشته.',
        examples: [
          { italian: 'avrò parlato, avrai parlato, avrà parlato...', persian: 'صحبت کرده خواهم بود...' },
          { italian: 'Quando avrò studiato abbastanza, darò l\'esame.', persian: 'وقتی به اندازه کافی درس خوندم، امتحان می‌دم.' },
          { italian: 'Non è ancora arrivato — sarà rimasto in ufficio.', persian: 'هنوز نیومده — احتمالاً در دفتر مونده.' },
        ],
        commonMistakes: ['Italian uses futuro anteriore (not simple future) after "quando/non appena/dopo che" referring to future', '"Avrà..." = probably has... (conjecture about present perfect)'],
        exercises: [{ id: 'ex34-g1-1', type: 'fill_blank', question: 'Quando ___ (finire, io), ti chiamo.', correctAnswer: 'avrò finito' }],
      },
    ],
    reading: [
      {
        id: 'r34-1', lessonId: 34, title: 'Piani e supposizioni', titleFa: 'برنامه‌ها و حدس‌ها',
        content: `Non appena avrò terminato questo progetto, mi prenderò una lunga vacanza. Prima partirò dopo che avrò organizzato tutto per bene. Anna non è ancora arrivata — avrà perso il treno. O forse avrà avuto problemi in ufficio. Quando sarò arrivato a casa, le mando un messaggio. Dopo che avremo cenato insieme, le chiederò cosa è successo. Sarà stato un malinteso, sicuramente. Non appena lei avrà spiegato, capiremo tutto.`,
        translation: `به محض اینکه این پروژه را تموم کنم، یه تعطیلات طولانی می‌گیرم. اول بعد از اینکه همه چیز را خوب سازماندهی کردم می‌رم. آنا هنوز نیومده — احتمالاً قطار را از دست داده. یا شاید در دفتر مشکل داشته. وقتی به خونه رسیدم، بهش پیام می‌فرستم. بعد از اینکه با هم شام خوردیم، ازش می‌پرسم چی شده. احتمالاً یه سوءتفاهم بوده. به محض اینکه اون توضیح داد، همه چیز را می‌فهمیم.`,
        vocabulary: ['v34-1', 'v34-2', 'v34-3', 'v34-4', 'v34-5', 'v34-6'],
      },
    ],
    listening: [
      {
        id: 'l34-1', lessonId: 34, title: 'Dove sarà?', titleFa: 'کجا بوده؟',
        transcript: `A: Marco non è ancora arrivato. Cosa sarà successo?
B: Avrà perso l\'autobus. Succede spesso.
A: O forse avrà dimenticato l\'appuntamento.
B: Impossibile! Gli ho mandato tre messaggi.
A: Quando sarà arrivato, gli chiedo spiegazioni.
B: Non appena lo vedo, gli dico di essere più puntuale!
A: Dai, sarà stato il traffico. Roma è caotica.`,
        translation: `A: مارکو هنوز نیومده. چی شده؟
B: احتمالاً اتوبوس را از دست داده. زیاد پیش میاد.
A: یا شاید قرارمون را فراموش کرده.
B: غیرممکن! سه تا پیام فرستادم بهش.
A: وقتی اومد، ازش توضیح می‌خوام.
B: به محض اینکه ببینمش، می‌گم باید سروقت‌تر باشه!
A: بیا، احتمالاً ترافیک بوده. رُم آشفته‌ست.`,
        duration: 58,
      },
    ],
    speaking: [
      {
        id: 'sp34-1', lessonId: 34, type: 'conversation', title: 'Future plans and guessing', titleFa: 'برنامه‌های آینده و حدس‌زدن',
        scenario: 'Make plans using future perfect and guess about people\'s whereabouts.',
        scenarioFa: 'با آینده قبلی برنامه بریز و درباره مکان/وضعیت دیگران حدس بزن.',
        lines: [
          { speaker: 'A', text: 'Quando avrai finito il lavoro, cosa farai?', translation: 'وقتی کار را تموم کردی، چیکار می‌کنی؟' },
          { speaker: 'B', text: 'Non appena avrò ___, andrò ___.', translation: 'به محض اینکه ___ کردم، می‌رم ___.' },
          { speaker: 'A', text: 'Sai perché Luisa non risponde?', translation: 'می‌دونی چرا لوئیزا جواب نمیده؟' },
          { speaker: 'B', text: 'Avrà ___ o forse sarà ___.', translation: 'احتمالاً ___ یا شاید ___.' },
        ],
        tips: ['quando/non appena/dopo che + futuro anteriore (NOT simple future)', 'Futuro semplice for conjecture about present: "sarà a casa" = probably at home', 'Futuro anteriore for conjecture about past: "avrà dimenticato" = probably forgot'],
      },
    ],
    exercises: [
      { id: 'ex34-1', type: 'fill_blank', question: 'Non appena ___ (arrivare, lei), iniziamo.', correctAnswer: 'sarà arrivata' },
      { id: 'ex34-2', type: 'fill_blank', question: 'Non risponde — ___ (dimenticare, lui) il telefono.', correctAnswer: 'avrà dimenticato' },
      { id: 'ex34-3', type: 'multiple_choice', question: 'Futuro anteriore expresses conjecture about?', options: ['future plans', 'past events', 'habitual actions', 'commands'], correctAnswer: 'past events' },
    ],
    flashcards: [
      { id: 'fc34-1', lessonId: 34, front: 'avrò finito', back: 'تموم کرده خواهم بود', example: 'Quando avrò finito, chiamo.', pronunciation: 'aˈvrɔ fiˈniːto', difficulty: 'advanced' },
      { id: 'fc34-2', lessonId: 34, front: 'avrà dimenticato', back: 'احتمالاً فراموش کرده', example: 'Non risponde — avrà dimenticato.', pronunciation: 'aˈvra dimenˈtikaːto', difficulty: 'advanced' },
      { id: 'fc34-3', lessonId: 34, front: 'non appena', back: 'به محض اینکه', example: 'Non appena finisco, esco.', pronunciation: 'non apˈpeːna', difficulty: 'intermediate' },
    ],
  },

  {
    id: 35, number: 5, bookSlug: BOOK_SLUG, slug: 'ne4-lesson-5', pdfUrl: PDF_URL,
    title: 'Fare e lasciare causativi', titleFa: 'ساختارهای سببی با fare و lasciare',
    subtitle: 'Causative Constructions and Perception Verbs', subtitleFa: 'ساختارهای سببی و افعال ادراکی',
    overview: 'Impara a usare "fare + infinito" e "lasciare + infinito" e i verbi di percezione.', overviewFa: 'استفاده از fare + مصدر و lasciare + مصدر و افعال ادراکی را یاد بگیر.',
    objectives: ['Use fare + infinito (causative)', 'Use lasciare + infinito (permissive)', 'Use vedere/sentire/guardare + infinito', 'Position object pronouns correctly'],
    objectivesFa: ['fare + مصدر (سببی) را استفاده کن', 'lasciare + مصدر (اجازه‌دهنده) را استفاده کن', 'vedere/sentire + مصدر را استفاده کن', 'ضمایر مفعولی را درست قرار بده'],
    color: 'from-emerald-500 to-teal-600', icon: '🎯', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v35-1', lessonId: 35, word: 'far fare', translation: 'وادار کردن به انجام', pronunciation: 'far ˈfaːre', exampleIt: 'L\'ho fatto aspettare un\'ora.', exampleFa: 'یه ساعت منتظرش گذاشتم.', difficulty: 'advanced', category: 'causative' },
      { id: 'v35-2', lessonId: 35, word: 'far riparare', translation: 'تعمیر کاری دادن', pronunciation: 'far ripaˈraːre', exampleIt: 'Ho fatto riparare la macchina dal meccanico.', exampleFa: 'ماشین را به مکانیک دادم تعمیر کنه.', difficulty: 'advanced', category: 'causative' },
      { id: 'v35-3', lessonId: 35, word: 'lasciare fare', translation: 'اجازه دادن به انجام', pronunciation: 'laˈʃʃaːre ˈfaːre', exampleIt: 'Lascia parlare anche me!', exampleFa: 'بذار منم حرف بزنم!', difficulty: 'intermediate', category: 'causative' },
      { id: 'v35-4', lessonId: 35, word: 'sentire cantare', translation: 'شنیدن کسی که آواز می‌خونه', pronunciation: 'senˈtiːre kanˈtaːre', exampleIt: 'Ho sentito Marco cantare sotto la doccia.', exampleFa: 'شنیدم مارکو زیر دوش آواز می‌خونه.', difficulty: 'advanced', category: 'perception' },
      { id: 'v35-5', lessonId: 35, word: 'vedere correre', translation: 'دیدن کسی که می‌دوه', pronunciation: 'veˈdɛːre korˈreːre', exampleIt: 'L\'ho vista correre verso di noi.', exampleFa: 'دیدمش که به طرف ما دوید.', difficulty: 'advanced', category: 'perception' },
      { id: 'v35-6', lessonId: 35, word: 'farsi tagliare i capelli', translation: 'مو کوتاه کردن (توسط دیگری)', pronunciation: 'ˈfarsi taˈʎʎaːre', exampleIt: 'Mi sono fatta tagliare i capelli.', exampleFa: 'رفتم موهامو کوتاه کردم.', difficulty: 'advanced', category: 'causative_reflexive' },
    ],
    grammar: [
      {
        id: 'g35-1', lessonId: 35, title: 'Causative and perception verbs', titleFa: 'افعال سببی و ادراکی',
        explanation: 'Fare/lasciare + infinito makes someone do something (or lets them). Verbs of perception (vedere, sentire, guardare, ascoltare) also take infinito.',
        explanationFa: 'fare/lasciare + مصدر وادار کردن به انجام یا اجازه دادن. افعال ادراکی هم مصدر می‌گیرند.',
        examples: [
          { italian: 'Ho fatto riparare la bici. (agent not named)', persian: 'دوچرخه را فرستادم تعمیر بشه.' },
          { italian: 'Ho fatto riparare la bici al meccanico. (agent named → "a")', persian: 'دادم مکانیک دوچرخه را تعمیر کرد.' },
          { italian: 'Lo faccio aspettare. → Lo/la/li/la before fare', persian: 'منتظرش می‌ذارم.' },
          { italian: 'Farsi + inf.: Mi sono fatto tagliare i capelli.', persian: 'رفتم موهامو کوتاه کردم (کسی برام کوتاه کرد).' },
        ],
        commonMistakes: ['With two objects: "fare" takes "a" for agent: "far fare qc a qn"', 'Pronouns precede "fare" in compound tenses: "l\'ho fatto aspettare"', '"Farsi" = have something done to oneself'],
        exercises: [{ id: 'ex35-g1-1', type: 'fill_blank', question: 'Ho ___ riparare il computer dal tecnico. (fare, passato prossimo)', correctAnswer: 'fatto' }],
      },
    ],
    reading: [
      {
        id: 'r35-1', lessonId: 35, title: 'Una mattina di commissioni', titleFa: 'یه صبح کارهای اداری',
        content: `Stamattina ho fatto tante cose. Prima mi sono fatta tagliare i capelli dalla parrucchiera. Poi ho fatto riparare la lavatrice: l\'ho fatta riparare dal tecnico che viene sempre da noi. Ho anche sentito i vicini litigare di nuovo — li ho sentiti urlare per quasi mezz\'ora. Ho visto uscire Marco dalla banca con una busta enorme — cosa starà facendo? Ho lasciato mio figlio giocare nel parco finché non ho finito le commissioni. Alla fine ho fatto consegnare la spesa a domicilio. Che giornata efficiente!`,
        translation: `امروز صبح کارهای زیادی کردم. اول رفتم آرایشگاه موهامو کوتاه کردم. بعد ماشین لباسشویی را فرستادم تعمیر بشه: دادم تکنیسینی که همیشه پیشمون میاد تعمیرش کرد. همچنین شنیدم همسایه‌ها دوباره دارن دعوا می‌کنن — تقریباً نیم ساعت جیغ می‌زدن. دیدم مارکو با یه کیسه بزرگ از بانک اومد بیرون — داره چیکار می‌کنه؟ بچه‌ام را گذاشتم در پارک بازی کنه تا کارهامو تموم کردم. آخرش هم خرید را دادم خونه تحویل بدن. چه روز پربازده‌ای!`,
        vocabulary: ['v35-1', 'v35-2', 'v35-3', 'v35-4', 'v35-5', 'v35-6'],
      },
    ],
    listening: [
      {
        id: 'l35-1', lessonId: 35, title: 'Il capo e i dipendenti', titleFa: 'رئیس و کارمندان',
        transcript: `A: Il capo mi ha fatto rifare tutto il report!
B: Anche a me — mi ha fatto lavorare fino a mezzanotte.
A: Non ti lascia mai finire in orario?
B: Mai! Ieri l\'ho sentito urlare in riunione.
A: L\'ho visto anch\'io — stava facendo aspettare tutti i clienti.
B: Dobbiamo fargli capire che questo modo di lavorare non va.
A: Lasciami parlare io con lui domani.`,
        translation: `A: رئیس داد همه گزارش را دوباره بنویسم!
B: منم همینطور — داد تا نیمه شب کار کردم.
A: هیچوقت نمی‌ذاره سر وقت تموم کنی؟
B: هیچوقت! دیروز شنیدم که در جلسه داشت داد می‌زد.
A: منم دیدمش — داشت همه مشتریا را منتظر می‌ذاشت.
B: باید بفهمونیم این روش کار اشتباهه.
A: بذار فردا من باهاش حرف بزنم.`,
        duration: 60,
      },
    ],
    speaking: [
      {
        id: 'sp35-1', lessonId: 35, type: 'conversation', title: 'Having things done and noticing things', titleFa: 'دادن کارها به دیگران و متوجه شدن',
        scenario: 'Talk about services you\'ve had done and things you\'ve observed.',
        scenarioFa: 'درباره کارهایی که به دیگران دادی و چیزهایی که مشاهده کردی صحبت کن.',
        lines: [
          { speaker: 'A', text: 'Hai risolto il problema del computer?', translation: 'مشکل کامپیوتر را حل کردی؟' },
          { speaker: 'B', text: 'Sì, l\'ho fatto riparare da ___.', translation: 'بله، دادم ___ تعمیرش کنه.' },
          { speaker: 'A', text: 'Hai sentito o visto qualcosa di strano ultimamente?', translation: 'اخیراً چیز عجیبی شنیدی یا دیدی؟' },
          { speaker: 'B', text: 'Ho sentito ___ e ho visto ___.', translation: 'شنیدم ___ و دیدم ___.' },
        ],
        tips: ['"far fare qc a qn" = make sb do sth', '"farsi + inf." = have something done to oneself', '"sentire/vedere + inf." = hear/see someone doing something'],
      },
    ],
    exercises: [
      { id: 'ex35-1', type: 'fill_blank', question: 'Mi sono ___ tagliare i capelli. (fare)', correctAnswer: 'fatta' },
      { id: 'ex35-2', type: 'fill_blank', question: 'Ho ___ Marco cantare in cucina. (sentire)', correctAnswer: 'sentito' },
      { id: 'ex35-3', type: 'multiple_choice', question: '"L\'ho fatta aspettare" — "la" refers to?', options: ['the action', 'a female person', 'a masculine object', 'nothing specific'], correctAnswer: 'a female person' },
    ],
    flashcards: [
      { id: 'fc35-1', lessonId: 35, front: 'far fare', back: 'وادار کردن / دادن به دیگری', example: 'Ho fatto riparare la macchina.', pronunciation: 'far ˈfaːre', difficulty: 'advanced' },
      { id: 'fc35-2', lessonId: 35, front: 'farsi + inf.', back: 'کاری را برای خود انجام دادن', example: 'Mi sono fatto tagliare i capelli.', pronunciation: 'ˈfarsi', difficulty: 'advanced' },
      { id: 'fc35-3', lessonId: 35, front: 'sentire + inf.', back: 'شنیدن در حال انجام', example: 'L\'ho sentito cantare.', pronunciation: 'senˈtiːre', difficulty: 'intermediate' },
    ],
  },

  {
    id: 36, number: 6, bookSlug: BOOK_SLUG, slug: 'ne4-lesson-6', pdfUrl: PDF_URL,
    title: 'Il lessico del lavoro', titleFa: 'واژگان کار و شغل',
    subtitle: 'Professional Italian: Jobs, CVs and the Workplace', subtitleFa: 'ایتالیایی حرفه‌ای: شغل، رزومه و محیط کار',
    overview: 'Acquisisci il vocabolario necessario per parlare di lavoro, carriera e colloqui.', overviewFa: 'واژگان لازم برای صحبت درباره کار، شغل و مصاحبه را یاد بگیر.',
    objectives: ['Vocabulary for jobs and professions', 'Describe work tasks and responsibilities', 'Talk about job interviews', 'Write a formal email or cover letter'],
    objectivesFa: ['واژگان مشاغل و حرفه‌ها', 'وظایف و مسئولیت‌های کاری را توصیف کن', 'درباره مصاحبه شغلی صحبت کن', 'ایمیل رسمی یا نامه انگیزه بنویس'],
    color: 'from-blue-600 to-indigo-700', icon: '💼', estimatedMinutes: 70,
    vocabulary: [
      { id: 'v36-1', lessonId: 36, word: 'il colloquio di lavoro', translation: 'مصاحبه شغلی', pronunciation: 'il kolˈloːkwjo di laˈvoːro', exampleIt: 'Ho un colloquio di lavoro domani mattina.', exampleFa: 'فردا صبح مصاحبه شغلی دارم.', difficulty: 'intermediate', category: 'work' },
      { id: 'v36-2', lessonId: 36, word: 'il curriculum vitae', translation: 'رزومه', pronunciation: 'il kurˈrikulum ˈviːtae', exampleIt: 'Devo aggiornare il mio curriculum.', exampleFa: 'باید رزومه‌ام را آپدیت کنم.', difficulty: 'beginner', category: 'work' },
      { id: 'v36-3', lessonId: 36, word: 'la lettera di motivazione', translation: 'نامه انگیزه', pronunciation: 'la ˈlɛttera di motivatˈtsjone', exampleIt: 'Allegati il CV e la lettera di motivazione.', exampleFa: 'رزومه و نامه انگیزه را پیوست کن.', difficulty: 'intermediate', category: 'work' },
      { id: 'v36-4', lessonId: 36, word: 'a tempo indeterminato', translation: 'قرارداد دائم', pronunciation: 'a ˈtɛmpo indetermiˈnaːto', exampleIt: 'Finalmente ho un contratto a tempo indeterminato!', exampleFa: 'بالاخره قرارداد دائم گرفتم!', difficulty: 'intermediate', category: 'work_contracts' },
      { id: 'v36-5', lessonId: 36, word: 'le competenze', translation: 'مهارت‌ها / شایستگی‌ها', pronunciation: 'le kompeˈtɛntse', exampleIt: 'Quali sono le tue competenze principali?', exampleFa: 'مهارت‌های اصلی تو چیه؟', difficulty: 'intermediate', category: 'work' },
      { id: 'v36-6', lessonId: 36, word: 'lo smart working', translation: 'دورکاری', pronunciation: 'lo smart ˈworking', exampleIt: 'Da quando faccio smart working, risparmio tempo.', exampleFa: 'از وقتی دورکاری می‌کنم، وقت صرفه‌جویی می‌کنم.', difficulty: 'beginner', category: 'work_modern' },
    ],
    grammar: [
      {
        id: 'g36-1', lessonId: 36, title: 'Formal register and epistolary language', titleFa: 'سبک رسمی و زبان نامه‌نگاری',
        explanation: 'In formal Italian (emails, cover letters, interviews), use formal address (Lei), subjunctive, and conditional for polite requests.',
        explanationFa: 'در ایتالیایی رسمی (ایمیل، نامه انگیزه، مصاحبه)، از Lei رسمی، التزامی و شرطی برای درخواست مؤدبانه استفاده کن.',
        examples: [
          { italian: 'In riferimento all\'annuncio pubblicato su... (letter opener)', persian: 'در پاسخ به آگهی منتشرشده در...' },
          { italian: 'Vorrei candidarmi per il posto di... (conditional)', persian: 'می‌خواستم برای موقعیت... درخواست دهم.' },
          { italian: 'Resto in attesa di una Sua gentile risposta. (closing)', persian: 'منتظر پاسخ لطف‌آمیز شما می‌مانم.' },
        ],
        commonMistakes: ['Use "Lei" (capital) for formal you, not "tu"', 'Use "Spett.le" for companies, "Egregio/Gentile" for individuals', '"Allegato/a troverà" = "attached you will find"'],
        exercises: [{ id: 'ex36-g1-1', type: 'multiple_choice', question: 'Formal Italian uses which form of address?', options: ['tu', 'voi', 'Lei', 'lui'], correctAnswer: 'Lei' }],
      },
    ],
    reading: [
      {
        id: 'r36-1', lessonId: 36, title: 'Lettera di candidatura', titleFa: 'نامه درخواست شغل',
        content: `Gentile Dottoressa Ferroni,
in riferimento all'annuncio pubblicato sul Suo sito il 10 giugno, mi permetto di candidarmi per il posto di marketing manager.
Ho maturato cinque anni di esperienza nel settore della comunicazione digitale e sono in possesso di ottime competenze in gestione dei social media e analisi dei dati. Parlo correntemente inglese, francese e italiano.
Allegato troverà il mio curriculum vitae aggiornato e la presente lettera di motivazione. Resto in attesa di un Suo cortese riscontro per un eventuale colloquio.
Cordiali saluti,
Elena Ricci`,
        translation: `خانم دکتر فرونی عزیز،
در پاسخ به آگهی منتشرشده در سایت شما در تاریخ ۱۰ ژوئن، اجازه می‌خواهم برای موقعیت مدیر بازاریابی درخواست دهم.
پنج سال تجربه در حوزه ارتباطات دیجیتال کسب کرده‌ام و مهارت‌های عالی در مدیریت شبکه‌های اجتماعی و تحلیل داده دارم. به طور روان انگلیسی، فرانسوی و ایتالیایی صحبت می‌کنم.
پیوست رزومه به‌روز و این نامه انگیزه را خواهید یافت. منتظر پاسخ لطف‌آمیز شما برای یک مصاحبه احتمالی می‌مانم.
با احترام،
النا ریچی`,
        vocabulary: ['v36-1', 'v36-2', 'v36-3', 'v36-4', 'v36-5'],
      },
    ],
    listening: [
      {
        id: 'l36-1', lessonId: 36, title: 'Un colloquio di lavoro', titleFa: 'یه مصاحبه شغلی',
        transcript: `Intervistatrice: Buongiorno, si accomodi. Ho letto il Suo curriculum con interesse. Può parlarmi delle Sue esperienze precedenti?
Candidato: Certo. Ho lavorato per tre anni come responsabile comunicazione in un'azienda di moda.
Intervistatrice: E quali sono le Sue competenze principali?
Candidato: Sono molto organizzato e so lavorare bene in team. Ho anche competenze avanzate in analisi dei dati.
Intervistatrice: Sarebbe disponibile anche per lo smart working?
Candidato: Assolutamente sì. Anzi, ho già esperienza di lavoro da remoto.
Intervistatrice: Ottimo. Le faremo sapere entro la settimana prossima.`,
        translation: `مصاحبه‌گر: صبح بخیر، بفرمایید بنشینید. رزومه شما را با علاقه خواندم. می‌تونید از تجربیات قبلیتون بگید؟
متقاضی: البته. سه سال به عنوان مسئول ارتباطات در یه شرکت مد کار کردم.
مصاحبه‌گر: مهارت‌های اصلی شما چیه؟
متقاضی: خیلی منظمم و خوب تیمی کار می‌کنم. همچنین مهارت‌های پیشرفته در تحلیل داده دارم.
مصاحبه‌گر: برای دورکاری هم آمادگی دارید؟
متقاضی: کاملاً بله. حتی قبلاً تجربه کار از راه دور داشتم.
مصاحبه‌گر: عالی. تا هفته دیگه بهتون اطلاع می‌دیم.`,
        duration: 65,
      },
    ],
    speaking: [
      {
        id: 'sp36-1', lessonId: 36, type: 'conversation', title: 'Job interview simulation', titleFa: 'شبیه‌سازی مصاحبه شغلی',
        scenario: 'Practice a formal job interview in Italian.',
        scenarioFa: 'یه مصاحبه شغلی رسمی به ایتالیایی تمرین کن.',
        lines: [
          { speaker: 'A', text: 'Può presentarsi brevemente?', translation: 'می‌تونید خودتون را کوتاه معرفی کنید؟' },
          { speaker: 'B', text: 'Mi chiamo ___ e ho ___ anni di esperienza in ___.', translation: 'اسمم ___ هست و ___ سال تجربه در ___ دارم.' },
          { speaker: 'A', text: 'Perché vuole lavorare con noi?', translation: 'چرا می‌خواید با ما کار کنید؟' },
          { speaker: 'B', text: 'Sono interessato/a a ___ perché ___.', translation: 'به ___ علاقه دارم چون ___.' },
        ],
        tips: ['Use Lei and conditional for politeness throughout', '"Ho maturato esperienza in..." = I have gained experience in', '"Sono in grado di..." = I am able to...'],
      },
    ],
    exercises: [
      { id: 'ex36-1', type: 'multiple_choice', question: 'Formal letter: "Dear Dr. Rossi" = ?', options: ['Caro Dr. Rossi', 'Gentile Dottor Rossi', 'Salve Dottor Rossi', 'Buongiorno Rossi'], correctAnswer: 'Gentile Dottor Rossi' },
      { id: 'ex36-2', type: 'fill_blank', question: 'Allegato troverà il mio ___.', correctAnswer: 'curriculum vitae' },
    ],
    flashcards: [
      { id: 'fc36-1', lessonId: 36, front: 'il colloquio', back: 'مصاحبه شغلی', example: 'Ho un colloquio domani.', pronunciation: 'il kolˈloːkwjo', difficulty: 'intermediate' },
      { id: 'fc36-2', lessonId: 36, front: 'a tempo indeterminato', back: 'قرارداد دائم', example: 'Ho finalmente un contratto indeterminato.', pronunciation: 'indetermiˈnaːto', difficulty: 'intermediate' },
      { id: 'fc36-3', lessonId: 36, front: 'le competenze', back: 'مهارت‌ها', example: 'Quali sono le tue competenze?', pronunciation: 'kompeˈtɛntse', difficulty: 'intermediate' },
    ],
  },

  {
    id: 37, number: 7, bookSlug: BOOK_SLUG, slug: 'ne4-lesson-7', pdfUrl: PDF_URL,
    title: 'I media e la tecnologia', titleFa: 'رسانه و تکنولوژی',
    subtitle: 'Talking About Media, Technology and the Digital World', subtitleFa: 'صحبت درباره رسانه، تکنولوژی و دنیای دیجیتال',
    overview: 'Impara il vocabolario dei media digitali e come esprimere opinioni su tecnologia e società.', overviewFa: 'واژگان رسانه‌های دیجیتال و نحوه بیان نظر درباره تکنولوژی و جامعه را یاد بگیر.',
    objectives: ['Media and technology vocabulary', 'Express opinions on digital society', 'Discuss advantages and disadvantages', 'Use suffixes for word formation'],
    objectivesFa: ['واژگان رسانه و تکنولوژی', 'نظر درباره جامعه دیجیتال بیان کن', 'مزایا و معایب را بحث کن', 'از پسوندها برای ساخت کلمه استفاده کن'],
    color: 'from-violet-600 to-blue-700', icon: '📱', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v37-1', lessonId: 37, word: 'i social media', translation: 'شبکه‌های اجتماعی', pronunciation: 'i ˈsoːtʃal ˈmiːdia', exampleIt: 'Passiamo troppo tempo sui social media.', exampleFa: 'وقت زیادی در شبکه‌های اجتماعی می‌گذرونیم.', difficulty: 'beginner', category: 'digital' },
      { id: 'v37-2', lessonId: 37, word: 'il profilo', translation: 'پروفایل', pronunciation: 'il proˈfiːlo', exampleIt: 'Ho creato un profilo professionale su LinkedIn.', exampleFa: 'یه پروفایل حرفه‌ای در لینکدین ساختم.', difficulty: 'beginner', category: 'digital' },
      { id: 'v37-3', lessonId: 37, word: 'la notizia falsa / fake news', translation: 'خبر جعلی', pronunciation: 'la noˈtiːtsja ˈfaltsa', exampleIt: 'Bisogna verificare le fonti prima di condividere.', exampleFa: 'باید قبل از اشتراک‌گذاری منابع را بررسی کرد.', difficulty: 'intermediate', category: 'media' },
      { id: 'v37-4', lessonId: 37, word: 'la privacy / riservatezza', translation: 'حریم خصوصی', pronunciation: 'la ˈpriːvasi', exampleIt: 'La privacy online è sempre più a rischio.', exampleFa: 'حریم خصوصی آنلاین بیشتر و بیشتر در خطره.', difficulty: 'intermediate', category: 'digital_society' },
      { id: 'v37-5', lessonId: 37, word: 'l\'intelligenza artificiale', translation: 'هوش مصنوعی', pronunciation: 'lintelˈlɛdʒentsa artifiˈtʃaːle', exampleIt: 'L\'intelligenza artificiale sta cambiando il mondo.', exampleFa: 'هوش مصنوعی داره دنیا را تغییر می‌ده.', difficulty: 'intermediate', category: 'technology' },
      { id: 'v37-6', lessonId: 37, word: 'condividere / postare', translation: 'اشتراک‌گذاری کردن / پُست کردن', pronunciation: 'kondiˈviːdere / posˈtaːre', exampleIt: 'Ha condiviso una foto bellissima.', exampleFa: 'یه عکس خیلی قشنگ اشتراک‌گذاری کرد.', difficulty: 'beginner', category: 'digital' },
    ],
    grammar: [
      {
        id: 'g37-1', lessonId: 37, title: 'Word formation: suffixes and prefixes', titleFa: 'ساخت کلمه: پسوند و پیشوند',
        explanation: 'Italian uses suffixes to modify meaning: -ino/-ina (small), -one/-ona (big), -ista (person), -zione (action/noun), -mente (adverb).',
        explanationFa: 'ایتالیایی از پسوندها برای تغییر معنا استفاده می‌کنه: -ino (کوچیک)، -one (بزرگ)، -ista (شخص)، -zione (عمل)، -mente (قید).',
        examples: [
          { italian: 'giornale → giornalista (journalist)', persian: 'روزنامه → روزنامه‌نگار' },
          { italian: 'comunicare → comunicazione (communication)', persian: 'ارتباط برقرار کردن → ارتباط' },
          { italian: 'veloce → velocemente (quickly)', persian: 'سریع → به سرعت' },
          { italian: 'libro → librino (small book), librone (big book)', persian: 'کتاب → کتابچه، کتاب بزرگ' },
        ],
        commonMistakes: ['-mente attaches to feminine adjective form: "lento" → "lentamente"', 'Nouns ending -zione are always feminine'],
        exercises: [{ id: 'ex37-g1-1', type: 'fill_blank', question: 'inform-are → l\'inform___', correctAnswer: 'azione' }],
      },
    ],
    reading: [
      {
        id: 'r37-1', lessonId: 37, title: 'Siamo davvero connessi?', titleFa: 'آیا واقعاً متصلیم؟',
        content: `I social media ci connettono con persone in tutto il mondo, eppure molti si sentono più soli che mai. Passiamo ore a guardare i profili degli altri, confrontandoci continuamente. Le notizie false si diffondono velocemente sui social e spesso è difficile distinguere l\'informazione dall\'invenzione. L\'intelligenza artificiale sta cambiando radicalmente il modo in cui lavoriamo e comunichiamo. D\'altra parte, la tecnologia ha reso possibile cose straordinarie: la telemedicina, l\'istruzione a distanza, le video chiamate con i familiari lontani. La questione è: come usiamo questi strumenti potentissimi?`,
        translation: `شبکه‌های اجتماعی ما را با آدم‌های سراسر دنیا متصل می‌کنند، با این حال خیلی‌ها بیشتر از قبل احساس تنهایی می‌کنند. ساعت‌ها صرف نگاه کردن به پروفایل‌های دیگران می‌کنیم و مداوم خودمان را مقایسه می‌کنیم. اخبار جعلی سریعاً در شبکه‌های اجتماعی پخش می‌شود و اغلب تشخیص اطلاعات از اختراع سخته. هوش مصنوعی داره به طور اساسی روش کار و ارتباط ما را تغییر می‌ده. از طرف دیگه، تکنولوژی چیزهای شگفت‌انگیزی را ممکن کرده: پزشکی از راه دور، آموزش از راه دور، تماس ویدیویی با خانواده‌های دور. سوال اینه: چطور از این ابزارهای قدرتمند استفاده می‌کنیم؟`,
        vocabulary: ['v37-1', 'v37-2', 'v37-3', 'v37-4', 'v37-5', 'v37-6'],
      },
    ],
    listening: [
      {
        id: 'l37-1', lessonId: 37, title: 'Pro e contro dei social', titleFa: 'مزایا و معایب شبکه‌های اجتماعی',
        transcript: `A: Quante ore passi sui social media al giorno?
B: Troppe, onestamente. Almeno tre ore.
A: Penso che sia un vero problema. Le fake news si diffondono rapidamente.
B: Hai ragione. Ma i social mi permettono di restare in contatto con amici lontani.
A: È vero. Pur riconoscendo i benefici, credo che dovremmo usarli più consapevolmente.
B: Sono d'accordo. L'intelligenza artificiale poi complica ancora di più le cose.
A: Sì — non si sa più cosa è reale e cosa no.`,
        translation: `A: روزی چند ساعت در شبکه‌های اجتماعی می‌گذری؟
B: خیلی زیاد، صادقانه بگم. حداقل سه ساعت.
A: فکر می‌کنم یه مشکل واقعیه. اخبار جعلی سریع پخش می‌شه.
B: حق داری. ولی شبکه‌های اجتماعی بهم اجازه می‌ده با دوستای دور در ارتباط باشم.
A: درسته. با وجود اینکه مزایا را می‌شناسم، فکر می‌کنم باید آگاهانه‌تر استفاده کنیم.
B: موافقم. هوش مصنوعی هم چیزها را پیچیده‌تر می‌کنه.
A: بله — دیگه نمی‌دونی چی واقعیه و چی نه.`,
        duration: 62,
      },
    ],
    speaking: [
      {
        id: 'sp37-1', lessonId: 37, type: 'conversation', title: 'Debate: technology in modern life', titleFa: 'بحث: تکنولوژی در زندگی مدرن',
        scenario: 'Discuss the pros and cons of social media and AI.',
        scenarioFa: 'مزایا و معایب شبکه‌های اجتماعی و هوش مصنوعی را بحث کن.',
        lines: [
          { speaker: 'A', text: 'Cosa pensi dell\'intelligenza artificiale?', translation: 'درباره هوش مصنوعی چی فکر می‌کنی؟' },
          { speaker: 'B', text: 'Penso che sia ___ sebbene ___. Credo che ___.', translation: 'فکر می‌کنم ___ هست اگرچه ___. باور دارم ___.' },
          { speaker: 'A', text: 'E i social media, li usi molto?', translation: 'شبکه‌های اجتماعی را زیاد استفاده می‌کنی؟' },
          { speaker: 'B', text: 'Sì/No, ___ perché ___. Da un lato ___, dall\'altro ___.', translation: 'بله/نه، ___ چون ___. از یه طرف ___, از طرف دیگه ___.' },
        ],
        tips: ['"Da un lato... dall\'altro..." = on one hand... on the other...', '"Pur riconoscendo..." = while recognizing... (concessive gerund)', '"A mio avviso / secondo me" = in my opinion'],
      },
    ],
    exercises: [
      { id: 'ex37-1', type: 'fill_blank', question: 'Le notizie false si ___ velocemente. (diffondersi)', correctAnswer: 'diffondono' },
      { id: 'ex37-2', type: 'fill_blank', question: 'giornale → il/la ___ista', correctAnswer: 'giornalista' },
      { id: 'ex37-3', type: 'multiple_choice', question: '"L\'intelligenza artificiale" is...?', options: ['masculine', 'feminine', 'neuter', 'invariable'], correctAnswer: 'feminine' },
    ],
    flashcards: [
      { id: 'fc37-1', lessonId: 37, front: 'i social media', back: 'شبکه‌های اجتماعی', example: 'Troppo tempo sui social media.', pronunciation: 'ˈsoːtʃal ˈmiːdia', difficulty: 'beginner' },
      { id: 'fc37-2', lessonId: 37, front: 'la notizia falsa', back: 'خبر جعلی', example: 'Verificate le fonti!', pronunciation: 'noˈtiːtsja ˈfaltsa', difficulty: 'intermediate' },
      { id: 'fc37-3', lessonId: 37, front: 'l\'IA / l\'intelligenza artificiale', back: 'هوش مصنوعی', example: 'L\'IA sta cambiando il mondo.', pronunciation: 'intɛlˈlɛdʒentsa artifiˈtʃaːle', difficulty: 'intermediate' },
    ],
  },

  {
    id: 38, number: 8, bookSlug: BOOK_SLUG, slug: 'ne4-lesson-8', pdfUrl: PDF_URL,
    title: 'L\'ambiente e la sostenibilità', titleFa: 'محیط زیست و پایداری',
    subtitle: 'Environmental Issues and Sustainable Living in Italian', subtitleFa: 'مسائل محیط زیستی و زندگی پایدار به ایتالیایی',
    overview: 'Acquisisci il vocabolario ambientale e impara a discutere temi di sostenibilità.', overviewFa: 'واژگان محیط زیست را یاد بگیر و یاد بگیر درباره موضوعات پایداری بحث کنی.',
    objectives: ['Environmental vocabulary', 'Discuss climate change and solutions', 'Use impersonal constructions', 'Express necessity and obligation formally'],
    objectivesFa: ['واژگان محیط زیستی', 'تغییرات آب‌وهوایی و راه‌حل‌ها را بحث کن', 'از ساختارهای غیرشخصی استفاده کن', 'ضرورت و اجبار را به صورت رسمی بیان کن'],
    color: 'from-green-600 to-lime-700', icon: '🌍', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v38-1', lessonId: 38, word: 'il cambiamento climatico', translation: 'تغییرات آب‌وهوایی', pronunciation: 'il kambjamenˈto kliˈmaːtiko', exampleIt: 'Il cambiamento climatico è la sfida del secolo.', exampleFa: 'تغییرات آب‌وهوایی چالش قرنه.', difficulty: 'intermediate', category: 'environment' },
      { id: 'v38-2', lessonId: 38, word: 'le energie rinnovabili', translation: 'انرژی‌های تجدیدپذیر', pronunciation: 'le eˈnɛrdʒe rinoˈvaːbili', exampleIt: 'Dobbiamo investire nelle energie rinnovabili.', exampleFa: 'باید در انرژی‌های تجدیدپذیر سرمایه‌گذاری کنیم.', difficulty: 'intermediate', category: 'environment' },
      { id: 'v38-3', lessonId: 38, word: 'la raccolta differenziata', translation: 'جمع‌آوری زباله تفکیکی', pronunciation: 'la rakˈkolta differentsiˈaːta', exampleIt: 'In Italia la raccolta differenziata è obbligatoria.', exampleFa: 'در ایتالیا جمع‌آوری زباله تفکیکی اجباریه.', difficulty: 'intermediate', category: 'environment' },
      { id: 'v38-4', lessonId: 38, word: 'la sostenibilità', translation: 'پایداری', pronunciation: 'la sosteˌnibiliˈta', exampleIt: 'La sostenibilità è la parola chiave del futuro.', exampleFa: 'پایداری کلمه کلیدی آینده‌ست.', difficulty: 'intermediate', category: 'environment' },
      { id: 'v38-5', lessonId: 38, word: 'l\'impronta ecologica', translation: 'ردپای اکولوژیکی', pronunciation: 'limˈpronta ekoˈlɔdʒika', exampleIt: 'Bisogna ridurre la nostra impronta ecologica.', exampleFa: 'باید ردپای اکولوژیکی‌مون را کاهش بدیم.', difficulty: 'advanced', category: 'environment' },
      { id: 'v38-6', lessonId: 38, word: 'inquinare / l\'inquinamento', translation: 'آلوده کردن / آلودگی', pronunciation: 'inkwiˈnaːre / linkwinaˈmento', exampleIt: 'L\'inquinamento dell\'aria è un problema grave.', exampleFa: 'آلودگی هوا یه مشکل جدیه.', difficulty: 'intermediate', category: 'environment' },
    ],
    grammar: [
      {
        id: 'g38-1', lessonId: 38, title: 'Impersonal constructions and obligation', titleFa: 'ساختارهای غیرشخصی و اجبار',
        explanation: 'Italian uses impersonal constructions to discuss general obligations and necessities: bisogna + inf., è necessario + inf., si deve + inf., occorre + inf.',
        explanationFa: 'ایتالیایی از ساختارهای غیرشخصی برای بحث درباره اجبار و ضرورت‌های عمومی استفاده می‌کنه.',
        examples: [
          { italian: 'Bisogna ridurre le emissioni. (it is necessary)', persian: 'لازمه که آلودگی‌ها کاهش بده.' },
          { italian: 'Occorre agire subito. (it is needed)', persian: 'باید فوری عمل کرد.' },
          { italian: 'Si dovrebbe consumare meno plastica.', persian: 'باید پلاستیک کمتری مصرف بشه.' },
          { italian: 'È fondamentale che le aziende riducano... (+ congiuntivo)', persian: 'ضروریه که شرکت‌ها کاهش بدن...' },
        ],
        commonMistakes: ['Bisogna/occorre take infinitive (no subject)', '"È necessario che" takes subjunctive (different subject implied)', '"Si deve" = impersonal must (not "si" reflexive)'],
        exercises: [{ id: 'ex38-g1-1', type: 'fill_blank', question: '___ ridurre il consumo di plastica. (it is necessary)', correctAnswer: 'Bisogna' }],
      },
    ],
    reading: [
      {
        id: 'r38-1', lessonId: 38, title: 'L\'Italia verso la sostenibilità', titleFa: 'ایتالیا به سمت پایداری',
        content: `Il cambiamento climatico sta colpendo anche l\'Italia: siccità al sud, alluvioni al nord, ghiacciai che si sciolgono sulle Alpi. Bisogna agire adesso. Molte città italiane hanno già investito nelle energie rinnovabili. Milano, per esempio, ha aumentato significativamente i pannelli solari sui tetti degli edifici pubblici. La raccolta differenziata è migliorata molto negli ultimi anni, sebbene ci siano ancora grandi differenze tra nord e sud. È fondamentale che ogni cittadino riduca la propria impronta ecologica. Occorre consumare meno, sprecare meno e viaggiare in modo più sostenibile.`,
        translation: `تغییرات آب‌وهوایی هم ایتالیا را گرفتار کرده: خشکسالی در جنوب، سیل در شمال، یخچال‌هایی که در آلپ‌ها ذوب می‌شوند. باید الان عمل کرد. شهرهای زیادی در ایتالیا قبلاً در انرژی‌های تجدیدپذیر سرمایه‌گذاری کردن. میلان، مثلاً، پنل‌های خورشیدی روی پشت‌بام ساختمان‌های عمومی را به طور قابل توجهی افزایش داده. جمع‌آوری زباله تفکیکی در سال‌های اخیر خیلی بهتر شده، اگرچه هنوز تفاوت‌های بزرگی بین شمال و جنوب وجود داره. ضروریه که هر شهروند ردپای اکولوژیکی خودش را کاهش بده. لازمه کمتر مصرف کنیم، کمتر هدر بدیم و پایدارتر سفر کنیم.`,
        vocabulary: ['v38-1', 'v38-2', 'v38-3', 'v38-4', 'v38-5', 'v38-6'],
      },
    ],
    listening: [
      {
        id: 'l38-1', lessonId: 38, title: 'Dibattito sull\'ambiente', titleFa: 'بحث درباره محیط زیست',
        transcript: `A: Cosa fai nella vita quotidiana per l\'ambiente?
B: Faccio la raccolta differenziata, uso i mezzi pubblici e cerco di comprare meno plastica.
A: Bene! Bisogna che ognuno faccia la sua parte.
B: Sì, ma non basta. Occorre che anche le grandi aziende cambino.
A: Hai ragione. Si dovrebbe investire molto di più nelle rinnovabili.
B: E ridurre le emissioni. Il cambiamento climatico non aspetta.
A: Speriamo che i governi agiscano finalmente!`,
        translation: `A: در زندگی روزمره چیکار می‌کنی برای محیط زیست؟
B: زباله تفکیکی انجام می‌دم، از حمل‌ونقل عمومی استفاده می‌کنم و سعی می‌کنم پلاستیک کمتر بخرم.
A: خوبه! ضروریه که هر کسی سهم خودش را بذاره.
B: بله، ولی کافی نیست. لازمه که شرکت‌های بزرگ هم تغییر کنند.
A: حق داری. باید خیلی بیشتر در انرژی‌های تجدیدپذیر سرمایه‌گذاری بشه.
B: و آلودگی‌ها کاهش پیدا کنه. تغییرات آب‌وهوایی منتظر نمی‌مونه.
A: امیدواریم دولت‌ها بالاخره عمل کنند!`,
        duration: 60,
      },
    ],
    speaking: [
      {
        id: 'sp38-1', lessonId: 38, type: 'conversation', title: 'Environmental awareness discussion', titleFa: 'بحث آگاهی محیط زیستی',
        scenario: 'Discuss environmental problems and what should be done.',
        scenarioFa: 'درباره مشکلات محیط زیستی و اینکه چیکار باید بشه بحث کن.',
        lines: [
          { speaker: 'A', text: 'Qual è il problema ambientale che ti preoccupa di più?', translation: 'کدوم مشکل محیط زیستی بیشتر نگرانت می‌کنه؟' },
          { speaker: 'B', text: 'Mi preoccupa ___ perché ___. Bisogna ___.', translation: 'نگرانم ___ چون ___. لازمه ___.' },
          { speaker: 'A', text: 'E cosa puoi fare tu personalmente?', translation: 'تو شخصاً چیکار می‌تونی بکنی؟' },
          { speaker: 'B', text: 'Posso ___ e ___, sebbene non sia sufficiente da solo.', translation: 'می‌تونم ___ و ___، اگرچه تنها کافی نیست.' },
        ],
        tips: ['"Bisogna/occorre + infinito" for impersonal obligation', '"È fondamentale/necessario che + congiuntivo" for specific subjects', '"Sebbene + congiuntivo" for concession'],
      },
    ],
    exercises: [
      { id: 'ex38-1', type: 'fill_blank', question: '___ agire subito per il clima. (it is needed - occorrere)', correctAnswer: 'Occorre' },
      { id: 'ex38-2', type: 'multiple_choice', question: '"La raccolta differenziata" means?', options: ['water recycling', 'sorted waste collection', 'clean energy', 'reforestation'], correctAnswer: 'sorted waste collection' },
    ],
    flashcards: [
      { id: 'fc38-1', lessonId: 38, front: 'il cambiamento climatico', back: 'تغییرات آب‌وهوایی', example: 'È la sfida del secolo.', pronunciation: 'kambjamenˈto kliˈmaːtiko', difficulty: 'intermediate' },
      { id: 'fc38-2', lessonId: 38, front: 'bisogna + inf.', back: 'لازمه / باید', example: 'Bisogna ridurre i rifiuti.', pronunciation: 'biˈzɔɲɲa', difficulty: 'intermediate' },
      { id: 'fc38-3', lessonId: 38, front: 'le energie rinnovabili', back: 'انرژی‌های تجدیدپذیر', example: 'Investire nel solare.', pronunciation: 'eˈnɛrdʒe rinoˈvaːbili', difficulty: 'intermediate' },
    ],
  },

  {
    id: 39, number: 9, bookSlug: BOOK_SLUG, slug: 'ne4-lesson-9', pdfUrl: PDF_URL,
    title: 'Arte, cinema e letteratura', titleFa: 'هنر، سینما و ادبیات',
    subtitle: 'Discussing Arts and Culture in Italian', subtitleFa: 'بحث درباره هنر و فرهنگ به ایتالیایی',
    overview: 'Impara a parlare di arte, cinema e letteratura italiana con fluidità.', overviewFa: 'یاد بگیر با روانی درباره هنر، سینما و ادبیات ایتالیایی صحبت کنی.',
    objectives: ['Vocabulary for art, film and literature', 'Express aesthetic judgements', 'Use si impersonale for general statements', 'Describe a film/book/artwork'],
    objectivesFa: ['واژگان هنر، فیلم و ادبیات', 'قضاوت‌های زیباشناختی را بیان کن', 'از si impersonale برای گزاره‌های عمومی استفاده کن', 'فیلم/کتاب/اثر هنری را توصیف کن'],
    color: 'from-pink-600 to-rose-700', icon: '🎨', estimatedMinutes: 65,
    vocabulary: [
      { id: 'v39-1', lessonId: 39, word: 'la trama', translation: 'طرح داستانی / ماجرا', pronunciation: 'la ˈtraːma', exampleIt: 'La trama del film è molto originale.', exampleFa: 'ماجرای فیلم خیلی اصیله.', difficulty: 'intermediate', category: 'arts' },
      { id: 'v39-2', lessonId: 39, word: 'il capolavoro', translation: 'شاهکار', pronunciation: 'il kapolaˈvoːro', exampleIt: 'La Divina Commedia è un capolavoro della letteratura.', exampleFa: 'کمدی الهی شاهکار ادبیاته.', difficulty: 'intermediate', category: 'arts' },
      { id: 'v39-3', lessonId: 39, word: 'emozionante / commovente', translation: 'هیجان‌انگیز / تأثیرگذار', pronunciation: 'emotsjoˈnante / kommoˈvente', exampleIt: 'Il finale del film era molto commovente.', exampleFa: 'پایان فیلم خیلی تأثیرگذار بود.', difficulty: 'intermediate', category: 'arts_adjectives' },
      { id: 'v39-4', lessonId: 39, word: 'il protagonista', translation: 'قهرمان داستان', pronunciation: 'il protagoˈnista', exampleIt: 'Il protagonista del romanzo è un detective.', exampleFa: 'قهرمان رمان یه کارآگاهه.', difficulty: 'intermediate', category: 'arts' },
      { id: 'v39-5', lessonId: 39, word: 'la regia / il regista', translation: 'کارگردانی / کارگردان', pronunciation: 'la reˈdʒiːa / il reˈdʒista', exampleIt: 'La regia di Fellini è inconfondibile.', exampleFa: 'کارگردانی فلینی اشتباه‌ناپذیره.', difficulty: 'intermediate', category: 'cinema' },
      { id: 'v39-6', lessonId: 39, word: 'ambientato a/in', translation: 'در... اتفاق می‌افتد', pronunciation: 'ambjentˈaːto a/in', exampleIt: 'Il romanzo è ambientato nella Napoli degli anni \'50.', exampleFa: 'رمان در ناپل دهه ۵۰ اتفاق می‌افته.', difficulty: 'intermediate', category: 'arts' },
    ],
    grammar: [
      {
        id: 'g39-1', lessonId: 39, title: 'Si impersonale for general statements', titleFa: 'si impersonale برای گزاره‌های عمومی',
        explanation: 'Si impersonale + verb (3rd person singular or plural) makes impersonal statements: "one does", "people do", "you do (in general)".',
        explanationFa: 'si impersonale + فعل (سوم شخص مفرد یا جمع) برای گزاره‌های غیرشخصی: "آدم می‌کنه"، "مردم می‌کنند".',
        examples: [
          { italian: 'Si legge molto d\'estate. (people read a lot in summer)', persian: 'تابستان‌ها زیاد کتاب می‌خونند.' },
          { italian: 'In Italia si mangia bene. (one eats well)', persian: 'در ایتالیا خوب غذا می‌خورند.' },
          { italian: 'Si dice che il film sia bellissimo. (it is said that...)', persian: 'می‌گند که فیلم خیلی قشنگه.' },
          { italian: 'Si vedono ancora le sue influenze nell\'arte moderna.', persian: 'هنوز تأثیراتش در هنر مدرن دیده می‌شه.' },
        ],
        commonMistakes: ['Si + plural verb when noun is plural: "Si vendono libri" (not "si vende")', '"Si dice che" takes subjunctive: "si dice che sia..."'],
        exercises: [{ id: 'ex39-g1-1', type: 'fill_blank', question: 'In Italia ___ molta pasta. (mangiare, si impersonale)', correctAnswer: 'si mangia' }],
      },
    ],
    reading: [
      {
        id: 'r39-1', lessonId: 39, title: 'Il cinema italiano', titleFa: 'سینمای ایتالیایی',
        content: `Il cinema italiano è famoso in tutto il mondo, soprattutto per il neorealismo del dopoguerra. Si pensi a capolavori come "Ladri di biciclette" di De Sica o "Roma città aperta" di Rossellini. In questi film si racconta la vita quotidiana della gente comune con uno stile realistico e poetico. Successivamente, la regia di Fellini ha portato un approccio più onirico e autobiografico. Si dice spesso che "8½" sia il film più personale e complesso mai realizzato. Ancora oggi si studiano questi film nelle università di tutto il mondo come esempi insuperabili di arte cinematografica.`,
        translation: `سینمای ایتالیایی در سراسر دنیا معروفه، مخصوصاً به خاطر نئورئالیسم بعد از جنگ. به شاهکارهایی مثل "دزدان دوچرخه" دی سیکا یا "رم، شهر آزاد" روسلینی فکر کن. در این فیلم‌ها زندگی روزمره مردم عادی با سبکی واقعی و شاعرانه روایت می‌شه. بعداً کارگردانی فلینی رویکردی رویایی‌تر و خودزندگی‌نامه‌ای‌تر آورد. اغلب می‌گویند که "8½" شخصی‌ترین و پیچیده‌ترین فیلمی است که تاکنون ساخته شده. هنوز امروز این فیلم‌ها در دانشگاه‌های سراسر دنیا به عنوان نمونه‌های بی‌نظیر هنر سینمایی تدریس می‌شوند.`,
        vocabulary: ['v39-1', 'v39-2', 'v39-3', 'v39-4', 'v39-5', 'v39-6'],
      },
    ],
    listening: [
      {
        id: 'l39-1', lessonId: 39, title: 'Consigli culturali', titleFa: 'توصیه‌های فرهنگی',
        transcript: `A: Hai visto qualcosa di bello ultimamente?
B: Sì! Ho rivisto "La dolce vita" di Fellini. Un capolavoro assoluto.
A: Di cosa parla?
B: È ambientato nella Roma degli anni '60. Si segue la vita di un giornalista tra feste, mondanità e crisi esistenziale.
A: Emozionante?
B: Più che emozionante — è profondo, malinconico, bellissimo. Si dice che Fellini ci abbia messo tutta la sua anima.
A: Lo metto in lista! Cosa si vede in questo periodo al cinema?
B: Si proietta un film bellissimo sul rinascimento — vale la pena vederlo!`,
        translation: `A: اخیراً چیز قشنگی دیدی؟
B: بله! "لا دولچه ویتا" فلینی را دوباره دیدم. یه شاهکار مطلق.
A: درباره چیه؟
B: در رُم دهه ۶۰ اتفاق می‌افته. زندگی یه روزنامه‌نگار بین مهمونی‌ها، تشریفات و بحران وجودی دنبال می‌شه.
A: هیجان‌انگیزه؟
B: بیشتر از هیجان‌انگیز — عمیقه، غم‌انگیزه، خیلی قشنگه. می‌گند که فلینی همه روحش را توش گذاشته.
A: می‌ذارمش تو لیستم! این دوره چی در سینما نمایش داده می‌شه؟
B: یه فیلم خیلی قشنگ درباره رنسانس در حال نمایشه — ارزش دیدن داره!`,
        duration: 62,
      },
    ],
    speaking: [
      {
        id: 'sp39-1', lessonId: 39, type: 'conversation', title: 'Recommending and reviewing cultural works', titleFa: 'توصیه و نقد آثار فرهنگی',
        scenario: 'Recommend a film, book or artwork and describe it.',
        scenarioFa: 'یه فیلم، کتاب یا اثر هنری توصیه کن و توصیفش کن.',
        lines: [
          { speaker: 'A', text: 'Mi consigli un film italiano da vedere?', translation: 'یه فیلم ایتالیایی برای دیدن توصیه می‌کنی؟' },
          { speaker: 'B', text: 'Ti consiglio ___ di ___. È ambientato ___ e si racconta ___.', translation: '___ از ___ توصیه می‌کنم. در ___ اتفاق می‌افته و ___ روایت می‌شه.' },
          { speaker: 'A', text: 'È emozionante? Di cosa si tratta esattamente?', translation: 'هیجان‌انگیزه؟ دقیقاً درباره چیه؟' },
          { speaker: 'B', text: 'Si tratta di ___ e il protagonista ___. Si dice che sia ___', translation: 'درباره ___ هست و قهرمانش ___. می‌گند که ___ هست.' },
        ],
        tips: ['"Si dice che + congiuntivo" = it is said that', '"È ambientato a/in" = set in (place)', '"Vale la pena + infinito" = it is worth...ing'],
      },
    ],
    exercises: [
      { id: 'ex39-1', type: 'fill_blank', question: 'In Italia ___ bene. (mangiare, si impersonale)', correctAnswer: 'si mangia' },
      { id: 'ex39-2', type: 'fill_blank', question: 'Si ___ che il film sia bellissimo. (dire)', correctAnswer: 'dice' },
      { id: 'ex39-3', type: 'multiple_choice', question: '"La trama" means?', options: ['the setting', 'the plot', 'the director', 'the protagonist'], correctAnswer: 'the plot' },
    ],
    flashcards: [
      { id: 'fc39-1', lessonId: 39, front: 'il capolavoro', back: 'شاهکار', example: 'La Divina Commedia è un capolavoro.', pronunciation: 'kapolaˈvoːro', difficulty: 'intermediate' },
      { id: 'fc39-2', lessonId: 39, front: 'ambientato a/in', back: 'در... اتفاق می‌افتد', example: 'Il film è ambientato a Roma.', pronunciation: 'ambjentˈaːto', difficulty: 'intermediate' },
      { id: 'fc39-3', lessonId: 39, front: 'si dice che + congiuntivo', back: 'می‌گند که', example: 'Si dice che sia bellissimo.', pronunciation: 'si ˈdiːtʃe ke', difficulty: 'advanced' },
    ],
  },

  {
    id: 40, number: 10, bookSlug: BOOK_SLUG, slug: 'ne4-lesson-10', pdfUrl: PDF_URL,
    title: 'Revisione e conversazione avanzata', titleFa: 'مرور و مکالمه پیشرفته',
    subtitle: 'B2 Conversation: Fluency, Nuance and Style', subtitleFa: 'مکالمه B2: روانی، ظرافت و سبک',
    overview: 'Rivedi tutti i punti chiave del libro e pratica conversazioni avanzate su temi complessi.', overviewFa: 'همه نکات کلیدی کتاب را مرور کن و مکالمات پیشرفته درباره موضوعات پیچیده تمرین کن.',
    objectives: ['Review all B1-B2 grammar structures', 'Hold extended conversations on complex topics', 'Use discourse connectors naturally', 'Develop personal Italian style'],
    objectivesFa: ['همه ساختارهای گرامری B1-B2 را مرور کن', 'مکالمات طولانی درباره موضوعات پیچیده داشته باش', 'از عوامل انسجام به طور طبیعی استفاده کن', 'سبک شخصی ایتالیایی را توسعه بده'],
    color: 'from-orange-600 to-red-700', icon: '🏆', estimatedMinutes: 80,
    vocabulary: [
      { id: 'v40-1', lessonId: 40, word: 'tuttavia / eppure', translation: 'با این حال / با این وجود', pronunciation: 'tutˈtaːvja / epˈpuːre', exampleIt: 'È difficile, tuttavia non impossibile.', exampleFa: 'سخته، با این حال غیرممکن نیست.', difficulty: 'advanced', category: 'discourse_connectors' },
      { id: 'v40-2', lessonId: 40, word: 'pertanto / quindi', translation: 'بنابراین / پس', pronunciation: 'perˈtanto / ˈkwindi', exampleIt: 'Ho studiato molto, pertanto sono pronto.', exampleFa: 'خیلی درس خوندم، بنابراین آماده‌ام.', difficulty: 'intermediate', category: 'discourse_connectors' },
      { id: 'v40-3', lessonId: 40, word: 'in quanto', translation: 'از آنجا که / چون', pronunciation: 'in ˈkwanto', exampleIt: 'Non posso venire in quanto sono impegnato.', exampleFa: 'نمی‌تونم بیام از آنجا که مشغولم.', difficulty: 'advanced', category: 'discourse_connectors' },
      { id: 'v40-4', lessonId: 40, word: 'a tal punto che', translation: 'به حدی که', pronunciation: 'a tal ˈpunto ke', exampleIt: 'Era stanco a tal punto che si addormentò in piedi.', exampleFa: 'به حدی خسته بود که ایستاده خوابش برد.', difficulty: 'advanced', category: 'discourse_connectors' },
      { id: 'v40-5', lessonId: 40, word: 'd\'altronde / del resto', translation: 'از طرف دیگه / در واقع', pronunciation: 'dalˈtronde / del ˈrɛsto', exampleIt: 'D\'altronde, non si può piacere a tutti.', exampleFa: 'از طرف دیگه، نمی‌شه همه را راضی کرد.', difficulty: 'advanced', category: 'discourse_connectors' },
      { id: 'v40-6', lessonId: 40, word: 'a prescindere da', translation: 'صرف نظر از', pronunciation: 'a preˈʃindere da', exampleIt: 'A prescindere dal risultato, l\'ho fatto del mio meglio.', exampleFa: 'صرف نظر از نتیجه، بهترین کارم را کردم.', difficulty: 'advanced', category: 'discourse_connectors' },
    ],
    grammar: [
      {
        id: 'g40-1', lessonId: 40, title: 'B1-B2 Grammar review', titleFa: 'مرور گرامر B1-B2',
        explanation: 'A complete summary of the key structures from this book and the series.',
        explanationFa: 'خلاصه کامل ساختارهای کلیدی این کتاب و مجموعه.',
        examples: [
          { italian: 'Congiuntivo imperfetto: Se fossi te, studierei.', persian: 'اگه جای تو بودم، درس می‌خوندم.' },
          { italian: 'Discorso indiretto: Ha detto che sarebbe venuto.', persian: 'گفت که می‌اومد.' },
          { italian: 'Gerundio: Studiando ogni giorno, migliorerai.', persian: 'هر روز درس خوندن → پیشرفت می‌کنی.' },
          { italian: 'Futuro anteriore: Quando avrò finito, uscirò.', persian: 'وقتی تموم کردم، می‌رم بیرون.' },
          { italian: 'Causative: Ho fatto riparare la macchina.', persian: 'ماشین را فرستادم تعمیر بشه.' },
        ],
        commonMistakes: ['Subjunctive after expressions of doubt/opinion/emotion (not indicativo)', '"Non appena/quando" + futuro anteriore for sequenced future actions', 'Reported speech: shift ALL tenses when main verb is past'],
        exercises: [{ id: 'ex40-g1-1', type: 'multiple_choice', question: 'Which sentence is correct?', options: ['Se verrà, dico ciao', 'Se viene, direi ciao', 'Se venisse, direi ciao (tipo 2)', 'Se veniva, dico ciao'], correctAnswer: 'Se venisse, direi ciao (tipo 2)' }],
      },
    ],
    reading: [
      {
        id: 'r40-1', lessonId: 40, title: 'Una lettera di addio al corso', titleFa: 'یه نامه خداحافظی به دوره',
        content: `Cara lingua italiana,
quando ho iniziato a studiarti, pensavo che saresti stata facile. Mi sbagliavo! Tuttavia, non avrei potuto immaginare quanto mi avresti dato in cambio. Se non avessi iniziato questo percorso, non avrei mai letto Dante in originale, né avrei capito perché gli italiani si emozionino così tanto per la pizza. Avendo studiato la tua grammatica a fondo, ho capito che ogni regola ha una sua logica. D'altronde, una lingua non è solo regole: è cultura, storia, emozioni. A prescindere da quanto ancora debba imparare, mi sento già italiano nel cuore. Grazie per tutto, cara lingua.
Con affetto, uno studente grato`,
        translation: `زبان ایتالیایی عزیز،
وقتی شروع کردم یادت بگیرم، فکر می‌کردم آسون خواهی بود. اشتباه می‌کردم! با این حال، نمی‌تونستم تصور کنم که چقدر در عوض بهم می‌دی. اگه این مسیر را شروع نکرده بودم، هرگز دانته را در نسخه اصلی نمی‌خوندم، و نمی‌فهمیدم ایتالیایی‌ها چرا تا این حد برای پیتزا احساساتی می‌شوند. بعد از اینکه گرامرت را عمیق یاد گرفتم، فهمیدم هر قانون منطق خودش را داره. از طرف دیگه، یه زبان فقط قانون نیست: فرهنگه، تاریخه، احساسه. صرف نظر از اینکه هنوز چقدر باید یاد بگیرم، در قلبم خودم را ایتالیایی احساس می‌کنم. ممنون برای همه چیز، زبان عزیز.
با محبت، یه دانش‌آموز ممنون`,
        vocabulary: ['v40-1', 'v40-2', 'v40-3', 'v40-4', 'v40-5', 'v40-6'],
      },
    ],
    listening: [
      {
        id: 'l40-1', lessonId: 40, title: 'Il futuro dell\'italiano', titleFa: 'آینده زبان ایتالیایی',
        transcript: `A: Pensi che l'italiano sia una lingua in declino?
B: Assolutamente no. Tuttavia, è cambiata molto nell'era digitale.
A: In che senso?
B: Si usano molti anglicismi. D'altronde, è normale che le lingue si evolvano.
A: E il dialetto? Si parla ancora?
B: Sì, eppure sempre meno tra i giovani. In quanto lingua di identità locale, il dialetto resiste.
A: Se non si parlessero più i dialetti, si perderebbe molto della cultura italiana.
B: Esatto. A prescindere dalla globalizzazione, le tradizioni locali vanno preservate.
A: Sono pienamente d'accordo. Pertanto, dovremmo tutti fare uno sforzo per mantenerle vive.`,
        translation: `A: فکر می‌کنی زبان ایتالیایی در حال افت هست؟
B: اصلاً نه. با این حال، در عصر دیجیتال خیلی تغییر کرده.
A: به چه معنا؟
B: خیلی کلمات انگلیسی استفاده می‌شه. از طرف دیگه، طبیعیه که زبان‌ها تکامل پیدا کنند.
A: و لهجه‌های محلی؟ هنوز صحبت می‌شه؟
B: بله، با این وجود بین جوانان کمتر. از آنجا که زبان هویت محلیه، لهجه مقاومت می‌کنه.
A: اگه لهجه‌ها دیگه صحبت نمی‌شدند، چیز زیادی از فرهنگ ایتالیایی از دست می‌رفت.
B: درسته. صرف نظر از جهانی‌سازی، سنت‌های محلی باید حفظ بشوند.
A: کاملاً موافقم. بنابراین، همه ما باید تلاش کنیم آنها را زنده نگه داریم.`,
        duration: 70,
      },
    ],
    speaking: [
      {
        id: 'sp40-1', lessonId: 40, type: 'conversation', title: 'Advanced discussion: language and identity', titleFa: 'بحث پیشرفته: زبان و هویت',
        scenario: 'Hold a nuanced B2-level discussion using all the structures from the course.',
        scenarioFa: 'یه بحث ظریف B2 با استفاده از همه ساختارهای دوره داشته باش.',
        lines: [
          { speaker: 'A', text: 'Cosa ha significato per te imparare l\'italiano?', translation: 'یاد گرفتن ایتالیایی چه معنایی برات داشته؟' },
          { speaker: 'B', text: 'Se non avessi cominciato, non avrei mai ___. Tuttavia, ___.', translation: 'اگه شروع نکرده بودم، هرگز ___ . با این حال، ___.' },
          { speaker: 'A', text: 'Cosa ti ha sorpreso di più della lingua?', translation: 'چی بیشتر از همه از زبان تعجبت کرد؟' },
          { speaker: 'B', text: 'D\'altronde, ___ . A prescindere da ___, credo che ___.', translation: 'از طرف دیگه، ___. صرف نظر از ___، فکر می‌کنم ___.' },
        ],
        tips: ['"Tuttavia/eppure" for contrast (however)', '"D\'altronde/del resto" for adding a perspective (besides/after all)', '"A prescindere da" = regardless of (formal concession)', '"Pertanto/quindi" for consequence'],
      },
    ],
    exercises: [
      { id: 'ex40-1', type: 'multiple_choice', question: '"Pertanto" expresses?', options: ['contrast', 'consequence', 'concession', 'addition'], correctAnswer: 'consequence' },
      { id: 'ex40-2', type: 'fill_blank', question: 'Sono stanco, ___ non mi arrendo. (however)', correctAnswer: 'tuttavia' },
      { id: 'ex40-3', type: 'multiple_choice', question: 'Correct type 2 conditional?', options: ['Se avrei tempo, studio', 'Se ho tempo, studierò', 'Se avessi tempo, studierei', 'Se avevo tempo, studiavo'], correctAnswer: 'Se avessi tempo, studierei' },
    ],
    flashcards: [
      { id: 'fc40-1', lessonId: 40, front: 'tuttavia / eppure', back: 'با این حال', example: 'È difficile, tuttavia continuo.', pronunciation: 'tutˈtaːvja / epˈpuːre', difficulty: 'advanced' },
      { id: 'fc40-2', lessonId: 40, front: 'pertanto', back: 'بنابراین', example: 'Ho studiato, pertanto sono pronto.', pronunciation: 'perˈtanto', difficulty: 'advanced' },
      { id: 'fc40-3', lessonId: 40, front: 'a prescindere da', back: 'صرف نظر از', example: 'A prescindere dal risultato, ho fatto del mio meglio.', pronunciation: 'a preˈʃindere da', difficulty: 'advanced' },
    ],
  },
];
