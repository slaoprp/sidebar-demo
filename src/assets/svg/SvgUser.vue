<template>
  <svg
    :width="defaultWidth"
    :height="defaultHeight"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M249.5 250.008C290.373 250.008 323.5 218.217 323.5 179.004C323.5 139.791 290.373 108 249.5 108C208.627 108 175.5 139.791 175.5 179.004C175.5 218.217 208.627 250.008 249.5 250.008ZM278.811 276.635H220.189C164.868 276.635 120 319.681 120 372.768C120 383.385 128.973 392 140.038 392H358.974C370.039 392.017 379 383.418 379 372.768C379 319.681 334.138 276.635 278.811 276.635Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
  },
  computed: {
    defaultWidth() {
      return this.size;
    },
    defaultHeight() {
      return this.size;
    },
    defaultColor() {
      return this.color;
    },
  },
};
</script>
