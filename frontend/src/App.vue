<template>
  <div id="app">
    <head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </head>
    
    <navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
    name: "App",
    components: {
        Navbar
    },
};
</script>

<style>
#app {
  font-family: "Rubik", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f6fa;
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
</style>
