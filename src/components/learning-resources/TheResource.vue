<template>
  <base-card>
    <base-button
      :mode="storedResButtonMode"
      @click="setSelectedTab('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button
      @addResource="addResource"
      :mode="addResButtonMode"
      @click="setSelectedTab('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive> <component :is="selectedTab"></component></keep-alive>
</template>

<script>
import StoredResource from '@/components/learning-resources/StoredResource';
import AddResource from '@/components/learning-resources/AddResource';
export default {
  components: {
    'stored-resources': StoredResource,
    'add-resource': AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },

  computed: {
    storedResButtonMode() {
      if (this.selectedTab === 'stored-resources') {
        return null;
      }
      return 'flat';
    },

    addResButtonMode() {
      if (this.selectedTab === 'add-resource') {
        return null;
      }
      return 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(resource) {
      this.storedResources.unshift(resource);
      this.selectedTab = 'stored-resources';
    },
  },
};
</script>

<style></style>
