<template>
  <div id="app">
    <TheHeader />
    <TheMenu />
    <div class="main">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import TheMenu from "@/components/TheMenu";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheFooter,
    TheMenu,
    TheHeader,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_shared.scss";
</style>
