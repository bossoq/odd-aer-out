<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { fly } from 'svelte/transition'
  import Canvas from '$lib/components/Canvas.svelte'
  import Countdown from '$lib/components/Countdown.svelte'
  import { score, timer } from '$lib/store'
  import { randStringGenerator, scoreHandler, resetScore } from '$lib/gameMechanics'

  const timerArr = [30, 45, 60]
  let titleInterval = null
  $: aerTitle = 'แ'
  $: classTitle1 =
    'bg-white dark:bg-black text-teal-800 dark:text-teal-200 w-20 px-4 py-2 rounded-2xl text-center'
  $: classTitle2 = 'w-20 px-4 py-2 rounded-2xl text-center'
  $: classTitle3 =
    'bg-teal-200 dark:bg-teal-800 text-slate-600 dark:text-white w-20 px-4 py-2 rounded-2xl text-center'
  let tmpClass = null
  const classTitleConst = 'text-slate-600 dark:text-white w-20 px-4 py-2 rounded-2xl text-center'
  const classTitle3Switch = ['bg-amber-200 dark:bg-amber-800', 'bg-teal-200 dark:bg-teal-800']
  const aer = ['เเ', 'แ']

  $: txtArr = randStringGenerator(16)
  $: played = false
  $: timeup = true
  $: copied = false

  const handleRandom = () => {
    txtArr = randStringGenerator(16)
  }
  const handleStart = () => {
    resetScore()
    stopTitleChange()
    played = true
    timeup = false
    handleRandom()
  }
  const handleTimerChange = () => {
    $timer = timerArr.shift()
    timerArr.push($timer)
  }
  const handleTimeUp = () => {
    startTitleChange()
    timeup = true
  }
  const handleRestart = () => {
    resetScore()
    stopTitleChange()
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
  const startTitleChange = () => {
    titleInterval = setInterval(() => {
      aerTitle = aer.shift()
      aer.push(aerTitle)
      classTitle3 = classTitle3Switch.shift()
      classTitle3Switch.push(classTitle3)
      classTitle3 += ' ' + classTitleConst
      tmpClass = classTitle1
      classTitle1 = classTitle2
      classTitle2 = tmpClass
    }, 1000)
  }
  const stopTitleChange = () => {
    if (titleInterval) {
      clearInterval(titleInterval)
    }
    classTitle1 =
      'bg-white dark:bg-black text-teal-800 dark:text-teal-200 w-20 px-4 py-2 rounded-2xl text-center'
    classTitle2 = 'w-20 px-4 py-2 rounded-2xl text-center'
    classTitle3 = 'bg-teal-200 dark:bg-teal-800 ' + classTitleConst
    aerTitle = 'แ'
  }

  onMount(() => {
    startTitleChange()
  })
  onDestroy(() => {
    stopTitleChange()
  })
</script>

<div class="w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-black">
  <h1
    class="flex flex-row gap-8 text-6xl text-white dark:text-black bg-teal-800 dark:bg-teal-200 p-4 rounded-2xl font-bold"
  >
    <span class={classTitle1}>O</span>
    <span class={classTitle2}>D</span>
    <span class={classTitle1}>D</span>
    <span class={classTitle3}>{aerTitle}</span>
    <span class={classTitle1}>O</span>
    <span class={classTitle2}>U</span>
    <span class={classTitle1}>T</span>
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
        <div
          in:fly={{ y: -5 }}
          class="text-xl sm:text-2xl font-medium text-teal-800 dark:text-teal-200"
        >
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
        class="w-full text-teal-800 dark:text-teal-200 border-4 border-teal-800 dark:border-teal-200 rounded-2xl mt-1 p-4 font-medium uppercase"
        on:click={handleStart}
      >
        Start
      </button>
      <button
        class="w-full text-teal-800 dark:text-teal-200 border-4 border-teal-800 dark:border-teal-200 rounded-2xl mt-1 p-4 font-medium uppercase"
        on:click={handleTimerChange}
      >
        Timer: {$timer}s
      </button>
      <!-- <hr class="my-4 border-slate-300 dark:border-slate-600 w-full" /> -->
    </div>
  {/if}
</div>
