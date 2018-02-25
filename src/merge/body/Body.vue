<template>
    <div class="body">
        <div style="min-height : 50px;"></div>
        <!-- <slider-ii></slider-ii> -->
        <!-- <content-ii></content-ii> -->
        <portfolio-ii></portfolio-ii>
    </div>
</template>

<script>
import Slider from './slider/Slider.vue';
import Content from './content/Content.vue';
import Portfolio from './portfolio/index.vue';

export default {
  components : {
      "slider-ii" : Slider,
      "content-ii" : Content,
      "portfolio-ii" : Portfolio
  }
}
</script>

<style>
.body{
    height:auto;
    width: auto;
    overflow-x: hidden;
}
</style>
