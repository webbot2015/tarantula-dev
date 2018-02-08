<template>
  <div class="div-app">
    <gate-t></gate-t>
  </div>
</template>

<script>
import Gate from './page2/Gate.vue';

export default {
  components : {
    "gate-t" : Gate
  },
  data () {
    return {
      
    }
  },
  methods : {

  }
}
</script>
<style>
html,body{
    width: 100%;
    height: 100%;
}
body{
    margin:0;
    padding:0;
}
#app{
    width: 100%;
    height: 100%;
}
.div-app{
  width: 100%;
  height: 100%;
}
</style>
