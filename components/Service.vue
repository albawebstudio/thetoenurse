<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  service: object
}>()
</script>

<template>
  <NuxtLink :to="'/service/' + service.slug" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <NuxtImg :src="'/service-images/' + service.image" :alt="service.img_alt" class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" />
    <div class="flex flex-col justify-between p-8 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ service.title }}</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{
          service.short_description
        }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>
