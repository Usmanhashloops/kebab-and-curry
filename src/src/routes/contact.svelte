<script>
  import { restaurantData } from "$lib/restaurantData";
  import Form from "$lib/widgets/Form.svelte";
  import IconSlot from "$lib/widgets/Icon-Slot.svelte";
  import MapWidget from "$lib/widgets/Map-Widget.svelte";
  import FooterResturant from "$lib/Footer-Resturant.svelte";
</script>

<IconSlot paragraphs={["Feel free to reach out to us or visit one of our locations below!"]} isTop={true}>
  <span slot="above" class="above">
    <Form />
  </span>
</IconSlot>

{#each restaurantData as location}
  <MapWidget
    title={location.overlayData.column1TopText}
    address={location.overlayData.column1MiddleText}
    contact={location.overlayData.column1BottomText}
    email={location.overlayData.email}
    slug={"/locations/" + location.slug}
    mapAddress={location.mapAddress}
  />
{/each}
<FooterResturant />

<style lang="scss">
  @import "../styles/theme.scss";
  @import "../styles/breakpoints.scss";

  .above {
    width: 50%;

    @include for-size(tablet-portrait-down) {
      width: 90%;
    }
  }
</style>
