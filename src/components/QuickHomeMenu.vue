<template>
 
  <b-navbar toggleable="sm" sticky small class="shadow-sm">
   
    <b-navbar-brand>
      <div class="heart-beat">

            <b-img class="webxr" src="https://immersive-web.github.io/webxr-samples/media/logo/webxr-logo.svg"></b-img>

      </div>
    </b-navbar-brand>
    
    <h5 class="mb-0">{{brandName}}</h5>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>    
    
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

        
      <b-button size="ms" pill class="mr-2 mb-2" variant="outline-success" href="/image360">Image 360</b-button>
      <b-button size="ms" pill class="mr-2 mb-2" variant="outline-primary" href="/video360">Video 360</b-button>          
      <b-button size="ms" pill class="mr-2 mb-2" variant="outline-primary" href="/live360">Live 360</b-button>          
        
      </b-navbar-nav>
      
    
      
    </b-collapse>
    
      
    
  </b-navbar>
</template>


<script>
  /* eslint-disable */
  const axios = require('axios');
  export default {
    name: 'HoMeMenuMenu',
    data() {
      return {
        apiURL: this.$root.$store.state.apiURL,
        brandName: this.$root.$store.state.brandName,
        token: this.$root.$store.state.accessToken
      }
    },
    methods: {
      logOut() {
        console.log('logout')
        this.$store.dispatch('logout');
      }
    }
  }
</script>
<style scoped lang="scss">
  .icon {
    color: #ff73fe;
    height: 19px;
    margin-right: 8px;
  }
  .icon:hover {
    color: #ff73fe;
  }
  .icon-close {
    color: red
  }
  .brand-icon {
    width: 24px;
  }
  .logo-icon {
    width: 33px;
    height: 33px;
  }
  .menu-icon {
    width: 17px;
    height: 13px;
  }
  @keyframes heartbeat {
    0% {
      transform: scale(.75);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(.75);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(.75);
    }
    100% {
      transform: scale(.75);
    }
  }
  .webxr {
    max-width:80px;
  }
  .heart-beat {
    display: inline-block;
    max-height: 10px;

  }
  .navbar-brand {
    display: inline-block;
/*
    padding-top: 0.3125rem;
    padding-bottom: 0.8125rem;
*/
  }
  .navbar {
    border-bottom: 1px dashed #CCC;
    background-color: white;
    padding: 0.75rem 1rem 0.25rem;
  }
</style>