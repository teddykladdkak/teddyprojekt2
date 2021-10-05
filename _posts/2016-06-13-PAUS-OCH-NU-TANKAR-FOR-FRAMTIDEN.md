---
layout: post
title: "PAUS OCH NU TANKAR FÖR FRAMTIDEN!"
date: 2016-06-13 08:00:00 +0200
categories: utveckling
---
Sedan senaste inlägget har jag nu tagit en längre paus från allt arbete. Nu börjar det åter klia i fingrarna igen. Som ni kanske inte vet, arbetar alla program jag skapat på användarens dator. Alltså ingen server hanterar och bearbetar informationen. Det innebär att programmen lika gärna kan ligga på hårddisken på datorn. Anledningen till att jag i nuläget inte direkt erbjuder (rekomenderar) detta, är att alla program ännu är i utvecklingsstadier. Det innebär att när jag gör ändringar, märker inte användaren att det görs, inga återkommande uppdaterings varningar, krångliga nedladdningar m.m.

Dock har jag nu börjat tänka om. Jag vill att användaren när den ska använda ett program kör den från datorn/mobilen och inte laddar ner sidan från en server, förutom när det finns en uppdatering. Detta för att göra upplevelsen av laddning snabbare, samt ge möjlighet för användaren att inte behöva ha uppkoppling till internet. Detta kommer jag uppnå med något som kallas "offline manifest". Förenklad förklaring är att när du går in på en hemsida, laddas alltid den ner till din dator/mobil. I vanliga fall, när du stänger ner hemsidan tas hemsidan bort från din dator/mobil. Med "offline manifest", sparas hemsidefilerna på datorn, så att nästa gång du vill öppna hemsidan laddas den från datorn först. Om internet uppkoppling finns, skickas en fråga till servern om senaste versionen körs. Om det är senaste händer inget mer, om det inte är senaste laddas senaste versionen. För vidare läsning på engelska: Wikipedia - Cache manifest

Jag har implementerat detta i tidigare projekt (som nu är arkiverade) denna funktion innan, men är ändå osäker på hur lång tid denna uppdatering kan ta.

Vi får se.