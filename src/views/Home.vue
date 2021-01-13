<template>
  <div id="home">
    <div v-if="loading">
      <TheSpinner />
    </div>
    <div v-else>
      <CharactersList :characters="characters" />
    </div>
  </div>
</template>

<script lang="ts">
import CharactersList from "@/components/CharactersList.vue";
import { CharacterInterface } from "@/models/Character";
import CharactersService from "@/models/CharactersService";
import Vue from "vue";
import TheSpinner from "@/components/TheSpinner.vue";

export default Vue.extend({
  name: "Home",
  components: { CharactersList, TheSpinner },
  data() {
    return {
      characters: [] as CharacterInterface[],
      loading: true,
    };
  },
  mounted() {
    this.getTenCharacters();
  },
  methods: {
    async getTenCharacters() {
      this.characters = await CharactersService.getTenCharacters();
      this.loading = false;
    },
  },
});
</script>

<style lang="scss"></style>
