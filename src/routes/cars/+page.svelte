<script>
  export let data;
</script>

<h1>Fahrzeuge</h1>

{#each data.allCars as car}
  <div class="card">
    <h2>{car.title}</h2>
    <p>{car.brand} {car.model} ({car.year})</p>
    <p>{car.price} CHF</p>
  </div>
{/each}


<style>
	.card {
		border: 1px solid #ccc;
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}
</style>
