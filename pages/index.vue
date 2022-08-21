<template>
  <div class="home">
    <Tray @addToGame="addDiceToGame" />
    
    <div class="home__content">
      <h1 class="title">Gelatinous Dice</h1>
      
      <div :class="'grid grid--' + gridLength ">
        <Dice v-for="(dice, index) in diceToRoll" :key="index" 
          :id="index" 
          :max="dice" 
          :ref="index"
          @removeDice="removeDiceFromGame" />           
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
      diceToRoll:[], //will be managed by the Tray
      gridMaxLength: 4,
    }
  },

  computed:{
    gridLength(){
      return this.diceToRoll.length < this.gridMaxLength ? this.diceToRoll.length : this.gridMaxLength;
    }
  },

  methods:{
    addDiceToGame(number){          
      this.diceToRoll.push(number);      
    },

    removeDiceFromGame(id){                
      this.diceToRoll.splice(id, 1);
    },

    rollAllDice(){
      this.diceToRoll.forEach((dice, index) => {
        this.$refs[index][0].roll();
      });
    }
  }
}
</script>
