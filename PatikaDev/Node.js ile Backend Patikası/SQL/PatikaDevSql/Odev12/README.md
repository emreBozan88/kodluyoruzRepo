# Ödev 12
---

1. **film** tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?

        Select title,length,(Select ROUND(AVG(length),3) AS Avg_length_film from film) from film Where length>(Select AVG(length) from film)

2. **film** tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?

        Select COUNT(rental_rate) AS enYuksekRentalRate from film Where rental_rate=ANY (Select MAX(rental_rate) from film)

3. **film** tablosunda en düşük rental_rate ve en düşük replacement_cost değerlerine sahip filmleri sıralayınız.

        Select title,rental_rate,replacement_cost from film where rental_rate =(Select MIN(rental_rate) from film) AND replacement_cost =(Select MIN(replacement_cost) from film)

4. **payment** tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.(İlk 5 Müsteri Sıralandı)

        Select customer_id,first_name,last_name from customer Where customer_id= ANY(Select customer_id from payment GROUP BY customer_id having Count (customer_id) > 1 ORDER BY COUNT(customer_id) DESC LIMIT 5)

