<template>
  <ul class="menuList" ref="menuList">
    <li class="menuList-divider" v-for="item in menuListData" :key="item.id">
      <router-link
        class="menuList__item"
        :class="{ 'menuList__item--show': showMenuList }"
        :to="item.route"
      >
        <span class="menuList__text" @click="toggleMenu">
          <img
            class="menuList__icon"
            alt="triangle"
            src="@/assets/icons/menu-triangle.svg"
          />
          {{ item.text }}
        </span>
      </router-link>
    </li>
  </ul>
  <!-- / menuList -->
</template>

<script>
import MenuListData from "@/Data/MenuListData.js";

export default {
  name: "MenuList",
  props: ["showMenuList"],
  data() {
    return {
      menuListData: MenuListData,
    };
  },
  methods: {
    changeOpenState(func) {
      document.body.classList[func]("no-scroll");
      this.$refs.menuList.classList[func]("menuList--show");
    },
    toggleMenu() {
      this.$emit("toggleMenu");
    },
  },
  watch: {
    showMenuList: function(open) {
      if (open) {
        this.changeOpenState("add");
      } else {
        this.changeOpenState("remove");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_menuList.scss";
</style>
