import {Navitem} from '../app/model/navitem'
import {Specialpooja } from '../app/model/specialpooja'
import {Darshan} from '../app/model/darshan'
import { Vazhipadu } from '../app/model/vazhipadu'

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

export const VAZHIPADU:Vazhipadu[] = [
    {
        whom:'All',
        what:'Vilakku'
    },
    {
        whom:'All',
        what:'Pin Vilakku'
    },
    {
        whom:'All',
        what:'Kida Vilakku'
    },
    {
        whom:'All',
        what:'Nei Vilakku'
    },
    {
        whom:'All',
        what:'Nivedyam'
    },
    {
        whom:'All',
        what:'Maala'
    },
    {
        whom:'All',
        what:'Thirumudi Maala'
    },
    {
        whom:'All',
        what:'Pushpanjali'
    },
    {
        whom:'Ganapathi',
        what:'Karuka Maala'
    },
    {
        whom:'Ganapathi',
        what:'Ganapathi Homam'
    },
    {
        whom:'Ganapathi',
        what:'Kootu Ganapathi Homam'
    },
    {
        whom:'Ganapathi',
        what:'Ottappam'
    },
    {
        whom:'Sivan , Vishnu',
        what:'Tulasi Maala'
    },   
    {
        whom:'Sivan , Vishnu',
        what:'Sahasranama Pushpanjali'
    },
    {
        whom:'Sivan',
        what:'Kulaka / Koovala Maala'
    },
    {
        whom:'Sivan',
        what:'Dhaara'
    },
    {
        whom:'Sivan',
        what:'Sri Rudra Dhaara'
    },
    {
        whom:'Sivan',
        what:'Kulaka / Koovala Pushpanjali'
    },
    {
        whom:'Sivan',
        what:'Mrityunjaya Pushpanjali'
    },   
    {
        whom:'Sivan',
        what:'Swayamvara Pushpanjali'
    },   
    {
        whom:'Sivan',
        what:'108 Kulaka / Koovala Pushpanjali'
    },    
    {
        whom:'Sivan',
        what:'Aikamathya Sooktha Pushpanjali'
    }, 
    {
        whom:'Sivan',
        what:'Mrityunjaya Homam'
    }, 
    {
        whom:'Sivan',
        what:'101  Kudam Dhaara'
    }, 
    {
        whom:'Sivan',
        what:'41 Kudam Dhaara'
    }, 
    {
        whom:'Sivan',
        what:'Uma maheswara Pooja'
    },
    {
        whom:'Sivan',
        what:'1000 Kudam Dhaara'
    },    
    {
        whom:'Sivan',
        what:'Udayasthamana Pooja'
    },
    {
        whom:'Sivan',
        what:'Maha Mrityunjaya Homam'
    },  
    {
        whom:'Bhagavathi',
        what:'Vidya Sooktha Pushpanjali'
    },
    {
        whom:'Bhagavathi',
        what:'Raktha Pushpanjali'
    },
    {
        whom:'Bhagavathi',
        what:'Saraswathi Pooja'
    },
    {
        whom:'Bhagavathi',
        what:'Bhuvaneswari Pooja'
    },
    {
        whom:'Vishnu',
        what:'Shankhabhishekam'
    }, 
    {
        whom:'Vishnu',
        what:'Purusha Sooktha Pushpanjali'
    },
    {
        whom:'Vishnu',
        what:'Malar Nivedyam'
    },
    {
        whom:'Vishnu',
        what:'Sarkara Nivedyam'
    },
    {
        whom:'Vishnu',
        what:'Kadalipazha Nivedyam'
    },   
    {
        whom:'Vishnu',
        what:'Sudarsana Homam'
    }, 
    {
        whom:'Vishnu',
        what:'Thiruvona Pooja'
    }, 
    {
        whom:'Vishnu',
        what:'Panakam'
    }, 
    {
        whom:'Navagraha',
        what:'Raahu Pooja'
    }, 
    {
        whom:'Navagraha',
        what:'Navagraha Pooja'
    },
    {
        whom:'Naagas',
        what:'Naaga Pooja'
    },
    {
        whom:'Naagas',
        what:'Manjal Podi Aadal'
    },
    {
        whom:'Saasthaavu',
        what:'Neerajanam'
    },
    {
        whom:'Saasthaavu',
        what:'Ellu Thiri'
    },
    {
        whom:'TBD',
        what:'Baagya Sooktha Pushpanjali'
    },
    {
        whom:'TBD',
        what:'SatruSamhaara Pushpanjali'
    },
    {
        whom:'TBD',
        what:'Santhana Gopala Pushpanjali'
    },
    {
        whom:'TBD',
        what:'Aayur Sooktha Pushpanjali'
    },
    {
        whom:'TBD',
        what:'Paayasam'
    },
    {
        whom:'TBD',
        what:'Paal Paayasam'
    },
    {
        whom:'TBD',
        what:'Ellu Paayasam'
    },
    {
        whom:'TBD',
        what:'Samana Paayasam'
    },
    {
        whom:'TBD',
        what:'Pizhinju Paayasam'
    },
    {
        whom:'TBD',
        what:'Kootu Paayasam'
    },
    {
        whom:'TBD',
        what:'Thila Homam'
    },
    {
        whom:'TBD',
        what:'Karuka Homam'
    },
    {
        whom:'TBD',
        what:'Trikaala Pooja'
    },
    {
        whom:'TBD',
        what:'Nitya Pooja'
    },
    {
        whom:'TBD',
        what:'Oru Nerathe Pooja'
    },
    {
        whom:'TBD',
        what:'Paalum Podi'
    },
    {
        whom:'TBD',
        what:'Trimaduram'
    },
    {
        whom:'TBD',
        what:'Chandanam Chaarthal'
    },
    {
        whom:'TBD',
        what:'Niramaala'
    },
    {
        whom:'TBD',
        what:'Maala Poojikkan'
    },
    {
        whom:'TBD',
        what:'Vella Ari Nivedyam'
    },
    {
        whom:'TBD',
        what:'Nei Japikkal'
    },
    {
        whom:'TBD',
        what:'Bhagavat Seva'
    },
    {
        whom:'TBD',
        what:'Muttirakkal'
    },
    {
        whom:'TBD',
        what:'Avil Nivedyam'
    },
    {
        whom:'TBD',
        what:'Muzhu Kaapu'
    },
    {
        whom:'TBD',
        what:'Thulabhaaram'
    },
    {
        whom:'TBD',
        what:'Choroonu'
    },
    {
        whom:'TBD',
        what:'KettuNira'
    },
    {
        whom:'TBD',
        what:'Vivaham'
    },
    {
        whom:'TBD',
        what:'Vahana Pooja'
    },
    {
        whom:'TBD',
        what:'Nanaya Para'
    },
    {
        whom:'TBD',
        what:'Nel Para'
    },
    {
        whom:'TBD',
        what:'Ari Para'
    },
    {
        whom:'Brahmarakshassu',
        what:'Rakshassanu Paayasam'
    }
]