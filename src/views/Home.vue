<template>
  <div class="home">
    <Welcome/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
/*
import MiniNav from '@/components/MiniNav.vue'
*/
  

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>




