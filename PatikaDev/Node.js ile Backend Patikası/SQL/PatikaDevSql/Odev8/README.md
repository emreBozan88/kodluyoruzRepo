# Ödev 8
---

1. **test** veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.

        Create table employee (
	        id INTEGER PRIMARY KEY,
	        name VARCHAR(50),
	        birthday DATE,
	        email VARCHAR(100)
            )

2. Oluşturduğumuz **employee** tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.

        insert into employee (id, name, birthday, email) values (1, 'Barnabe Lovitt', '2001-09-04', 'blovitt0@cnbc.com');
        insert into employee (id, name, birthday, email) values (2, 'Winifield Oxtaby', '2012-06-06', 'woxtaby1@ocn.ne.jp');
        insert into employee (id, name, birthday, email) values (3, 'Charlene Allaway', '2018-02-08', 'callaway2@godaddy.com');
        insert into employee (id, name, birthday, email) values (4, 'Win Domek', '1931-08-30', 'wdomek3@usnews.com');
        insert into employee (id, name, birthday, email) values (5, 'Luciano Bloxholm', '1943-09-17', 'lbloxholm4@go.com');
        insert into employee (id, name, birthday, email) values (6, 'Latrina Urey', '2001-02-21', 'lurey5@themeforest.net');
        insert into employee (id, name, birthday, email) values (7, 'Charity Gatiss', '1916-02-28', 'cgatiss6@cpanel.net');
        insert into employee (id, name, birthday, email) values (8, 'Lyell McCumskay', '1915-04-09', 'lmccumskay7@ameblo.jp');
        insert into employee (id, name, birthday, email) values (9, 'Leonora Top', '1923-04-03', 'ltop8@about.com');
        insert into employee (id, name, birthday, email) values (10, 'Leah Hasson', '1922-11-14', 'lhasson9@simplemachines.org');
        insert into employee (id, name, birthday, email) values (11, 'Urson Sarjeant', '1988-12-04', 'usarjeanta@ning.com');
        insert into employee (id, name, birthday, email) values (12, 'Thia Ivanisov', '2019-12-18', 'tivanisovb@lulu.com');
        insert into employee (id, name, birthday, email) values (13, 'Rafa Lingner', '1966-07-08', 'rlingnerc@seattletimes.com');
        insert into employee (id, name, birthday, email) values (14, 'Gabby Nairy', '1903-01-01', 'gnairyd@mtv.com');
        insert into employee (id, name, birthday, email) values (15, 'Danila Kettlewell', '1992-10-13', 'dkettlewelle@ed.gov');
        insert into employee (id, name, birthday, email) values (16, 'Rosita Willshire', '1921-10-22', 'rwillshiref@mapquest.com');
        insert into employee (id, name, birthday, email) values (17, 'Mellie Bortolutti', '1976-08-16', 'mbortoluttig@com.com');
        insert into employee (id, name, birthday, email) values (18, 'Sylvan Bliven', '2009-04-15', 'sblivenh@goo.ne.jp');
        insert into employee (id, name, birthday, email) values (19, 'Russ Imlock', '1936-11-27', 'rimlocki@phpbb.com');
        insert into employee (id, name, birthday, email) values (20, 'Abe Mosconi', '1943-06-06', 'amosconij@independent.co.uk');
        insert into employee (id, name, birthday, email) values (21, 'Marcos Petrowsky', '1995-09-04', 'mpetrowskyk@icio.us');
        insert into employee (id, name, birthday, email) values (22, 'Maddi Dulton', '1915-07-19', 'mdultonl@jigsy.com');
        insert into employee (id, name, birthday, email) values (23, 'Candie Anderl', '2006-12-13', 'canderlm@cmu.edu');
        insert into employee (id, name, birthday, email) values (24, 'Tremaine Hastwall', '1979-06-06', 'thastwalln@purevolume.com');
        insert into employee (id, name, birthday, email) values (25, 'Deanne Middlehurst', '1985-06-23', 'dmiddlehursto@barnesandnoble.com');
        insert into employee (id, name, birthday, email) values (26, 'Stacey Mussolini', '1965-10-23', 'smussolinip@a8.net');
        insert into employee (id, name, birthday, email) values (27, 'Tally Winstanley', '1914-06-28', 'twinstanleyq@loc.gov');
        insert into employee (id, name, birthday, email) values (28, 'Adorne Feenan', '1915-05-29', 'afeenanr@so-net.ne.jp');
        insert into employee (id, name, birthday, email) values (29, 'Perle Buttwell', '1961-08-29', 'pbuttwells@china.com.cn');
        insert into employee (id, name, birthday, email) values (30, 'Mead Pennycook', '1936-06-02', 'mpennycookt@archive.org');
        insert into employee (id, name, birthday, email) values (31, 'Friedrick Rickards', '1939-02-07', 'frickardsu@nbcnews.com');
        insert into employee (id, name, birthday, email) values (32, 'Perle Grassin', '1937-11-20', 'pgrassinv@smugmug.com');
        insert into employee (id, name, birthday, email) values (33, 'Ermanno Munroe', '1918-11-18', 'emunroew@cbslocal.com');
        insert into employee (id, name, birthday, email) values (34, 'Alleen Foulstone', '1970-04-20', 'afoulstonex@nature.com');
        insert into employee (id, name, birthday, email) values (35, 'Goddart Carlet', '1941-09-27', 'gcarlety@multiply.com');
        insert into employee (id, name, birthday, email) values (36, 'Janna Klicher', '1943-07-18', 'jklicherz@arizona.edu');
        insert into employee (id, name, birthday, email) values (37, 'Kamila Powney', '1967-02-15', 'kpowney10@jigsy.com');
        insert into employee (id, name, birthday, email) values (38, 'Fredi Hodcroft', '1955-04-09', 'fhodcroft11@de.vu');
        insert into employee (id, name, birthday, email) values (39, 'Eloise Shapera', '1941-07-03', 'eshapera12@archive.org');
        insert into employee (id, name, birthday, email) values (40, 'Cathe Penright', '1935-11-24', 'cpenright13@wikimedia.org');
        insert into employee (id, name, birthday, email) values (41, 'Zuzana Pywell', '2021-05-22', 'zpywell14@desdev.cn');
        insert into employee (id, name, birthday, email) values (42, 'Jayson Rosenblatt', '1981-04-26', 'jrosenblatt15@accuweather.com');
        insert into employee (id, name, birthday, email) values (43, 'Freddi Jerome', '1956-04-11', 'fjerome16@exblog.jp');
        insert into employee (id, name, birthday, email) values (44, 'Udell Durden', '1941-02-08', 'udurden17@blogs.com');
        insert into employee (id, name, birthday, email) values (45, 'Gerald Rosenblatt', '1995-01-22', 'grosenblatt18@addtoany.com');
        insert into employee (id, name, birthday, email) values (46, 'Josiah Middleditch', '1939-04-11', 'jmiddleditch19@google.ru');
        insert into employee (id, name, birthday, email) values (47, 'Calhoun Epton', '1982-09-14', 'cepton1a@marriott.com');
        insert into employee (id, name, birthday, email) values (48, 'Nikolia Solway', '1995-03-22', 'nsolway1b@tinyurl.com');
        insert into employee (id, name, birthday, email) values (49, 'Pearce Skerm', '2005-05-01', 'pskerm1c@nymag.com');
        insert into employee (id, name, birthday, email) values (50, 'Marlie Malcolmson', '1927-09-21', 'mmalcolmson1d@addtoany.com');

3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.

        Update employee Set name='Emre BOZAN' Where id=1
        Update employee Set birthday='1994-01-16' Where id=2
        Update employee Set email='kodluyoruz@mockaroo.com' Where id=3
        Update employee Set name='Zet Lorento' Where name LIKE 'L%'
        Update employee Set name='Old People' Where birthday<'1923-01-01'

4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

        Delete from employee Where id<=5
        
