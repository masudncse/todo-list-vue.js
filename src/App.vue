<template>
  <div id="app">
    <div class="main">
      <h1>TO-DO LIST</h1>
      <form @submit.prevent="addTodoItem()" method="post">
        <input type="text" ref="newTodoItem" v-model="newTodoItem" placeholder="new task" autofocus />
        <button type="submit">
          <strong>ADD</strong>
        </button>
      </form>
      <div class="tasksBoard">
        <ul>
          <li v-for="todo in todos" v-bind:key="todo.id">
            <span class="delete" @click="removeTodoItem(todo.id)">×</span>
            <input type="checkbox" @change="doneTodoItem(todo.id, $event)" />
            <label
              v-bind:style="{'text-decoration': [todo.status?'line-through':'none']}"
            >{{todo.text}}</label>
          </li>
        </ul>
        <a id="clear" @click="clearTodoItems($event)">Clear</a>
      </div>
    </div>

    <HelloWorld msg="Props" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

// import Vue from "vue";
// Vue.component("HelloWorld", require("./components/HelloWorld.vue").default);

export default {
  name: "app",
  components: {
    HelloWorld
  },
  props: {},
  data: function() {
    return {
      todos: [
        { id: 1, text: "Javascript", status: false },
        { id: 2, text: "Python", status: false }
      ],
      newTodoItem: ""
    };
  },
  methods: {
    addTodoItem() {
      if (this.newTodoItem === "" || this.newTodoItem === null) {
        alert("The field is required.");
        return;
      }

      let count = this.todos.length;
      let todo = {
        id: (count += 1),
        text: this.newTodoItem,
        status: false
      };
      this.todos.push(todo);
      this.newTodoItem = "";
      this.$refs.newTodoItem.focus();
    },
    removeTodoItem(id) {
      let todos = this.todos.filter(item => {
        return id !== item.id;
      });
      this.todos = todos;
    },
    doneTodoItem(id, e) {
      if (e.target.checked) {
        this.todos.map((item, key) => {
          if (id === item.id) {
            item.status = true;
            this.todos[key] = item;
          }
        });
      }
    },
    clearTodoItems(e) {
      e.preventDefault();
      this.todos = [];
    }
  }
};
</script>

<style>
/* @import "assets/css/style.css"; */
</style>