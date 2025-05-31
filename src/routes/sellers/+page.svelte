<script>
  export let data;
</script>

<h1>Verkäufer</h1>
<a href="/cars" class="back-button">← Zurück zu Fahrzeugen</a>

<ul class="seller-list">
  {#each data.users as user}
    <li>
      <strong>{user.name}</strong> – {user.location}
    </li>
  {/each}
</ul>

<style>
  h1 {
    margin-bottom: 1rem;
  }

  .seller-list {
    list-style: none;
    padding: 0;
  }

  .seller-list li {
    margin-bottom: 0.75rem;
    padding: 0.5rem 0.75rem;
    background: #f8f8f8;
    border-radius: 6px;
  }

  .back-button {
    display: inline-block;
    margin-bottom: 1rem;
    padding: 0.4rem 0.8rem;
    background-color: #0070f3;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
  }

  .back-button:hover {
    background-color: #005bb5;
  }
</style>
