<script>
  import { Router, Link } from "svelte-routing";

  export let title = "Dog Picker";
  $$props; // Done to ignore errors about unknown props being passed from single-spa

  function getLinkProps({ href, isCurrent, isPartiallyCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    return isActive ? { class: "active" } : {};
  }
</script>

<style>
  .wrapper {
    padding: 15px 0;
    background-color: #24252a;
  }

  .dog-nav {
    display: flex;
    justify-content: space-between;
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

<div class="wrapper">
  <div class="dog-nav">
    <div class="left">
      <strong class="brand">{title}</strong>
    </div>

    <div class="center">
      <Router>
        <nav>
          <Link to="/" getProps={getLinkProps}>Home</Link>
          <Link to="/rating" getProps={getLinkProps}>Rating</Link>
        </nav>
      </Router>
    </div>

    <div class="right">
      <!-- Add github icon and link here -->
    </div>
  </div>
</div>
