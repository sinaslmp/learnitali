import { BookPageContent } from '@/types';

const BOOK_SLUG = 'nuovo-espresso-3';

// Lezione 1 — "Do you speak Italian?" (pages 4-17)
export const pagesEspresso3: BookPageContent[] = [
  {
    bookSlug: BOOK_SLUG,
    page: 4,
    titleEmoji: '📖',
    titleFa: 'صفحه‌ی آغازین درس ۱: Do you speak Italian?',
    explanationFa: [
      'این صفحه، صفحه‌ی معرفی درس ۱ است و نقشه‌ی کلی درس را نشان می‌دهد. سمت راست بالا زیر عنوان **comunicazione** جملات کلیدی‌ای می‌بینی که در طول درس یاد می‌گیری به کار ببری — مثل **«Imparare una lingua è come...»** (یادگیری یک زبان مثل... است) یا **«Credo che si possa dire così»** (فکر می‌کنم می‌شه اینطوری گفت).',
      'زیر عنوان **grammatica** فهرست نکات گرامری درس آمده: **trapassato prossimo** (ماضی بعید)، ساختار **«Prima di + مصدر»**، فعل **dovere** برای بیان حدس و احتمال، **ضمایر ترکیبی** (pronomi combinati) و پیشوند منفی‌ساز **in-**.',
      'پایین صفحه هم یک «vocabolario Espresso» است: چند کلمه‌ی جدید این درس (autentico، vocabolario، irregolare، memoria، regola، traduzione، starnutire، soffiarsi il naso، imbarazzato، genere، indecente، incidente culturale، piantare، iscriversi) در حباب‌های خالی نوشته شده‌اند — هدف این است که قبل از شروع درس حدس بزنی معنی‌شون چیه. 🤔',
    ],
    keyPoints: [
      'این درس درباره‌ی **یادگیری زبان، فرهنگ و سوءتفاهم‌های بین‌فرهنگی** (incidenti culturali) صحبت می‌کند.',
      'گرامر اصلی درس: **trapassato prossimo** (ماضی بعید) و **pronomi combinati** (ضمایر ترکیبی).',
      'لغات کلیدی: **autentico** (اصیل)، **regola** (قاعده)، **starnutire** (عطسه کردن)، **imbarazzato** (خجالت‌زده)، **iscriversi** (ثبت‌نام کردن).',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 5,
    titleEmoji: '📝',
    titleFa: "تمرین ۱: Imparare l'italiano è come...",
    explanationFa: [
      'این صفحه یک **خودارزیابی** است. باید بر اساس دانش فعلی‌ات از ایتالیایی، به هر یک از پنج مهارت (**leggere**=خواندن، **parlare**=صحبت کردن، **ascoltare**=شنیدن، **scrivere**=نوشتن، **grammatica**=گرامر) عددی از ۱ (کم) تا ۵ (زیاد) بدهی و نقطه‌ها را با خط به هم وصل کنی تا یک نمودار ستاره‌ای از نقاط قوت و ضعفت بسازی.',
      'زیرش سؤال می‌پرسد که برای تقویت نقاط ضعف چیکار باید بکنی، و یک لیست از راهکارها می‌دهد — مثل **ascoltare dialoghi «autentici»** (گوش دادن به مکالمه‌های اصیل)، **leggere ad alta voce** (خواندن با صدای بلند)، **imparare parole a memoria** (حفظ کردن لغات).',
      'در پایان باید جمله‌ی **«Imparare l\'italiano è come...»** را با یکی از استعاره‌های پیشنهادی (مثل **«piantare un albero nella mia anima»** = کاشتن یک درخت در روحم) کامل کنی و سه استعاره‌ی خودت هم بنویسی. ✍️',
    ],
    explanation: "Autovalutazione delle proprie competenze linguistiche e completamento di un'analogia creativa.",
    keyPoints: [
      '**leggere** = خواندن، **parlare** = صحبت کردن، **ascoltare** = شنیدن، **scrivere** = نوشتن',
      '**a memoria** = از حفظ / از بر',
      'ساختار استعاره: **«Imparare l\'italiano è come + اسم»** (یادگیری ایتالیایی مثل ... است)',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 6,
    titleEmoji: '🎧',
    titleFa: 'تمرین ۲: Anche tu qui?!',
    explanationFa: [
      'اول از همه‌ی کلاس می‌خواهد استعاره‌های نوشته‌شده در تمرین قبل را با هم به اشتراک بگذارید.',
      'بعد تمرین شنیداری **«Anche tu qui?!»** (تو هم اینجایی؟!) شروع می‌شود: باید به مکالمه‌ی بین دو نفر (**Mauro** و **Roberta**) که همدیگر را تصادفی جایی می‌بینند گوش بدی و به سه سؤال چهارگزینه‌ای جواب بدی — کجا همدیگر رو می‌بینند؟ (احتمالاً در یک آموزشگاه زبان)، روبرتا چرا اونجاست؟ و مائورو چرا اونجاست؟',
      'این تمرین مقدمه‌ی متن دیالوگ کامل صفحه‌ی بعد است. 👂',
    ],
    keyPoints: [
      '**Dove si incontrano...?** = کجا همدیگر را ملاقات می‌کنند؟',
      '**agenzia di viaggi** = آژانس مسافرتی، **scuola di lingue** = آموزشگاه زبان',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 7,
    titleEmoji: '💬',
    titleFa: "متن کامل دیالوگ Mauro و Roberta + تمرین ۳: Il trapassato prossimo",
    explanationFa: [
      'این متن کامل مکالمه‌ای است که در صفحه‌ی قبل شنیدی. روبرتا و مائورو تصادفاً همدیگر را می‌بینند و معلوم می‌شود هر دو برای یادگیری زبان چینی (**il cinese**) ثبت‌نام کرده‌اند.',
      'نکته‌ی گرامری مهم این صفحه در جمله‌ی روبرتا نهفته است: **«Pensa che mi ero già iscritto lo scorso anno a questo corso, poi però ho fatto due lezioni e ho lasciato»** (فکرش را بکن، پارسال هم در همین کلاس ثبت‌نام کرده بودم، ولی بعد از دو جلسه ولش کردم). فعل **«mi ero già iscritto»** (ثبت‌نام کرده بودم) یک نمونه‌ی **trapassato prossimo** (ماضی بعید) است — یعنی کاری که قبل از یک کار دیگر در گذشته انجام شده.',
      'جمله‌ی کادر نارنجی پایین صفحه هم به همین نکته اشاره می‌کند: **«Avevo pagato prima di iniziare»** (قبل از شروع، پول را پرداخته بودم) — که ساختار **«Prima di + مصدر»** را هم نشان می‌دهد. زیرش تمرین ۳ از تو می‌خواهد دوباره دیالوگ را بخوانی، همه‌ی فعل‌های trapassato prossimo را زیرشان خط بکشی و با هم‌کلاسی‌ات بحث کنی این زمان چطور ساخته می‌شود.',
    ],
    explanation: 'Dialogo completo tra Mauro e Roberta, con un primo esempio di trapassato prossimo e l\'esercizio di riconoscimento.',
    keyPoints: [
      '**mi ero iscritto** = ثبت‌نام کرده بودم (trapassato prossimo)',
      '**Avevo pagato prima di iniziare** = قبل از شروع کردن، پرداخته بودم (Prima di + مصدر)',
      'ساختار trapassato prossimo: **imperfetto فعل کمکی + participio passato**',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 8,
    titleEmoji: '📝',
    titleFa: 'تمرین‌های ۴ و ۵: Avevi già fatto dei corsi؟ / Intervista',
    explanationFa: [
      'تمرین ۴ یک تمرین جفت‌کردن و صرف‌کردن است: باید هشت جمله‌ی ستون راست را با هشت جمله‌ی ستون چپ جفت کنی و فعل داخل پرانتز را به **trapassato prossimo** صرف کنی — مثلاً **«Prima di trasferirmi a Parigi»** را با **«(uscire) ... già ...»** جفت می‌کنی. این تمرین، تمرین مستقیم همان قاعده‌ی صفحه‌ی قبل است.',
      'تمرین ۵ («Intervista») یک تمرین مکالمه‌ای/گفتاری است: باید از هم‌کلاسی‌ات درباره‌ی تجربه‌ی یادگیری ایتالیایی و یک زبان خارجی دیگر سؤال بپرسی — چرا ایتالیایی می‌خواند، آیا قبلاً در مدرسه یادش گرفته بود، آیا از پیشرفتش راضی است، و آیا تا حالا شده که در موقعیتی حتی یک کلمه هم نتواند بگوید. 🗣️',
    ],
    keyPoints: [
      '**Collegare** = وصل کردن/جفت کردن، **coniugare** = صرف کردن',
      '**progressi** = پیشرفت‌ها',
      '**non riuscire a dire nemmeno una parola** = نتوانستن حتی یک کلمه گفتن',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 9,
    titleEmoji: '🌍',
    titleFa: "تمرین‌های ۶، ۷ و ۸: Incidenti di percorso / Differenze culturali / Non sono affatto d'accordo!",
    explanationFa: [
      'تمرین ۶ سه داستان کوتاه از **«سوءتفاهم‌های فرهنگی»** (incidenti culturali) و یک **«سوءتفاهم زبانی»** (incidente linguistico) را نشان می‌دهد: (الف) کسی در برزیل جلوی مهمان‌ها دماغش را می‌گیرد که در آنجا کار بی‌ادبانه‌ای است، (ب) یک دوست مجارستانی به اشتباه یک مرد را «Gennaro» صدا می‌زند چون فکر می‌کرده این اسم به معنی «داماد» است — در حالی که کلمه‌ی درست **genero** است، نه اسم خاص — این یکی سوءتفاهم زبانی است، (ج) یک دوست چینی فکر می‌کند دو مرد که همدیگر را بغل کرده‌اند رابطه‌ی عاشقانه دارند، چون در چین مردها همدیگر را بغل نمی‌کنند.',
      'باید هر داستان را با نوع سوءتفاهمش (فرهنگی یا زبانی) جفت کنی. تمرین ۷ از تو می‌خواهد خاطره‌ی شخصی خودت از این‌جور سوءتفاهم‌ها را با هم‌گروهی‌هایت به اشتراک بگذاری.',
      'تمرین ۸ یک تمرین شنیداری است درباره‌ی یک بحث زبانی بین دو نفر (Paolo و یک زن) — باید گزینه‌ی درست را از میان چهار جمله انتخاب کنی. 🎧',
    ],
    keyPoints: [
      '**incidente culturale** = سوءتفاهم فرهنگی، **incidente linguistico** = سوءتفاهم زبانی',
      '**genero** = داماد (نه اسم خاص «Gennaro»!)',
      '**abbracciarsi** = همدیگر را بغل کردن',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 10,
    titleEmoji: '💬',
    titleFa: 'متن دیالوگ Paolo (پاسخ تمرین ۸) + دو نکته‌ی گرامری',
    explanationFa: [
      'این صفحه متن کامل دیالوگی است که در تمرین ۸ شنیدی: یک نفر از پائولو کتاب گرامر قرض می‌گیرد چون شک دارد باید بگوید **«l\'appuntamento è a piazza Dante»** یا **«in piazza Dante»**. پائولو در کتاب می‌خواند که شکل درست «in» است، اما طرف مقابل معتقد است که چون «a» هم رایج است، باید قوانین گرامر با کاربرد واقعی مردم منطبق شود، نه برعکس — این خودِ بحث اصلی درس است.',
      'زیر دیالوگ دو کادر توضیحی هست: کادر اول توضیح می‌دهد که برای «حالت مکان» با اسم خیابان یا میدان معمولاً حرف اضافه‌ی **«in»** به کار می‌رود (مثل «in via Cavour»)، ولی تحت تأثیر لهجه‌های مرکز و جنوب ایتالیا گاهی «a» هم دیده می‌شود.',
      'کادر دوم درباره‌ی عبارت معروف **«a me mi piace»** است: با اینکه سنتاً این جمله غلط دستوری محسوب می‌شود، در واقع در زبان محاوره‌ای رایج است و برای تأکید روی «چه کسی» خوشش می‌آید به کار می‌رود. 📐',
    ],
    explanation: "Discussione su norma grammaticale vs. uso reale della lingua, con due box di approfondimento grammaticale.",
    keyPoints: [
      "l'appuntamento è **in piazza Dante** (رسمی‌تر) در برابر **a piazza Dante** (محاوره‌ای، تحت تأثیر لهجه)",
      '**a me mi piace** = محاوره‌ای ولی رایج، برای تأکید به کار می‌رود',
      '**dovrebbe essere lì** = باید اونجا باشه (فعل dovere برای بیان حدس/احتمال)',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 11,
    titleEmoji: '📝',
    titleFa: 'تمرین‌های ۹ و ۱۰: Me lo presti؟ / Argomentare',
    explanationFa: [
      'تمرین ۹ تمرین صحبت دوبه‌دو است: باید طبق الگوی **«Me la presti؟ / Sì, te la presto volentieri»** (اونو به من قرض می‌دی؟ / بله، با کمال میل بهت قرضش می‌دم) برای اشیای مختلف (قیچی، عینک، لغت‌نامه، دی‌وی‌دی، مداد، روزنامه) دیالوگ بسازید — این تمرین **pronomi combinati** (ضمایر ترکیبی مثل «me la»، «te lo») را تمرین می‌کند.',
      'تمرین ۱۰ («Argomentare» = استدلال آوردن) از تو می‌خواهد به دیالوگ صفحه‌ی قبل برگردی و عبارت‌هایی که برای **بیان نظر خود**، **ابراز موافقت** و **ابراز مخالفت** استفاده شده را پیدا کنی و در جدول بنویسی. کادر نارنجی سمت راست هم نکته‌ی مهمی می‌دهد: **«secondo me» + فعل اخباری**، ولی **«penso che / credo che» + فعل التزامی**. 💡',
    ],
    keyPoints: [
      'Me lo presti؟ = اونو به من قرض می‌دی؟ (pronome combinato: **me + lo**)',
      '**secondo me** + indicativo، اما **penso che / credo che** + congiuntivo',
      '**esprimere accordo/disaccordo** = ابراز موافقت/مخالفت',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 12,
    titleEmoji: '🌐',
    titleFa: 'تمرین‌های ۱۱ و ۱۲: Cosa ne pensi؟ / Italenglish',
    explanationFa: [
      'تمرین ۱۱ یک بحث گروهی کوتاه است: آیا در زبان خودت هم پدیده‌های مشابه (مثل بحث سر قوانین گرامری در برابر کاربرد رایج) وجود دارد؟',
      'تمرین ۱۲ («Italenglish») یک متن خواندنی از یک وبلاگ است درباره‌ی استفاده‌ی زیاد از کلمات انگلیسی در ایتالیایی روزمره (مثل meeting، customer care، file، location، lunch، show). نویسنده می‌گوید مخالف استفاده از انگلیسی نیست، اما معتقد است خیلی وقت‌ها بدون نیاز از کلمات انگلیسی استفاده می‌شود در حالی که معادل ایتالیایی آن‌ها کاملاً طبیعی و رایج است — مثل **riunione** به‌جای meeting، **servizio clienti** به‌جای customer care، **documenti** به‌جای file، **posto** به‌جای location، **pranzo veloce** به‌جای lunch، **spettacolo** به‌جای show. باید متن را با کلمات ایتالیایی داده‌شده کامل کنی. 📰',
    ],
    explanation: "Lettura su un fenomeno diffuso: l'uso di anglicismi nell'italiano contemporaneo, con proposta di equivalenti italiani.",
    keyPoints: [
      '**meeting → riunione**، **customer care → servizio clienti**، **file → documenti**',
      '**location → posto**، **lunch → pranzo veloce**، **show → spettacolo**',
      '**utile ↔ inutile**، **possibile ↔ impossibile**، **responsabile ↔ irresponsabile** (پیشوند in-)',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 13,
    titleEmoji: '🔤',
    titleFa: 'تمرین ۱۳: È una parola di origine... + تمرین ۱۴ + ALMA.tv',
    explanationFa: [
      'تمرین ۱۳ («È una parola di origine...» = این کلمه از فلان زبان ریشه گرفته) یک بازی گروهی است: کلماتی مثل abat-jour، hacienda، kitsch، mobbing، bouquet، karaoke، yogurt، hinterland، kayak، karma، harem، freezer روی تخته آمده‌اند و باید حدس بزنی این کلمات از کدام زبان‌ها وارد ایتالیایی شده‌اند — این تمرین موازی با موضوع **وام‌واژه‌ها** در صفحه‌ی قبل است.',
      'تمرین ۱۴ («Le parole italiane internazionali») برعکسِ همین ایده است: گروهی کار کنید و لیستی از کلمات ایتالیایی‌ای بسازید که در زبان خودتان هم استفاده می‌شود (مثل پیتزا، پاستا، چاو).',
      'تمرین ۱۵ («ALMA.tv») یک تمرین شنیداری است: باید به مصاحبه‌ای با مدیر یک وب‌سایت آموزشی گوش بدهی و مشخص کنی هر جمله درست است یا نه — درباره‌ی تقاضای یادگیری ایتالیایی در دنیا و رایگان/آنلاین بودن ویدیوها. 🎧',
    ],
    keyPoints: [
      '**prestito linguistico** = وام‌واژه (کلمه‌ای که از زبان دیگر وارد شده)',
      '**trasmesso in streaming** = پخش زنده اینترنتی، **disponibile "on demand"** = قابل‌دسترسی درخواستی',
      '**a pagamento** ↔ **gratuito** = پولی در برابر رایگان',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 14,
    titleEmoji: '📐',
    titleFa: 'بخش comunicazione e grammatica: جمع‌بندی گرامر درس ۱',
    explanationFa: [
      'این صفحه جمع‌بندی رسمی گرامر درس است. بالای صفحه زیر **«Per comunicare»** عبارات کاربردی درس را می‌بینی — مثل **«Io sono del parere che...»** (من بر این باورم که...) یا **«A me non sembra proprio!»** (اصلاً اینطور به نظرم نمی‌رسه!).',
      'زیرش پنج نکته‌ی گرامری کامل توضیح داده شده: ۱) **trapassato prossimo** با مثال «Quando sono arrivata a casa, mio marito aveva mangiato» و قاعده‌اش (imperfetto فعل کمکی + participio passato). ۲) ساختار **«Prima di + مصدر»**. ۳) فعل **dovere** برای بیان حدس/احتمال (مثل «Lui deve aver perso il treno» = حتماً قطار رو از دست داده).',
      '۴) **pronomi combinati** با مثال «Me lo presti؟». ۵) پیشوند منفی‌ساز **in-** که جلوی برخی صفت‌ها معنی منفی می‌سازد (adatto→inadatto، utile→inutile، logico→illogico) و پیش از l/b/m/p/r به‌ترتیب به il-/im-/im-/im-/ir- تبدیل می‌شود (morale→immorale، ragionevole→irragionevole). ✅',
    ],
    explanation: "Riepilogo grammaticale ufficiale della lezione 1: trapassato prossimo, prima di + infinito, dovere ipotetico, pronomi combinati, prefisso in-.",
    keyPoints: [
      '**trapassato prossimo** = ماضی بعید: imperfetto (avere/essere) + participio passato',
      '**dovere** برای حدس: «deve aver perso il treno» = احتمالاً قطار را از دست داده',
      'پیشوند **in-** پیش از l/b/m/p/r به **il-/im-/im-/im-/ir-** تبدیل می‌شود',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 15,
    titleEmoji: '🎬',
    titleFa: 'videocorso 1 (بخش اول): داستان Matteo و Valentina',
    explanationFa: [
      'این بخش با ویدیوی همراه کتاب کار می‌کند. تمرین ۱ از تو می‌خواهد به عکس صحنه‌ی ویدیو نگاه کنی و سه خلاصه‌ی داستان را بخوانی، حدس بزنی کدام درست است، بعد ویدیو را ببینی و جواب را تأیید کنی — خلاصه‌ی درست این است: دو گردشگر خارجی از **Matteo** آدرس می‌پرسند، او سعی می‌کند فرانسه صحبت کند ولی اطلاعات کاملاً غلط می‌دهد، و **Valentina** وارد می‌شود و آدرس درست را توضیح می‌دهد.',
      'تمرین ۲ شش جمله‌ی درست/غلط درباره‌ی داستان دارد — مثلاً «Matteo parla il francese molto bene» که غلط است. تمرین ۳ یک تمرین تکمیل‌کردن جمله با **pronomi combinati** از داخل دیالوگ ویدیو است. 🎥',
    ],
    explanation: 'Prima parte del videocorso: introduzione alla storia di Matteo e Valentina, con esercizi di comprensione.',
    keyPoints: [
      '**indicazioni stradali** = آدرس/راهنمایی مسیر',
      '**vero/falso** = درست/غلط',
      'ادامه‌ی این ویدیو در صفحه‌ی بعد (تمرین‌های ۴ و ۵) می‌آید',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 16,
    titleEmoji: '🎬',
    titleFa: 'videocorso 1 (بخش دوم): تحلیل دیالوگ Matteo و Valentina',
    explanationFa: [
      'تمرین ۴ دو تکه‌گفتگو از ویدیو را نشان می‌دهد و می‌پرسد منظور ماتئو از هر جمله چیست: **«Fortuna che ho studiato francese a scuola...!»** (خوشبختانه فرانسه رو تو مدرسه خونده بودم!) که به معنی «شانس آورد» است، و **«Non sono convinto. Comunque...»** که یعنی «به هر حال، حق با منه».',
      'تمرین ۵ بخشی از دیالوگ کامل بین Valentina و Matteo را می‌آورد و باید فعل درست را بین دو گزینه (مثلاً «ho studiato/studiavo») انتخاب کنی — دوباره تمرکز روی **زمان‌های گذشته** است.',
      'کادر سبز **«RICORDA»** نکته‌ی جالبی می‌گوید: حتی خود ایتالیایی‌ها هم گاهی درباره‌ی حرف اضافه‌ی درست (مثل «sulla destra» یا «a destra») شک دارند و هر دو شکل درست است، هرچند دومی رایج‌تر است. 💚',
    ],
    explanation: 'Seconda parte del videocorso: analisi del dialogo, con focus sui tempi del passato e sulle preposizioni.',
    keyPoints: [
      '**Fortuna che...** = خوشبختانه / شانس آوردم که...',
      '**Non sono convinto.** = قانع نشدم / مطمئن نیستم.',
      '**sulla destra** و **a destra** هر دو درست‌اند؛ دومی رایج‌تر است',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 17,
    titleEmoji: '☕',
    titleFa: "caffè culturale 1: L'italiano nel mondo",
    explanationFa: [
      'این صفحه، صفحه‌ی پایانی درس ۱ است و یک متن فرهنگی درباره‌ی جایگاه زبان ایتالیایی در دنیا ارائه می‌دهد. اول باید چند فرضیه درباره‌ی استفاده و آموزش ایتالیایی در دنیا را علامت بزنی و بعد متنی به اسم **«L\'italofonia»** را بخوانی تا فرضیه‌هایت را چک کنی.',
      'طبق متن، منطقه‌ی ایتالیایی‌زبان سه دسته کشور را شامل می‌شود: (الف) کشورهایی که ایتالیایی زبان مادری یا رسمی است — ایتالیا، سوئیس، سان‌مارینو، واتیکان و بخشی از اسلوونی؛ (ب) کشورهایی که ایتالیایی را اکثر مردم می‌شناسند ولی رسمی نیست — مالت، موناکو، کورس، آلبانی، سومالی و اتیوپی؛ (ج) کشورهایی با جمعیت زیاد مهاجر ایتالیایی — کانادا، آمریکا، آرژانتین، اروگوئه، برزیل، استرالیا و...',
      'متن می‌گوید ایتالیایی با حدود ۱٫۵ میلیون دانشجو، **چهارمین زبان پرمطالعه‌ی دنیا**ست و آلمان اول، بعد استرالیا، آمریکا، مصر و آرژانتین قرار دارند. با این صفحه، درس ۱ به پایان می‌رسد. 🎉',
    ],
    explanation: 'Pagina culturale finale della lezione: diffusione della lingua italiana nel mondo (italofonia).',
    keyPoints: [
      '**italofonia** = منطقه‌ی ایتالیایی‌زبان دنیا',
      'ایتالیایی **چهارمین زبان خارجی پرمطالعه‌ی دنیا**ست (حدود ۱٫۵ میلیون دانشجو)',
      'این صفحه پایان درس ۱ است؛ صفحه‌ی بعد به درس ۲ می‌رود',
    ],
  },
];
