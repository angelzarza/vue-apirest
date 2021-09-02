<template>
  <v-card tile>
    <v-app-bar dark class="bg-appbar">
      <v-app-bar-title>VUE LOGIN</v-app-bar-title>

      <v-spacer></v-spacer>

      <div class="mx-2">
        <v-btn color="green" to="/register">REGISTER</v-btn>
      </div>

      <div class="mx-2">
        <v-btn color="blue" to="/">SIGN IN</v-btn>
      </div>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Firesbase</v-tab>
          <v-tab>Javascript</v-tab>
          <v-tab>Python</v-tab>
          <v-tab>PHP</v-tab>
          <v-spacer></v-spacer>
          <v-tab>LOCK</v-tab>
          <v-spacer></v-spacer>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "Appbar",
};
</script>

<style>
.v-app-bar-title__content {
  width: auto !important;
}

.bg-appbar {
  background: rgb(110, 35, 203) !important;
  background: linear-gradient(
    0deg,
    rgba(110, 35, 203, 1) 0%,
    rgb(136, 35, 139) 100%
  ) !important;
}
</style>
