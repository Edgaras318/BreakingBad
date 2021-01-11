<template>
  <router-link
    :to="{ name: 'Character', params: { char_id: character.char_id } }"
  >
    <img :src="character.img" :alt="character.name" class="character__img" />
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
    <!-- / viewcase-container -->
  </router-link>
</template>

<script>
export default {
  name: "CharacterTemplate",
  props: {
    character: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_characterTemplate.scss";
</style>
