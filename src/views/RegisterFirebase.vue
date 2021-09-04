<template>
  <v-container class="login-rg">
    <registerform />
  </v-container>
</template>

<script>
import Registerform from "../components/login/Registerform.vue";

export default {
  name: "RegisterFirebase",

  components: {
    Registerform,
  },
};
</script>

<style>
.login-rg {
  position: relative;
  /* background-color: red; */
  width: 30%;
  height: auto;
  margin: 0 auto;
  margin-top: 150px;
}
</style>
