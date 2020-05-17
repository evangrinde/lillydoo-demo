<template>
  <div class="grid-x grid-padding-x">
    <div
      class="cell small-12 large-6"
      v-for="(contents, ix) in packageContents"
      v-show="!contents.rules || contents.rules.includes(selectedOption)"
      :key="ix"
    >
      <contents
        :image="contents.image"
        :title="contents.title"
        :features="contents.features"
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
          rules: [1, 2, 3],
          image: "wipes-water.png",
          title: "15 Feuchttücher mit 99 % Wasser",
          features: [
            "0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
            "Extra weich und super bequem",
            "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
          ]
        },
        {
          rules: [4, 5],
          image: "wipes-sensitive.jpg",
          title: "15 Sensitive Feuchttücher",
          features: [
            "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
            "Extra dickes und kompostierbares Tuch"
          ]
        }
      ]
    };
  }
};
</script>
