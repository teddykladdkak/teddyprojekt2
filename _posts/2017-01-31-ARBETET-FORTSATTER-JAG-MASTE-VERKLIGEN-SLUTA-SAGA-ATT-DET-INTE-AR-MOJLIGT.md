---
layout: post
title: "ARBETET FORTSÄTTER, JAG MÅSTE VERKLIGEN SLUTA SÄGA ATT DET INTE ÄR MÖJLIGT."
date: 2017-01-31 08:00:00 +0200
categories: utveckling
---
Då har jag överbevisat mig själv igen. Under ett år nu har jag bävat och konstant sett muren i utvecklingen, jag pratar om den dagen då Digitala Whiteboarden funkar ensam, men börjar bli för stor för sina kläder. Alltså dagen då den enbart kan fungera bättre om den körs via en webbserver.

Jag är utbildad och arbetat länge med "Front end" webb-kodning. Detta innebär att jag kan koda det som användardatorn använder. Back end är motsatsen, det är koden som servern använder. Det användaren ofta inte ser eller bryr sig om. Det är tillexempel vilka filer som ska skickas till användaren, eller vilken information skall tas mot och/eller skickas till användaren m.m.

Det tog mig en dag att fatta hur detta funka. Jag trodde inte att det var möjligt eller att jag skulle behöver läsa flertalet böcker/kurser/program på högskolan för att fatta. Men tack vare att Node JS projektet sedan något år tillbaka nu börjat bli stabil, var inte hoppet så långt. Node JS är en webbserver som läser samma typ av kod som användarna, alltså kan man koda på samma sätt!

Vidare hittade jag "socket.io" vilket är ett färdigt paket som åstadkommer exakt det som servern för DW måste kunna hantera, vilket är om en användare ändrar information, ändras det på alla användare som är kopplade till servern. Detta gör att användarna alltid har samma information.

Arbetet är nu påbörjat för att skapa en demo version för DW version 2, med nu server och flera klienter stöd. Detta är och kommer förbli ett sidoprojekt till DW eftersom detta kräver att verksamheten sätter upp en webbserver med nätverk, vilket gör processen att sätta igång en DW i verksamheten lite svårare. Vilket betyder att vanliga DW fortfarande ska fungera på samma sätt som server versionen. Det som skiljer är flera användare stödet.