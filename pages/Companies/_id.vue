<template>
  <section class="company">
    <div class="company__container">
      <nuxt-link no-prefetch to="/companies" class="back"> Компании </nuxt-link>
      <h1 class="company__title">{{ company.title }}</h1>
    </div>
    <div class="company__content">
      <div class="company__left">
        <div class="company__stat">
          <div class="company__age">
            <span class="big-and-red" style="margin-right: 5px">{{
              company.age
            }}</span>
            <span class="rubik">{{ company.age | declOfNum }}</span>
          </div>
          <div class="company__staff">
            <span class="big-and-red" style="margin-right: 5px"
              >{{ company.staff }}
            </span>
            <span class="rubik">{{ company.staff | declOfMan }}</span>
          </div>
        </div>
        <div class="company__subtitle">
          {{ company.description_short }}
        </div>
        <div class="company__desc">
          {{ company.description_full }}
        </div>
        <div class="company__features features">
          <div v-if="company.industries.length" class="features__group">
            <div class="features__title">Проектная специализация</div>
            <ul class="features__tags tags">
              <li
                v-for="tag in company.industries"
                :key="tag.ident"
                class="tag"
              >
                {{ tag.title }}
              </li>
            </ul>
          </div>
          <div
            v-if="company.companySpecializations.length"
            class="features__group"
          >
            <div class="features__title">Отрасль</div>
            <ul class="features__tags tags">
              <li
                v-for="tag in company.companySpecializations"
                :key="tag.ident"
                class="tag"
              >
                {{ tag.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="company__right">
        <div class="company__info info">
          <div class="info__logo">
            <img :src="company.picture" alt="" />
          </div>
          <div class="info__desc">
            <div class="info__title">Сайт:</div>
            <div v-if="company.url" class="info__content">
              <a :href="company.url">{{ company.url }}</a>
            </div>
            <div v-else class="info__content">—</div>
          </div>
          <div class="info__desc">
            <div class="info__title">E-mail:</div>
            <div v-if="company.contact_email" class="info__content">
              <a :mailto="company.contact_email">{{ company.contact_email }}</a>
            </div>
            <div v-else class="info__content">—</div>
          </div>
          <div class="info__desc">
            <div class="info__title">Телефон:</div>
            <div v-if="company.contact_phone" class="info__content">
              <a :tel="'+' + company.contact_phone"
                >+{{ company.contact_phone }}</a
              >
            </div>
            <div v-else class="info__content">—</div>
          </div>
          <div class="info__desc">
            <div class="info__title">Telegram:</div>
            <div v-if="company.contact_telegram" class="info__content">
              {{ company.contact_telegram }}
            </div>
            <div v-else class="info__content">—</div>
          </div>
          <div class="info__desc">
            <div class="info__title">WhatsApp:</div>
            <div v-if="company.contact_whatsapp" class="info__content">
              {{ company.contact_whatsapp }}
            </div>
            <div else class="info__content">—</div>
          </div>
          <div class="info__desc">
            <div class="info__title">Skype:</div>
            <div v-if="company.contact_skype" class="info__content">
              {{ company.contact_skype }}
            </div>
            <div v-else class="info__content">—</div>
          </div>
          <div class="info__desc">
            <div class="info__title">Город:</div>
            <div class="info__content">
              {{ company.city.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch("companies/fetchCompany", params.id);
  },
  computed: {
    company() {
      return this.$store.getters["companies/company"].data;
    },
  },
  filters: {
    declOfNum: function (value) {
      value = Math.abs(value) % 100;
      let n = value % 10;
      if (value > 10 && value < 20) { return "лет";}
      if (n > 1 && n < 5) { return "года"; }
      if (n == 1) { return "год"; }
      return "лет";
    },
    declOfMan: function (value) {
      value = Math.abs(value) % 100;
      let n = value % 10;
      if (value > 10 && value < 20) { return "человек"; }
      if (n > 1 && n < 5) { return "человека"; }
      if (n == 1) { return "человек"; }
      return "человек";
    },
  },
};
</script>

<style scoped lang="scss">
.company {
  padding: 40px 0;
  &__container {
    margin-bottom: 26px;
  }
  &__content {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-family: "Raleway", Helvetica, sans-serif;
    font-weight: 600;
    font-size: 36px;
  }
  &__left {
    flex-basis: 792px;
  }
  &__stat {
    display: flex;
    margin-bottom: 10px;
  }
  &__age {
    display: flex;
    font-weight: 300;
    margin-right: 20px;
  }
  &__staff {
    display: flex;
    font-weight: 300;
  }
  &__subtitle {
    margin-bottom: 24px;
    font-size: 18px;
    color: #333333;
  }
  &__desc {
    margin-bottom: 40px;
    color: #333333;
  }
  &__info {
    padding: 0 37px;
    width: 264px;
  }
}
.info {
  &__desc {
    margin-bottom: 20px;
  }
  &__logo {
    width: 120px;
    height: 120px;
  }
  &__title {
    margin-bottom: 5px;
    color: #808080;
  }
  &__content a {
    color: #030953;
    cursor: pointer;
  }
}
.features {
  &__group {
    margin-bottom: 40px;
  }
  &__group:last-child {
    margin-bottom: 10px;
  }
  &__title {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 24px;
  }
}
</style>
