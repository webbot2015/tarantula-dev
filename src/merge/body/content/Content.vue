<template>
    <div id="content">
        <landing-t></landing-t>  
          <workflow-t></workflow-t>   
         <functionalities-t></functionalities-t> 
        <environments-t></environments-t> 
    </div>
</template>

<script>
import Landing from './Landing.vue';
import Workflow from './Workflow.vue';
import Functionalities from './Functionalities.vue';
import Environments from './Environments.vue';

export default {
     components : {
        "landing-t" : Landing,
        "workflow-t" : Workflow,
        "functionalities-t" : Functionalities,
        "environments-t" : Environments
    },
    data() {
        return {
        }
    },
  methods : {

  }
}
</script>

<style>
#content{
    height:auto;
    width: auto;
}


</style>
