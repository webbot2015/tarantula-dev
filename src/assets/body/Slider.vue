<template>
  <div id="slider">
    <slidercontent-ii :imgContents="imgContents" :counter="counter" :direction="direction"></slidercontent-ii>
    <div class="slider-text" v-if="counter == 0">
        <div class="slider-logo"></div>
        <div class="details">
            <div>Comes with Pages Builder.</div>
            <div>Advanced Theme Option Panel.</div>
            <div>Possibility to customize every thing you see.</div>
            <div>Unlimited Colors for everything.</div>
            <div>Awesome Customer Support.</div>
        </div>
        <div class="actions">
            <a>Request A Quote</a>
            <a>Quick Registration</a>
        </div>
    </div>
    <div class="slider-text-1" v-if="counter == 2">
        <div class="slider-logo-1"></div>

        <div class="actions">
            <a>Request A Quote</a>
            <a>Quick Registration</a>
        </div>
    </div>

    <div class="left" @click="control('left')">
        <div>&lt;</div>
    </div>
    <div class="right" @click="control('right')">
        <div>&gt;</div>
    </div>
    <div class="bottom-controls">
         <div class="imageIndividualSelection">
        <div v-for="(imgContent,key) in imgContents" :key="key">
            <div class="active" v-if="counter == imgContent.id"><!-- {{imgContent.id}} --></div>
            <div v-else @click="imageIndividualSelection(imgContent.id)"><!-- {{imgContent.id}} --></div>
        </div>
    </div>
    <!-- <div class="pauseandplay">
        <div :style="imageStateStyle">
            <div @click="imageState()" :style="imageStateStyle">{{this.pauseandplayText}}</div>
        </div>
    </div> -->
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
            {"id": 2,"path": "public/images/slider3.jpeg" },/* 
            {"id": 3,"path": "public/images/slider4.jpeg" },
            {"id": 4,"path": "public/images/slider5.jpeg" } */
        ],
        counter: 0,
        direction : "right",
        returnSetTimeout : null,
        pauseandplayText : "II",
        imageStateStyle : {backgroundColor : "green"}
      };
  },
  methods : {
      control(data){
          console.log("in control before "+this.counter);
          console.log("data: "+data);
          var counter = this.counter;
          console.log("returnTimeout2");
         console.log(this.returnSetTimeout);
        console.log("counter before "+counter);
          if(data == "left"){
            counter--;
            console.log("counter1- "+counter);   
            if(!(counter >=0 && counter <3)){
                //counter = 4;
                counter = 2;
            }
          }
          else if(data == "right"){
            counter++;
            console.log("counter1+ "+counter);   
            if(!(counter >=0 && counter <3)){
                counter = 0;
            }
          }
          this.direction = data;
          this.counter = counter;
          this.imageStateStyle = {backgroundColor : "green"};
          this.pauseandplayText="II";
          clearInterval(this.returnSetTimeout);
          this.returnSetTimeout =null;
          console.log("counter after "+this.counter);
          this.initializeSetTimeout();
          
      },
      imageState(){
          console.log("in imageState method start");
          console.log("this.pauseandplayText "+this.pauseandplayText);
              console.log("this.returnSetTimeout start");
              console.log(this.returnSetTimeout);
          if(this.pauseandplayText == "II"){
            this.imageStateStyle = {backgroundColor : "red"};
            this.pauseandplayText = ">";
            clearInterval(this.returnSetTimeout);
            this.returnSetTimeout = null;

            console.log("this.returnSetTimeout if");
            console.log(this.returnSetTimeout);

          }
          else{
            console.log("in else");
            
            if(this.returnSetTimeout){
                console.log("in else if");
            }else{
                console.log("in else else");
                this.imageStateStyle = {backgroundColor : "green"};
                this.pauseandplayText="II";
                this.control("right");
                //this.initializeSetTimeout();
            }
          }
          console.log("in imageState method end");
      },
      initializeSetTimeout(){
            console.log("in initializeSetTimeout method start");
            var self = this;
            
           /*  this.returnSetTimeout = setInterval(()=>{
                console.log("setinterval start");
                console.log("self.counter before "+self.counter);
                //if(self.counter>3){
                if(self.counter>1){
                    self.counter = 0 ;
                }
                else{
                    self.counter = self.counter+1;
                }
                console.log("self.counter after "+self.counter);
                console.log("setinterval end");
            },4000);   */  
            console.log("returnTimeout1");
            console.log(this.returnSetTimeout);
            console.log("in initializeSetTimeout method end");
      },
      imageIndividualSelection(imageId){
          console.log("imageIndividualSelection: "+imageId);
          this.counter = imageId;
          clearInterval(this.returnSetTimeout);
          this.returnSetTimeout =null;
          this.initializeSetTimeout();
      }
  },
  created(){
      
      this.initializeSetTimeout();
  }
}
</script>

<style>
#slider{
    height: 90vh;
    width: 100%;
    display: inline-block;
    position: relative;
}
#slider .left, #slider .right{
    position: absolute;
    background-color: blue;
    top: 45%;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
}
#slider .right{
    right: 0px;
}
#slider .left div, #slider .right div{
    margin-top: 9px;
    text-align: center;
    font-weight: bold;
    color: white;
    font-weight: 900;
    font-size: 20px;
}
#slider .left:hover, #slider .right:hover{
    background-color: red;
}




#slider .bottom-controls{
    
    position: absolute;
    bottom: 0px;
    left: 48%;
}

#slider .bottom-controls .imageIndividualSelection .active{
    background-color: white;
}

#slider .bottom-controls .imageIndividualSelection{
    display: inline-block;
}
#slider .bottom-controls .imageIndividualSelection div{
    display: inline-block;
    margin-right: 3px;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    text-align: center;
    background-color: transparent;
    color:black;
    font-weight: bold;
    
}
#slider .bottom-controls .imageIndividualSelection div div{
    border: 1px solid white;
}

#slider .bottom-controls .pauseandplay{
    height: 48px;
    color:black;
    width: 50px;
    border-radius: 50%;
    position: relative;
    left: 25%;
}

#slider .bottom-controls .pauseandplay div{
    text-align: center;
    display: inline-block;
    width: 50px;
    height: 31px;
    border-radius: 50%;
    transition: all .3s ease-in-out;
    color:white;
    position: relative;
    margin-top: 13%;
}

#slider .bottom-controls .pauseandplay div:hover {
 background-color: blue;
}

#slider .slider-text {
    height: 100px;
    width: 450px;
    position: absolute;
    z-index: 100;
    top: 5%;
    left: 25%;
    
}


#slider .slider-text .slider-logo{
    background-image: url(/public/images/slider2_logo.png);
    background-repeat: no-repeat;
    height: 120px;
    background-size: contain;
    color: black;
}

#slider .slider-text .details div{
    color: white;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 30px;
}
#slider .slider-text .details{
    position: relative;
    top: 50%;
}
#slider .slider-text .details div{
    margin-left: 7%;

}

#slider .slider-text .details div:before{
    content: " ";
    background-image: url(/public/images/slider_check.png);
    background-repeat: no-repeat;
    height: 11px;
    width: 14px;
    position: absolute;
    background-size: contain;
    margin-top: 10px;
    margin-left: -7%;
    opacity: 1;
}
#slider .slider-text .actions{
    position: relative;
    top: 70%;
    text-transform: uppercase;
    font-size: 12px;
}
#slider .slider-text .actions a{
    display: inline-block;
    color:white;
    font-weight: 550;
    padding:10px;
    border-radius: 5%;
    cursor: pointer;
    
}
#slider .slider-text .actions a:nth-child(1){
    background-color: #21c2f8;
    transition: 0.3s all ease-in-out;
}
#slider .slider-text .actions a:nth-child(2){
    border: 1px solid white;
    background-color: transparent;
    transition: 0.3s all ease-in-out;
}
#slider .slider-text .actions a:nth-child(1):hover
{
    background-color: #222533;
}
#slider .slider-text .actions a:nth-child(2):hover{
    background-color: #222533;
    border:0;
}

#slider .slider-text .slider-logo{
    animation-name: sliderLogoAnimation;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    opacity: 0;
}

@keyframes sliderLogoAnimation {
    from{
        transform: translate(-30px,0px);
        opacity: 0;
    }
    to{
        transform: translate(0px,0px);
        opacity: 1;
    }
}
#slider .slider-text .details div{
    animation-name: slidertextdetailsAnimation;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    opacity: 0;
}
#slider .slider-text .details div:nth-child(1){
    animation-delay: 2s;
}
#slider .slider-text .details div:nth-child(2){
    animation-delay: 2.5s;
}
#slider .slider-text .details div:nth-child(3){
    animation-delay: 3s;
}
#slider .slider-text .details div:nth-child(4){
    animation-delay: 3.5s;
}
#slider .slider-text .details div:nth-child(5){
    animation-delay: 4s;
}
@keyframes slidertextdetailsAnimation {
    from{
        opacity: 0;
        transform: perspective(500px) translateZ(200px);
    }
    to{
         opacity: 1;
         transform: perspective(500px) translateZ(0px);
    }
}
#slider .slider-text .actions a:nth-child(1){
    animation-name: slidertextaction1;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 4.5s;
    opacity: 0;
}

#slider .slider-text .actions a:nth-child(2){
    animation-name: slidertextaction2;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 4.5s;
    opacity: 0;
}
@keyframes slidertextaction1 {
    0%{
        transform: translate(-40px,0px);
    }
    50%{
        transform: translate(0px,0px);
        opacity: 1;
    }
    100%{
        transform: translate(-10px,0px);
        opacity: 1;
    }
}
@keyframes slidertextaction2 {
    0%{
        transform: translate(40px,0px);
    }
    50%{
        transform: translate(0px,0px);
        opacity: 1;
    }
    100%{
        transform: translate(10px,0px);
        opacity: 1;
    }
}

/* second slide */
#slider .slider-text-1 {
    height: 100px;
    width: 450px;
    position: absolute;
    z-index: 100;
    top: 5%;
    left: 33%;    
}
#slider .slider-text-1 .actions{
    position: relative;
    top: 70%;
    text-transform: uppercase;
    font-size: 12px;
}

#slider .slider-text-1 .actions a{
    display: inline-block;
    color:white;
    font-weight: 550;
    padding:10px;
    border-radius: 5%;
    cursor: pointer;
    
}

#slider .slider-text-1 .actions a:nth-child(1){
    background-color: #21c2f8;
    transition: 0.5s all ease-in-out;

animation-name: slidertextaction1;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
    opacity: 0;

}
#slider .slider-text-1 .actions a:nth-child(2){
    border: 1px solid white;
    background-color: transparent;
    transition: 0.5s all ease-in-out;

    animation-name: slidertextaction2;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
    opacity: 0;

}
#slider .slider-text-1 .actions a:nth-child(1):hover
{
    background-color: #222533;
}
#slider .slider-text-1 .actions a:nth-child(2):hover{
    background-color: #222533;
    border:0;
}


#slider .slider-text-1 .slider-logo-1{
    background-image: url(/public/images/slider1_logo.png);
    background-repeat: no-repeat;
    height: 120px;
    background-size: contain;
    color: black;
    
    animation-name: slidertext-1-logo;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    opacity: 0;
}
@keyframes slidertext-1-logo {
    from{
        transform: perspective(500px) translateZ(400px);
    }
    to{
        transform: perspective(500px) translateZ(0px);
        opacity: 1;
    }
}

/* npm install vue-fontawesome */
</style>
