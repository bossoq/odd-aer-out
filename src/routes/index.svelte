<script lang="ts">
  import Canvas from '$lib/components/Canvas.svelte'
  import Countdown from '$lib/components/Countdown.svelte'
  import { score, timer } from '$lib/store'
  import { randStringGenerator } from '$lib/gameMechanics'

  let timerValue = 60
  const timerArr = [30, 45, 60]

  $: txtArr = randStringGenerator(16)
  $: played = false
  $: timeup = true

  const handleRandom = () => {
    txtArr = randStringGenerator(16)
  }
  const handleStart = () => {
    $score = 0
    $timer = timerValue
    played = true
    timeup = false
    handleRandom()
  }
  const handleTimeUp = () => {
    $timer = 0
    timeup = true
  }
  const handleRestart = () => {
    $score = 0
    $timer = timerValue
    timeup = false
    played = true
    handleRandom()
  }
  const handleReset = () => {
    $score = 0
    $timer = timerValue
    timeup = true
    played = false
  }

  score.subscribe(() => {
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
      {#if timeup}
        <div class="text-2xl sm:text-3xl font-bold mb-2 text-teal-800 dark:text-teal-200">
          <p>หมดเวลา</p>
        </div>
      {:else}
        <Countdown on:completed={handleTimeUp} />
      {/if}
      <div class="text-2xl sm:text-3xl font-medium text-teal-800 dark:text-teal-200 my-4">
        <span>{$score}</span><span class="mx-1">คะแนน</span>
      </div>
      {#if !timeup}
        <Canvas {txtArr} />
      {:else}
        <div class="flex flex-row gap-4 text-lg sm:text-2xl text-white dark:text-black">
          <button
            class="bg-teal-600 dark:bg-teal-300 rounded mt-4 p-3 font-medium"
            on:click={handleRestart}>เริ่มเกมใหม่</button
          >
          <button
            class="bg-red-600 dark:bg-red-300 rounded mt-4 p-3 font-medium"
            on:click={handleReset}>ตั้งค่าใหม่</button
          >
        </div>
      {/if}
    </div>
  {:else}
    <div
      class="flex flex-col items-center justify-center text-lg sm:text-2xl text-black dark:text-white"
    >
      <div class="flex flex-row items-center justify-center gap-4">
        <span>ตั้งค่าเวลา</span>
        <div class="flex gap-2 justify-center">
          {#each timerArr as t}
            <div class="form-check form-check-inline">
              <label class="form-check-label inline-block">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-400 dark:border-gray-200 bg-white checked:bg-teal-600 checked:border-teal-600 transition duration-200 mt-2 mr-1 cursor-pointer"
                  type="radio"
                  bind:group={timerValue}
                  name="timer"
                  value={t}
                />
                {t} s</label
              >
            </div>
          {/each}
        </div>
      </div>
      <hr class="my-4 border-slate-300 dark:border-slate-600 w-full" />
      <button
        class="text-white dark:text-black bg-teal-600 dark:bg-teal-300 rounded mt-1 p-3 font-medium"
        on:click={handleStart}>เริ่มเกม</button
      >
    </div>
  {/if}
</div>
