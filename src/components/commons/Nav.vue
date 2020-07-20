<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div>
  </div>
</template>

<style lang="scss">


#nav {
  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
