<template>
  <div class="container">
    <BModal
      v-model="isShow"
      id="modal-center"
      centered
      title="BootstrapVue"
      bvModalEvt="toggleLogin"
      ok-only
    >
      <p class="my-4">Vertically centered modal!</p>
    </BModal>
  </div>
</template>
<script>
import { BModal } from "bootstrap-vue";

export default {
  name: "login",
  data: () => ({}),
  props: {
    isOpen: Boolean
  },
  components: {
    BModal
  },
  computed: {
    isShow: {
      get: function() {
        return this.isOpen;
      },
      set: function() {}
    }
  },
  created() {
    this.isShow = false;
  }
};
</script>
