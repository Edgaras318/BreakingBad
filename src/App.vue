<template>
  <div id="app">
    <TheHeader />
    <Menu />
    <div class="main">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import Menu from "@/components/Menu";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheFooter,
    Menu,
    TheHeader,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_shared.scss";
</style>
