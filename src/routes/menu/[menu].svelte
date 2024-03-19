<script context="module">
  import { restaurantData } from "$lib/restaurantData.js";
  import FooterResturant from "$lib/Footer-Resturant.svelte";
  const MyImage = "/imageMy.png";
  const floralBackground = "/floralback.png";
  export async function load({ params }) {
    console.log("params", params);
    let slug = params.menu;
    let data = restaurantData.find((e) => e.slug === slug);
    return { props: { data } };
  }
  let currentPathname = "";
  if (typeof window !== "undefined") {
    currentPathname = window.location.pathname;
  }
</script>

<script>
  import Menu from "$lib/widgets/Menu.svelte";
  import { onMount } from "svelte";
  export let data;
  // console.log("data", data);
  export let slug;
  let active = "";
  onMount(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active = entry.target.id;
      });
    }, options);
    data.menu.forEach((menu) => {
      const target = document.getElementById(menu.category);
      observer.observe(target);
    });
  });
  let isActive = false;
  function navToggle(e) {
    isActive = !isActive;
  }
  function scrollToSection(item) {
    active = item;
    const section = document.getElementById(item);
    const yOffset = -10;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y - 157, behavior: "smooth" });
  }
  console.log("slug", slug);
</script>

<div class="menu-container">
  <div class="container">
    <div>
      <nav style="position: fixed; top: 71px;" class="nav_container">
        <div class="nav-container">
          <ul style="overflow-y: auto;" class="nav-links nav-links-new {isActive ? 'nav-active' : ''}">
            {#each data.menu as menu, index}
              <li style="animation: navlinkFade 1.5s ease forwards {index / 7 + 2.8}s" on:click={navToggle}>
                <a class="{active === menu.category ? 'active' : ''} {index === 0 ? 'first' : ''} {index === data.menu.length - 1 ? 'last' : ''}" on:click={() => scrollToSection(menu.category)}>
                  {menu.category}
                </a>
              </li>
            {/each}
          </ul>
          <div>
            <button class="floating-button" on:click={navToggle} type="button">menu </button>
          </div>
        </div>
      </nav>
    </div>
    <!-- <h2 class="heading">From Our Menu</h2> -->
    {#if data?.slug === "SantaClara"}
      <h2 class="heading">From Our Menu</h2>
      <div class="flex-icon-Dine">
        <img src={"/location/cutlery.png"} class="cutleryImage" />
        <div class="DineInHeading">Dine In</div>
        <img src={"/location/deliveryCourier.png"} class="deliveryCourierImage" />
        <div class="DineInHeading">To Go</div>
      </div>
    {:else if data?.slug === "Cupertino"}
      <h2 class="heading">From Our Menu</h2>
      <div class="flex-icon-Dine">
        <img src={"/location/cutlery.png"} class="cutleryImage" />
        <div class="DineInHeading">Dine In</div>
        <img src={"/location/deliveryCourier.png"} class="deliveryCourierImage" />
        <div class="DineInHeading">To Go</div>
      </div>
    {:else if data?.slug === "MCA"}
      <h2 class="headingMCA">From Our Menu</h2>
    {/if}
    {#each data.menu as menu}
      <div class="img-container" id={menu.category}>
        <div class="menu-img-border" />
        <img class="menu-image-main" src={menu.src} alt="Not found" style="width: 100%; height: 245px;object-fit:cover" />
        <div class="centered">{menu.category}</div>
      </div>
      <div class="menu-items-background">
        <Menu {data} itemList={menu.items} />
      </div>
    {/each}
    <FooterResturant />
  </div>
</div>

<style type="text/scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";
  .img-container {
    position: relative;
  }
  .flex-icon-Dine {
    display: flex;
    justify-content: center;
    margin-bottom: 21px;
  }
  .DineInHeading {
    font-size: 15px;
    // line-height: 41px;
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
  .menu-imageMy-border {
    position: absolute;

    height: 220px !important;
    width: 92%;
    border: 4px solid #f5f5f5;
    left: 10%;
    top: 8%;
    left: 57px;
    @include for-size(phone-only) {
      display: none;
    }
    @include for-size(tablet-portrait-up) {
      display: none;
    }
    @include for-size(desktop-up) {
      display: block;
    }
  }
  .menu-img-border {
    position: absolute;

    height: 198px !important;
    width: 92%;
    border: 4px solid #f5f5f5;
    left: 10%;
    top: 8%;
    left: 57px;
    @include for-size(phone-only) {
      display: none;
    }
    @include for-size(tablet-portrait-up) {
      display: none;
    }
    @include for-size(desktop-up) {
      display: block;
    }
  }
  .menu-items-background {
    background-color: rgba(255, 255, 245, 0.5); /* a light yellow color with 50% opacity */
    background-image: url("/floralback.png");
    background-size: contain;
    @include for-size(phone-only) {
      background-size: inherit;
    }
    @include for-size(tablet-portrait-up) {
      background-size: contain;
    }
  }

  .floating-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ba9d56; /* use your preferred color */
    color: black; /* use a contrasting color */
    border: none;
    border-radius: 30px;
    padding: 14px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); /* add shadow for depth */
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all 0.2s ease-in-out; /* add transition for hover effects */
    /* font-family: "Open Sans", sans-serif; */
    @include for-size(phone-only) {
      font-size: 14px;
      padding: 10px;
    }
    @include for-size(tablet-portrait-up) {
      font-size: 15px;
      padding: 12px;
    }
  }

  .floating-button:hover {
    transform: scale(1.1);
    background-color: #b48c27; /* change color on hover */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* increase shadow size */
  }
  .heading {
    font-size: 60px;
    font-weight: 400;
    color: $gold;
    /* font-size: 60px !important; */
    line-height: 75px;
    color: #ba9d56;
    /* font-weight: 400; */
    font-family: "Parisienne";
    text-align: center;
    margin-bottom: -2px;
    @include for-size(phone-only) {
      /* display: none; */
      /* font-size: 30px !important; */
      font-size: 40px;
      margin-top: 120px;
      // margin-bottom: 10px;
      /* padding-top: 10px; */
    }
    @include for-size(tablet-portrait-up) {
      margin-top: 120px;
      font-size: 50px;
      // margin-bottom: 10px;
    }
    @include for-size(desktop-up) {
      margin-top: 164px;
      // margin-bottom: 5px;
    }
  }
  .headingMCA {
    font-size: 60px;
    font-weight: 400;
    color: $gold;
    /* font-size: 60px !important; */
    line-height: 75px;
    color: #ba9d56;
    /* font-weight: 400; */
    font-family: "Parisienne";
    text-align: center;
    margin-bottom: 17px;
    @include for-size(phone-only) {
      /* display: none; */
      /* font-size: 30px !important; */
      font-size: 40px;
      margin-top: 120px;
      // margin-bottom: 10px;
      /* padding-top: 10px; */
    }
    @include for-size(tablet-portrait-up) {
      margin-top: 120px;
      font-size: 50px;
      // margin-bottom: 10px;
    }
    @include for-size(desktop-up) {
      margin-top: 167px;
      // margin-bottom: 5px;
    }
  }
  .active {
    font-weight: 700 !important;
    // text-decoration: underline !important;
    border-bottom: 2px solid #ba9d56 !important;
  }
  .img-container {
    position: relative;
    text-align: center;
    width: 100%;
  }
  #overlayImage {
    position: fixed; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer;
  }
  .img-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    mix-blend-mode: multiply;
    opacity: 0.2 !important;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    font-weight: 400;
    color: #fff !important;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .container {
    position: relative;
    text-align: center;
    width: 100%;
    /* height: 300px; */
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    /* height: 300px; */
    @include for-size(tablet-portrait-up) {
      width: 100%;
    }
  }

  /// this is the black backgroun under the mainNav
  nav {
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 10vh;
    // old 8px minheight
    background-color: $black;
    width: 100%;
    flex-wrap: wrap;
    /* padding: 5px 30px; */
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    margin-top: 1px;
    @include for-size(phone-only) {
      min-height: 0vh;
    }
    @include for-size(tablet-portrait-up) {
      min-height: 0vh;
    }
    @include for-size(desktop-up) {
      padding-top: -65px !important;
    }
  }

  .nav-links {
    height: 35px;
    display: flex;
    width: 30%;
    justify-content: space-evenly;
    align-items: center;
    background: #2a2a2a;
    top: 60px !important;
    flex-wrap: wrap;

    @include for-size(phone-only) {
      /* top: 15vh; */
      top: 5vh !important;
      display: initial;
      .nav-links::-webkit-scrollbar {
        display: none;
      }
    }

    @include for-size(tablet-landscape-down) {
      background-color: black;
      position: absolute;
      /* right: px; */
      display: initial;
      height: 85vh;
      top: -10vh !important;
      flex-direction: column;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
      width: 100%;
      padding-left: 0;
      .nav-links::-webkit-scrollbar {
        display: none;
      }
      padding-top: 20px;
    }

    @include for-size(phone-only) {
      top: -11vh !important;
      height: 90vh;
      margin-top: initial;
      padding-top: 20px;
    }
    @include for-size(desktop-up) {
      width: 101%;
      margin-bottom: -50px;
      height: 50px !important;
      opacity: 0.8;
      margin-left: -44px !important;

      /* height: 20px !important; */
      /* top: 13vh; */
    }
  }

  .nav-links a {
    cursor: pointer;
    color: $gold;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 15px;
    text-transform: uppercase;
    margin-left: 13px;
    margin-right: 13px;

    @include for-size(tablet-landscape-down) {
      color: $gold;
    }
    @include for-size(phone-only) {
      font-size: 11px;
      margin-left: 13px;
      margin-right: 13px;
    }
  }

  .nav-links a:hover {
    text-decoration: none;
  }

  .nav-links li {
    list-style-type: none;
    @include for-size(tablet-landscape-down) {
      min-height: 15vh;
    }
  }
  .floating-button {
    cursor: pointer;
    display: block;

    /* position: absolute; */
    /* right: 35px; */
    /* bottom: 0; */

    @include for-size(phone-only) {
      /* width: -1px; */
      /* margin-right: 30px; */
      display: block;
    }

    @include for-size(tablet-landscape-down) {
      /* width: -1px; */
      /* margin-right: 30px; */
      display: block;
    }
    @include for-size(desktop-up) {
      width: 100%;
      display: none;
    }
  }
  .nav_container {
    @include for-size(phone-only) {
      background-color: none !important;
    }
    @include for-size(tablet-landscape-down) {
      background-color: none !important;
    }
  }
  /* .burger div {
    width: 30px;
    height: 30px;
    margin: 5px;
    background-color: #fff;

    @include for-size(phone-only) {
      display: block;
    }

    @include for-size(tablet-portrait-up) {
      display: block;
    }

    @include for-size(tablet-landscape-down) {
      display: block;
    }

    @include for-size(desktop-up) {
      display: none;
    }
  } */

  .nav-active {
    transform: translateX(-1px);
    top: 60px;
  }

  @keyframes navlinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }

  .dropdown-content a {
    color: $dark-grey;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .gold-banner {
    width: 100%;
    z-index: 101;
    background-color: $gold;
    color: black;
    font-weight: 300;
    display: flex;
    justify-content: center;
  }

  .gold-banner-link {
    text-decoration: none !important;
    font-weight: 300;
    font-size: 15px;
    color: #000;
  }
</style>
