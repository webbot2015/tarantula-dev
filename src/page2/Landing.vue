<template>
    <div id="landing">
        <div class="header">
            <div class="info">Our services</div>
            <div class="logo"></div>
        </div>
        <div class="body">
            <div class="left" :style="landing_left"></div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return{
          landing_left : "",
          landing_left_min_width : 500,
          landing_left_previous : "back"
      }
  },
  methods :{
    screenadjusted(e){
       console.log("invoked");
       console.log("window height"+e.target.innerHeight);
       console.log("window width"+e.target.innerWidth);     
        
        /* if(e.target.innerWidth >= 400 && e.target.innerWidth <=970 ){
            this.landing_left_min_width -=1;
            this.landing_left = {
                "min-width" : this.landing_left_min_width+"px"
            };     
        }
        else{
            this.landing_left = {
                "min-width" : "500px"
            };     
        } */
       
    }
  },
  created(){
          window.addEventListener('resize', this.screenadjusted)
  }
}
</script>

<style>
    #landing{
        width: 100%;
        height: 100vh;
        background-color:#333333;
        box-sizing: border-box;
        position: relative;
        padding:1%;
    }
    #landing .header{
        height: 15vh;
        position: relative;
    }
    #landing .header .info{
        font-size: 50px;
        float:left;
        position: relative;
    }
    #landing .header .logo{
        position: relative;
        background-image: url(/public/images/page2/logotext900.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-position-y: 0px;
        width: 400px;
        height: inherit;
        float:right;
        right:10%;
    }
    #landing .body{
        height: 74vh;
        width: 100%;
        position: relative;
        display: inline-block;
        
    }
    #landing .left {
        position: relative;
        float: left;
        width: 40%;
        height: inherit;
        background-image: url(/public/images/page2/webdev1_2.png);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: left;
        min-width: 500px;
            background-position-y: 0px;
    }
    #landing .right {
        position: relative;
        float: right;
        top: 16%;
        right: 10%;
        background-image: url(/public/images/page2/webdev2.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-position-y: 0px;
        width: 400px;
        height: 250px;
        display: inline-block;
    }


    @media screen and (max-width: 1070px) {
        #landing .header .logo{
            right: 0px;
        }
        #landing .right {
            right: 0px;
        }
    }
    @media screen and (max-width: 680px) {
        #landing .header .info{
            float: right;
            
        }
    }
</style>
