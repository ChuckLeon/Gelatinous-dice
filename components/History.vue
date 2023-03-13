<template>
  <div class="history">
    <p class="history__title">History</p>
    <div class="history__rolls">
      <p v-for="(roll, index) in rolls" :key="index">You rolled {{ roll }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rolls: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>

<style></style>
