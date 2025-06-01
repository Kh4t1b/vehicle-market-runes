<!-- src/routes/cars/+page.svelte -->
<script>
  export let data;
</script>

<!-- 🔋 Hero direkt unter Navigation -->
<section class="e-auto-hero">
  <div class="e-auto-wrapper">
    <img src="/e-auto.jpg" alt="E-Auto entdecken" class="e-auto-img" />
    <div class="e-auto-text">Jetzt <strong>E-Autos</strong> entdecken</div>
  </div>
</section>

<!-- Titel + Buttonzeile -->
<div class="top-bar">
  <h1>Fahrzeuge</h1>
  <div class="button-row">
    <a href="/" class="back-button">← Zurück zur Startseite</a>
    <a href="/sellers" class="seller-button">Verkäufer anzeigen</a>
  </div>
</div>

<!-- 🚗 Fahrzeugliste -->
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
  .e-auto-hero {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  .e-auto-wrapper {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 180px;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .e-auto-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .e-auto-text {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  .button-row {
    display: flex;
    gap: 1rem;
  }

  .back-button,
  .seller-button {
    padding: 0.5rem 1rem;
    background-color: #0070f3;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.2s ease;
  }

  .back-button:hover,
  .seller-button:hover {
    background-color: #005bb5;
  }

  .car-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
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

  .seller {
    font-size: 0.9rem;
    color: #555;
    margin-top: 0.5rem;
  }
</style>
