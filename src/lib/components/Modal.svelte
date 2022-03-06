<script lang="ts">
  import { fade } from 'svelte/transition'
  import { modalViewed } from '$lib/store'
  import { clickOutside } from '$lib/clickOutside'
  import { handleModalClass } from '$lib/handleModal'
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
        on:click_outside={(e) => handleModalClass(e, $modalViewed, true)}
      >
        <p
          class="absolute my-2 mx-3 sm:my-3 sm:mx-4 right-0 top-0 text-white cursor-pointer text-black dark:text-white"
          on:click={(e) => handleModalClass(e, $modalViewed)}
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
                  จากกระแสถกเถียงว่าการเขียนสระ "แ" แบบไหนถึงจะถูก ระหว่าง "เเ" กับ "แ"
                  เราเลยสร้างเกมง่ายๆ ให้หาสระ "แ" ท่ามกลางสระ "เ" ให้เจอ
                </p>
              </div>
              <hr class="my-2" />
              <div class="mt-2">
                <h3 class="text-base font-medium underline">Changelog</h3>
                <h4 class="text-sm font-medium text-left mt-2">v1.1.0</h4>
                <div class="flex flex-col mt-1 w-full justify-between text-left">
                  <p class="text-sm text-gray-500 dark:text-gray-300">New UI 👏🏻</p>
                  <div class="text-sm text-gray-500 dark:text-gray-300">
                    <ul class="list-disc pl-4">
                      <li>New UI 300%</li>
                      <li>New Rules: Deduct Point on Incorrect Answer</li>
                    </ul>
                  </div>
                </div>
                <h4 class="text-sm font-medium text-left mt-2">v1.0.0</h4>
                <div class="flex flex-col mt-1 w-full justify-between text-left">
                  <p class="text-sm text-gray-500 dark:text-gray-300">Initial Released ✌🏻</p>
                  <div class="text-sm text-gray-500 dark:text-gray-300">
                    <ul class="list-disc pl-4">
                      <li>Basic Functionality</li>
                      <li>Single Player</li>
                      <li>Auto generated string</li>
                      <li>Timer Selection</li>
                      <li>Share Result</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
