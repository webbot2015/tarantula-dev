<template>
  <div id="gate">
    <header-t></header-t>
    <!-- <body-t></body-t> -->
    <router-view></router-view>
    <footer-t></footer-t>
  </div>
</template>

<script>
import Header from './header/Header.vue';
import Body from './body/Body.vue';
import Footer from './footer/Footer.vue';

export default {
  components : {
    "header-t" : Header,
    "body-t" : Body,
    "footer-t" : Footer
  },
  data () {
    return {
      
    }
  }
}
</script>
<style>
 #gate{
    height: 100%;
    width: 100%;
    background-color: red;
}
</style>