<template>
  
  <div id="app">
    

     <div class="mb-3">
        <router-link to="/supplist" class="btn btn-ultra-voilet mr-2">PROVIDERS</router-link> 

        <router-link to="/suppmap" class="btn btn-ultra-voilet">MAP</router-link>
        
     </div>


    <router-view></router-view>
    <!--<vue-particles
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
      ></vue-particles>-->
      <div id="circle">
  <div class="loader">
    <div class="loader">
        <div class="loader">
           <div class="loader">

           </div>
        </div>
    </div>
  </div>
</div> 
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
.background {
  background: center/100% url("./assets/background-verde.png");
  background-attachment: fixed;
  background-size: cover; 
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
.btn-ultra-voilet {
    background: #654ea3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #eaafc8, #654ea3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;
    border: 3px solid #eee;
}
#circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
	width: 250px;
    height: 250px;	
}

.loader {
    width: calc(100% - 0px);
	height: calc(100% - 0px);
	border: 8px solid #162534;
	border-top: 8px solid #654ea3;
	border-radius: 50%;
	animation: rotate 5s linear infinite;
}

@keyframes rotate {
100% {transform: rotate(360deg);}
} 
</style>
