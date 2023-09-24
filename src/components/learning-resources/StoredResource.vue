<template>
  <ul>
    <learning-resource
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
    >
    </learning-resource></ul
></template>

<script>
import LearningResource from '@/components/learning-resources/ResourceItem';
export default {
  components: {
    'learning-resource': LearningResource,
  },
  props: {
    resources: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
