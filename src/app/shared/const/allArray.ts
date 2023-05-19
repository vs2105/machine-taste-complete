import { UserArr, medicinArr, orderArr } from "../models/interface"

 export const orderArray:Array<orderArr>=[
    {
        "id": "714-69-5617",
        "customerName": "Sally Whebell",
        "orderDate": "07-Aug-2020",
        "orderTime": "2:29 AM",
        "amount": 634.2,
        "orderStatus": "Delivered"
    },
    {
        "id": "752-42-3160",
        "customerName": "Emmery Grizard",
        "orderDate": "11-Mar-2020",
        "orderTime": "3:14 PM",
        "amount": 518.23,
        "orderStatus": "New"
    },
    {
        "id": "671-99-4274",
        "customerName": "Alano Carnaman",
        "orderDate": "09-Oct-2020",
        "orderTime": "11:41 AM",
        "amount": 400.34,
        "orderStatus": "New"
    },
    {
        "id": "359-13-4724",
        "customerName": "Huey Coombes",
        "orderDate": "16-Nov-2020",
        "orderTime": "6:35 PM",
        "amount": 559.06,
        "orderStatus": "Delivered"
    },
    {
        "id": "302-50-0415",
        "customerName": "Rex Pilsworth",
        "orderDate": "26-Feb-2020",
        "orderTime": "2:02 PM",
        "amount": 347.03,
        "orderStatus": "Delivered"
    },
    {
        "id": "332-24-5988",
        "customerName": "Lou Udale",
        "orderDate": "25-Jun-2020",
        "orderTime": "11:41 PM",
        "amount": 645.82,
        "orderStatus": "InTransit"
    },
    {
        "id": "239-32-6080",
        "customerName": "Penni Blight",
        "orderDate": "30-May-2020",
        "orderTime": "8:15 PM",
        "amount": 472.53,
        "orderStatus": "Packed"
    },
    {
        "id": "579-80-0751",
        "customerName": "Elberta Farress",
        "orderDate": "25-Jun-2020",
        "orderTime": "4:42 PM",
        "amount": 774.63,
        "orderStatus": "InTransit"
    },
    {
        "id": "494-62-5297",
        "customerName": "Danya Regan",
        "orderDate": "27-May-2020",
        "orderTime": "6:33 AM",
        "amount": 785.02,
        "orderStatus": "New"
    },
    {
        "id": "373-65-1146",
        "customerName": "Alexandros Fiddyment",
        "orderDate": "15-Mar-2020",
        "orderTime": "12:42 AM",
        "amount": 461.99,
        "orderStatus": "Packed"
    },
    {
        "id": "649-95-4216",
        "customerName": "Nissy Dalglish",
        "orderDate": "22-Dec-2019",
        "orderTime": "5:08 AM",
        "amount": 252.63,
        "orderStatus": "InTransit"
    }
]
export const medicinArray:Array<medicinArr>=[
    {
        "id": "56104-020",
        "medicineName": "Miconazole Nitrate",
        "medicineBrand": "Premier Brands of America Inc.",
        "expiryDate": "14-Aug-2012",
        "unitPrice": 993.01,
        "prescriptionRequired": false,
        "stock": 725
    },
    {
        "id": "0268-1239",
        "medicineName": "CHENOPODIUM ALBUM POLLEN",
        "medicineBrand": "ALK-Abello, Inc.",
        "expiryDate": "24-Jul-2029",
        "unitPrice": 632.22,
        "prescriptionRequired": false,
        "stock": 917
    },
    {
        "id": "17478-741",
        "medicineName": "Vancomycin Hydrochloride",
        "medicineBrand": "Akorn, Inc.",
        "expiryDate": "23-Feb-2015",
        "unitPrice": 814.3,
        "prescriptionRequired": true,
        "stock": 666
    },
    {
        "id": "58118-9931",
        "medicineName": "Neomycin and Polymyxin B Sulfates and Hydrocortisone",
        "medicineBrand": "Clinical Solutions Wholesale",
        "expiryDate": "05-Jun-2027",
        "unitPrice": 717.73,
        "prescriptionRequired": true,
        "stock": 161
    },
    {
        "id": "51345-119",
        "medicineName": "Pretty in Paris Kit",
        "medicineBrand": "Advanced Beauty Systems, Inc.",
        "expiryDate": "16-Jun-2025",
        "unitPrice": 140.15,
        "prescriptionRequired": true,
        "stock": 679
    },
    {
        "id": "43419-714",
        "medicineName": "Sulwhasoo Lumitouch Multi-Base",
        "medicineBrand": "AMOREPACIFIC",
        "expiryDate": "19-Nov-2016",
        "unitPrice": 559.2,
        "prescriptionRequired": false,
        "stock": 711
    },
    {
        "id": "48951-2044",
        "medicineName": "Berberis Oxalis",
        "medicineBrand": "Uriel Pharmacy Inc.",
        "expiryDate": "28-Jul-2013",
        "unitPrice": 299.93,
        "prescriptionRequired": true,
        "stock": 276
    },
    {
        "id": "29500-9077",
        "medicineName": "Personal Care Antibacterial Hand - Raspberry",
        "medicineBrand": "Personal Care Products, LLC",
        "expiryDate": "27-Jun-2027",
        "unitPrice": 233.95,
        "prescriptionRequired": false,
        "stock": 794
    },
    {
        "id": "51655-391",
        "medicineName": "Isoniazid",
        "medicineBrand": "Northwind Pharmaceuticals, LLC",
        "expiryDate": "26-Jul-2017",
        "unitPrice": 222.87,
        "prescriptionRequired": false,
        "stock": 357
    },
    {
        "id": "37000-394",
        "medicineName": "Old Spice High Endurance",
        "medicineBrand": "Procter & Gamble Manufacturing Company",
        "expiryDate": "09-May-2022",
        "unitPrice": 515.53,
        "prescriptionRequired": false,
        "stock": 683
    },
    {
        "id": "50419-252",
        "medicineName": "Adempas",
        "medicineBrand": "Bayer HealthCare Pharmaceuticals Inc.",
        "expiryDate": "31-Aug-2027",
        "unitPrice": 911.3,
        "prescriptionRequired": false,
        "stock": 755
    },
    {
        "id": "0024-0335",
        "medicineName": "Demerol",
        "medicineBrand": "sanofi-aventis U.S. LLC",
        "expiryDate": "12-Sep-2026",
        "unitPrice": 316.76,
        "prescriptionRequired": false,
        "stock": 86
    },
    {
        "id": "50436-4841",
        "medicineName": "CYCLOBENZAPRINE HYROCHLORIDE",
        "medicineBrand": "Unit Dose Services",
        "expiryDate": "23-Aug-2015",
        "unitPrice": 440.16,
        "prescriptionRequired": false,
        "stock": 169
    },
    {
        "id": "51345-055",
        "medicineName": "Bodycology",
        "medicineBrand": "Advanced Beauty Systems, Inc.",
        "expiryDate": "05-Apr-2023",
        "unitPrice": 809.08,
        "prescriptionRequired": false,
        "stock": 847
    },
    {
        "id": "37012-069",
        "medicineName": "Petroleum Skin Protectant",
        "medicineBrand": "Shopko",
        "expiryDate": "13-Jan-2024",
        "unitPrice": 496.31,
        "prescriptionRequired": false,
        "stock": 125
    },
    {
        "id": "61016-0002",
        "medicineName": "Antioxidant Day SPF 15",
        "medicineBrand": "Columbia Cosmetics Manufacturing, Inc.",
        "expiryDate": "03-Aug-2028",
        "unitPrice": 825.55,
        "prescriptionRequired": false,
        "stock": 68
    },
    {
        "id": "50730-4301",
        "medicineName": "Isopropyl alcohol Swabstick Sterile",
        "medicineBrand": "H and P Industries, Inc. dba Triad Group",
        "expiryDate": "09-Jul-2027",
        "unitPrice": 968.25,
        "prescriptionRequired": false,
        "stock": 325
    },
    {
        "id": "49348-788",
        "medicineName": "Sunmark Nicotine",
        "medicineBrand": "McKesson",
        "expiryDate": "14-Jul-2029",
        "unitPrice": 570.67,
        "prescriptionRequired": true,
        "stock": 803
    },
    {
        "id": "48951-3051",
        "medicineName": "Cerebellum Thalamus A Aurum",
        "medicineBrand": "Uriel Pharmacy Inc.",
        "expiryDate": "23-Jan-2013",
        "unitPrice": 79.27,
        "prescriptionRequired": false,
        "stock": 553
    },
    {
        "id": "49999-449",
        "medicineName": "Actos",
        "medicineBrand": "Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC",
        "expiryDate": "03-Jun-2028",
        "unitPrice": 853.26,
        "prescriptionRequired": false,
        "stock": 881
    },
    {
        "id": "57520-1032",
        "medicineName": "Hepatatox",
        "medicineBrand": "Apotheca Company",
        "expiryDate": "02-Jul-2016",
        "unitPrice": 961.08,
        "prescriptionRequired": false,
        "stock": 635
    },
    {
        "id": "0113-0437",
        "medicineName": "good sense pain relief pm",
        "medicineBrand": "L Perrigo Company",
        "expiryDate": "19-Nov-2012",
        "unitPrice": 219.57,
        "prescriptionRequired": true,
        "stock": 388
    },
    {
        "id": "64942-0810",
        "medicineName": "Axe",
        "medicineBrand": "Conopco Inc. d/b/a Unilever",
        "expiryDate": "12-Jul-2026",
        "unitPrice": 764.95,
        "prescriptionRequired": false,
        "stock": 280
    },
    {
        "id": "35356-512",
        "medicineName": "Carvedilol",
        "medicineBrand": "Lake Erie Medical DBA Quality Care Products LLC",
        "expiryDate": "25-Jun-2014",
        "unitPrice": 31.82,
        "prescriptionRequired": true,
        "stock": 799
    },
    {
        "id": "61671-004",
        "medicineName": "Face Moisturiser",
        "medicineBrand": "Milk & Co Pty Ltd",
        "expiryDate": "19-Sep-2017",
        "unitPrice": 871.64,
        "prescriptionRequired": true,
        "stock": 135
    },
    {
        "id": "49884-678",
        "medicineName": "Nifedipine",
        "medicineBrand": "Par Pharmaceutical, Inc.",
        "expiryDate": "29-Jun-2021",
        "unitPrice": 7.66,
        "prescriptionRequired": false,
        "stock": 929
    },
    {
        "id": "68084-593",
        "medicineName": "Sucralfate",
        "medicineBrand": "American Health Packaging",
        "expiryDate": "01-Nov-2023",
        "unitPrice": 939.65,
        "prescriptionRequired": true,
        "stock": 670
    },
    {
        "id": "57955-0126",
        "medicineName": "Bio Reset/Jet Lag",
        "medicineBrand": "King Bio Inc.",
        "expiryDate": "14-Dec-2024",
        "unitPrice": 916.97,
        "prescriptionRequired": true,
        "stock": 167
    },
    {
        "id": "42507-083",
        "medicineName": "ibu profen cold and sinus",
        "medicineBrand": "HyVee Inc",
        "expiryDate": "10-Sep-2012",
        "unitPrice": 955.91,
        "prescriptionRequired": false,
        "stock": 105
    }
]

export const UserArray:Array<UserArr>=[
    {
        "id": 1,
        "profilePic": "https://robohash.org/estinvoluptas.jpg?size=50x50&set=set1",
        "fullName": "Clementius McGillreich",
        "dob": "20-Feb-1997",
        "gender": "Male",
        "currentCity": "Bayambang",
        "currentCountry": "Philippines"
    },
    {
        "id": 2,
        "profilePic": "https://robohash.org/quosquiatenetur.bmp?size=50x50&set=set1",
        "fullName": "Almira Hawson",
        "dob": "26-Jun-1990",
        "gender": "Female",
        "currentCity": "Rousínov",
        "currentCountry": "Czech Republic"
    },
    {
        "id": 3,
        "profilePic": "https://robohash.org/illumcupiditatequia.png?size=50x50&set=set1",
        "fullName": "Ed Bonnesen",
        "dob": "30-Nov-1995",
        "gender": "Male",
        "currentCity": "Kendari",
        "currentCountry": "Indonesia"
    },
    {
        "id": 4,
        "profilePic": "https://robohash.org/quaequibusdamharum.png?size=50x50&set=set1",
        "fullName": "Mozelle Fallawe",
        "dob": "02-Apr-1997",
        "gender": "Female",
        "currentCity": "Nanganga",
        "currentCountry": "Tanzania"
    },
    {
        "id": 5,
        "profilePic": "https://robohash.org/minusdolordolorem.bmp?size=50x50&set=set1",
        "fullName": "Annadiana Fenelon",
        "dob": "10-Apr-1993",
        "gender": "Female",
        "currentCity": "Tân Phú",
        "currentCountry": "Vietnam"
    },
    {
        "id": 6,
        "profilePic": "https://robohash.org/officiisblanditiisdeleniti.bmp?size=50x50&set=set1",
        "fullName": "Rancell O'Rourke",
        "dob": "23-Aug-1999",
        "gender": "Male",
        "currentCity": "Hongshan",
        "currentCountry": "China"
    },
    {
        "id": 7,
        "profilePic": "https://robohash.org/nesciuntsuscipitquo.png?size=50x50&set=set1",
        "fullName": "Sheena Narup",
        "dob": "09-Nov-1990",
        "gender": "Female",
        "currentCity": "Batutua",
        "currentCountry": "Indonesia"
    },
    {
        "id": 8,
        "profilePic": "https://robohash.org/quasiminusexplicabo.png?size=50x50&set=set1",
        "fullName": "Agnesse Vallack",
        "dob": "09-Feb-2000",
        "gender": "Female",
        "currentCity": "Tučepi",
        "currentCountry": "Croatia"
    },
    {
        "id": 9,
        "profilePic": "https://robohash.org/ipsummodiminima.jpg?size=50x50&set=set1",
        "fullName": "Olia Watkinson",
        "dob": "09-Jun-1998",
        "gender": "Female",
        "currentCity": "Komsomol’s’ke",
        "currentCountry": "Ukraine"
    },
    {
        "id": 10,
        "profilePic": "https://robohash.org/quisuntest.bmp?size=50x50&set=set1",
        "fullName": "Adams Castagnone",
        "dob": "19-Oct-2001",
        "gender": "Male",
        "currentCity": "Dārayyā",
        "currentCountry": "Syria"
    },
    {
        "id": 11,
        "profilePic": "https://robohash.org/estmagnitempore.jpg?size=50x50&set=set1",
        "fullName": "Glyn Chatterton",
        "dob": "15-Jun-1995",
        "gender": "Male",
        "currentCity": "Qarāwul",
        "currentCountry": "Afghanistan"
    },
    {
        "id": 12,
        "profilePic": "https://robohash.org/omnisquaeratsequi.png?size=50x50&set=set1",
        "fullName": "Karoly Sedgefield",
        "dob": "19-Dec-1991",
        "gender": "Male",
        "currentCity": "Selaawi",
        "currentCountry": "Indonesia"
    },
    {
        "id": 13,
        "profilePic": "https://robohash.org/reprehenderitquialaudantium.jpg?size=50x50&set=set1",
        "fullName": "Constantino Scanlin",
        "dob": "17-Oct-1991",
        "gender": "Male",
        "currentCity": "Madīnat ash Shamāl",
        "currentCountry": "Qatar"
    },
    {
        "id": 14,
        "profilePic": "https://robohash.org/placeatcumaut.jpg?size=50x50&set=set1",
        "fullName": "Bernardine Applegate",
        "dob": "26-Dec-1996",
        "gender": "Female",
        "currentCity": "San Roque",
        "currentCountry": "Philippines"
    },
    {
        "id": 15,
        "profilePic": "https://robohash.org/rerumquiaccusamus.jpg?size=50x50&set=set1",
        "fullName": "Elnore Gomer",
        "dob": "24-Sep-1992",
        "gender": "Female",
        "currentCity": "Lingquan",
        "currentCountry": "China"
    },
    {
        "id": 16,
        "profilePic": "https://robohash.org/ullamquodest.bmp?size=50x50&set=set1",
        "fullName": "Sherwood Ritelli",
        "dob": "09-Jan-1992",
        "gender": "Male",
        "currentCity": "Lainqu",
        "currentCountry": "China"
    },
    {
        "id": 17,
        "profilePic": "https://robohash.org/perspiciatismollitiasunt.jpg?size=50x50&set=set1",
        "fullName": "Hunter Nacci",
        "dob": "09-Apr-1998",
        "gender": "Male",
        "currentCity": "Yaroslavskiy",
        "currentCountry": "Russia"
    },
    {
        "id": 18,
        "profilePic": "https://robohash.org/exercitationemearumquae.bmp?size=50x50&set=set1",
        "fullName": "Teodora Tremblot",
        "dob": "21-Jan-2000",
        "gender": "Female",
        "currentCity": "Vónitsa",
        "currentCountry": "Greece"
    },
    {
        "id": 19,
        "profilePic": "https://robohash.org/quoatquenam.jpg?size=50x50&set=set1",
        "fullName": "Constancy Smurfitt",
        "dob": "08-Jan-1993",
        "gender": "Female",
        "currentCity": "Tongkiling",
        "currentCountry": "Indonesia"
    },
    {
        "id": 20,
        "profilePic": "https://robohash.org/beataeipsaperspiciatis.bmp?size=50x50&set=set1",
        "fullName": "Jeremias Bettles",
        "dob": "27-Dec-1990",
        "gender": "Male",
        "currentCity": "Chipyela",
        "currentCountry": "Malawi"
    },
    {
        "id": 21,
        "profilePic": "https://robohash.org/earumutab.bmp?size=50x50&set=set1",
        "fullName": "Ernest Aingell",
        "dob": "24-Aug-1992",
        "gender": "Male",
        "currentCity": "Malainen Luma",
        "currentCountry": "Philippines"
    },
    {
        "id": 22,
        "profilePic": "https://robohash.org/utaperiamfacilis.bmp?size=50x50&set=set1",
        "fullName": "Barbaraanne Haygreen",
        "dob": "28-Dec-1999",
        "gender": "Female",
        "currentCity": "Kajanan",
        "currentCountry": "Indonesia"
    },
    {
        "id": 23,
        "profilePic": "https://robohash.org/etmolestiaeinventore.png?size=50x50&set=set1",
        "fullName": "Lian Thorogood",
        "dob": "12-Sep-1996",
        "gender": "Female",
        "currentCity": "Ban Houakhoua",
        "currentCountry": "Laos"
    },
    {
        "id": 24,
        "profilePic": "https://robohash.org/autenimquo.bmp?size=50x50&set=set1",
        "fullName": "Robinett Dankov",
        "dob": "20-Sep-1994",
        "gender": "Female",
        "currentCity": "Midland",
        "currentCountry": "United States"
    },
    {
        "id": 25,
        "profilePic": "https://robohash.org/fugitrerumex.bmp?size=50x50&set=set1",
        "fullName": "Delphine Treagus",
        "dob": "17-Jun-1998",
        "gender": "Female",
        "currentCity": "Navatat",
        "currentCountry": "Philippines"
    },
    {
        "id": 26,
        "profilePic": "https://robohash.org/voluptatibustemporibusanimi.bmp?size=50x50&set=set1",
        "fullName": "Rufus Paz",
        "dob": "29-Nov-2001",
        "gender": "Male",
        "currentCity": "Ishioka",
        "currentCountry": "Japan"
    },
    {
        "id": 27,
        "profilePic": "https://robohash.org/quaeeligendiconsectetur.jpg?size=50x50&set=set1",
        "fullName": "Lea Walenta",
        "dob": "14-Jan-1996",
        "gender": "Female",
        "currentCity": "Suay",
        "currentCountry": "Philippines"
    },
    {
        "id": 28,
        "profilePic": "https://robohash.org/cumqueveroiste.bmp?size=50x50&set=set1",
        "fullName": "Mateo Padula",
        "dob": "26-Mar-1991",
        "gender": "Male",
        "currentCity": "Gifu-shi",
        "currentCountry": "Japan"
    }
]