<script>
  let title = "";
  let brand = "";
  let model = "";
  let year = "";
  let price = "";
  let image = null;
  let imagePreview = "";
  let sellerName = "";
  let sellerLocation = "";

  function handleFileChange(e) {
    image = e.target.files[0];
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        imagePreview = reader.result;
      };
      reader.readAsDataURL(image);
    }
  }

  async function handleSubmit() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("sellerName", sellerName);
    formData.append("sellerLocation", sellerLocation);

    const res = await fetch("/cars/create", {
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

<h1>Fahrzeug hinzufügen</h1>
<a href="/cars" class="btn-primary back-link">← Zurück zur Übersicht</a>

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
      Bild hochladen:
      <input type="file" accept="image/*" on:change={handleFileChange} required />
    </label>

    {#if imagePreview}
      <img src={imagePreview} alt="Vorschau" class="preview-image" />
    {/if}

    <button type="submit">Fahrzeug speichern</button>
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
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: start;
    margin-top: 1rem;
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

  .preview-image {
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    max-height: 200px;
    object-fit: cover;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
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
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #005bb5;
  }

  .seller-box {
    background: #f7f7f7;
    padding: 1.2rem;
    border-radius: 0.75rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  .seller-box h2 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 1rem;
    background-color: #0070f3;
    color: white;
    padding: 0.6rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: bold;
  }

  .back-link:hover {
    background-color: #005bb5;
  }
</style>
