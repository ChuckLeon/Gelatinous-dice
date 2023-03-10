<template>
  <div class="home">
    <Tray @addToGame="addDiceToGame" />

    <div class="home__content">
      <h1 class="title">Gelatinous Dice</h1>

      <div :class="'grid grid--' + gridLength">
        <Dice
          v-for="dice in diceToRoll"
          :key="dice.id"
          :id="dice.id"
          :max="dice.max"
          @removeDice="removeDiceFromGame"
        />
      </div>

      <div
        class="btn game-roller"
        @click="rollAllDice"
        v-if="diceToRoll.length > 0"
      >
        Roll all!
      </div>
    </div>
  </div>
</template>

<script>
import Dice from "../components/Dice.vue";
import Tray from "../components/tray/Tray.vue";
export default {
  head: {
    title: "Gelatinous Dice",
  },

  components: { Dice, Tray },

  data() {
    return {
      diceToRoll: [], //will be managed by the Tray
      gridMaxLength: 4,
    };
  },

  computed: {
    gridLength() {
      return this.diceToRoll.length < this.gridMaxLength
        ? this.diceToRoll.length
        : this.gridMaxLength;
    },
  },

  methods: {
    addDiceToGame(number) {
      this.diceToRoll.push({ id: this.generateGuid(), max: number });
    },

    removeDiceFromGame(id) {
      const newDiceToRoll = this.diceToRoll.filter((dice) => dice.id !== id);
      this.diceToRoll = newDiceToRoll;
    },

    rollAllDice() {
      this.diceToRoll.forEach((dice, index) => {
        this.$refs[index][0].roll();
      });
    },

    generateGuid() {
      var d = new Date().getTime(); //Timestamp
      var d2 =
        (typeof performance !== "undefined" &&
          performance.now &&
          performance.now() * 1000) ||
        0; //Time in microseconds since page-load or 0 if unsupported
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = Math.random() * 16; //random number between 0 and 16
          if (d > 0) {
            //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
          } else {
            //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
          }
          return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
    },
  },
};
</script>
