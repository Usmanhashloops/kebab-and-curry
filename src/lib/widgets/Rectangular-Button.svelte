<script>
  export let buttonText;
  export let buttonUrl;
  export let customClass;
  export let customClass1;
</script>

<a href={buttonUrl} class="hero-cta {customClass} {customClass1}">{buttonText}</a>

<style lang="scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";

  .hero-cta {
    width: 185px;
    height: 39px;
    color: #ba9c56;
    border: 1.7px solid #ba9d56;
    border-radius: 50px;
    font-weight: 400 !important;
    font-size: 18px;
    z-index: 3;
    display: block;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
  }
  .custom-class {
    margin-bottom: 24px;
    margin-top: -88px;
  }
  .custom-class-one {
    margin-top: 25px;
  }
</style>
