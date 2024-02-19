<script>
 export let heading = "From Our Menu";
 export let paragraph = "Monday - Thursday - 11:30 am to 10 pm";
 export let paragraph2 = "Friday - 11:30 am to 2:30 pm, 5:30 pm to 10:30 pm";
 export let paragraph3 = "Weekends - 12 pm to 2:30 pm, 5:30 pm to 10:30 pm";

 export let hasCTA = true;
 export let ctaText = "Order Now";
 export let ctaUrl = "";
 export let mt = false;
 export let slug;
</script>

{#if slug === "SantaClara"}
 <div class="menu">
  <div class="container">
   <h2 class="heading" style={mt ? "margin-top:240px" : ""}>
    {heading}
   </h2>
   <div class="flex-icon-Dine">
    <img src={"/location/cutlery.png"} class="cutleryImage" />
    <div class="DineInHeading">Dine In</div>
    <img src={"/location/deliveryCourier.png"} class="deliveryCourierImage" />
    <div class="DineInHeading">To Go</div>
   </div>
   <slot />
  </div>
 </div>
{:else if slug === "Cupertino"}
 <div class="menu">
  <div class="containerCupertino">
   <h2 class="headingCupertino" style={mt ? "margin-top:240px" : ""}>
    Reserve your table for South Asian delights today!
    <!-- {heading} -->
   </h2>
   <a class="borderbottom" href="https://guestcenter.opentable.com/restaurant/1347790/reservation-widget">
    <div class="btn-BookTable">
     Book Your Table Now
    </div>
  </a>
  <!-- <disable -->
   <!-- <div class="flex-icon-Dine">
    <img src={"/location/cutlery.png"} class="cutleryImage" />
    <div class="DineInHeading">Dine In</div>
    <img src={"/location/deliveryCourier.png"} class="deliveryCourierImage" />
    <div class="DineInHeading">To Go</div>
   </div> -->
   <slot />
  </div>
 </div>
{:else if slug === "MCA"}
 <div class="menu">
  <div class="container">
   <h2 class="heading" style={mt ? "margin-top:240px" : ""}>
    {heading}
   </h2>
   <div class="flex-icon-Dine">
    <img src={"/location/cutlery.png"} class="cutleryImage" />
    <div class="DineInHeading">Dine In</div>
    <img src={"/location/deliveryCourier.png"} class="deliveryCourierImage" />
    <div class="DineInHeading">To Go</div>
   </div>
   <slot />
  </div>
 </div>
{/if}
<!-- {#if slug === "Cupertino"}
  <div class="menu">
    <div class="container">
      <h2 class="heading" style={mt ? "margin-top:240px" : ""}>
        {heading}
      </h2>
      <div class="flex-icon-Dine">
        <img src={"/location/cutlery.png"} class="cutleryImage" />
        <div class="DineInHeading">Dine In</div>
        <img src={"/location/deliveryCourier.png"} class="deliveryCourierImage" />
        <div class="DineInHeading">To Go</div>
      </div>
      <slot />
    </div>
  </div>
{/if} -->

<!-- {#if slug === "MCA"}
  <div class="containerMCA">
    <h2 class="headingMCA">
      {heading}
    </h2>

    <p class="paragraphMCA">
      {paragraph}
    </p>
    <p class="paragraphMCA" style="margin-top: -30px;">
      {paragraph2}
    </p>
    <p class="paragraphMCA" style="margin-top: -30px;">
      {paragraph3}
    </p>
    <slot />
  </div>
{/if} -->
<style lang="scss">
 @import "../../styles/theme.scss";
 @import "../../styles/breakpoints.scss";
 .flex-icon-Dine {
  display: flex;
  justify-content: center;
  margin-bottom: 33px;
 }
 .borderbottom{
  border-bottom: none;
  text-decoration: none;
 }
 .DineInHeading {
  font-size: 15px;
  margin-left: 8px;
  margin-right: 33px;
  color: #000000;
  font-weight: 400;
  font-family: "Open Sans";
 }
 .deliveryCourierImage {
  height: 20px;
  width: 28px;
 }
 .cutleryImage {
  height: 20px;
  width: 20px;
 }
 .container {
  width: 100vw;
  height: fit-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .containerCupertino {
  width: 100vw;
  height: fit-content;
  background-color: #ba9c56;
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .heading {
  font-size: 55px !important;
  margin-top: 40px;
  margin-bottom: -2px;
  font-weight: 400;
  color: $gold;
  font-family: "Parisienne" !important;
  @include for-size(phone-only) {
   font-size: 39px !important;
  }
 }
 .headingCupertino {
  font-size: 52px !important;
  margin-top: 30px;
  // margin-bottom: -2px;
  font-weight: 400;
  color: white;
  font-family: "Parisienne" !important;
  @include for-size(phone-only) {
   font-size: 39px !important;
  }
 }
.btn-BookTable{
  height: 43px;
  width:275px;
  border-radius: 40px;
  font-size: 21px;
  margin-top: 5px;
  margin-bottom: 3px;
  font-weight: 600;
  background-color: white;
  cursor: pointer;
  color: #ba9c56;
  display: flex;
  font-family: "Open Sans" !important;
  justify-content: center;
  align-items: center;
  text-align: center;
}
 .paragraph {
  font-size: 20px;
  margin: 30px 0;
  font-weight: 400;
  color: $gold;

  @include for-size(phone-only) {
   text-align: center;
   width: 95%;
  }
 }
 .containerMCA {
  width: 100vw;
  height: fit-content;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
 }

 .headingMCA {
  font-size: 40px;
  margin-top: 50px;
  font-weight: 400;
  color: $gold;
 }

 .paragraphMCA {
  font-size: 20px;
  margin: 30px 0;
  font-weight: 400;
  color: $gold;

  @include for-size(phone-only) {
   text-align: center;
   width: 95%;
  }
 }
</style>
