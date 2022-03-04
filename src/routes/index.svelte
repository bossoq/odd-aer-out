<script lang="ts">
  import Canvas from '$lib/components/Canvas.svelte'
</script>

<div class="w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-black">
  <h1 class="text-6xl text-black dark:text-white">
    <span>Odd</span><span class="dark:text-teal-200 text-teal-800 mx-4">"แ"</span><span>Out</span>
  </h1>
  <span class="my-4" />
  <div class="flex flex-col justify-center items-center">
    <Canvas />
  </div>
</div>
