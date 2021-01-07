<template>
  <div>
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
      <!-- / view-character-info-wrapper -->
    </article>
    <!-- / view-character -->
    <section class="more-char-container">
      <h1 class="more-char-container__text">More characters</h1>
      <hr />
      <div class="spinner" v-if="!charactersByCategory.length">
        <Spinner />
      </div>
      <div class="character-more-wrapper">
        <article
          else
          @click="scrollToView"
          v-scrollanimation
          class="character-more c-padding"
          v-for="characterByCategory in charactersByCategory"
          :key="characterByCategory.id"
        >
          <router-link
            :to="{
              name: 'Character',
              params: { char_id: characterByCategory.char_id }
            }"
          >
            <img
              :src="characterByCategory.img"
              :alt="characterByCategory.name"
              class="character-more__img"
            />
            <span
              class="character-more__label"
              :class="{
                'character__label--alive':
                  characterByCategory.status === 'Alive'
              }"
              >{{ characterByCategory.status }}</span
            >
            <h3 class="character-more__title">
              {{ characterByCategory.name }}
            </h3>
            <div class="viewcase-container">
              <img src="@/assets/icons/white-arrow.svg" alt="" />
              <span class="character-more__button">View character</span>
            </div>
          </router-link>
        </article>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { CharacterInterface, Character } from "@/models/Character";
import Vue from "vue";
import Spinner from "@/components/Spinner.vue";
import moment from "moment";

Vue.filter("formatDate", function(value: string) {
  if (value) {
    return moment(String(value)).format("YYYY-MM-DD");
  }
});

export default Vue.extend({
  name: "Character",
  components: {
    Spinner
  },
  data() {
    return {
      character: {} as CharacterInterface,
      charactersByCategory: [] as CharacterInterface[],
      charId: this.$route.params.char_id
    };
  },
  methods: {
    scrollToView() {
      const el = this.$el.querySelector('.view-character');
      if(el) {el.scrollIntoView({behavior: "smooth"});}
    },
    getCharacterById(id: string): void {
      fetch(`https://breakingbadapi.com/api/characters/${id}`)
        .then(res => res.json())
        .then(res =>
          res.map(
            (character: CharacterInterface) => (this.character = character)
          )
        );
    },
    async getCharactersByCategory(category: string): Promise<Character[]> {
      return fetch(
        `https://breakingbadapi.com/api/characters?category=${category}&limit=3&offset=1`
      )
        .then(res => res.json())
        .then(res =>
          res.map(
            (character: CharacterInterface) => character as CharacterInterface
          )
        );
    },
    moment: function() {
      return moment();
    }
  },
  mounted() {
    this.getCharacterById(this.charId);
  },
  watch: {
    async character() {
      this.charactersByCategory = await this.getCharactersByCategory(
        this.character.category
      );
    },
     $route: function() {
       this.getCharacterById(this.$route.params.char_id);
     }
  }
});
</script>

<style lang="scss">
@import "@/assets/styles/_view-character.scss";
</style>
