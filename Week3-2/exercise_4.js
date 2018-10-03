input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 

function dataHandling2(input){
    input.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input)
    var date = input[3].split('/');
    // console.log(date)
    var bulan = '';
    switch(Number(date[1])){
        case 01: bulan = 'January';
        break;
        case 02: bulan = 'February';
        break;
        case 03: bulan = 'March';
        break;
        case 04: bulan = 'April';
        break;
        case 05: bulan = 'May';
        break;
        case 06: bulan = 'Jun';
        break;
        case 07: bulan = 'July';
        break;
        case 08: bulan = 'August';
        break;
        case 09: bulan = 'September';
        break;
        case 10: bulan = 'October';
        break;
        case 11: bulan = 'November';
        break;
        case 12: bulan = 'December';
        break;    
    }
    console.log(bulan)
    for (var i = 0; i < date.length ; i++){
        // console.log(date[i]) 
    }
    var result = date.sort((a, b) => b - a);
    console.log(result)
    var date2 = input[3].split('/')
    var join = date2.join('-')
    console.log(join)

    var name = input[1]
    var name2 = name.substr(0,15)
    console.log(name2)



    
  

}

dataHandling2(input)
/*
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */