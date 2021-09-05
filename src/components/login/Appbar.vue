<template>
  <v-card tile>
    <v-app-bar dark class="bg-appbar">
      <v-app-bar-title>VUE LOGIN</v-app-bar-title>

      <v-spacer></v-spacer>

      <div class="mx-2">
        <v-btn color="green" to="/register">REGISTER</v-btn>
      </div>

      <div class="mx-2">
        <v-btn color="blue" to="/">LOG IN</v-btn>
      </div>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }" v-if="user">
          <div class="mx-2">
            <v-btn
              color="black"
              fab
              small
              dark
              v-bind="attrs"
              v-on="on"
              @click.prevent="logout"
              ><v-icon icon="mdi-exit-to-app" color="white"
                >mdi-exit-to-app</v-icon
              ></v-btn
            >
          </div>
        </template>
        <span>Sign off</span>
      </v-tooltip>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Firebase</v-tab>
          <v-tab>Javascript</v-tab>
          <v-tab>Python</v-tab>
          <v-tab>PHP</v-tab>
          <v-spacer></v-spacer>
          <v-tab to="/lock">LOCK</v-tab>
          <v-spacer></v-spacer>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  name: "Appbar",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    // Metodo que cierra sesión de usuario
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Firebase" });
        });
    },
  },
  created() {
    // Comprueba el estado de Auth para despues saber si mostrar o no el botón de sign off
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
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
