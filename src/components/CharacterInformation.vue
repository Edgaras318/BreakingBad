<template>
  <article class="character-info">
    <img
      class="character-info__img"
      :alt="character.name"
      :src="character.img"
    />
    <div class="character-info-wrapper">
      <p class="character-info__label">Name:</p>
      <p class="character-info__text">{{ character.name }}</p>
      <p class="character-info__label">Birthday:</p>
      <p
        class="character-info__text"
        v-if="character.birthday === null || character.birthday === 'Unknown'"
      >
        Unknown
      </p>
      <p v-else class="character-info__text">
        {{ character.birthday | formatDate }}
      </p>
      <p class="character-info__label">Nickname:</p>
      <p class="character-info__text">{{ character.nickname }}</p>

      <p class="character-info__label">Status:</p>
      <p class="character-info__text">{{ character.status }}</p>

      <p class="character-info__label">Occupation:</p>
      <div v-if="character.occupation !== null" class="character-info__list">
        <p
          class="character-info__text"
          v-for="(occup, index) in character.occupation"
          :key="'occup' + index"
        >
          {{ occup }},
        </p>
      </div>
      <p class="character-info__text" v-else>None</p>

      <p class="character-info__label">Appearance:</p>
      <div v-if="character.appearance !== null" class="character-info__list">
        <p
          class="character-info__text"
          v-for="(appear, index) in character.appearance"
          :key="'appear' + index"
        >
          {{ appear }},
        </p>
      </div>
      <p class="character-info__text" v-else>
        None
      </p>

      <p class="character-info__label">
        Better Call Saul Appearance:
      </p>
      <p
        v-if="character.better_call_saul_appearance !== null"
        class="character-info__text"
      >
        {{ character.better_call_saul_appearance }}
      </p>
      <p v-else class="character-info__text">
        None
      </p>

      <p class="character-info__label">Portrayed:</p>
      <p class="character-info__text">{{ character.portrayed }}</p>
      <p class="character-info__label">Category:</p>
      <p class="character-info__text">{{ character.category }}</p>
    </div>
    <!-- / character-info-wrapper -->
  </article>
  <!-- / character-info -->
</template>

<script>
export default {
  name: "CharacterInformation",
  props: {
    character: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_characterInformation.scss";
</style>
