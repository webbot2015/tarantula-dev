<template>
  <div id="functionalities">
     <div class="titlebar">
            <div class="text">Services</div>
            <div class="arrow" id="arrow-down"></div>
        </div>
<div class="functionalities-content">
    <div class="security">
      <div class="text">WEB SECURITY</div>
      <div class="image"></div>
      <div class="description">
        <div>Proactive Protection</div>
        <div>Security Checkpoints</div>
        <div>Server Firewalls</div>
        <div>Data Encryption</div>
        <div>Risk Assessment</div>
      </div>
    </div>
    <div class="analytics">
      <div class="text">WEB ANALYTICS</div>
      <div class="image"></div>
      <div class="description">
        <div>Web Traffic</div>
        <div>Demographics</div>
        <div>Feedback Forum</div>
        <div>Online SURVEYS</div>
        <div>Ratings &amp; Polls</div>
      </div>
    </div>
    <div class="marketing">
      <div class="text">BRANDING &amp; MARKETING</div>
      <div class="image"></div>
      <div class="description">
        <div>Social Media Promotions</div>
        <div>Video, Email</div>
        <div>Newsletters</div>
        <div>Online Advertisements</div>
        <div>SEO &amp; Pay Per Click</div>
        <div>Blog &amp; Support Forum</div>
      </div>
    </div>
    <div class="services">
      <div class="text">CLOUD STORAGE SERVICES</div>
      <div class="image"></div>
      <div class="description">
        <div>Cloud hosting</div>
        <div>Dedicated/Shared/VPS</div>
        <div>LINUX/WINDOWS</div>
        <div>Secure,Fast,Scalable</div>
        <div>Website Migration</div>
      </div>
    </div>
    <div class="management">
      <div class="text">DATA MANAGEMENT</div>
      <div class="image"></div>
      <div class="description">
        <div>Databases (DB)</div>
        <div>Database Security</div>
        <div>DB Generation</div>
        <div>DB Maintenance</div>
        <div>Data Backup</div>
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
#functionalities{
  background-color:#333333;
  height: 100%;
  width: 100%;
  display: flex;
  color: white;
  
  position: relative;
      flex-direction: column;
}

 
#functionalities .titlebar{
        background-color: green;
        position: relative;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    #functionalities .titlebar .text{
        color: white;
        font-weight: bold;
        line-height: 35px;
        position: relative;
    }
    #functionalities .titlebar .arrow{
        cursor: pointer;
        top: 40px;
        width: 0;
        height:0;
        border-style: solid;
        position: relative;
    }
    #functionalities .titlebar #arrow-down{
        border-left-width: 30px;
        border-right-width: 30px;
        border-top-width: 20px;
        margin-left: -60px;
        border-color: green transparent  transparent transparent; 
    }




  #functionalities .functionalities-content{
    display: flex;
    /* align-items: center; */
    position: relative;
    padding-bottom: 1%;
    padding-top: 1%;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

#functionalities .security,
#functionalities .analytics,
#functionalities .marketing,
#functionalities .services,
#functionalities .management{
      flex-basis: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
      padding-top: 3%;
    padding-bottom: 3%;
}

#functionalities .security .text,
#functionalities .analytics .text,
#functionalities .marketing .text,
#functionalities .services .text,
#functionalities .management .text{

}

#functionalities .security .image,
#functionalities .analytics .image,
#functionalities .marketing .image,
#functionalities .services .image,
#functionalities .management .image{
  width: 100%;
  height: 222px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  display: inline-block;
  /* border: 1px solid black; */

  margin-top: 10%;
  margin-bottom: 10%;
}
#functionalities .security .image{
background-image: url(/public/images/page2/websecurity.png);
}
#functionalities .analytics .image{
background-image: url(/public/images/page2/webanalytics.png);
}
#functionalities .marketing .image{
background-image: url(/public/images/page2/socialnetworks.png);
}
#functionalities .services .image{
background-image: url(/public/images/page2/cloud.png);
}
#functionalities .management .image{
background-image: url(/public/images/page2/datamanagement.png);
}


#functionalities .security .description,
#functionalities .analytics .description,
#functionalities .marketing .description,
#functionalities .services .description,
#functionalities .management .description{
  border: 2px solid green;
  border-radius: 20%;
  padding: 5%;
}

@media only screen and (max-width: 600px) {
 #functionalities .functionalities-content{
   flex-direction: column;
   
 }
 #functionalities .security,
#functionalities .analytics,
#functionalities .marketing,
#functionalities .services,
#functionalities .management{
  flex-basis: auto;
}

#functionalities .security .image,
#functionalities .analytics .image,
#functionalities .marketing .image,
#functionalities .services .image,
#functionalities .management .image{
    margin-top: 5%;
  margin-bottom: 5%;
}
}
</style>
