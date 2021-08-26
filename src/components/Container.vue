<template>
  <main class="container">
    <transition>
      <div class="sidebar-container">
        <slot name="sidebar"></slot>
      </div>
    </transition>
    <div class="view-container">
      <slot name="view"></slot>
    </div>
  </main>
</template>

<style>
.container {
  display: flex;
  flex-direction: row;
}

.sidebar-container {
  background-color: rgba(17, 17, 29, 1);
  height: 100vh;
  width: 60px;
}

.view-container {
  background-color: blue;
  height: 100vh;
  width: 100%;
}
</style>
