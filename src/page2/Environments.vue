<template>
  <div id="environments">
    <div class="crossplatforms">
      <div class="title">CROSS PLATFORM</div>
      <div class="image">
        <div>
          <div class="windows"></div>
          <div class="ubuntu"></div>
          <div class="other"></div>  
        </div>
        <div>
          <div class="android"></div>
          <div class="playstore"></div>
          <div class="chrome"></div>  
        </div>
      </div>
    </div>
    <div class="technologies">
      <div class="title">TECHNOLOGIES</div>
      <div class="image"></div>
    </div>
    <div class="multipleformats">
      <div class="title">MULTIPLE DATA FORMATS</div>
      <div class="image"></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#environments{
  background-color: #d8cece;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#environments .crossplatforms,
#environments .technologies,
#environments .multipleformats{
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#environments .crossplatforms .title,
#environments .technologies .title,
#environments .multipleformats .title{
  margin-bottom: 8%;
  font-size: 25px;
}


#environments .technologies .image,
#environments .multipleformats .image{
  width: 262px;
  height: 222px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 0px;
  display: inline-block;
  border: 1.5px solid #9a9090;
  padding: 2%;
}
/* #environments .crossplatforms .image{
  background-image: url(/public/images/page2/websecurity.png);
} */
#environments .technologies .image{
  background-image: url(/public/images/page2/technologies.jpg);
}
#environments .multipleformats .image{
  background-image: url(/public/images/page2/multipledataformats.png);
}
#environments .crossplatforms .image{
  display: flex;
  flex-direction: column;
  border: 1.5px solid #9a9090;
  padding: 2%;
}
#environments .crossplatforms .image .windows,
#environments .crossplatforms .image .ubuntu,
#environments .crossplatforms .image .other,
#environments .crossplatforms .image .android,
#environments .crossplatforms .image .playstore,
#environments .crossplatforms .image .chrome{
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 0px;
  display: inline-block;
}
#environments .crossplatforms .image .windows{
  background-image: url(/public/images/page2/windows.jpg);
}
#environments .crossplatforms .image .ubuntu{
  background-image: url(/public/images/page2/ubuntu.png);
}
#environments .crossplatforms .image .other{
  background-image: url(/public/images/page2/appstore.gif);
}
#environments .crossplatforms .image .android{
  background-image: url(/public/images/page2/android.png);
}
#environments .crossplatforms .image .playstore{
  background-image: url(/public/images/page2/playstore.png);
}
#environments .crossplatforms .image .chrome{
  background-image: url(/public/images/page2/chromestore.png);
}
</style>
