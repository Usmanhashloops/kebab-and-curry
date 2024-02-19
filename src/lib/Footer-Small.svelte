<script>
  import { footerImages } from "$lib/data";
</script>

<div class="container">
  <div class="gold-banner">
    <div class="left marginIcon">
      {#each footerImages as icon}
        <a href={icon.url}><img src={icon.imageUrl} alt="" class="social-icon" /></a>
      {/each}
    </div>
    <div class="right marginContactText">
      <a href="/contact" class="contact-link">CONTACT US</a>
    </div>
  </div>
  <div class="black-banner">
    <div class="left">
      <a href="https://nuage-digital.com"><p class="gold">Powered by Nuage Digital</p></a>
    </div>
    <div class="right">
      <p class="gold">Copyright KebabAndCurry 2022</p>
    </div>
  </div>
</div>

<style type="text/scss">
  @import "../styles/theme.scss";
  @import "../styles/breakpoints.scss";

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: -40px;
  }

  .gold-banner {
    background-color: $gold;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    height: 50px;
  }
  .marginContactText {
    padding-top: 3px;
  }
  .marginIcon {
    padding-top: 5px;
  }
  .black-banner {
    background-color: #000;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    height: 50px;

    @include for-size(tablet-portrait-down) {
      height: fit-content;
      flex-direction: column;
    }
  }

  .social-icon {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }

  .contact-link {
    color: #fff;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  .gold {
    color: $gold;
    font-size: 16px;
  }
</style>
