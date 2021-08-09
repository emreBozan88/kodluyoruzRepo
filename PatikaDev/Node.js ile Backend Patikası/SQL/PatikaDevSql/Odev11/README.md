# Ödev 11
---

1. **actor** ve **customer** tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.

        Select first_name from actor UNION Select first_name from customer

2. **actor** ve **customer** tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.

        Select first_name from actor INTERSECT Select first_name from customer

3. **actor** ve **customer** tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.

        Select first_name from actor EXCEPT Select first_name from customer

4. İlk 3 sorguyu tekrar eden veriler için de yapalım.

        Select first_name from actor UNION ALL Select first_name from customer

        
        Select first_name from actor INTERSECT ALL Select first_name from customer


        Select first_name from actor EXCEPT ALL Select first_name from customer
