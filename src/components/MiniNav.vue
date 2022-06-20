<template>

  <div>
    <b-container fluid>
      <b-row class="text-center">
        <b-col class="col-text-larger">
          <h4><strong>MiniNav</strong></h4>
        </b-col>
      </b-row>
    </b-container>
  </div>


</template>

<script>
  export default {
    name: 'MiniNav',
    data() {
      return {
        items: [{
            text: 'About',
            href: '/about'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    }
  }
</script>

<style scoped>


</style>