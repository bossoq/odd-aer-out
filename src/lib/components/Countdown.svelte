<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte'
  import { tweened } from 'svelte/motion'
  import { linear as easing } from 'svelte/easing'
  import { fly } from 'svelte/transition'
  import { timer } from '$lib/store'

  const dispatch = createEventDispatcher()

  const duration = 1000
  const pauseEnabler = false
  let interval = null
  let now = Date.now()
  let end = now + $timer * duration
  let isPaused: boolean

  $: count = Math.round((end - now) / duration)

  let offset = tweened(1, { duration, easing })

  $: offset.set(Math.max(count - 1, 0) / $timer)

  const updateTimer = () => {
    now = Date.now()
  }

  const handleStart = () => {
    now = Date.now()
    end = now + count * duration
    interval = setInterval(updateTimer, duration)
    offset.set(Math.max(count - 1, 0) / $timer)
    isPaused = false
  }

  const handlePause = () => {
    offset.set(count / $timer)
    clearInterval(interval)
    isPaused = true
  }

  onMount(() => {
    interval = setInterval(updateTimer, duration)
  })

  onDestroy(() => {
    if (interval) {
      clearInterval(interval)
    }
  })

  $: {
    if (count === 0) {
      clearInterval(interval)
      interval = null
      dispatch('completed')
    }
  }

  const padValue = (value: number, length = 2, char = '0') => {
    const { length: currentLength } = value.toString()
    if (currentLength >= length) return value.toString()
    return `${char.repeat(length - currentLength)}${value}`
  }
</script>

<main class="text-teal-800 dark:text-teal-200">
  <svg in:fly={{ y: -5 }} viewBox="-50 -50 100 100" class="w-14 h-14">
    <g fill="none" stroke="currentColor" stroke-width="14">
      <circle stroke="currentColor" r="42" />
      <path
        class="stroke-gray-200 dark:stroke-gray-700"
        d="M 0 -42 a 42 42 0 0 0 0 84 42 42 0 0 0 0 -84"
        pathLength="1"
        stroke-dasharray="1"
        stroke-dashoffset={$offset}
      />
    </g>
    <g fill="currentColor" text-anchor="middle" dominant-baseline="baseline">
      <text x="-3" y="6.5">
        {#if $timer >= 1}
          <tspan dx="3" class="text-2xl font-bold">{padValue(count)}</tspan>
        {/if}
      </text>
    </g>
  </svg>

  {#if pauseEnabler}
    <div in:fly={{ y: -10, delay: 120 }}>
      {#if isPaused}
        <button disabled={count === 0} on:click={handleStart}>
          <span class="visually-hidden">Start timer</span>

          <svg viewBox="-50 -50 100 100" width="30" height="30">
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="20"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M -25 -40 l 60 40 -60 40z" />
            </g>
          </svg>
        </button>
      {:else}
        <button disabled={count === 0} on:click={handlePause}>
          <span class="visually-hidden">Pause timer</span>
          <svg viewBox="-50 -50 100 100" width="30" height="30">
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="20"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M -25 -30 v 60 m 50 0 v -60" />
            </g>
          </svg>
        </button>
      {/if}
    </div>
  {/if}
</main>
