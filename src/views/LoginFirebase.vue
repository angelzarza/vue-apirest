<template>
  <v-container class="login-fb">
    <loginform />
  </v-container>
</template>

<script>
import Loginform from "../components/login/Loginform.vue";

export default {
  name: "LoginFirebase",

  components: {
    Loginform,
  },
};
</script>

<style>
.login-fb {
  position: fixed;
  /* background-color: red; */
  width: 30%;
  height: auto;
  margin: 0 auto;
  right: 0;
  left: 0;
  margin-top: 150px;
}
</style>
