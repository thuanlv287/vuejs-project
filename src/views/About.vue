<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="showVarable">Click</button>
  </div>
</template>

<script>
export default {
  props: [""],
  data: () => {
    return {
      name: "thuanlvv"
    }
  },
  methods: {
    showVarable() {
      console.log(this.name)
    }
  }
}
</script>