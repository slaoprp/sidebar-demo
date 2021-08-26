<template>
  <button class="ui-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["id", "nameComponent", "selected", "action"],
};
</script>

<style>
.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  padding: 0;
  border-width: 0;
  box-sizing: unset;
  border: none;
  background-color: rgba(17, 17, 29, 1);
}
</style>
