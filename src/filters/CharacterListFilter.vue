<template>
  <div class="sort-group-container c-padding">
    <div class="sort-container">
      <div>
        <label for="sort" class="sort-container__title">Sort by</label>
        <span class="sort-container__placeholder">
          {{ selectedPlaceholder }}</span
        >
        <img
          src="@/assets/icons/select-triangle.svg"
          alt=""
          class="sort-container__icon"
        />
        <select
          id="sort"
          v-model="selectedPlaceholder"
          class="sort-container__select"
        >
          <option value="name">name</option>
          <option value="alive">alive</option>
        </select>
      </div>
    </div>
    <!-- / sort-container -->
  </div>
</template>

<script>
export default {
  name: "CharacterListFilter",
  props: {
    characters: {
      type: Array,
    },
  },
  data() {
    return {
      selectedPlaceholder: "",
    };
  },
  watch: {
    selectedPlaceholder() {
      if (this.selectedPlaceholder == "name") {
        this.sortByName();
      } else {
        this.sortByAlive();
      }
    },
  },
  methods: {
    sortByName() {
      this.characters.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortByAlive() {
      this.characters.sort((a, b) => (a.status > b.status ? 1 : -1));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_charactersListFilter.scss";
</style>
