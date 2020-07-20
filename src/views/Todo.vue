<template>
  <div class="home">
    <Todos v-bind:todos="todos" @dataAdd="addToDo" @removeTodoB="removeTodo" />
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from "@/components/Todos.vue";

export default {
  name: "Home",
  data: () => ({
    todos: [
      {
        id: 1,
        title: "Go workout",
        completed: false
      },
      {
        id: 2,
        title: "Do laundry",
        completed: true
      },
      {
        id: 3,
        title: "Cook food",
        completed: false
      },
      {
        id: 4,
        title: "Clean up room",
        completed: false
      },
      {
        id: 5,
        title: "Finish work",
        completed: false
      }
    ]
  }),
  methods: {
    addToDo: function(item) {
      this.todos = [...this.todos, item];
    },
    removeTodo: function(item) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== item.id
      })
    }
  },
  components: {
    Todos
  },
};
</script>
