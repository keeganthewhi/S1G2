/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZ EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığın kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanı öneririz.
Bunun için cevabı direk console'a logla veya çağırdığın fonksiyondan dönen değeri console'a logla.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. surucuYasi isimli bir değişken yaz ve bir sayı ata.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

let surucuYasi = 21
if (surucuYasi >= 18) {

  console.log(true)
  
}
else {
  console.log(false)
}

/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. 2 değişken tanımla ve bunlara değerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

let birinciDeger = 22
let ikinciDeger = 21

if (birinciDeger > ikinciDeger) {

  birinciDeger = ikinciDeger*2
  console.log(birinciDeger)
}


/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/

let sayi = "1999"


console.log(Number(sayi));

/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsin)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığın fonsiyonu test edin. Console'da sonucu 28 olarak görmelisin.
*/


function carpma(a,b) {
  let sonuc = a*b
  return sonuc;
  
}
console.log(carpma(7,4))


/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yap:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımla.
 2. Gelen değeri kullanarak köpeğin yaşını hesapla (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi(insanYasi) {
 let kopeginYasi = insanYasi * 7
 return kopeginYasi
}
console.log(kopeginYasi(8))


/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yap.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli


OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/
function oyun(oyuncuSecimi, bilgisayarSecimi) {
  if (
      (oyuncuSecimi === "Taş" && bilgisayarSecimi === "Makas") ||
      (oyuncuSecimi === "Makas" && bilgisayarSecimi === "Kağıt") ||
      (oyuncuSecimi === "Kağıt" && bilgisayarSecimi === "Taş")
  ) {
      return "Kazandın!";
  }
  else if (
      (oyuncuSecimi === "Taş" && bilgisayarSecimi === "Kağıt") ||
      (oyuncuSecimi === "Makas" && bilgisayarSecimi === "Taş") ||
      (oyuncuSecimi === "Kağıt" && bilgisayarSecimi === "Makas")
  ) {
      return "Kaybettin!";
  }
  else if (oyuncuSecimi === bilgisayarSecimi) {
      return "Beraberlik";
  }
}


console.log(oyun("Taş", "Kağıt"));
console.log(oyun("Kağıt", "Kağıt"));
console.log(oyun("Makas", "Taş"));
console.log(oyun("Taş", "Taş"));
// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Öncelikle aşağıdakileri yap:
1. Bilgisayarın seçimini rastgele oluşturacağım bir fonksiyon tanımla. Örn: 
   function bilgisayarinSecimi() {
   
   }
2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımla
3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
5. Oluşan değeri geri dönün

Şimdi kendi seçtiğin bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığın oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/

function bilgisayarinSecimi() {
  var rastgeleSayi = Math.random();
  if (rastgeleSayi < 1/3) {
      return "Tas";
  } else if (rastgeleSayi < 2/3) {
      return "Kagit";
  } else {
      return "Makas";
  }
}

function game(oyuncuSecimi, bilgisayarSecimi) {
  if (
      (oyuncuSecimi === "Tas" && bilgisayarSecimi === "Makas") ||
      (oyuncuSecimi === "Makas" && bilgisayarSecimi === "Kagit") ||
      (oyuncuSecimi === "Kagit" && bilgisayarSecimi === "Tas")
  ) {
      return "Kazandin!";
  }
  else if (
      (oyuncuSecimi === "Tas" && bilgisayarSecimi === "Kagit") ||
      (oyuncuSecimi === "Makas" && bilgisayarSecimi === "Tas") ||
      (oyuncuSecimi === "Kagit" && bilgisayarSecimi === "Makas")
  ) {
      return "Kaybettin!";
  }
  else if (oyuncuSecimi === bilgisayarSecimi) {
      return "Beraberlik";
  }
}

console.log(game("Tas", bilgisayarinSecimi()));
console.log(game("Kagit", bilgisayarinSecimi()));
console.log(game("Makas", bilgisayarinSecimi()));
console.log(game("Kağıt", "Kağıt"));

/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamla:
1. Kilometre değerini argüman olarak alın.
2. Aldığın bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

function milDonusturucu(km) {
  let mile = km * 0.621371
  return mile

}
milDonusturucu(10);

//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yap:
1. Santimetre değerini argüman olarak alın.
2. Aldığın bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

function feetDonusturucu(Santimetre) {
  let feet = Santimetre / 30.48
  return feet;
}
console.log(feetDonusturucu(68))
/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yap:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/
let maymunsayisi = 5

function cocukSarkisi(maymunsayisi) {

  console.log(`${maymunsayisi} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`)

}
cocukSarkisi(maymunsayisi)
function ikincicagirici() {
for (let i = 0; i < 5; i++) {
 
  console.log(`${maymunsayisi} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`)
  maymunsayisi = maymunsayisi-1
 
}
}
ikincicagirici();

/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yap.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

function notHesapla(ogrenciNotu) {


  if (ogrenciNotu <= 100  &&  ogrenciNotu >= 90) {
  
     console.log("'A aldın'")
      
  }
    if (ogrenciNotu <= 89 &&  ogrenciNotu >= 80) {
        console.log("'B aldın'")
  
 }
    if (ogrenciNotu <= 79&&  ogrenciNotu >= 70) {
  console.log("'C aldın'")
    
   }
          if (ogrenciNotu <= 69  &&  ogrenciNotu >= 60) {
    console.log("'D aldın'")
      
     }
            if (ogrenciNotu <= 59  && ogrenciNotu >= 0) {
              console.log ("'F aldın'");
     }
       
    
         
    }
  
notHesapla(97);
/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/



function sesliHarfSayaci(cumle) {
let sesliHarfler= 'aeıioöuü'
let count=0
let yenicumle = cumle.split("")

    for (let i = 0; i < yenicumle.length; i++) {
         if (sesliHarfler.indexOf(yenicumle[i]) !== -1){
         count++;
    }
    
    }
    console.log(`${count} tane sesli harf var`) 
}
    










function buyukkucuk(cumle) {
  let buyukHarf = 0;
  let kucukHarf = 0;

  
  let yenicumle = cumle.split('').filter(char => /[a-zA-Z]/.test(char));

  for (let i = 0; i < yenicumle.length; i++) {
    if (yenicumle[i] === yenicumle[i].toUpperCase()) {
      buyukHarf++;
    }
    if (yenicumle[i] === yenicumle[i].toLowerCase()) {
      kucukHarf++;
    }
  }

  console.log(`${buyukHarf} tane buyuk harf var`);
  console.log(`${kucukHarf} tane kucuk harf var`);
}



      
  sesliHarfSayaci("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  buyukkucuk("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
  













/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
