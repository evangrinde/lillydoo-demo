<template>
  <div class="grid-x">
    <div
      class="cell small-12 large-4"
      v-for="(step, ix) in trialSteps"
      :key="ix"
    >
      <trial-step
        :icon="step.icon"
        :title="step.title"
        :description="step.description"
        :linkText="step.linkText"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HowItWorks",
  components: {
    TrialStep: () => import("@/components/micro/TrialStep")
  },
  data() {
    return {
      /*
      "trialSteps": @array of @objects
       Note: The property "icon" is passed to child components to determine icon images.
      */
      trialSteps: [
        {
          icon: "trialbox",
          title: "Dein Testpaket",
          description:
            "Wir schenken Dir die Produkte,<br/>Du übernimmst nur das Porto."
        },
        {
          icon: "flexibility",
          title: "Deine Flexibilität",
          description:
            "Erste Monatsbox nach 14 Tagen für 49,50 € erhalten. Oder noch vor der ersten Lieferung kündigen. ",
          linkText: "Erfahre hier mehr über das<br />LILLYDOO Windel-Abo."
        },
        {
          icon: "subscription",
          title: "Deine Monatsbox",
          description:
            "Jederzeit Windelgröße, Designs und Lieferintervalle anpassen oder weitere Produkte hinzufügen."
        }
      ]
    };
  }
};
</script>
