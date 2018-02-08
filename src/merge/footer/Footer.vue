<template>
  <div id="footer">
      <div class="footer-content">
        <div class="social-icons">
            <div class="row1">
                <div class="fb"></div>
                <div class="twitter"></div>
                <div class="googleplus"></div>
                <div class="instagram"></div>
                <div class="pinterest"></div>
            </div>
            <div class="row2">
                <div class="android"></div>
                <div class="microsoft"></div>
                <div class="apple"></div>
                <div class="youtube"></div>
                <div class="androidstore"></div>
            </div>
        </div>
        <div class="brand-logo">
            <div class="brand-name"></div>
            <div class="brand-icon"></div>
        </div>
        <div class="communications">
            <div class="contact-tarantula">Contact Tarantula</div>
            <div class="email-tarantula">Email Tarantula</div>
            <div class="offline-chat">Offline Chat</div>
        </div>
      </div>
      <div class="copyright">
          &copy; Tarantula Web Designs
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>


<style>
#footer{
    height:auto;
    background-color: #262626;
    color: white;
    
}

#footer .footer-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
}
    
#footer .footer-content .social-icons{
    display: inline-block;
}

#footer .footer-content .social-icons .row1 .fb,
#footer .footer-content .social-icons .row1 .twitter,
#footer .footer-content .social-icons .row1 .googleplus,
#footer .footer-content .social-icons .row1 .instagram,
#footer .footer-content .social-icons .row1 .pinterest{
width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  display: inline-block;
}
#footer .footer-content .social-icons .row1{
    padding-bottom:4%;
}

#footer .footer-content .social-icons .row2 .android,
#footer .footer-content .social-icons .row2 .microsoft,
#footer .footer-content .social-icons .row2 .apple,
#footer .footer-content .social-icons .row2 .youtube,
#footer .footer-content .social-icons .row2 .androidstore{
width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  display: inline-block;
}

#footer .footer-content .social-icons .row1 .fb{
    background-image: url(/public/images/footer/fb-icon.png);
}
#footer .footer-content .social-icons .row1 .twitter{
    background-image: url(/public/images/footer/twitter-icon.png);
}
#footer .footer-content .social-icons .row1 .googleplus{
    background-image: url(/public/images/footer/googleplus-icon.png);
}
#footer .footer-content .social-icons .row1 .instagram{
    background-image: url(/public/images/footer/instagram-icon.png);
}
#footer .footer-content .social-icons .row1 .pinterest{
    background-image: url(/public/images/footer/pinterest-icon.png);
}


#footer .footer-content .social-icons .row2 .android{
    background-image: url(/public/images/footer/android-icon.png);
}
#footer .footer-content .social-icons .row2 .microsoft{
    background-image: url(/public/images/footer/microsoft-icon.png);
}
#footer .footer-content .social-icons .row2 .apple{
    background-image: url(/public/images/footer/apple-icon.png);
}
#footer .footer-content .social-icons .row2 .youtube{
    background-image: url(/public/images/footer/youtube-icon.png);
}
#footer .footer-content .social-icons .row2 .androidstore{
    background-image: url(/public/images/footer/androidstore-icon.png);
}

#footer .footer-content .brand-logo{
    display: inline-block;
    display: flex;
    flex-direction: column;
    align-items: center;

}
#footer .footer-content .brand-logo .brand-name{
    width: 280px;
    height: 140px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(/public/images/footer/logotext900.png);
}

#footer .footer-content .brand-logo .brand-icon{
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(/public/images/footer/Tarantula_Icon2.png);
    display: inline-block;
    padding-bottom: 10%;
}
    
#footer .footer-content .communications{
    display: inline-block;
}

#footer .footer-content .communications .contact-tarantula,
#footer .footer-content .communications .email-tarantula,
#footer .footer-content .communications .offline-chat{
position: relative;
/* left: 50px; */
height: 40px;
line-height: 40px;
padding-bottom:12%;
}

#footer .footer-content .communications .contact-tarantula:before,
#footer .footer-content .communications .email-tarantula:before,
#footer .footer-content .communications .offline-chat:before{
    content: '';
    position: absolute;
    left:-50px;
    width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
}
#footer .footer-content .communications .contact-tarantula:before{
background-image: url(/public/images/footer/contact-tarantula-icon.png);
}
#footer .footer-content .communications .email-tarantula:before{
  background-image: url(/public/images/footer/email-tarantula-icon.png);
}
#footer .footer-content .communications .offline-chat:before{
  background-image: url(/public/images/footer/offline-chat-icon.png);
}
#footer .copyright{
    line-height: 50px;
    height: 50px;
    background-color: green;
    font-size: 20px;
    padding-left: 2%;
}
@media only screen and (max-width: 800px) {
    #footer .footer-content{
        flex-direction: column;
        padding-top: 4%;
    }
}
</style>
