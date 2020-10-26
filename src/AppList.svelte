<script>
  import AppListItem from "./AppListItem.svelte";
  import { getElements } from "./API";
  import { elements } from "./storeList.js";
  import { onMount } from "svelte";

  onMount(async () => {
    getElements();
  });

  function checkIfDataExists(elements) {
    if (elements.hasOwnProperty("data") && elements.data.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  //$: console.log($elements)
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 5vh;
    font-size: 3vh;
  }

  p {
    color: #b1b1b1;
  }
</style>

{#await $elements}
  <p>...loading</p>
{:then elements}
  {#if checkIfDataExists(elements)}
    <ul>
      {#each elements.data as item (item._id)}
        <AppListItem name={item.name} id={item._id} done={item.done} />
      {/each}
    </ul>
  {:else}
    <p>
      Seems that You don't have any pending tasks. Use form to add new ones. :)
    </p>
  {/if}
{/await}
