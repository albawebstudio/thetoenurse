<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  service: object
}>()
</script>

<template>
  <NuxtLink
      :to="'/service/' + service.slug"
      class="flex flex-col md:flex-row items-stretch bg-white border border-gray-200 hover:border-gray-400 rounded-lg shadow md:max-w-full hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500  dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <div class="w-full md:w-96 h-64 md:h-auto">
      <NuxtImg
          :src="'/service-images/' + service.image"
          :alt="service.img_alt"
          class="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg"
      />
    </div>
    <div class="flex flex-col justify-between p-8 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ service.title }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ service.short_description }}
      </p>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>
