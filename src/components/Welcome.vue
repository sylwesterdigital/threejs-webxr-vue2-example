<!--    Remember to create vue.config.js
    and add this module settings https://bootstrap-vue.js.org/docs/reference/images/-->

<template>
  <div>
   
   <quick-home-menu />
   
    <div>
     
      <b-jumbotron class="bg-transparent">

         <template v-slot:header>
         

          
          <div>
            <b-img src="https://immersive-web.github.io/webxr-samples/media/logo/webxr-logo.svg" fluid-grow rounded alt="Responsive image"></b-img>
          </div>          


           360 XR + Vue.js

          </template>
              
               

          <template v-slot:lead><span style="color: red">WebXR</span> is a group of standards which are used together to support rendering <span style="color: red">3D scenes</span> to hardware designed for presenting virtual worlds (virtual reality, or VR), or for adding graphical imagery to the real world, (augmented reality, or AR). The <span style="color: red">WebXR Device API</span> implements the core of the <span style="color: red">WebXR</span> feature set, managing the selection of output devices, render the 3D scene to the chosen device at the appropriate frame rate, and manage motion vectors created using input controllers.</template>
          
        <hr class="my-4">
        
        <p> Check:  <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API">https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API</a> </p>
        
        <div class="row">
         
          <div class="col-md-6 mt-md-0 mt-2 mb-3 bx">
            <b-button size="lg" class="mr-2 mb-2" pill variant="success" href="/image360" >360 Image</b-button>
            <b-button size="lg" class="mr-2 mb-2" pill variant="primary" href="/video360">360 Video</b-button>
            <b-button size="lg" class="mr-2 mb-2" pill variant="primary" href="/live360">360 Live Video</b-button>
          </div>
          
          <div class="col-md-6 mb-md-0 mb-3 bx">
          </div>
          
        </div>
      </b-jumbotron>
      
    </div>
    
    <page-footer :component_data="null" />
    
    
  </div>
</template>


<script>
/* eslint-disable */
import PageFooter from '../components/PageFooter.vue'
import QuickHomeMenu from '../components/QuickHomeMenu.vue'
  
export default {
  
  components: {
    PageFooter,
    QuickHomeMenu
  },  
  
  metaInfo: {
    meta: [
      { charset: 'utf-8' }
    ],    
    title: 'WORKWORK.FUN - HoMe',
    titleTemplate: '%s ',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },    
  
  name: 'WelCome',
  
  props: {
    msg: String
  },
  
  mounted() {
    console.log(' - WelCome mounted /')
    console.log('process.env.VUE_APP_SECRET:', process.env.VUE_APP_SECRET)
  },
  
  methods: {
    
    
    
    
    
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
  .ico-medium {
    width: 4.5rem;
    color: #ff73fe;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
  }
  
  .card-img-top {
    width: 100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    padding: 1rem;    
  }
  
  .b-card-group {
    border: 1px solid lightgray;
    background-color: antiquewhite;
  }
  
  .home {
    display: block;
    height: 100%;
    width: 100%;    
  }
  
  .welcome-home {
    background: url(https://uploads.workwork.fun/uploads/674bdfe520f74279a3dd3233c7f60186_5c4b19df569b7a4810ce295b5f315407_1572772139725.svg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  
  .card-holder {
    position: relative;
    margin: 0 auto;
    width: auto;
    display: table;
  }
  
  
</style>