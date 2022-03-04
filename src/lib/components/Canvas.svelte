<script lang="ts">
  export const ssr = false
  import { onMount } from 'svelte'
  import Konva from 'konva'
  import { darkTheme } from '$lib/store'

  let stage: Konva.Stage
  let layer: Konva.Layer
  let won: boolean = false
  const sceneWidth = 300
  const sceneHeight = 50
  let renderText: (txtArr: string[]) => void
  let rePosition: (txtArr: string[]) => void

  onMount(() => {
    stage = new Konva.Stage({
      container: 'aerPicture',
      width: sceneWidth,
      height: sceneHeight
    })

    layer = new Konva.Layer()
    stage.add(layer)

    const text0 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text1 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text2 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text3 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text4 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text5 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text6 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text7 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text8 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text9 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text10 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text11 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text12 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text13 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text14 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    const text15 = new Konva.Text({
      fontSize: 50,
      fill: $darkTheme ? '#fff' : '#000'
    })
    layer.add(text0)
    layer.add(text1)
    layer.add(text2)
    layer.add(text3)
    layer.add(text4)
    layer.add(text5)
    layer.add(text6)
    layer.add(text7)
    layer.add(text8)
    layer.add(text9)
    layer.add(text10)
    layer.add(text11)
    layer.add(text12)
    layer.add(text13)
    layer.add(text14)
    layer.add(text15)

    const eventResizeHandler = () => {
      const container = document.getElementById('canvasParent')
      const c_width = container.offsetWidth
      const scale = c_width / sceneWidth
      stage!.width(sceneWidth * scale)
      stage!.height(sceneHeight * scale)
      stage.scale({ x: scale, y: scale })
    }
    window.addEventListener('resize', eventResizeHandler)

    darkTheme.subscribe((value) => {
      text0.fill(value ? '#fff' : '#000')
      text1.fill(value ? '#fff' : '#000')
      text2.fill(value ? '#fff' : '#000')
      text3.fill(value ? '#fff' : '#000')
      text4.fill(value ? '#fff' : '#000')
      text5.fill(value ? '#fff' : '#000')
      text6.fill(value ? '#fff' : '#000')
      text7.fill(value ? '#fff' : '#000')
      text8.fill(value ? '#fff' : '#000')
      text9.fill(value ? '#fff' : '#000')
      text10.fill(value ? '#fff' : '#000')
      text11.fill(value ? '#fff' : '#000')
      text12.fill(value ? '#fff' : '#000')
      text13.fill(value ? '#fff' : '#000')
      text14.fill(value ? '#fff' : '#000')
      text15.fill(value ? '#fff' : '#000')
      layer.batchDraw()
    })

    renderText = (txtArr: string[]) => {
      text0.text(txtArr[0])
      text1.text(txtArr[1])
      text2.text(txtArr[2])
      text3.text(txtArr[3])
      text4.text(txtArr[4])
      text5.text(txtArr[5])
      text6.text(txtArr[6])
      text7.text(txtArr[7])
      text8.text(txtArr[8])
      text9.text(txtArr[9])
      text10.text(txtArr[10])
      text11.text(txtArr[11])
      text12.text(txtArr[12])
      text13.text(txtArr[13])
      text14.text(txtArr[14])
      text15.text(txtArr[15])
      rePosition(txtArr)
      layer.batchDraw()
    }
    rePosition = (txtArr: string[]) => {
      text0.x(0 + 28)
      text1.x(15 * 1 + (txtArr[1 - 1] === 'แ' ? 15 : 0) + 28)
      text2.x(15 * 2 + (txtArr[2 - 1] === 'แ' ? 15 : 0) + 28)
      text3.x(15 * 3 + (txtArr[3 - 1] === 'แ' ? 15 : 0) + 28)
      text4.x(15 * 4 + (txtArr[4 - 1] === 'แ' ? 15 : 0) + 28)
      text5.x(15 * 5 + (txtArr[5 - 1] === 'แ' ? 15 : 0) + 28)
      text6.x(15 * 6 + (txtArr[6 - 1] === 'แ' ? 15 : 0) + 28)
      text7.x(15 * 7 + (txtArr[7 - 1] === 'แ' ? 15 : 0) + 28)
      text8.x(15 * 8 + (txtArr[8 - 1] === 'แ' ? 15 : 0) + 28)
      text9.x(15 * 9 + (txtArr[9 - 1] === 'แ' ? 15 : 0) + 28)
      text10.x(15 * 10 + (txtArr[10 - 1] === 'แ' ? 15 : 0) + 28)
      text11.x(15 * 11 + (txtArr[11 - 1] === 'แ' ? 15 : 0) + 28)
      text12.x(15 * 12 + (txtArr[12 - 1] === 'แ' ? 15 : 0) + 28)
      text13.x(15 * 13 + (txtArr[13 - 1] === 'แ' ? 15 : 0) + 28)
      text14.x(15 * 14 + (txtArr[14 - 1] === 'แ' ? 15 : 0) + 28)
      text15.x(15 * 15 + (txtArr[15 - 1] === 'แ' ? 15 : 0) + 28)
    }

    ;['tap', 'click'].forEach((event) => {
      layer.on(event, (e) => {
        if (e.target.getAttr('text') === 'แ') {
          e.target.setAttr('fill', '#ff0000')
          won = true
        }
      })
    })

    eventResizeHandler()
  })

  const randStringGenerator = (length: number): string[] => {
    let txtArr: string[] = []
    const aer = Math.round(Math.random() * (length - 1))
    for (let i = 0; i < length; i++) {
      txtArr.push(i === aer ? 'แ' : 'เ')
    }
    return txtArr
  }

  let txtArr: string[] = randStringGenerator(16)
  const handleRandom = () => {
    txtArr = randStringGenerator(16)
    layer.getChildren().forEach((text) => {
      text.setAttr('fill', $darkTheme ? '#fff' : '#000')
    })
    won = false
  }

  $: renderText?.(txtArr)
  $: won
</script>

<div id="canvasParent" class="w-full flex items-center justify-center">
  <div id="aerPicture" class="border border-red-900" />
</div>
<button class="bg-green-300 rounded mt-4 p-2 font-medium" on:click={handleRandom}>Random</button>
{#if won}
  <p class="text-2xl text-black dark:text-white mt-4">You won!</p>
{/if}
