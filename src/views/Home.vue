<template>
  <div class="home">
    <Todos v-bind:todos="todos" />
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
        i: 5,
        title: "Finish work",
        completed: false
      }
    ]
  }),
  methods: {},
  components: {
    Todos
  }
};
</script>
