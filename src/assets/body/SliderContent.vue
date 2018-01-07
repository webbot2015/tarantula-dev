<template>
     <transition-group  id="slidercontent" mode="out-in" tag="div" :name="transition_effect">        
        <div class="imagerender" :key="counter" >
          <div class="img" :style = "changeCarousal()" ></div>
        </div>
     </transition-group>
</template>

<script>
export default {
  props:["imgContents","counter","direction"],
  data(){
    return{
      transition_effect : "fade"
    }
  },
  methods : {
    changeCarousal(){
      var path = this.imgContents[this.counter].path;
      if(this.direction == "left"){
        this.transition_effect = "fadeleft";
      }
      else{
        this.transition_effect = "fade";
      }
      return {backgroundImage : "url("+path+")"};
    }
  }
}
</script>

<style>
#slidercontent {
  
  display: inline-block;
  height: inherit;
  width: 100%;
  overflow: hidden;
  position: relative;
}
#slidercontent .imagerender{
  height: 90vh;
  width: 100%;
  display: inline-block;
  overflow: hidden;
}

#slidercontent .imagerender .img{
  width: 100vw;
  display: inline-block;
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
overflow: hidden;
}

/* #slidercontent .imagerender:hover #slidercontent{
  animation-play-state: paused;
} */

/* #slidercontent .imagerender:hover .img {
  animation-play-state: paused;
} */


 .fade-enter-active{
    animation-name: fade-enter;
    animation-iteration-count: 1;
    animation-duration: 1s;
}
.fade-move{
  transition: transform 1s;
}
.fade-leave-active{
    animation-name: fade-leave;
    animation-iteration-count: 1;
    animation-duration: 1s;
    position: absolute;
}
@keyframes fade-enter {
    from{transform: translate(100%,0%);}
    to{transform: translate(0%,0%);}
}   
@keyframes fade-leave {
    from{transform: translate(0%,0%);}
    to{transform: translate(-100%,0%);}
}

.fadeleft-enter-active{
    animation-name: fade-enter-left;
    animation-iteration-count: 1;
    animation-duration: 1s;
}
.fadeleft-move{
  transition: transform 1s;
}
.fadeleft-leave-active{    
    animation-name: fade-leave-left;
    animation-iteration-count: 1;
    animation-duration: 1s;
    position: absolute;
}
@keyframes fade-enter-left {
    from{transform: translate(-100%,0%); }
    to{transform: translate(0%,0%); }
}   
@keyframes fade-leave-left {
    from{transform: translate(0%,0%);}
    to{transform: translate(100%,0%); }
}
</style>
