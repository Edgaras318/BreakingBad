<template>
  <div id="characters">
    <div v-if="loading">
      <TheSpinner />
    </div>
    <div class="scrollTo" v-else>
      <CharacterInformation :character="character" />
      <CharactersMoreList
        @scrollToView="scrollToView"
        :charactersByCategory="charactersByCategory"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CharactersService from "@/models/CharactersService";
import { CharacterInterface } from "@/models/Character";
import Vue from "vue";
import TheSpinner from "@/components/TheSpinner.vue";
import moment from "moment";
import CharacterInformation from "@/components/CharacterInformation.vue";
import CharactersMoreList from "@/components/CharactersMoreList.vue";

Vue.filter("formatDate", function(value: string) {
  if (value) {
    return moment(String(value)).format("YYYY-MM-DD");
  }
});

export default Vue.extend({
  name: "Character",
  components: {
    TheSpinner,
    CharacterInformation,
    CharactersMoreList,
  },
  data() {
    return {
      character: {} as CharacterInterface,
      charactersByCategory: [] as CharacterInterface[],
      loading: true,
    };
  },
  mounted() {
    this.getCharacterById();
  },
  methods: {
    moment() {
      return moment();
    },
    async getCharacterById() {
      this.character = await CharactersService.getCharacterById(
        this.$route.params.char_id
      );
      this.loading = false;
      setTimeout(() => this.scrollToView(), 1);
    },
    async getThreeCharactersByCategory() {
      this.charactersByCategory = await CharactersService.getThreeCharactersByCategory(
        this.character.category
      );
      this.loading = false;
    },
    scrollToView() {
      const el = this.$el.querySelector(".scrollTo");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  watch: {
    character() {
      this.getThreeCharactersByCategory();
    },
    $route() {
      this.loading = true;
      this.getCharacterById();
    },
  },
});
</script>
