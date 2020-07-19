<template>
  <div v-if="todo">
    <h1>Title: {{todo.title}}</h1>
    <div class="status">
      Status:
      <span v-if="todo.completed" class="done">Done</span>
      <span v-else class="uncomplete">Uncomplete</span>
    </div>
    <button>Do</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  computed: {}
};
</script>

<style lang="scss">
.status {
  .done {
    color: green;
  }
  .uncomplete {
    color: red;
  }
}
</style>