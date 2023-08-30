<script>
	import "../app.css"
	import Footer from "../lib/Footer.svelte";
</script>
<div class="flex flex-col">
	<div class="b1 min-h-screen min-w-full">
		<main>
			<slot/>
		</main>
		
	</div>
	<Footer/>
</div>

<style>
	.b1 {
		margin: 0;
		padding: 0;
		position: relative;
		background-image: url('greenwaterplant.jpg');
		background-size: cover;
	}
</style>