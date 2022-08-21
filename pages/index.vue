<template>
  <div class="home">
    <Tray @addToGame="addDiceToGame" />
    
    <div class="home__content">
      <h1 class="title">Gelatinous Dice</h1>
      <div class="grid grid--3">
        <Dice max="4" ref="4" />
        <Dice max="6" ref="6" />
        <Dice max="8" ref="8" />
        <Dice max="10" ref="10" />
        <Dice max="12" ref="12" />
        <Dice max="20" ref="20" />
      </div>
    </div>
  </div>
</template>

<script>
import Dice from '../components/Dice.vue';
import Tray from '../components/tray/Tray.vue';
export default {
  head:{
    title: 'Gelatinous Dice',
  },

  components: { Dice, Tray },

  methods:{
    addDiceToGame(diceRef){
      this.$refs[diceRef].roll();
    }
  }
}
</script>
