---
layout: post
title: "BUGG FIXANDE"
date: 2016-02-17 08:00:00 +0200
categories: utveckling
---
Då har denna kvällen gått ut mest med att rätta till buggar i pillerräknaren. Från att varit ett enkelt formulär till att nu vara ett fullt fungerande och komplicerat web program, finns det mycket mer svarta hål, men en efter en, så blir de förre och färre.

I betan finns nu stabil lösenordshanterare som enbart finns lokalt på datorn. Även sparas nu all information även om sidan skulle stängas ner på datorn, med säkerheten av lösenordsskydd.

Den är i och med detta nu även fullt fungerande som mobilapplikation.

Kända kvarvarande buggar:
- När sida stängts ner och startas upp igen, man loggar in och kommer på att man vill ta bort en sedan innan vald säng. Då måste man i nuläget dubbelklicka för att få bort den, när man i vanliga fall enbart ska behöva klicka 1 gång.

Kvar att göra i betan:
- Stabilisera bearbetningen av hårddata från ELVIS.
- När data från ELVIS lagts till, automatiskt välja aktuella sängar.
- Komma ihåg tidigare valt tema.
- Hitta buggar.
- Rätta och fixa buggar.