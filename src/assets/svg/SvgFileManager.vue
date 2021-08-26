<template>
  <svg
    :width="defaultWidth"
    :height="defaultHeight"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M400 187.5V348.214C400 363.002 387.402 375 371.875 375H128.125C112.598 375 100 363.002 100 348.214V151.786C100 136.998 112.598 125 128.125 125H221.875L259.375 160.714H371.875C387.402 160.714 400 172.712 400 187.5Z"
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
