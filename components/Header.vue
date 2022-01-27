<template>
  <header class="header" :class="this.$route.name === 'Companies-id' ? 'back-dark' : 'back-light'">
    <section class="header__section">
      <div class="header__container container">
        <div class="header__logo logo">
          <nuxt-link no-prefetch exact to="/" class="logo__icon logo-dark">
            <Icon name="Logo" />
          </nuxt-link>
          <nuxt-link no-prefetch exact to="/" class="logo__icon logo-light">
            <Icon name="LogoLight" />
          </nuxt-link>
        </div>
        <nav class="header__menu menu menu__opened" :class="menuOpened ? 'd-flex' : 'd-none-mobile'">
          <span class="menu__close" :class="closeMenuButton ? 'd-block' : 'd-none'" v-on:click="closeMenu()">
          </span>
          <nuxt-link
            no-prefetch
            exact
            to="/"
            class="header__link"
            active-class="active"
          >
            <span v-on:click="closeMenu()">Тендеры</span>
          </nuxt-link>
          <nuxt-link
            no-prefetch
            to="/companies"
            class="header__link"
            active-class="active"
          >
            <span v-on:click="closeMenu()">Компании</span>
          </nuxt-link>
          <nuxt-link
            no-prefetch
            exact
            to="/"
            class="header__link"
            active-class="active"
          >
            <span v-on:click="closeMenu()">Продукты</span>
          </nuxt-link>
          <nuxt-link
            no-prefetch
            exact
            to="/"
            class="header__link"
            active-class="active"
          >
            <span v-on:click="closeMenu()">Кейсы</span>
          </nuxt-link>
          <nuxt-link
            no-prefetch
            exact
            to="/"
            class="header__link"
            active-class="active"
          >
            <span v-on:click="closeMenu()">Блог</span>
          </nuxt-link>
        </nav>

        <div class="header__login">
          <nuxt-link no-prefetch exact to="/" class="header__link"
            >Вход и регистрация</nuxt-link
          >
        </div>
        <span class="header__hamburger hamburger" v-on:click="openMenu()">
          <span class="hamburger__plank"></span>
          <span class="hamburger__plank"></span>
          <span class="hamburger__plank"></span>
        </span>
      </div>
    </section>
  </header>
</template>

<script>
import Icon from "../assets/icons/Icon";

export default {
  name: "Navbar",
  components: {
    Icon,
  },
  data() {
    return {
      needBlocked: false,
      closeMenuButton: false,
      menuOpened: false,
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: this.needBlocked ? "body-block" : "body-unblock",
      },
    };
  },
  methods: {
    openMenu() {
      this.needBlocked = true;
      this.closeMenuButton = true;
      this.menuOpened = true;
    },
    closeMenu() {
      this.closeMenuButton = false;
      this.needBlocked = false;
      this.menuOpened = false;
    },
  },
};
</script>

<style scoped lang="scss">
$brandColor: #030953;

.header {
  border-bottom: 1px solid #f2f2f2;
  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 25px;
  }
  &__menu {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }
  &__link {
    padding: 10px 15px;
    color: $brandColor;
    &.active {
      color: $brandColor;
      opacity: 0.3;
    }
  }
  &__login {
    white-space: nowrap;
  }
}
.hamburger {
  width: 24px;
  height: 20px;
  flex-direction: column;
  justify-content: space-between;
  display: none;
  cursor: pointer;
  &__plank {
    display: block;
    background: #030953;
    height: 5px;
    border-radius: 10px;
  }
}

@media screen and (max-width: 768px) {
  .hamburger {
    display: inline-flex;
  }
  .menu {
    &__close {
      cursor: pointer;
      position: absolute;
      right: 16px;
      top: 25px;
      width: 30px;
      height: 30px;
      z-index: 2;
      background: url("../assets/icons/CloseIcon.svg") center center no-repeat;
    }
    &__opened {
      position: fixed;
      background-color: #f2f2f2;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
      z-index: 2;
    }
  }
  .header {
    &__container {
      justify-content: space-between;
      padding: 8px 8px;
    }
    &__menu {
      flex-direction: column;
      justify-content: start;
      align-items: center;
      font-size: 18px;
      padding: 24px 0;
    }
    &__login {
      margin-left: auto;
    }
  }
}

</style>
