import { ref } from 'vue'

export interface Site {
    site: SiteClass;
}

export interface SiteClass {
    meta: MetaData;
    address: Address;
    email: Email;
    phone: Phone;
}

export interface MetaData {
    title: string;
    legalName: string;
    tagLine: string;
}

export interface Address {
    address1: string;
    address2: string|null;
    city: string;
    state: string;
    zip: string;
}

export interface Email {
    default: Default;
    privacy: Default;
}

export interface Default {
    account:  string;
    value: string;
}

export interface Phone {
    value:     string;
    formatted: string;
}

export function useSiteData() {
    const metaData = ref<MetaData>({
        title: "The Toe Nurse",
        legalName: "The Toe Nurse LLC",
        tagLine: "Step into your best self.",
    });
    const address = ref<Address> ({
        address1: "",
        address2: null,
        city: "Fridley",
        state: "MN",
        zip: "55432",
    });
    const emails = ref<Email> ({
        default: {
            account: "The Toe Nurse",
            value: "default@thetoenurse.com"
        },
        privacy: {
            account: "Privacy",
            value: "default@thetoenurse.com",
        }
    })
    const phone = ref<Phone> ({
        value: "+16516660143",
        formatted: "(651) 666-0143"
    })
    const siteData = ref<Site>({
        site: {
            meta: metaData.value,
            address: address.value,
            email: emails.value,
            phone: phone.value,
        },
    })

    const getSiteTitle = () => {
        return metaData.value.title;
    }
    const getEmailByKey = (key: keyof typeof emails.value) => {
        return emails.value[key];
    }

    return {
        siteData,
        metaData,
        address,
        emails,
        phone,
        getSiteTitle,
        getEmailByKey,
    }
}
