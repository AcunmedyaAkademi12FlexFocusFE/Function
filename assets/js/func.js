// {
//   -> scope alanı - scope kapsama alanı
// }

// süslü parantez içinde kod gördüğümüzde
// o kodlar scope içindedir

// global tanım
// const ad = 'Nihat';
// const soyad = 'Duysak';

// let veya const arasında kararsız kalırsanız mutlaka let kullanın

// {
//   {
//     console.log(`${ad} ${soyad}`);
//   }
// }

// == > birbirlerinin eşit olup olmadığını kontrol eder
// === > hem birbirleri eşit mi hem de tipleri eşmi / eşit mi diye kontrol eder
// if (ad.toLocaleLowerCase('tr') === 'nihat') {
//   let mesaj = `Merhaba ${ad}`
//   if(soyad.toLocaleLowerCase('tr') === 'duysak') {
//     mesaj += `${soyad}`;
//     console.log(mesaj);
//   }
// } else {
//   console.log('Tanıyamadık sen kimsin ?');
// }

// Fonksiyon - Function
// fonksiyonlar emir kipi ile yazılır
// doSomething
// önemli bir programcılık prensibi olarak
// bir fonksiyon bir iş yapar
// yaptıracağınız her bir işlem bir fonksiyon olmalı
// her bir fonksiyon tek bir görevi olmalı
// birden fazla işlem yapabilir ama totalde bir iş yapar

// findUser -> kullanıcıyı bulur ve bana döner

// function adimiSoyle

// function sayMyName() {
//   const firstName = prompt('Adını söyle: ');
//   console.log(firstName);
// }

// fonksiyonu çağırdığınız zaman scope içindeki kodlar çalışır
// fonksiyonu çağırma cümlesi fonksiyonun adını yazıp parantez aç kapa yapmaktır.

// sayMyName();

// fonksiyonlar kullanılma amaçlarına bağlı olarak
// parametreler (değerler) alırlar
// parametreler sıralıdır, yazıldığı sıra ile gönderilir
// parametlerde atlama yapamazsınız (henüz)

function sayMyName(firstName, lastName, age, isStudent) {
  console.log(firstName, lastName, age);

  // ternary ? - kısa if - shorthand if
  console.log(isStudent ? 'Öğrenci' : 'Öğrenci değil');
}

// sayMyName('Nihat', 'Duysak', 36, false);
// const soyad = 'Duysak';
// sayMyName('Leo', soyad, 7, false);
// sayMyName('Buğra', 'Erdoğan', 25, true);

// fonksiyonlar genellikle iş yapar ve
// edindiği sonucu geri döner
// dönmek için anahtar kelimemiz 'return'
// return kelimesini gördüğünüzde akış orada kesilir

function sum(number1, number2, number3) {

  console.log('Buradaki kod çalışır, aşağıdaki console çalışmaz');
  
  return number1 + number2 + number3;
  // return gördüğü yerde
  // ilgili satırdaki kodları çalıştırır

  // return'ün altındaki kaç tane kod olursa olsun
  // hiç bir şekilde çalıştırmaz
  
  // örnek olsun diye yazdım !!!
  console.log('bu sayılar toplandı');
  console.log('bu sayılar toplandı');
  console.log('bu sayılar toplandı');
  console.log('bu sayılar toplandı');
}

// sum(5, 10, 15);
const total = sum(5, 10, 15);
console.log(total);
console.log(sum(5, 10, 150));