console.log('hi');

const { createApp } = Vue

createApp({
data() {
    return {
    contacts: [
        {
            name: 'Doctor',
            avatar: './img/doctor.jpg',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Dottore!',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Qui serve il tuo aiuto!',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Allons y !',
                status: 'received'
                }
            ],
        },
        {
            name: 'Zyra',
            avatar: './img/img-zyra.png',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
            ],
        },
        {
            name: 'Rick',
            avatar: './img/rick.png',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
            ],
        },
        {
            name: 'Canoppo',
            avatar: './img/img-poro.png',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
            ],
        },
        {
            name: 'Morty',
            avatar: './img/morty.jpg',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
            ],
        },
        {
            name: 'Winion',
            avatar: './img/minion.webp',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
            ],
        }
    ]
    }
}
}).mount('#app')