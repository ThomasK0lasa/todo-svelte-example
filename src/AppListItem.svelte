<script>
  import { updateElement, removeElement } from "./API";

  export let name = "";
  export let id = "";
  export let done = "";
</script>

<style>
  li {
    background-color: teal;
    margin: 1vh;
    position: relative;
    padding: 1vh;
  }

  li:hover {
    cursor: pointer;
  }

  li button {
    position: absolute;
    right: 3px;
    top: 6px;
    background: transparent;
    border: none;
    font-size: 2vh;
    font-weight: 800;
    height: 10px;
    line-height: 10px;
    transition: all 0.2s ease-in-out;
  }

  li button:hover {
    cursor: pointer;
    color: yellowgreen;
  }
  @keyframes strike {
    0% {
      width: 0;
    }
    100% {
      width: 120%;
    }
  }
  .done .text {
    position: relative;
  }
  .done .text::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: -10%;
    width: 120%;
    height: 5px;
    background: white;
    opacity: 0.5;
    animation-name: strike;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    transform: skewX(-20deg);
  }
</style>

<li class:done={done === true} on:click={() => updateElement(id)}>
  <span class="text">{name}</span><button
    on:click={() => {removeElement(id); event.stopPropagation();}}>x</button>
</li>
