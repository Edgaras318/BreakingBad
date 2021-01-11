<template>
  <section class="more-char-container">
    <h1 class="more-char-container__text">More characters</h1>
    <hr class="more-char-container__divider" />
    <div class="spinner" v-if="!charactersByCategory.length">
      <Spinner />
    </div>
    <div class="more-char-wrapper">
      <article
        else
        @click="scrollToView"
        v-scrollanimation
        class="more-char-list"
        v-for="characterByCategory in charactersByCategory"
        :key="characterByCategory.id"
      >
        <CharacterTemplate :character="characterByCategory" />
      </article>
    </div>
  </section>
</template>

<script>
import CharacterTemplate from "@/components/CharacterTemplate.vue";
import Spinner from "@/components/Spinner.vue";
export default {
  name: "CharactersMoreList",
  props: {
    charactersByCategory: {
      type: Array,
    },
  },
  components: {
    CharacterTemplate,
    Spinner,
  },
  methods: {
    scrollToView() {
      this.$emit("scrollToView");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_charactersMoreList.scss";
</style>
