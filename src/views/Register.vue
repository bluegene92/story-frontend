<style scoped>
.container {
  background: url("./../assets/bg2.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.card {
  width: 400px;
  padding: 32px 16px;
}

.login-btn {
  width: 100%;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}
</style>

<script setup>
import { onMounted } from "vue";
import { ref, toRaw } from "vue";
import { useRouter } from "vue-router";
import UserServices from "../services/UserServices.js";

const router = useRouter();
const snackbar = ref({
  value: false,
  color: "",
  text: "",
});
const user = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

onMounted(async () => {
  localStorage.removeItem("user");
  // if (localStorage.getItem("user") !== null) {
  //   router.push({ name: "recipes" });
  // }
});

function navigateToRecipes() {
  router.push({ name: "recipes" });
}

async function createAccount() {
  await UserServices.addUser(user.value)
    .then(() => {
      snackbar.value.value = true;
      snackbar.value.color = "green";
      snackbar.value.text = "Account created successfully!";
      router.push({ name: "login" });
    })
    .catch((error) => {
      console.log(error);
      snackbar.value.value = true;
      snackbar.value.color = "error";
      snackbar.value.text = error.response.data.message;
    });
}

function closeSnackBar() {
  snackbar.value.value = false;
}
</script>


<template>
  <v-container class="container d-flex align-center justify-center" fluid>
    <v-card class="card rounded-md elevation-1">
      <v-card-title class="headline mb-2">Register </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="user.firstName"
          label="First Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.lastName"
          label="Last Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.email"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.password"
          label="Password"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="login-btn rounded-xl"
          variant="flat"
          color="primary"
          @click="createAccount()"
          >Register</v-btn
        >
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar.value" rounded="pill">
      {{ snackbar.text }}

      <template v-slot:actions>
        <v-btn :color="snackbar.color" variant="text" @click="closeSnackBar()">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
