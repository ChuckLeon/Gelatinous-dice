<template>
  <div class="tray__btn btn" @click="click">D{{ number }}</div>
</template>

<script>
export default {
    props:{
        number: {
            type: [String, Number],
            required: true,
        }
    },

    methods:{
        click(){
            this.$emit('clicked', this.number)
        },
    }
}
</script>