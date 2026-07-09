import { BookPageContent } from '@/types';

const BOOK_SLUG = 'nuovo-espresso-1';

// Lezione 1 — "Primi contatti" (pages 5-16)
export const pagesEspresso1: BookPageContent[] = [
  {
    bookSlug: BOOK_SLUG,
    page: 5,
    titleFa: 'صفحه‌ی آغازین درس ۱: Primi contatti',
    explanationFa:
      'این صفحه، صفحه‌ی معرفی درس ۱ است. سمت راست بالا زیر عنوان «comunicazione» جملات کلیدی درس آمده: «Come ti chiami?» (اسمت چیه؟)، «Mi chiamo Carlo» (اسمم کارلوئه)، «Di dove sei؟» (اهل کجایی؟)، «Sono italiano» (من ایتالیایی‌ام)، «Qual è il tuo numero di telefono؟» (شماره تلفنت چنده؟)، «Qual è il tuo indirizzo؟» (آدرست چیه؟). زیر عنوان «grammatica» فهرست نکات گرامری درس آمده: ضمایر فاعلی io/tu/Lei (من/تو/شما محترمانه)، صرف مفرد افعال essere (بودن)، avere (داشتن) و chiamarsi (نام داشتن)، الفبای ایتالیایی، حروف تعریف il و la، صفت‌های ملیت در حالت مفرد، کلمات پرسشی come/di dove/qual، و اعداد ۰ تا ۲۰. پایین صفحه یک «vocabolario Espresso» است: چند کلمه‌ی کلیدی این درس (ciao، buongiorno، buona sera، buonanotte، arrivederci، piacere، scusi، signor/signora، indirizzo، italiano، mi chiamo، avere، numero di telefono، essere، scrivere) در حباب‌های خالی نوشته شده تا قبل از شروع درس حدس بزنی معنی‌شون چیه.',
    keyPoints: [
      'این درس درباره‌ی آشنایی اولیه: سلام و احوال‌پرسی، معرفی خود، و رد و بدل کردن اطلاعات تماس است.',
      'گرامر اصلی درس: صرف افعال essere/avere/chiamarsi در حالت مفرد.',
      'لغات کلیدی: ciao (سلام/خداحافظ، غیررسمی)، buongiorno (صبح/روز بخیر)، piacere (خوشبختم)، indirizzo (آدرس).',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 6,
    titleFa: 'تمرین ۱: Ciao o buongiorno?',
    explanationFa:
      'این تمرین شنیداری است: باید به دیالوگ‌های کوتاه گوش بدهی و هر تصویر را با جمله‌ی درست از میان چهار گزینه‌ی داده‌شده (Ciao, Giorgio! / Buongiorno! / Oh, ciao Francesca! / Buona sera, dottore!) کامل کنی. تصویرها موقعیت‌های مختلف را نشان می‌دهند: یک آقا و خانم رسمی دست می‌دهند («Buona sera, signora!»)، دو نفر که همدیگر را می‌بوسند («Ciao, Anna!»)، دو دوست غیررسمی («Ciao, Paola!»)، و یک استاد که با احترام سلام می‌کند («Buongiorno, professore!»). زیرش از تو می‌خواهد جدولی را کامل کنی که نشان می‌دهد در موقعیت‌های رسمی (Lei) و غیررسمی (tu) چطور سلام و خداحافظی می‌کنیم.',
    explanation: 'Esercizio di ascolto sui saluti formali e informali in diverse situazioni.',
    keyPoints: [
      'Ciao = سلام/خداحافظ (غیررسمی، به دوستان)، Buongiorno/Buona sera = صبح یا عصر بخیر (رسمی)',
      'Lei = ضمیر احترام‌آمیز (مثل «شما»)، tu = ضمیر غیررسمی (مثل «تو»)',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 7,
    titleFa: 'تمرین‌های ۲ و ۳: Scusi, Lei come si chiama؟ / Piacere!',
    explanationFa:
      'تمرین ۲ چهار دیالوگ کوتاه معرفی‌شدن را با چهار تصویر متفاوت جفت می‌کند (مثلاً «Ciao, sono Valeria, e tu come ti chiami؟» / «Alberto. E tu؟» / «Io Cecilia» بین سه دوست غیررسمی، یا «Scusi, Lei come si chiama؟» بین افراد رسمی در فرودگاه). بعد از خواندن دیالوگ‌ها باید بنویسی وقتی خودت را معرفی می‌کنی، وقتی اسم کسی را با «Lei» می‌پرسی، و وقتی اسم کسی را با «tu» می‌پرسی چه می‌گویی. کادر نارنجی صرف افعال essere و chiamarsi را برای io/tu/Lei نشان می‌دهد. تمرین ۳ («Piacere!») یک تمرین گفتاری گروهی است: با یک یا دو نفر دیگر یکی از موقعیت‌های تصویر را انتخاب کنید، دیالوگ بسازید و برای کلاس اجرا کنید تا بقیه حدس بزنند موقعیت چیست.',
    explanation: 'Presentarsi formalmente e informalmente; coniugazione di essere e chiamarsi.',
    keyPoints: [
      '(io) sono / mi chiamo، (tu) sei / ti chiami، (Lei) è / si chiama',
      'Scusi, Lei come si chiama؟ = ببخشید، اسم شما چیه؟ (رسمی)',
      'E tu؟ = تو چی؟ (غیررسمی)',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 8,
    titleFa: 'تمرین‌های ۴، ۵ و ۶: Fare conoscenza / L\'alfabeto / «c» come ciao',
    explanationFa:
      'تمرین ۴ («Fare conoscenza» = آشنا شدن) یک فعالیت کلاسی است: از جایت بلند شو، در کلاس بگرد، به هم‌کلاسی‌هایت سلام کن و خودت را معرفی کن — تصمیم بگیر با هرکس با tu صحبت کنی یا با Lei. تمرین ۵ الفبای ایتالیایی را با تلفظ هر حرف نشان می‌دهد (مثلاً H = acca، J = i lunga، K = kappa، W = doppia vu) — باید گوش بدهی و تکرار کنی. تمرین ۶ («c» come ciao) تلفظ حرف c را با کلمات مثال نشان می‌دهد: caffè، piacere، spaghetti، gatto، ciao، cinema، chitarra، gelato، giornale، formaggio، cane، zucchero، medico.',
    explanation: 'L\'alfabeto italiano e la pronuncia delle lettere c/g in diversi contesti.',
    keyPoints: [
      'حرف c قبل از e/i مثل «چ» تلفظ می‌شود (ciao, cinema)، و قبل از a/o/u مثل «ک» (caffè, cane)',
      'حرف g قبل از e/i مثل «ج» تلفظ می‌شود (gelato, formaggio)، و قبل از a/o/u مثل «گ» (gatto, giornale)',
      'حروف بیگانه (J,K,W,X,Y) در الفبای اصلی ایتالیایی نیستند ولی در وام‌واژه‌ها به کار می‌روند',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 9,
    titleFa: 'تمرین ۷: Come si scrive؟',
    explanationFa:
      'بالای صفحه یک تمرین تلفظ است: کلمات ciao، caffè، gelato، gatto را باید بر اساس صدایشان ([tʃ]، [k]، [dʒ]، [g]) دسته‌بندی کنی و قاعده را کامل کنی: حرف «c» قبل از کدام حروف مثل [tʃ] و قبل از کدام مثل [k] تلفظ می‌شود؛ همین سؤال برای «g» و صداهای [dʒ]/[g]. تمرین ۷ («Come si scrive؟» = چطور نوشته می‌شود؟) یک تمرین دونفره است: دانش‌آموز A اسم و فامیلی‌های ستون خودش را دارد و باید آن‌ها را حرف‌به‌حرف با الفبا برای دانش‌آموز B هجی کند (مثل «GI-I-ENNE-O-A-ERRE-GI-I-A-ENNE» برای Gino Argan) و دانش‌آموز B باید بنویسدشان، و بعد جاهای عوض می‌شود.',
    explanation: 'Esercizio di ortografia: come chiedere e dare lo spelling di nomi e cognomi.',
    keyPoints: [
      'Come si scrive؟ = چطور نوشته می‌شود؟ (برای هجی کردن حرف‌به‌حرف)',
      'برای هجی کردن، هر حرف با نام الفبایی‌اش گفته می‌شود (مثلاً G = "gi"، N = "enne")',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 10,
    titleFa: 'تمرین‌های ۸ و ۹: E Lei di dov\'è؟ / Ricostruisci i dialoghi',
    explanationFa:
      'تمرین ۸ («E Lei di dov\'è؟» = شما اهل کجایید؟) تمرین شنیداری تکمیل دیالوگ است: دو دیالوگ درباره‌ی ملیت و اهل‌کجا بودن (یکی رسمی بین دو مسافر هواپیما با «di dove sei» جای‌خالی، یکی غیررسمی بین دو نفر در ساحل) را باید با گوش دادن کامل کنی. کادر آبی تفاوت «Tu di dove sei؟» (غیررسمی) و «Lei di dov\'è؟» (رسمی) را نشان می‌دهد. تمرین ۹ («Ricostruisci i dialoghi» = دیالوگ‌ها را بازسازی کن) سه دیالوگ کوتاه ناقص را با سه جمله‌ی داده‌شده (a: «Sì. E Lei è italiana؟»، b: «Io sono italiana. E tu؟»، c: «Sei svizzera؟») کامل می‌کند. کادر آبی سمت راست هم لیست کشورها و صفت‌های ملیتِ متناظرشان را می‌دهد (Italia→italiano/a، Germania→tedesco/a، Austria→austriaco/a، Svizzera→svizzero/a، Spagna→spagnolo/a، Inghilterra→inglese، Irlanda→irlandese، Portogallo→portoghese، Francia→francese).',
    explanation: 'Chiedere e dire la nazionalità/provenienza, formale e informale.',
    keyPoints: [
      'Di dove sei؟ (غیررسمی) در برابر Di dov\'è؟ (رسمی) = اهل کجایی/کجایید؟',
      'صفت‌های ختم‌شونده به -o مثل italiano در مؤنث به -a تبدیل می‌شوند (italiana)',
      'صفت‌های ختم‌شونده به -e مثل inglese/francese در مذکر و مؤنث یکسان‌اند',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 11,
    titleFa: 'تمرین‌های ۱۰ و ۱۱ + شماره‌ها: Tu o Lei؟ / Lei è francese؟ / Numeri',
    explanationFa:
      'تمرین ۱۰ («Tu o Lei؟») یک تمرین شنیداری است: باید به ۶ دیالوگ کوتاه گوش بدهی و مشخص کنی در هرکدام طرفین با tu صحبت می‌کنند یا با Lei. تمرین ۱۱ («Lei è francese؟») تمرین گفتاری دونفره است: دانش‌آموز A یک شهر از گروه اول (Parigi, Roma, Londra, Berlino) و B یک شهر از گروه دوم (Madrid, Vienna, Berna, Lisbona) انتخاب می‌کند و طبق الگوی داده‌شده با فرم رسمی (Lei) و غیررسمی (tu) دیالوگ می‌سازند. زیرش بخش «Numeri» (اعداد) اعداد ۰ تا ۲۰ را با نوشتارشان نشان می‌دهد (zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci, undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove, venti) — باید گوش بدهی و تکرار کنی.',
    explanation: 'Distinguere tu/Lei all\'ascolto; i numeri cardinali da 0 a 20.',
    keyPoints: [
      'اعداد ۰ تا ۲۰: zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci...',
      'venti = بیست؛ از ۱۱ تا ۱۶ اعداد شکل ویژه دارند (undici, dodici, tredici, quattordici, quindici, sedici)',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 12,
    titleFa: 'تمرین‌های ۲، ۳ و ۴ (E inoltre): شماره تلفن و آدرس',
    explanationFa:
      'تمرین ۲ («Qual è il Suo numero di telefono؟» = شماره تلفن شما چنده؟) یک دیالوگ شنیداری تکمیلی درباره‌ی آدرس و شماره تلفن است. کادر آبی تفاوت پرسیدن با «Lei» («Qual è il Suo numero...؟»، «Come, scusi؟») و با «tu» («Qual è il tuo numero...؟»، «Come, scusa؟») را نشان می‌دهد؛ کادر نارنجی هم صرف فعل avere (داشتن) را برای io/tu/Lei می‌دهد (ho/hai/ha). تمرین ۳ («Che numero è؟») یک بازی دونفره است: هرکس هفت عدد از ۰ تا ۲۰ در ذهنش انتخاب می‌کند، آن‌ها را با صدا برای هم‌کلاسی‌اش می‌گوید و او آن‌ها را می‌نویسد، بعد نتیجه را مقایسه می‌کنند. تمرین ۴ («Primo incontro» = اولین ملاقات) یک فعالیت گروهی است: هر دانش‌آموز اطلاعات خیالی (اسم، فامیل، کشور، شماره تلفن) روی کاغذ می‌نویسد و بقیه با پرسیدن سؤال این اطلاعات را از او درمی‌آورند.',
    explanation: 'Chiedere numero di telefono e indirizzo; coniugazione del verbo avere.',
    keyPoints: [
      '(io) ho، (tu) hai، (Lei) ha — صرف فعل avere',
      'Qual è il Suo/tuo numero di telefono؟ = شماره تلفن شما/تو چنده؟',
      'Come, scusi/scusa؟ = ببخشید، چی گفتید/گفتی؟ (رسمی/غیررسمی)',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 13,
    titleFa: 'بخش comunicazione e grammatica: جمع‌بندی گرامر درس ۱',
    explanationFa:
      'این صفحه جمع‌بندی رسمی گرامر درس است. بالای صفحه زیر «Per comunicare» عبارات کاربردی درس را می‌بینی (سلام و احوال‌پرسی، پرسیدن اسم/ملیت/آدرس/شماره تلفن، خداحافظی‌های مختلف مثل «Arrivederci!»، «A presto!»، «A domani!»). زیرش چند نکته‌ی گرامری توضیح داده شده: ۱) فعل «essere» در حالت مفرد و اینکه در ایتالیایی معمولاً ضمیر فاعلی (io/tu) لازم نیست چون خودِ فعل شخص را نشان می‌دهد، مگر برای تأکید. ۲) شکل رسمی Lei برای مخاطب (چه مرد چه زن). ۳) صفت‌های ملیت در حالت مفرد (italiano/italiana، irlandese برای هر دو جنس). ۴) عنوان‌های شغلی مثل dottore/professore/signore وقتی قبل از اسم خاص می‌آیند حرف e آخرشان حذف می‌شود (dottor Visconti، professor…). ۵) حرف اضافه‌ی di برای نسبت‌دادن به شهر (Sono di Genova). ۶) کلمات پرسشی (come, di dove, qual) که همیشه قبل از فعل یا بعد از حرف اضافه می‌آیند. ۷) حروف تعریف مذکر il و مؤنث la.',
    explanation: 'Riepilogo grammaticale ufficiale della lezione 1: presente di essere/avere/chiamarsi, aggettivi di nazionalità, articoli il/la.',
    keyPoints: [
      'در ایتالیایی معمولاً ضمیر فاعلی لازم نیست: «Sono italiano» کافی است (نه «Io sono italiano»)',
      'Lei = فرم رسمی خطاب، برای هر دو جنس یکسان است',
      'dottore→dottor، professore→professor، signore→signor (قبل از اسم خاص)',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 14,
    titleFa: 'videocorso 1 (بخش اول): داستان دوستان جدید',
    explanationFa:
      'این بخش با ویدیوی همراه کتاب کار می‌کند. تمرین ۱ سه صحنه از ویدیو را نشان می‌دهد و باید قبل از دیدن ویدیو حدس بزنی کدام جمله با هر تصویر جفت می‌شود (مثلاً آیا شخصیت‌ها با «Ciao Laura!» غیررسمی سلام می‌کنند یا «Buongiorno, signora!» رسمی)، سپس ویدیو را ببینی تا حدست را تأیید کنی. کادر سبز «RICORDA» نکته‌ی فرهنگی مهمی می‌دهد: جوان‌های ایتالیایی معمولاً با هم از «tu» استفاده می‌کنند، نه «Lei» — «Lei» بیشتر بین بزرگسالان یا بین یک بزرگسال و یک جوان به کار می‌رود. تمرین ۲ از تو می‌خواهد بعد از دیدن ویدیو به دو سؤال جواب بدهی: اسم آن پسر چیست؟ و اَندرو اهل کجاست؟',
    explanation: 'Prima parte del videocorso: nuove conoscenze nel parco, con nota culturale su tu/Lei tra giovani.',
    keyPoints: [
      'جوانان ایتالیایی معمولاً با هم «tu» به کار می‌برند، نه «Lei»',
      'Lui è... / Lei si chiama... = او (مرد) است.../ او (زن) نامش... است',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 15,
    titleFa: 'videocorso 1 (بخش دوم): تحلیل دیالوگ ویدیو',
    explanationFa:
      'تمرین ۳ از تو می‌خواهد جمله‌های لورا (Laura) در دیالوگ ویدیو را که به‌هم‌ریخته‌اند به ترتیب درست بچینی (مثلاً جواب او به «E lui, di dov\'è؟» را از میان گزینه‌های a تا e پیدا کنی — جواب درست چیزی شبیه «Lui è argentino. Si chiama Rodrigo» است). تمرین ۴ سه روش متفاوت سلام‌کردن بین سه نفر در ویدیو را با جمله‌های داده‌شده جفت می‌کند (مثل «Io sono Andrea. E tu come ti chiami؟» یا «Ehi, Federico! Ciao!»). تمرین ۵ یک تمرین شنیداری پایانی است: باید شماره تلفن درست لورا را از میان سه گزینه (a: 3492547577، b: 3901566597، c: 3401546547) با گوش دادن به بخش آخر ویدیو انتخاب کنی.',
    explanation: 'Seconda parte del videocorso: ricostruzione del dialogo e comprensione dei numeri di telefono.',
    keyPoints: [
      'Ehi, Federico! Ciao! = هی، فدریکو! سلام! (خیلی غیررسمی و صمیمی)',
      'تمرین گوش دادن دقیق به اعداد تلفن یک مهارت کلیدی این بخش است',
    ],
  },
  {
    bookSlug: BOOK_SLUG,
    page: 16,
    titleFa: 'caffè culturale 1: Buongiorno, buona sera o buonanotte؟',
    explanationFa:
      'این صفحه، صفحه‌ی پایانی درس ۱ است و به‌طور دقیق توضیح می‌دهد در چه ساعاتی از کدام سلام استفاده کنیم: از ساعت ۵ تا ۱۳ (صبح) «Buongiorno!»، از ۱۳ تا ۱۹ (بعدازظهر) و ۱۹ تا ۲۳ (شب) «Buona sera!»، و از ۲۳ تا ۵ (نیمه‌شب) «Buonanotte!» — اما «Ciao!» یا «Salve!» در تمام ساعات روز برای سلام‌کردن غیررسمی جواب می‌دهد. برای خداحافظی هم مشابه است: در طول روز «Ci vediamo!»، «Buona giornata!»، «Arrivederci!»، «A presto!» رایج‌اند؛ عصر «Buona sera!» (هم برای سلام هم خداحافظی به کار می‌رود)؛ و قبل از خواب «Buonanotte!». عکس پایین صفحه دو مرد ایتالیایی را نشان می‌دهد که با آغوش گرم همدیگر را می‌بوسند، و متن توضیح می‌دهد ایتالیایی‌ها، به‌خصوص بین دوستان و خانواده، خیلی با محبت و فیزیکی سلام و احوال‌پرسی می‌کنند — و از تو می‌پرسد آیا در کشور خودت هم بغل‌کردن برای احوال‌پرسی بین هم‌جنس یا جنس مخالف رایج است.',
    explanation: 'Pagina culturale finale: quando usare buongiorno/buona sera/buonanotte, e i modi di salutarsi in Italia.',
    keyPoints: [
      'Buongiorno (۵ تا ۱۳)، Buona sera (۱۳ تا ۲۳)، Buonanotte (۲۳ تا ۵) — Ciao/Salve همیشه جواب می‌دهد',
      'با Lei برای خداحافظی: ArrivederLa!  — با tu: Arrivederci!',
      'این صفحه پایان درس ۱ است؛ صفحه‌ی بعد به درس ۲ می‌رود',
    ],
  },
];
