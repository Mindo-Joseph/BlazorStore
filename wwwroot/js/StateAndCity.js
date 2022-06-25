// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


function choose_state() {
    let choose_name = document.getElementById("State");
    let choose_name_value = choose_name.options[choose_name.selectedIndex].value;
    let city = document.getElementById("City");
    city.innerHTML = "";
    let city_name = [];
    if (choose_name_value == "Mombasa") {
        city_name = [
            "Select a City",
            'Changamwe',
            'Jomvu',
            'Kisauni',
            'Nyali',
            'Likoni',
            'Mvita'
        ];
    } else if (choose_name_value == "Kwale") {
        city_name = [
            "Select a City",
            'Msambweni',
            'Lungalunga',
            'Matuga',
            'Kinango'
        ]
    } else if (choose_name_value == "Kilifi") {
        city_name = [
            "Select a City",
            'Kilifi North',
            'Kilifi South',
            'Kaloleni',
            'Rabai',
            'Ganze',
            'Malindi',
            'Magarini'
        ];
    } else if (choose_name_value == "Tana River") {
        city_name = ["Select a City", 'Garsen', 'Galole', 'Bura'];
    } else if (choose_name_value == "Lamu") {
        city_name = ["Select a City", 'Lamu East', 'Lamu West'];
    } else if (choose_name_value == "Taita-Taveta") {
        city_name = [
            "Select a City",
            'Taveta',
            'Wundanyi',
            'Mwatate',
            'Voi'
        ];
    } else if (choose_name_value == "Garissa") {
        city_name = [
            "Select a City",
            'Garissa Township',
            'Balambala',
            'Lagdera',
            'Dadaab',
            'Fafi',
            'Ijara'
        ];
    } else if (choose_name_value == "Wajir") {
        city_name = [
            "Select a City",
            'Wajir North',
            'Wajir East',
            'Tarbaj',
            'Wajir West',
            'Eldas',
            'Wajir South'
        ];
    } else if (choose_name_value == "Mandera") {
        city_name = [
            "Select a City",
            'Mandera West',
            'Banissa',
            'Mandera North',
            'Mandera South',
            'Mandera East',
            'Lafey'
        ];
    } else if (choose_name_value == "Marsabit") {
        city_name = [
            "Select a City",
            'Moyale',
            'North Horr',
            'Saku',
            'Laisamis'
        ];
    } else if (choose_name_value == "Isiolo") {
        city_name = ["Select a City", 'Isiolo North', 'Isiolo South'];
    } else if (choose_name_value == "Meru") {
        city_name = [
            "Select a City",
            'Igembe South',
            'Igembe Central',
            'Igembe North',
            'Tigania West',
            'Tigania East',
            'North Imenti',
            'Buuri',
            'Central Imenti',
            'South Imenti'
        ];
    } else if (choose_name_value == "Tharaka-Nithi") {
        city_name = ["Select a City", 'Maara', "Chuka/Igambang'ombe", 'Tharaka'];
    } else if (choose_name_value == "Embu") {
        city_name = [
            "Select a City",
            'Manyatta',
            'Runyenjes',
            'Mbeere South',
            'Mbeere North'
        ];
    } else if (choose_name_value == "Kitui") {
        city_name = [
            "Select a City",
            'Mwingi North',
            'Mwingi West',
            'Mwingi Central',
            'Kitui West',
            'Kitui Rural',
            'Kitui Central',
            'Kitui East',
            'Kitui South'
        ];
    } else if (choose_name_value == "Machakos") {
        city_name = [
            "Select a City",
            'Masinga',
            'Yatta',
            'Kangundo',
            'Matungulu',
            'Kathiani',
            'Mavoko',
            'Machakos Town',
            'Mwala'
        ];
    } else if (choose_name_value == "Makueni") {
        city_name = [
            "Select a City",
            'Mbooni',
            'Kilome',
            'Kaiti',
            'Makueni',
            'Kibwezi West',
            'Kibwezi East'
        ];
    } else if (choose_name_value == "Nyandarua") {
        city_name = [
            "Select a City",
            'Kinangop',
            'Kipipiri',
            'Ol Kalou',
            'Ol Jorok',
            'Ndaragwa'
        ];
    } else if (choose_name_value == "Nyeri") {
        city_name = [
            "Select a City",
            'Tetu',
            'Kieni',
            'Mathira',
            'Othaya',
            'Mukurweini',
            'Nyeri Town'
        ];
    } else if (choose_name_value == "Kirinyaga") {
        city_name = [
            "Select a City",
            'Mwea',
            'Gichugu',
            'Ndia',
            'Kirinyaga Central'
        ];
    } else if (choose_name_value == "Murang'a") {
        city_name = [
            "Select a City",
            'Kangema',
            'Mathioya',
            'Kiharu',
            'Kigumo',
            'Maragwa',
            'Kandara',
            'Gatanga'
        ];
    } else if (choose_name_value == "Kiambu") {
        city_name = [
            "Select a City",
            'Gatundu South',
            'Gatundu North',
            'Juja',
            'Thika Town',
            'Ruiru',
            'Githunguri',
            'Kiambu',
            'Kiambaa',
            'Kabete',
            'Kikuyu',
            'Limuru',
            'Lari'
        ];
    } else if (choose_name_value == "Turkana") {
        city_name = [
            "Select a City",
            'Turkana North',
            'Turkana West',
            'Turkana Central',
            'Loima',
            'Turkana South',
            'Turkana East'
        ];
    } else if (choose_name_value == "West Pokot") {
        city_name = [
            "Select a City",
            'Kapenguria',
            'Sigor',
            'Kacheliba',
            'Pokot South'
        ];
    } else if (choose_name_value == "Samburu") {
        city_name = ["Select a City", 'Samburu West', 'Samburu North', 'Samburu East'];
    } else if (choose_name_value == "Trans-Nzoia") {
        city_name = [
            "Select a City",
            "Anaconda",
            'Kwanza',
            'Endebess',
            'Saboti',
            'Kiminini',
            'Cherangany'
        ];
    } else if (choose_name_value == "Uasin Gishu") {
        city_name = [
            "Select a City",
            'Soy',
            'Turbo',
            'Moiben',
            'Ainabkoi',
            'Kapseret',
            'Kesses'
        ];
    } else if (choose_name_value == "Elgeyo-Marakwet") {
        city_name = [
            "Select a City",
            'Marakwet East',
            'Marakwet West',
            'Keiyo North',
            'Keiyo South'
        ];
    } else if (choose_name_value == "Nandi") {
        city_name = [
            "Select a City",
            'Tinderet',
            'Aldai',
            'Nandi Hills',
            'Chesumei',
            'Emgwen',
            'Mosop'
        ];
    } else if (choose_name_value == "Baringo") {
        city_name = [
            "Select a City",
            'Tiaty',
            'Baringo  North',
            'Baringo Central',
            'Baringo South',
            'Mogotio',
            'Eldama Ravine'
        ];
    } else if (choose_name_value == "Laikipia") {
        city_name = ["Select a City", 'Laikipia West', 'Laikipia East', 'Laikipia North'];
    } else if (choose_name_value == "Narok") {
        city_name = [
            "Select a City",
            'Kilgoris',
            'Emurua Dikirr',
            'Narok North',
            'Narok East',
            'Narok South',
            'Narok West'
        ];
    } else if (choose_name_value == "Nakuru") {
        city_name = [
            "Select a City",
            'Molo',
            'Njoro',
            'Naivasha',
            'Gilgil',
            'Kuresoi South',
            'Kuresoi North',
            'Subukia',
            'Rongai',
            'Bahati',
            'Nakuru Town West',
            'Nakuru Town East'
        ];
    } else if (choose_name_value == "Kajiado") {
        city_name = [
            "Select a City",
            'Kajiado North',
            'Kajiado Central',
            'Kajiado East',
            'Kajiado West',
            'Kajiado South'
        ];
    } else if (choose_name_value == "Kericho") {
        city_name = [
            "Select a City",
            'Kipkelion East',
            'Kipkelion West',
            'Ainamoi',
            'Bureti',
            'Belgut',
            'Sigowet/Soin'
        ];
    } else if (choose_name_value == "Bomet") {
        city_name = [
            "Select a City",
            'Sotik',
            'Chepalungu',
            'Bomet East',
            'Bomet Central',
            'Konoin'
        ];
    } else if (choose_name_value == "Kakamega") {
        city_name = [
            "Select a City",
            'Lugari',
            'Likuyani',
            'Malava',
            'Lurambi',
            'Navakholo',
            'Mumias West',
            'Mumias East',
            'Matungu',
            'Butere',
            'Khwisero',
            'Shinyalu',
            'Ikolomani'
        ];
    } else if (choose_name_value == "Vihiga") {
        city_name = [
            "Select a City",
            'Vihiga',
            'Sabatia',
            'Hamisi',
            'Luanda',
            'Emuhaya'
        ];
    } else if (choose_name_value == "Bungoma") {
        city_name = [
            "Select a City",
            'Mt. Elgon',
            'Sirisia',
            'Kabuchai',
            'Bumula',
            'Kanduyi',
            'Webuye East',
            'Webuye West',
            'Kimilili',
            'Tongaren'
        ];
    } else if (choose_name_value == "Busia") {
        city_name = [
            "Select a City",
            'Teso North',
            'Teso South',
            'Nambale',
            'Matayos',
            'Butula',
            'Funyula',
            'Budalangi'
        ];
    } else if (choose_name_value == "Siaya") {
        city_name = [
            "Select a City",
            'Ugenya',
            'Ugunja',
            'Alego Usonga',
            'Gem',
            'Bondo',
            'Rarieda'
        ];
    } else if (choose_name_value == "Kisumu") {
        city_name = [
            "Select a City",
            'Kisumu East',
            'Kisumu West',
            'Kisumu Central',
            'Seme',
            'Nyando',
            'Muhoroni',
            'Nyakach'
        ];
    } else if (choose_name_value == "Homa Bay") {
        city_name = [
            "Select a City",
            'Kasipul',
            'Kabondo Kasipul',
            'Karachuonyo',
            'Rangwe',
            'Homa Bay Town',
            'Ndhiwa',
            'Suba North',
            'Suba South'
        ];
    } else if (choose_name_value == "Migori") {
        city_name = [
            "Select a City",
            'Rongo',
            'Awendo',
            'Suna East',
            'Suna West',
            'Uriri',
            'Nyatike',
            'Kuria West',
            'Kuria East'
        ];
    } else if (choose_name_value == "Kisii") {
        city_name = [
            "Select a City",
            'Bonchari',
            'South Mugirango',
            'Bomachoge Borabu',
            'Bobasi',
            'Bomachoge Chache',
            'Nyaribari Masaba',
            'Nyaribari Chache',
            'Kitutu Chache North',
            'Kitutu Chache South'
        ];
    } else if (choose_name_value == "Nyamira") {
        city_name = [
            "Select a City",
            'Kitutu Masaba',
            'West Mugirango',
            'North Mugirango',
            'Borabu'
        ];
    } else if (choose_name_value == "Nairobi") {
        city_name = [
            "Select a City",
            'Westlands',
            'Dagoretti North',
            'Dagoretti South',
            'Langata',
            'Kibra',
            'Roysambu',
            'Kasarani',
            'Ruaraka',
            'Embakasi South',
            'Embakasi North',
            'Embakasi Central',
            'Embakasi East',
            'Embakasi West',
            'Makadara',
            'Kamukunji',
            'Starehe',
            'Mathare'
        ];
    } else if (choose_name_value == "") {
        city_name = ["Select a City"];
    }
    for (each = 0; each < city_name.length; each ++) {
        let option = document.createElement("option");
        if (city_name[each] == "Select a City") {
            option.value = "";
            option.text = city_name[each];
        } else {
            option.value = city_name[each];
            option.text = city_name[each];
        } city.add(option);
    }
}
