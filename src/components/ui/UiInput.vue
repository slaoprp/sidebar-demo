<template>
  <div class="container-search">
    <Component
      style="display: flex"
      class="container-icon-search"
      :is="icon"
      :size="30"
      color="white"
    />
    <input v-if="sidebarIsActive" type="text" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
    },
  },
  computed: {
    sidebarIsActive() {
      return this.$store.getters["sidebarIsActive"];
    },
  },
};
</script>

<style scoped>
.container-search {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

input {
  display: flex;
  width: 100%;
  border-radius: 20px;
  margin: 0px 10px 0px 0px;
  padding: 0px 10px 0px 10px;
  outline: none;
  height: 30px;
}

.container-icon-search {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  max-height: 40px;
  min-width: 40px;
  border-radius: 10px;
  background-color: rgba(32, 33, 36, 1);
}
</style>
