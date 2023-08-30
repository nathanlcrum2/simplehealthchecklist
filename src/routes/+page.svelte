<script>
	import Checklist from "../lib/Checklist.svelte";
</script>

<svelte:head>
   <title>Simple Health Checklist</title>
   <meta name="description" content="Simple Health Checklist" />
</svelte:head>
	

<div class="flex flex-col items-center justify-items-center pt-48">
	<h1 class="text-8xl text-pri text-center">Simple Health Checklist</h1>
	<p class="mt-4 mx-4 text-xl text-pri text-center">A simple checklist of items to help track your progress as you commit to being healthier.</p>
	<button class="mt-12 rounded bg-pri hover:bg-pri/80 text-black text-decoration-underline m-4 p-2 text-xl"><a href="/philosophy">Read Our Philosophy</a></button>
</div>

<Checklist/>
