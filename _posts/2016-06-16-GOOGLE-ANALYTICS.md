---
layout: post
title: "GOOGLE ANALYTICS"
date: 2016-06-16 08:00:00 +0200
categories: utveckling
---
Sedan några månader tillbaka när jag blev granskad av VGR IT säkerhetsavdelningen, fick jag några anmärkningar på vad jag skulle förbättra. En av punkterna var att de hittade kod som är kopplat till Google. Inget jag faktiskt sett eller hittat innan, men tog inte lång stund förrän jag fann det. Det är alltså Google Analytics som finns på sidorna. Letat i min egen kod med kan inte finna att jag någonsin lagt till detta, vilket jag inte gjort. Vidare gick jag genom "tema" koden på hemsidan, eftersom jag använder mig av servertjänsten Weebly, för att komma undan "serverside" kodningen, men hittade inget där heller. Vidare kontaktade jag Weebly som till slut gav som svar att det är de som lägger in detta på allas sidor och kan inte tas bort.

Det som Google Analytics gör, är att registrera antal besök, ingen information behandlas. Funktionen är att jag som skapare kan få en bättre blick vad som är intressant på min hemsida och vad som är mindre intressant. Vad jag ska fokusera mer på.

Vidare enligt Wikipedia (Wikipedia - Google Analytics) ska många offentliga sidor ändå använda sig av detta. Gått lite djupare och kontrollerat att det stämmer. Skatteverket, Göteborgs universitet och vårdguiden (1177) använder sig av detta. Vidare är det även intressant att se att VGR använder sig av jQuery på deras nya hemsida, vilket jag också fick anmärkning på.

Lösning på att få bort detta är att jag lägger filerna längre in på min server, vilket betyder att adressen blir lite knepigare för användaren. Detta kräver i sådana fall åter igen att användare får skaffa nya bokmärken m.m. Redan påbörjat detta med remiss programmet skapat för avd 349a.