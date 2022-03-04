<script lang="ts">
  import Canvas from '$lib/components/Canvas.svelte'
  import { score } from '$lib/store'
  import { randStringGenerator } from '$lib/gameMechanics'

  $: txtArr = randStringGenerator(16)
  $: played = false
  $: Score = $score

  const handleRandom = () => {
    txtArr = randStringGenerator(16)
  }
  const handleStart = () => {
    played = true
    score.set(0)
    handleRandom()
  }

  score.subscribe((score) => {
    Score = score
    setTimeout(() => {
      handleRandom()
    }, 200)
  })
</script>

<div class="w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-black">
  <h1 class="text-6xl text-black dark:text-white">
    <span>Odd</span><span class="dark:text-teal-200 text-teal-800 mx-4">"แ"</span><span>Out</span>
  </h1>
  <span class="my-4" />
  {#if played}
    <div class="flex flex-col justify-center items-center">
      <div class="text-lg sm:text-2xl font-medium text-black dark:text-white mb-4">
        <span>{Score}</span><span class="mx-1">คะแนน</span>
      </div>
      <Canvas {txtArr} />
    </div>
  {:else}
    <div class="text-lg sm:text-2xl text-white dark:text-black">
      <button
        class="bg-teal-600 dark:bg-teal-300 rounded mt-4 p-2 font-medium"
        on:click={handleStart}>Start</button
      >
    </div>
  {/if}
</div>
