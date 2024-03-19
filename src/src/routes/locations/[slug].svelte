<script context="module">
  import { restaurantData } from "$lib/restaurantData.js";
  import FullBannerCenterText from "$lib/widgets/Full-Banner-Center-Text.svelte";
  import SliderTabs from "$lib/Slider-Tabs.svelte";
  import SliderGallery from "$lib/Slider-Gallery.svelte";
  import { sliderTabs, galleryImages, awardImages } from "$lib/data";
  import PlainGallery from "$lib/widgets/Plain-Gallery.svelte";
  import CateringSection from "$lib/Catering-Section.svelte";
  import HomepageViewMenus from "$lib/homepage/Homepage-View-Menus.svelte";
  import RectangularButton from "$lib/widgets/Rectangular-Button.svelte";
  import ComingSoon from "$lib/ComingSoon.svelte";
  const MyImage = "/MyImage.png";
  import FooterResturant from "$lib/Footer-Resturant.svelte";
  const floralBackground = "/floralback.png";
  export async function load({ params }) {
    function isTitle(obj) {
      return obj.slug === params.slug;
    }
    let pageData = restaurantData.filter((slug) => {
      return isTitle(slug);
    });
    let pageObject = {};
    pageObject.pageData = pageData;
    let slug = params.slug;
    $: pageData = restaurantData.filter((pop) => {
      return {
        props: {
          pageData: isTitle(pop),
          slug: params.slug,
          title: pageData[0].title,
          data: pageData[0],
        },
      };
    });
    let categoryArray = [];
    let menuItems = [];
    return {
      props: {
        pageData: restaurantData.filter((slug) => {
          return isTitle(slug);
        }),

        slug: params.slug,

        data: restaurantData.filter((slug) => {
          return isTitle(slug);
        })[0],

        categoryArrayy: (data) => {
          data.menu.forEach((category) => {
            categoryArray.push({
              label: category.category,
            });
          });
          return categoryArray;
        },

        menuItems: (data) => {
          return data.menu[0].items;
        },

        title: restaurantData.filter((slug) => {
          return isTitle(slug);
        })[0].title,

        overlayData: restaurantData.filter((slug) => {
          return isTitle(slug);
        })[0].overlayData,

        id: restaurantData.filter((slug) => {
          return isTitle(slug);
        })[0].id,
      },
    };
  }
</script>

<script>
  import OverlaySection from "$lib/widgets/Overlay-Section.svelte";
  import SideImageSection from "$lib/widgets/Side-Image-Section.svelte";
  import Menu from "$lib/widgets/Menu.svelte";
  import Tabs from "$lib/widgets/Tabs.svelte";
  import { page } from "$app/stores";
  import IconTextBanner from "$lib/widgets/Icon-Text-Banner.svelte";
  import MenuContainer from "$lib/widgets/Menu-Container.svelte";
  import Form from "$lib/widgets/Form.svelte";
  import BannerImageBg from "$lib/widgets/Banner-Image-Bg.svelte";
  import ImageSlider from "$lib/widgets/Image-Slider.svelte";
  import ViewMenusAlternate from "$lib/homepage/View-Menus-Alternate.svelte";
  import { goto } from "$app/navigation";

  export let pageData;
  export let pageObject;
  export let slug;
  export let data;
  export let title;
  export let overlayData;
  export let categoryArrayy;
  export let id;
  export let menuItems;

  if (categoryArrayy != undefined) {
  }

  $: pageData[0] = pageData[0];

  let current_data;

  $: pageData = pageData;
  $: pageData2 = pageData;
  let categoryArray = [];
  let activeMenu = menuItems(data);
  data.menu.forEach((category) => {
    categoryArray.push({
      label: category.category,
    });
  });
  let activeItem = categoryArray[0];

  const tabChange = (e) => {
    activeItem = e.detail;
    activeMenu = data.menu.filter((obj) => {
      return isMenu(obj);
    })[0].items;
  };

  function isMenu(obj) {
    return obj.category === activeItem;
  }

  let activeGalleryItem = sliderTabs[0].label;

  const galleryTabChange = (e) => {
    activeGalleryItem = e.detail;
  };
  const scrollToMenu = () => {
    const div = document.getElementById("menu");
    div.scrollIntoView({ behavior: "smooth", inline: "start" });
  };
</script>

{#if slug === "SantaClara"}
  <FullBannerCenterText {scrollToMenu} {slug} h1={title} backgroundImageUrl={restaurantData[0].bannerBackgroundImageUrl} p={data.description} />
  <IconTextBanner
    {slug}
    heading="The Journey of Authentic South Asian food  "
    paragraphs={[
      "Kabab & Curry’s now comes to Cupertino in the heart of the California region, bringing that same authentic South Asian taste to even more people in the Bay Area.",
      "Our ambition is to bring the authentic flavors of South Asia from our memories to your tables, which is why our dishes are prepared using a variety of fresh ingredients, homemade spices, exquisite sauces & secret recipes.",
      "With delicious food and a well-rounded menu in a cozy setting, Kabab and Curry's Santa Clara has become a popular mainstay in the Bay Area.",
    ]}
  />
  <MenuContainer {slug} paragraph={overlayData.timingOne} paragraph2={overlayData.timingTwo} paragraph3={overlayData.timingThree}>
    <div class="container">
      <div class="menu-img-border" />
      <img src={MyImage} alt="Not found" style="width: 100%; height: 245px;object-fit:cover" />
      <div class="centered">Chicken</div>
    </div>
    <div class="menu-items-background">
      <Menu {slug} itemList={activeMenu} pageData={true} />
    </div>
    <RectangularButton customClass="custom-class" buttonText="View Menu" buttonUrl="/menu/{slug}" />
    <br />
  </MenuContainer>
  <ImageSlider heading="Award-Winning Dining Experience" paragraph="Our restaurants have consistently been rated, reviewed and awarded for our culinary creativity and cozy ambiance." />
  <BannerImageBg {slug} />
  <ViewMenusAlternate />
  <FooterResturant />
{:else if slug === "Cupertino"}
<FullBannerCenterText {scrollToMenu} {slug} h1={title} backgroundImageUrl={restaurantData[0].bannerBackgroundImageUrl} p={data.description} />
<MenuContainer {slug} paragraph={overlayData.timingOne} paragraph2={overlayData.timingTwo} paragraph3={overlayData.timingThree}>
  <div class="container">
    <!-- <div class="menu-img-border" />
    <img src={MyImage} alt="Not found" style="width: 100%; height: 245px;object-fit:cover" />
    <div class="centered">Chicken</div>
  </div>
  <div class="menu-items-background">
    <Menu {slug} itemList={activeMenu} pageData={true} />
  </div>
  <RectangularButton customClass="custom-class" buttonText="View Menu" buttonUrl="/menu/{slug}" /> -->
  <br />
</MenuContainer>
<IconTextBanner
  {slug}
  heading="South Asian Cuisine for Everyone"
  paragraphs={[
    "Kabab & Curry’s now comes to Cupertino in the heart of the California region, bringing that same authentic South Asian taste to even more people in the Bay Area.",
    "Continuing on our mission to provide an excellent South Asian dining experience, we bring our signature taste to a wider, more diverse audience. Our Cupertino branch is another feather in our cap with all the traditional hallmarks of the Kabab & Curry’s brand.",
    "If you haven’t already, we welcome you to join us at Kabab & Curry’s Cupertino for an amazing time with some of the best foods on the planet, our guarantee.",
  ]}
/>
<!-- <MenuContainer {slug} paragraph={overlayData.timingOne} paragraph2={overlayData.timingTwo} paragraph3={overlayData.timingThree}>
  <div class="container">
    <div class="menu-img-border" />
    <img src={MyImage} alt="Not found" style="width: 100%; height: 245px;object-fit:cover" />
    <div class="centered">Chicken</div>
  </div>
  <div class="menu-items-background">
    <Menu {slug} itemList={activeMenu} pageData={true} />
  </div>
  <RectangularButton customClass="custom-class" buttonText="View Menu" buttonUrl="/menu/{slug}" />
  <br />
</MenuContainer> -->
<ImageSlider heading="Award-Winning Dining Experience" paragraph="Our restaurants have consistently been rated, reviewed and awarded for our culinary creativity and cozy ambiance." />
<BannerImageBg {slug} />
<ViewMenusAlternate />
<FooterResturant />
  <!-- <ComingSoon /> -->
{:else if slug === "MCA"}
  <FullBannerCenterText {scrollToMenu} {slug} h1={title} backgroundImageUrl={restaurantData[0].bannerBackgroundImageUrl} p={data.description} />
  <IconTextBanner
    {slug}
    heading="Serving Our Community "
    paragraphs={[
      "Kabab & Curry’s was built on the idea of enriching people’s lives, and our local community plays a vital role in our ambitions. We consider ourselves part of a bigger cause.",
      "Hence, we have partnered with the Muslim Community Association to bring the wonderful people of California a personalized taste of our signature South Asian cuisine.",
      "The MCA Branch of Kabab & Curry’s offers a special set of offerings to the local community that aims to give them a taste of South Asia that is familiar and comforting. For us, there’s no greater pleasure than bringing the taste of home to your table.",
    ]}
  />
  <!-- <MenuContainer {slug} paragraph={overlayData.timingOne} paragraph2={overlayData.timingTwo} paragraph3={overlayData.timingThree}> -->
  <!-- <div class="container">
   <div class="menu-img-border" />
   <img src={MyImage} alt="Not found" style="width: 100%; height: 245px;object-fit:cover" />
   <div class="centered">Chicken</div>
  </div>
  <div class="menu-items-background">
   <Menu {slug} itemList={activeMenu} pageData={true} />
  </div>
  <RectangularButton customClass="custom-class" buttonText="View Menu" buttonUrl="/menu/{slug}" />
  <br /> -->
  <!-- </MenuContainer> -->
  <ImageSlider heading="Award-Winning Dining Experience" paragraph="Our restaurants have consistently been rated, reviewed and awarded for our culinary creativity and cozy ambiance." />
  <BannerImageBg {slug} />
  <ViewMenusAlternate />
  <FooterResturant />
  <!-- <FullBannerCenterText h1={title} {slug} backgroundImageUrl={restaurantData[0].bannerBackgroundImageUrl} p={data.description} />
 <IconTextBanner
  {slug}
  heading="A culinary journey"
  paragraphs={[
   "Kabab and Curry's Santa Clara Restaurant, our very first location, began our collective culinary journeys to explore the delightful tastes of the east.",
   "With delicious food and a well-rounded menu in a cozy setting, Kabab and Curry's Santa Clara has become a popular mainstay in the Bay Area.",
  ]}
 />
 <MenuContainer {slug} paragraph={overlayData.timingOne} paragraph2={overlayData.timingTwo} paragraph3={overlayData.timingThree}>
  <Tabs {slug} itemArray={categoryArray} {activeItem} on:tabChange={tabChange} />
  <Menu {slug} itemList={activeMenu} />
 </MenuContainer>
 <IconTextBanner
  {slug}
  heading="Catering"
  paragraphs={[
   "Our restaurants are a popular choice for catering in the Bay Area.",
   "With our delicious South Asian cuisine, our menus satisfy the needs of many of our regular patrons at their events and gatherings.",
  ]}
 >
  <Form {slug} emailMessage="This user filled out a catering form on Kabab and Curry" />
 </IconTextBanner>
 <BannerImageBg {slug} heading="Award-Winning Dining Experience" paragraph="Our restaurants have consistently been rated, reviewed and awarded for our culinary creativity and cozy ambiance." />
 <FooterResturant /> -->
{:else}
  <div />
{/if}

<style type="text/scss">
  @import "../../styles/theme.scss";
  @import "../../styles/breakpoints.scss";
  .menu-view-btn {
    margin-bottom: 30px !important;
  }
  .menu-items-background {
    background-color: rgba(255, 255, 245, 0.5);
    background-image: url("/floralback.png");
    background-size: contain;
    @include for-size(phone-only) {
      background-size: auto;
    }
    @include for-size(tablet-portrait-up) {
      background-size: contain;
    }
  }
  .container {
    position: relative;
  }
  .menu-img-border {
    position: absolute;
    height: 198px;
    width: 90.5%;
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

  .award-header {
    text-align: center;
    background-color: $dark-grey-light;
    color: $white;
    padding: 30px 0;
  }
  .container {
    position: relative;
    text-align: center;
    width: 100%;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 400;
    text-transform: uppercase;
    color: #fff !important;
    font-family: "Ovo" !important;
  }
</style>
