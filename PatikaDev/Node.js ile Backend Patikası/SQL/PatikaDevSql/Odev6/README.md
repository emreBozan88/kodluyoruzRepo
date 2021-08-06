# Ödev 6
---

1. **film** tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?

        Select ROUND(AVG(rental_rate),2) from film

2. **film** tablosunda bulunan filmlerden kaç tanesi 'C' karekteri ile başlar?

        Select COUNT(title) from film Where title LIKE 'C%'

3. **film** tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?

        Select MAX(length) from film Where rental_rate=0.99

4. **film** tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?

        Select COUNT(DISTINCT replacement_cost) from film Where length>150


