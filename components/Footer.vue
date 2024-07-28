<script setup lang="ts">
import { ref } from 'vue'

const date = ref(new Date().getFullYear())
</script>

<template>
    <footer class="relative bg-gray-300 pt-8 pb-6">
      <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px;"
      >
        <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
          <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 class="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div class="mt-6">
              <ul class="flex flex-wrap justify-center -m-2.5 mb-0">
                <li class="relative group flex justify-center items-center m-2.5">
                  <NuxtLink to="https://www.instagram.com/thetoenurse/" title="Instagram" target="_blank">
                    <img
                        src="/icons8-instagram.svg" alt="instagram badge" title="Instagram"
                        width="48" height="48">
                  </NuxtLink>
                </li>
                <li class="relative group flex justify-center items-center m-2.5">
                  <NuxtLink to="https://www.tiktok.com/@the.toe.nurse" title="TikTok" target="_blank">
                    <img
                        src="/icons8-tiktok.svg" alt="TikTok badge"
                        title="TikTok" width="48" height="48">
                  </NuxtLink>
                </li>
                <li class="relative group flex justify-center items-center m-2.5">
                  <NuxtLink to="https://www.youtube.com/@thetoenurse" title="YouTube" target="_blank">
                    <img
                        src="/icons8-youtube.svg" alt="YouTube badge"
                        title="YouTube" width="48" height="48">
                  </NuxtLink>
                </li>
                <li class="relative group flex justify-center items-center m-2.5">
                  <NuxtLink to="https://www.facebook.com/profile.php?id=61557241006774" title="Facebook" target="_blank">
                    <img
                        src="/icons8-facebook.svg" alt="Facebook badge"
                        title="Facebook" width="48" height="48">
                  </NuxtLink>
                </li>
                <li class="relative group flex justify-center items-center m-2.5">
                  <NuxtLink to="https://x.com/thetoenurse" title="X" target="_blank">
                    <img
                        src="/icons8-twitterx.svg" alt="X badge"
                        title="X" width="48" height="48">
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                  class="block uppercase text-gray-600 text-sm font-semibold mb-2"
              >Useful Links</span
              >
                <ul class="list-unstyled">
                  <li>
                    <NuxtLink to="#about-us" :external="true" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">About Us</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#services" :external="true" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Services</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/blog" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Blog</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
              <span
                  class="block uppercase text-gray-600 text-sm font-semibold mb-2"
              >Other Resources</span
              >
                <ul class="list-unstyled">
                  <li>
                    <NuxtLink to="/terms" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Terms &amp; Conditions</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/privacy" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Privacy Policy</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-400" />
        <div
            class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-gray-600 font-semibold py-1">
              Copyright © {{date}} The Tow Nurse.
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<style scoped>

</style>
