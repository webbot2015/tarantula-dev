<template>
  <div id="slider">
    <slidercontent-ii :imgContents="imgContents" :counter="counter" :direction="direction"></slidercontent-ii>
    <div class="left" @click="control('left')">
        <div>Left</div>
    </div>
    <div class="right" @click="control('right')">
        <div>right</div>
    </div>
    <div class="pauseandplay">
        <div>
            <div @click="imageState()">{{this.pauseandplayText}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import SliderContent from './SliderContent.vue';

export default {
  components : {
      "slidercontent-ii" : SliderContent
  },
  data(){
      return {
        imgContents : [
            {"id": 0,"path": "public/images/slider1.jpeg" },
            {"id": 1,"path": "public/images/slider2.jpeg" },
            {"id": 2,"path": "public/images/slider3.jpeg" },
            {"id": 3,"path": "public/images/slider4.jpeg" },
            {"id": 4,"path": "public/images/slider5.jpeg" }
        ],
        counter: 0,
        direction : "right",
        returnSetTimeout : null,
        pauseandplayText : "II"
      };
  },
  methods : {
      control(data){
          console.log("data: "+data);
          var counter = this.counter;
          console.log("returnTimeout2");
         console.log(this.returnSetTimeout);

          if(data == "left"){
            counter--;
            console.log("counter1- "+counter);   
            if(!(counter >=0 && counter <5)){
                counter = 4;
            }
          }
          else if(data == "right"){
            counter++;
            console.log("counter1+ "+counter);   
            if(!(counter >=0 && counter <5)){
                counter = 0;
            }
          }
          this.direction = data;
          this.counter = counter;
          clearInterval(this.returnSetTimeout);
          this.initializeSetTimeout();
          console.log("counter2 "+counter);
      },
      imageState(){
          if(this.pauseandplayText == "II"){
              this.pauseandplayText = ">";
            this.returnSetTimeout = clearInterval(this.returnSetTimeout);
          }
          else{
              console.log("this.returnSetTimeout");
              console.log(this.returnSetTimeout);
            if(this.returnSetTimeout){
                
            }else{
                this.pauseandplayText="II";
                this.initializeSetTimeout();
            }
          }
      },
      initializeSetTimeout(){
            console.log("in initializeSetTimeout");
            var self = this;
            this.returnSetTimeout = setInterval(()=>{
            if(self.counter>1){
                self.counter = 0 ;
            }
            else{
                self.counter = self.counter+1;
            }

            },4000);    
            console.log("returnTimeout1");
            console.log(this.returnSetTimeout);
      }
  },
  created(){
      
      this.initializeSetTimeout();
  }
}
</script>

<style>
#slider{
    height: 100vh;
    width: 100%;
    display: inline-block;
    position: relative;
}
#slider .left, #slider .right{
    position: absolute;
    background-color: blue;
    top: 50%;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
}
#slider .right{
    right: 0px;
}
#slider .left div, #slider .right div{
    margin-top: 14px;
    text-align: center;
    font-weight: bold;
    color: white;
}
#slider .left:hover, #slider .right:hover{
    background-color: red;
}

#slider .pauseandplay{
    
    position: absolute;
    height: 60px;
    color:black;
    z-index: 1;
    bottom: 0;
    left: 47%;
    width: 50px;
    border-radius: 50%;
}

#slider .pauseandplay div{
    position: relative;
    top: 30%;
    text-align: center;
    display: inline-block;
    width: 50px;
    height: 31px;
    border-radius: 50%;
    background-color: red;
    transition: all .3s ease-in-out;
    color:white;
}

#slider .pauseandplay div:hover {
 background-color: blue;
}
/* npm install vue-fontawesome */
</style>
