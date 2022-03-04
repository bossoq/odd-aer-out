<script lang="ts">
  import { onMount } from 'svelte'
  import Konva from 'konva'
  import { darkTheme } from '$lib/store'
  export let txtArr: string[]

  let stage: Konva.Stage
  let layer: Konva.Layer
  const sceneWidth = 300
  const sceneHeight = 50
  let renderText: (txtArr: string[]) => void

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
      layer.getChildren().forEach((text) => {
        text.setAttr('fill', value ? '#fff' : '#000')
      })
      layer.batchDraw()
    })

    renderText = (txtArr: string[]) => {
      for (let idx = 0; idx < 16; idx++) {
        layer.getChildren()[idx].setAttrs({
          text: txtArr[idx],
          x: 15 * idx + 28 + (idx > 0 ? (txtArr[idx - 1] === 'แ' ? 14 : 0) : 0),
          fill: $darkTheme ? '#fff' : '#000'
        })
      }
      layer.batchDraw()
    }
    ;['tap', 'click'].forEach((event) => {
      layer.on(event, (e) => {
        if (e.target.getAttr('text') === 'แ') {
          e.target.setAttr('fill', '#ff0000')
        }
      })
    })

    eventResizeHandler()
  })

  $: renderText?.(txtArr)
</script>

<div id="canvasParent" class="w-full flex items-center justify-center">
  <div id="aerPicture" class="border border-red-900 p-2" />
</div>
