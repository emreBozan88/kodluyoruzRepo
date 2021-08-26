let isimAl=prompt("Adınızı giriniz..:");
let isimBilgisi=document.querySelector("#isimBilgisi");
isimBilgisi.innerHTML=`Merhaba ${isimAl} ! Hoş Geldin!`;

function saatVeTarih()
{
    const tarih=new Date();
    let gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let tarihBilgisi=document.querySelector("#tarihBilgisi");
    
    let saat=tarih.getHours();
    let dakika=tarih.getMinutes();
    let saniye=tarih.getSeconds();
  
    if (saat<10)
    {
        saat=`0${saat}`;
    }

    if (dakika<10)
    {
        dakika=`0${dakika}`;
    }

    if (saniye<10)
    {
        saniye=`0${saniye}`;
    }
 
  
    tarihBilgisi.innerHTML=`${saat}:${dakika}:${saniye} ${gunler[tarih.getDay()]}`;    
                              
}

setInterval(saatVeTarih, 1000); 