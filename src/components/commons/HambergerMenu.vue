<template>
  <div id="menu">
    <div class="bg-dark collapse" id="navbarHeader" ref="collapse-menu">
      <div class="container">
        <div class="row">
         <h3>Content in hambuger</h3>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark box-shadow">
      <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-2"
          >
            <path
              d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
            />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <strong>Album</strong>
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-on:click="handleCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hambergermenu",
  methods: {
    handleCollapse: function() {
      const collapseEle = this.$refs["collapse-menu"].classList;
      if (collapseEle.contains("show")) {
        collapseEle.remove("show");
      } else {
        collapseEle.add("show");
      }
    }
  }
};
</script>

<style lang="scss">
#menu {
  color: red;
}
</style>