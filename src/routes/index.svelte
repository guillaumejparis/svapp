<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	img {
		width: 100%;
		max-width: 300px;
	}

	.image-logo {
		max-width: 100px;
	}

	.logos {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	p {
		margin: 0 auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Webapp</title>
</svelte:head>

<h1>Hello home!</h1>

<figure>
	<div class="logos">
		<a href="/domoticz">
			<img class="image-logo" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Domoticz.png">
		</a>
		<a href="/bw">
			<img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Bitwarden_Logo_Horizontal.png">
		</a>
		<a href="https://guillaumejparis.github.io/recipes">
			<img class="image-logo" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png">
		</a>
	</div>
</figure>
