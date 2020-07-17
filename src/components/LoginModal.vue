<template>
  <div class="container">
  <div v-show="isOpen">
    <p>This is text</p>
  </div>
    <!-- <BModal
      v-model="isOpen"
      id="modal-center"
      centered
      title="BootstrapVue"
      bvModalEvt="toggleLogin"
      >
      <p class="my-4">Vertically centered modal!</p>
    </BModal> -->
  </div>
</template>
<script>

export default {
  name: "login",
  data: () => ({
   
  }),
  props: {
    isOpen: Boolean,
    toggleLogin: Function
  },
  components: {
  }
};
</script>
