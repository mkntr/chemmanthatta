import {Navitem} from '../app/model/navitem'
import {Specialpooja } from '../app/model/specialpooja'
import {Darshan} from '../app/model/darshan'
import { Vazhipadu } from '../app/model/vazhipadu'
import { Gallery } from '../app/model/gallery'
import { Administration } from '../app/model/administration'

export const GALLERY:Gallery[]=[
    {
        imgSrc:'Gallery1.jpg', 
        headerText:'Thiruvutsavam-2023', 
        paraText:'Main Temple Decoration'
    },
    {
        imgSrc:'Gallery2.jpg', 
        headerText:'Thiruvutsavam-2023', 
        paraText:'Side Temple View'
    },
    {
        imgSrc:'Gallery3.jpg', 
        headerText:'Thiruvutsavam-2023', 
        paraText:'Side Temple View'
    }
]

export const NAVITEMS: Navitem[] = [
    {id:1, name:'Home'},
    {id:2, name:'Legend'},
    {id:3, name:'Deity'},
    {id:4, name:'Pooja'},
    {id:5, name:'Devaswom'},
    {id:6, name:'Gallery'},
    {id:7, name:'Connect'}
]

export const TEMPLENAME = 'Chemmanthatta Mahadeva Kshethram'

export const TEMPLELOGO = 'Chemmanthattappan.png'
// 'TempleView2.jpg',
export const IMGCAROUSEL = ['TempleView1.jpg','TempleView3.jpg','TempleView4.jpg','TempleView5.jpg',
                        'TempleView6.jpg','TempleView7.jpg','TempleView8.jpg','TempleView9.jpg','TempleView10.jpg']

export const UPIPAY = 'upipay.jpg'

export const ADDRESS = [
    'General Secretary ',
    'Uranma Devasom Board ',
    'Paduthala, Kochi', 
    'Pallikkaavu Madam', 
    'Postal code: 680623',
    'Kerala',
    'Telephone: +91 04842402751'
]

export const ADMINISTRATION : Administration[] = [
    {
        what:'General Secretary', 
        whom:'Azhvanchery Krishnan Thamprakkal',
        imgSrc:'avatarimage.png'
    },
    {
        what:'Administrative Officer', 
        whom:'AK Chandrasekharan Nair',
        imgSrc:'avatarimage.png'
    }
]

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

export const MALAYALAMPOEM = [
"ചെമ്മന്തട്ടപ്പാ ...",
"കർമ്മസാക്ഷി ആയിടുമെന്റെ",
"ചെമ്മന്തട്ടപ്പാ നിർമ്മലാംഗ രക്ഷിക്കേണമേ", 
"ശർമ്മധാരി ഭവാനെൻറെ കന്മഷങ്ങൾ അകറ്റേണം",
"നിർമ്മലാംഗ ഗൗരീപതേ ശാശ്വതശംഭോ",
"നിത്യമായി സേവിച്ചീടുവാൻ ആർത്തിപെരുത്തു",
"കഷ്ട്ടപെട്ടു വലഞ്ഞു ഞാൻ",
"നിൻ കരുണ ലേശമില്ലേ നീലകണഁठ ജയസിദ്ധോ",
"ശങ്കരായെൻ  സങ്കടത്തെ പാർവ്വതീകാന്ത നീക്കേണം",
"പാദസേവാ ചെയ്യുന്നവരിൽ കൃപയില്ലാതായോ",
"പാലനത്തിൽ എന്താണിനിമേൽ",
"എത്രകാലം ഇനി വേണം", 
"എൻ ദുരിതം നീങ്ങിടുവാൻ", 
"ശങ്കരായെൻ സങ്കടത്തെ പാർവ്വതീനാഥാ രക്ഷിയ്ക്ക", 
"കർമ്മസാക്ഷി ആയിടുമെന്റെ ചെമ്മന്തട്ടപ്പാ", 
"നിർമ്മലാംഗ രക്ഷിക്കേണമേ"
]

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
        whom:'Bhagavathi, Sivan, Vishnu',
        what:'Baagya Sooktha Pushpanjali'
    },
    {
        whom:'Bhagavathi, Sivan',
        what:'SatruSamhaara Pushpanjali'
    },
    {
        whom:'Vishnu',
        what:'Santhana Gopala Pushpanjali'
    },
    {
        whom:'Sivan',
        what:'Aayur Sooktha Pushpanjali'
    },
    {
        whom:'Bhagavathi, Sivan',
        what:'Sarkara Paayasam'
    },
    {
        whom:'Vishnu',
        what:'Paal Paayasam'
    },
    {
        whom:'Saasthaavu',
        what:'Ellu Paayasam'
    },
    {
        whom:'Sivan',
        what:'Pizhinju Paayasam'
    },
    {
        whom:'Bhagavathi, Sivan',
        what:'Kootu Paayasam'
    },
    {
        whom:'Sivan',
        what:'Thila Homam (Pitru Dosa Nivaranam)'
    },
    {
        whom:'Sivan',
        what:'Karuka Homam (Balarishta Nivaranam)'
    },
    {
        whom:'Bhagavathi',
        what:'Trikaala Pooja'
    },
    {
        whom:'All',
        what:'Nitya Pooja'
    },
    {
        whom:'All',
        what:'Oru Nerathe Pooja'
    },
    {
        whom:'Naagas',
        what:'Noorum Paalum'
    },
    {
        whom:'Sivan, Vishnu',
        what:'Trimaduram'
    },
    {
        whom:'Vishnu',
        what:'Chandanam Chaarthal'
    },
    {
        whom:'Sivan',
        what:'Niramaala'
    },
    {
        whom:'Saasthaavu',
        what:'Maala Poojikkan (Sabarimala kettunira)'
    },
    {
        whom:'Naagas',
        what:'Vella Ari Nivedyam'
    },
    {
        whom:'Sivan',
        what:'Nei Japikkal'
    },
    {
        whom:'Bhagavathi',
        what:'Bhagavat Seva'
    },
    {
        whom:'Bhagavathi',
        what:'Muttirakkal'
    },
    {
        whom:'Vishnu',
        what:'Avil Nivedyam'
    },
    {
        whom:'Vishnu',
        what:'Muzhu Kaapu'
    },
    {
        whom:'Sivan Gopura Nadayil',
        what:'Thulabhaaram'
    },
    {
        whom:'Sivan Gopura Nadayil',
        what:'Choroonu'
    },
    {
        whom:'Saasthaavu',
        what:'KettuNira'
    },
    {
        whom:'Sivan Gopura Nadayil',
        what:'Vivaham'
    },
    {
        whom:'Sivan Gopura Nadayil',
        what:'Vahana Pooja'
    },
    {
        whom:'Sivan Gopura Nadayil',
        what:'Naanaya Para'
    },
    {
        whom:'Sivan Gopura Nadayil',
        what:'Nel Para'
    },
    {
        whom:'Sivan Gopura Nadayil',
        what:'Ari Para'
    },
    {
        whom:'Brahmarakshassu',
        what:'Rakshassanu Paayasam'
    }
]