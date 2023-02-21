const elBtnLang = document.querySelector("[data-lang-btn]");
const elLogoText = document.querySelector("[data-logo-text]");
const elHomePage = document.querySelector("[data-home-page]");
const elHospitalHeader = document.querySelector("[data-hospital-header]");
const elXizmatlar = document.querySelector("[data-xizmatlar]");
const elDoctorsLink = document.querySelector("[data-doctors-link]");
const elNewsLink = document.querySelector("[data-news-link]");
const elLocationLink = document.querySelector("[data-location-link]");
const elReviewsLink = document.querySelector("[data-reviews-link]");
const elEndingLink = document.querySelector("[data-ending-link]");
const elH2Swiper = document.querySelector("[data-h2-swiper]");
const elInfoSwiper = document.querySelector("[data-info-swiper]");
const elSecondH2Swiper = document.querySelector("[data-second-swiper-title]");
const elSecondInfoSwiper = document.querySelector("[data-second-info-swiper]");
const elLastTitleSwiper = document.querySelector("[data-last-title-swiper]");
const elLastInfoSwiper = document.querySelector("[data-last-info-swiper]");
const elServiceTitle = document.querySelector("[data-service-title]");
const elServiceInfo = document.querySelector("[data-service-info]");
const elShifokorMaslahati = document.getElementById("xizmatlar");
const elDoctorAdviceInfo = document.querySelector("[data-doctor-advice-info]");
const elAnalysesTitle = document.querySelector("[data-analyses-title]");
const elAnalysesInfo = document.querySelector("[data-analyses-info]");
const elFunctionalDiagnosticTitle = document.querySelector(
  "[data-function-diagnostic]"
);
const elFunctionalDiagnosticInfo = document.querySelector(
  "[data-function-diagnostic-info]"
);
const elRontgenTitle = document.querySelector("[data-rontgen-title]");
const elRontgenInfo = document.querySelector("[data-rontgen-info]");
const elHospitalTitle = document.querySelector("[data-hospital-title]");
const elHospitalInfo = document.querySelector("[data-hospital-info");
const elTechTitle = document.querySelector("[data-tech-title]");
const elTechInfo = document.querySelector("[data-tech-info]");
const elFizTitle = document.querySelector("[data-fiz-title]");
const elFizInfo = document.querySelector("[data-fiz-info]");
const elTerapiyaTitle = document.querySelector("[data-terapiya-title]");
const elTerapiyaInfo = document.querySelector("[data-terapiya-info]");
const elGynecologyTitle = document.querySelector("[data-gynecology-title]");
const elGynecologyInfo = document.querySelector("[data-gynecology-info]");
const elLORTitle = document.querySelector("[data-lor-title]");
const elLORInfo = document.querySelector("[data-lor-info]");
const elStomatologyTitle = document.querySelector("[data-stomatology-title]");
const elStomatologyInfo = document.querySelector("[data-stomatology-info]");
const elUziTitle = document.querySelector("[data-uzi-title]");
const elUziInfo = document.querySelector("[data-uzi-info]");
const elEkgTitle = document.querySelector("[data-ekg-title]");
const elEkgInfo = document.querySelector("[data-ekg-info]");
const elHospitalHistoryTitle = document.querySelector(
  "[data-hospital-history-title]"
);
const elHospitalHistoryInfo = document.querySelector(
  "[data-hospital-history-info]"
);
const elNewsTitle = document.querySelector("[data-news-title]");
const elNewsInfo = document.querySelector("[data-news-info]");
const elNewsDayTitle = document.querySelector("[data-news-day-title]");
const elNewsDayInfo = document.querySelector("[data-news-day-info]");
const elFatmanTitle = document.querySelector("[data-fatman-title]");
const elFatmanInfo = document.querySelector("[data-fatman-info]");
const elWalnutTitle = document.querySelector("[data-walnut-title]");
const elWalnutInfo = document.querySelector("[data-walnut-info]");
const elFactTitlePill = document.querySelector("[data-fact-title-pill]");
const elFactInfoPill = document.querySelector("[data-fact-info-pill]");
const elFactTitleBrain = document.querySelector("[data-fact-title-brain]");
const elFactInfoBrain = document.querySelector("[data-fact-info-brain]");
const elFactTitleSugar = document.querySelector("[data-fact-title-sugar]");
const elFactInfoSugar = document.querySelector("[data-fact-info-sugar]");
const elFactTitleSpider = document.querySelector("[data-fact-title-spider]");
const elFactInfoSpider = document.querySelector("[data-fact-info-spider]");
const elFactTitleHeart = document.querySelector("[data-fact-title-heart]");
const elFactInfoHeart = document.querySelector("[data-fact-info-heart]");
const elBloodTitle = document.querySelector("[data-blood-title]");
const elBloodInfo = document.querySelector("[data-blood-info]");
const elDataDilnoza = document.querySelector("[data-data-dilnoza]");
const elNameDilnoza = document.querySelector("[data-name-dilnoza]");
const elReviewDilnoza = document.querySelector("[data-dilnoza-review]");
const elNameDavlatbek = document.querySelector("[data-name-davlatbek]");
const elDataDavlatbek = document.querySelector("[data-data-davlatbek]");
const elReviewDavlatbek = document.querySelector("[data-review-davlatbek]");
const elNameJonibek = document.querySelector("[data-name-jonibek]");
const elDataJonibek = document.querySelector("[data-data-jonibek]");
const elReviewJonibek = document.querySelector("[data-review-jonibek]");
const elFooterLogo = document.querySelector("[data-footer-logo]");
const elFooterPageLink = document.querySelector("[data-footer-page-link]");
const elFooterHospital = document.querySelector("[data-hospital-footer]");
const elFooterService = document.querySelector("[data-service-footer]");
const elDoctorsFooter = document.querySelector("[data-doctors-footer]");
const elNewsFooter = document.querySelector("[data-news-footer]");
const elLocationFooter = document.querySelector("[data-location-footer]");
const elReviewFooter = document.querySelector("[data-review-footer]");
const elEndingPage = document.querySelector("[data-footer-page-ending-link]");
const elLastText = document.querySelector("[data-last-text]");
const elHospitalLastText = document.querySelector("[data-hospital-last-text]");

elBtnLang.addEventListener("click", () => {
  elBtnLang.textContent = elBtnLang.textContent == "Uz" ? "Ru" : "Uz";
  elLogoText.textContent =
    elLogoText.textContent == "№1 Shahar Shifoxonasi"
      ? "№1 Городская больница"
      : "№1 Shahar Shifoxonasi";
  elHomePage.textContent =
    elHomePage.textContent == "Bosh sahifa"
      ? "Главная страница"
      : "Bosh sahifa";
  elHospitalHeader.textContent =
    elHospitalHeader.textContent == "Shifoxona haqida"
      ? "О больнице"
      : "Shifoxona haqida";
  elXizmatlar.textContent =
    elXizmatlar.textContent == "Xizmatlar" ? "Услуги" : "Xizmatlar";
  elDoctorsLink.textContent =
    elDoctorsLink.textContent == "Mutaxassislar"
      ? "Специалисты"
      : "Mutaxassislar";
  elNewsLink.textContent =
    elNewsLink.textContent == "Maqolalar va yangiliklar"
      ? "Новости"
      : "Maqolalar va yangiliklar";
  elLocationLink.textContent =
    elLocationLink.textContent == "Lokatsiya" ? "Локация" : "Lokatsiya";
  elReviewsLink.textContent =
    elReviewsLink.textContent == "Sharhlar" ? "Отзывы" : "Sharhlar";
  elEndingLink.textContent =
    elEndingLink.textContent == "Sahifaning oxiri"
      ? "Конец страницы"
      : "Sahifaning oxiri";
  elH2Swiper.textContent =
    elH2Swiper.textContent == "С нами ваше здоровье будет под надежной защитой!"
      ? "Biz bilan sog'lig'ingiz ishonchli himoya ostida bo'ladi!"
      : "С нами ваше здоровье будет под надежной защитой!";
  elInfoSwiper.textContent =
    elInfoSwiper.textContent ==
    "1-я городская больница - это многопрофильная больница терапия, неврология, гинекология, хирургия, отделения урологии, ЛОР, реанимации и диагностики имеются регистрационные единицы. В разделе диагностики все виды проверок сделаны, самое время Лабораторная биохимия крови, отвечающая требованиям анализы и другие гормоны гепатит B C проводятся тесты на Covid 19 и ВИЧ."
      ? "1-Shahar Shifoxonasi - Ko'p tarmoqli shifoxona bo'lib bu yerda terapiya, nevralogiya, genikologiya, xirurgiya, urologiya, lor, reanimatsiya bo'limlari hamda diagnostika ro'yxatga olish bo'limlari mavjud. Diagnostika bo'limida barcha turdagi tekshirishlar amalga oshiriladi, yuqori zamon talablarga javob beradigan labaratoriya qonning bio ximiya tahlillari va boshqa har xil garmonlar gepatit B C tekshirishlar Covid 19 hamda VICH amalga oshiriladi."
      : "1-я городская больница - это многопрофильная больница терапия, неврология, гинекология, хирургия, отделения урологии, ЛОР, реанимации и диагностики имеются регистрационные единицы. В разделе диагностики все виды проверок сделаны, самое время Лабораторная биохимия крови, отвечающая требованиям анализы и другие гормоны гепатит B C проводятся тесты на Covid 19 и ВИЧ.";
  elSecondH2Swiper.textContent =
    elSecondH2Swiper.textContent ==
    "С нами ваше здоровье будет под надежной защитой!"
      ? "Biz bilan sog'lig'ingiz ishonchli himoya ostida bo'ladi!"
      : "С нами ваше здоровье будет под надежной защитой!";
  elSecondInfoSwiper.textContent =
    elSecondInfoSwiper.textContent ==
    "80% от 20% бюджета платной больницы самофинансирование"
      ? "Pullik xizmat ko'rsatuvchi shifoxonaning 20% budjetidan 80% o'z o'zini moliyashtirish"
      : "80% от 20% бюджета платной больницы самофинансирование";
  elLastTitleSwiper.textContent =
    elLastTitleSwiper.textContent ==
    "С нами ваше здоровье будет под надежной защитой!"
      ? "Biz bilan sog'lig'ingiz ishonchli himoya ostida bo'ladi!"
      : "С нами ваше здоровье будет под надежной защитой!";
  elLastInfoSwiper.textContent =
    elLastInfoSwiper.textContent ==
    "Доцент медицины Самаркандского государственного медицинского университета 15 человек во главе с кандидатом наук Досановым и студенты проходят обучающие занятия и практикуются с пациентами ходит на занятия. Пришла и собственная кафедра терапии работает."
      ? "Samarqand tibbiyot davlat unversitetlari datsent tibbiyot fanlari nomzodi Do'sanov boshchilikida 15 kishi hamda talabalar o'quv darslarini o'tib, bemorlar bilan amaliyot darslarini o'tab kelmoqda. Terapiya kafedrasi kelib o'z faoliyatini olib bormoqda."
      : "Доцент медицины Самаркандского государственного медицинского университета 15 человек во главе с кандидатом наук Досановым и студенты проходят обучающие занятия и практикуются с пациентами ходит на занятия. Пришла и собственная кафедра терапии работает.";
  elServiceTitle.textContent =
    elServiceTitle.textContent == "Shifoxonamiz xizmatlari"
      ? "Услуги нашей больницы"
      : "Shifoxonamiz xizmatlari";
  elServiceInfo.textContent =
    elServiceInfo.textContent ==
    "Платные услуги оказываются пациентам на платной основе. Увеличивается по диагностическому отделу, в процессе вскрытия отдела реабсорбции. В больнице также есть палаты повышенной комфортности. В нашей больнице проводятся назальные и хирургические вмешательства, и все процедуры проводятся на основе высоких технологий. Диагноз верный на 100%."
      ? "Pullik xizmat asosida bemorlarga pulli xizmat ko'rsatiladi. Diagnoztik bo'limga qarab oshiriladi, reabloitatsiya bo'limini ochish harakatida. Shifoxonada lux xonalar ham mavjud. Shifoxonamizda nazalogiya va jarohlik muolajalari qilinadi, hamda barcha muolajalar yuqori texnologiyalar asosida bo'lib o'tadi. Tashxis 100% to'gri belgilanadi."
      : "Платные услуги оказываются пациентам на платной основе. Увеличивается по диагностическому отделу, в процессе вскрытия отдела реабсорбции. В больнице также есть палаты повышенной комфортности. В нашей больнице проводятся назальные и хирургические вмешательства, и все процедуры проводятся на основе высоких технологий. Диагноз верный на 100%.";
  elShifokorMaslahati.textContent =
    elShifokorMaslahati.textContent == "Совет доктора"
      ? "Shifokor maslahati"
      : "Совет доктора";
  elDoctorAdviceInfo.textContent =
    elDoctorAdviceInfo.textContent ==
    "Всемирно известные квалифицированные врачи ставят диагнозсвоевременное и эффективное лечение определять."
      ? "Dunyoga mashhur malakali shifokorlar to'g'ri tashxis qo'yishadi va o'z vaqtida va samarali davolanishni belgilaydilar."
      : "Всемирно известные квалифицированные врачи ставят диагнозсвоевременное и эффективное лечение определять.";
  elAnalysesTitle.textContent =
    elAnalysesTitle.textContent == "Анализы" ? "Analizlar" : "Анализы";

  elAnalysesInfo.textContent =
    elAnalysesInfo.textContent ==
    "Лаборатория нового поколения. Самые быстрые и точные результаты помогает поставить правильный диагноз."
      ? "Yangi avlod laboratoriyasi. Eng tezkor va aniq natijalar to'g'ri tashxis qo'yishga yordam beradi."
      : "Лаборатория нового поколения. Самые быстрые и точные результаты помогает поставить правильный диагноз.";
  elFunctionalDiagnosticTitle.textContent =
    elFunctionalDiagnosticTitle.textContent == "Функциональная диагностика"
      ? "Funktsional diagnostika"
      : "Функциональная диагностика";
  elFunctionalDiagnosticInfo.textContent =
    elFunctionalDiagnosticInfo.textContent ==
    "Департамент - органы, использующие самые точные методы диагностика заболеваний и их функциональные возможности занимается оценкой."
      ? "Kafedra - eng aniq usullardan foydalangan holda organlar kasalliklarini tashxislash va ularning funksionalligini baholash bilan shug'ullanadi."
      : "Департамент - органы, использующие самые точные методы диагностика заболеваний и их функциональные возможности занимается оценкой.";
  elRontgenTitle.textContent =
    elRontgenTitle.textContent == "Рентген" ? "Rentgen" : "Рентген";
  elRontgenInfo.textContent =
    elRontgenInfo.textContent ==
    "Современное оборудование позволяет снимать изображения с высочайшим разрешением позволяет проводить лучевую диагностику."
      ? "Zamonaviy uskunalar eng yuqori aniqlikdagi tasvirlarni olish bilan radiatsiya diagnostikasini amalga oshirish imkonini beradi."
      : "Современное оборудование позволяет снимать изображения с высочайшим разрешением позволяет проводить лучевую диагностику.";
  elHospitalTitle.textContent =
    elHospitalTitle.textContent == "Больница" ? "Shifoxona" : "Больница";
  elHospitalInfo.textContent =
    elHospitalInfo.textContent ==
    "Уютно, чисто и светло для комфортного проживания пациентов номера. Также имеются номера Делюкс."
      ? "Bemorlarning qulay yashashi uchun qulay, toza va yorug' xonalar. Lux xonalar ham mavjud."
      : "Уютно, чисто и светло для комфортного проживания пациентов номера. Также имеются номера Делюкс.";
  elTechTitle.textContent =
    elTechTitle.textContent == "Высокотехнологичная медицинская помощь"
      ? "Yuqori texnologiyali tibbiy yordam"
      : "Высокотехнологичная медицинская помощь";
  elTechInfo.textContent =
    elTechInfo.textContent ==
    "Передовая медицина для лечения сложных заболеваний медицинская помощь с использованием технологий."
      ? "Murakkab kasalliklarni davolash uchun yuqori tibbiy texnologiyalardan foydalangan holda tibbiy yordam."
      : "Передовая медицина для лечения сложных заболеваний медицинская помощь с использованием технологий.";
  elFizTitle.textContent =
    elFizTitle.textContent == "Физиотерапия" ? "Fizioterapiya" : "Физиотерапия";
  elFizInfo.textContent =
    elFizInfo.textContent ==
    "Физиотерапия для пациентов проводится физиотерапевтами максимальная свобода движений тела в течение жизни и разработка, сопровождение и восстановление функционала услуга, предоставляемая с целью."
      ? "Fizioterapiya - bu fizioterapevtlar tomonidan bemorlarga hayot davomida tananing maksimal harakat erkinligi va funksionalligini rivojlantirish, saqlash va tiklash maqsadida ko'rsatiladigan xizmat."
      : "Физиотерапия для пациентов проводится физиотерапевтами максимальная свобода движений тела в течение жизни и разработка, сопровождение и восстановление функционала услуга, предоставляемая с целью.";
  elTerapiyaTitle.textContent =
    elTerapiyaTitle.textContent == "Терапия" ? "Terapiya" : "Терапия";
  elTerapiyaInfo.textContent =
    elTerapiyaInfo.textContent ==
    "Терапия - консервативные методы: (фармакотерапия), антибактериальные (химиотерапия, антибиотикотерапия) и гормональные вещества; сыворотки и вакцины, различные ионизаторы лучи; климат, грязи, минеральные воды, массаж, электричество и другие физические факторы."
      ? "Terapiya - konservativ usullar: (farmakoterapiya), antibakterial (kimyoterapiya, antibiotikoterapiya) va gormonal moddalar; zardob va vaksinalar, turli ionlovchi nurlar; iqlim, balchiq, mineral suvlar, massaj, elektr toki va boshqa fizik omillar (sanatoriy va kurortlarda davolash) va fizioterapiya."
      : "Терапия - консервативные методы: (фармакотерапия), антибактериальные (химиотерапия, антибиотикотерапия) и гормональные вещества; сыворотки и вакцины, различные ионизаторы лучи; климат, грязи, минеральные воды, массаж, электричество и другие физические факторы.";
  elGynecologyTitle.textContent =
    elGynecologyTitle.textContent == "Гинекология"
      ? "Ginekologiya"
      : "Гинекология";
  elGynecologyInfo.textContent =
    elGynecologyInfo.textContent ==
    "Гинекология занимается только женским телом заболевания, в первую очередь женской репродуктивной раздел медицины, изучающий системные заболевания. Врач-гинеколог следит за состоянием женских половых органов и путем предотвращения болезней."
      ? "Ginekologiya - bu faqat ayol tanasiga xos bo'lgan kasalliklarni, birinchi navbatda, ayollarning reproduktiv tizimi kasalliklarini o'rganadigan tibbiyot sohasi. Ginekolog ayol jinsiy a'zolarining holatini kuzatish va kasalliklar mavjud bo'lganda ularni oldini olish bilan shu'gullanadi"
      : "Гинекология занимается только женским телом заболевания, в первую очередь женской репродуктивной раздел медицины, изучающий системные заболевания. Врач-гинеколог следит за состоянием женских половых органов и путем предотвращения болезней.";
  elLORTitle.textContent = elLORTitle.textContent == "ЛОР" ? "LOR" : "ЛОР";
  elLORInfo.textContent =
    elLORInfo.textContent ==
    "Оториноларингология – это ухо, горло, нос, голова и диагностика и лечение патологий шеи специализированная медицинская область и медицинская специальность. Оториноларинголог или ЛОР-врач или в быту (ухо-горло-нос) - это специальный практический врач"
      ? "Otorinolaringologiya - bu quloq, tomoq, burun, bosh va bo'yin patologiyalarini tashxislash va davolashga ixtisoslashgan tibbiyot sohasi va tibbiyot mutaxassisligi. Otorinolaringolog yoki KBB shifokori yoki kundalik hayotda (quloq-burun-tomoq) - bu mutaxassislik bo'yicha amaliyot shifokori."
      : "Оториноларингология – это ухо, горло, нос, голова и диагностика и лечение патологий шеи специализированная медицинская область и медицинская специальность. Оториноларинголог или ЛОР-врач или в быту (ухо-горло-нос) - это специальный практический врач";
  elStomatologyTitle.textContent =
    elStomatologyTitle.textContent == "Стоматология"
      ? "Stomatologiya"
      : "Стоматология";
  elStomatologyInfo.textContent =
    elStomatologyInfo.textContent ==
    "Стоматология — раздел медицины, изучающий зубы, их строение и функции, заболевания, методы профилактики и лечения, а также заболевания полости рта, челюстей и пограничных областей лица и шеи. Стоматолог – специалист в области стоматологии."
      ? "Stomatologiya - tishlar, ularning tuzilishi va faoliyati, kasalliklari, oldini olish va davolash usullari, shuningdek, og'iz bo'shlig'i, jag'lar va yuz va bo'yinning chegara sohalari kasalliklarini o'rganadigan tibbiyot sohasi. Tish shifokori - stomatologiya bo'yicha mutaxassis."
      : "Стоматология — раздел медицины, изучающий зубы, их строение и функции, заболевания, методы профилактики и лечения, а также заболевания полости рта, челюстей и пограничных областей лица и шеи. Стоматолог – специалист в области стоматологии.";
  elUziTitle.textContent = elUziTitle.textContent == "УЗИ" ? "UZI" : "УЗИ";
  elUziInfo.textContent =
    elUziInfo.textContent ==
    "Ультразвуковое исследование, сонография – неинвазивное обследование организма человека или животного с помощью ультразвуковых волн."
      ? "Ultratovush tekshiruvi, sonografiya - ultratovush to'lqinlari yordamida inson yoki hayvon tanasini invaziv bo'lmagan tekshirish."
      : "Ультразвуковое исследование, сонография – неинвазивное обследование организма человека или животного с помощью ультразвуковых волн.";
  elEkgTitle.textContent = elEkgTitle.textContent == "ЭКГ" ? "EKG" : "ЭКГ";
  elEkgInfo.textContent =
    elEkgInfo.textContent ==
    "Электрокардиография — метод регистрации и изучения электрических полей, возникающих при работе сердца. Электрокардиография является относительно дешевым, но ценным методом электрофизиологической инструментальной диагностики в кардиологии."
      ? "Elektrokardiografiya - bu yurak ishi paytida hosil bo'lgan elektr maydonlarini qayd etish va o'rganish usuli. Elektrokardiografiya kardiologiyada elektrofiziologik instrumental diagnostikaning nisbatan arzon, ammo qimmatli usuli hisoblanadi."
      : "Электрокардиография — метод регистрации и изучения электрических полей, возникающих при работе сердца. Электрокардиография является относительно дешевым, но ценным методом электрофизиологической инструментальной диагностики в кардиологии.";
  elHospitalHistoryTitle.textContent =
    elHospitalHistoryTitle.textContent == "О нашей больнице"
      ? "Shifoxonamiz haqida"
      : "О нашей больнице";
  elHospitalHistoryInfo.textContent =
    elHospitalHistoryInfo.textContent ==
    "Состояние больницы было плачевным, пока 24 декабря 2013 года не была назначена главврачом Худойбердиева Манзура. Было много отключений электричества, газоснабжения, канализации. До 2020 года 3-й этаж был полностью отремонтирован и превращен в номера класса люкс, созданы все удобства."
      ? "Bosh shifokor Xudoyberdiyeva Manzura 2013-yil 24-dekabrda tayinganligiga qadar shifoxonaning sharoitlari achinarli ahvolda edi. Oylab chiroq uchishi, gaz taminoti, kanalizatsiya uzulishlari katta edi. 2020-yil 3-qavatgacha to'liq tamirdan chiqarilib lux xonalar qilinib, barcha qulayliklar shar sharoitlar yaratildi."
      : "Состояние больницы было плачевным, пока 24 декабря 2013 года не была назначена главврачом Худойбердиева Манзура. Было много отключений электричества, газоснабжения, канализации. До 2020 года 3-й этаж был полностью отремонтирован и превращен в номера класса люкс, созданы все удобства.";
  elNewsTitle.textContent =
    elNewsTitle.textContent == "Новости" ? "Yangiliklar" : "Новости";
  elNewsInfo.textContent =
    elNewsInfo.textContent ==
    "Будьте в курсе новостей, событий и рекламных акций нашей больницы. Поскольку регулярно посещать сайт неудобно, вы можете следить за новостями через наш Telegram-канал или подписаться на рассылку новостей. Мы тщательно следим за качеством и актуальностью контента и не беспокоим наших подписчиков по пустякам."
      ? "Shifoxonamiz yangiliklari, voqealari va reklama aktsiyalaridan xabardor bo'ling. Saytga muntazam tashrif buyurish unchalik qulay emasligi sababli, yangiliklarni Telegram kanalimiz orqali kuzatib borishingiz yoki yangiliklar byulleteniga obuna bo'lishingiz mumkin. Biz kontentning sifati va dolzarbligini diqqat bilan kuzatib boramiz va obunachilarimizni bekorga bezovta qilmaymiz."
      : "Будьте в курсе новостей, событий и рекламных акций нашей больницы. Поскольку регулярно посещать сайт неудобно, вы можете следить за новостями через наш Telegram-канал или подписаться на рассылку новостей. Мы тщательно следим за качеством и актуальностью контента и не беспокоим наших подписчиков по пустякам.";
  elNewsDayTitle.textContent =
    elNewsDayTitle.textContent == "Новости дня"
      ? "Kun yangiligi"
      : "Новости дня";
  elNewsDayInfo.textContent =
    elNewsDayInfo.textContent ==
    "При этом санитарно-эпидемиологический контроль и на вакцинных складах службы здравоохранения Запас 5,9 млн доз вакцины против COVID-19 есть."
      ? "Ayni paytda Sanitariya-epidemiologiya nazorati va sog‘liqni saqlash xizmatining vaksina omborlarida COVID-19 ga qarshi 5,9 million doza vaksina zaxirasi mavjud."
      : "При этом санитарно-эпидемиологический контроль и на вакцинных складах службы здравоохранения Запас 5,9 млн доз вакцины против COVID-19 есть.";
  elFatmanTitle.textContent =
    elFatmanTitle.textContent == "Эффективный способ похудеть"
      ? "Ozishning samarali usuli"
      : "Эффективный способ похудеть";
  elFatmanInfo.textContent =
    elFatmanInfo.textContent ==
    "Более 37 000 американских рабочих, страдающих от различных стадий ожирения, будут терять 25 долларов в год, потому что США должны набирать вес в течение всего года."
      ? "Semizlikning turli bosqichlari bilan aziyat chekayotgan AQSH ning 37 mingdan ziyod xizmatchilari yil davomida 25$ yo'qotishadi, chunki AQSHda yil davomida vazn tashash lozim."
      : "Более 37 000 американских рабочих, страдающих от различных стадий ожирения, будут терять 25 долларов в год, потому что США должны набирать вес в течение всего года.";
  elWalnutTitle.textContent =
    elWalnutTitle.textContent == "Об орехах"
      ? "Yong’oqlar haqida"
      : "Об орехах";
  elWalnutInfo.textContent =
    elWalnutInfo.textContent ==
    "По данным калифорнийских ученых, человек, который съедает 5 грецких орехов в неделю, может прожить в среднем на 7 лет дольше."
      ? "Kaliforniyalik olimlarning qayd qilishlaricha, haftasiga 5 dona yong’oq yegan inson o’rtacha 7 yil ko’proq umr ko’rishi mumkin ekan."
      : "По данным калифорнийских ученых, человек, который съедает 5 грецких орехов в неделю, может прожить в среднем на 7 лет дольше.";
  elFactTitlePill.textContent =
    elFactTitlePill.textContent == "Забавный факт"
      ? "Qiziqarli Fakt"
      : "Забавный факт";
  elFactInfoPill.textContent =
    elFactInfoPill.textContent ==
    "По данным канадских ученых, цитрусовые и яблочные соки препятствуют всасыванию некоторых лекарств."
      ? "Kanadalik olimlarning aniqlashicha, sitrus va olma sharbatlari ba’zi dori vositalarining so’rilishiga to’sqinlik qilar ekan."
      : "По данным канадских ученых, цитрусовые и яблочные соки препятствуют всасыванию некоторых лекарств.";
  elFactTitleBrain.textContent =
    elFactTitleBrain.textContent == "Забавный факт"
      ? "Qiziqarli Fakt"
      : "Забавный факт";
  elFactInfoBrain.textContent =
    elFactInfoBrain.textContent ==
    "Один человеческий мозг генерирует за день больше электрических импульсов, чем все телефоны в мире."
      ? "Bitta inson miyasi bir kunda dunyodagi barcha telefonlarga qaraganda ko’proq elektrik impulslar ishlab chiqaradi."
      : "Один человеческий мозг генерирует за день больше электрических импульсов, чем все телефоны в мире.";
  elFactTitleSugar.textContent =
    elFactTitleSugar.textContent == "Забавный факт"
      ? "Qiziqarli Fakt"
      : "Забавный факт";
  elFactInfoSugar.textContent =
    elFactInfoSugar.textContent ==
    "Сахар ускоряет заживление ран — если посыпать сахаром небольшую ранку, она быстрее заживет и боль уменьшится."
      ? "Shakar jarohatlarning bitishini tezlashtiradi — agar kichikroq jarohat ustiga shakar sepilsa, u tezroq tuzaladi va og’riq tezroq kamayadi."
      : "Сахар ускоряет заживление ран — если посыпать сахаром небольшую ранку, она быстрее заживет и боль уменьшится.";
  elFactTitleSpider.textContent =
    elFactTitleSpider.textContent == "Забавный факт"
      ? "Qiziqarli Fakt"
      : "Забавный факт";
  elFactInfoSpider.textContent =
    elFactInfoSpider.textContent ==
    "За свою жизнь человек проглатывает в среднем 8 маленьких пауков."
      ? "Odam butun hayoti davomida o’rtacha miqdorda 8 ta kichik o’rgimchakni yutib yuboradi."
      : "За свою жизнь человек проглатывает в среднем 8 маленьких пауков.";
  elFactTitleHeart.textContent =
    elFactTitleHeart.textContent == "Забавный факт"
      ? "Qiziqarli Fakt"
      : "Забавный факт";
  elFactInfoHeart.textContent =
    elFactInfoHeart.textContent ==
    "Размер сердца человека примерно равен размеру его кулака. Сердце взрослого человека весит около 220-260 граммов."
      ? "Insonning yuragi kattaligi taxminan uning mushti kattaligiga tengdir. Katta yoshdagi kishi yuragining og’irligi 220-260 gramm atrofida."
      : "Размер сердца человека примерно равен размеру его кулака. Сердце взрослого человека весит около 220-260 граммов.";
  elBloodTitle.textContent =
    elBloodTitle.textContent == "Забавный факт"
      ? "Qiziqarli Fakt"
      : "Забавный факт";
  elBloodInfo.textContent =
    elBloodInfo.textContent ==
    "В среднем лейкоциты живут в организме человека 2-4 дня, а эритроциты 3-4 месяца."
      ? "Inson organizmida leykositlar o’rtacha 2-4 kun davomida yashaydi, eritrositlar esa 3-4 oy."
      : "В среднем лейкоциты живут в организме человека 2-4 дня, а эритроциты 3-4 месяца.";
  elNameDilnoza.textContent =
    elNameDilnoza.textContent == "Дильноза" ? "Dilnoza" : "Дильноза";
  elDataDilnoza.textContent =
    elDataDilnoza.textContent == "25 лет, Самарканд."
      ? "25 yosh, Samarqand"
      : "25 лет, Самарканд.";
  elReviewDilnoza.textContent =
    elReviewDilnoza.textContent ==
    "Заранее необходимо заняться профилактикой и лечением различных заболеваний. Городская больница 1 предложила доступные цены на анализы и точные результаты. Спасибо персоналу!"
      ? "Har xil kasalliklarini davolashning oldini olish bilan oldindan shug'ullanish kerak. 1-shahar shifoxonasi test va aniq natijalar uchun arzon narxlarni taklif qildi. Xodimlarga rahmat!"
      : "Заранее необходимо заняться профилактикой и лечением различных заболеваний. Городская больница 1 предложила доступные цены на анализы и точные результаты. Спасибо персоналу!";
  elNameDavlatbek.textContent =
    elNameDavlatbek.textContent == "Давлатбек" ? "Davlatbek" : "Давлатбек";
  elDataDavlatbek.textContent =
    elDataDavlatbek.textContent == "31 год, Самарканд"
      ? "31 yosh, Samarqand"
      : "31 год, Самарканд";
  elReviewDavlatbek.textContent =
    elReviewDavlatbek.textContent ==
    "Медицина в Узбекистане вышла на новый уровень с внедрением необходимых новых методик. Спасибо врачам за профессионализм и заботу."
      ? "O‘zbekistonda meditsinaga kerakli yangi texnikalar kirib kelishi bilan yangi bosqichga ko‘tarildi. Shifokorlarga ularning professionalligi va g'amxo'rligi uchun rahmat."
      : "Медицина в Узбекистане вышла на новый уровень с внедрением необходимых новых методик. Спасибо врачам за профессионализм и заботу.";
  elNameJonibek.textContent =
    elNameJonibek.textContent == "Джонибек" ? "Jonibek" : "Джонибек";
  elDataJonibek.textContent =
    elDataJonibek.textContent == "21 год, Самарканд"
      ? "21 yosh, Samarqand"
      : "21 год, Самарканд";
  elReviewJonibek.textContent =
    elReviewJonibek.textContent ==
    "Отличная клиника, отличный персонал. Цены конечно выше, но причина понятна - сервис один из лучших, это касается и времени приема и его продолжительности, и наличия необходимого оборудования для диагностики."
      ? "Ajoyib klinika, ajoyib xodimlar. Albatta narxlar yuqoriroq, ammo sababi aniq - xizmat eng yaxshilaridan biri, shuningdek qabul qilish vaqti va uning davomiyligi uchun ham amal qiladi, va diagnostika uchun zarur jihozlarning mavjudligi."
      : "Отличная клиника, отличный персонал. Цены конечно выше, но причина понятна - сервис один из лучших, это касается и времени приема и его продолжительности, и наличия необходимого оборудования для диагностики.";
  elFooterLogo.textContent =
    elFooterLogo.textContent == "Городская больница №1"
      ? "№1 Shahar Shifoxonasi"
      : "Городская больница №1";
  elFooterPageLink.textContent =
    elFooterPageLink.textContent == "Главная страница"
      ? "Bosh sahifa"
      : "Главная страница";
  elFooterHospital.textContent =
    elFooterHospital.textContent == "О больнице"
      ? "Shifoxona haqida"
      : "О больнице";
  elFooterService.textContent =
    elFooterService.textContent == "Услуги" ? "Xizmatlar" : "Услуги";
  elDoctorsFooter.textContent =
    elDoctorsFooter.textContent == "Специалисты"
      ? "Mutaxassislar"
      : "Специалисты";
  elNewsFooter.textContent =
    elNewsFooter.textContent == "Статьи и новости"
      ? "Maqolalar va yangiliklar "
      : "Статьи и новости";
  elLocationFooter.textContent =
    elLocationFooter.textContent == "Локация" ? "Lokatsiya" : "Локация";
  elReviewFooter.textContent =
    elReviewFooter.textContent == "Комментарии" ? "Sharhlar" : "Комментарии";
  elEndingPage.textContent =
    elEndingPage.textContent == "Sahifaning oxiri"
      ? "Конец страницы"
      : "Sahifaning oxiri";
  elLastText.textContent =
    elLastText.textContent ==
    "© 2023. Все права защищены. Больница №1 города Самарканда"
      ? "© 2023. Barch huquqlar himoyalangan. Samarqand shahar 1-sonli shifoxonasi"
      : "© 2023. Все права защищены. Больница №1 города Самарканда";
});