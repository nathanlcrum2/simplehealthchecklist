<script>
  import { onMount } from 'svelte';
  import { items } from '../../../stores/stores';

  export let data;
  let item = {
    name: '',
    categories: [],
    week: ''
  };

  onMount(() => {
    item = $items.filter(item => item.name === data.slug)[0]
    console.log(item)
  });
</script>

<p>{data.slug}</p>
<p>{item.categories[0]}</p>