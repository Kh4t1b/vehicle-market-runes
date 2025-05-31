<!-- src/routes/cars/+page.svelte -->
<script>
  export let data;
</script>

<div class="top-bar">
  <h1>Fahrzeuge</h1>
  <a href="/sellers" class="seller-button">Verkäufer anzeigen</a>
</div>

<a href="/" class="back-button">← Zurück zur Startseite</a>

<div class="car-list">
  {#each data.allCars as car}
    <div class="card">
      <img src="{car.imageUrl}" alt="Bild von {car.title}" class="car-image" />
      <h2><a href={`/cars/${car._id}`} class="car-link">{car.title}</a></h2>
      <p>{car.brand} {car.model} ({car.year})</p>
      <p>{car.price} CHF</p>
      <p class="seller">Inseriert von: {car.userName}</p>

    </div>
  {/each}
</div>

<style>


 .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .seller-button {
    padding: 0.4rem 0.8rem;
    background-color: #0070f3;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
  }

  .seller-button:hover {
    background-color: #005bb5;
  }
  .seller {
    font-size: 0.9rem;
    color: #555;
    margin-top: 0.5rem;
  }
  .car-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color: #fff;
  }

  .car-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .car-link {
    color: #0070f3;
    text-decoration: none;
  }

  .car-link:hover {
    text-decoration: underline;
  }

  .back-button {
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    background-color: #0070f3;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.2s ease;
  }

  .back-button:hover {
    background-color: #005bb5;
  }
</style>
