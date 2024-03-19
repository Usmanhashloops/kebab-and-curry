<script>
 export let h1 = "Bakery. Breakfast. Lunch. Perfection.";
 export let p = "Reinvented Pakistani and Indian flavors in a beautiful ambiance.";
 export let ctaText = "Order Now";
 export let ctaUrl = "#";
 export let hasCTA = false;
 // export let backgroundImageUrl = "/hero-banner.jpg";
 export let slug;
 export let scrollToMenu = () => {};

 export let backgroundImageUrl = "/img/hero-banner.jpg ";
</script>

{#if slug === "SantaClara"}
 <div class="hero-1-container" style="background-image: url('/location/homepageimage.png');">
  <div class="menu-img-border">
   <div class="text-container">
    <h1 class="hero-heading">{h1}</h1>
   </div>
   {#if hasCTA}
    <a href={ctaUrl} class="hero-cta">{ctaText}</a>
   {/if}
  </div>
  <div class="arrowDropIcon">
   <a on:click={scrollToMenu} class="contact-link">
    <img src={"/location/Arrowdown.png"} class="Arrow4xIcon" />
   </a>
  </div>
 </div>
{:else if slug === "Cupertino"}
 <div class="hero-1-container" style="background-image: url('/location/homepageimage.png');">
  <div class="menu-img-border">
   <div class="text-container">
    <h1 class="hero-heading">{h1}</h1>
   </div>
   {#if hasCTA}
    <a href={ctaUrl} class="hero-cta">{ctaText}</a>
   {/if}
  </div>
 </div>
{:else if slug === "MCA"}
 <div class="hero-1-container" style="background-image: url('/location/homepageimage.png');">
  <div class="menu-img-border">
   <div class="text-container">
    <h1 class="hero-heading">{h1}</h1>
   </div>
   {#if hasCTA}
    <a href={ctaUrl} class="hero-cta">{ctaText}</a>
   {/if}
  </div>
  <div class="arrowDropIcon">
   <a on:click={scrollToMenu} class="contact-link">
    <img src={"/location/Arrowdown.png"} class="Arrow4xIcon" />
   </a>
  </div>
 </div>
{:else}
 <div class="hero-1-container" style="background-image: url('/location/homepageimage.png');">
  <div class="menu-img-border">
   <div class="text-container">
    <h1 class="hero-heading">{h1}</h1>
   </div>
   {#if hasCTA}
    <a href={ctaUrl} class="hero-cta">{ctaText}</a>
   {/if}
  </div>
  <div class="arrowDropIcon">
   <a on:click={scrollToMenu} class="contact-link">
    <img src={"/location/Arrowdown.png"} class="Arrow4xIcon" />
   </a>
  </div>
 </div>
{/if}

<style lang="scss">
 @import "../../styles/theme.scss";
 @import "../../styles/breakpoints.scss";

 .hero-1-container {
  height: 500px;
  width: 100%;
  background-size: cover;
  display: flex;
  filter: brightness(90%);
  justify-content: center;
  @media only screen and (min-width: 1900px) and (max-width: 2569px) {
   height: 600px;
  }
 }

 @keyframes movePage {
  0% {
   transform: translateY(0);
  }
  50% {
   transform: translateY(10px);
  }
  100% {
   transform: translateY(0);
  }
 }
 .arrowDropIcon {
  animation: movePage 2s infinite;
  position: absolute;
  top: 464px;
  cursor: pointer;
  color: #fff;
  @include for-size(phone-only) {
   display: none;
  }
  @include for-size(large-mobile-up) {
   display: none;
  }
  @include for-size(tablet-portrait-up) {
  }
  @include for-size(desktop-up) {
   display: block;
   color: #fff;
  }
  @media only screen and (min-width: 1900px) and (max-width: 2569px) {
   top: 560px;
  }
 }
 .menu-img-border {
  height: 120px;
  width: 700px;
  border: 4px solid #ffffff;
  margin-top: 205px !important;

  @include for-size(phone-only) {
   display: none !important;
  }
  @include for-size(large-mobile-up) {
   display: none !important;
  }
  @include for-size(tablet-portrait-up) {
   width: 50%;
  }
  @include for-size(desktop-up) {
   display: block;
   height: 125px;
   width: 800px;
   border: 4px solid #ffffff !important;

   margin-top: 210px !important;
  }
  @media only screen and (min-width: 1900px) and (max-width: 2569px) {
   height: 175px;
   width: 980px;
   margin-top: 235px !important;
  }
 }
 .Arrow4xIcon {
  height: 20px;
  width: 33px;
  @media only screen and (min-width: 1900px) and (max-width: 2569px) {
   height: 30px;
   width: 47px;
  }
 }
 .text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @include for-size(phone-only) {
   width: 90%;
   margin-left: $body-left-margin;
   margin-right: $body-right-margin;
   align-items: center;
  }
 }

 .hero-heading {
  font-size: 102px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 500;
  font-family: "Ovo";
  @include for-size(phone-only) {
   font-size: 40px;
   width: 100%;
  }

  @include for-size(tablet-portrait-up) {
   font-size: 40px;
   max-width: 100%;
  }

  @include for-size(tablet-landscape-up) {
   font-size: 40px;
   max-width: 100%;
  }

  @include for-size(desktop-up) {
   font-size: 55px;
   letter-spacing: 5px;
   text-transform: uppercase;
   color: #ffffff;
   font-weight: 500;
   font-family: "Ovo";
  }

  @include for-size(big-desktop-up) {
   max-width: 100%;
   font-size: 62px;
   letter-spacing: 5px;
   text-transform: uppercase;
   color: #ffffff;
   font-weight: 500;
   font-family: "Ovo";
  }
 }

 .hero-para {
  color: #fff;
  text-align: center;
  @include for-size(phone-only) {
   font-size: 24px;
   width: 100%;
  }
 }

 .hero-cta {
  width: 250px;
  height: 60px;
  background-color: $primary;
  color: $white !important;
  border-radius: 5px;
  font-size: 24px;
  z-index: 3;
  display: block;
  text-align: center;
 }

 @include for-size(small-phone-only) {
  .hero-heading {
  }
 }

 @include for-size(large-mobile-up) {
 }

 @include for-size(tablet-portrait-up) {
 }

 @include for-size(tablet-landscape-up) {
 }

 @include for-size(desktop-up) {
 }

 @include for-size(big-desktop-up) {
 }

 .hero-1-containerMCA {
  height: 100vh;
  width: 100%;
  background-image: url("/img/hero-banner.jpg");
  background-size: cover;
  display: flex;
  align-items: flex-end;
  filter: brightness(90%);
  justify-content: flex-start;
  // position: relative;
 }

 .text-containerMCA {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  // margin-left: $body-left-margin;

  @include for-size(phone-only) {
   width: 90%;
   margin-left: $body-left-margin;
   margin-right: $body-right-margin;
   align-items: center;
  }
 }

 .hero-headingMCA {
  color: $gold;
  max-width: 80%;
  text-align: left;
  font-weight: 300;

  @include for-size(phone-only) {
   font-size: 40px;
   width: 100%;
  }

  @include for-size(tablet-portrait-up) {
   font-size: 40px;
   max-width: 77%;
  }

  @include for-size(tablet-landscape-up) {
   font-size: 40px;
   max-width: 77%;
  }

  @include for-size(desktop-up) {
   font-size: 50px;
   max-width: 67%;
  }

  @include for-size(big-desktop-up) {
   max-width: 60%;
   font-size: 50px;
  }
 }

 .hero-para {
  color: #fff;
  text-align: center;
  @include for-size(phone-only) {
   font-size: 24px;
   width: 100%;
  }
 }

 .hero-cta-MCA {
  width: 250px;
  height: 60px;
  background-color: $primary;
  color: $white !important;
  border-radius: 5px;
  font-size: 24px;
  z-index: 3;
  display: block;
  /* margin: 0 auto; */
  line-height: 60px;
  text-align: center;
 }

 @include for-size(small-phone-only) {
  .hero-heading {
  }
 }

 @include for-size(large-mobile-up) {
 }

 @include for-size(tablet-portrait-up) {
 }

 @include for-size(tablet-landscape-up) {
 }

 @include for-size(desktop-up) {
 }

 @include for-size(big-desktop-up) {
 }
</style>
