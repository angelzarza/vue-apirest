<template>
  <v-card tile>
    <v-app-bar
      color="#6A76AB"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-title>VUE</v-app-bar-title>

      <v-spacer></v-spacer>

      <div class="mx-2">
        <v-btn color="green">REGISTER</v-btn>
      </div>

      <div class="mx-2">
        <v-btn color="blue">SIGN IN</v-btn>
      </div>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Firestorm</v-tab>
          <v-tab>Javascript</v-tab>
          <v-tab>Python</v-tab>
          <v-tab>PHP</v-tab>
          <v-spacer></v-spacer>
          <v-tab style="color: red">LOCK</v-tab>
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
</style>
