<template>
  <nav class="sidebar-wrapper">
    <div class="wrapper-header">
      <slot name="wrapper-header"></slot>
    </div>
    <div class="wrapper-content">
      <slot name="wrapper-content"></slot>
    </div>
    <div class="wrapper-footer">
      <slot name="wrapper-footer"></slot>
    </div>
  </nav>
</template>

<style>
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px 0px 10px 10px;
}

.wrapper-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
}

.wrapper-content {
  display: flex;
  flex-direction: column;
  height: calc(100% - 160px);
  overflow: scroll;
}

.wrapper-content::-webkit-scrollbar {
  display: none;
}

.wrapper-footer {
  position: fixed;
  display: flex;
  height: 40px;
  bottom: 10px;
}
</style>
