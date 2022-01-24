<template>
  <footer class="footer">
    <section class="footer__section">
      <div class="footer__container container">
        <div class="footer__cols cols">
          <div class="col">
            <div class="col__title">Тендеры</div>
            <ul class="col__list">
              <li class="col__item">
                <nuxt-link no-prefetch to="/">
                  <button class="blue">Добавить тендер</button>
                </nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/"> Каталог тендеров </nuxt-link>
              </li>
              <br />
              <li class="col__item">
                <nuxt-link no-prefetch to="/"> Работа с клиентами </nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Управление проектами</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Маркетинг</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Финансы</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Управление бизнесом</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col">
            <div class="col__title">Компании</div>
            <ul class="col__list">
              <li class="col__item">
                <button class="red">
                  <nuxt-link no-prefetch to="/">Добавить компанию</nuxt-link>
                </button>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Рейтинги</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/"
                  >Отраслевая специализация</nuxt-link
                >
              </li>
              <br />
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Интеграторы</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/"
                  >Решения для бизнеса крепеж</nuxt-link
                >
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Разработка сайтов</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Мобильные приложения</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Онлайн-реклама</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Контент</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col col__mobile">
            <div class="col__title">Продукты</div>
            <ul class="col__list">
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Рейтинги</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">По отраслям</nuxt-link>
              </li>
              <br />
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Работа с клиентами</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Управление проектами</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Маркетинг</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Финансы</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Управление бизнесом</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col col__mobile">
            <div class="col__title">Кейсы</div>
            <ul class="col__list">
              <li class="col__item">
                <nuxt-link no-prefetch to="/"
                  >Автоматизация сантехников</nuxt-link
                >
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Автоматизация клининга</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Автоматизация СТО</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/"
                  >Автоматизация сантехников</nuxt-link
                >
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Автоматизация клининга</nuxt-link>
              </li>
              <li class="col__item">
                <nuxt-link no-prefetch to="/">Автоматизация СТО</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__row">
          <div class="footer__socials socials">
            <a class="socials__link" href="#">
              <svg class="socials__icon">
                <use xlink:href="../assets/icons/Sprite.svg#facebook"></use>
              </svg>
            </a>
            <a class="socials__link" href="#">
              <svg class="socials__icon">
                <use xlink:href="../assets/icons/Sprite.svg#vk"></use>
              </svg>
            </a>
            <a class="socials__link" href="#">
              <svg class="socials__icon" style="margin-top: 4px">
                <use xlink:href="../assets/icons/Sprite.svg#youtube"></use></svg
            ></a>
          </div>
          <div class="footer__docs">
            <a href="#">О проекте</a>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  width: 100%;
  height: 594px;
  &__section {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #f2f2f2;
  }
  &__container {
    display: flex;
    flex-direction: column;
    padding: 80px 36px 80px;
  }
  &__cols {
    margin-bottom: 21px;
  }
  &__row {
    display: flex;
    justify-content: space-between;
  }
  &__docs {
    display: flex;
  }
  &__docs a {
    color: #808080;
    font-size: 12px;
    margin-right: 24px;
  }
  &__docs a:last-child {
    margin-right: 0;
  }
}
.cols {
  display: flex;
  justify-content: space-between;
}
.col {
  padding: 0 8px;
  &__title {
    font-size: 16px;
    margin-bottom: 16px;
  }
  &__item {
    margin: 16px 0;
    font-family: "IBM Plex Sans", sans-serif;
    color: #333;
    cursor: pointer;
    &:last-child {
      margin: 0 0;
    }
  }
  &__item button {
    border-radius: 4px;
    color: #fff;
    padding: 6px 17px;
  }
}
.socials {
  display: flex;
  &__link {
    display: block;
    margin-right: 24px;
  }
  &__icon {
    width: 25px;
    height: 25px;
    &:last-child {
      margin-right: 0;
    }
  }
}
@media screen and (max-width: 768px) {
  .footer {
    height: 450px;
    &__section {
      border-top: none;
    }
    &__container {
      padding: 50px 8px 50px;
    }
    &__row {
      flex-direction: column;
      align-items: center;
    }
    &__docs {
      flex-direction: column;
      align-items: center;
    }
  }
  col {
    &__item {
      margin: 8px 0;
    }
    &__mobile {
      display: none;
    }
  }
}
</style>
