<script>
  import { page } from '$app/stores';
  $: isHome = $page.url.pathname === '/';
</script>

{#if !isHome}
  <header class="navbar">
    <h1 class="title">DeinAuto24</h1>
    <nav>
      <a href="/cars">Fahrzeuge</a>
      <a href="/sellers">Verkäufer</a>
      <a href="/cars/create">Inserieren</a>
    </nav>
  </header>
{/if}

<slot />

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #000;
    color: white;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  nav a {
    margin-left: 1.5rem;
    text-decoration: none;
    color: white;
  }

  nav a:hover {
    text-decoration: underline;
  }
</style>
