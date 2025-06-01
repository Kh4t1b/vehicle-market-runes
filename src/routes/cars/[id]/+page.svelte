<script>
  export let data;
  const car = data.car;

  async function deleteCar() {
    if (confirm("Willst du dieses Fahrzeug wirklich löschen?")) {
      const res = await fetch(`/cars/${car._id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        window.location.href = "/cars";
      } else {
        alert("Fehler beim Löschen.");
      }
    }
  }
</script>

<h1>{car.title}</h1>
<a href="/cars" class="back-button">← Zurück zur Übersicht</a>

<div class="car-detail">
  <img src="{car.imageUrl}" alt="Bild von {car.title}" class="car-image" />

  <ul>
    <li><strong>Marke:</strong> {car.brand}</li>
    <li><strong>Modell:</strong> {car.model}</li>
    <li><strong>Baujahr:</strong> {car.year}</li>
    <li><strong>Preis:</strong> {car.price} CHF</li>
    <li><strong>Beschreibung:</strong> {car.description}</li>
  </ul>

  <div class="action-buttons">
    <a href={`/cars/${car._id}/edit`} class="btn edit-btn">Fahrzeug bearbeiten</a>
    <button on:click={deleteCar} class="btn delete-btn">Fahrzeug löschen</button>
  </div>
</div>

<style>
  h1 {
    margin-bottom: 1rem;
  }

  .back-button {
    display: inline-block;
    margin-bottom: 1.5rem;
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

  .car-detail {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .car-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 6px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: #333;
  }

  .action-buttons {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }

  .btn {
    padding: 0.6rem 1rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
  }

  .edit-btn {
    background-color: #ffc107;
    color: black;
    border: none;
  }

  .edit-btn:hover {
    background-color: #e0a800;
  }

  .delete-btn {
    background-color: #dc3545;
    color: white;
    border: none;
  }

  .delete-btn:hover {
    background-color: #b02a37;
  }
</style>
