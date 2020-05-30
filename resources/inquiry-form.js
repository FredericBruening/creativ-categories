// import Vue from 'vue'
import VCalendar from 'v-calendar';
// import axios from 'axios';
import swal from 'sweetalert';
import Form from './components/Form'

window.swal = swal
// window.axios = axios

Vue.use(VCalendar, {
    firstDayOfWeek: 2,
    locale: 'de'
});

let inquiryForm = new Vue({
    el: '#inquiry-form',
    mounted() {
        let token = document.head.querySelector('meta[name="jtl_token"]')
        let sid = document.head.querySelector('meta[name="sid"]')

        this.token = token.content
        this.sid = sid.content
    },
    data: {
        token: '',
        sid: '',
        positionColors: [
            { name: 'Gold' },
            { name: 'Silber' },
            { name: 'Neon' },
            { name: 'Silberreflex' },
            { name: 'fotorealischer Druck' }
        ],
        productTypes: {
            Textilien: [
                {
                    name: 'T-Shirt Unisex',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item1.png'
                },
                {
                    name: 'T-Shirt V-Neck',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item2.png'
                },
                {
                    name: 'Girly-Shirt',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item3.png'
                },
                {
                    name: 'Girly-V-Neck',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item4.png'
                },
                {
                    name: 'Polo-Shirt-Unisex',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item5.png'
                },
                {
                    name: 'Polo-Shirt-Girly',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item6.png'
                },
                {
                    name: 'Longsleeve-T-Shirt',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item7.png'
                },
                {
                    name: 'Tanktop',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item8.png'
                },
                {
                    name: 'Tanktop-Girly',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item9.png'
                },
                {
                    name: 'Funktionsshirt',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item10.png'
                },
                {
                    name: 'Sweatshirt',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item11.png'
                },
                {
                    name: 'Hoody',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item12.png'
                },
                {
                    name: 'Hoody-Jacket',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item13.png'
                },
            ],
            'Werbeartikel & Accessoires': [
                {
                    name: 'Tasse ',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item14.png'
                },
                {
                    name: 'Lanyards',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item15.png'
                },
                {
                    name: 'Kugelschreiber',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item16.png'
                },
                {
                    name: 'Basecap',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item17.png'
                },
                {
                    name: 'Basecap 2',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item18.png'
                },
            ],
            Taschen: [
                {
                    name: 'Tragetasche',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item19.png'
                },
                {
                    name: 'Turnbeutel',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item20.png'
                },
            ],
            'anderes Produkt': [
                {
                    name: 'sonstiges',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item21.png'
                }
            ],
        },
        positionTypes: {
            Textilien: [
                {
                    name: 'vorne',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/positions/position1.png'
                },
                {
                    name: 'linke Brust',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/positions/position5.png'
                },

                {
                    name: 'hinten',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/positions/position4.png'
                },
                {
                    name: 'linker Arm',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/positions/position2.png'
                },
                {
                    name: 'rechter Arm',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/positions/position3.png'
                },
                {
                    name: 'Sonstige',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/positions/position6.png'
                },
            ],
            Taschen: [
                {
                    name: 'Druckseite A',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/positions/position7.png'
                },
                {
                    name: 'Druckseite B',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/positions/position8.png'
                },
            ],
            'anderes Produkt': [
                {
                    name: 'other',
                    imagePath: '/mediafiles/Bilder/icons/enquiry-form/positions/position1.png'
                }
            ]
        },
        printTypes: [
            { name: 'Siebdruck' },
            { name: 'Flexdruck' },
            { name: 'Flockdruck' },
            { name: 'Digitaldirektdruck' },
            { name: 'Digitaltransferdruck' },
            { name: 'Stickerei' },
            { name: 'Sublimationsdruck' }],
        sendMethods: [
            { name: 'Versand' },
            { name: 'Selbstabholung in unserem Werk Ludwigsfelde' }
        ],
        qualities: [
            { name: 'Promotion' },
            { name: 'Basic' },
            { name: 'Premium' },
            { name: 'Bio' },
            { name: 'selbst angelieferte Textilien' }
        ]

    },
    components: { 'inquiry-form': Form }
})

