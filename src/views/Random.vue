<template>
  <div class="random-character c-padding">
    <div class="button-w">
      <button @click="this.loadRandomCharacter" class="random-button">
        Get Random Character
      </button>
    </div>
    <!-- / button-w -->
    <div v-if="loading">
      <TheSpinner />
    </div>
    <div v-else>
      <CharacterInformation :character="character" />
    </div>
  </div>
</template>

<script lang="ts">
import { CharacterInterface } from "@/models/Character";
import moment from "moment";
import Vue from "vue";
import TheSpinner from "@/components/TheSpinner.vue";
import CharactersService from "@/models/CharactersService";
import CharacterInformation from "@/components/CharacterInformation.vue";

export default Vue.extend({
  name: "Random",
  components: {
    TheSpinner,
    CharacterInformation,
  },
  data() {
    return {
      character: {} as CharacterInterface,
      loading: true,
    };
  },
  methods: {
    moment() {
      return moment();
    },
    async getRandomCharacter() {
      this.character = await CharactersService.getRandomCharacter();
      this.loading = false;
    },
    load() {
      this.loading = true;
    },
    loadRandomCharacter() {
      this.getRandomCharacter();
      this.load();
    },
  },
  async mounted() {
    this.character = await CharactersService.getRandomCharacter();
    this.loading = false;
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_randomCharacterButton.scss";
</style>
