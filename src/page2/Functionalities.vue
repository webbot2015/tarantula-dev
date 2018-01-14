<template>
  <div id="functionalities">
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
  align-items: center;
}

#functionalities .security,
#functionalities .analytics,
#functionalities .marketing,
#functionalities .services,
#functionalities .management{
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-position-y: 0px;
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
</style>
