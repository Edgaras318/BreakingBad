<template>
  <div>
    <div
      class="menu"
      :class="[
        { 'menu--on-scroll': scrollMenu && !showNavbar },
        { 'menu--open': showNavbar }
      ]"
    >
      <div @click="toggleMenu" class="menu-button">
        <div class="menu-button__bar1"></div>
        <div class="menu-button__bar2"></div>
      </div>
      <!-- / menu-button -->
    </div>
    <!-- / menu -->
    <Navbar @toggleMenu="toggleMenu" :showNavbar="showNavbar" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Menu",
  components: {
    Navbar
  },
  data() {
    return {
      scrollMenu: false,
      showNavbar: false
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
      if (this.showNavbar) {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    },
    onScroll() {
      if (window.scrollY > 40) {
        this.scrollMenu = true;
      } else {
        this.scrollMenu = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_menu.scss";
</style>
