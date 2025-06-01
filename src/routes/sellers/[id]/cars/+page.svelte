<script>
  export let data;
</script>

<h1>Fahrzeuge von {data.seller.name}</h1>
<a href="/sellers" class="back-button">← Zurück zu den Verkäufern</a>

{#if data.cars.length > 0}
  <div class="car-list">
    {#each data.cars as car}
      <div class="card">
        <img src={car.imageUrl} alt="Bild von {car.title}" class="car-image" />
        <h2>{car.title}</h2>
        <p><strong>{car.brand} {car.model}</strong></p>
        <p>Baujahr: {car.year}</p>
        <p>Preis: {car.price} CHF</p>
        <a href={`/cars/${car._id}`} class="btn-view">Details ansehen</a>
      </div>
    {/each}
  </div>
{:else}
  <p>Dieser Verkäufer hat noch keine Fahrzeuge inseriert.</p>
{/if}

<style>
  h1 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  .back-button {
    display: inline-block;
    margin-bottom: 2rem;
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

  .car-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  .car-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 0.5rem;
  }

  .btn-view {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.4rem 0.8rem;
    background-color: #0070f3;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
  }

  .btn-view:hover {
    background-color: #005bb5;
  }
</style>
