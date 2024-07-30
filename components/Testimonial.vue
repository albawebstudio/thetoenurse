<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  testimonial: object
}>()

const ratingToInt = () => {
  return parseInt(props.testimonial.rating, 10)
};
</script>

<template>
  <div class="group bg-white border border-solid border-gray-300 rounded-xl px-16 w-full hover:shadow-sm">
    <div class="">
      <div class="flex items-center my-6  text-amber-500">
        <div v-for="count in ratingToInt()">
          <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                fill="currentColor" />
          </svg>
        </div>
        <span class="text-base font-semibold text-green-600 ml-2">{{  testimonial.rating }}</span>
      </div>
      <p class="text-base text-gray-600 leading-6 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
        {{ testimonial.content }}
      </p>
    </div>
    <div class="flex items-center gap-5 border-t border-solid border-gray-200 py-5 mb-6">
      <NuxtImg :src="'/testimonial-images/' + testimonial.image"
               :alt="testimonial.author"
               class="rounded-full h-10 w-10" />
      <div class="block">
        <h5 class="text-gray-900 font-medium mb-1">{{ testimonial.author }}</h5>
        <span class="text-sm leading-4 text-gray-500">{{ testimonial.location }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
