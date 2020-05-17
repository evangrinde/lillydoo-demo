<template>
  <div>
    <!-- Hero -->
    <section class="p-0">
      <hero />
    </section>

    <!-- Trial Package -->
    <section>
      <div class="grid-container">
        <trial-package @select="selectOption" />
      </div>
    </section>

    <!-- How It Works -->
    <section class="sidekick dark">
      <div class="grid-container">
        <div class="grid-x">
          <div class="cell small-12">
            <h2>Wie es funktionert</h2>
          </div>
        </div>
      </div>

      <div class="grid-container">
        <how-it-works />
      </div>
    </section>

    <!-- Package Contents -->
    <section>
      <div class="grid-container">
        <div class="grid-x">
          <div class="cell small-12">
            <h2>Dein Testpaket enthält</h2>
          </div>
        </div>
      </div>

      <div class="grid-container">
        <package-contents :selectedOption="selectedOption" />
      </div>
    </section>

    <!-- Footer -->
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Hero: () => import("@/components/sections/Hero"),
    TrialPackage: () => import("@/components/sections/TrialPackage"),
    HowItWorks: () => import("@/components/sections/HowItWorks"),
    PackageContents: () => import("@/components/sections/PackageContents")
  },
  data() {
    return {
      selectedOption: 1
    };
  },
  methods: {
    selectOption(ix) {
      this.selectedOption = ix;
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  max-height: 254px;
  height: 300px;
  background-image: url("/images/backgrounds/blowball-pattern.png");
  background-size: contain;
  background-repeat: repeat-x;
}
</style>
