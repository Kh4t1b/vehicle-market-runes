<script>
  // kein spezielles Script nötig
</script>

<section class="hero">
  <div class="hero-box">
    <h1>Willkommen beim Fahrzeugmarkt</h1>
    <p>Inseriere oder finde dein Traumfahrzeug.</p>
    <div class="buttons">
      <a href="/cars" class="btn-primary">Jetzt Fahrzeuge entdecken</a>
      <a href="/cars/create" class="btn-secondary">Auto inserieren</a>
    </div>
  </div>
</section>

<style>
  .hero {
    height: 100vh;
    background-image: url('/autom.jpg'); /* ✅ Bild muss im /static Ordner liegen */
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-box {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    max-width: 90%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
  }

  .btn-primary {
    background-color: #0070f3;
    color: white;
  }

  .btn-primary:hover {
    background-color: #005bb5;
  }

  .btn-secondary {
    background-color: white;
    color: #333;
    border: 2px solid #ccc;
  }

  .btn-secondary:hover {
    background-color: #f2f2f2;
  }

  @media (min-width: 640px) {
    .buttons {
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
