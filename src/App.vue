<template>
  <v-app class="bg-body">
    <appbar />
    <v-main class="ma-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Appbar from "./components/login/Appbar.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),

  components: {
    Appbar,
  },
};
</script>

<style>
html {
  overflow: hidden !important;
}

.bg-body {
  background: rgb(2, 0, 36) !important;
  background: linear-gradient(
    138deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  ) !important;
}
</style>
