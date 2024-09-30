import React, { useState } from 'react';
import './Carousel.css';
import user1 from './../images/user1.png';
import user2 from './../images/user2.png';
import user3 from './../images/user3.png';
import user4 from './../images/user4.png';
import user5 from './../images/user5.png';

const Carousel = () => {
  const items = [
    
    <div key={1} className="carousel-item">
      <div class="user">
        <img src={user1} alt="Example" className="img-user" />
        <div class="userinfo">
          <div class="username">Константинов Михаил Павлович</div>
          <div class="usercity">Санкт-Петербург</div>
        </div>
      </div>
      <div class="reviews">Каждый из нас понимает очевидную вещь: 
        перспективное планирование предоставляет широкие возможности 
        для анализа существующих паттернов поведения. В своём стремлении 
        улучшить пользовательский опыт мы</div>
    </div>,

    <div key={2} className="carousel-item">
    <div class="user">
      <img src={user2} alt="Example" className="img-user" />
      <div class="userinfo">
        <div class="username">Иван Иванов</div>
        <div class="usercity">Санкт-Петербург</div>
      </div>
    </div>
    <div class="reviews">Каждый из нас понимает очевидную вещь: перспективное 
      планирование предоставляет широкие возможности для анализа существующих 
      паттернов поведения. В своём стремлении улучшить пользовательский опыт мы 
      упускаем, что активно развивающиеся страны третьего мира призваны к 
      ответу.</div>
    </div>,

    <div key={3} className="carousel-item">
    <div class="user">
      <img src={user3} alt="Example" className="img-user" />
      <div class="userinfo">
        <div class="username">Артём Корнилов</div>
        <div class="usercity">Самара</div>
      </div>
    </div>
    <div class="reviews">Каждый из нас понимает очевидную вещь: 
      перспективное планирование предоставляет широкие возможности 
      для анализа существующих паттернов поведения. В своём стремлении 
      улучшить пользовательский опыт мы</div>
    </div>,

    <div key={4} className="carousel-item">
    <div class="user">
      <img src={user4} alt="Example" className="img-user" />
      <div class="userinfo">
        <div class="username">Хидэо Кодзима</div>
        <div class="usercity">Токио</div>
      </div>
    </div>
    <div class="reviews">Каждый из нас понимает очевидную вещь: 
      перспективное планирование предоставляет широкие возможности 
      для анализа существующих паттернов поведения. В своём стремлении 
      улучшить пользовательский опыт мы</div>
    </div>,

    <div key={5} className="carousel-item">
    <div class="user">
      <img src={user5} alt="Example" className="img-user" />
      <div class="userinfo">
        <div class="username">Михаил Савельев</div>
        <div class="usercity">Самара</div>
      </div>
    </div>
    <div class="reviews">Каждый из нас понимает очевидную вещь: 
      перспективное планирование предоставляет широкие возможности 
      для анализа существующих паттернов поведения. В своём стремлении 
      улучшить пользовательский опыт мы</div>
    </div>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Увеличиваем индекс на 3, но не выходим за пределы
    if (currentIndex + 3 < items.length) {
      setCurrentIndex(currentIndex + 3);
    } else {
      setCurrentIndex(items.length - (items.length % 3)); // Устанавливаем на последние полные 3 блока
    }
  };

  const handlePrev = () => {
    // Уменьшаем индекс на 3, но не меньше 0
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    } else {
      setCurrentIndex(0); // Устанавливаем на первый блок
    }
  };

  const displayedItems = items.slice(currentIndex, currentIndex + 3); // Всегда показываем 3 блока

  return (
    <div className="carousel">
      <button onClick={handlePrev} disabled={currentIndex === 0} className="button-block-four">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.8387 2.27597C24.0816 2.0245 24.216 1.6877 24.2129 1.3381C24.2099 0.988509 24.0697 
          0.654093 23.8225 0.406882C23.5753 0.159671 23.2408 0.0194457 22.8912 0.0164078C22.5417 0.0133699 
          22.2049 0.147762 21.9534 0.39064L11.0574 11.2866C9.80757 12.5368 9.10547 14.2322 9.10547 16C9.10547 
          17.7677 9.80757 19.4631 11.0574 20.7133L21.9534 31.6093C22.2049 31.8522 22.5417 31.9866 22.8912 
          31.9835C23.2408 31.9805 23.5753 31.8403 23.8225 31.5931C24.0697 31.3459 24.2099 31.0114 24.2129 
          30.6618C24.216 30.3122 24.0816 29.9754 23.8387 29.724L12.9427 18.828C12.1928 18.0779 11.7716 17.0606 
          11.7716 16C11.7716 14.9393 12.1928 13.9221 12.9427 13.172L23.8387 2.27597Z" />
        </svg>
      </button>

      <div className="carousel-container">
        {displayedItems}
      </div>
      
      <button onClick={handleNext} disabled={currentIndex + 3 >= items.length} className="button-block-four">
        <svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.39143 29.724C1.26408 29.847 1.1625 29.9941 1.09262 30.1568C1.02275 30.3194 
          0.985964 30.4944 0.984425 30.6714C0.982887 30.8485 1.01662 31.024 1.08366 31.1879C1.1507
          31.3518 1.24971 31.5006 1.3749 31.6258C1.50009 31.751 1.64896 31.85 1.81282 31.9171C1.97668
          31.9841 2.15226 32.0178 2.32929 32.0163C2.50633 32.0148 2.68129 31.978 2.84397 31.9081C3.00664
          31.8382 3.15376 31.7367 3.27676 31.6093L14.1728 20.7133C15.4209 19.4623 16.1219 17.7672 16.1219
          16C16.1219 14.2328 15.4209 12.5377 14.1728 11.2866L3.27676 0.39064C3.02529 0.147762 2.68849 0.0133699
          2.33889 0.0164078C1.9893 0.0194457 1.65488 0.159671 1.40767 0.406882C1.16046 0.654093 1.02023 0.988509
          1.01719 1.3381C1.01416 1.6877 1.14855 2.0245 1.39143 2.27597L12.2874 13.172C13.0373 13.9221 13.4586
          14.9393 13.4586 16C13.4586 17.0606 13.0373 18.0779 12.2874 18.828L1.39143 29.724Z" />
        </svg>
      </button>

    </div>
  );
};

export default Carousel;
