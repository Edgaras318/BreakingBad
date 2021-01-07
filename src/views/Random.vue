<template>
  <div class="random-character c-padding">
    <div class="button-w">
      <button class="random-button" @click="getRandomCharacter">
        Get Random Character
      </button>
    </div>
    <!-- / button-w -->
    <div v-if="!character.name">
      <Spinner />
    </div>
    <article v-else class="view-character">
      <img class="view-character__img" :src="character.img" />
      <div class="view-character-info-wrapper">
        <p class="view-character__label">Name:</p>
        <p class="view-character__text">{{ character.name }}</p>
        <p class="view-character__label">Birthday:</p>
        <p class="view-character__text" v-if="character.birthday === 'Unknown'">
          {{ character.birthday }}
        </p>
        <p class="view-character__text" v-else>
          {{ character.birthday | formatDate }}
        </p>
        <p class="view-character__label">Nickname:</p>
        <p class="view-character__text">{{ character.nickname }}</p>
        <p class="view-character__label">Status:</p>
        <p class="view-character__text">{{ character.status }}</p>
        <p class="view-character__label">Occupation:</p>
        <div class="view-character__list">
          <p
            class="view-character__text"
            v-for="(occup, index) in character.occupation"
            :key="'occup' + index"
          >
            {{ occup }},
          </p>
        </div>
        <p class="view-character__label">Appearance:</p>
        <div class="view-character__list">
          <p
            class="view-character__text"
            v-for="(appear, index) in character.appearance"
            :key="'appear' + index"
          >
            {{ appear }},
          </p>
        </div>
        <p class="view-character__label">Better Call Saul Appearance:</p>
        <div class="view-character__list">
          <p
            class="view-character__text"
            v-for="(bcsAppear, index) in character.better_call_saul_appearance"
            :key="'bcsAppear' + index"
          >
            {{ bcsAppear }}
          </p>
        </div>
        <p class="view-character__label">Portrayed:</p>
        <p class="view-character__text">{{ character.portrayed }}</p>
        <p class="view-character__label">Category:</p>
        <p class="view-character__text">{{ character.category }}</p>
      </div>
    </article>
    <!-- / view-character -->
  </div>
</template>

<script lang="ts">
import { CharacterInterface } from "@/models/Character";
import moment from "moment";
import Vue from "vue";
import Spinner from "@/components/Spinner.vue";

export default Vue.extend({
  name: "Random",
  components: {
    Spinner
  },
  data() {
    return {
      character: {} as CharacterInterface
    };
  },
  methods: {
    getRandomCharacter(): void {
      this.character = {
        name: ""
      } as CharacterInterface;
      fetch("https://breakingbadapi.com/api/character/random")
        .then(res => res.json())
        .then(res =>
          res.map(
            (character: CharacterInterface) => (this.character = character)
          )
        );
    },
    moment: function() {
      return moment();
    }
  },
  mounted() {
    this.getRandomCharacter();
  }
});
</script>

<style lang="scss">
@import "@/assets/styles/_random-character.scss";
</style>
