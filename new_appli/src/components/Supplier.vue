<template>
<div>
    <h1>Fournisseur {{name}}</h1>
    <h3></h3>
    <h5></h5>
</div>

</template>


<script>
export default {
    data(){
        return{
          name: 'Jean Claude',
    status: false, // est ce qu'il y a du stock 
    checkedAt: new Date() // date de la dernière mise à jour du stock   
        }
    }
   
}
</script>   