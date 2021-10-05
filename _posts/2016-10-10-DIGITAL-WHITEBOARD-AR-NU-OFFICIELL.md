---
layout: post
title: "DIGITAL WHITEBOARD ÄR NU OFFICIELL"
date: 2016-10-10 08:00:00 +0200
categories: utveckling
---
Digital Whiteboard är ett projekt som jag nämnt lite i bloggen innan. Det är ett projekt med målet att ersätta dagens whiteboards i sjukvården, som idag verkar som patientlistor. Vidare i text nedan kommer projektet förkortas "DW". Vårdpersonal kallas även "användare".

Första stora problemet är att whiteboard konceptet har funnits i alla år och är sedan länge ett utdaterat medium. Försök har gjorts att ändra och ersätta utan att lösa det stora problemet. Det är att ersätta med något som inte tar mer tid och ger tillbaka mer än vad användaren lägger till. Därför har fokus lagts på att göra DW så smart det går. Skriver en användare in operationstid och vilket typ av operation, kan DW leta genom register av "sökord" och om matchning hittas kan "att göra" eller liknande läggas till per automatik. Till exempel, enligt PM på avdelningen ska urinkateter avvecklas 3 dagar efter operation, för alla patienter som gör en "Dekompression". Användaren skriver in denna information i översikten, DW skapar sedan automatiskt en "att göra punkt" under "Uppgifter" med datumet då denna uppgift ska genomföras.

Designen är ett problem med dagens whiteboard tavlor. Detta av följande faktorer:

Olika handstilar

Möjlighet att skriva vad man vill och hur man vill.

Ändras prioritet på något, är det användarna själva som måste läsa, reflektera och komma fram till detta.

Likt många program som existerar i vården i dagens läge, har man inte alltid användarna i fokus. Användarna är sjukvårdspersonal som inte alltid har datorvanan. Detta är ofta personer som brinner för att hjälpa och vårda människan. För att söka till exempel sjuksköterskeutbildningen på högskolan krävs enbart att personerna haft en lättare datorkurs under sitt liv, vilket innebär att de fått reda på hur en dator startas (kanske lite till). Det ger utveckling av designen, en stor uppgift. Är det inte lättförståeligt och översiktligt kommer det inte användas. Jag brinner för minimalism, vilket innebär att allt ska vara så litet det bara går. Designen ska enbart visa det som behövs för användaren. Vidare ska man inte skapa något som redan finns, med detta menar jag nuvarande upplägg på whiteboard tavlorna. Därför använde jag mig av samma upplägg i DW, som avdelningen redan hade på sin whiteboard tavla. Detta för att användarna ska känna sig hemma med designen och den ska vara logisk för verksamheten. För att vara översiktlig visas all information, på olika vis. Ingen information döljs för användarna.

Vilken typ av information som ska användas är också något som begränsat tidigare projekt. Andra lösningar innefattar att lösa dokumentationen i vården. Detta projekt gör inte detta. Det DW har som mål att ersätta är "anteckningarna", text och information som inte är dokumentation. Vara ett processtöd för användarna.

Anpassningsbarhet och standard är en viktig del för att skapa ett verktyg för alla avdelningar. Många program i vården idag är gjorda för att fungera för alla avdelningar på samma sätt. Här har jag istället valt att avdelningen själva ska på ett relativt enkelt sätt lägga till eller göra förändringar för att passa specifik avdelning, utan att behöva vänta på att datoravdelningen gör justeringarna. Användarna kan enkelt lägga till specifika "snabbknappar", ändra färger, ändra sängar, uppdatera sökord vilket nämnts ovan m.m. Detta gör att användarna kan själva ställa in sin eget "dröm" DW. Via specifika "snabbknappar" snabba upp anteckningsprocessen. Alla inställningar är lokala vilket då inte påverkar någon annan avdelning.

Allt är skrivet och kodat som en webbsida. Det finns idag 2 olika "stabila" versioner:

Webb version

Program version

Webb versionen ger möjligheten för avdelningen att starta upp projektet, bara Google Chrome är installerat på datorn. Man kan välja att starta DW från hårddisken eller via url till DW på teddyprojekt.tk . Eftersom webbläsaren av säkerhetsskäl inte får ha åtkomst till datorn sparas all information som "loggfiller" till nedladdat mappen. Det innebär att varje gång information sparas, skapas en ny loggfil. Detta för att information som finns alltid ska kunna återskapas ifall datorn som visar DW av någon anledning skulle stängas ner. Webb versionen är enbart utvecklad mot Google Chrome. Eftersom det är en webbsida kan den fungera i andra webbläsare, dock ökar riskerna för att funktionalitet försvinner eller buggar för dessa specifika webbläsare kan finnas.

Program versionen är en .exe fil som startas från datorn. Många sjukhus har idag av säkerhetssjäl blockerat att användare inte kan starta alla program på sjukhusens datorer. Detta kräver godkännande från IT-avdelningarna. DW som program på datorn är fortfarande en Webbsida. Den körs lokalt från hårddisken och har med hjälp av "Node.js" och "Electron" tillgång till datorn. Detta ger möjlighet att istället för att använda "loggfiler" ha 1 st sparfil. Detta ger vidare möjlighet att använda flera enheter för att visa/redigera samma information, utan att ha en öppen webbserver.

Slutligen vill jag påtala att detta är ett nystartat projekt. Inga tester har ännu genomförts på vårdavdelning. Risk finns att buggar existerar, arbete pågår att hitta och eliminera dessa.