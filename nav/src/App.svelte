<script>
  import { Router, Link } from "svelte-routing";

  export let title = "Dog Picker";
  $$props; // Done to ignore errors about unknown props being passed from single-spa

  function getLinkProps({ href, isCurrent, isPartiallyCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    return isActive ? { class: "active" } : {};
  }

  function setupGHButtons() {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "https://buttons.github.io/buttons.js");

    document.head.appendChild(script);
  }

  setupGHButtons();
</script>

<style>
  .wrapper {
    padding: 15px 0;
    background-color: #24252a;
  }

  .dog-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: whitesmoke;
    padding: 0 20px;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .dog-nav > div {
    flex: 1;
  }

  .left {
    text-align: left;
  }

  .center {
    text-align: center;
  }

  .right {
    text-align: right;
  }

  .brand {
    text-transform: uppercase;
  }

  .gh-link {
    padding-top: 5px;
  }

  :global(.brand a) {
    color: whitesmoke;
    text-decoration: none;
  }

  :global(nav a) {
    color: whitesmoke;
    text-decoration: none;
    padding: 0 10px;
  }

  :global(nav a:hover) {
    color: white;
    text-decoration: underline;
  }

  :global(.active) {
    color: lightblue;
  }

  :global(.active:hover) {
    color: lightblue;
  }
</style>

<Router>
  <div class="wrapper">
    <div class="dog-nav">
      <div class="left">
        <strong class="brand">
          <Link to="/">{title}</Link>
        </strong>
      </div>

      <div class="center">
        <nav>
          <Link to="/" getProps={getLinkProps}>History</Link>
          <Link to="/rating" getProps={getLinkProps}>Rate a Dog</Link>
        </nav>
      </div>

      <div class="right gh-link">
        <a
          class="github-button"
          href="https://github.com/flexicon/dog-picker-mf"
          data-show-count="true"
          aria-label="Star flexicon/dog-picker-mf on GitHub">
          Star
        </a>
      </div>
    </div>
  </div>
</Router>
