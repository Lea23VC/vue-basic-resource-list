<template>
  <ul>
    <learning-resource
      v-for="resource in storedResources"
      :key="resource.id"
      :resource="resource"
    >
    </learning-resource>
  </ul>
</template>

<script>
import ResourceItem from '@/components/learning-resources/ResourceItem';

export default {
  components: {
    'learning-resource': ResourceItem,
  },

  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official guide to Vue.js.',
          link: 'https://vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Where you search for things.',
          link: 'https://google.com/',
        },
        {
          id: 'youtube',
          title: 'YouTube',
          description: 'Where you watch things.',
          link: 'https://youtube.com/',
        },
      ],
    };
  },
};
</script>

<style></style>
