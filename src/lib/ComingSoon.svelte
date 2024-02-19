<script>
  import FooterResturant from "./Footer-Resturant.svelte";
  import { restaurantData } from "./restaurantData";
  import FullBannerCenterText from "./widgets/Full-Banner-Center-Text.svelte";
  import IconTextBanner from "./widgets/Icon-Text-Banner.svelte";
</script>

<FullBannerCenterText slug={"Cupertino"} h1={"Cupertino"} backgroundImageUrl={restaurantData[0].bannerBackgroundImageUrl} />
<div class="container">
  <h2 class="heading1">Coming Soon</h2>
</div>

<FooterResturant />

<style type="text/scss">
  @import "../styles/theme.scss";
  @import "../styles/breakpoints.scss";

  .container {
    width: 100% !important;
    height: 50vh !important;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("/location/Floral.png");
    background-color: $cream;
  }
  .bg-image {
    height: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .main-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;
  }
  h1 {
    font-weight: 300;
    color: white;
    font-size: 50px;
    z-index: 5;
    text-transform: uppercase;
    transition: font-weight 200ms ease-in-out;
  }
  h1:hover {
    color: $gold;
    cursor: pointer;
  }
  .heading1 {
    color: $gold;
    font-weight: 500;
    font-family: "Parisienne" !important;
    font-size: 150px;
  }
</style>
