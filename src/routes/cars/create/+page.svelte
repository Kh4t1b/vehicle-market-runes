<h1>Fahrzeug hinzufügen</h1>

<form method="POST">
  <label>
    Titel:
    <input name="title" required />
  </label>
  <br />
  <label>
    Marke:
    <input name="brand" required />
  </label>
  <br />
  <label>
    Modell:
    <input name="model" required />
  </label>
  <br />
  <label>
    Baujahr:
    <input type="number" name="year" required />
  </label>
  <br />
  <label>
    Preis:
    <input type="number" name="price" required />
  </label>
  <br />
  <button type="submit">Speichern</button>
</form>
