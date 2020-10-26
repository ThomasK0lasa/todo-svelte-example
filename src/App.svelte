<script>
  import AppForm from "./AppForm.svelte";
  import AppList from "./AppList.svelte";
</script>

<style>
  :global(body) {
    background-color: #373b44;
    color: #282c34;
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
</style>

<main class="app">
  <header class="app-header">
    <h1>ToDo Svelte</h1>
  </header>
  <AppForm />
  <AppList />
</main>
