<template>
  <div id="gate">
    <!-- <landing-t></landing-t>  
    <workflow-t></workflow-t>  
    <functionalities-t></functionalities-t> 
    <environments-t></environments-t> -->
    <transition name="fade" mode="out-in" >
        <component :is="whichcomponent"></component>
    </transition>
  </div>
</template>

<script>
import Landing from './Landing.vue';
import Workflow from './Workflow.vue';
import Functionalities from './Functionalities.vue';
import Environments from './Environments.vue';

export default {
    data(){
        return{
            availableComponents : ["landing-t","workflow-t","functionalities-t","environments-t"],
            currentComponentIndex : 0,
            whichcomponent : "landing-t"
        }
    },
    components : {
        "landing-t" : Landing,
        "workflow-t" : Workflow,
        "functionalities-t" : Functionalities,
        "environments-t" : Environments
    },
    methods :{
        mousescrolled(e){
            console.log("invoked");
            console.log(e);
            var currentComponentIndex = 0;
            var scrollDirection = null;
            if(e.deltaY > 0){
                console.log("scroll down");
                scrollDirection = "+";
            }
            else{
                console.log("scroll up");
                scrollDirection = "-";
            }
            currentComponentIndex = this.updateCurrentComponent(scrollDirection);
            console.log("currentComponentIndex: "+currentComponentIndex);
            this.whichcomponent = this.availableComponents[currentComponentIndex];
        },
        updateCurrentComponent(movement){
            var currentComponentIndex = this.currentComponentIndex;

            if(movement == "+"){
                console.log("plus");
                if(currentComponentIndex >=3){
                    currentComponentIndex = 0;
                }
                else{
                    currentComponentIndex +=1;
                }
            }
            else if(movement == "-"){
                console.log("minus");
                if(currentComponentIndex <=0){
                    currentComponentIndex = this.availableComponents.length-1;
                }
                else{
                    currentComponentIndex -=1;
                }
            }
            this.currentComponentIndex = currentComponentIndex;
            return currentComponentIndex;
        }
    },
    created(){
         /* window.addEventListener('resize', this.screenadjusted); */
         window.addEventListener('wheel', this.mousescrolled);
         
         
    }
}
</script>

<style>
 #gate{
        height: 100%;
        width: 100%;
        background-color: red;
    }



.fade-enter-active{
    animation: fade-in 0.5s ease-in forwards;
}
.fade-leave-active{
    animation: fade-out 0.5s ease-out forwards;
}

@keyframes fade-in {
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
}
@keyframes fade-out {
    0%{
        opacity:1;  
    }
    100%{
        opacity:0;
    }
}
</style>
