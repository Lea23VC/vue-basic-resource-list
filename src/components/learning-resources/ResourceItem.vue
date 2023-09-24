<template>
  <li>
    <div>
      <header>
        <h3>{{ resource.title }}</h3>
        <p>{{ resource.description }}</p>

        <button>Delete</button>
      </header>
    </div>
    <p></p>
    <nav>
      <a :href="resource.link">Visit</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
