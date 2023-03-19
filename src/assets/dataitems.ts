import {Navitem} from '../app/model/navitem'
import { Specialpooja } from '../app/model/specialpooja'

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

// export const SPECIALPOOJA = [
// "Special poojas to Lord Vishnu (Narasimha Murthy) on Ashtami Rohini day and Thiruvonam day in the month of Chingam.",
// "Navratri is important during Kanni Thulam months. In the symbolic presence of Goddess Saraswati, Pooja veppu is conducted and special poojas are held for the Nagas on the day of Ayilyam",
// "Mandala time is important in the month of Vrischikam. For Saastha, special poojas and kettunira are conducted. Trikala pooja is important for Bhagavati.",
// "Udayastamana Puja is a special ritual conducted for Sri Mahadev during the month of Sagittarius Thirvathira Nakshatra",
// "Shivratri is very important in the month of Kumbham month. Evening niramala and other special poojas are conducted",
// "Aarattu is fixed on Thiruvathira day in the month of Meenam and Thiruvutsavam is flagged off. Shiveli, Navakam, Panchakavyam, Sribhutabali all stays important. Aarattu stands on the eighth day.",
// "Vishukani Darshan is offered in the presence of Shri Mahadev and Lord Vishnu (Narasimhamurthy) in the month of Medam.",
// "In the month of Mithunam Chitra Nakshatra, consecration day to Shri Mahadev with Thousand Kudam Dhaara offered. For Maha Vishnu Navakam, Panchakavyam, Shri Bhootabali performed. One Kalasham to the sub-deities along with other poojas. 14 weeks of irikkal is important.",
// "In the month of Karkitakam, Trikala pooja for Bhagavati stands special. Niraputtari is offered to Shri Mahadeva.",
// "Also, special poojas to Sri Mahadev performed during Pradosha of every month and naga pooja, paalum noorum, kettuthiri theliyikkal to the Nagas on the Ayilyam day are conducted.",
// "On Saturdays, Elluthiri (sesame seeds wick) theliyikkal is important for Saastha",
// "On the First Friday of every Malayalam month, Ottappam vazhipadu is specially performed for Lord Ganesha."
// ]

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