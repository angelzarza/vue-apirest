<template>
  <v-card>
    <v-container>
      <h3 class="title my-3">Welcome Back!</h3>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <validation-provider
            v-slot="{ errors }"
            name="Email"
            rules="required|email"
          >
            <v-icon icon="mdi-account" color="blue">mdi-account</v-icon>
            <strong> E-mail </strong>
            <v-text-field
              v-model="email"
              :error-messages="errors"
              placeholder="Enter the email"
              required
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="password"
            ref="password"
            rules="required|min:4"
          >
            <v-icon icon="mdi-lock-outline" color="red"
              >mdi-lock-outline</v-icon
            >
            <strong> Password </strong>
            <v-text-field
              v-model="password"
              :error-messages="errors"
              placeholder="Enter the password"
              type="password"
              required
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Confirm password"
            rules="required|confirmed:password"
          >
            <v-text-field
              v-model="confirmed_password"
              :error-messages="errors"
              placeholder="Confirm the password"
              type="password"
              data-vv-as="password"
              required
            ></v-text-field>
          </validation-provider>

          <div>
            <v-btn class="mx-2" color="blue" type="submit" :disabled="invalid"
              >SIGN IN</v-btn
            >
            <v-btn class="mx-2" color="green" to="/register">REGISTER</v-btn>
          </div>
        </form>
      </validation-observer>
    </v-container>
  </v-card>
</template>

<script>
import { required, email, min, confirmed } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters",
});

extend("confirmed", {
  ...confirmed,
  message: "Both passwords must match",
});

export default {
  name: "Loginform",

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    email: "",
    password: "",
    confirmed_password: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    // clear() {
    //   this.name = "";
    //   this.phoneNumber = "";
    //   this.email = "";
    //   this.select = null;
    //   this.checkbox = null;
    //   this.$refs.observer.reset();
    // },
  },
};
</script>
