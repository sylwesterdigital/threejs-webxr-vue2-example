<template>

  <b-navbar toggleable="sm" sticky small class="shadow-sm">
    
    <b-navbar-brand>
      <div class="heart-beat">
        <v-icon name="heart" class="logo-icon"></v-icon>
      </div>
    </b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    
    <b-collapse id="nav-collapse" is-nav>
      
      <b-navbar-nav class="ml-auto">

        <b-nav-item href="/vrtour"><v-icon name="eye">notes</v-icon></b-nav-item>        
        <b-nav-item href="/notes"><v-icon name="feather">notes</v-icon></b-nav-item>
        <b-nav-item href="/tasks"><v-icon name="calendar"></v-icon></b-nav-item>
        <b-nav-item href="/things"><v-icon name="list"></v-icon></b-nav-item>
        <b-nav-item href="/upload"><v-icon name="upload"></v-icon></b-nav-item>
        <b-nav-item href="/gallery"><v-icon name="image"></v-icon></b-nav-item>
        <b-nav-item href="/compressor"><v-icon name="package"></v-icon></b-nav-item>
        
        <b-nav-item :href="setBriefsRoute()"><v-icon name="briefcase"></v-icon></b-nav-item>
        <b-nav-item href="/messages"><v-icon name="mail"></v-icon></b-nav-item>
        
      </b-navbar-nav>
      
      <b-navbar-nav class="ml-auto">
       
        <b-nav-item>{{getProfileEmail()}}</b-nav-item>
        <b-nav-item :href="setProfileRoute()"><v-icon name="user"></v-icon></b-nav-item>  
        <b-nav-item @click="logOut"><v-icon name="log-out"></v-icon></b-nav-item>
        
      </b-navbar-nav>

    </b-collapse>



  </b-navbar>

</template>


<script>
  /* eslint-disable */
  const axios = require('axios');
  export default {
    name: 'QuickMenu',
    data() {
      return {
        apiURL: this.$root.$store.state.apiURL,
        brandName: this.$root.$store.state.brandName,
        token: this.$root.$store.state.accessToken,
        profileRoute: '/profile'
      }
    },
    methods: {
      
      logOut() {
        console.log('logout')
        this.$store.dispatch('logout');
      },
      
      getProfileEmail() {
        if(!!localStorage.userDetails) {
          return JSON.parse(localStorage.userDetails).email;
        }
        if(!!localStorage.companyDetails) {
          return JSON.parse(localStorage.companyDetails).companyname;
        }        
      },
      
      setProfileRoute() {
        if(!!localStorage.userDetails) {
          return '/profile';
        }
        if(!!localStorage.companyDetails) {
          return '/company';
        }         
      },
      
      setBriefsRoute() {
        if(!!localStorage.userDetails) {
          return '/jobs/jobs';
        }
        if(!!localStorage.companyDetails) {
          return '/briefs/public';
        }          
      }
      
      
    }
  }
</script>
<style scoped lang="scss">
  .icon {
    color: #999999;
    height: 19px;
    margin-right: 8px;
  }
  .icon:hover {
    color: #ff1493;
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
  .heart-beat {
    display: inline-block;
    animation: heartbeat 1s infinite;
  }
  .navbar-brand {
    display: inline-block;
/*    padding-top: 0.3125rem;
    padding-bottom: 0.8125rem;*/
  }
  .navbar {
    border-bottom: 1px dashed #CCC;
    background-color: white;
  }
</style>