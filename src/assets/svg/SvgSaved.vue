<template>
  <svg
    :width="defaultWidth"
    :height="defaultHeight"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M375 75H125C97.3828 75 75 97.3828 75 125V375C75 402.609 97.3828 425 125 425H375C402.617 425 425 402.609 425 375V125C425 97.3828 402.578 75 375 75ZM346.484 268.984L260.078 358.203C254.512 363.965 245.453 363.965 239.789 358.203L153.516 268.984C128.414 243.047 129.883 200.078 158.047 176.172C182.422 155.312 218.828 159.062 241.172 182.187L250.031 191.195L258.82 182.187C281.281 159.047 317.781 155.289 342.18 176.188C370.156 200.156 371.641 243.047 346.484 268.984Z"
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
