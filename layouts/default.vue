<template>
  <div>
    <Header />
    <main>
      <div class="wrapper">
        <div class="container">
          <nuxt />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
