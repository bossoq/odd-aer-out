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
    'bg-white dark:bg-black text-teal-800 dark:text-teal-200 w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center'
  $: classTitle2 = 'w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center'
  $: classTitle3 =
    'bg-teal-200 dark:bg-teal-800 text-slate-600 dark:text-white w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center'
  const classTitleConst =
    'text-slate-600 dark:text-white w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center'
  let classTitle1Switch = [
    'w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center',
    'w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center'
  ]
  let classTitle2Switch = [
    'w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center',
    'bg-white dark:bg-black text-teal-800 dark:text-teal-200 w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center'
  ]
  let classTitle3Switch = ['bg-amber-200 dark:bg-amber-800', 'bg-teal-200 dark:bg-teal-800']
  let aer = ['เเ', 'แ']

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
    navigator.clipboard.writeText(
      `Odd "แ" Out ${$timer}s ${$score} คะแนน #OddแOut https://odd-aer-out.bossoq.live`
    )
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
      classTitle1Switch.push(classTitle1)
      classTitle1 = classTitle1Switch.shift()
      classTitle2Switch.push(classTitle2)
      classTitle2 = classTitle2Switch.shift()
    }, 1000)
  }
  const stopTitleChange = () => {
    if (titleInterval) {
      clearInterval(titleInterval)
    }
    classTitle1 =
      'bg-white dark:bg-black text-teal-800 dark:text-teal-200 w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center'
    classTitle2 = 'w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center'
    classTitle3 = 'bg-teal-200 dark:bg-teal-800 ' + classTitleConst
    aerTitle = 'แ'
    classTitle1Switch = [
      'w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center',
      'w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center'
    ]
    classTitle2Switch = [
      'w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center',
      'bg-white dark:bg-black text-teal-800 dark:text-teal-200 w-12 h-12 sm:w-20 sm:h-20 px-4 py-2 rounded-xl sm:rounded-2xl text-center'
    ]
    classTitle3Switch = ['bg-amber-200 dark:bg-amber-800', 'bg-teal-200 dark:bg-teal-800']
    aer = ['เเ', 'แ']
  }

  onMount(() => {
    startTitleChange()
  })
  onDestroy(() => {
    stopTitleChange()
  })
</script>

<main class="w-full h-screen flex flex-col items-center bg-white dark:bg-black">
  <h1
    class="relative top-24 flex flex-row gap-1 sm:gap-3 lg:gap-8 text-2xl sm:text-6xl text-white dark:text-black bg-teal-800 dark:bg-teal-200 p-2 sm:p-4 rounded-2xl font-bold select-none"
  >
    <span class={classTitle1}>O</span>
    <span class={classTitle1}>D</span>
    <span class={classTitle1}>D</span>
    <span class={classTitle3}>{aerTitle}</span>
    <span class={classTitle2}>O</span>
    <span class={classTitle2}>U</span>
    <span class={classTitle2}>T</span>
  </h1>
  <span class="my-4" />
  {#if played}
    <div class="relative top-24 flex flex-col justify-center items-center">
      <div
        class="w-full flex {timeup
          ? 'flex-col justify-center gap-4'
          : 'flex-row justify-between'} items-center mb-6 select-none"
      >
        {#if !timeup}
          <Countdown on:completed={handleTimeUp} />
          <div
            in:fly={{ y: -5 }}
            class="text-xl sm:text-2xl font-medium text-teal-800 dark:text-teal-200"
          >
            <span class="mr-2 uppercase">Score :</span><span>{$score}</span>
          </div>
        {:else}
          <div
            in:fly={{ y: -5 }}
            class="text-4xl sm:text-6xl font-medium text-teal-800 dark:text-teal-200"
          >
            <span class="uppercase">Time's Up!</span>
          </div>
          <div
            in:fly={{ y: -5 }}
            class="text-4xl sm:text-6xl font-medium text-teal-800 dark:text-teal-200"
          >
            <span class="mr-2 uppercase">Score :</span><span>{$score}</span>
          </div>
        {/if}
      </div>
      {#if !timeup}
        <Canvas
          on:answer={handleAnswer}
          on:true={() => scoreHandler(true)}
          on:false={() => scoreHandler(false)}
          {txtArr}
          idx={0}
        />
      {:else}
        <div
          class="relative w-60 top-12 sm:top-2 flex flex-col gap-4 sm:gap-6 items-center justify-center text-lg sm:text-2xl text-black dark:text-white select-none"
        >
          <button
            class="w-full text-teal-800 dark:text-teal-200 border-4 border-teal-800 dark:border-teal-200 rounded-2xl mt-1 p-4 font-medium uppercase"
            on:click={handleRestart}>Restart</button
          >
          <button
            class="w-full text-teal-800 dark:text-teal-200 border-4 border-teal-800 dark:border-teal-200 rounded-2xl mt-1 p-4 font-medium uppercase"
            on:click={handleCopy}
          >
            {#if copied}
              Copied
            {:else}
              Copy
            {/if}
          </button>
          <button
            class="w-full text-teal-800 dark:text-teal-200 border-4 border-teal-800 dark:border-teal-200 rounded-2xl mt-1 p-4 font-medium uppercase"
            on:click={handleReset}>Main Menu</button
          >
        </div>
      {/if}
    </div>
  {:else}
    <div
      class="relative w-60 top-36 flex flex-col gap-4 sm:gap-6 items-center justify-center text-lg sm:text-2xl text-black dark:text-white select-none"
      in:fly={{ y: -5 }}
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
      <hr class="mt-1 border-slate-300 dark:border-slate-600 w-full" />
      <button
        class="w-full text-teal-800 dark:text-teal-200 border-4 border-teal-800 dark:border-teal-200 rounded-2xl mt-1 p-4 font-medium uppercase"
      >
        Coming Soon
      </button>
    </div>
  {/if}
</main>
