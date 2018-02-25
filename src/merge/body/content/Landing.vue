<template>
    <div id="landing">
        <div class="titlebar">
            <div class="text">Products</div>
            <div class="arrow" id="arrow-down"></div>
        </div>
        <div class="body">
            <div class="left"></div>
            <!-- <div class="right">
                <div class="logo"></div> 
                <div class="cube"></div>
            </div>
             -->
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
    }
  },
  created(){
          window.addEventListener('resize', this.screenadjusted);
  }
}
</script>

<style>
    #landing{
        width: 100%;
        height: auto;
        background-color:#333333;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
    }

 #landing .titlebar{
        background-color: green;
        position: relative;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    #landing .titlebar .text{
        color: white;
        font-weight: bold;
        line-height: 35px;
        position: relative;
    }
    #landing .titlebar .arrow{
        cursor: pointer;
        top: 40px;
        width: 0;
        height:0;
        border-style: solid;
        position: relative;
    }
    #landing .titlebar #arrow-down{
        border-left-width: 30px;
        border-right-width: 30px;
        border-top-width: 20px;
        margin-left: -60px;
        border-color: green transparent  transparent transparent; 
    }

    #landing .body{
        /* margin-top: 20px; */
        height: calc(100vh - 50px);
        width: 100%;
        /* display: block; */
        display: flex;
        
        justify-content: space-evenly;
        position: relative;
    }
    #landing .body .left {

        background-image: url(/public/images/page2/webdev1_2.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        /* flex-grow: 1; */
        
    }
    #landing .body .right {
         background-image: url(/public/images/page2/webdev2.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
         position: relative;
        /*  flex-grow: 1; */
        
    }
    #landing .body .left , #landing .body .right {
        width: 40vw;
    }
    /* #landing .body .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 400px;
    } */

  /*    #landing .body .right .logo{
        display: block;
        background-image: url(/public/images/page2/logotext900.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-position-y: 0px;
        height: 100px;
     } */

    /*  #landing .body .right .cube{
         background-image: url(/public/images/page2/webdev2.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-position-y: 0px;
        height: 250px;
        display: block;
     } */

    @media only screen and (max-width: 800px) {
         #landing{
             
         }
        #landing .body{
            flex-direction: column;
        }
      #landing .body .left , #landing .body .right {
        flex-grow: 1;
        width: 100vw;
        margin-top: 6%;
    }
       /*  #landing .body{
            flex-direction: column-reverse;
            height: inherit;
            align-items: center;
        } */
         /* #landing .body .left {
            height: 100%;
            width: 100%;
             background-position: center;
         } */
         /*  #landing .body .right{
            justify-content: center;
            width: 100%;
            align-items: center;
          } */
        /* #landing .body .right .logo {
            display: none;
        } */
       /*  #landing .body .right .cube {
            width: inherit;
            height: 325px;
            background-position: center;
        } */
    }
     @media only screen and (max-width: 400px) {
        #landing .body .left , #landing .body .right {
                margin-top: 0%;
            }
     }
</style>
