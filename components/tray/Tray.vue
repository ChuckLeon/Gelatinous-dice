<template>
  <div class="tray grid grid--6">      
    <Button v-for="(dice, index) in diceToRoll" :key="index" :number="dice" @clicked="onButtonClick" />           
  </div>
</template>

<script>
import Button from '../tray/Button.vue';

export default {
  components: { Button },

  data(){
    return{      
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