<template>
  <div class="tray row row--justify-center">      
    <Button v-for="(dice, index) in diceToRoll" :key="index" :number="dice" @clicked="onButtonClick" />           
  </div>
</template>

<script>
import Button from '../tray/Button.vue';

export default {
  components: { Button },

  data(){
    return{
      activeDice: null,
      diceToRoll:[4,6,8,10,12,20],
    }
  },

  methods:{
    onButtonClick(number){
      this.$emit('addToGame', number);
    },
  }
}
</script>