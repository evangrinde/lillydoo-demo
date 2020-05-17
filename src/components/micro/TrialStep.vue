<template>
  <div>
    <img :src="`/images/trial-icons/${icon}.svg`" :alt="title" />
    <h4>{{ title }}</h4>
    <p v-html="description"></p>
    <p v-if="linkText" class="link-text"><a href="#" v-html="linkText"></a></p>
  </div>
</template>

<script>
export default {
  name: "TrialStep",
  props: {
    icon: String,
    title: String,
    description: String,
    linkText: String
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 70px;
  margin-bottom: 15px;
}

.link-text {
  margin-top: 1.75rem;
}
</style>
