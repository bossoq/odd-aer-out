<script lang="ts">
  import '../app.css'
  import Head from '$lib/components/Head.svelte'
  import Kofi from '$lib/components/Kofi.svelte'
  import Menu from '$lib/components/Menu.svelte'
  import Social from '$lib/components/Social.svelte'
  import ThemeSelector from '$lib/components/ThemeSelector.svelte'
  import Modal from '$lib/components/Modal.svelte'
  import { darkTheme } from '$lib/store'

  const url = 'https://odd-aer-out.bossoq.live'
  const title = 'Odd "แ" Out'
  const description = 'เเเเแเเเเเเเเเเเ หา แ ให้เจอ ถ้าเธอแน่จริง เเเเแเเเเเเเเเเเ'

  const menuItems = [
    { name: 'Made by bossoq', url: 'https://github.com/bossoq/simple-sveltekit-template' }
  ]
  const imageUrl = `${url}/screenshot.jpg`
  const gtagId = null
  const themeIcons = ['🌞 Toggle Light mode', '🌙 Toggle Dark mode']
</script>

<Head {title} {description} {url} {imageUrl} {gtagId} />
<Kofi name="bossoq" label="Buy me Coffee" />
<Social {url} {title} />
<main class={$darkTheme && 'dark'}>
  <ThemeSelector {themeIcons} />
  <Menu items={menuItems} />
  <Modal />
  <slot />
</main>
