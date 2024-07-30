<script setup lang="ts">
import Testimonial from "~/components/Testimonial.vue";
const testimonials = ref([
  {
    "id": 1,
    "rating": "4.0",
    "content": "I was a little nervous about getting my feet taken care of, but Tricia made it such a breeze! As a young guy in my 20s, I wasn't sure what to expect, but Tricia was so professional and friendly that I felt right at home. She even met me at a neutral location, which was super convenient for me. The foot care service itself was amazing - it was so relaxing and refreshing. I left feeling like I was walking on clouds! I'm definitely planning on scheduling another appointment with Tricia soon. If you're looking for a foot care specialist who knows how to make you feel comfortable and taken care of, Tricia is the way to go!",
    "author": "Rafael Cormier",
    "image": "michelle-and-andrew.jpg",
    "location": "Plainfield, MN"
  },
  {
    "id": 2,
    "rating": "5.0",
    "content": "I am extremely grateful to Tricia for the exceptional foot care services she provided to my father. He was unable to take care of his own feet due to his medical condition, but Tricia was patient and understanding throughout the entire process. She went above and beyond to ensure that my father was comfortable and well-cared for, and her expertise and professionalism were evident in every aspect of her work. I highly recommend Tricia to anyone in need of foot care services. Thank you, Tricia, for everything you do!",
    "author": "Kailey Reinger",
    "image": "michelle-and-andrew.jpg",
    "location": "Grand Junction, MN"
  },
  {
    "id": 3,
    "rating": "5.0",
    "content": "I never thought getting my feet taken care of could be so much fun! Tricia is the best foot care specialist out there! As a middle-aged guy, I was a little nervous about getting my feet touched, but Tricia made me feel so comfortable and at ease. I had some concerns about a possible fungus on my toe, but Tricia took care of it painlessly and quickly. We had such a great conversation during the appointment that I almost forgot I was getting my feet taken care of! I'm so grateful for Tricia's foot care service and would recommend her to anyone who wants to have a good time while taking care of their feet!",
    "author": "Nick Boyle",
    "image": "michelle-and-andrew.jpg",
    "location": "Evanston, MN"
  },

  {
    "id": 4,
    "rating": "5.0",
    "content": "My grandma and I had the best time getting our feet taken care of by Tricia! She came to our home, which made the experience even more comfortable and convenient. We loved sharing the foot care service together - it was such a fun bonding experience for us! Tricia was so friendly and professional, and she really knows her stuff. We left feeling pampered and refreshed, and we're already planning on scheduling another appointment - maybe we'll even add more family members next time! If you're looking for a foot care specialist who can bring the fun to your home, Tricia is the one to call!",
    "author": "Eloise Murphy",
    "image": "michelle-and-andrew.jpg",
    "location": "Middletown, MN"
  }
]);

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

// Define modules to be used
const modules = [Pagination, Navigation, EffectFade];

</script>

<template>
  <section id="testimonials" class="bg-white dark:bg-gray-900 py-24 ">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <span class="text-sm text-gray-600 dark:text-gray-400 font-medium text-center block mb-2 uppercase">Testimonial</span>
        <h2 class="text-4xl text-center font-bold text-gray-700 dark:text-gray-300">What our happy user says!</h2>
      </div>
      <!--Slider wrapper-->
      <Swiper
          :modules="modules"
          :slides-per-view="1"
          :spaceBetween="30"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
          :autoHeight="true"
          class="w-full md:w-2/3"
      >
        <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
          <Testimonial :testimonial="testimonial" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

</template>

<style scoped>
:global(:root) {
  --swiper-pagination-bullet-inactive-color: #9ca3af;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-color: #007aff;
  --swiper-theme-color: #007aff;
  --swiper-navigation-color: #007aff;
}
:global(.swiper-pagination-bullet) {
  background-color: var(--swiper-pagination-bullet-inactive-color);
  width: 1rem;
  height: 0.5rem;
  border-radius: .5rem;
}
:global(.swiper-pagination-bullet-active)  {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
:global(.swiper-button-next) {
  color: var(--swiper-navigation-color);
}
:global(.swiper-button-prev) {
  color: var(--swiper-navigation-color);
}
</style>
