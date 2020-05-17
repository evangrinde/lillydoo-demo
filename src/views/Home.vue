<template>
  <div>
    <section>
      <hero />
    </section>

    <section class="sidekick">
      <div class="grid-container">
        <test-packet />
      </div>
    </section>

    <section id="how-it-works" class="sidekick dark">
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

    <section>
      <div class="grid-container">
        <div class="grid-x">
          <div class="cell small-12">
            <h2>Dein Testpaket enthält</h2>
          </div>
        </div>
      </div>

      <div class="grid-container">
        <package-contents />
      </div>
    </section>

    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Hero: () => import("@/components/sections/Hero"),
    TestPacket: () => import("@/components/sections/TestPacket"),
    HowItWorks: () => import("@/components/sections/HowItWorks"),
    PackageContents: () => import("@/components/sections/PackageContents")
  }
};
</script>

<style lang="scss" scoped>
.sidekick {
  margin: 3.25rem 0;
}

.footer {
  width: 100%;
  max-height: 254px;
  height: 300px;
  background-image: url("/images/backgrounds/blowball-pattern.png");
  background-size: contain;
  background-repeat: repeat-x;
}
</style>
