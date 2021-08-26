<template>
  <div class="container-icon">
    <svg
      class="icon-color"
      @mouseover="mouseHover"
      @mouseleave="mouseUnHover"
      :width="defaultWidth"
      :height="defaultHeight"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M400 225H99.2969C86.1953 225 75 236.172 75 250C75 263.828 86.1953 275 99.2969 275H399.297C413.828 275 425 263.828 425 250C425 236.172 413.828 225 400 225ZM400 350H99.2969C86.1953 350 75 361.172 75 374.297C75 387.422 86.1953 400 99.2969 400H399.297C413.828 400 425 388.828 425 375C425 361.172 413.828 350 400 350ZM400 100H99.2969C86.1953 100 75 111.195 75 124.297C75 137.398 86.1953 150 99.2969 150H399.297C413.828 150 425 138.828 425 125C425 111.172 413.828 100 400 100Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SvgMenu",
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

<style scoped>
.icon-color:hover path * {
  fill: black;
}

.icon-color path * {
  fill: white;
}

.container-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: rgba(17, 17, 29, 1);
}

.container-icon:hover {
  background-color: white;
}

.container-icon:hover svg path {
  fill: black !important;
}
</style>
