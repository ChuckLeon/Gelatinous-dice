<template>
  <div class="dice" @click="roll">
      <div class="content">
          <h3 class="text">Click to roll this {{ max }}</h3>
          <div :class="{numberContainer: true, rolling: isRolling}">
            <p :class="{number: true, active: n === number}" v-for="n in parseInt(max)" :key="n">{{ n }}</p>                    
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        max: String,
    },

    data(){
        return{
            number: 0,
            isRolling: false,
        }
    },

    methods:{
        roll(){            
            var byteArray = new Uint8Array(1);
            window.crypto.getRandomValues(byteArray);

            var range = this.max;
            var max_range = 256;
            if(byteArray[0] >= Math.floor(max_range/range) * range)
                this.roll();

            this.isRolling = true;
            
            setTimeout(() => {
                this.isRolling = false;
                this.number = parseInt(1 + (byteArray[0] % range));                
            }, this.max * 300 + 300);                                         
        }
    }
}
</script>
