<script>
  export let data;

  let title = data.car.title;
  let brand = data.car.brand;
  let model = data.car.model;
  let year = data.car.year;
  let price = data.car.price;
  let image;
  let sellerName = data.car.sellerName;
  let sellerLocation = data.car.sellerLocation;

  async function handleSubmit() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("price", price);
    formData.append("sellerName", sellerName);
    formData.append("sellerLocation", sellerLocation);

    if (image) {
      formData.append("image", image);
    }

    const res = await fetch(`/cars/${data.car._id}/edit`, {
      method: "POST",
      body: formData
    });

    if (res.ok) {
      window.location.href = "/cars";
    } else {
      alert("Fehler beim Speichern.");
    }
  }
</script>

<h1>Fahrzeug bearbeiten</h1>
<a href="/cars" class="back-button">← Zurück zur Übersicht</a>

<div class="grid-container">
  <form on:submit|preventDefault={handleSubmit} class="form">
    <label>
      Titel:
      <input bind:value={title} required />
    </label>
    <label>
      Marke:
      <input bind:value={brand} required />
    </label>
    <label>
      Modell:
      <input bind:value={model} required />
    </label>
    <label>
      Baujahr:
      <input type="number" bind:value={year} required />
    </label>
    <label>
      Preis (CHF):
      <input type="number" step="0.01" bind:value={price} required />
    </label>
    <label>
      Bild ersetzen:
      <input type="file" accept="image/*" on:change={(e) => image = e.target.files[0]} />
    </label>
    <button type="submit">Änderungen speichern</button>
  </form>

  <div class="seller-box">
    <h2>Anbieterangaben</h2>
    <label>
      Name des Anbieters:
      <input bind:value={sellerName} required />
    </label>
    <label>
      Standort:
      <input bind:value={sellerLocation} required />
    </label>
  </div>
</div>

<style>
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

  .grid-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: start;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  button {
    margin-top: 1rem;
    padding: 0.8rem 1.2rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
  }

  .seller-box {
    background: #f7f7f7;
    padding: 1.2rem;
    border-radius: 0.75rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  .seller-box h2 {
    margin-bottom: 1rem;
  }
</style>
