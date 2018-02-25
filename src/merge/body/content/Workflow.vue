<template>
  <div id="workflow">
    <div class="titlebar">
            <div class="text">Pipeline</div>
            <div class="arrow" id="arrow-down"></div>
        </div>
      <!-- container -->
    
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
            <div class="holder">
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
  height:100vh; 
  background-color: #c9c9c9;
  background: linear-gradient(#c9c9c9, white,white, #c9c9c9,#c9c9c9);
  box-sizing: border-box;
  position: relative;

   /* height: auto; */
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
  justify-content: center;
  /* background-color: brown; */
  padding-bottom:1%;
  padding-top: 1%;
  flex-wrap: wrap;
}

#workflow .description{
  position: relative;
  margin-top: 4%;
  display: flex;
  justify-content: center;
}
#workflow .description .holder{
  display: flex;
  background-color: white;
  width: 90vw;
}
#workflow .description .holder .image-handshake{
  width: 200px;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 0px;
  background-image: url(/public/images/page2/people.png);
}
#workflow .description .holder .bulletpoints ul{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  margin: 0;
  margin-left: 5%;
}
#workflow .description .holder .bulletpoints ul li{
  list-style-type: square;
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
    margin: 0px 10px;
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



@media only screen and (max-width: 1296px) {
  #workflow{
    height:auto; 
  }
  #workflow{
    padding-bottom: 10%;
  }
}

@media only screen and (max-width: 600px) {
  /* #workflow .description{
    display: none; 
  }  */ 
  #workflow .workflowsection .arrow{
    display: none; 
  }
  #workflow .workflowsection {
    flex-direction: column;
  }
  #workflow .description .holder .image-handshake {
    align-self: center;
  }
  #workflow .description .holder{
    flex-direction: column;
        padding-bottom: 10%;
  }
  
}
@media only screen and (max-width: 1220px) {
  #workflow .workflowsection{
    justify-content: flex-start;
  }
}
</style>
