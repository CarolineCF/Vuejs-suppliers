<template>
  <div class="card">
    <div class="card-body">
      <h2>Fournisseur: {{name}}</h2>
      <h3
        :class="{'text-success':status,  'text-danger' : !status}"
      >A du stock ? {{status ? 'oui' : 'non'}}</h3>
      <h5>Date de dernière releve des stocks: {{checkedAt}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    status: Boolean,
    checkedAt: String
  }
};
</script>   