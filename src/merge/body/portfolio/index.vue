<template>
  <div id="portfolio">
      <div class="portfolioContainer">
        <div class="applicationDevelopment_1">
            <div class="image"></div>   
            <div class="text">
                 <div>Mobile Applications (APP)</div>
                <div>Mobile Commerce</div>
                <div>Data Collection APP</div>
                <div>Cross-Platform Compatibility</div> 
            </div>
        </div>
        <div class="web_design_2">
            <div class="text">
                <div>New Website &amp; Re-Designs</div> 
                <div>Responsive &amp; Interactive Design</div> 
                <div>Personal Portfolio</div> 
                <div>E-Commerce</div> 
            </div>
            <div class="image"></div>
        </div>
        <div class="services_3">
            <div class="image"></div>
            <div class="text">
                <div>Social Marketing</div>
                <div>Domain name registration</div>
                <div>Website hosting</div>
                <div>SSL certificates</div>
            </div>
        </div>
        <div class="graphic_design_4">
            
            <div class="text">
                <div>Tailored Web Design</div>
                <div>Minimalistic</div>
                <div>Mobile Friendly</div>
                <div>Compatible</div>
            </div>
            <div class="image"></div>
        </div>
        <div class="development_5">
            <div class="image"></div>
            <div class="text">                
                <div>Responsive Web Design</div>
                <div>Interactive UI</div>
                <div>Application Development</div>
                <div>Content Management System</div>
            </div>
            
        </div>
        <div class="scalableHostting_6">
            
            <div class="text">
                <div>Secure &amp; Scalable Hosting</div> 
            </div>
            <div class="image"></div>
        </div>
        <div class="seo_7">
            <div class="image"></div>
            <div class="text">
                <div>Search Engine Optimization</div>
                <div>LINK Building, Keyword Targeting</div>
                <div>Indexing, Adwords</div>
                <div>Web Anaytics</div>
            </div>
        </div>
        <div class="marketing_8">
            
            <div class="text">
                <div>Digital Marketing</div>
                <div>Logo/Icon Design</div>
                <div>Ad Flyers, Banner</div>
                <div>Email Marketing</div>
                <div>Blogging, Social Bookmarking</div>
            </div>
            <div class="image"></div>
        </div>
        <div class="socialNetwork_9">
            <div class="image"></div>
            <div class="text">
                <div>Launch Social Media Campaigns</div>
                <div>Highlight Keywords</div>
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
#portfolio{
   /*  background-color: rgb(7, 11, 12); */
   background-color: white;
    height: auto;   
    width: auto;

    
}
#portfolio .portfolioContainer{
    display: flex;
    flex-direction: column;



    
}

#portfolio .portfolioContainer .text{
   /*  background: linear-gradient(120deg, blue,orange);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    /* text-shadow: 1px 1px 1px black; */
    line-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    text-align: center;
    
    font-size: 32px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
 /*  -webkit-text-fill-color: transparent; */
}
    

#portfolio .portfolioContainer .applicationDevelopment_1 ,
#portfolio .portfolioContainer .web_design_2 ,
#portfolio .portfolioContainer .services_3 ,
#portfolio .portfolioContainer .graphic_design_4 ,
#portfolio .portfolioContainer .development_5 ,
#portfolio .portfolioContainer .scalableHostting_6 ,
#portfolio .portfolioContainer .seo_7 ,
#portfolio .portfolioContainer .marketing_8 ,
#portfolio .portfolioContainer .socialNetwork_9 {
    display: flex;
    flex: 1;   
    /* height: 100vh; */
    height: 75vh;

}

#portfolio .portfolioContainer .applicationDevelopment_1 .text,
#portfolio .portfolioContainer .web_design_2 .text,
#portfolio .portfolioContainer .services_3 .text,
#portfolio .portfolioContainer .graphic_design_4 .text,
#portfolio .portfolioContainer .development_5 .text,
#portfolio .portfolioContainer .scalableHostting_6 .text,
#portfolio .portfolioContainer .seo_7 .text,
#portfolio .portfolioContainer .marketing_8 .text,
#portfolio .portfolioContainer .socialNetwork_9 .text{
 background-color: brown;
width: 50vw;

}
#portfolio .portfolioContainer .applicationDevelopment_1 .text div,
#portfolio .portfolioContainer .web_design_2 .text div,
#portfolio .portfolioContainer .services_3 .text div,
#portfolio .portfolioContainer .graphic_design_4 .text div,
#portfolio .portfolioContainer .development_5 .text div,
#portfolio .portfolioContainer .scalableHostting_6 .text div,
#portfolio .portfolioContainer .seo_7 .text div,
#portfolio .portfolioContainer .marketing_8 .text div,
#portfolio .portfolioContainer .socialNetwork_9 .text div{

display: block;
}


#portfolio .portfolioContainer .applicationDevelopment_1 .image,
#portfolio .portfolioContainer .web_design_2 .image,
#portfolio .portfolioContainer .services_3 .image,
#portfolio .portfolioContainer .graphic_design_4 .image,
#portfolio .portfolioContainer .development_5 .image,
#portfolio .portfolioContainer .scalableHostting_6 .image,
#portfolio .portfolioContainer .seo_7 .image,
#portfolio .portfolioContainer .marketing_8 .image,
#portfolio .portfolioContainer .socialNetwork_9 .image{
     background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 0px;
    background-color: aqua;
    width: 45vw;
    background-position: center;
    background-size: contain;
    height: 75vh;
    position: relative;
    box-shadow: 0px 0px 10px 5px rgb(197, 187, 187);
    
}

#portfolio .portfolioContainer .applicationDevelopment_1 .image,
#portfolio .portfolioContainer .services_3 .image,
#portfolio .portfolioContainer .development_5 .image,
#portfolio .portfolioContainer .seo_7 .image,
#portfolio .portfolioContainer .socialNetwork_9 .image {
top: 7%;
left: 5%;

}


#portfolio .portfolioContainer .web_design_2 .image,
#portfolio .portfolioContainer .graphic_design_4 .image,
#portfolio .portfolioContainer .scalableHostting_6 .image,
#portfolio .portfolioContainer .marketing_8 .image {
    top: 7%;
    /* right: 5%; */
}






#portfolio .portfolioContainer .applicationDevelopment_1 .image{
    background-image: url(/public/images/portfolio/1_applicationDevelopment_resize.jpg); 
}
#portfolio .portfolioContainer .web_design_2 .image{
    background-image: url(/public/images/portfolio/2_web_design_resized.jpg); 
}
#portfolio .portfolioContainer .services_3 .image{
    background-image: url(/public/images/portfolio/3_services.png); 
}
#portfolio .portfolioContainer .graphic_design_4 .image{
    background-image: url(/public/images/portfolio/4_graphic_design.jpg); 
}
#portfolio .portfolioContainer .development_5 .image{
    background-image: url(/public/images/portfolio/5_development.png); 
}
#portfolio .portfolioContainer .scalableHostting_6 .image{
    background-image: url(/public/images/portfolio/6_scalableHostting.jpg); 
}
#portfolio .portfolioContainer .seo_7 .image{
    background-image: url(/public/images/portfolio/7_seo.jpg); 
}
#portfolio .portfolioContainer .marketing_8 .image{
    background-image: url(/public/images/portfolio/8_marketing.jpg); 
}
#portfolio .portfolioContainer .socialNetwork_9 .image{
    background-image: url(/public/images/portfolio/9_socialNetwork.jpg); 
}

@media only screen and (max-width: 900px) {
    
    #portfolio .portfolioContainer .text{
        font-size: 25px;
    }

    

}

@media only screen and (max-width: 600px) {
    
    #portfolio .portfolioContainer .text{
        font-size: 30px;
    }

#portfolio .portfolioContainer .applicationDevelopment_1 ,
#portfolio .portfolioContainer .web_design_2 ,
#portfolio .portfolioContainer .services_3 ,
#portfolio .portfolioContainer .graphic_design_4 ,
#portfolio .portfolioContainer .development_5 ,
#portfolio .portfolioContainer .scalableHostting_6 ,
#portfolio .portfolioContainer .seo_7 ,
#portfolio .portfolioContainer .marketing_8 ,
#portfolio .portfolioContainer .socialNetwork_9 {
    height: auto;
}

#portfolio .portfolioContainer .applicationDevelopment_1 ,
#portfolio .portfolioContainer .web_design_2 ,
#portfolio .portfolioContainer .services_3 ,
#portfolio .portfolioContainer .graphic_design_4 ,
#portfolio .portfolioContainer .development_5 ,
#portfolio .portfolioContainer .scalableHostting_6 ,
#portfolio .portfolioContainer .seo_7 ,
#portfolio .portfolioContainer .marketing_8 ,
#portfolio .portfolioContainer .socialNetwork_9 {
    flex-direction: column;
    top:0;
    left:0;
}

#portfolio .portfolioContainer .applicationDevelopment_1 .text, #portfolio .portfolioContainer .web_design_2 .text, #portfolio .portfolioContainer .services_3 .text, #portfolio .portfolioContainer .graphic_design_4 .text, #portfolio .portfolioContainer .development_5 .text, #portfolio .portfolioContainer .scalableHostting_6 .text, #portfolio .portfolioContainer .seo_7 .text, #portfolio .portfolioContainer .marketing_8 .text, #portfolio .portfolioContainer .socialNetwork_9 .text{
        width: 100vw;
    
}

#portfolio .portfolioContainer .applicationDevelopment_1 .image, #portfolio .portfolioContainer .web_design_2 .image, #portfolio .portfolioContainer .services_3 .image, #portfolio .portfolioContainer .graphic_design_4 .image, #portfolio .portfolioContainer .development_5 .image, #portfolio .portfolioContainer .scalableHostting_6 .image, #portfolio .portfolioContainer .seo_7 .image, #portfolio .portfolioContainer .marketing_8 .image, #portfolio .portfolioContainer .socialNetwork_9 .image 
{
        width: 100vw;
        background-size: cover;
        
}
#portfolio .portfolioContainer .web_design_2 .text, #portfolio .portfolioContainer .graphic_design_4 .text, 
 #portfolio .portfolioContainer .scalableHostting_6 .text, 
  #portfolio .portfolioContainer .marketing_8 .text{
      order: 4;
}
}
</style>
