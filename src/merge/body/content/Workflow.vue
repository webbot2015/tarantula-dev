<template>
  <div id="workflow">
    <div class="titlebar">
            <div class="text">Process</div>
            <div class="arrow" id="arrow-down"></div>
        </div>
    <div class="workflowsection">
        <div class="discussion">
          <div class="number">1</div>
          <div class="text">DISCUSSION</div>
          <div class="image"></div>
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
  /* height:100%; */
  background-color: #d8cece;
  box-sizing: border-box;
  position: relative;

   height: auto;
}
#workflow .titlebar{
        background-color: green;
        position: relative;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    #workflow .titlebar .text{
        color: white;
        font-weight: bold;
        line-height: 35px;
        position: relative;
    }
    #workflow .titlebar .arrow{
        cursor: pointer;
        top: 40px;
        width: 0;
        height:0;
        border-style: solid;
        position: relative;
    }
    #workflow .titlebar #arrow-down{
        border-left-width: 30px;
        border-right-width: 30px;
        border-top-width: 20px;
        margin-left: -60px;
        border-color: green transparent  transparent transparent; 
    }

#workflow .workflowsection{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: brown;
  padding-bottom:1%;
  padding-top: 1%;
  flex-wrap: wrap;
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
  

#workflow .workflowsection .arrow{
  height: 50px;
  width: 50px;
  background-color: green;
  border-radius: 50%;
  position: relative;
  top: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}

#workflow .workflowsection .discussion,
#workflow .workflowsection .strategy,
#workflow .workflowsection .development,
#workflow .workflowsection .testing,
#workflow .workflowsection .launch{

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 350px;
    justify-content: space-around;
}

#workflow .workflowsection .discussion .image,
#workflow .workflowsection .strategy .image,
#workflow .workflowsection .development .image,
#workflow .workflowsection .testing .image,
#workflow .workflowsection .launch .image{
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
 background-position: center;
  background-position-y: 0px;
}

#workflow .workflowsection .discussion .image{
  background-image: url(/public/images/page2/discussion.png);
}
#workflow .workflowsection .strategy .image{
  background-image: url(/public/images/page2/strategy.png);
}
#workflow .workflowsection .development .image{
  background-image: url(/public/images/page2/development.png);
}
#workflow .workflowsection .testing .image{
  background-image: url(/public/images/page2/discussion.png);
}
#workflow .workflowsection .launch .image{
  background-image: url(/public/images/page2/launch.png);
}


 #workflow .workflowsection .discussion .number,
#workflow .workflowsection .strategy .number,
#workflow .workflowsection .development .number,
#workflow .workflowsection .testing .number,
#workflow .workflowsection .launch .number{
  height: 50px;
  width: 50px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  
}

#workflow .workflowsection .discussion .text,
#workflow .workflowsection .strategy .text,
#workflow .workflowsection .development .text,
#workflow .workflowsection .testing .text,
#workflow .workflowsection .launch .text{
    display: inline-block;
} 

@media only screen and (max-width: 600px) {
  #workflow .description{
    display: none; 
  }  
  #workflow .workflowsection .arrow{
    display: none; 
  }
  #workflow .workflowsection {
    flex-direction: column;
  }
}
@media only screen and (max-width: 1220px) {
  #workflow .workflowsection{
    justify-content: flex-start;
  }
}
</style>
