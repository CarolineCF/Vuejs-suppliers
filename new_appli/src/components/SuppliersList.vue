<template>
  <div>
    <div>
      <div class="row av">
        <div class="mx-auto">
          <section v-if="errored">
            <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
          </section>
          <section v-else >
            <div v-if="loading" >
             <div id="circle">
  <div class="loader">
  </div>

</div>

</div> 
             
           
            
          </section>
          <Supplier
            class="test"
            :key="supplier.id"
            v-for="supplier in suppliers"
            :name="supplier.name"
            :status="supplier.status"
            :checkedAt="supplier.checkedAt"
          ></Supplier>
        </div>
      </div>

      <vue-particles
        class="trans"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Supplier from "./Supplier.vue";
import { format, render, cancel, register } from "timeago.js";

export default {
  name: "SuppliersList",
  components: { Supplier },
  data: function() {
    return {
      suppliers: [],
      loading: true,
      error: null,
      errored: false
    };
  },
  mounted() {
    axios
      .get("https://api-suppliers.herokuapp.com/api/suppliers")
      .then(response => {
        this.suppliers = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
<style scoped>
.av {
  display: block;
  width: 100%;
  z-index: 999;
  position: absolute;
}
.test {
  margin: auto;
}


#circle 
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
	width: 100px;
    height: 100px;	
}

.loader 
{
    width: calc(100% - 0px);
	height: calc(100% - 0px);
	border: 15px solid #48545F;
	border-top: 15px solid #30FF06;
	border-radius: 50%;
	animation: rotate 1s linear infinite;
}

@keyframes rotate {
100% {transform: rotate(360deg);}
} 

</style>