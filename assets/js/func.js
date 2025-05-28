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
// const total = sum(5, 10, 15);
// console.log(total);
// console.log(sum(5, 10, 150));

// function uygunMu
function isEligible(gender, age) {
  // if(gender === 'E' && age >= 18) {
  //   return true;
  // } else {
  //   return false;
  // }

  // return'ün akışı kestiği alternatif olarak
  // aşağıdaki şekilde de kullanabiliriz

  if(gender === 'E' && age >= 18) {
    return true; // üstteki koşulu sağladığı an akış burada kesilir
  }
  return false;
}

const firstName = 'Nihat';
const lastName = 'Duysak';
const gender = 'E';
const age = 36;
const canBeSoldier = isEligible(gender, age);
// console.log(canBeSoldier);

const firstName1 = 'Leo';
const lastName1 = 'Duysak';
const gender1 = 'E';
const age1 = 7;
const canBeSoldier1 = isEligible(gender1, age1);
// console.log(canBeSoldier1);

// localStorage ve 
// sessionStorage -> kapatınca silinir, oturum açıkken çalışır

// localStorage -> Candır

// localStorage.clear(); // -> tüm localStorage'ı siler

// Burada JSON formatı yardımımıza koşuyor.
// JSON -> JavaScript Object Notation
// tüm programlama dilleri tarafından kabul görmüş
// veri türüdür. Tüm programlama dilleri bu veri türünü
// okuyup üzerine işlem yapabilir

// Avantajı -> bizim programımız ne olursa olsun hangi dil olursa olsun
// bir js objesi şeklinde ulaşabiliyoruz
// JSON sayesinde elimde string olan bir veri var / oluyor.

// parse -> string bir veriyi programatik olarak kullanmak üzere
// veri tipi olarak dönüştürmeye yarar

// JSON.parse -> string formatında json verilerini
// dizi veya objeye çevirebiliriz

// JSON.stringify -> elinde olan bir dizi ya da objeyi 
// string formatında json'a çevirebiliriz

let students = [
  {
    firstName: 'Nihat',
    lastName: 'Duysak'
  },
  {
    firstName: 'Leo',
    lastName: 'Duysak'
  },
];

// localStorage
// key + value olarak çalışır / kayıt eder
// bir anahtar kelime + saklanacak değer

// let age = 36;
// alttaki 2 kodda aynı işlemi yapar. En alttaki modern hali
// localStorage.setItem('yas', age);
// localStorage.yas = age;

// localStorage.ogrenciler = JSON.stringify(students);
// JSON.parse(localStorage.ogrenciler);

// eğer localStroage kullanmak istiyorsak ve localStorage'a bir dizi
// veya obje kaydedeceksek bunu sadece string olarak yapabildiğimiz
// için elimizde dizi/obj string yapısına dönmelidir

// Bunun için JSON.stringify(dizi/obje) yöntemini kullanıyoruz
// bu sayede artık elimizde dizi/obj string'e dönüyor ve
// localStorage'a eklenebilir hale geliyor

// eğer localStorage'dan string olarak okudğumuz bir dizi / obj
// tekrar kod içinde kullanmak istiyorsak o zaman 
// JSON.parse(dizi/obj) yapmalıyız.

// localStorage'da kesin ve kesin şifre veya gizli bir bilgi SAKLAMAYINIZ !!!!

// localStorage'a kayıt eder
localStorage.setItem('ogrenciler', JSON.stringify(students));

// localStorage'dan veriyi çeker
let depodakiOgrenciler = localStorage.getItem('ogrenciler');
// console.log(depodakiOgrenciler);

// localStorage'dan aldığımız veriyi diziye çevirme / orjinal haline getirme / parse etme
let parseOgrenciler = JSON.parse(depodakiOgrenciler);

// console.log(parseOgrenciler);
// console.log(students);

let ad = 'Nihat';
// localStorage.ad = ad;

// localStorage.removeItem('ad'); // -> verilen key değerini siler
// localStorage.clear(); // -> tüm veriyi siler

// Yarın CRUD işlemi yapacağız