<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
/* eslint-disable */

export default {
    name: 'App',
    data() {
        return {
            userDetails: this.$root.$store.state.userDetails,
            isLogged: false
        }
    },

    created() {
        console.log('App: - created', this.$router.history.current.name, this.$router.history.current.fullPath)
    },

    mounted() {
        console.log('App: - mounted')
    },

    computed: {
        isLoggedCheck() {
            //this.isLogged = this.$root.$store.state.logged;
            //console.log('isLoggedCheck: this.isLogged ', this.isLogged );
            return this.$root.$store.state.logged;
        }
    },

    methods: {
        logOut() {
            //console.log('logout')
            localStorage.clear();
            //this.$store.commit('updateIsLogged',false);
            this.$router.push('/login')
        }
    },

    components: {
        /*      Quickmenu*/
    }
}



</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

html {
    scroll-behavior: smooth;
}

/* just for testing - remove for production */
/*  * {
    color: #AAA
  }
  img {
    opacity: 0.45;
  }*/
/* just for testing - remove above for production */
body {
    overflow-x: hidden;
    border: 0;
    padding: 0;
    /*
    heart
*/
    /*    background: url(https://uploads.workwork.fun/uploads/cba51c4ea2a24e6cb3531d0424283acb_2ac9d9aa479519e1724db5b860373578_1573943703102.jpg) no-repeat center center fixed; */
    background: url(https://uploads.workwork.fun/uploads/8d473b1e67f7454a8985f4d64df92497_15e44bbe3f475c900a83a75d06b757e6_1597237768412.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

#app {
    border: 0;
    margin: 0;
    /*    position: absolute;*/
    width: 100%;
    height: 100%;
    display: block;
    height: 100%;
    /*    background: url(https://uploads.workwork.fun/uploads/917fe1b1b3be4e80860fc8d76cd7f160_8113f4206a06008592597d6209d7e336_1572300509401.jpg) no-repeat center center fixed;
    background-size: cover;*/
    font-family: "Avenir", 'Nunito', sans-serif;
    /*    background-color: #f4f2ff;*/
    font-size: 0.88rem;
    line-height: 1.3;
}

#nav {
    border-bottom: 1px solid lightgray;
}

.container {
    height: 100%;
}

.row {
    height: 100%;
}

.card {
    /*    -webkit-box-shadow: 0px 0px 37px -5px rgba(0,0,0,0.39);
    -moz-box-shadow: 0px 0px 37px -5px rgba(0,0,0,0.39);
    box-shadow: 0px 0px 37px -5px rgba(0,0,0,0.39);   */
}

.modal {
    font-family: "Avenir", 'Nunito', sans-serif;
    margin-bottom: 0;
    /*color: red!important;*/
    line-height: 1.5;
}

.toast {
    font-family: "Avenir", 'Nunito', sans-serif;
}

.total-nav {
    /*
    top:0;
    left: 0;
    position: fixed;
*/
    /*
    background: white;
*/
    z-index: 100;
    margin-bottom: 2rem;
}

.container-fluid {
    width: 100%;
    padding-right: 3px !important;
    padding-left: 3px !important;
}

.col {
    padding-right: 4px !important;
    padding-left: 4px !important;
}

.col-8 {
    padding-right: 4px !important;
    padding-left: 4px !important;
}

.form-container {
    display: block;
    max-width: 960px;
    padding: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0 auto;
    margin-top: 1rem;
    /*    background: white;*/
}

.card-center {
    margin: 0 auto;
}

.no-bg {
    background: none;
}

.navbar {
    /*
    padding: 1rem!important;
*/
}
</style>