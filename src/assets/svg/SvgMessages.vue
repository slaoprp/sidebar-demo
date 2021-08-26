<template>
  <svg
    :width="defaultWidth"
    :height="defaultHeight"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M399 146.825V300.725C399 319.621 382.211 334.55 361.626 334.55H277.536L204.599 384.767C200 387.849 193.434 384.794 193.434 379.567V334.55H137.374C116.789 334.55 100 319.138 100 300.725V146.825C100 127.929 116.789 113 137.374 113H361.615C382.707 113 399 128.411 399 146.825Z"
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
