<template>
  <div class="grid-x grid-padding-x">
    <div class="cell small-4">
      <img :src="`/images/package-contents/${image}`" />
    </div>

    <div class="cell small-8 text-left">
      <h4>{{ title }}</h4>
      <ul>
        <li v-for="(feature, ix) in features" :key="ix">{{ feature }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contents",
  props: {
    image: String,
    title: String,
    features: Array
  }
};
</script>
