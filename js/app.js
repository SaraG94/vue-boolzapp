const { createApp } = Vue

const contacts = [
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
            message: 'Andiamo a fare danni?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Aspetta che i miei semi attecchiscano.',
            status: 'received'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Sono solo fiori innocui ;) ',
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
            message: 'Rick?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Dove sei?',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Sul bancone da lavoro! Mi sono trasformato in un cetriolo!',
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
            message: 'Hai ancora biscotti?',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Poro poro poooro',
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
            message: 'Ehi! É anadato bene il viaggio con tuo zio?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Sono diventato il re dei cavalieri del sole.',
            status: 'received'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto nella norma',
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
            message: 'Se noi li teniamo impegati..',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Prendi il nexsus?',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Consideralo fatto!',
            status: 'received'
            }
        ],
    },
];

createApp({
    data() {
        return {
            contacts :contacts,
            currentContact: 0,
            status: 'received',
            inputValue: '',
            inputSearchValue:'',
        }
    },

    methods:{
        setCurrentChat(indexContact){

            this.currentContact = indexContact 
            //reset messaggio scritto, e non inviato, ogni volta che cambio chat
            this.inputValue = ''
        },

        addMsg(){
            const newMsg = this.inputValue.trim()
            const msg = {date:'10/01/2020 16:35:22',message:newMsg, status: 'sent'}
            
            if(newMsg === ''){
                return
            }

            this.contacts[this.currentContact].messages.push(msg)
			this.inputValue = ''
            

            setTimeout(()=>{
                const newMsgRecived = {date:'10/01/2020 16:35:25', message:'Certo', status: 'received' }
                this.contacts[this.currentContact].messages.push(newMsgRecived);
                
            },1000)
        },

        setHours(date){

            const timeDate = date;
            const hourMinuteSecond = timeDate.split(' ');
            //const hourMinute =hourMinuteSecond[1].split(' ');
            
            return hourMinuteSecond[1]
        },

        isHidden(contact){
            const name= contact.name.toLowerCase() //destrutturazione const{name} = contact 
            const search = this.inputSearchValue.trim().toLowerCase()
            const result = !name.includes(search)

            return result //ritorno i nomi che non includono search
        }
    }
}).mount('#app')