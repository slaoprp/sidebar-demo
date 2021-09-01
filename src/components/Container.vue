<template>
  <main class="container">
    <div
      :class="sidebarIsActive ? 'sidebar-container-xl' : 'sidebar-container-xs'"
    >
      <slot name="sidebar"></slot>
    </div>
    <div class="view-container">
      <slot name="view"></slot>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    dynamicClass() {
      return "sidebar-container";
    },
  },
  computed: {
    sidebarIsActive() {
      return this.$store.getters["sidebarIsActive"];
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.sidebar-container-xs {
  background-color: rgba(32, 33, 36, 1);
  height: 100vh;
  width: 60px;
  transition: 0.5s;
}

.sidebar-container-xl {
  background-color: rgba(32, 33, 36, 1);
  height: 100vh;
  width: 400px;
  transition: 0.5s;
}

.view-container {
  background-color: rgba(255, 255, 255, 1);
  height: 100vh;
  width: 100%;
}
</style>
