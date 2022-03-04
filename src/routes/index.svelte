<script lang="ts">
  import Canvas from '$lib/components/Canvas.svelte'
  import { randStringGenerator } from '$lib/gameMechanics'

  const handleRandom = () => {
    txtArr = randStringGenerator(16)
  }

  $: txtArr = randStringGenerator(16)
  $: played = true
</script>

<div class="w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-black">
  <h1 class="text-6xl text-black dark:text-white">
    <span>Odd</span><span class="dark:text-teal-200 text-teal-800 mx-4">"แ"</span><span>Out</span>
  </h1>
  <span class="my-4" />
  {#if played}
    <div class="flex flex-col justify-center items-center">
      <Canvas {txtArr} />
      <button class="bg-green-300 rounded mt-4 p-2 font-medium" on:click={handleRandom}
        >Random</button
      >
    </div>
  {/if}
</div>
