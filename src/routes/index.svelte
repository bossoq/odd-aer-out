<script lang="ts">
  import Canvas from '$lib/components/Canvas.svelte'
  import Countdown from '$lib/components/Countdown.svelte'
  import { score, timer } from '$lib/store'
  import { randStringGenerator, scoreHandler, resetScore } from '$lib/gameMechanics'

  const timerArr = [30, 45, 60]

  $: txtArr = randStringGenerator(16)
  $: played = false
  $: timeup = true
  $: copied = false

  const handleRandom = () => {
    txtArr = randStringGenerator(16)
  }
  const handleStart = () => {
    resetScore()
    played = true
    timeup = false
    handleRandom()
  }
  const handleTimerChange = () => {
    $timer = timerArr.shift()
    timerArr.push($timer)
  }
  const handleTimeUp = () => {
    timeup = true
  }
  const handleRestart = () => {
    resetScore()
    timeup = false
    played = true
    handleRandom()
  }
  const handleReset = () => {
    resetScore()
    timeup = true
    played = false
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(`Odd "แ" Out ${$timer}s ${$score} คะแนน #OddแOut`)
    copied = true
    setTimeout(() => {
      copied = false
    }, 2000)
  }
  const handleAnswer = () => {
    setTimeout(() => {
      handleRandom()
    }, 200)
  }
</script>

<div class="w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-black">
  <h1 class="text-6xl text-black dark:text-white">
    <span>Odd</span><span class="dark:text-teal-200 text-teal-800 mx-4">"แ"</span><span>Out</span>
  </h1>
  <span class="my-4" />
  {#if played}
    <div class="flex flex-col justify-center items-center">
      <div
        class="w-full flex flex-row {timeup
          ? 'justify-center'
          : 'justify-between'} items-center mb-6"
      >
        {#if !timeup}
          <Countdown on:completed={handleTimeUp} />
        {/if}
        <div class="text-xl sm:text-2xl font-medium text-teal-800 dark:text-teal-200">
          <span class="mr-2">Score :</span><span>{$score}</span>
        </div>
      </div>
      {#if !timeup}
        <Canvas
          on:answer={handleAnswer}
          on:true={() => scoreHandler(true)}
          on:false={() => scoreHandler(false)}
          {txtArr}
        />
      {:else}
        <div class="flex flex-col justify-center items-center">
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
          <div class="flex flex-row gap-4 text-lg sm:text-2xl text-white dark:text-black">
            <button
              class="bg-teal-600 dark:bg-teal-300 rounded mt-4 p-3 font-medium"
              on:click={handleCopy}
            >
              {#if copied}
                คัดลอกผลแล้ว
              {:else}
                คัดลอกผล
              {/if}
            </button>
          </div>
        </div>
      {/if}
    </div>
  {:else}
    <div
      class="flex flex-col gap-2 items-center justify-center text-lg sm:text-2xl text-black dark:text-white"
    >
      <button
        class="w-full text-teal-800 dark:text-teal-200 border-4 border-teal-600 dark:border-teal-300 rounded-2xl mt-1 p-4 font-medium uppercase"
        on:click={handleStart}
      >
        Start
      </button>
      <button
        class="w-full text-teal-800 dark:text-teal-200 border-4 border-teal-600 dark:border-teal-300 rounded-2xl mt-1 p-4 font-medium uppercase"
        on:click={handleTimerChange}
      >
        Timer: {$timer}s
      </button>
      <!-- <hr class="my-4 border-slate-300 dark:border-slate-600 w-full" /> -->
    </div>
  {/if}
</div>
