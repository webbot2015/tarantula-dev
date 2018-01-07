<template>
  <div id="slider">
    <slidercontent-ii :imgContents="imgContents" :counter="counter" :direction="direction"></slidercontent-ii>
    <div class="left" @click="control('left')">
        <div>Left</div>
    </div>
    <div class="right" @click="control('right')">
        <div>right</div>
    </div>
    <div class="bottom-controls">
         <div class="imageIndividualSelection">
        <div v-for="(imgContent,key) in imgContents" :key="key">
            <div class="active" v-if="counter == imgContent.id">{{imgContent.id}}</div>
            <div v-else @click="imageIndividualSelection(imgContent.id)">{{imgContent.id}}</div>
        </div>
    </div>
    <div class="pauseandplay">
        <div :style="imageStateStyle">
            <div @click="imageState()" :style="imageStateStyle">{{this.pauseandplayText}}</div>
        </div>
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
            
            this.returnSetTimeout = setInterval(()=>{
                console.log("setinterval start");
                console.log("self.counter before "+self.counter);
                if(self.counter>3){
                    self.counter = 0 ;
                }
                else{
                    self.counter = self.counter+1;
                }
                console.log("self.counter after "+self.counter);
                console.log("setinterval end");
            },4000);    
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




#slider .bottom-controls{
    
    position: absolute;
    bottom: 0px;
    left: 48%;
}

#slider .imageIndividualSelection .active{
    background-color: grey;
}

#slider .bottom-controls .imageIndividualSelection{
    display: inline-block;
}
#slider .bottom-controls .imageIndividualSelection div{
    display: inline-block;
    margin-right: 3px;
    border: 1px solid black;
    border-radius: 50%;
    height: 17px;
    width: 17px;
    text-align: center;
    background-color: orange;
    color:black;
    font-weight: bold;
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



/* npm install vue-fontawesome */
</style>
