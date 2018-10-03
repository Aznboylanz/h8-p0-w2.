var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(n){
    for( var i = 0 ; i < n.length; i++){
        console.log('Number ID', n[i][0]);
        console.log('Full Name', n[i][1]);
        console.log('TTL' , n[i][2]);
        console.log('Hobby', n[i][3]);
    }
}

dataHandling(input)

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca