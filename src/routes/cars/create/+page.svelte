<script lang="ts">
  let fileInput: HTMLInputElement;
</script>

<h1>Fahrzeug hinzufügen</h1>

<form method="POST" enctype="multipart/form-data">
  <div>
    <label for="title">Titel:</label>
    <input type="text" name="title" id="title" required />
  </div>

  <div>
    <label for="brand">Marke:</label>
    <input type="text" name="brand" id="brand" required />
  </div>

  <div>
    <label for="model">Modell:</label>
    <input type="text" name="model" id="model" required />
  </div>

  <div>
    <label for="year">Baujahr:</label>
    <input type="number" name="year" id="year" required />
  </div>

  <div>
    <label for="price">Preis (CHF):</label>
    <input type="number" name="price" id="price" required />
  </div>

  <div>
    <label for="image">Bild hochladen:</label>
    <input type="file" name="image" id="image" accept="image/*" bind:this={fileInput} required />
  </div>

  <button type="submit">Fahrzeug speichern</button>
</form>
