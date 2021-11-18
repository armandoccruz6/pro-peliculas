<template>
  <div class="home">
    <h1 id="titulop">Series y Peliculas</h1>
    <h2 id="titulosec">Busca tus peliculas favoritas</h2>
    
    <form  action="#">
      <input id="busqueda" type="search" placeholder="Ingresa una pelicula.....">
    
      <button id="boton" @click="buscarPeliculas()">Buscar</button> 
      <!--<button id="boton" @click="getPelis(busqueda)">Buscar</button>-->
   
    </form>
      <div>
        <h3>pelis</h3>
        <Card
          v-for="p in pelis"
          :key="p.imdbID"
          :id="p.imdbID"
          :titulo="p.Title"
          :estreno="p.Year"
          :tipo="p.Type"
          :imagen="p.Poster"

        />
      </div>
    
    
  </div>
</template>

<script>
 
import {mapState, mapActions} from 'vuex';
import Card from '../components/Card.vue'



export default {
  name: 'Home',
  components:{
    Card
  },

  methods: {
    ...mapActions(["getPelis"]),
   //...mapActions(["getPeli"])
   
   
 
  },
  computed: {
    ...mapState(["pelis"]),
    //...mapState(["peli"]),

     buscarPeliculas(){
     var nombrePeli = document.getElementById("busqueda").value;
     if(nombrePeli == ""){
       alert("Ingrese una pelicula en el buscador")
     }else{
       console.log(nombrePeli)
       this.getPelis({palabra : nombrePeli});
     }
     
     
   }, 
  },
  created(){
    
     //this.getPelis({palabra: this.$route.params.palabrax});
    //this.getPelis()
    
    
    
  },

  

};
</script>


<style>
 #titulop{
   padding-top: 30px;
   font-family:  cambria;
    font-weight: bold;
    font-size: 50px;
    color: rgb(216, 142, 46);
 }

 #titulosec{
   font-size: 25px;
 }

#busqueda{
    border-radius: 20px;
    margin-right: 10px;
    margin-top: 10px;
    width: 25%;
    height: 35px;
    border: 3px solid black;
}

#boton{
  border-radius: 20px;
  padding-right: 5px;
  margin-left: 5px;
  border: 3px solid red;
  width: 90px;
  font-weight: bold;
  height: 40px;
  background: yellow;
  
}

form{
  height: 70px;
  
  padding-top: 10px;
  margin: 50px;
}
</style>
