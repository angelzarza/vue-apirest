<template>
  <v-container fill-height fluid px-0>
    <v-row id="row-header">
      <v-col id="col-header">
        <appbar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Appbar from "../components/login/Appbar.vue";

export default {
  name: "Login",

  components: {
    Appbar,
  },
};
</script>

<style>
#row-header {
  position: fixed;
  /* background-color: white; */
  width: 100%;
  height: auto;
  margin: 0 auto;
  top: 0;
}

#col-header {
  padding: 0 !important;
}
</style>
