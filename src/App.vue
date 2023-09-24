<template>
  <the-header title="Learning Resources"></the-header>
  <stored-resource :resources="storedResources"></stored-resource>
</template>

<script>
import StoredResource from '@/components/learning-resources/StoredResource';
import TheHeader from '@/components/UI/TheHeader';

export default {
  components: {
    'stored-resource': StoredResource,
    'the-header': TheHeader,
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
