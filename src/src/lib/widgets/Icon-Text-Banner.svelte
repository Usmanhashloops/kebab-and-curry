<script>
 export let heading = "";
 export let slug;
 export let paragraphs = [];
</script>

{#if slug === "SantaClara"}
 {#if heading === "Catering"}
  <div id="catering" />
 {/if}
 <div class="container">
  <h2 class="heading">
   {heading}
  </h2>

  <div class="img-container" />
  {#each paragraphs as paragraph}
   <p class="paragraph">
    {paragraph}
   </p>
  {/each}
  <slot />
  <div id="menu" />
 </div>
{:else if slug === "Cupertino"}
 {#if heading === "Catering"}
  <div id="catering" />
 {/if}
 <div class="container">
  <h2 class="heading">
   {heading}
  </h2>
  
  <div class="img-container" />
  {#each paragraphs as paragraph}
   <p class="paragraph">
    {paragraph}
   </p>
  {/each}

  <slot />
  <div id="menu" />
 </div>
{:else if slug === "MCA"}
 {#if heading === "Catering"}
  <div id="catering" />
 {/if}
 <div class="container">
  <h2 class="heading">
   {heading}
  </h2>

  <div class="img-container" />
  {#each paragraphs as paragraph}
   <p class="paragraph">
    {paragraph}
   </p>
  {/each}
  <slot />
  <div id="menu" />
 </div>
{:else}
 <div class="container">
  <h2 class="heading">
   {heading}
  </h2>

  <div class="img-container" />
  {#each paragraphs as paragraph}
   <p class="paragraph">
    {paragraph}
   </p>
  {/each}
  <slot />
  <div id="menu" />
 </div>
{/if}

<!-- {#if slug === "Cupertino" }
  {#if heading === "Catering"}
    <div id="catering" />
  {/if}
  <div class="container">
    <h2 class="heading">
      {heading}
    </h2>

    <div class="img-container" />
    {#each paragraphs as paragraph}
      <p class="paragraph">
        {paragraph}
      </p>
    {/each}
    <slot />
    <div id="menu" />
  </div>
{/if}
{#if slug === "MCA"}
  {#if heading === "Catering"}
    <div id="catering" />
  {/if}
  <div class="containerMCA">
    <h2 class="headingMCA">
      {heading}
    </h2>

    <div class="img-containerMCA">
      <img src="/KnC-Swish.svg" alt="" />
    </div>
    {#each paragraphs as paragraph}
      <p class="paragraphMCA">
        {paragraph}
      </p>
    {/each}
    <slot />
  </div>
{/if} -->
<style lang="scss">
 @import "../../styles/theme.scss";
 @import "../../styles/breakpoints.scss";

 .container {
  background-image: url("/location/Floral.png");
  width: 100vw;
  height: fit-content;
  background-color: $cream;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 35px;
  padding-top: 8px;
 }

 .img-container {
  width: 20%;
  margin: 0 auto;

  @include for-size(tablet-portrait-down) {
   width: 60%;
  }
 }

 .heading,
 .paragraph,
 .heading1 {
  color: $gold;
 }
 .heading1 {
  font-family: "Parisienne" !important;
  font-size: 150px;
 }

 .heading {
  font-size: 50px;
  margin-top: 57px;
  font-weight: 400;
  margin-bottom: 30px;
  font-family: "Parisienne" !important;
 }

 .paragraph {
  margin-bottom: 25px;
  width: 65%;
  font-family: "Open Sans" !important;
  line-height: 1.9 !important;

  @include for-size(tablet-portrait-down) {
   width: 75%;
  }
 }

 img {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 40px;
 }
 .containerMCA {
  width: 100vw;
  height: fit-content;
  background-color: $cream;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }

 .img-containerMCA {
  width: 20%;
  margin: 0 auto;

  @include for-size(tablet-portrait-down) {
   width: 60%;
  }
 }

 .headingMCA,
 .paragraphMCA {
  color: $gold;
  text-align: center;
 }

 .headingMCA {
  font-size: 40px;
  margin-top: 50px;
  font-weight: 400;
 }

 .paragraphMCA {
  margin-bottom: 50px;
  width: 45%;

  @include for-size(tablet-portrait-down) {
   width: 75%;
  }
 }

 img {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 40px;
 }
</style>
