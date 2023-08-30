<script>
    export let item;
    let expand = false;
</script>

  <div class="flex flex-col h-fit p-2 rounded m-2 round-sm bg-pri/80 text-black w-96">
    
        <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center">
                <input class="checkbox-primary" type="checkbox" bind:checked={item.checked}>
                <p class="px-2 {item.checked ? 'line-through': ''}">{item.name}</p>
            </div>
            <button class="btn btn-sm rounded text-black" on:click={() => {expand = !expand}}><i class="las la-chevron-circle-{expand ? 'up': 'down'}"></i></button>
        </div>
        {#if (expand === true)}
            <p class="mt-2 ">{item.miniText}</p>
            <div class="mt-4 flex flex-row justify-between">
                <div class="flex flex-row gap-1">
                    {#each item.categories as category}
                        <span class="whitespace-nowrap rounded-full text-black bg-pri px-2.5 py-0.5 text-xs">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    {/each}
                    <span class="whitespace-nowrap rounded-full text-black bg-pri px-2.5 py-0.5 text-xs">{item.priority}</span>
                    <!-- <span class="whitespace-nowrap rounded-full text-black bg-pri px-2.5 py-0.5 text-xs">Week {item.week}</span> -->
                </div>
                <!-- May add pages for each item in the future with additional research. -->
                <!-- <button class="btn text-black bg-pri btn-xs w-fit text-xs rounded-full text-black px-2.5 py-0.5 hover:bg-pri/50"><a href='/item/{item.name}'>Read More</a></button>  -->
            </div>
    
        {/if}
 
  </div>