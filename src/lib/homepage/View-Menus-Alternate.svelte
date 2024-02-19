<script>
  import RectangularButton from "$lib/widgets/Rectangular-Button.svelte";
  import facebookIcon from "../../../static/facebookIcon.png";
  import instagramIcon from "../../../static/instagramIcon.png";
  import yelpIcon from "../../../static/yelpIcon.png";
  export let menus = [
    {
      label: "SANTA CLARA",
      url: "/locations/SantaClara",
      address: "1498 Isabella St, Santa Clara, CA 95050",
      phone: "(408) 247-0745",
    },
    {
      label: "CUPERTINO",
      url: "/locations/Cupertino",
      address: "20007 Stevens Creek Blvd, Cupertino, CA 95014",
      phone: "(408) 247-0745",
    },
    {
      label: "MCA",
      url: "/locations/MCA",
      address: "3003 Scott Blvd, Santa Clara, CA 95054",
      phone: "(408) 247-0745",
    },
    {
      label: "KETTLE'E",
      url: "/locations/Ketlee",
      address: "1610 E El Camino Real, Santa Clara, CA 95050",
      phone: "(408) 216-0890",
    },
  ];

  const header = "Visit Our Branches";

  function navigateToYelp() {
    if (typeof window !== "undefined") {
      window.location.href = "https://www.yelp.com/biz/kabab-and-currys-santa-clara";
    }
  }
  function navigateTofacebook() {
    if (typeof window !== "undefined") {
      window.location.href = "https://www.facebook.com/Kc1999santaclara/";
    }
  }
  function navigateToInstagram() {
    if (typeof window !== "undefined") {
      window.location.href = "https://www.instagram.com/kababandcurrys/";
    }
  }
</script>

<!-- <div class="view-menu-container">
  <h2 class="header">{header}</h2>

  <div class="menus">
    {#each menus as menu, index}
      <div class="menu">
        <h4 class="label">{menu.label}</h4>
        <p class="address">{menu.address}</p>
        <a class="phone" style="text-decoration:none" href={`tel:${menu.phone}`}>{menu.phone}</a>
      </div>
      {#if index != 3}
        <hr class="separator" />
      {/if}
    {/each}
  </div>

  <div class="icon-center">
    <img src={facebookIcon} alt="" class="social-icon" on:click={navigateTofacebook} />
    <img src={instagramIcon} alt="" class="social-icon" on:click={navigateToInstagram} />
    <img src={yelpIcon} alt="" class="social-icon" on:click={navigateToYelp} />
  </div>
</div> -->
<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .view-menu-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    background-color: $cream;
    padding: 55px 0;
  }
  .social-icon {
    height: 25px;
    width: 25px;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 32px;
    margin-bottom: -30px;
    cursor: pointer;
  }
  .icon-center {
    display: flex;
    justify-content: center;
  }
  .header {
    text-align: center;
    margin-bottom: 34px;
    font-size: 55px !important;
    margin-top: -4px;
    font-weight: 400;
    color: #ba9c56;
    font-family: "Parisienne" !important;
  }

  .menus {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    @include for-size(tablet-landscape-down) {
    }
    @include for-size(phone-only) {
      // margin-left: %;
      margin-bottom: 25px;
      display: flex;
      width: 100%;
    }
  }

  .menu:nth-child(n + 1) {
    @include for-size(phone-only) {
      margin-left: 13%;
      margin-bottom: 25px;
      display: flex;
      justify-content: center;
    }

    @media (min-width: 375px) and (max-width: 424px) {
      margin-left: 11%;
    }
    @media (min-width: 425px) and (max-width: 600px) {
      margin-left: 11%;
    }
    @media (min-width: 768px) and (max-width: 992px) {
      // flex: 0 1 81%;
    }
  }

  .separator {
    position: relative;
    align-self: flex-start;
    height: 120px;
    width: 0.5px;
    background-color: #cacaca;
    opacity: 0.5;

    @include for-size(tablet-landscape-down) {
      display: none;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    flex: 0 1 23%;
    // justify-content: space-between;
    // height: 165px;
    align-items: center;

    @include for-size(tablet-portrait-down) {
      // flex: 0 1 45%;
    }
    @include for-size(phone-only) {
      margin-bottom: 10px;
      flex: 0 1 77%;
    }
  }
  .phone {
    color: $gold;
    margin-top: 16px;
    text-align: center;

    font-size: 16px;
    font-weight: 500;
  }
  .address {
    color: $gold;
    margin-top: -25px;
    text-align: center;
    line-height: 25px !important;
    font-size: 14px;
    font-weight: 400;
    @include for-size(phone-only) {
      margin-top: -44px;
    }
    @include for-size(tablet-portrait-down) {
      font-size: 13px;
    }
  }
  .label:nth-child(2) {
    margin-top: 20px;
  }
  .label {
    font-weight: 600;
    font-size: 22px;
    min-height: 71px;

    color: $gold;
    margin-top: -20px;
    text-align: center;

    @include for-size(tablet-portrait-down) {
      min-height: 91px;
    }
    @include for-size(phone-only) {
      font-size: 20px;
      margin-top: 5px;
    }
  }
</style>
