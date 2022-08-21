<template>
  <div class="home">
    <Tray @addToGame="addDiceToGame" />
    
    <div class="home__content">
      <h1 class="title">Gelatinous Dice</h1>
      <div :class="'grid grid--' + gridLength ">
        <Dice v-for="(dice, index) in diceToRoll" :key="index" :max="dice" :ref="index" />           
      </div>

      <div class="btn game-roller" @click="rollAllDice" v-if="diceToRoll.length > 0">
        Roll all!
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
      gridMaxLength: 4,
    }
  },

  computed:{
    gridLength(){
      return this.diceToRoll.length < this.gridMaxLength ? this.diceToRoll.length : this.gridMaxLength;
    }
  },

  methods:{
    addDiceToGame(diceRef){          
      this.diceToRoll.push(diceRef);      
    },

    rollAllDice(){
      this.diceToRoll.forEach((dice, index) => {
        this.$refs[index][0].roll();
      });
    }
  }
}
</script>
