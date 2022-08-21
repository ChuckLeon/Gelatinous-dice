<template>
  <div class="tray row row--justify-center">      
    <Button number=4 @clicked="onButtonClick" />  
    <Button number=6 @clicked="onButtonClick" />  
    <Button number=8 @clicked="onButtonClick"/>  
    <Button number=10 @clicked="onButtonClick" />  
    <Button number=12 @clicked="onButtonClick" />  
    <Button number=20 @clicked="onButtonClick" />  
  </div>
</template>

<script>
import Button from '../tray/Button.vue';

export default {
  components: { Button },

  data(){
    return{
      activeDice: null,
    }
  },

  methods:{
    onButtonClick(number){
      this.$emit('addToGame', number);
    },
  }
}
</script>