<template>
  <svg
    :width="defaultWidth"
    :height="defaultHeight"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M397.921 363.652L325.445 291.176C341.926 266.709 350.058 236.138 345.705 203.563C338.281 148.155 292.87 103.065 237.408 96.043C154.948 85.6088 85.6083 154.949 96.0431 237.409C103.067 292.896 148.163 338.343 203.577 345.73C236.151 350.083 266.728 341.954 291.19 325.471L363.666 397.947C373.123 407.404 388.46 407.404 397.918 397.947C407.367 388.477 407.367 373.098 397.921 363.652ZM142.893 220.94C142.893 178.205 177.66 143.438 220.394 143.438C263.129 143.438 297.896 178.205 297.896 220.94C297.896 263.675 263.129 298.442 220.394 298.442C177.66 298.442 142.893 263.687 142.893 220.94Z"
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
