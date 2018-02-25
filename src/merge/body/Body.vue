<template>
    <div class="body">
        <div style="min-height : 50px;"></div>
        <slider-ii></slider-ii>
        <content-ii></content-ii>
    </div>
</template>

<script>
import Slider from './slider/Slider.vue';
import Content from './content/Content.vue';

export default {
  components : {
      "slider-ii" : Slider,
      "content-ii" : Content,
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
