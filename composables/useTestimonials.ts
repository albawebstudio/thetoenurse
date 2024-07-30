import { ref } from 'vue'

export interface Testimonial {
    id: number
    rating: string
    content: string
    author: string
    image: string
    location: string
}

export function useTestimonials() {
    const testimonials = ref<Testimonial[]>([
        {
            "id": 1,
            "rating": "4.0",
            "content": "I was a little nervous about getting my feet taken care of, but Trisha made it such a breeze! As a young guy in my 20s, I wasn't sure what to expect, but Trisha was so professional and friendly that I felt right at home. She even met me at a neutral location, which was super convenient for me. The foot care service itself was amazing - it was so relaxing and refreshing. I left feeling like I was walking on clouds! I'm definitely planning on scheduling another appointment with Trisha soon. If you're looking for a foot care specialist who knows how to make you feel comfortable and taken care of, Trisha is the way to go!",
            "author": "Rafael Cormier",
            "image": "michelle-and-andrew.jpg",
            "location": "Plainfield, MN"
        },
        {
            "id": 2,
            "rating": "5.0",
            "content": "I am extremely grateful to Trisha for the exceptional foot care services she provided to my father. He was unable to take care of his own feet due to his medical condition, but Trisha was patient and understanding throughout the entire process. She went above and beyond to ensure that my father was comfortable and well-cared for, and her expertise and professionalism were evident in every aspect of her work. I highly recommend Trisha to anyone in need of foot care services. Thank you, Trisha, for everything you do!",
            "author": "Kailey Reinger",
            "image": "michelle-and-andrew.jpg",
            "location": "Grand Junction, MN"
        },
        {
            "id": 3,
            "rating": "5.0",
            "content": "I never thought getting my feet taken care of could be so much fun! Trisha is the best foot care specialist out there! As a middle-aged guy, I was a little nervous about getting my feet touched, but Trisha made me feel so comfortable and at ease. I had some concerns about a possible fungus on my toe, but Trisha took care of it painlessly and quickly. We had such a great conversation during the appointment that I almost forgot I was getting my feet taken care of! I'm so grateful for Trisha's foot care service and would recommend her to anyone who wants to have a good time while taking care of their feet!",
            "author": "Nick Boyle",
            "image": "michelle-and-andrew.jpg",
            "location": "Evanston, MN"
        },

        {
            "id": 4,
            "rating": "5.0",
            "content": "My grandma and I had the best time getting our feet taken care of by Trisha! She came to our home, which made the experience even more comfortable and convenient. We loved sharing the foot care service together - it was such a fun bonding experience for us! Trisha was so friendly and professional, and she really knows her stuff. We left feeling pampered and refreshed, and we're already planning on scheduling another appointment - maybe we'll even add more family members next time! If you're looking for a foot care specialist who can bring the fun to your home, Trisha is the one to call!",
            "author": "Eloise Murphy",
            "image": "michelle-and-andrew.jpg",
            "location": "Middletown, MN"
        }
    ])

    const getTestimonialById = (id: number) => {
        return testimonials.value.find(testimonial => testimonial.id === id)
    }

    return {
        testimonials,
        getTestimonialById
    }
}
