<script>
 export let heading = "";
 export let paragraph = "";
 export let slug;
 console.log("slug", slug);
</script>

{#if slug === "SantaClara"}
 <div class="containerExperience">
  <div class="ExperienceTitle-center">Experience Like No Other</div>
  <div class="experience-imageCenter">
   <div class="width-TextPart">
    <div>
     <div class="textPart-text">The Kabab & Curry’s Santa Clara branch has been consistently rated as a community favorite for its culinary creativity & cozy atmosphere.</div>
     <div class="textPart-text">Our delicious & aromatic food is complemented by a fine dining environment that puts your pleasure at the center.</div>
     <div class="textPart-text">We invite you to join us for a unique dining experience that you won’t find anywhere else.</div>
    </div>
   </div>
   <div>
    <img src="/location/Layerexperience.png" class="Experience-container-image" />
   </div>
  </div>
 </div>
{:else if slug === "Cupertino"}
 <div class="containerExperience">
  <div class="ExperienceTitle-center">A Fine Dining Experience</div>
  <div class="experience-imageCenter">
   <div class="width-TextPart">
    <div>
     <div class="textPart-text">
      Kabab & Curry’s has always wanted to improve on its offerings & introduce more people to the wonders of South Asian cuisine. To that end, we chose to expand our operations to Cupertino, which is a hub for a number of great communities.
     </div>
     <div class="textPart-text">
      Our aim is to continue providing that amazing great taste and those wonderful meals that Kabab & Curry’s is known for, while improving on our dining experience to really grow as a business.
     </div>
     <div class="textPart-text">
      The Cupertino restaurant is a milestone achievement for the Kabab & Curry’s family, and we aim to make it another successful location in our portfolio of offerings.
     </div>
    </div>
   </div>
   <div>
    <img src="/location/Layerexperience.png" class="Experience-container-image" />
   </div>
  </div>
 </div>
{:else if slug === "MCA"}
 <!-- <div class="containerMCA">
    <h2 class="headingMCA">{heading}</h2>
    <p class="paragraphMCA">{paragraph}</p>
  </div> -->
 <div class="containerExperience">
  <div class="ExperienceTitle-center">Experience Like No Other</div>
  <div class="experience-imageCenter">
   <div class="width-TextPart">
    <div>
     <div class="textPart-text">The Kabab & Curry’s Santa Clara branch has been consistently rated as a community favorite for its culinary creativity & cozy atmosphere.</div>
     <div class="textPart-text">Our delicious & aromatic food is complemented by a fine dining environment that puts your pleasure at the center.</div>
     <div class="textPart-text">We invite you to join us for a unique dining experience that you won’t find anywhere else.</div>
    </div>
   </div>
   <div>
    <img src="/location/Layerexperience.png" class="Experience-container-image" />
   </div>
  </div>
 </div>
{:else}
 <div class="containerExperience">
  <div class="ExperienceTitle-center">A Fine Dining Experience</div>
  <div class="experience-imageCenter">
   <div class="width-TextPart">
    <div>
     <div class="textPart-text">Kabab & Curry’s has always wanted to improve on its offerings & introduce more people to the wonders of South Asian cuisine.</div>
     <div class="textPart-text">
      Our aim is to continue providing that amazing great taste and those wonderful meals that Kabab & Curry’s is known for, while improving on our dining experience to really grow as a business.
     </div>
     <div class="textPart-text">We invite you to join us for a unique dining experience that you won’t find anywhere else.</div>
    </div>
   </div>
   <div>
    <img src="/location/Layerexperience.png" class="Experience-container-image" />
   </div>
  </div>
 </div>
{/if}

<style lang="scss">
 @import "../../styles/theme.scss";
 @import "../../styles/breakpoints.scss";
 .containerExperience {
  height: 560px;
  padding-left: 60px;
  padding-right: 60px;
  @include for-size(phone-only) {
   min-height: 730px;
   padding-left: 30px;
   padding-right: 30px;
  }
  @include for-size(tablet-portrait-down) {
   min-height: 710px;
   padding-left: 30px;
   padding-right: 30px;
  }
  @include for-size(tablet-portrait-up) {
   min-height: 750px;
  }
  @include for-size(desktop-up) {
   min-height: 560px;
   padding-left: 60px;
   padding-right: 60px;
  }
  @media only screen and (min-width: 1900px) and (max-width: 2560px) {
   height: 600px;
  }
 }
 .ExperienceTitle-center {
  font-size: 55px !important;
  margin-top: 30px;
  font-weight: 400;
  color: #ba9c56;
  font-family: "Parisienne" !important;
  text-align: center;
  @include for-size(phone-only) {
   font-size: 40px !important;
  }
  @include for-size(tablet-portrait-down) {
   font-size: 47px !important;
  }
 }
 .experience-imageCenter {
  margin-top: 30px;
  display: flex;
  @include for-size(phone-only) {
   display: block;
  }
  @include for-size(tablet-portrait-down) {
   display: block;
  }
  @include for-size(tablet-portrait-up) {
   display: block;
  }
  @include for-size(desktop-up) {
   display: flex;
  }
 }
 .width-TextPart {
  width: 50%;
  margin-top: 100px;
  @include for-size(phone-only) {
   width: 100%;
   margin-top: 30px;
   margin-bottom: 30px;
  }
  @include for-size(tablet-portrait-down) {
   width: 100%;
   margin-top: 30px;
   margin-bottom: 30px;
  }
  @include for-size(tablet-portrait-up) {
   width: 100%;
   margin-top: 30px;
   margin-bottom: 30px;
  }
  @include for-size(desktop-up) {
   width: 54% !important;
   display: flex;
   justify-content: center;
   align-items: center;
  }
  @media only screen and (min-width: 1900px) and (max-width: 2560px) {
   width: 57% !important;
  }
 }
 .textPart-text {
  font-size: 20px;
  line-height: 30px;
  color: #ba9d56;
  font-weight: 400;
  font-family: "Open Sans";
  margin-bottom: 14px;
  width: 90%;
  @include for-size(phone-only) {
   text-align: center;
   line-height: 28px;
   width: 100%;
  }
  @include for-size(tablet-portrait-down) {
   width: 100%;
   text-align: center;
  }
  @include for-size(tablet-portrait-up) {
   width: 90%;
   text-align: center;
  }
  @include for-size(desktop-up) {
   width: 80%;
   float: right;
   text-align: left;
   margin-right: 60px;
  }
  @media only screen and (min-width: 1900px) and (max-width: 2560px) {
   width: 67%;
   text-align: left;
   float: right;
  }
 }
 .Experience-container-image {
  height: 410px;
  width: 550px;
  @include for-size(phone-only) {
   height: 100%;
   width: 100%;
  }
  @include for-size(tablet-portrait-down) {
   width: 100%;
   height: 100%;
   width: 100%;
  }
  @include for-size(tablet-portrait-up) {
   width: 100%;
  }
  @include for-size(desktop-up) {
   height: 410px;
   width: 550px;
  }
  @media only screen and (min-width: 1800px) and (max-width: 2560px) {
   height: 450px;
   width: 500px;
  }
 }
 .container {
  width: 100vw;
  height: 40vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/location/mini-banner.jpg");
  background-size: contain;
  background-position-x: 140px;

  @include for-size(tablet-portrait-down) {
   background-size: cover;
   background-position-x: -500px;
  }

  @include for-size(phone-only) {
   height: 70vh;
   background-size: auto;
   background-position-x: -700px;
   background-position-y: -350px;
  }
 }

 .heading {
  color: $gold;
  font-size: 40px;
  margin-bottom: 50px;
  @include for-size(phone-only) {
   font-size: 38px;
  }
 }

 .paragraph {
  color: $gold;
  width: 50%;
  text-align: center;

  @include for-size(tablet-portrait-down) {
   width: 90%;
  }
 }
 .containerMCA {
  width: 100vw;
  height: 40vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/location/mini-banner.jpg");
  background-size: contain;
  background-position-x: 140px;

  @include for-size(tablet-portrait-down) {
   background-size: cover;
   background-position-x: -500px;
  }

  @include for-size(phone-only) {
   background-size: auto;
   background-position-x: -700px;
   background-position-y: -350px;
  }
 }

 .headingMCA {
  color: $gold;
  font-size: 40px;
  margin-bottom: 50px;
 }

 .paragraphMCA {
  color: $gold;
  width: 50%;
  text-align: center;

  @include for-size(tablet-portrait-down) {
   width: 90%;
  }
 }
</style>
