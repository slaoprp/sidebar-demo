<template>
  <svg
    :width="defaultWidth"
    :height="defaultHeight"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M381.25 97H118.75C94.585 97 75 116.585 75 140.75V359.5C75 383.665 94.585 403.25 118.75 403.25H381.25C405.415 403.25 425 383.665 425 359.5V140.75C425 116.585 405.381 97 381.25 97ZM228.057 359.5H118.682V184.5H228.057V359.5ZM381.182 359.5H271.807V184.5H381.182V359.5Z"
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
