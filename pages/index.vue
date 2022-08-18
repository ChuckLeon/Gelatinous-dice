<template>
  <div class="home">
    <h1 class="title">Gelatinous Dice</h1>
    <div class="grid grid--3">
      <Dice max="4" />
      <Dice max="6" />
      <Dice max="8" />
      <Dice max="10" />
      <Dice max="12" />
      <Dice max="20" />
    </div>
  </div>
</template>

<script>
import Dice from '../components/Dice.vue';
export default {
  head:{
    title: 'Gelatinous Dice',
  },

  components: { Dice },
}
</script>
