<template>
  <div>
    <h2>Entdecke unsere Hautfreundlichkeit</h2>
    <h6>Wähle Deine Grösse</h6>

    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell medium-auto" v-for="(option, ix) in options" :key="ix">
          <button
            :class="
              `button expanded ${
                option.id == selectedOption ? 'primary active' : 'secondary'
              }`
            "
            @click="selectOption(option.id)"
          >
            <p>{{ option.id }}</p>
            <span>({{ option.weight }} kg)</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSelection",
  data() {
    return {
      /*
      "options": @array of @objects
       Note: The property "id" is propagated to ancestral components to determine product images.
      */
      options: [
        {
          id: 1,
          weight: "2-3"
        },
        {
          id: 2,
          weight: "3-4"
        },
        {
          id: 3,
          weight: "4-7"
        },
        {
          id: 4,
          weight: "7-10"
        },
        {
          id: 5,
          weight: "10-12"
        }
      ],
      selectedOption: 1
    };
  },
  methods: {
    selectOption(ix) {
      this.selectedOption = ix;
      this.$emit("select", ix);
    }
  }
};
</script>

<style lang="scss" scoped>
.grid-container {
  margin-top: 0;
  margin-bottom: 0;
}

.cell {
  padding-right: 0.3125rem; /* 10px gutters */
  padding-left: 0.3125rem; /* 10px gutters */

  /* Small only */
  @media screen and (max-width: 39.9375em) {
    width: 29%;
  }

  .button {
    padding: 7px 5px;

    p {
      margin: 0;
      font-size: 1.3rem;
      line-height: 1;
    }

    span {
      line-height: 1;
      font-size: 0.8rem;
    }
  }
}
</style>
