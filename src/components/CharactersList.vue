<template>
  <div id="charactersList">
    <div v-if="characters.length === 0">
      <Spinner />
    </div>
    <section class="character-container">
      <CharacterListFilter :characters="characters" />
      <article
        v-scrollanimation
        class="character c-padding"
        v-for="character in characters"
        :key="character.id"
      >
        <CharacterTemplate :character="character" />
      </article>
    </section>
    <!-- / character-container -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { CharacterInterface } from "@/models/Character";
import CharactersService from "@/models/CharactersService";
import CharacterListFilter from "@/filters/CharacterListFilter.vue";
import Spinner from "@/components/Spinner.vue";
import CharacterTemplate from "@/components/CharacterTemplate.vue";

export default Vue.extend({
  name: "CharactersList",
  components: {
    CharacterListFilter,
    Spinner,
    CharacterTemplate,
  },
  data() {
    return {
      characters: [] as CharacterInterface[],
    };
  },
  async mounted() {
    this.characters = await CharactersService.getTenCharacters();
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_charactersList.scss";
</style>
