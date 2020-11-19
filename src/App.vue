<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Indkøbsliste</router-link> |
      <router-link to="/create">Tilføj varer</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

input {
  display: block;
  margin: auto;
  margin-top: 10px;
  width: 170px;
  height: 30px;
}

button {
  color: green;
  display: block;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 175px;
  height: 30px;
}
</style>
