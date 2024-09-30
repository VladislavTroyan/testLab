import React from 'react';
import './App.css';
import Image1 from './images/Image1.jpg';
import image_block1 from './images/image-block1.png';
import image_block2 from './images/image-block2.png';
import image_block3 from './images/image-block3.png';
import image_block4 from './images/image-block4.png';
import three_image1 from './images/three-image1.png';
import three_image2 from './images/three-image2.png';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <header class="header">
        <div class="circle-text-container">
          <div class="circle-container">
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
          </div>
          <p class="header-text">testLab</p>
        </div>
        <div class="link-text-container">
          <a href="#how-it-works" class="link-text">Как это работает</a>
          <a href="#third-block" class="link-text">3-й блок</a>
          <a href="#faq" class="link-text">Вопросы и ответы</a>
          <a href="#form" class="link-text">Форма</a>
        </div>
      </header>

      <main>
        <div className="image-text-button-container">
          <img src={Image1} alt="Example" className="image1" />
          <div class="overlay"></div>
          <div class="text-button-container">
            <div class="text1">Говорят, никогда не поздно сменить профессию</div>
            <div class="text2">Сделай круто тестовое задание и у тебя всё получится</div>
            <button class="button1">Проще простого!</button>
          </div>
        </div>

        <div class="big-block-two">
          <div class="block-title-text">Как это работает</div>
            <div class="mini-block-container">
              <div class="mini-block" id="mini-block1">
                <img src={image_block1} alt="Example" className="image-block1" />
                <div class="mini-block-text1">Прочитай задание внимательно</div>
                <div class="mini-block-text2">Думаю у тебя не займет это больше двух-трех минут</div>
              </div>
              <div class="mini-block" id="mini-block2">
                <img src={image_block2} alt="Example" className="image-block2" />
                <div class="mini-block-text1">Изучи весь макет заранее</div>
                <div class="mini-block-text2">Подумай как это будет работать на разных разрешениях и при скролле</div>
              </div>
              <div class="mini-block" id="mini-block3">
                <img src={image_block3} alt="Example" className="image-block3" />
                <div class="mini-block-text1">Сделай хорошо</div>
                <div class="mini-block-text2">Чтобы мы могли тебе доверить подобные задачи в будущем</div>
              </div>
              <div class="mini-block" id="mini-block4">
                <img src={image_block4} alt="Example" className="image-block4" />
                <div class="mini-block-text1">Получи предложение</div>
                <div class="mini-block-text2">Ну тут все просто, не я придумал правила, но думаю так и будет)))</div>
              </div>
            </div>
        </div>

        <div class="big-block-three">
          <div class="three-mini-block-text">
            <div class="three-mini-block-text1">Круто, ты дошел до третьего блока</div>
            <div class="three-mini-block-text2" id="three-mini-block-text1">63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</div>
            <div class="three-mini-block-text2" id="three-mini-block-text2">Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</div>
          </div>
          <div class="three-mini-block-images">
            <img src={three_image2} alt="Example" className="three-image2" />
            <img src={three_image1} alt="Example" className="three-image1" />
          </div>
        </div>

        <div class="big-block-four">
          <div class="big-block-four-content">
            <div class="block-title-text">Отзывы</div>
            <Carousel />
          </div>
        </div>

        <div class="big-block-five">
        <div class="block-title-text">Вопросы и ответы</div>
        <div class="all-questions-answers">

          <div class="question-answer">
            <div class="question">
              <input type="checkbox" id="checkbox-answer1" class="checkbox-answer"></input>
              <label for="checkbox-answer1" class="new-checkbox-answer">
                <div class="question-text">Подтверждено: сознание наших соотечественников не замутнено пропагандой? </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill="#191C1F"/>
                  <circle cx="12" cy="12" r="11" stroke="#191C1F" stroke-width="2"/>
                </svg>
              </label>
              <div class="answer">Ответ на вопрос: Подтверждено: сознание наших соотечественников не замутнено пропагандой?</div>
            </div>
          </div>

          <div class="question-answer">
            <div class="question">
              <input type="checkbox" id="checkbox-answer2" class="checkbox-answer"></input>
              <label for="checkbox-answer2" class="new-checkbox-answer">
                <div class="question-text">Прототип нового сервиса - это как трубный призыв? </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill="#191C1F"/>
                  <circle cx="12" cy="12" r="11" stroke="#191C1F" stroke-width="2"/>
                </svg>
              </label>
              <div class="answer">Ответ на вопрос: Прототип нового сервиса - это как трубный призыв?</div>
            </div>
          </div>

          <div class="question-answer">
            <div class="question">
              <input type="checkbox" id="checkbox-answer3" class="checkbox-answer"></input>
              <label for="checkbox-answer3" class="new-checkbox-answer">
                <div class="question-text">Частокол на границе продолжает удивлять? </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill="#191C1F"/>
                  <circle cx="12" cy="12" r="11" stroke="#191C1F" stroke-width="2"/>
                </svg>
              </label>
              <div class="answer">В частности, дальнейшее развитие различных форм деятельности позволяет 
                выполнить важные задания по разработке дальнейших направлений развития. Предварительные 
                выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях 
                существующих финансовых и административных условий.</div>
            </div>
          </div>
          <div class="question-answer">
            <div class="question">
              <input type="checkbox" id="checkbox-answer4" class="checkbox-answer"></input>
              <label for="checkbox-answer4" class="new-checkbox-answer">
                <div class="question-text">Очевидцы сообщают, что слышали грохот грома градущих изменений? </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill="#191C1F"/>
                  <circle cx="12" cy="12" r="11" stroke="#191C1F" stroke-width="2"/>
                </svg>
              </label>
              <div class="answer">Ответ на вопрос: Очевидцы сообщают, что слышали грохот грома градущих изменений?</div>
            </div>
          </div>
          <div class="question-answer">
            <div class="question">
              <input type="checkbox" id="checkbox-answer5" class="checkbox-answer"></input>
              <label for="checkbox-answer5" class="new-checkbox-answer">
                <div class="question-text">И по сей день в центральных регионах звучит перекатами печальный плач оппозиции? </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill="#191C1F"/>
                  <circle cx="12" cy="12" r="11" stroke="#191C1F" stroke-width="2"/>
                </svg>
              </label>
              <div class="answer">Ответ на вопрос: И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?</div>
            </div>
          </div>
          <div class="question-answer">
            <div class="question">
              <input type="checkbox" id="checkbox-answer6" class="checkbox-answer"></input>
              <label for="checkbox-answer6" class="new-checkbox-answer">
                <div class="question-text">Нынче никто не может себе позволить инициировать треск разлетающихся скреп? </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill="#191C1F"/>
                  <circle cx="12" cy="12" r="11" stroke="#191C1F" stroke-width="2"/>
                </svg>
              </label>
              <div class="answer">Ответ на вопрос: Нынче никто не может себе позволить инициировать треск разлетающихся скреп?</div>
            </div>
          </div>
          <div class="question-answer">
            <div class="question">
              <input type="checkbox" id="checkbox-answer7" class="checkbox-answer"></input>
              <label for="checkbox-answer7" class="new-checkbox-answer">
                <div class="question-text">Высококачественный прототип будущего проекта обнадёживает? </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill="#191C1F"/>
                  <circle cx="12" cy="12" r="11" stroke="#191C1F" stroke-width="2"/>
                </svg>
              </label>
              <div class="answer">Ответ на вопрос: Высококачественный прототип будущего проекта обнадёживает?</div>
            </div>
          </div>
        </div>
        </div>

        < div class="big-block-six">
          <div class="mini-block-six">
            <div class="text-six">
              <div class="title-text-six">Опрошенных пользовались микрокредитами</div>
              <div class="basic-text-six">Не могли покрыть внезапные траты свыше 7000 ₽. 
                Доступ к заработанным деньгам помогает отказаться от кредитов и экономить 
                деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. 
                Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги 
                на процентах и штрафах</div>
            </div>
            <div class="text-six">
              <div class="title-text-six">Опрошенных пользовались микрокредитами</div>
              <div class="basic-text-six">Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к 
                заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах 
                и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам 
                помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть 
                внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и 
                экономить деньги на процентах и штрафах</div>
            </div>
            <div class="text-six">
              <div class="title-text-six">Опрошенных пользовались микрокредитами</div>
              <div class="basic-text-six">Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным 
                деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли 
                покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов 
                и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к 
                заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах</div>
            </div>
            <div class="text-six">
              <div class="title-text-six">Опрошенных пользовались микрокредитами</div>
              <div class="basic-text-six">Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным 
                деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть 
                внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить 
                деньги на процентах и штрафах</div>
            </div>
          </div>
        </div>

        <div class="big-block-seven">
          <div class="block-title-text">Отправить форму</div>
          <div class="mini-block-seven">
          <input type="text" name="name" placeholder="Имя" class="input-text" required></input>
          <input type="text" name="phone-number" placeholder="Телефон" class="input-text" required></input>
          <div class="check-block-seven">
            <input type="checkbox" name="consent" id="consent" required></input>
            <label for="consent">Согласен, отказываюсь</label>
          </div>
          <button type="submit" class="submit-button">Отправить</button>
          </div>
        </div>

        <div class="big-block-eight">
          <div class="text-block-eight">© 2021 Лаборатория интернет</div>
        </div>
      </main>
    </div>
  );
}

export default App;
