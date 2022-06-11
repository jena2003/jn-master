<template>
<div>
    <div v-if="lang === 'EN'" class="for-autors_page">
        <div class="wrapper-box">
        <div class="for-autors__title">Авторам</div>
        <div class="subtitle">1. Порядок рецензирования рукописей, представляемых в редакцию Журнала «Проблемы информатики» для публикации</div>
            <div class="subtitle__text">
            <p>Рукопись регистрируется  в «Портфеле» редакции, по соответствующему научному направлению.</p>
            <p>Рукопись рассматривается на заседании  бюро редколлегии (главный редактор, зам. главного редактора, ответственный секретарь, член редколлегии ответственный за научное направление данной рукописи) и назначаются 3  рецензента. </p>
            <p>Рукопись направляется рецензентам (в печатном виде или по электронной почте).</p>
            <p>Рецензии могут быть представлены в печатном виде или написаны от руки.</p>
            <p>Для ускорения прохождения рукописи от момента представления до публикации принимаются к рассмотрению рецензии, присланные по электронной почте с отсканированной подписью рецензента.</p>
            <p>Рецензии рассматривается на бюро редколлегии:</p>
            <ul>
                <li>если все три положительны, то обсуждение рукописи выносится на заседание редколлегии для рекомендации к публикации;</li>
                <li>если имеются замечания, то рукопись направляется автору на доработку с копией(ями) рецензии(й) без подписи(ей) рецензента;</li>
                <li>если есть хотя бы одна отрицательная рецензия, то  выносится на рассмотрение заседания редколлегии и может быть назначен еще один рецензент.</li>
            </ul>
            <p>Окончательное  заключение о публикации рукописи принимает только редколлегия Журнала «Проблемы информатики».</p>
            </div>
        <div class="subtitle">2. Общие требования к предоставлению и оформлению статей</div>
            <div class="subtitle__text">
                <p>Редакция принимает к рассмотрению статьи в электронном виде (исходный файл в LaTex - стиль article, и файл PDF, либо MS Word с приложением оригиналов рисунков в формате тех программ, в которых они были сделаны, отдельными файлами).</p>
                <p>Файлы, содержащие текст статьи, иллюстрации и дополнительные материалы, можно пересылать на электронный адрес редакции:
                problem-info@sscc.ru.</p>
                <p>Принимаются файлы, архивированные архиваторами ZIP/7Z или RAR; применение самораспаковывающихся архивов не допускается.</p>
                <p>При повторной отправке материалов, а также при внесении в исходный текст дополнений или исправлений необходимо сообщить об этом в редакцию в тексте электронного письма.</p>
                <p class="bold-text">Текст статьи с формулами, рисунками, таблицами должен быть подготовлен на стандартном листе формата А4 через 1,5 интервала, размер шрифта 12 pt, все поля по 2 см.</p>
                <p class="bold-text">Статьи, содержащие формулы, следует набирать в редакторе LaTex. В остальных случаях допускается использование программы MS Word, шрифт – Times New Roman; автоматическая расстановка переносов в документе должна быть отключена.</p>
                <p>Направляя статью в редакцию журнала, автор (соавторы) на безвозмездной основе передает(ют) издателю на срок действия авторского права по действующему законодательству РФ исключительное право на использование статьи или отдельной ее части (в случае принятия редколлегией Журнала статьи к опубликованию) на территории всех государств, где авторские права в силу международных договоров Российской Федерации являются охраняемыми, в том числе следующие права: на воспроизведение, на распространение, на публичный показ, на доведение до всеобщего сведения, на перевод на иностранные языки и переработку (и исключительное право на использование переведенного и (или) переработанного произведения вышеуказанными способами), на предоставление всех вышеперечисленных прав другим лицам.</p>
                <p>Журнал "Проблемы информатики" является некоммерческим изданием. Плата с авторов за публикацию статей не взимается.</p>
                <p class="bold-text">К статье должны быть приложены:</p>
                <p>
                    <span class="bold-text">
                    - разрешение на публикацию
                    </span>
                от экспертного совета организации, в которой выполнена работа (для авторов из России); 
                </p>
                <p>
                    <span class="bold-text">
                    - портретные фотографии авторов
                    </span>
                разрешением не менее 300 dpi.
                </p>
                <p>
                    <span class="bold-text">
                    - блоки информации и на русском, и на английском языках
                    </span>
                просьба присылать
                <span class="bold-text">
                    отдельными файлами:
                    </span>
                </p>
                <p>
                    <ul>
                        <li>Название статьи;</li>
                        <li>Инициалы и фамилии авторов;</li>
                        <li>Места работы авторов: полное наименование организации, почтовый индекс, город, страна;</li>
                        <li>Код(ы) классификации УДК;</li>
                        <li>Аннотации, содержащие краткую постановку задачи и описание метода решения: на русском языке объемом от 1000 знаков, на английском языке расширенную, объемом от 4000 до 8000 знаков, что соответствует требованиям ВАК и Scopus.</li>
                        <li>Ключевые слова;</li>
                        <li>Списки используемой литературы в соответствии с ГОСТ Р 7.0.5—2008  (в английской версии необходимо выполнить транслитерацию неанглоязычных элементов списка литературы в соответствии с ГОСТ Р 7.0.34-2014) - составляется по ходу упоминания источников в тексте;</li>
                        <li>Краткие биографии (БИО) авторов с указанием ключевых научных достижений (включая ученую степень, ученое звание – при наличии; основные области научных интересов и формулировка основных результатов, место работы, занимаемую должность, контактные данные – почтовый адрес с индексом, адрес электронной почты, контактный телефон).</li>
                    </ul>
                </p>
            </div>
        <div class="subtitle">3. Этика научных публикаций</div>
            <div class="subtitle__text">
                <p>Редакционная коллегия научного журнала осуществляет свою деятельность согласно международным этическим правилам научных публикаций, подробно изложенным Комитетом по этике научных публикаций <a href="https://publicationethics.org/">(Committee on Publication Ethics)</a>, основывающимся на контроле процесса размещения публикаций, а также минимизации рисков возникновения недобросовестной практики, связанной с опубликованием работ.</p>
                <h2>Этические принципы автора при подаче рукописи</h2> 
                <p>Автор, предоставивший рукопись для публикации, должен руководствоваться следующими принципами:</p>
                <ul>
                    <li>присланные труды должны включать в себя достоверные результаты проведенных исследований;</li>
                    <li>авторы должны предоставлять оригинальные материалы, заимствованные части требуют обязательной отсылки на первоисточник; не допускается наличие неоформленных цитат, неприемлемо присутствие в научном труде значительного процента заимствований, а также полный плагиат;</li>
                    <li>важным условием является обозначение в статье всех лиц, внесших свой вклад в развитие темы исследования;</li>
                    <li>недопустима подача рукописи, уже размещенной в стороннем журнале либо состоящей на рассмотрении к публикации;</li>
                    <li>при обнаружении неточности или ошибки в работе необходимо своевременное информирование о данном факте редакции.</li>
                </ul>          
                <h2>Этические принципы в деятельности рецензента</h2>
                <p>Деятельность рецензента занимает значительное место в ходе экспертизы научных трудов, вследствие чего предусматривается безусловное соблюдение им следующих принципов:</p>
                <ul>
                    <li>рецензент, осознающий недостаточный уровень своей квалификации для рассмотрения материалов определенного исследования либо имеющий сомнения относительно соблюдения сроков рецензирования, должен заблаговременно уведомить об этом редакцию;</li>
                    <li>рецензент обязуется выполнять условия конфиденциальности, по которым не допускается передавать труд для ознакомления и обсуждения лицам, не владеющим на то полномочиями;</li>
                    <li>неопубликованные данные статьи недопустимы для использования в личных целях без письменного согласия автора;</li>
                    <li>при обнаружении сходства исследования с уже существующими подобными работами рецензент должен незамедлительно проинформировать об этом редакцию;</li>
                    <li>отзыв на научный труд должен быть непредвзятым и объективным, комментарии изложены аргументировано. Категорически не допускается личная критика автора.</li>
                </ul>
                <h2>Профессиональная этика редактора и издателя</h2>
                <p>Редакция несет ответственность за размещение в рамках журнала авторских работ, в связи с чем строго придерживается следующих принципов:</p>
                <ul>
                    <li>в вопросе допуска работы к публикации редакция основывается на достоверности материалов, представленных в статье, а также ее научной значимости;</li>
                    <li>редакция не должна допускать к публикации статьи, являющиеся частично или полностью плагиатом;</li>
                    <li>в принятии решения о публикации не допускается дискриминация по расе, полу, религиозным взглядам, происхождению, гражданству и политическим убеждениям;</li>
                    <li>редакция гарантирует сохранение конфиденциальности неопубликованных материалов присланных на рассмотрение работ;</li>
                    <li>редакция обязана принимать участие в возникающих конфликтах, а также принимать меры по их разрешению.</li>
                </ul>
            </div>
        </div>
    <div class="footer">
    <h1>УВАЖАЕМЫЕ ПОСЕТИТЕЛИ САЙТА ЖУРНАЛА "ПРОБЛЕМЫ ИНФОРМАТИКИ"!</h1>
    <p>Если Вы обнаружили ошибку, сообщите, пожалуйста, по e-mail: problem-info@sscc.ru  c пометкой "ошибка на сайте" и указанием, где допущена ошибка.</p>
    <p>Заранее благодарны. Редакция журнала.</p>
    </div>
    </div>
 <div v-if="lang === 'RU'" class="for-autors_page">
        <div class="wrapper-box">
        <div class="for-autors__title">For authors</div>
        <div class="subtitle">1. The procedure for reviewing manuscripts submitted to the editors of the Journal "Problems of Informatics" for publication</div>
            <div class="subtitle__text">
            <p>The manuscript is registered in the "Portfolio" of the editorial office, in the corresponding scientific direction.</p>
            <p>The manuscript is considered at a meeting of the bureau of the editorial board (editor-in-chief, deputy editor-in-chief, executive secretary, member of the editorial board responsible for the scientific direction of this manuscript) and 3 reviewers are appointed. </p>
            <p>The manuscript is sent to the reviewers (in hard copy or by e-mail).</p>
            <p>Reviews may be typed or handwritten.</p>
            <p>To speed up the passage of the manuscript from the moment of submission to publication, reviews sent by e-mail with a scanned signature of the reviewer are accepted for consideration.</p>
            <p>Reviews are reviewed by the bureau of the editorial board:</p>
            <ul>
                <li>if all three are positive, then the discussion of the manuscript is submitted to the editorial board meeting for recommendation for publication;</li>
                <li>if there are comments, the manuscript is sent to the author for revision with a copy(s) of the review(s) without the signature(s) of the reviewer;</li>
                <li>if there is at least one negative review, it is submitted for consideration by the editorial board meeting and another reviewer can be appointed.</li>
            </ul>
            <p>The final decision on the publication of the manuscript is made only by the editorial board of the Journal of Problems of Informatics.</p>
            </div>
        <div class="subtitle">2. General requirements for the submission and design of articles</div>
            <div class="subtitle__text">
                <p>The editors accept articles in electronic form for consideration (source file in LaTeX - style article, and a PDF or MS Word file with attached original drawings in the format of the programs in which they were made, as separate files).</p>
                <p>Files containing the text of the article, illustrations and additional materials can be sent to the email address of the editors:
                problem-info@sscc.ru.</p>
                <p>Files archived with ZIP/7Z or RAR archivers are accepted; Self-extracting archives are not allowed.</p>
                <p>When resubmitting materials, as well as when making additions or corrections to the original text, you must inform the editorial office in the text of the email.</p>
                <p class="bold-text">The text of the article with formulas, figures, tables should be prepared on a standard A4 sheet with 1.5 spacing, font size 12 pt, all margins 2 cm.</p>
                <p class="bold-text">Articles containing formulas should be typed in a LaTeX editor. In other cases, it is allowed to use the MS Word program, the font is Times New Roman; automatic hyphenation in the document should be disabled.</p>
                <p>By submitting an article to the editors of the journal, the author (co-authors) transfers (free of charge) to the publisher for the term of copyright under the current legislation of the Russian Federation the exclusive right to use the article or its separate part (if the editorial board of the Journal accepts the article for publication) on territories of all states where copyrights are protected by virtue of international treaties of the Russian Federation, including the following rights: reproduction, distribution, public display, communication to the public, translation into foreign languages and processing (and the exclusive right to use of the translated and (or) reworked work in the above ways), to grant all the above rights to others.</p>
                <p>The journal "Problems of Informatics" is a non-commercial publication. Authors are not charged for publishing articles.</p>
                <p class="bold-text">The following must be attached to the article:</p>
                <p>
                    <span class="bold text">
                    - permission to publish
                    </span>
                from the expert council of the organization in which the work was done (for authors from Russia);
                </p>
                <p>
                    <span class="bold text">
                    - portrait photographs of the authors
                    </span>
                resolution of at least 300 dpi.
                </p>
                <p>
                    <span class="bold text">
                    - blocks of information in both Russian and English
                    </span>
                please send
                <span class="bold text">
                    separate files:
                    </span>
                </p>
                <p>
                    <ul>
                        <li>Article title;</li>
                        <li>Initials and surnames of authors;</li>
                        <li>Places of work of authors: full name of the organization, postal code, city, country;</li>
                        <li>UDC classification code(s);</li>
                        <li>Annotations containing a brief statement of the problem and a description of the solution method: in Russian, from 1000 characters, in English, extended, from 4000 to 8000 characters, which meets the requirements of the Higher Attestation Commission and Scopus.</li>
                        <li>Keywords;</li>
                        <li>Literature lists in accordance with GOST R 7.0.5-2008 (in the English version, non-English elements of the list of references must be transliterated in accordance with GOST R 7.0.34-2014) - compiled in the course of mentioning sources in the text;</li >
                        <li>Brief biographies (BIOs) of the authors indicating key scientific achievements (including academic degree, academic title - if any; main areas of scientific interests and the formulation of the main results, place of work, position held, contact details - postal address with index, email address mail, contact phone number).</li>
                    </ul>
                </p>
            </div>
        <div class="subtitle">3. Ethics of scientific publications</div>
            <div class="subtitle__text">
                <p>The editorial board of a scientific journal carries out its activities in accordance with the international ethical rules for scientific publications, as detailed by the Committee on the Ethics of Scientific Publications <a href="https://publicationethics.org/">(Committee on Publication Ethics)</a>, based on the control of the process of posting publications, as well as minimizing the risks of unfair practices associated with the publication of works.</p>
                <h2>Author's ethical principles when submitting a manuscript</h2>
                <p>The author who submitted the manuscript for publication should be guided by the following principles:</p>
                <ul>
                    <li>Submitted papers must include reliable research results;</li>
                    <li>authors must provide original materials, borrowed parts require mandatory reference to the original source; unformed quotations are not allowed, the presence of a significant percentage of borrowings in a scientific work, as well as complete plagiarism is unacceptable;</li>
                    <li>an important condition is the designation in the article of all persons who contributed to the development of the research topic;</li>
                    <li>It is not allowed to submit a manuscript that is already published in a third-party journal or is under consideration for publication;</li>
                    <li>when an inaccuracy or error is found in the work, it is necessary to inform the editors about this fact in a timely manner.</li>
                </ul>
                <h2>Ethical principles in the work of a reviewer</h2>
                <p>The activity of the reviewer occupies a significant place in the course of the examination of scientific papers, as a result of which the unconditional observance of the following principles is provided for:</p>
                <ul>
                    <li>A reviewer who is aware of the insufficient level of his qualifications to review the materials of a particular study or has doubts about meeting the deadlines for reviewing should notify the editors in advance;</li>
                    <li>The reviewer undertakes to comply with the terms of confidentiality, according to which it is not allowed to transfer the work for review and discussion to persons who do not have the authority to do so;</li>
                    <li>unpublished article data is not allowed for personal use without the written consent of the author;</li>
                    <li>when a study is found to be similar to existing similar works, the reviewer should immediately inform the editors about it;</li>
                    <li>review of scientific work should be unbiased and objective, comments are presented with reason. Personal criticism of the author is strictly not allowed.</li>
                </ul>
                <h2>Professional ethics of the editor and publisher</h2>
                <p>The editorial board is responsible for placing author's works within the framework of the journal, and therefore strictly adheres to the following principles:</p>
                <ul>
                    <li>in the issue of admitting a work for publication, the editorial board is based on the reliability of the materials presented in the article, as well as its scientific significance;</li>
                    <li>The editors should not allow publication of articles that are partially or completely plagiarized;</li>
                    <li>no discrimination based on race, sex, religion, origin, nationality, or political opinion is allowed in the decision to publish;</li>
                    <li>the editors guarantee the confidentiality of unpublished materials submitted for consideration;</li>
                    <li>The editorial office is obliged to take part in emerging conflicts, as well as take measures to resolve them.</li>
                </ul>
            </div>
        </div>
    <div class="footer">
    <h1>DEAR VISITORS OF THE SITE OF THE JOURNAL "PROBLEMS OF INFORMATICS"!</h1>
    <p>If you find an error, please report it by e-mail: problem-info@sscc.ru marked "error on the site" and indicating where the error was made.</p>
    <p>Thanks in advance. Editorial staff.</p>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ForAutors',
    computed: {
      lang() {
          return this.$store.state.lang
      }
  }
}
document.title = 'Проблемы информатики';
</script>

<style lang="less" scoped>
.for-autors {
    &_page{
    overflow:hidden;
    }
    &__title {
        background-color: #D7D7D7;
        padding: 20px;
        display: flex;
        justify-content: center;
        font-family: Roboto;
        font-size: 1.7em;
    }
}
.wrapper-box {
    background-color: white;
    display: flex;
    margin: 20px;
    width: 1200px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    flex-direction: column;
}
.subtitle{
    padding: 15px;
    background:#1287A8;
    color: white;
    margin-bottom: 1px;
    font-size: 1.2em;
    &__text {
        margin: 10px 40px 20px 40px;
        font-family: Roboto;
        font-size: 1.2em;
        & p {
            margin-bottom: 10px;
        }
        & ul {
            margin-left: 40px;
            list-style-type: disc;
        }
        & li {
            margin-bottom: 10px;
        }
        & h2 {
            margin-top: 20px;
            margin-bottom: 10px;
            font-weight: bold;
            font-size: 1.2em;
            font-family: Roboto;
        }
    }
}
.footer{
  background-color: rgb(0,0,0, 0.7);
  width: 100%;
  opacity: 0.7;
  padding: 30px;
  & h1 {
    color: white;
    font-family: Roboto;
  }
  & p {
    color: white;
    font-family: Roboto;
    margin-top: 10px;
  }
}
.bold-text{
    font-weight: bold;
}
</style>