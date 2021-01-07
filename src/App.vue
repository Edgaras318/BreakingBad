<template>
  <div id="app">
    <Header />
    <Menu />
    <div class="main">
      <router-view />
    </div>
    <Footerr />
  </div>
</template>

<script>
import Footerr from "@/components/Footer";
import Menu from "@/components/Menu";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Footerr,
    Menu,
    Header
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_shared.scss";
</style>
