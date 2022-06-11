<template>
<div>
    <div v-if="lang === 'EN'" class="page">
    <div class="about-magazine__page">
        <div class="wrapper-box">
            <div class="grey-background">
                <h1 class="about-magazine">О журнале "Проблемы информатики"</h1>
                <h2>Издатель журнала "Проблемы информатики" ­-  Федеральное государственное бюджетное учреждение науки Институт вычислительной математики и математической геофизики Сибирского отделения Российской академии наук</h2>
                <h3>Журнал зарегистрирован в установленном законодательством РФ порядке.</h3>
                <h3>Свидетельство о регистрации СМИ ПИ № ФС77-32088 от 27.05.2008.  ISSN 2073-0667</h3>
                <h2>Распоряжением Минобрнауки России от 31 октября 2019 г. № 412-р по рекомендации президиума ВАК  журнал «Проблемы информатики» включен в Перечень  резензируемых научных изданий, в которых должны быть опубликованы научные результаты диссертаций на соискание ученой степени кандидата наук, на соискание ученой степени доктора наук по трем научным специальностям и соответствующим им отраслям науки, по которым присуждаются ученые степени:</h2>
                <p><span class="p1">05.13.11</span> – Математическое и программное обеспечение вычислительных машин, комплексов и компьютерных сетей (физико-математические науки),</p>
                <p><span class="p1">05.13.17</span> – Теоретические основы информатики (физико-математические науки),</p>
                <p><span class="p1">05.13.18</span> – математическое моделирование, численные методы и комплексы программ (физико-математические науки).</p>
            </div>
            <p class="vak-letter__text">Письмо ВАК:</p>
                <div class="for-letter-box">
                    <img src="../assets/img/l1.jpg">
                    <img src="../assets/img/l2.jpg">
                </div>
            <div class="info">
                <p>Ежеквартальный рецензируемый научный журнал "Проблемы информатики" публикует общетеоретические и методические статьи по вопросам информатики, информационных технологий и их применения</p>
                <p>Журнал адресован научным работникам, аспирантам, программистам, инженерам и студентам, интересующимся результатами фундаментальных и прикладных исследований в области высоких информационных технологий на базе новейших достижений физики,  информатики и компьютерной техники.</p>
                <p>Материалы журнала размещаются на сайте Научной электронной библиотеки, включаются в национальную информационно-аналитическую систему РИНЦ (Российский индекс научного цитирования). Показатели публикационной активности журнала – импакт-фактор РИНЦ, число цитирований, место в рейтинге <span class="p1">SCIENCE INDEX</span> – опубликованы по адресу: <a href="http://elibrary.ru/title_about.asp?id=30275">elibrary.ru</a></p>
                <p>Журнал распространяется по подписке. На сайте "Объединенного каталога "Пресса России" <a href="www.pressa-rf.ru">pressa-rf.ru</a>  можно оформить подписку на 2022 год  на  печатную версию журнала     "Проблемы информатики"  по подписному индексу 69980, а так же подписаться через интернет-магазин «Пресса по подписке» 
                <a href="https://www.akc.ru">akc.ru</a>   Агентство по распространению зарубежных изданий (ОАО "АРЗИ"). </p>
            </div>
            <div class="headings">
            <h2>К публикации в журнале принимаются работы студентов, магистрантов, аспирантов, докторантов, научных сотрудников, занимающихся исследованиями по следующим научным направлениям: </h2>
            <h2 class="vak-letter__text">Рубрики по направлениям:</h2>
                <div class="headings__items">
                <div class="headings__item" @click="makeVisible"><a>1.Теоретическая и системная информатика</a></div>
                <div v-if="visibleFirstHeading" class="invisible-box"><p>1.1. Математическое моделирование</p>
                                           <p>1.2. Методы обработки информации</p>
                                           <p>1.3. Системы образовательной информатики</p>
                                           <p>1.4. Системный анализ, оптимизация и исследование операций</p>
                                           <p>1.5. Математические проблемы теория управления и теория игр</p>
                                           <p>1.6. Языки и системы программирования</p>
                                           <p>1.7. Технологии программирования и конструирования программ</p>
                                           <p>1.8. Системы распределенного и параллельного программирования</p>
                                           <p>1.9. Адаптивные и интеллектуальные системы</p>
                                           <p>1.10. Программные системы и их реализация на ЭВМ</p>
                                           <p>1.11. Теоретические основы программирования и систем информатики</p>
                </div>
                <div class="headings__item" @click=" makeVisibleSecond"><a>2. Прикладные информационные технологии</a></div>
                <div v-if="visibleSecondHeading" class="invisible-box"><p>2.1. Системы текстового поиска</p>
                                           <p>2.2. Системы компьютерной поддержки научных исследований</p>
                                           <p>2.3. Специализированные программные модели и системы</p>
                                           <p>2.4. Системы и технологии интеллектуального анализа данных и распознавания образов</p>
                                           <p>2.5. Специализированные системы обработки и анализа изображений и сигналов</p>
                                           <p>2.6. Средства создания и поддержки электронных библиотек, проблемно-ориентированных баз данных и электронных изданий</p>
                                           <p>2.7. Средства создания и поддержки проблемно-ориентированных систем, основанных на знаниях, и экспертных систем</p>
                                           <p>2.8. Системы визуализации и виртуального окружения</p>
                                           <p>2.9. Информационные технологии в управлении техническими системами и технологическими процессами</p>
                                           <p>2.10. Проблемно-ориентированные системы, основанные на Web-технологиях</p>
                                           <p>2.11. Системы цифровой передачи данных и вычислительные сети</p>
                                           <p>2.12. Радио- и телевизионные системы, радиолокация и связь</p>
                                           <p>2.13. Мобильные системы и сенсорные сети</p>
                                           <p>2.14. Информационные технологии в исследовании естественных и искусственных систем</p>
                                           <p>2.15. Системный анализ и системный подход к проектированию информационных технологий</p>
                                           <p>2.16. Автоматизированные системы для научных исследований</p>
                                           <p>2.17. Автоматизированные системы управления технологическими процессами</p>
                                           <p>2.18. Проектирование интеллектуальных систем</p>
                                           <p>2.19. Управление знаниями в системах телеобучения</p>
                                           <p>2.20. Системы принятия решений</p>
                                           <p>2.21. Искусственные интеллектуальные системы обучения</p>
                                           <p>2.22. Мониторинг интеллектуальных систем</p>
                                           <p>2.23. Автоматизированные информационные системы</p>
                </div>
                <div class="headings__item" @click="makeVisibleThird"><a>3. Суперкомпьютерное моделирование</a></div>
                <div v-if="visibleThirdHeading" class="invisible-box"><p>3.1. Модели динамики вычислительных сетей и систем</p>
                                           <p>3.2. Имитационное моделирование</p>
                                           <p>3.3. Системы и технологии математического моделирования для естественных наук, социальных и экономических процессов</p>
                                           <p>3.4. Моделирование информационных процессов</p>
                                           <p>3.5. Моделирование бизнес процессов</p>
                </div>
                <div class="headings__item" @click="makeVisibleFourth"><a>4. Параллельное системное программирование и вычислительные технологии</a></div>
                <div v-if="visibleFourthHeading" class="invisible-box"><p>4.1. Анализ крупномасштабных вычислительных систем</p>
                                           <p>4.2. Модели параллельных вычислений, включая клеточно-автоматные модели</p>
                                           <p>4.3. Параллельные и распределенные системные и прикладные алгоритмы</p>
                                           <p>4.4. Языки и системы параллельного программирования</p>
                                           <p>4.5. Организация высокопроизводительных вычислений</p>
                                           <p>4.6. Технологии активных знаний</p>
                                           <p>4.7. Крупномасштабное численное моделирование в предметных областях</p>
                                           <p>4.8. Параллельные вычислительные технологии</p>
                                           <p>4.9. Распределенные вычисления и GRID-технологии</p>
                                           <p>4.10. Архитектура, системное и прикладное программное обеспечение компьютеров и суперкомпьютеров</p>
                </div>
                <div class="headings__item" @click="makeVisibleFifth"><a>5. Информатика безопасных систем</a></div>
                <div v-if="visibleFifthHeading" class="invisible-box"><p>5.1. Математические модели и программные средства управления доступом к ресурсам инфо-коммуникационных систем</p>
                                           <p>5.2. Комплексный подход к обеспечению информационной безопасности объектов защиты. Критически важные объекты</p>
                                           <p>5.3. Систематизация угроз, деструктивных информационных воздействий и их источников</p>
                                           <p>5.4. Модели оценки рисков деструктивных информационных воздействий на объекты защиты</p>
                                           <p>5.5. Политика безопасного использования информационных ресурсов</p>
                                           <p>5.6. Критериальные подходы к оценке защищенности информационных технологий</p>
                                           <p>5.7. Методы и средства защиты сетей от деструктивных воздействий</p>
                                           <p>5.8. Инструментальные средства и системы обнаружения вторжений и оперативного реагирования</p>
                                           <p>5.9. Средства и системы анализа состояния работоспособности сетевых структур</p>
                                           <p>5.10. Сертификация инструментальных средств и систем защиты сетевых ресурсов</p>
                                           <p>5.11. Криптография и криптоанализ</p>
                                           <p>5.12. Имитостойкость и криптозащита</p>
                </div>
                <div class="headings__item" @click="makeVisibleSixth"><a>6. Листая старые страницы</a></div>
                <div v-if="visibleSixthHeading" class="invisible-box"><p>Со 2-ого номера 2015 г. введена новая рубрика «Листая старые страницы». В этой рубрике будут представлены репринты статей ведущих учёных, опубликованных в прошедшие годы в различных местных и ведомственных сборниках, представляющих существенный теоретический и практический интерес, но не доступных широкому кругу читателей.</p></div>
            </div>
            </div>
            <div class="about-author">
                <div class="about-author__text">
                    <h1>Главный редактор</h1>
                    <h2>Малышкин Виктор Эммануилович</h2> 
                    <p>Профессор, заведующий лабораторией Синтеза параллельных программ института вычислительной математики и математической геофизики (ИВМиМГ) СО РАН, Новосибирск</p>
                    <p>Заведующий кафедрой Параллельных вычислений (по совместительству) факультета Информационных технологий (ФИТ) НГУ.</p>
                    <section><p>• В <span class="p1">1970г.</span> закончил механико-математический факультет Томского госуниверситета.</p>
                             <p>• В <span class="p1">1986г.</span> защитил ученую степень к.ф.м-н. по специальности 01.01.10., тема «Синтез параллельных программ на вычислительных моделях с массивами», ВЦ СО АН СССР, Новосибирск.</p>
                             <p>• В <span class="p1">1993г.</span> защитил ученую степень д.т.н. по специальности 05.13.11. «Организация вычислений в крупноблочных иерархических МВС», НГУ, Новосибирск.</p>
                    </section>
                    <section><p>Основные научные интересы: параллельные вычислительные технологии, алгоритмы, языки и системы распределенного программирования, методы и средства параллельной реализации крупномасштабных численных моделей, технология активных знаний. Основной академический проект – разработка алгоритмов реализации и системы LUNA автоматического конструирования параллельных/распределенных программ численного моделирования.</p></section>
                    <section><p>128 публикаций по параллельным и распределённым вычислениям, синтезу параллельных и распределенных программ, суперкомпьютерному программному обеспечению и приложениям, параллельной реализации крупномасштабных численных моделей.</p></section>
                    <section><p>Председатель программного комитета серии международных конференций PaCT (Parallel Computing Technologies), проводимых каждый нечётный год в России. В 2017г прошла 14-я конференция. Труды конференций публикуются отдельным томом в LNCS (Springer). Каждый четный год выпускаются спец. выпуски одного из международных журналов.</p></section>
                </div>
                <div class="author-img">
                <img src="../assets/img/autor.png">
                </div>
            </div> 
            <div class="subauthors">
            <div class="subauthors-visible" @click="makeVisibleSubauthors"><a>Заместители главного редактора:</a></div>
            <div v-if="visibleSubauthors" class="subauthors-invisible">
            <p><span class="p1">А.С. Родионов</span> - д.т.н., доцент, Институт вычислительной математики и математической геофизики СО РАН, Новосибирск, Россия</p>
            <p><span class="p1">В.В. Шахов</span> - к. ф.-м. н., Институт вычислительной математики и математической геофизики СО РАН, Новосибирск, Россия</p>
            </div>
            </div>
            <div class="subauthors-visible" @click="makeVisibleRedSoviet"><a>Редакционный совет:</a></div>
            <div v-if="visibleRedSoviet" class="subauthors-invisible">
            <p><span class="p1">Председатель  М.Н. Калимолдаев</span> - академик АН РК,  Институт информационных и вычислительных технологий МОН  РК, Алмата, Республика Казахстан</p>
            <p><span class="p1">А.Л. Асеев</span> - академик РАН, Институт физики полупроводников им.А.В.Ржанова, Новосибирск, Россия</p>
            <p><span class="p1">В.А. Васенин</span> - д.ф.-м.н., профессор, МГУ имени М.В.Ломоносова, Институт проблем информационной безопасности,  Москва, Россия  </p>
            <p><span class="p1">С.Н. Васильев</span> - д.ф.-м.н., академик РАН, Институт проблем управления им. В.А. Трапезникова РАН, Москва, Россия</p>
            <p><span class="p1">В.М. Вишневский</span> - д.т.н., профессор, Институт проблем управления им. В.А. Трапезникова РАН, Москва, Россия</p>
            <p><span class="p1">С.С. Гончаров</span> - д.ф.-м.н., академик РАН, Институт математики им.С.Л.Соболева СО РАН, Новосибирск, Россия</p>
            <p><span class="p1">Ю.Л. Ершов</span> - д.ф.-м.н., академик РАН , Институт математики им. С.Л.Соболева СО РАН , Новосибирск, Россия</p>
            <p><span class="p1">Н.А. Кузнецов</span> - д.т.н., академик РАН, Институт радиотехники и электроники  им. В.А. Котельникова РАН, Москва, Россия</p>
            <p><span class="p1">А.П. Кулешов</span> - д.т.н., академик РАН, Институт проблем передачи информации им. А.А. Харкевича, Москва, Россия </p>
            <p><span class="p1">А.Г. Марчук</span> - д.ф.-м.н., профессор, Институт систем информатики СО РАН, Новосибирск, Россия</p>
            <p><span class="p1">Б.Я. Рябко</span> - д.т.н., профессор, Институт вычислительных технологий СО РАН, Новосибирск, Россия</p>
            <p><span class="p1">Н.А. Семенов</span> - д.т.н., профессор, Тверской государственный технический университет, Тверь, Россия</p>
            <p><span class="p1">И.А. Соколов</span> - академик РАН, Институт  проблем информатики РАН, Москва, Россия</p>
            <p><span class="p1">Ю.А. Флеров</span> - д.ф.-м.н., чл.-кор. РАН, Вычислительный центр им. А.А. Дородницына Федерального исследовательского центра «Информатика и управление» РАН(ВЦ ФИЦ ИУ РАН),  Москва, Россия</p>
            <p><span class="p1">П.С. Чубик</span> - д.т.н., профессор, Томский политехнический университет, Томск, Россия </p>
            </div>
            <div class="subauthors-visible" @click="makeVisibleRedcolleg"><a>Редколлегия:</a></div>
            <div v-if="visibleRedcolleg" class="subauthors-invisible">
            <p><span class="p1">Д.Ж. Ахмед-Заки</span> - д.т.н., президент, Университет международного бизнеса, Алмата, Республика Казахстан</p>
            <p><span class="p1">А.Г. Вострецов</span> - д.т.н., профессор, Новосибирский государственный технический университет, Новосибирск, Россия</p>
            <p><span class="p1">Б.С. Гольдштейн</span> - д.т.н., профессор, Санкт-Петербургский государвенный университе телекоммуникаций им.М.А. Бонч-Бруевича, Санкт-Петербург, Россия </p>
            <p><span class="p1">В.И. Гужов</span> - д.т.н., профессор, Новосибирский государственный технический университет, Новосибирск, Россия</p>
            <p><span class="p1">Ю.А. Загорулько</span> - к.т.н., с.н.с., Институт систем информатики СО РАН, Новосибирск, Россия</p>
            <p><span class="p1">С. Д. Каракозов</span> - д.п.н., профессор, Московский педагогический государственный университет, Москва, Россия</p>
            <p><span class="p1">М.М. Каримов</span> - д.т.н., профессор,  Ташкентский государтсвенный университет, Ташкент, Республика Узбекистан</p>
            <p><span class="p1">В.Н. Касьянов</span> - д.ф.-м.н., профессор, Институт систем информатики СО РАН, Новосибирск, Россия</p>
            <p><span class="p1">О.В. Кибис</span> - д.ф.-м.н., профессор, Новосибирский государственный технический университет, Новосибирск, Россия </p>
            <p><span class="p1">В.В. Корнеев</span> - д.т.н., профессор, "НИИ "Квант", Москва, Россия</p>
            <p><span class="p1">И.В. Котенко</span> - д.т.н., профессор,  Санкт-Петербургский институт информатики и автоматизации Российской академии наук (СПИИРАН), Санкт-Петербург, Россия</p>
            <p><span class="p1">Т.П. Любимова</span> - д.ф.- м.н., профессор,Институт механики сплошных сред УрО РАН, Пермь, Россия</p>
            <p><span class="p1">А.И. Ляхов</span> - д.т.н., профессор, Институт проблем передачи информации им. А.А. Харкевича, Москва, Россия</p>
            <p><span class="p1">М.А. Марченко</span> - д.ф.-м.н., Институт вычислительной математики и математической геофизики СО РАН, Новосибирск, Россия</p>
            <p><span class="p1">В.В. Окольнишников</span> - д.т.н., Конструкторско-технологический институт вычислительной техники Сибирского отделения РАН, Новосибирск, Россия </p>
            <p><span class="p1">Б.В. Поллер</span> - д.т.н., профессор, Институт Лазерной физики СО РАН, Новосибирск, Россия</p>
            <p><span class="p1">Ю.Г. Соловейчик</span> - д.т.н., профессор, Новосибирский государственный технический университет, Новосибирск, Россия</p>
            <p><span class="p1">М.А.Сонькин</span> - д.т.н., доцент, Томский политехнический университет, Томск, Россия</p>
            <p><span class="p1">М.С. Хайретдинов</span> - д.т.н., с.н.с.,  Институт вычислительной математики и математической геофизики СО РАН, Новосибирск, Россия</p>
            <p><span class="p1">Moonseong Kim</span> - PhD, Adjunct Professor, Hanbat National University, Korea</p>
            <p><span class="p1">Van Duc Nguyen</span> - PhD, Associate Professor, Hanoi University of Science and Technology, Vietnam</p>
            <p><span class="p1">Michele Pagano</span> - PhD, Associate Professor, University of Pisa, Italy</p>
            </div>
        </div>  
    </div>
    <div class="footer">
    <h1>УВАЖАЕМЫЕ ПОСЕТИТЕЛИ САЙТА ЖУРНАЛА "ПРОБЛЕМЫ ИНФОРМАТИКИ"!</h1>
    <p>Если Вы обнаружили ошибку, сообщите, пожалуйста, по e-mail: problem-info@sscc.ru  c пометкой "ошибка на сайте" и указанием, где допущена ошибка.</p>
    <p>Заранее благодарны. Редакция журнала.</p>
    </div>   
    </div>   
    <div v-if="lang === 'RU'" class="page">
    <div class="about-magazine__page">
        <div class="wrapper-box">
            <div class="grey-background">
                <h1 class="about-magazine" style="width: 100%">About magazine "Problems of Informatics"</h1>
                <h2>The publisher of the journal "Problems of Informatics" is the Institute of Computational Mathematics and Mathematical Geophysics of the Siberian Branch of the Russian Academy of Sciences</h2>
                <h3>The journal is registered in accordance with the procedure established by the legislation of the Russian Federation.</h3>
                <h3>Mass media registration certificate PI No. ФС77-32088 dated May 27, 2008. ISSN 2073-0667</h3>
                <h2>By order of the Ministry of Education and Science of Russia dated October 31, 2019 No. 412-r, on the recommendation of the Presidium of the Higher Attestation Commission, the journal "Problems of Informatics" is included in the List of scientific publications under review, in which the scientific results of dissertations for the degree of candidate of science, for the degree of doctor of science should be published in three scientific specialties and their respective branches of science, in which academic degrees are awarded:</h2>
                <p><span class="p1">05.13.11</span> – Mathematical and software support for computers, complexes and computer networks (physical and mathematical sciences),</p>
                <p><span class="p1">05.13.17</span> – Theoretical foundations of informatics (physical and mathematical sciences),</p>
                <p><span class="p1">05.13.18</span> – mathematical modeling, numerical methods and software packages (physical and mathematical sciences).</p>
            </div>
            <p class="vak-letter__text">WAC letter:</p>
                <div class="for-letter-box">
                    <img src="../assets/img/l1.jpg">
                    <img src="../assets/img/l2.jpg">
                </div>
            <div class="info">
                <p>The quarterly peer-reviewed scientific journal "Problems of Informatics" publishes general theoretical and methodological articles on computer science, information technologies and their applications</p>
                <p>The journal is addressed to scientists, graduate students, programmers, engineers and students who are interested in the results of fundamental and applied research in the field of high information technologies based on the latest achievements in physics, informatics and computer technology.</p>
                <p>Materials of the journal are posted on the website of the Scientific Electronic Library, are included in the national information and analytical system RSCI (Russian Science Citation Index). The publication activity indicators of the journal - the RSCI impact factor, the number of citations, the place in the <span class="p1">SCIENCE INDEX</span> rating - are published at: <a href="http://elibrary.ru/title_about. asp?id=30275">elibrary.ru</a></p>
                <p>The magazine is distributed by subscription. On the website of the United Catalog "Press of Russia" <a href="www.pressa-rf.ru">pressa-rf.ru</a>, you can subscribe for 2022 to the printed version of the journal "Informatics Problems" at the subscription index 69980 , as well as subscribe through the online store "Press by subscription"
                <a href="https://www.akc.ru">akc.ru</a> Agency for the distribution of foreign publications (JSC "ARZI"). </p>
            </div>
            <div class="headings">
           <h2>The papers of students, undergraduates, postgraduates, doctoral students, researchers engaged in research in the following scientific areas are accepted for publication in the journal: </h2>
            <h2 class="vak-letter__text">Headings by areas:</h2>
                <div class="headings__items">
                <div class="headings__item" @click="makeVisible"><a>1.Theoretical and systems computer science</a></div>
                <div v-if="visibleFirstHeading" class="invisible-box"><p>1.1. Mathematical modeling</p>
                                           <p>1.2. Information processing methods</p>
                                           <p>1.3. Educational informatics systems</p>
                                           <p>1.4. Systems Analysis, Optimization and Operations Research</p>
                                           <p>1.5. Mathematical problems control theory and game theory</p>
                                           <p>1.6. Programming languages and systems</p>
                                           <p>1.7. Technologies of programming and program design</p>
                                           <p>1.8. Distributed and parallel programming systems</p>
                                           <p>1.9. Adaptive and intelligent systems</p>
                                           <p>1.10. Software systems and their implementation on computers</p>
                                           <p>1.11. Theoretical Foundations of Programming and Informatics Systems</p>
                </div>
                <div class="headings__item" @click=" makeVisibleSecond"><a>2. Applied Information Technologies</a></div>
                <div v-if="visibleSecondHeading" class="invisible-box"><p>2.1. Text search systems</p>
                                           <p>2.2. Scientific research computer support systems</p>
                                           <p>2.3. Specialized software models and systems</p>
                                           <p>2.4. Systems and technologies for data mining and pattern recognition</p>
                                           <p>2.5. Specialized systems for processing and analyzing images and signals</p>
                                           <p>2.6. Tools for creating and maintaining electronic libraries, problem-oriented databases and electronic publications</p>
                                           <p>2.7. Tools for creating and maintaining problem-oriented knowledge-based systems and expert systems</p>
                                           <p>2.8. Visualization and virtual environment systems</p>
                                           <p>2.9. Information technologies in the management of technical systems and technological processes</p>
                                           <p>2.10. Web-Based Domain-Based Systems</p>
                                           <p>2.11. Digital data transmission systems and computer networks</p>
                                           <p>2.12. Radio and television systems, radar and communications</p>
                                           <p>2.13. Mobile systems and sensor networks</p>
                                           <p>2.14. Information technology in the study of natural and artificial systems</p>
                                           <p>2.15. System analysis and system approach to information technology design</p>
                                           <p>2.16. Automated systems for scientific research</p>
                                           <p>2.17. Automated process control systems</p>
                                           <p>2.18. Intelligent Systems Design</p>
                                           <p>2.19. Knowledge Management in Telelearning Systems</p>
                                           <p>2.20. Decision systems</p>
                                           <p>2.21. Artificial intelligent learning systems</p>
                                           <p>2.22. Monitoring of intelligent systems</p>
                                           <p>2.23. Automated Information Systems</p>
                </div>
               <div class="headings__item" @click="makeVisibleThird"><a>3. Supercomputer simulation</a></div>
                <div v-if="visibleThirdHeading" class="invisible-box"><p>3.1. Models of dynamics of computer networks and systems</p>
                                           <p>3.2. Simulation</p>
                                           <p>3.3. Systems and technologies of mathematical modeling for natural sciences, social and economic processes</p>
                                           <p>3.4. Information Process Modeling</p>
                                           <p>3.5. Modeling business processes</p>
                </div>
                <div class="headings__item" @click="makeVisibleFourth"><a>4. Parallel system programming and computing technologies</a></div>
                <div v-if="visibleFourthHeading" class="invisible-box"><p>4.1. Analysis of large-scale computing systems</p>
                                           <p>4.2. Parallel computing models, including cellular automaton models</p>
                                           <p>4.3. Parallel and distributed system and applied algorithms</p>
                                           <p>4.4. Parallel programming languages and systems</p>
                                           <p>4.5. Organizing High Performance Computing</p>
                                           <p>4.6. Active Knowledge Technologies</p>
                                           <p>4.7. Large-scale numerical modeling in subject areas</p>
                                           <p>4.8. Parallel computing technologies</p>
                                           <p>4.9. Distributed computing and GRID technologies</p>
                                           <p>4.10. Architecture, system and application software of computers and supercomputers</p>
                </div>
                <div class="headings__item" @click="makeVisibleFifth"><a>5. Security Computer Science</a></div>
                <div v-if="visibleFifthHeading" class="invisible-box"><p>5.1. Mathematical models and software tools for managing access to resources of information and communication systems</p>
                                           <p>5.2. An integrated approach to ensuring the information security of protected objects. Critical Objects</p>
                                           <p>5.3. Systematization of threats, destructive information impacts and their sources</p>
                                           <p>5.4. Models for assessing the risks of destructive information impacts on protected objects</p>
                                           <p>5.5. Policy for the safe use of information resources</p>
                                           <p>5.6. Criteria approaches to assessing the security of information technologies</p>
                                           <p>5.7. Methods and means of protecting networks from destructive influences</p>
                                           <p>5.8. Intrusion detection and response tools and systems</p>
                                           <p>5.9. Tools and systems for analyzing the health status of network structures</p>
                                           <p>5.10. Certification of tools and systems for protecting network resources</p>
                                           <p>5.11. Cryptography and cryptanalysis</p>
                                           <p>5.12. Imitation resistance and cryptoprotection</p>
                </div>
                <div class="headings__item" @click="makeVisibleSixth"><a>6. Flipping through old pages</a></div>
                <div v-if="visibleSixthHeading" class="invisible-box"><p>From the 2nd issue of 2015, a new heading "Turning through the old pages" was introduced. This section will present reprints of articles by leading scientists published in recent years in various local and departmental collections of significant theoretical and practical interest, but not available to a wide range of readers.</p></div>
            </div>
            </div>
            <div class="about-author">
                <div class="about-author__text">
                    <h1>Chief Editor</h1>
                    <h2>Malyshkin Viktor Emmanuilovich</h2>
                    <p>Professor, Head of the Laboratory of Synthesis of Parallel Programs at the Institute of Computational Mathematics and Mathematical Geophysics (ICMM&MG) SB RAS, Novosibirsk</p>
                    <p>Head of the Department of Parallel Computing (part-time) of the Faculty of Information Technology (FIT) NSU.</p>
                    <section><p>• In <span class="p1">1970</span> he graduated from the Faculty of Mechanics and Mathematics of Tomsk State University.</p>
                             <p>• In <span class="p1">1986</span> he defended his Ph.D. specialty 01.01.10., topic "Synthesis of parallel programs on computational models with arrays", Computing Center of the Siberian Branch of the USSR Academy of Sciences, Novosibirsk.</p>
                             <p>• In <span class="p1">1993</span> he defended his Ph.D. by specialty 05.13.11. "Organization of calculations in large-block hierarchical MCS", Novosibirsk State University, Novosibirsk.</p>
                    </section>
                    <section><p>Main scientific interests: parallel computing technologies, algorithms, languages and systems of distributed programming, methods and means of parallel implementation of large-scale numerical models, active knowledge technology. The main academic project is the development of implementation algorithms and the LUNA system for the automatic design of parallel/distributed numerical simulation programs.</p></section>
                    <section><p>128 publications on parallel and distributed computing, synthesis of parallel and distributed programs, supercomputer software and applications, parallel implementation of large-scale numerical models.</p></section>
                    <section><p>Chairman of the program committee of the series of international conferences PaCT (Parallel Computing Technologies) held every odd year in Russia. The 14th conference took place in 2017. Conference proceedings are published as a separate volume in LNCS (Springer). Specials are released every even year. issues of one of the international magazines.</p></section>
                </div>
                <div class="author-img">
                <img src="../assets/img/autor.png">
                </div>
            </div> 
           <div class="subauthors">
            <div class="subauthors-visible" @click="makeVisibleSubauthors"><a>Deputy editors:</a></div>
            <div v-if="visibleSubauthors" class="subauthors-invisible">
            <p><span class="p1">A.S. Rodionov</span> - Doctor of Technical Sciences, Associate Professor, Institute of Computational Mathematics and Mathematical Geophysics SB RAS, Novosibirsk, Russia</p>
            <p><span class="p1">V.V. Shakhov</span> - Ph.D. PhD, Institute of Computational Mathematics and Mathematical Geophysics SB RAS, Novosibirsk, Russia</p>
            </div>
            </div>
            <div class="subauthors-visible" @click="makeVisibleRedSoviet"><a>Editorial tip:</a></div>
            <div v-if="visibleRedSoviet" class="subauthors-invisible">
            <p><span class="p1">Chairman M.N. Kalimoldaev</span> - Academician of the Academy of Sciences of the Republic of Kazakhstan, Institute of Information and Computing Technologies of the Ministry of Education and Science of the Republic of Kazakhstan, Almaty, Republic of Kazakhstan</p>
            <p><span class="p1">A.L. Aseev</span> - Academician of the Russian Academy of Sciences, A.V. Rzhanov Institute of Semiconductor Physics, Novosibirsk, Russia</p>
            <p><span class="p1">V.A. Vasenin</span> - Doctor of Physics and Mathematics, Professor, Moscow State University named after M.V. Lomonosov, Institute of Information Security Problems, Moscow, Russia</p>
            <p><span class="p1">S.N. Vasiliev</span> - Doctor of Physical and Mathematical Sciences, Academician of the Russian Academy of Sciences, Institute of Control Problems named after V.I. V.A. Trapeznikov RAS, Moscow, Russia</p>
            <p><span class="p1">V.M. Vishnevsky</span> - Doctor of Technical Sciences, Professor, Institute of Management Problems. V.A. Trapeznikov RAS, Moscow, Russia</p>
            <p><span class="p1">S.S. Goncharov</span> - Doctor of Physics and Mathematics, Academician of the Russian Academy of Sciences, Sobolev Institute of Mathematics, Siberian Branch of the Russian Academy of Sciences, Novosibirsk, Russia</p>
            <p><span class="p1">Yu.L. Ershov</span> - Doctor of Physical and Mathematical Sciences, Academician of the Russian Academy of Sciences, Institute of Mathematics. S. L. Sobolev SB RAS , Novosibirsk, Russia</p>
            <p><span class="p1">N.A. Kuznetsov</span> - Doctor of Technical Sciences, Academician of the Russian Academy of Sciences, Institute of Radio Engineering and Electronics. V.A. Kotelnikov RAS, Moscow, Russia</p>
            <p><span class="p1">A.P. Kuleshov</span> - Doctor of Technical Sciences, Academician of the Russian Academy of Sciences, Institute for Information Transmission Problems. A.A. Kharkevich, Moscow, Russia</p>
            <p><span class="p1">A.G. Marchuk</span> - Doctor of Physics and Mathematics, Professor, Institute of Informatics Systems SB RAS, Novosibirsk, Russia</p>
            <p><span class="p1">B.Ya. Ryabko</span> - Doctor of Technical Sciences, Professor, Institute of Computational Technologies SB RAS, Novosibirsk, Russia</p>
            <p><span class="p1">N.A. Semenov</span> - Doctor of Technical Sciences, Professor, Tver State Technical University, Tver, Russia</p>
            <p><span class="p1">I.A. Sokolov</span> - Academician of the Russian Academy of Sciences, Institute for Informatics Problems of the Russian Academy of Sciences, Moscow, Russia</p>
            <p><span class="p1">Yu.A. Flerov</span> - Doctor of Physical and Mathematical Sciences, Corresponding Member Russian Academy of Sciences, Computing Center. A.A. Dorodnitsyn Federal Research Center "Informatics and Control" RAS (Computer Center FRC IU RAS), Moscow, Russia</p>
            <p><span class="p1">P.S. Chubik</span> - Doctor of Technical Sciences, Professor, Tomsk Polytechnic University, Tomsk, Russia</p>
            </div>
           <div class="subauthors-visible" @click="makeVisibleRedcolleg"><a>Editorial Board:</a></div>
            <div v-if="visibleRedcolleg" class="subauthors-invisible">
            <p><span class="p1">D.Zh. Ahmed-Zaki</span> - Doctor of Technical Sciences, President, University of International Business, Almaty, Republic of Kazakhstan</p>
            <p><span class="p1">A.G. Vostretsov</span> - Doctor of Technical Sciences, Professor, Novosibirsk State Technical University, Novosibirsk, Russia</p>
            <p><span class="p1">B.S. Goldstein</span> - Doctor of Technical Sciences, Professor, St. Petersburg State University of Telecommunications named after M.A. Bonch-Bruevich, St. Petersburg, Russia</p>
            <p><span class="p1">V.I. Guzhov</span> - Doctor of Technical Sciences, Professor, Novosibirsk State Technical University, Novosibirsk, Russia</p>
            <p><span class="p1">Yu.A. Zagorulko</span> - PhD, senior researcher, Institute of Informatics Systems SB RAS, Novosibirsk, Russia</p>
            <p><span class="p1">С. D. Karakozov</span> - Doctor of Pedagogy, Professor, Moscow Pedagogical State University, Moscow, Russia</p>
            <p><span class="p1">M.M. Karimov</span> - Doctor of Technical Sciences, Professor, Tashkent State University, Tashkent, Republic of Uzbekistan</p>
            <p><span class="p1">V.N. Kasyanov</span> - Doctor of Physics and Mathematics, Professor, Institute of Informatics Systems SB RAS, Novosibirsk, Russia</p>
            <p><span class="p1">О.В. Kibis</span> - Doctor of Physics and Mathematics, Professor, Novosibirsk State Technical University, Novosibirsk, Russia</p>
            <p><span class="p1">V.V. Korneev</span> - Doctor of Technical Sciences, Professor, Research Institute "Kvant", Moscow, Russia</p>
            <p><span class="p1">I.V. Kotenko</span> - Doctor of Technical Sciences, Professor, St. Petersburg Institute of Informatics and Automation of the Russian Academy of Sciences (SPIIRAN), St. Petersburg, Russia</p>
            <p><span class="p1">T.P. Lyubimova</span> - Doctor of Physics and Mathematics, Professor, Institute of Continuum Mechanics, Ural Branch of the Russian Academy of Sciences, Perm, Russia</p>
            <p><span class="p1">A.I. Lyakhov</span> - Doctor of Technical Sciences, Professor, Institute for Information Transmission Problems. A.A. Kharkevich, Moscow, Russia</p>
            <p><span class="p1">M.A. Marchenko</span> - Doctor of Physics and Mathematics, Institute of Computational Mathematics and Mathematical Geophysics, Novosibirsk, Russia</p>
            <p><span class="p1">V.V. Okolnishnikov</span> - Doctor of Technical Sciences, Design and Technological Institute of Computer Science, Siberian Branch of the Russian Academy of Sciences, Novosibirsk, Russia</p>
            <p><span class="p1">B.V. Poller</span> - Doctor of Technical Sciences, Professor, Institute of Laser Physics SB RAS, Novosibirsk, Russia</p>
            <p><span class="p1">Yu.G. Soloveichik</span> - Doctor of Technical Sciences, Professor, Novosibirsk State Technical University, Novosibirsk, Russia</p>
            <p><span class="p1">M.A.Sonkin</span> - Doctor of Technical Sciences, Associate Professor, Tomsk Polytechnic University, Tomsk, Russia</p>
            <p><span class="p1">M.S. Khairetdinov</span> - Doctor of Technical Sciences, Senior Researcher, Institute of Computational Mathematics and Mathematical Geophysics SB RAS, Novosibirsk, Russia</p>
            <p><span class="p1">Moonseong Kim</span> - PhD, Adjunct Professor, Hanbat National University, Korea</p>
            <p><span class="p1">Van Duc Nguyen</span> - PhD, Associate Professor, Hanoi University of Science and Technology, Vietnam</p>
            <p><span class="p1">Michele Pagano</span> - PhD, Associate Professor, University of Pisa, Italy</p>
            </div>
        </div>
    </div>
    <div class="footer">
    <h1>DEAR VISITORS OF THE SITE OF THE JOURNAL "PROBLEMS OF INFORMATICS"!</h1>
    <p>If you find an error, please report it by e-mail: problem-info@sscc.ru marked "error on the site" and indicating where the error was made.</p>
    <p>Thank in advance. Journal editorial.</p>
    </div>   
    </div>   
</div>
</template>

<script>

export default {
  name: 'aboutMagazine',
   data() {
    return {
      visibleFirstHeading: false,
      visibleSecondHeading: false,
      visibleThirdHeading: false,
      visibleFourthHeading: false,
      visibleFifthHeading: false,
      visibleSixthHeading: false,
      visibleSubauthors: false,
      visibleRedSoviet: false,
      visibleRedcolleg: false
    };
  },
  methods: {
    makeVisible() {
      this.visibleFirstHeading = !this.visibleFirstHeading;
    },
    makeVisibleSecond() {
      this.visibleSecondHeading = !this.visibleSecondHeading;
    },
    makeVisibleThird() {
      this.visibleThirdHeading = !this.visibleThirdHeading;
    },
    makeVisibleFourth() {
      this.visibleFourthHeading = !this.visibleFourthHeading;
    },
    makeVisibleFifth() {
      this.visibleFifthHeading = !this.visibleFifthHeading;
    },
    makeVisibleSixth() {
      this.visibleSixthHeading = !this.visibleSixthHeading;
    },
    makeVisibleSubauthors() {
        this.visibleSubauthors = !this.visibleSubauthors;
    },
    makeVisibleRedSoviet(){
        this.visibleRedSoviet = !this.visibleRedSoviet;
    },
    makeVisibleRedcolleg(){
        this.visibleRedcolleg = !this.visibleRedcolleg;
    }
  },
  computed: {
      lang() {
          return this.$store.state.lang
      }
  }
}
</script>

<style lang="less" scoped>
.about-magazine {
    font-size: 1.7em;
    margin: 1px 350px 20px;
    font-family: Roboto;
    &__page {
        display: flex;
        justify-content: center;
    }
}
.wrapper-box {
    background-color: white;
    display: flex;
    margin: 20px;
    width: 1200px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    flex-direction: column;
    & p {
        margin: 5px 0;
        font-family: Roboto;
        font-size: 1.1em;
    }
    & h2 {
        font-weight: 550;
        margin: 10px 0;
        font-family: Roboto;
        font-size: 1.1em;
    }
    & h3 {
        margin: 10px 0;
        font-family: Roboto;
        font-size: 1.1em;
    }
}
.grey-background{
    background-color: #D7D7D7;
    padding: 20px 20px 
}
.for-letter-box{
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    & img {
        max-width: 500px;
        margin: 0 30px; 
    }
}
.vak-letter__text{
    padding: 30px 0 0;
    text-align: center;
    font-family: Roboto;
    font-weight: 600;
}
.info {
    background-color: #EFEFEF; 
    padding: 0 20px 20px; 
    & p {
        font-family: Roboto;
        margin-top: 15px;
        font-size: 1.1em;
    }
    & a {
        text-decoration: none;
        font-weight: bold;
        color: black;
    }
}
.footer{
  background-color: rgb(0,0,0, 0.7);
  padding: 30px;
  opacity: 0.7;
  position: relative;
  bottom: 0;
  & h1{
    color: white;
    font-family: Roboto;
  }
  & p{
    color: white;
    font-family: Roboto;
    margin-top: 10px;
  }
}
.headings {
    padding: 10px 20px 30px;
    font-family: Roboto;
    &__items {
        display: flex;
        flex-direction: column;
    }
    &__item {
        background:#1287A8;
        color: white;
        text-align: center;
        margin-top: 2px;
        min-height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.05em;
        &:hover{
            cursor: pointer;
        }
    }
}
.invisible-box{
    display: block;
    & p{
        margin-left: 20px;
        font-family: Roboto;
    }
}
.about-author{
    padding: 20px 20px;
    font-family: Roboto;
    display: flex;
    justify-content: space-between;
    background-color: #EFEFEF;
    &__text {
        margin-left: 20px;
        & section{
            margin: 15px 0;
            font-family: Roboto;
        }
    }
    & h2{
        font-size: 1.7em;
        font-family: Roboto;
        margin-bottom: 20px;
    }
    & h1 {
        font-size: 1.3em;
        font-family: Roboto;
    }
}
.author-img{
    padding: 110px 0 80px 70px;
}
.author-img img{
    width: 370px;
    height: 350px;
}
.subauthors h1{
    font-size: 1.3em;
    font-family: Roboto;
}
.p1{
    font-weight:bold;
}
.subauthors-visible{
    background-color: #D7D7D7;
    padding: 20px 40px;
    margin-bottom: 2px;
    &:hover{
        cursor: pointer;
    }
}
.subauthors-invisible{
    margin: 15px 40px;
    & p{
        margin-bottom: 10px;
        font-family: Roboto;
    }
}
</style>