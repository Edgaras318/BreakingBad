<template>
  <div id="categories">
    <section class="categories-container">
      <h1 class="categories-container__title">Categories</h1>
      <div class="categories-images-wrapper">
        <img
          @click="selectCategory('Breaking bad')"
          class="categories-container__button"
          src="@/assets/CategoryIcons/breaking-bad-icon.webp"
          alt="BreakingbadIcon"
        />
        <img
          @click="selectCategory('Better Call Saul')"
          class="categories-container__button"
          src="@/assets/CategoryIcons/BetterCallSaulCategoryIcon.webp"
          alt="BetterCallSaulCategoryIcon"
        />
      </div>
      <!-- / categories-images-wrapper -->
    </section>
    <!-- / categories-container -->
    <div v-if="loading">
      <TheSpinner />
    </div>
    <div v-else><CharactersList :characters="charactersByCategory" /></div>
  </div>
</template>

<script lang="ts">
import CharactersService from "@/models/CharactersService";
import { CharacterInterface, Character } from "@/models/Character";
import CharactersList from "@/components/CharactersList.vue";
import Vue from "vue";
import TheSpinner from "@/components/TheSpinner.vue";

export default Vue.extend({
  name: "Categories",
  components: {
    CharactersList,
    TheSpinner,
  },
  data() {
    return {
      charactersByCategory: [] as CharacterInterface[],
      category: "Breaking bad",
      loading: true,
    };
  },
  methods: {
    selectCategory(category: string) {
      this.category = category;
    },
    async getTenCharactersByCategory() {
      this.charactersByCategory = await CharactersService.getTenCharactersByCategory(
        this.category
      );
      this.loading = false;
    },
  },
  watch: {
    category() {
      this.loading = true;
      this.getTenCharactersByCategory();
    },
  },
  mounted() {
    this.getTenCharactersByCategory();
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_categories.scss";
</style>
