<template>
  <div id="workflow">
    <div class="section1">
        <div class="discussion">
          <div class="number">1</div>
          <div class="text">DISCUSSION</div>
          <div class="image"></div>
          <!-- <div class="description">
            <div class="section2link"></div>
            <div class="detail">
              <div class="image-handshake"></div>
              <div class="bulletpoints">
                <ul>
                  <li>Contact Tarantula (Links)</li>
                  <li>We will initiate project discussion</li>
                  <li>One to one meeting will be based on customer requirements</li>
                </ul>
              </div>
            </div>
          </div> -->
        </div>
            <div class="arrow">&gt;</div>
        <div class="strategy">
          <div class="number">2</div>
          <div class="text">STRATEGY</div>
          <div class="image"></div>
        </div>
            <div class="arrow">&gt;</div>
        <div class="development">
          <div class="number">3</div>
          <div class="text">DEVELOPMENT</div>
          <div class="image"></div>
        </div>
            <div class="arrow">&gt;</div>
        <div class="testing">
          <div class="number">4</div>
          <div class="text">TESTING</div>
          <div class="image"></div>
        </div>
            <div class="arrow">&gt;</div>
        <div class="launch">
          <div class="number">5</div>
          <div class="text">LAUNCH</div>
          <div class="image"></div>
        </div>
    </div>
    <div class="description">
            <div class="section2link"></div>
            <div class="detail">
              <div class="image-handshake"></div>
              <div class="bulletpoints">
                <ul>
                  <li>Contact Tarantula (Links)</li>
                  <li>We will initiate project discussion</li>
                  <li>One to one meeting will be based on customer requirements</li>
                </ul>
              </div>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#workflow{
  width:100%;
  height:100%;
  background-color: #d8cece;
  padding: 1%;
  box-sizing: border-box;
  position: relative;
}
#workflow .section1{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: brown;
  padding-bottom:1%;
}

#workflow .description{
  
}

#workflow .description .section2link{
  background-color: red;
  display: inline-block;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  left: 5.3%; 
  MARGIN-top: 1%;
  position: relative;
  MARGIN-bottom: 1%;
}
#workflow .description .detail{
  background-color: white;
}
#workflow .description .detail .image-handshake{
  width: 200px;
  height: 180px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  background-position-y: 0px;
  display: inline-block;
  background-image: url(/public/images/page2/people.png);
}

#workflow .description .detail .bulletpoints{
display: inline-block;
position: absolute;
}
#workflow .description .detail .bulletpoints ul li{
  line-height: 55px;
}
  

#workflow .section1 .arrow{
  height: 50px;
  width: 50px;
  background-color: green;
  border-radius: 50%;
  position: relative;
  margin-top: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#workflow .section1 .discussion,
#workflow .section1 .strategy,
#workflow .section1 .development,
#workflow .section1 .testing,
#workflow .section1 .launch{

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20%;
}

#workflow .section1 .discussion .image,
#workflow .section1 .strategy .image,
#workflow .section1 .development .image,
#workflow .section1 .testing .image,
#workflow .section1 .launch .image{
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  background-position-y: 0px;
  display: inline-block;
}

#workflow .section1 .discussion .image{
  background-image: url(/public/images/page2/discussion.png);
}
#workflow .section1 .strategy .image{
  background-image: url(/public/images/page2/strategy.png);
}
#workflow .section1 .development .image{
  background-image: url(/public/images/page2/development.png);
}
#workflow .section1 .testing .image{
  background-image: url(/public/images/page2/discussion.png);
}
#workflow .section1 .launch .image{
  background-image: url(/public/images/page2/launch.png);
}


 #workflow .section1 .discussion .number,
#workflow .section1 .strategy .number,
#workflow .section1 .development .number,
#workflow .section1 .testing .number,
#workflow .section1 .launch .number{
  height: 50px;
  width: 50px;
  background-color: green;
  border-radius: 50%;
  margin: 8%;
  display: flex;
    justify-content: center;
    align-items: center;
  
}

#workflow .section1 .discussion .text,
#workflow .section1 .strategy .text,
#workflow .section1 .development .text,
#workflow .section1 .testing .text,
#workflow .section1 .launch .text{
    margin-bottom: 8%;
} 


</style>
