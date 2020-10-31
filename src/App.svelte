<script>
  import AppForm from "./AppForm.svelte";
  import AppList from "./AppList.svelte";
  import { checkConnection } from "./API";
  import { canConnect } from "./storeList.js";
  import { onMount } from "svelte";

  onMount(async () => {
    checkConnection();
  });

  //$: console.log($canConnect)
</script>

<style>
  :global(body) {
    background-color: #373b44;
    color:whitesmoke;
  }

  .app {
    text-align: center;
  }

  .app-header {
    border-bottom: 10px solid whitesmoke;
    margin: 5vh;
    margin-bottom: 10vh;
    padding-right: 10vh;
    height: calc(10px + 6vmin);
    text-align: right;
    font-size: calc(10px + 2vmin);
    color: whitesmoke;
  }

  .error {
    color: red;
    font-size: 3vh;
  }
</style>

<main class="app">
  <header class="app-header">
    <h1>ToDo Svelte</h1>
  </header>
  {#await $canConnect}
    <p>...loading</p>
  {:then}
    <AppForm />
    <AppList />
  {:catch}
    <p class="error">Error when trying to connect to DB. :(</p>
  {/await}
</main>
