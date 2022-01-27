<template>
  <section class="companies">
    <div class="companies__container">
      <h1 class="companies__title">Каталог компаний</h1>
      <div class="companies__content">
        <div class="companies__left">
          <div class="search">
            <div class="search__form">
              <div class="companies__filters" v-on:click="openFilters()"></div>
              <label class="search__label">
                <input
                  type="text"
                  id="search"
                  placeholder="Поиск продукта или отрасли"
                  class="search__input"
                  v-model.trim.lazy="filters.search"
                />
                <button
                  v-on:click="resetSearchFilter()"
                  class="search__reset"
                  v-if="filters.search"
                >
                  <img src="../../assets/icons/CloseIcon.svg" alt="close" />
                </button>
              </label>
              <button v-on:click="setFilters()" class="search__btn">
                Найти
              </button>
            </div>
          </div>
          <div v-if="companies.data.length !== 0">
            <nuxt-link
              exact
              v-for="company in companies.data"
              :key="company.ident"
              :to="`companies/${company.id}`"
            >
              <CompanyCard
                :title="company.title"
                :description="company.description_short"
                :tags="company.companySpecializations"
                :logo="company.picture"
                :id="company.id"
              />
            </nuxt-link>
          </div>
          <div v-else class="placeholder">
            <p>Ничего не удалось найти.</p>
            <p>Попробуйте изменить условия поиска</p>
          </div>
        </div>
        <div class="companies__right">
          <div
            class="select select__mobile"
            :class="openMobileFilers ? 'open-filters' : 'close-filters'"
          >
            <div class="select__body">
              <span class="select__close" v-on:click="closeFilters()">
                <img src="../../assets/icons/CloseIcon.svg" alt="close" />
              </span>
              <label class="select__label"> Отрасль </label>
              <client-only>
                <div class="select__header">
                  <select
                    v-on:change="setFilters()"
                    v-model="filters.industry"
                  >
                    <option default value="">Все отрасли</option>
                    <option
                      v-for="industry in definitions.Industry"
                      :key="industry.ident"
                      :value="industry.id"
                      :id="industry.id"
                      class="select__option"
                    >
                      {{ industry.title }}
                    </option>
                  </select>
                </div>
              </client-only>
            </div>
            <div class="select__body">
              <label class="select__label">Специализация</label>
              <div class="select__header">
                <client-only>
                  <select
                    v-on:change="setFilters()"
                    v-model="filters.specialization"
                  >
                    <option default value="">Все специализации</option>
                    <option
                      v-for="specialization in definitions.CompanySpecialization"
                      :key="specialization.ident"
                      :value="specialization.id"
                      :id="specialization.id"
                      class="select__option"
                    >
                      {{ specialization.title }}
                    </option>
                  </select>
                </client-only>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="companies.data.length !== 0 && companies.meta.last_page > 1" class="paging">
        <ul class="paging__list pages">
          <li
            class="page"
            v-for="(page, index) in companies.meta.last_page"
            :key="index"
            v-on:click="setFilters()"
          >
            <button :class="focusPage(page)" v-on:click="setPage(page)">
              {{ page }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import CompanyCard from "../../components/CompanyCard.vue";

export default {
  components: {
    CompanyCard,
  },
  data() {
    return {
      filters: {
        search: "",
        page: "",
        industry: "",
        specialization: "",
      },
      needBlocked: false,
      openMobileFilers: false,
    };
  },
  created() {
    Object.assign(this.filters, this.$route.query);
  },
  async fetch({ store }) {
    const data = {
      search: this.filters.search,
      specialization: this.filters.specialization,
      industry: this.filters.industry,
      page: this.filters.page,
    };
    await store.dispatch("companies/fetchCompanies", data);
    await store.dispatch("companies/fetchDefinitions");
  },
  methods: {
    setFilters() {
      const data = {
        search: this.filters.search,
        specialization: this.filters.specialization,
        industry: this.filters.industry,
        page: this.filters.page,
      };
      this.$store.dispatch("companies/fetchCompanies", data);
      this.$router.push({
        path: this.$route.path,
        query: {
          search: this.filters.search,
          industry: this.filters.industry,
          specialization: this.filters.specialization,
          page: this.filters.page,
        },
      });
    },
    resetSearchFilter() {
      this.filters.search = "";
      this.setFilters();
    },
    setPage(page) {
      this.filters.page = page;
    },
    focusPage(page) {
      if (this.filters.page) {
        return page === Number(this.filters.page) ? "active" : "";
      } else {
        return page === 1 ? "active" : "";
      }
    },
    openFilters() {
      this.needBlocked = true;
      this.openMobileFilers = true;
    },
    closeFilters() {
      this.needBlocked = false;
      this.openMobileFilers = false;
    },
  },
  computed: {
    companies() {
      return this.$store.getters["companies/companies"];
    },
    definitions() {
      return this.$store.getters["companies/definitions"];
    },
  },
  watch: {
    filters: {
      handler: function (newValue) {
        const data = {
          search: newValue.search,
          specialization: newValue.specialization,
          industry: newValue.industry,
          page: newValue.page,
        };
        this.$store.dispatch("companies/fetchCompanies", data);
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="scss">
.companies {
  &__container {
    padding: 75px 0;
  }
  &__title {
    font-family: "Raleway", Helvetica, sans-serif;
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 18px;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 75px;
  }
  &__left {
    flex-basis: 792px;
  }
  &__right {
    padding: 0 0 0 16px;
  }
  &__filters {
    display: none;
  }
}
.search {
  display: flex;
  flex-direction: column;
  margin-bottom: 46px;
  &__form {
    display: flex;
  }
  &__label {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 4px 0px 0px 4px;
    padding: 8px 8px 8px 40px;
  }
  &__label:before {
    content: "";
    display: inline-block;
    position: absolute;
    height: 24px;
    width: 23px;
    left: 12px;
    background-image: url("../../assets/icons/Search.svg");
  }
  &__input {
    font-family: "Raleway", Helvetica, sans-serif;
    font-weight: 600;
    width: 100%;
    border: transparent;
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.5;
    text-overflow: ellipsis;
    opacity: 0.5;

    ::-webkit-input-placeholder {
      color: #626262;
      transition: opacity 0.3s ease;
    }

    ::-moz-placeholder {
      color: #626262;
      transition: opacity 0.3s ease;
    }

    :-moz-placeholder {
      color: #626262;
      transition: opacity 0.3s ease;
    }

    :-ms-input-placeholder {
      color: #626262;
      transition: opacity 0.3s ease;
    }

    &:focus {
      outline: none;
    }
  }
  &__reset {
    width: 24px;
    height: 24px;
  }
  &__btn {
    padding: 10px 18px;
    color: #ffffff;
    background: #030953;
    border-radius: 0px 4px 4px 0px;
  }
}
.select {
  width: 224px;
  padding: 20px 18px;
  background: #f7f7f7;
  border-radius: 4px;
  &__body {
    position: relative;
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__label {
    display: block;
    margin-bottom: 16px;
  }
  &__header {
    width: 100%;
    position: relative;
    display: flex;
    border-radius: 4px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
  }
  &__header select {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    width: 100%;
    background: transparent;
    border: none;
    padding: 10px 16px;
    z-index: 1;
  }
  &__header:after {
    content: "";
    display: block;
    position: absolute;
    height: 7px;
    width: 12px;
    right: 20px;
    top: 15px;
    bottom: 16px;
    background-image: url("../../assets/icons/Select.svg");
    cursor: pointer;
  }
  &__default {
    color: #1c1c1e;
    padding: 10px 16px;
  }
  &__menu {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    z-index: 10;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  &__option {
    cursor: pointer;
    line-height: 1;
    padding: 10px 16px;
    border-bottom: 1px solid #fafafa;
    &:hover {
      background: #f7f7f7;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    &:last-child {
      border-bottom: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  &__close {
    display: none;
  }
}
.open-filters {
  left: -5px;
}
.close-filters {
  left: -225px;
}
.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.4;
}
.placeholder img {
  height: 100px;
  width: 100px;
  opacity: 0.5;
  margin-bottom: 15px;
}
.placeholder p {
  font-size: 16px;
  margin-bottom: 5px;
  text-align: center;
}
.placeholder p:last-child {
  margin-bottom: 0;
}
.paging {
  margin-bottom: 30px;
}
.pages {
  display: flex;
  justify-content: center;
}
.page {
  margin-right: 8px;
}
.page:last-child {
  margin-right: 0;
}
.page button {
  padding: 8px 16px;
  font-size: 16px;
  color: #030953;
  &:hover {
    background: #f7f7f7;
    border-radius: 4px;
  }
  &.active {
    background: #f7f7f7;
    border-radius: 4px;
  }
}
@media screen and (max-width: 768px) {
  .select__mobile {
    position: absolute;
    top: 0;
    top: 150px;
    z-index: 4;
    transition: 0.3s;
    box-shadow: 0 3px 5px rgb(0 0 0 / 20%);
  }
  .select__close {
    display: block;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .companies__filters {
    display: block;
    opacity: 0.5;
    height: 44px;
    width: 44px;
    background: url("../../assets/icons/Filter.svg") center center no-repeat;
    font-family: "Raleway", Helvetica, sans-serif;
    font-weight: 600;
    font-size: 16px;
  }
  .companies__content {
    margin-bottom: 15px;
  }
  .companies__right {
    padding: 0;
  }
  .search {
    margin-bottom: 20px;
    display: flex;
  }
}
</style>
