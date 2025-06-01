<script>
  export let data;

  async function deleteSeller(id) {
    const confirmed = confirm("Willst du diesen Verkäufer wirklich löschen?");
    if (!confirmed) return;

    const res = await fetch(`/sellers/delete/${id}`, {
      method: 'POST'
    });

    if (res.ok) {
      location.reload();
    } else {
      alert("Fehler beim Löschen");
    }
  }
</script>

<h1>Verkäufer</h1>
<a href="/cars" class="back-button">← Zurück zu Fahrzeugen</a>

<ul class="seller-list">
  {#each data.users as user}
    <li class="seller-item">
      <div>
        <strong>{user.name}</strong>{user.location ? ` – ${user.location}` : ''}
      </div>
      <button class="delete-button" on:click={() => deleteSeller(user._id)}>Löschen</button>
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

  .seller-item {
    margin-bottom: 0.75rem;
    padding: 0.5rem 0.75rem;
    background: #f8f8f8;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .delete-button {
    background-color: #e53e3e;
    color: white;
    border: none;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .delete-button:hover {
    background-color: #c53030;
  }
</style>
