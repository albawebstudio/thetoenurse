<script setup lang="ts">
const route = useRoute();
const { data: article } = await useAsyncData("article", () =>
    queryContent(`/blog/${route.params.id}`).findOne()
);
</script>

<template>
  <div class="bg-white dark:bg-gray-900 w-full pb-10">
    <div class="w-full py-40 bg-gray-100 dark:bg-black px-4">
      <h1 class="text-6xl font-bold text-center text-gray-700 dark:text-white">{{ article.title }}</h1>
    </div>
    <div class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 max-w-7xl rounded-3xl flex flex-col items-center shadow-md -mt-20 mx-auto p-10 gap-10">
      <img
          :src="`/blog-images/${article.image}`"
          class="max-w-3xl rounded-2xl"
          :alt="`image for ${article.title} article`"
      />
      <ContentRenderer :value="article" class="prose" />
    </div>
  </div>
</template>

<style scoped>

</style>
