* Dev Akademi Sahibinden 18 (C/I viewer)
* Click-Impression değerlerini kullanıcı özelliklerine göre görselleştiren full-stack web projesi.


* Kurulum : 
```
    yarn 
    yarn build
    yarn start 
```

* Database : 

Tüm datalar json formatında database klasörü altında bulunuyor mongoimport aracılığı ile mongo veritabanına yüklenerek kullanılabilir.
* Örnek :
```
 
 mongoimport --db sahibinden-akademi --collection CIStat --type json --file all_data.json --jsonArray
  

``` 
* Çalıştırırken dikkat edilmesi gerekenler 
config klasörü altında deployment.json içeriğinde MONGO_URL ve API_URL bilgilerinin doğru olduğundan emin olun.
Uygulama 9999 nolu port da çalışır.
değiştirmek için terminalde çalıştırmadan önce export PORT=<istenen_port> yapılabilir.

* Hedef : 
Bu projede kullanıcının bilgilerine göre (cinsiyet, yaşadığı şehir, evlilik durumu) Click ve Impression verilerini görselleştiren bir web uygulaması yapılmaya çalışırdı.

* Açıklama : 
Verilen endpointlerin bu proje için yetersiz olduğunu düşünmem beni yeni bir api yazmaya itti.
Verilen tüm verileri mongo veritabanına aktardıktan sonra şehir,cinsiyet bilgilerine göre Click ve Impression sayılarını veren endpointleri oluşturdum ve bunun için ön tarafta bunu görselleştirecek 
bir frontend uygulaması yapmaya çalıştım.

* Eksik Kısımlar : 
Api ye istek alıp gelen verileri mapleyip chart js aracılığıyla gösterecek frontend bölümü yazılamadı.


# Api endpointler: 
* /api/cistats/
* /api/cistats/country
* /api/cistats/martialStatus
* /api/cistats/gender

