<template>
  <div id="characters">
    <div v-if="!character.name">
      <Spinner />
    </div>
    <div class="scrollTo" v-else>
      <CharacterInformation :character="character" />
    </div>
    <CharactersMoreList
      @scrollToView="scrollToView"
      :charactersByCategory="charactersByCategory"
    />
  </div>
</template>

<script lang="ts">
import CharactersService from "@/models/CharactersService";
import { CharacterInterface, Character } from "@/models/Character";
import Vue from "vue";
import Spinner from "@/components/Spinner.vue";
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
    Spinner,
    CharacterInformation,
    CharactersMoreList,
  },
  data() {
    return {
      character: {} as CharacterInterface,
      charactersByCategory: [] as CharacterInterface[],
      charId: this.$route.params.char_id,
    };
  },
  methods: {
    moment: function() {
      return moment();
    },
    scrollToView() {
      const el = this.$el.querySelector(".scrollTo");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  async mounted() {
    this.character = await CharactersService.getCharacterById(this.charId);
  },
  watch: {
    async character() {
      this.charactersByCategory = await CharactersService.getCharactersByCategory(
        this.character.category
      );
    },
    $route: async function() {
      this.character = await CharactersService.getCharacterById(
        this.$route.params.char_id
      );
    },
  },
});
</script>

<style lang="scss"></style>
