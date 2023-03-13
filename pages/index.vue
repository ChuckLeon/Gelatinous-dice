<template>
  <div class="home">
    <Tray @addToGame="addDiceToGame" />
    <History :rolls="rollsHistory" />

    <div class="home__content">
      <h1 class="title">Gelatinous Dice</h1>

      <div :class="'grid grid--' + gridLength">
        <Dice
          v-for="dice in diceToRoll"
          :key="dice.id"
          :id="dice.id"
          :max="dice.max"
          :ref="dice.id"
          @removeDice="removeDiceFromGame"
          @handleDiceRoll="handleDiceRoll"
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
import History from "../components/History.vue";

import Helper from "../scripts/helpers";

export default {
  head: {
    title: "Gelatinous Dice",
  },

  components: { Dice, Tray },

  data() {
    return {
      diceToRoll: [], //will be managed by the Tray
      rollsHistory: [],
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
      const guid = Helper.GenerateGuid();
      this.diceToRoll.push({ id: guid, max: number });
    },

    removeDiceFromGame(id) {
      const newDiceToRoll = this.diceToRoll.filter((dice) => dice.id !== id);
      this.diceToRoll = newDiceToRoll;
    },

    rollAllDice() {
      this.diceToRoll.forEach((dice) => {
        this.$refs[dice.id][0].roll();
      });
    },

    handleDiceRoll(number) {
      this.rollsHistory.push(number);
    },
  },
};
</script>
