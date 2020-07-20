<template>
  <div class="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/commons/Header.vue";
import Footer from "@/components/commons/Footer.vue";
import Main from "@/components/commons/Main.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    Main
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
