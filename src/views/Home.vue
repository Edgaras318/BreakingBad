<template>
  <div id="character">
    <section class="character-container">
      <div class="sort-group-container c-padding">
        <div class="sort-container">
          <span class="sort-container__title">Sort by</span>
          <div>
            <span class="sort-container__placeholder">
              {{ selectedPlaceholder }}</span
            >
            <img
              src="@/assets/icons/select-triangle.svg"
              alt=""
              class="sort-container__icon"
            />
            <select
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
      <!-- / character-container -->
      <div class="spinner" v-if="!characters.length">
        <Spinner />
      </div>
      <article
        else
        v-scrollanimation
        class="character c-padding"
        v-for="character in characters"
        :key="character.id"
      >
        <router-link
          :to="{ name: 'Character', params: { char_id: character.char_id } }"
        >
          <img
            :src="character.img"
            :alt="character.name"
            class="character__img"
          />
          <span
            class="character__label"
            :class="{ 'character__label--alive': character.status === 'Alive' }"
            >{{ character.status }}</span
          >
          <h3 class="character__title">{{ character.name }}</h3>
          <div class="viewcase-container">
            <img src="@/assets/icons/blue-arrow.svg" alt="" />
            <span class="character__button">View character</span>
          </div>
        </router-link>
      </article>
    </section>
    <!-- / character-container -->
  </div>
</template>

<script lang="ts">
import CharactersService from "@/models/CharactersService";
import { CharacterInterface } from "@/models/Character";
import Spinner from "@/components/Spinner.vue";
import Vue from "vue";

export default Vue.extend({
  name: "character",
  components: {
    Spinner
  },
  data() {
    return {
      characters: [] as CharacterInterface[],
      selectedPlaceholder: ""
    };
  },
  async mounted() {
    this.characters = await CharactersService;
  },
  watch: {
    selectedPlaceholder() {
      if (this.selectedPlaceholder == "name") {
        this.sortByName();
      } else {
        this.sortByAlive();
      }
    }
  },
  methods: {
    sortByName(): void {
      this.characters.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortByAlive(): void {
      this.characters.sort((a, b) => (a.status > b.status ? 1 : -1));
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_character.scss";
</style>
