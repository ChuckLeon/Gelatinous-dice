<template>
  <div class="dice-container" :class="{ active: isActive }">
    <div class="dice" @click="roll">
      <div class="content">
        <h3 class="text">D{{ max }}</h3>
        <div class="numberContainer" :class="{ rolling: isRolling }">
          <p
            :class="{ number: true, active: item === number }"
            v-for="item in shuffledArray"
            :key="item"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
    <button class="clear btn" @click="remove">x</button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String],
      required: true,
    },
    max: {
      type: [String, Number],
      required: true,
    },
  },

  data() {
    return {
      number: 0,
      isRolling: false,
      array: Array.from({ length: this.max }, (_, i) => i + 1),
      isActive: false,
    };
  },

  computed: {
    shuffledArray() {
      return this.array.sort((a, b) => 0.5 - Math.random());
    },
    rollTime() {
      return Math.min(this.max * 300 + 300, 2000);
    },
  },

  methods: {
    roll() {
      //reset dice
      this.number = 0;
      this.isRolling = true;

      var byteArray = new Uint8Array(1);
      window.crypto.getRandomValues(byteArray);

      var range = this.max;
      var max_range = 256;
      if (byteArray[0] >= Math.floor(max_range / range) * range) this.roll();

      setTimeout(() => {
        this.isRolling = false;
        this.number = parseInt(1 + (byteArray[0] % range));
      }, this.rollTime);
    },

    remove() {
      this.isActive = false;

      setTimeout(() => {
        this.$emit("removeDice", this.id);
      }, 300);
    },
  },

  mounted() {
    setTimeout(() => {
      this.isActive = !this.isActive;
    }, 100);
  },
};
</script>
