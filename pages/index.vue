<template>
  <div class="home">
    <Tray @addToGame="addDiceToGame" />
    
    <div class="home__content">
      <h1 class="title">Gelatinous Dice</h1>
      <div class="grid grid--3">
        <Dice v-for="(dice, index) in diceToRoll" :key="index" :max="dice" :ref="index" />           
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

  data(){
    return{
      diceToRoll:[],
    }
  },

  methods:{
    addDiceToGame(diceRef){          
      this.diceToRoll.push(diceRef);      
    }
  }
}
</script>
