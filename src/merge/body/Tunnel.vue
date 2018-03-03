<template>
    <div class="body">
        <div style="min-height : 50px;"></div>
        <portfolio-ii></portfolio-ii>
    </div>
</template>

<script>
import Portfolio from './portfolio/index.vue';

export default {
    components : {
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
