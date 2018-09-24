var proxitiaJob = [
  {
    role: 'Ksatria',
    weapon: [
      'pedang',
      'tombak'
    ]
  },
  {
    role: 'Tabid',
    weapon: [
      'gada'
    ]
  },
  {
    role: 'Penyihir',
    weapon: [
      'tongkat']
  }
]

function inGame(name, job, weapon, ){
  if (name === ''){
    console.log('Silahkan isi nama kamu')
  }
  else{
    var isJobAvailable = false;
    for(var i = 0; i < proxitiaJob.length; i++){
      if (proxitiaJob[i].role === job){
        isJobAvailable = true;
      }
    }
    console.log(isJobAvailable)


  }



}
console.log(inGame('lowrance', 'Ksatria', 'gada'))

/*
[v] cek jika nama empty string tampilkan
  'Silahkan isi nama kamu'

cek jika job tidak sesuai option tampilkan
  'Silahkan pilih salah satu dari job {Ksatria}, {Tabid}, {Penyihir}'
jika job sesuai option tampilkan pesan
  'Selamat datang {nama} kamu login sebagai {job}'

cek jika weapon tidak sesuai job maka tampilkan
  '{job} {nama} kamu tidak dapat menggunakan {weapon} sebagai senjatamu'
jika weapon sesuai maka tampilkan
  '{job} {nama} kamu menggunakan {weapon} sebagai senjatamu'
*/
