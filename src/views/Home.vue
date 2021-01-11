<template>
  <div id="home">
    <CharactersList />
  </div>
</template>

<script>
import CharactersList from "@/components/CharactersList.vue";

export default {
  name: "Home",
  components: { CharactersList },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
