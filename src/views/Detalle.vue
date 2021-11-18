<template>
  <div class="m-4">
      <h1>{{pelicula.Title}}</h1>
      <h3>{{pelicula.Director}}</h3>
      <img :src="pelicula.Poster" alt="">
      <br><br>
      <h3>Estreno:{{pelicula.Year}}</h3>
      <p>Duracion: {{pelicula.Runtime}}</p>
      <p>Genero: {{pelicula.Genre}}</p>
      <p>Actores: {{pelicula.Actors}}</p>
      <p>{{pelicula.Plot}}</p>
      <h3>Premios: {{pelicula.Awards}}</h3>
      <h3>Idioma: {{pelicula.Language}}</h3>
      <h3>Rating: {{pelicula.Metascore}}</h3>
      
  </div>
</template>

<script>
export default {
 name: 'Detalle',
data(){
    return{
        pelicula: {}
    };
},
methods: {
    async detallePelicula(){
        try{
            const res = await fetch(`https://www.omdbapi.com/?apikey=931e5412&i=${this.$route.params.id}`)
            const data = await res.json();
            this.pelicula = data;
        }catch (error){
            console.log(Error);
        }
    }
},
created(){
    this.detallePelicula();
}

}
</script>

<style>

</style>