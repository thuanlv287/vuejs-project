<template>
  <div>
    <ul>
      <li v-bind:key="todo.id" v-for="todo in todos">
        <Todo v-bind:todo="todo" @removeTodoE="removeTodo" />
      </li>
    </ul>
    <form @submit="addTodo">
      <input v-model="title" placeholder="add new item">
      <input v-model="completed" placeholder="add new item">
      <button>Add</button>
    </form>
    <Todo />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
export default {
  name: "Todos",
  props: ["todos"],
  data: () =>({
    title: "",
    completed: ""
  }),
  components: {
    Todo
  },
  methods: {
    addTodo(event) {
      event.preventDefault();
      this.$emit("dataAdd", {title: this.title, completed: !this.completed ? false : true, id: Math.random()});
      this.title = "",
      this.completed = "";
    },
    removeTodo(id) {
      this.$emit("removeTodoB", id)
    }
  }
};
</script>