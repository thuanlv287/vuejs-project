<template>
  <div class="home">
    <button type="button" class="btn btn-primary" v-on:click="toggleLogin">Login</button>
    <LoginModal :isOpen="isToggle" :onClose="toggleLogin" />
    <HelloWorld msg="Welcome to Your App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LoginModal from "@/components/LoginModal.vue";

export default {
  name: "Home",
  data: () => ({
    isToggle: false
  }),
  methods: {
    toggleLogin: function toggleLogin() {
      this.isToggle = !this.isToggle;
    },
  },
  components: {
    HelloWorld,
    LoginModal
  }
};
</script>
