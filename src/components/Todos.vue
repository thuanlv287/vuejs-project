<template>
  <div>
    <ul>
      <li v-bind:key="todo.id" v-for="todo in todos">
        <Todo v-bind:todo="todo" />
      </li>
    </ul>
    <Todo />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
export default {
  name: "Todos",
  props: ["todos"],
  components: {
    Todo
  }
};
</script>