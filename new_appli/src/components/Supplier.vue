<template>
<div>
    <h2>Fournisseur {{name}}</h2>
    <h3>A du stock ?</h3>
    <h5>Date de dernière releve des stocks {{checkedAt}}</h5>
</div>

</template>


<script>

export default {
    props: {
      name: String,
      status: Boolean,
       checkedAt: Number,
  },
   
}
</script>   