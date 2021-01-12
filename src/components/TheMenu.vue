<template>
  <div>
    <div
      class="menu"
      :class="[
        { 'menu--on-scroll': scrollMenu && !showMenuList },
        { 'menu--open': showMenuList },
      ]"
    >
      <div @click="toggleMenu" class="menu-button">
        <div class="menu-button__bar1"></div>
        <div class="menu-button__bar2"></div>
      </div>
      <!-- / menu-button -->
    </div>
    <!-- / menu -->
    <TheMenuList @toggleMenu="toggleMenu" :showMenuList="showMenuList" />
  </div>
</template>

<script>
import TheMenuList from "@/components/TheMenuList";

export default {
  name: "Menu",
  components: {
    TheMenuList,
  },
  data() {
    return {
      scrollMenu: false,
      showMenuList: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    toggleMenu() {
      document
        .querySelector(".menu-button__bar1")
        .classList.toggle("menu-button__bar1--change");
      document
        .querySelector(".menu-button__bar2")
        .classList.toggle("menu-button__bar2--change2");
      if (this.showMenuList) {
        this.showMenuList = false;
      } else {
        this.showMenuList = true;
      }
    },
    onScroll() {
      if (window.scrollY > 40) {
        this.scrollMenu = true;
      } else {
        this.scrollMenu = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_menu.scss";
</style>
