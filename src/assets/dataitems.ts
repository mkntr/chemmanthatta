import {Navitem} from '../app/model/navitem'
import {Specialpooja } from '../app/model/specialpooja'
import {Darshan} from '../app/model/darshan'

export const NAVITEMS: Navitem[] = [
    {id:1, name:'Home'},
    {id:2, name:'Legend'},
    {id:3, name:'Deity'},
    {id:4, name:'Pooja'},
    {id:5, name:'Devaswom'},
    {id:6, name:'Festival'},
    {id:7, name:'Connect'}
]

export const TEMPLENAME = 'Chemmanthatta Mahadeva Kshethram'

export const TEMPLELOGO = 'LordShivaDancingPose.png'

export const POEM = [ 
"Oh! Chemmanthattappa!",
"Be the Guardian of all my Karmas,",
"Oh! Chemmanthattappa, the one who is the Purifier, be kind enough to protect me,",
"Oh! Sharmadhari, Be kind to remove all my mental agonies,",
"Oh! The Purifier, Goddess Gowri's Lord and the Eternal Shambo!",
"I am in  a perpetual agony due to my eternal desire to serve you,",
"Is there not even a drop of kindness to me, my Lord Neelakanta? the Saviour of life?",
"Oh! Parvathinatha! remove my sorrows, my Lord,",
"Will you not shower Your kindness on those who wish to serve your Holy Feet?",
"What is to be done to serve your Lordship?",
"How much more time would be required?",
"To remove all my miseries?",
"Lord Sankara! remove my sorrows, Parvathinatha, protect me,", 
"You be the Guardian of all my karmas, protect me, the Purifier!" ]

export const SPECIALPOOJA:Specialpooja[]=[
    {
        month:'Chingam (Aug -Sep)',
        moorthy:'Narasimha',
        description:'Special Pooja on Ashtami Rohini and Thiruvona Day' 
    },
    {
        month:'Kanni (Sep-Oct) ,  Thulam (Oct - Nov)',
        moorthy:'Bhagavati',
        description:'Navratri Pooja, Pooja veppu' 
    },
    {
        month:'Kanni (Sep-Oct) ,  Thulam (Oct - Nov)',
        moorthy:'Nagas',
        description:'Special Pooja (Ayilyam Day)' 
    },
    {
        month:'Vrischikam (Nov -Dec)',
        moorthy:'Saasthavu',
        description:'Special Pooja, kettunira' 
    },
    {
        month:'Vrischikam (Nov -Dec)',
        moorthy:'Bhagavati',
        description:'Trikala pooja' 
    },
    {
        month:'Dhanu (Dec - Jan)',
        moorthy:'Sivan',
        description:'Udayastamana Pooja - Thirvathira Day' 
    },
    {
        month:'Kumbham (Feb - Mar)',
        moorthy:'Sivan',
        description:'Shivratri pooja, Niramaala' 
    },
    {
        month:'Meenam (Mar - Apr)',
        moorthy:'Sivan',
        description:'Aarattu on Thiuvathira Day, Seeveli, Navakam, Panchakavyam, Shri Bhootabali poojas' 
    },
    {
        month:'Medam (Apr - May)',
        moorthy:'Narasimha, Sivan',
        description:'Vishukani Darshan' 
    },
    {
        month:'Mithunam (Jun - Jul)',
        moorthy:'Sivan',
        description:'Chitra Day - Consecration Day, 1000 Kudam Dhaara ' 
    },
    {
        month:'Mithunam (Jun - Jul)',
        moorthy:'Narasimha',
        description:'Navakam, Panchakavyam, Shri Bhootabali poojas' 
    },
    {
        month:'Mithunam (Jun - Jul)',
        moorthy:'All deities',
        description:'Kalasha pooja along with other special poojas' 
    },
    {
        month:'Karkitakam (Jul - Aug)',
        moorthy:'Bhagavati',
        description:'Trikala pooja ' 
    },
    {
        month:'Karkitakam (Jul - Aug)',
        moorthy:'Sivan',
        description:'Niraputthari' 
    },
    {
        month:'Pradosha Day',
        moorthy:'Sivan',
        description:'Special Poojas' 
    },
    {
        month:'Ayilyam Day',
        moorthy:'Nagas',
        description:'Naga pooja, Paalum noorum, Kettuthiri theliyikkal' 
    },
    {
        month:'Saturdays',
        moorthy:'Saasthavu',
        description:'Elluthiri (sesame seeds wick) theliyikkal ' 
    },
    {
        month:'First Friday',
        moorthy:'Ganapathi',
        description:'Ottappam Vazhipaadu' 
    }
]

export const DARSHAN:Darshan[] = [
    {
        daytime:"Morning", 
        time:'4.30', 
        ritual:'Temple Nada Opening'
    },
    {
        daytime:"Morning", 
        time:'5.00', 
        ritual:'Abhishekam'
    },
    {
        daytime:"Morning", 
        time:'5.15', 
        ritual:'Malar Nivedyam'
    },
    {
        daytime:"Morning", 
        time:'5.30', 
        ritual:'Usha Pooja'
    },
    {
        daytime:"Morning", 
        time:'5.45', 
        ritual:'Ganapathi Homam'
    },
    {
        daytime:"Morning", 
        time:'6.00', 
        ritual:'Prabata Pooja'
    },
    {
        daytime:"Morning", 
        time:'6.45', 
        ritual:'Vishnu Pooja'
    },
    {
        daytime:"Morning", 
        time:'8.30', 
        ritual:'Dhaara'
    },
    {
        daytime:"Morning", 
        time:'8.45', 
        ritual:'Uccha Pooja'
    },
    {
        daytime:"Morning", 
        time:'9.30', 
        ritual:'Temple Nada Closing'
    },
    {
        daytime:"Evening", 
        time:'5.00', 
        ritual:'Temple Nada Opening'
    },
    {
        daytime:"Evening", 
        time:'6.15', 
        ritual:'Deeparadhana'
    },
    {
        daytime:"Evening", 
        time:'7.00', 
        ritual:'Athaazha Pooja'
    },
    {
        daytime:"Evening", 
        time:'7.25', 
        ritual:'Thripuka'
    },
    {
        daytime:"Evening", 
        time:'7.30', 
        ritual:'Temple Nada Closing'
    }

]