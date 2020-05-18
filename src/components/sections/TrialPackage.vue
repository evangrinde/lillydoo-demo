<template>
  <div class="grid-x grid-padding-x align-middle">
    <div class="cell small-12 hide-for-large">
      <product-selection @select="selectOption" />
    </div>

    <div class="cell small-12 large-6">
      <div class="product-wrapper">
        <img class="oeko-tex" src="/images/misc/oekotex.svg" />
        <img
          id="product-option-img"
          :src="`/images/product-options/testpaket-${selectedOption}.jpg`"
          :data-src="`/images/product-options/testpaket-${selectedOption}.jpg`"
        />
      </div>
    </div>

    <div class="cell large-6 text-left">
      <product-selection class="show-for-large" @select="selectOption" />

      <p>
        Teste jetzt unsere Windeln und Feuchttücher - In Größe 1 - 3 enthält
        unser Testpaket unsere Feuchttücher mit 99 % Wasser, ab Gr. 4 erhältst
        Du unsere Sensitiven Feuchttücher. Wir zahlen die Produkte, Du nur den
        Versand.
      </p>

      <ul>
        <li>
          <a href="#"
            >Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50
            € pro Lieferung.</a
          >
        </li>
        <li>Preise inkl. MwSt., ggf. zzgl. <a href="#">Versandkosten</a></li>
      </ul>

      <a href="#" class="button primary expanded">In den warenkorb legen</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSelector",
  components: {
    ProductSelection: () => import("@/components/micro/ProductSelection")
  },
  data() {
    return {
      selectedOption: 1
    };
  },
  methods: {
    selectOption(ix) {
      this.selectedOption = ix;
      this.$emit("select", ix);
    }
  },
  mounted() {
    this.$emit("select", this.selectedOption);
  }
};
</script>

<style lang="scss" scoped>
.product-wrapper {
  position: relative;

  .oeko-tex {
    position: absolute;
    width: 24%;
    top: 13%;
    left: 9%;
    z-index: 10;
    box-shadow: -2px 2px 6px -3px rgba(0, 0, 0, 0.4);
    border-radius: 3px;
  }
}

ul {
  margin-bottom: 2rem;
}

.button {
  margin-top: 20px;
}
</style>
