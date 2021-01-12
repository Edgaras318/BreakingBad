<template>
  <div id="categories">
    <section class="categories-container">
      <h1 class="categories-container__title">Categories</h1>
      <div class="categories-images-wrapper">
        <img
          @click="selectCategory('Breaking bad')"
          class="categories-container__button"
          src="@/assets/CategoryIcons/breaking-bad-icon.jpg"
          alt="BreakingbadIcon"
        />
        <img
          @click="selectCategory('Better Call Saul')"
          class="categories-container__button"
          src="@/assets/CategoryIcons/BetterCallSaulCategoryIcon.png"
          alt="BetterCallSaulCategoryIcon"
        />
      </div>
      <!-- / categories-images-wrapper -->
    </section>
    <!-- / categories-container -->
    <CharactersList :characters="charactersByCategory" />
  </div>
</template>

<script lang="ts">
import CharactersService from "@/models/CharactersService";
import { CharacterInterface, Character } from "@/models/Character";
import CharactersList from "@/components/CharactersList.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Categories",
  components: {
    CharactersList,
  },
  data() {
    return {
      charactersByCategory: [] as CharacterInterface[],
      category: "Breaking bad",
    };
  },
  methods: {
    selectCategory(category: string) {
      this.category = category;
    },
  },
  watch: {
    async category() {
      this.charactersByCategory = await CharactersService.getTenCharactersByCategory(
        this.category
      );
    },
  },
  async mounted() {
    this.charactersByCategory = await CharactersService.getTenCharactersByCategory(
      this.category
    );
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_categories.scss";
</style>
