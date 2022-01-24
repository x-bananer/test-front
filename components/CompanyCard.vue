<template>
  <div class="card" :id="id">
    <div class="card__body">
      <div class="card__img">
        <img :src="logo" />
      </div>
      <div class="card__desc">
        <h2 class="card__title">{{ title }}</h2>
        <p class="card__text">{{ description }}</p>
        <ul class="card__tags tags">
          <li v-for="tag in tags" :key="tag.ident" class="card__tag tag">
            {{ tag.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "ident", "logo", "title", "description", "tags"],
};
</script>

<style scoped lang="scss">
.card {
  margin: 0 -24px;
  position: relative;
  &:hover {
    background: rgba(3, 9, 83, 0.03);
    border-radius: 8px;
    &:after {
      opacity: 1;
    }
    .card__tag {
      background: #ffffff;
    }
    .card__title {
      color: #ef3e4a;
    }
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 14px;
    width: 19px;
    right: 18px;
    bottom: 23px;
    background-image: url("../assets/icons/Arrow.svg");
    opacity: 0;
    transition: all 0.3s;
    cursor: pointer;
  }
  &__body {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    cursor: pointer;
  }
  &__img {
    flex-grow: 1;
    flex-basis: 140px;
    margin-right: 20px;
  }
  &__img img {
    min-width: 140px;
  }
  &__title {
    color: #030953;
  }
  &__desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 4;
    flex-basis: 524px;
  }
  &__text {
    margin-bottom: 16px;
    color: #333333;
  }
  &__body,
  &__title,
  &__tag {
    transition: 0.3s;
  }
}

@media screen and (max-width: 1120px) {
  .card {
    margin: 0px 0px;
    &__body {
      padding: 15px;
    }
  }
}
</style>
