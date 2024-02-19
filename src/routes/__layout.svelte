<script>
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import { navbarArray, iconList } from "$lib/data.js";
  import FooterSmall from "$lib/Footer-Small.svelte";
  import FooterResturant from "$lib/Footer-Resturant.svelte";

  let currentPathname = "";
  if (typeof window !== "undefined") {
    currentPathname = window.location.pathname;
  }
  console.log("currentPathname", currentPathname);
</script>

<Navbar />
<!-- <FullBannerCenterText /> -->
<main>
  <slot />
</main>

<!-- <Footer
  linkList1={navbarArray}
  linkList2={navbarArray}
  footerLogoUrl="/logo.png"
  footerLogoAlt={""}
  contactList={iconList}
  footerDescription="Kabab and Curry (Est. 1999) is one of the leading restaurants for Pakistani and Indian halal cuisine in the Bay Area, with restaurants serving Santa Clara and Cupertino."
  CustomerName="Kebab and Curry"
/> -->
<!-- {#if currentPathname === "/locations/SantaClara" || currentPathname === "/locations/Cupertino" || currentPathname === "/locations/MCA"} -->
<!-- <FooterResturant /> -->

<!-- {:else}
  <FooterSmall />
{/if} -->
<style type="text/scss">
  @import "../styles/theme.scss";
  @import "../styles/breakpoints.scss";
</style>
