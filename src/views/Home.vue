<template>
  <div class="home">
    <button type="button" class="btn btn-primary" v-on:click="toggleLogin">Login</button>
    <LoginDialog :isOpen="isToggle" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LoginDialog from "@/components/Login.vue";

export default {
  name: "Home",
  data: () => ({
    isToggle: false
  }),
  methods: {
    toggleLogin: () => {}
  },
  components: {
    HelloWorld,
    LoginDialog
  }
};
</script>
