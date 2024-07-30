import { ref } from 'vue'

export interface Service {
    slug: string
    image: string
    image_alt: string
    title: string
    short_description: string
}

export function useServices() {
    const services = ref<Service[]>( [
        {
            "slug": "nail-trimming",
            "image": "feet-2429438_1280.jpg",
            "image_alt": "nail trimming",
            "title": "Nail Trimming",
            "short_description": "Get your feet feeling fabulous with a nail trimming service from our certified foot care specialist—because everyone deserves a little TLC for their toes!",
        },
        {
            "slug": "callus-corn-reduction",
            "image": "simon-berger-HSy0QXIRafg-unsplash.jpg",
            "image_alt": "callus and corn reduction",
            "title": "Callus & Corn Reduction",
            "short_description": "Say goodbye to rough patches and hello to smooth, happy feet with our callus and corn reduction service—treat your feet to some pampering!",
        },
        {
            "slug": "ingrown-nail-relief",
            "image": "foot-care-3557103_1280.jpg",
            "image_alt": "ingrown nail relief",
            "title": "Ingrown Nail Relief",
            "short_description": "Kick ingrown nails to the curb with our relief service from a certified foot care specialist—because pain-free toes are happy toes!",
        },
        {
            "slug": "foot-massage",
            "image": "physical-therapy-2133286_1280.jpg",
            "image_alt": "Foot Massage",
            "title": "Foot Massage",
            "short_description": "Treat your feet to a blissful escape with our foot massage service from a certified foot care specialist—because your feet deserve a little relaxation too!",
        },
        {
            "slug": "foot-assessments",
            "image": "foot-care-6762750_1280.jpg",
            "image_alt": "Foot Assessments",
            "title": "Foot Assessments",
            "short_description": "Step into comfort with our foot assessment service from a certified foot care specialist—because happy feet start with the right foundation!",
        }
    ])

    const getServiceBySlug = (slug: string) => {
        return services.value.find(service => service.slug === slug)
    }

    return {
        services,
        getServiceBySlug
    }
}
