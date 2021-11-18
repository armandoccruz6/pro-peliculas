<template>
<div class="tarjeta">
    <router-link :to="`/detalle/${id}`">
    <div class="tarjeta" style="width: 300px;">
    <img :src="imagen" class="card-img-top" :alt="titulo">
    <div class="card-body">
        <h5 class="card-title">{{titulo}}</h5>
        <p class="card-text">
            {{estreno}}
        </p>
        <p>{{tipo}}</p>  
    </div>
    </div>
    </router-link>
</div>

</template>

<script>
export default {
 name: 'Card',
 props:{
     id: [Number, String],
     titulo: String,
     estreno: [Number,String],
     tipo: String,
     imagen: String,
 },

}
</script>

<style>
.tarjeta{
    display: inline-block;
    justify-content: center;
    margin-right: 10px;
    
}
</style>