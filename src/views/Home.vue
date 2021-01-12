<template>
  <div id="home">
    <CharactersList :characters="characters" />
  </div>
</template>

<script lang="ts">
import CharactersList from "@/components/CharactersList.vue";
import { CharacterInterface } from "@/models/Character";
import CharactersService from "@/models/CharactersService";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: { CharactersList },
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

<style lang="scss"></style>
