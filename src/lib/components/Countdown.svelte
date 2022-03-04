<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte'
  import { timer } from '$lib/store'

  const dispatch = createEventDispatcher()

  let interval = null

  onMount(() => {
    interval = setInterval(() => {
      $timer -= 1
    }, 1000)
  })

  onDestroy(() => {
    if (interval) {
      clearInterval(interval)
    }
  })

  $: {
    if ($timer === 0) {
      clearInterval(interval)
      interval = null
      dispatch('completed')
    }
  }
</script>

<div class="text-2xl sm:text-3xl font-bold mb-2 text-teal-800 dark:text-teal-200">
  {#if interval}
    เวลาคงเหลือ {$timer} วินาที
  {/if}
</div>
