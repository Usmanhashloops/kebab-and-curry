<script>
  import { navbarArray } from "$lib/data.js";
  const logoUrl = "/KnCLogo.png";
  // const logoSmallUrl = "/logo.png";
  const logoAlt = "Kebab and Curry";
  let tooltipText = "Coming Soon";
  let isActive = false;
  function navToggle(e) {
    if (e.target.innerText === "CUPERTINO" || e.target.innerText === "MCA" || e.target.innerText === "SANTA CLARA" || e.target.innerText === "KETLEE") {
      isActive = false;
    } else if (e.target.innerText !== "LOCATIONS" && e.target.innerText !== "MENU") {
      isActive = !isActive;
    }

    // if() {=
    //     isActive = !isActive

    // }
    console.log(e.target.innerText);
  }
</script>

<div class="container">
  <div class="gold-banner">
    <!-- <a class="gold-banner-link" href="tel:408-247-0745">408-247-0745</a> -->
    <!-- ·  -->

    <!-- <a class="gold-banner-link" href="mailto:info@kebabandcurrys.com">info@kebabandcurrys.com</a> -->
    <!-- this represents the navbar thats loc ,menu ,contact,catering and a burger menuicon -->
  </div>
  <nav>
    <div class="nav-container">
      <div class="logo-container">
        <a href="/">
          <img class="logo" src={logoUrl} alt={logoAlt} />
          <!-- <img class="logo-small" src={logoSmallUrl} alt={logoAlt} /> -->
        </a>
      </div>
      <ul class="nav-links {isActive ? 'nav-active' : ''}">
        <!--  looping over array items  -->
        <!-- title={navItem.label === "Order Now" ? tooltipText : ""} -->
        {#each navbarArray as navItem, index}
          <li
            class={`
            ${navItem.label === "Locations" ? "dropdown" : navItem.label === "Menu" ? "dropdown-menu" : ""}
            ${index === navbarArray.length - 1 ? "last-item" : null}
          `}
            style="animation: navlinkFade 1.5s ease forwards {index / 7 + 2.8}s"
            on:click={navToggle}
          >
            <a href={navItem.url} class={navItem.label === "Locations" ? "dropbtn" : navItem.label === "Menu" ? "dropbtn-menu" : ""} title={navItem.label === "Order Now" ? "" : ""}>{navItem.label}</a>
            <div class="dropdown-content">
              <a href="/locations/SantaClara" on:click={navToggle}>Santa Clara</a>

              <a href="/locations/Cupertino" on:click={navToggle}>Cupertino</a>
              <!-- <a title={tooltipText}>MCA</a> -->
              <a href="/locations/MCA" on:click={navToggle}>MCA</a>
              <a href="https://www.kettleecafe.com/" on:click={navToggle}>Kettle'e</a>
            </div>
            <div class="dropdown-content-menu">
              <a href="/menu/SantaClara" on:click={navToggle}>Santa Clara</a>
              <!-- <a href="/menu/Cupertino" on:click={navToggle}>Cupertino</a> -->
              <!-- <a title={tooltipText}>MCA</a> -->
              <!-- <a href="/menu/MCA" on:click={navToggle}>MCA</a> -->
              <a href="https://www.kettleecafe.com/menu/Kettlee" on:click={navToggle}>Kettle'e</a>
            </div>
          </li>
        {/each}
      </ul>
      <div class="burger" on:click={navToggle}>
        <div class="" />
        <div class="" />
        <div class="" />
      </div>
    </div>
  </nav>
</div>

<style type="text/scss">
  @import "../styles/theme.scss";
  @import "../styles/breakpoints.scss";
  /* .dropdown {
    position: relative;
    display: inline-block;
  } */
  .dropdown-content-menu {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 999;
    @include for-size(tablet-landscape-down) {
      margin-left: 45%;
    }
    /* margin-left: 45%; */
  }

  .dropdown-content-menu a {
    color: #252827 !important;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content-menu a:hover {
    background-color: #ddd;
  }
  .dropdown-menu:hover .dropdown-content-menu {
    display: block;
  }

  .container {
    position: fixed;
    z-index: 101;
    width: 100vw;
    top: 0px;
  }

  @media screen and (max-width: 1430px) {
    .logo {
      display: none;
    }
    /* .logo-small {
      display: block;
    } */
  }

  @media screen and (min-width: 1431px) {
    .logo {
      display: block;
    }
    /* .logo-small {
      display: none;
    } */
  }

  .logo {
    height: 80px;
    object-fit: none;
    // @include for-size(phone-only) {
    //     display: none;
    // }
    // @include for-size(tablet-portrait-up) {
    //     display: block;
    // }
    @include for-size(tablet-portrait-up) {
      display: block;
      margin-left: -40px;
    }
    @include for-size(desktop-up) {
      display: block;
      margin-left: -40px;
    }
    @include for-size(phone-only) {
      display: block;
      margin-left: -10px;
      height: 50px;
    }
  }

  .logo-small {
    /* height: 80px; */
    /* width: 80px; */
    //  @include for-size(phone-only) {
    //         display: block;
    //     }
    //     @include for-size(tablet-portrait-up) {
    //         display: none;
    //     }
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    @include for-size(tablet-portrait-up) {
      width: 100%;
      margin-top: 0px;
    }
    @include for-size(phone-only) {
      margin-top: 6px;
      margin-bottom: 4px;
    }
    @include for-size(desktop-up) {
      margin-top: -3px;
      margin-bottom: -7px;
      // height: 80px;
    }
  }
  // main nav
  nav {
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 8vh;
    background-color: $black;
    width: 100%;
    flex-wrap: wrap;
    padding: 1px 20px;
    // border-bottom: 1px solid #555;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    @include for-size(phone-only) {
      min-height: 12vh;
    }
    @include for-size(tablet-portrait-up) {
      min-height: 10vh;
    }
    @include for-size(desktop-up) {
      min-height: 8vh;
    }
  }

  .nav-links {
    display: flex;
    width: 30%;
    justify-content: space-evenly;
    align-items: center;

    @include for-size(phone-only) {
      /* height: 90vh; */
      /* display: block; */

      /* top: 30vh; */
    }

    @include for-size(tablet-landscape-down) {
      padding-top: 40px;
      position: absolute;
      right: 0;
      height: 85vh;
      /// increasing the min-height fixed the toggle nav issues
      /* top: 27vh; */
      top: 84px;
      background-color: #000000;
      flex-direction: column;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
      // background-color: $primary;
      width: 100%;
      padding-left: 0;
      display: initial;
      text-align: center;
      display: flex;
    }

    // NAV FOR PHONE //
    @include for-size(phone-only) {
      top: 12vh;
      height: 89vh;
      padding-top: 40px;
    }

    @include for-size(tablet-landscape-up) {
      /* height: 150px; */
      /* top: 138px; */
      // width: 90%;
      // margin-right: 20px;
    }
    @include for-size(desktop-up) {
      width: 85%;
    }
    @include for-size(mid-desktop-up) {
      top: 8vh;
      width: 60%;
      padding-right: 20px;
      /* top: 27vh; */
    }
  }

  .nav-links a {
    color: $gold;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 17px;
    text-transform: uppercase;

    @include for-size(tablet-landscape-down) {
      color: $gold;
    }
    @include for-size(phone-only) {
      font-size: 12px;
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
  .last-item a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 164px;
    height: 43px;
    border-radius: 22px;
    background-color: #ba9c56;
    // background-color: #ba9c56;
    color: black !important;
    font-weight: 600;
    cursor: pointer;
    @include for-size(desktop-up) {
      margin-right: 10px;
    }
  }
  /* .last-item a {
    @media (min-width: 320px) {
      margin-left: 80px;
    }
    @media (min-width: 375px) {
      margin-left: 110px;
    }
    @media (min-width: 425px) {
      margin-left: 130px;
    }
  } */
  .burger {
    cursor: pointer;
    margin-right: 50px;

    @include for-size(phone-only) {
      width: 25px;
      margin-right: 40px !important;
      font-size: 10px !important;
    }

    @include for-size(tablet-landscape-down) {
      width: 25px;
      margin-right: 60px;
      // margin-right: 200px;
      display: block;
    }
    @include for-size(desktop-up) {
      width: 100%;
      display: none;
    }
  }
  .burger div {
    width: 25px;
    height: 2px;
    margin: 5px;
    background-color: #fff;

    @include for-size(phone-only) {
      display: block;
      height: 1px;
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
  }

  .nav-active {
    transform: translateX(-1px);
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
    min-width: 170px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 999;

    @include for-size(tablet-portrait-down) {
      // display: block;
    }
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

  .dropdown:hover .dropbtn {
  }

  .gold-banner {
    height: 10px;
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

  /**

@include for-size(small-phone-only) {

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
    
    **/
</style>
