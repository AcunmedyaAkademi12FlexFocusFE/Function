// String Methodları

// 1)
// .lenght -> string'in karakter sayısını verir

// 2)
// .toUpperCase() -> Tüm harfleri büyük yapar 
// .toLowerCase() -> Tüm harfleri küçük yapar

// let isim = prompt('Adınız ?');
// console.log(isim.toUpperCase());
// console.log(isim.toLowerCase());

// 3)
// let ad = 'nihat';
// console.log(ad.toUpperCase());
// console.log(ad.toLowerCase());

// console.log(ad.toLocaleLowerCase('en'));
// console.log(ad.toLocaleUpperCase('tr'));

// 4)
// .includes() -> Belirtien alt metin içeriyor mu diye kontrol eder.
// içinde var mı diye kontrol eder.
// bize bool bir değer döner ve büyük küçük harf duyarlılığı vardır

// let metin = 'JavaScript Öğreniyorum';
// console.log(metin);
// console.log(metin.includes('Script Ö')); -> true döner
// console.log(metin.includes('script Ö')); -> false döner

// 5) 
// .startsWith()
// Belirli bir karakterle başlayıp başlamadığını kontrol eder
// Çıktısı boolen değer olur

// let kelime = 'Frontend';
// console.log(kelime.startsWith('Front'));

// 6)
// .endsWith()
// Belirli bir karakterle bitip bitmediğini kontrol eder

// 7)
// .indexOf() -> Belirtilen karakterin / kelimenin / bilginin 
// kaçıncı index'te olduğunu söyler
// indexler 0'dan başlar
// birden fazla bir harf veya aynı tür eleman var ise
// ilkinin indexini gösterir

// let cumle = 'Bugün javascriptte functionları göreceğiz';
// console.log(cumle.indexOf('a'));

// 8)
// .replace()
// Belirli bir metni başka bir metin ile değiştirir

// let cumle = 'Bugün javascriptte functionları göreceğiz';
// console.log(cumle);
// önce değiştirilecek kelime
// sonra yeni kelimeyi yazıyoruz
// console.log(cumle.replace('functionları', 'string methodları'));

// 9)
// .trim()
// Başındaki ve sonundaki boşlukları tamamen kaldırır
// koşullarda kontrol ederken başında ve sonunda boşluk olması
// ciddi problem yaratır. Bu sorunu ortadan kaldırmak için trim kullanırız;

// let eposta = prompt('e-posta adresiniz ?');
// let pass = prompt('Şifreniz ?');
// console.log(pass);
// console.log(pass.trim().length); // -> chaining - yani zincirleme yapabilirsiniz
