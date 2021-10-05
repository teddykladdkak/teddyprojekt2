---
layout: post
title: "NY VERSION AV RAMAPP"
date: 2016-12-07 08:00:00 +0200
categories: utveckling
---
För drygt 1-2 år sedan gjorde jag en "ramapp" som gör egentligen vad namnet antyder. Den är en ram och visar en annan hemsida (ifall den hemsidan tillåter detta). Inte bara detta, utan den berättar för telefonen att den vill hanteras som en vanlig applikation och inte som en webbsida. Detta fungerade finfint för min gamla avdelning, fram till jag flyttade allt mitt arbete till github. Då ändrades länken till applikationen och då också bakåtkompatibiliteten. Det löste sig med att jag återskapade tidigare map strukturen för just denna applikationen. Men med min nya kunskap tog jag steget längre.

Jag har nu istället gjort något som kallas "bookmarklet". Det är ett bokmärke, men som inte tar dig till en specifik sida, utan istället kör lite javascript kod på nuvarande öppnad sida. Det tråkiga med detta är att "bookmarklet" är väldigt komplicerat att ställa in första gången.

1. Skapa ett nytt bokmärke.
2. Ersätt URL med bookmarklet koden.

Denna process låter enkel men är relativt avancerad.

Det den gör är att lägga till lite "meta" information på sidan:
1. Berättar att sidan ska hanteras som en app.
2. Sidan ska vara "normal" zoomad, och inte zooma likt en webbsida.
3. System menyn (där tex klockan finns) ska vara svart.

Så när bookmarkleten är "installerad" är det bara att öppna önskad sida. Sedan klicka på bookmarkleten. Utan att du ser att något händer, tror nu telefonen att hemsidan är en app och när den sparas till skrivbordet är allt klart. När du klickar på ikonen öppnas webbsidan i app-vyn.

Så har själv nu "Fass.se" & vårdhandboken som en app på telefonen!

Får se om jag gör en manual hur man installerar en bookmarklet, annars är det bara att googla. Finns flertalet guider redan.