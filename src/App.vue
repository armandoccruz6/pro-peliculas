<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      
    </div>
    
    <router-view/>
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
  background:lemonchiffon;
  
  
}

#nav a {
  font-weight: bold;
  font-family:  cambria;
  font-size: 125%;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: yellowgreen;
    

}
</style>
