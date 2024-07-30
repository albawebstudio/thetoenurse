<script setup lang="ts">
import Service from "~/components/Service.vue"
import { useServices } from "~/composables/useServices"

const { services } = useServices()
</script>

<template>
  <section id="services" class="bg-white dark:bg-black p-8">
    <div>
      <div class="flex flex-wrap">
        <div v-for="service in services" :key="service.slug" class="w-full p-0 lg:w-1/2 lg:p-8 lg:space-x-4">
          <Service :service="service" />
        </div>
      </div>
    </div>


  </section>
</template>

<style scoped>

</style>
