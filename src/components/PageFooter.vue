<template>
  <div>
  <!-- PageFooter -->
  <footer class="page-footer font-small blue pt-4">
   
    <div class="container-fluid text-center text-md-left px-4">
      <div class="row">
        
        <div class="col-md-6 mt-md-0 mt-4 bx">
          <h3>WebXR API Technologies</h3>
          <h6><p>Open Web Standards / Immersion</p></h6>
        </div>
        
        <hr class="clearfix w-100 d-md-none pb-3">
        
        <div class="col-md-2 mb-md-0 mb-3 bx">
          <h5>Site Map</h5>
           <hr class="my-2">
            <p class="my-0"><b-link href="/">Home</b-link></p>
            <p class="my-0"><b-link href="/image360">360 Image</b-link></p>
            <p class="my-0"><b-link href="/video360">360 Video</b-link></p>
            <p class="mt-0"><b-link href="/live360">360 Live</b-link></p>
            
        </div>
        
        <div class="col-md-2 mb-md-0 mb-3 bx">
          <h5>Social</h5>
           <hr class="my-2">
            <p class="my-0"><b-link href="https://www.youtube.com/channel/UCJEmBMuTkF5gN3HKa94sgiw">Youtube</b-link></p>
            <p class="mt-0"><b-link href="https://twitter.com/sylwestermiel">Twitter</b-link></p>
        </div>
        
        <div class="col-md-2 mb-md-0 mb-3 bx">
          <h5>Legal</h5>
           <hr class="my-2">
            <p class="my-0"><b-link href="/legal/tcs">Terms & Conditions</b-link></p>
            <p class="my-0"><b-link href="/legal/privacy">Privacy Policy</b-link></p>
            <p class="mt-0"><b-link href="/legal/slavery">Modern Slavery Statement</b-link></p>
        </div>           
      </div>
    </div>
    
    <b-card-footer><small>© 2022 Sylwester Mielniczuk</small></b-card-footer>      

    
  </footer>
  </div>
</template>


<script>
/* eslint-disable */
export default {
  props: {
    component_data: Object 
  },
  name: 'Footer',
    data() {
      return {
/*        title: this.component_data.title,
        data: this.component_data.items*/
      }
    },
  
    mounted() {
      console.log(' Footer - this.$route.path:', this.$route.params.page)
    },
  
    created() {
      console.log(' Footer - created')
      //console.log('this.pagedata',this.pagedata)
    },
  
    methods: {
      isActive(param) {
        if(this.$route.params.page == param) {
          return true  
        } else {
          return false;
        }
      }
    }
}
</script>

<style scoped lang="scss">
  
.page-footer {
  
}

.footer-copyright {

}
  
  .bx {
/*    border: 1px solid red;*/
  }
  
  .cwhite {
  }
  
  .text-info {
/*    color: #b1b1b1!important;*/
  }
  .text-info:hover {
/*
    color: #fb4e8d!important;
*/
    text-decoration: none;
  }
  
  
  
  
  
</style>
