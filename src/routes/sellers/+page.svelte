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
      <div class="seller-actions">
        <a href={`/sellers/${user._id}/cars`} class="btn-view">Fahrzeuge anzeigen</a>
        <button class="delete-button" on:click={() => deleteSeller(user._id)}>Löschen</button>
      </div>
    </li>
  {/each}
</ul>

<style>
  h1 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  .back-button {
    display: inline-block;
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    background-color: #0070f3;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
  }

  .back-button:hover {
    background-color: #005bb5;
  }

  .seller-list {
    list-style: none;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
  }

  .seller-item {
    margin-bottom: 0.75rem;
    padding: 0.75rem 1rem;
    background: #f8f8f8;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }

  .seller-actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-view {
    background-color: #e2e8f0;
    color: #111;
    text-decoration: none;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-weight: bold;
    transition: background-color 0.2s ease;
    font-size: 0.9rem;
  }

  .btn-view:hover {
    background-color: #cbd5e1;
  }

  .delete-button {
    background-color: #e53e3e;
    color: white;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: bold;
    transition: background-color 0.2s ease;
  }

  .delete-button:hover {
    background-color: #c53030;
  }
</style>
