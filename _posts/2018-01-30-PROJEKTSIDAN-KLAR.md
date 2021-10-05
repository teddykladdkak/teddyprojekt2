---
layout: post
title: "PROJEKTSIDAN KLAR!"
date: 2018-01-30 08:00:00 +0200
categories: utveckling
---
Då är det mesta arbetet färdigt med denna projektsidan.

Nu har jag hoppat vidare och ser över TidLogga projektet. Dels innehåller den lite småbuggar men framförallt använder den en teknik som heter Socket.io (WebSocket) teknik. Egentligen är denna till för meddelanden eller när flera användare i realtid ska kunna se förändringar m.m. Enligt denna beskrivning så stämmer inte TidLogga in, då den enbart har en klient i taget som tittar på sin specifika information. Därav skriver jag i stort om hela TidLogga och har gjort ny mapp med namnet "TidLogga2". Denna planerar ersätta nuvarande. Planen är att dels jag ska eliminera småbuggarna men också skapa en bättre kommunikation mellan server och användare.