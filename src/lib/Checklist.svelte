<script>
    import { items } from '../stores/stores'
    import Item from "../lib/Item.svelte";
    let selectedCategory = 'sense';
    const categories = {
		sense: {
			options: ["Touch", "Inhale", "See/Hear", "Ingest"]
		},
		space: {
			options: ["Kitchen", "Bathroom", "Bedroom", "Outdoors", "Other"]
		},
		action: { 
			options: ['Add', 'Eliminate', 'Swap']
		},
		priority: { 
			options: ['Extreme', 'High', 'Medium', 'Low']
		},
		// schedule: {
		// 	weeks: Array.from({ length: 19 }, (_, index) => index + 1)
		// }
	}
</script>

<div class="relative flex flex-col items-center justify-items-center py-8">

	<!-- Sort Type Buttons -->
	<div class="flex flex-row mb-10 lg:gap-24 text-xl">
		<button on:click={() => selectedCategory = 'sense'} class="px-2 py-1 hover:text-pri/80 {selectedCategory === 'sense' ? 'text-pri underline underline-offset-8 decoration-1' : 'text-pri'}">Sense</button>
		<button on:click={() => selectedCategory = 'space'} class=" px-2 py-1 hover:text-pri/80 {selectedCategory === 'space' ? 'text-pri underline underline-offset-8 decoration-1' : 'text-pri'}">Space</button>
		<button on:click={() => selectedCategory = 'action'} class="px-2 py-1 hover:text-pri/80 {selectedCategory === 'action' ? 'text-pri underline underline-offset-8 decoration-1' : 'text-pri'}">Action</button>
		<!-- <button on:click={() => selectedCategory = 'priority'} class="px-2 py-1 hover:text-pri/80 {selectedCategory === 'priority' ? 'text-pri underline underline-offset-8 decoration-1' : 'text-pri'}">Priority</button> -->
		
		<!-- <button on:click={() => selectedCategory = 'schedule'} class="px-2 py-1 {selectedCategory === 'schedule' ? 'text-pri underline underline-offset-8' : 'text-pri/50'}">Schedule</button> -->
	</div>

	<!-- Columns of Items Based on Sort Type -->
	{#if selectedCategory === 'sense'}
		<div class="flex flex-wrap justify-around">
			{#each categories['sense']['options'] as option}
				<div class="flex flex-col items-center">
				<p class="text-pri text-lg">{option}</p>
				
					{#each $items.filter(item => item.categories.includes(option.toLowerCase())) as i}
						<Item item={i}/>
					{/each} 
				</div>
			{/each}
		</div>
	{:else if selectedCategory === 'space'}
		<div class="flex flex-wrap justify-around">
			{#each categories['space']['options'] as option}
			<div class="flex flex-col items-center">
				<p class="text-pri">{option}</p>
				
					{#each $items.filter(item => item.categories.includes(option.toLowerCase())) as i}
						<Item item={i}/>
					{/each} 
				</div>
			{/each} 
		</div>
	{:else if selectedCategory === 'action'}
	<div class="flex flex-wrap justify-around">
			{#each categories['action']['options'] as option}
			<div class="flex flex-col items-center">
				<p class="text-pri">{option}</p>
				
					{#each $items.filter(item => item.categories.includes(option.toLowerCase())) as i}
						<Item item={i}/>
					{/each} 
				</div>
			{/each}
		</div>
	<!-- {:else if selectedCategory === 'priority'}
	<div class="flex flex-wrap justify-around">
			{#each categories['priority']['options'] as option}
			<div class="flex flex-col items-center">
				<p class="text-pri">{option}</p>
					{#each $items.filter(item => item.priority === option) as i}
						<Item item={i}/>
					{/each} 
				</div>
			{/each}
		</div> -->
	<!-- {:else if selectedCategory === 'schedule'}
	<div class="flex flex-wrap justify-around max-w-[70%]">
			{#each categories['schedule']['weeks'] as week}
			<div class="flex flex-col items-center">	
			<p class="text-pri">Week {week}</p>
				
					{#each $items.filter(item => item.week === week) as i}
						<Item item={i}/>
					{/each} 
				</div>
			{/each} 
		</div> -->
	{/if}		
</div>