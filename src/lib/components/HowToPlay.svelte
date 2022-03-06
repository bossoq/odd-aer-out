<script lang="ts">
  import Canvas from '$lib/components/Canvas.svelte'
  import { fade } from 'svelte/transition'
  import { howtoModalViewed } from '$lib/store'
  import { clickOutside } from '$lib/clickOutside'
  import { handleHowToClass } from '$lib/handleModal'
</script>

<div
  class="fixed z-20 inset-0 overflow-y-auto"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
  transition:fade
>
  <div
    class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75" aria-hidden="true">
      <span class="inline-block align-middle h-1/6 sm:h-screen" aria-hidden="true">&#8203;</span>
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        use:clickOutside
        on:click_outside={(e) => handleHowToClass(e, $howtoModalViewed, true)}
      >
        <p
          class="absolute my-2 mx-3 sm:my-3 sm:mx-4 right-0 top-0 text-white cursor-pointer text-black dark:text-white"
          on:click={(e) => handleHowToClass(e, $howtoModalViewed)}
        >
          x
        </p>
        <div class="bg-white px-4 pt-2 pb-4 sm:pt-5 sm:p-6 sm:pb-4 dark:bg-slate-800">
          <div class="sm:flex sm:items-start">
            <div class="w-full mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left dark:text-white">
              <h3 class="text-base leading-6 font-medium text-gray-900 dark:text-white">
                Odd "แ" Out
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500 dark:text-gray-300">
                  เหมือนกับเล่นเกมจับผิด (Odd One Out) แต่เปลี่ยนจากภาพ มาเป็นหาสระ "แ"
                  ที่ซ่อนตัวอยู่ในสระ "เ" ภายในระยะเวลาที่กำหนด (30, 45, 60 วินาที)
                </p>
              </div>
              <hr class="my-2" />
              <div class="mt-2">
                <h3 class="text-base font-medium underline">ตัวอย่าง</h3>
                <div class="flex flex-col mt-1 w-full justify-center items-center text-left">
                  <div class="w-72 p-2">
                    <Canvas
                      txtArr={[
                        'เ',
                        'แ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ'
                      ]}
                      idx={0}
                      highlightAns={1}
                    />
                  </div>
                </div>
                <div
                  class="flex flex-col w-full text-left text-sm text-gray-500 dark:text-gray-300"
                >
                  <p>
                    หากคลิ๊กสระ <span class="font-bold">"แ"</span> (ตำแหน่งที่ 2) ซึ่งถูกต้อง สระ
                    <span class="font-bold">"แ"</span> ตำแหน่งที่ 2 จะเปลี่ยนเป็นสีเขียว และได้รับ 1
                    คะแนน
                  </p>
                </div>
                <div class="flex flex-col mt-1 w-full justify-center items-center text-left">
                  <div class="w-72 p-2">
                    <Canvas
                      txtArr={[
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'แ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ',
                        'เ'
                      ]}
                      idx={1}
                      highlightAns={7}
                      highlightWrong={1}
                    />
                  </div>
                </div>
                <div
                  class="flex flex-col w-full text-left text-sm text-gray-500 dark:text-gray-300"
                >
                  <p>
                    หากคลิ๊กสระ <span class="font-bold">"เ"</span> (ตำแหน่งที่ 2) ซึ่งไม่ถูกต้อง สระ
                    <span class="font-bold">"เ"</span> ตำแหน่งที่ 2 จะเปลี่ยนเป็นสีส้ม และสระ
                    <span class="font-bold">"แ"</span> ตำแหน่งที่ 8 จะเปลี่ยนเป็นสีเขียว (เฉลยคำตอบ)
                    และจะถูกหัก 1 คะแนน
                  </p>
                  <p class="font-bold text-center mt-2">
                    * หากคะแนน = 0 อยู่ จะไม่ถูกหักคะแนน (ไม่มีการติดลบคะแนน) *
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
