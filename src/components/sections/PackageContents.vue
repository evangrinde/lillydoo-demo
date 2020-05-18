<template>
  <div class="grid-x grid-padding-x">
    <div
      class="cell small-12 large-6"
      v-for="(product, ix) in packageContents"
      v-show="!product.rules || product.rules.includes(selectedOption)"
      :data-id="product.id"
      :key="ix"
    >
      <contents
        :image="product.image"
        :title="product.title"
        :features="product.features"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageContents",
  props: {
    selectedOption: Number
  },
  components: {
    Contents: () => import("@/components/micro/Contents")
  },
  data() {
    return {
      /*
      "packageContents": @array of @objects
       The property "rules" (if set) determines whether the given object is shown or not.
       If "rules" is set, packageContents(i) is shown iff the prop "selectedOption" is included within "rules" array.
      */
      packageContents: [
        {
          image: "windel.png",
          title: "10 Lillydoo Windeln",
          features: [
            "0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
            "Extra weich und super bequem",
            "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
          ]
        },
        {
          id: "water-wipes",
          image: "wipes-water.png",
          title: "15 Feuchttücher mit 99 % Wasser",
          features: [
            "0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
            "Extra weich und super bequem",
            "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
          ],
          rules: [1, 2, 3]
        },
        {
          id: "sensitive-wipes",
          image: "wipes-sensitive.jpg",
          title: "15 Sensitive Feuchttücher",
          features: [
            "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
            "Extra dickes und kompostierbares Tuch"
          ],
          rules: [4, 5]
        }
      ]
    };
  }
};
</script>
