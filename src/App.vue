<template>
  <Container>
    <template v-slot:sidebar>
      <Sidebar />
    </template>
    <template v-slot:view>
      <router-view />
    </template>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import Sidebar from "@/components/SideBar";

export default {
  components: {
    Container,
    Sidebar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0px;
}
</style>
