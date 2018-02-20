---
layout: blog
title:  "Del 4 - Get ready for a plugin-party!"
category: wordpress
---

> **Forberedelse:** Åbn din MAMP-server og hjemmeside og log ind. Du kan finde hjælp til dette under [Lektier i del 3](https://hilsen.it/wordpress/2018/02/09/del-3-Wordpress-basics.html#lektier){:target="_blank"}, hvis det er.

> WordPress fleksibilitet kommer af et kæmpe stort community, som hver dag arbejder hårdt for at vedligeholde de 1000-vis af plugins og temaer, der er mulige at tilføje til din nye hjemmeside. I denne del vil vi komme ind på det meget populære plugin Yoast SEO for at vise et eksempel på, hvordan du kan udvide WordPress' funktioner og hvor let det er. Derudover vil vi redigere lidt i vores tema og oprette et child-theme, så tema-opdateringer ikke overskriver vores ændringer. Til sidst prøver vi at lave noget udvidet CSS.


### Først og fremmest - hvad er SEO? 

*SEO står for Search Engine Optimization og går ud på at optimere din hjemmeside, så det bliver lettere for evt. interesseret at finde dit indhold/hjemmeside på Google, Bing etc.*

WordPress hjælper med det grundlæggende SEO, men for at få fuld kontrol over, hvad du gerne vil have, at Google viser (vi bruger Google i det her eksempel, da det står for ca. [80% af de søgninger, som bliver foretaget på internettet](https://netmarketshare.com/search-engine-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22deviceType%22%3A%7B%22%24in%22%3A%5B%22Desktop%2Flaptop%22%2C%22Mobile%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22searchEngine%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22searchEnginesDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222017-02%22%2C%22dateEnd%22%3A%222018-01%22%2C%22segments%22%3A%22-1000%22%7D){:target="_blank"}) bliver du nødt til at udvide dine funktioner. Altså er det tid til at installere vores første plugin!!!

<br>

### Find dit plugin (helst via Google) - og installér det!

> For at installere et plugin, som kan hjælpe os med vores SEO, gå da til [google.com](https://www.google.dk/){:target="_blank"} og tast "WordPress SEO".

*Man kunne sagtens være gået ind via Backend under punktet i menuen "Plugins", men det er vigtigt at vide, hvordan man finder plugins via Google og installerer dem den vej, fordi man der kan læse mere om pluginnet og se andres kommentarer. Altså gøre en smule forarbejde i stedet for bare at installere det første og det bedste under Plugins.*

> Gå ind på Yoast's pluginside (læg mærke til at vi er inde på wordpress.org - dette er et godt tegn på, at det er et *trusted* plugin) og tryk derefter på den blå knap "Download".

Nu downloader du en zip-fil, der indeholder pluginnets filer, men **pak den ikke ud**. WordPress' plugin installationen foregår med zip-filer.

> Gå ind på din Backend og tryk da på "Plugins" i venstre menu. Tryk derefter på "Tilføj nyt" øverst og upload da din downloaded zip-fil. Nu giver resten sig selv. **Husk at aktiver dit plugin!**

Nu skulle du gerne se din plugin-liste, hvor Yoast SEO er fremhævet med en lyserblå farve, da det er aktiveret og klar til brug!


### Yoast er installeret - men hvad er så fedt ved det?

> For at se hvor vildt et plugin kan være, gå da til en af dine sider.

Nu skulle du gerne have et ekstra felt under din normale tekstfelt, som ser nogenlunde sådan her ud: 

![SEO Yoast WordPress]({{ "assets/wordpress/yoast-seo.png" || absolute_url }})

> **Spørgsmål:** Hvad tror du det er? Ligner det noget, som du har set før? 

..

..

..

**Ja! Det er Google!** 

Det er et eksempel på, hvordan denne sides fremvisning ville se ud som et søgeresultat på f.eks. google.com. Den øverste blå overskrift er sidens SEO-titel (overskriften for et søgeresultat) og det nederste er SEO-description (beskrivelsen af linket - hvad indeholder siden?)

I mit tilfælde, hvis jeg havde gjort mig umage og arbejdet hårdt på min hjemmeside i flere år, havde jeg måske ligget højt på søgeord som: "køb hestevogn", "hestevogn jylland" og "restaurering af hestevogn". Så kunne jeg altså gå mine sider igennem og skrive en indbydende og beskrivende tekst, så jeg måske fik endnu flere besøgende.

> **Udfordring** Prøv at rediger i din forhåndsvisning ved at trykke "Redigér snippet". 

Yoast SEO giver dig ikke kun mulighed for at redigere i hver af dine siders/indlægs/kategories forhåndsvisning til søgemaskiner, det giver dig også et par fifs med på vejen til, hvordan du gør det bedst og en farvekode for, hvor godt de mener, at du har gjort det, så du let kan få et overblik over hvilke sider/indlæg/kategorier, som mangler en kærlig hånd.

> **Andre indstillinger:** Indstillinger for Yoast SEO er ude i menuen under "SEO". Dette er dog ikke altid at indstillinger for et plugin er placeret der. Det afhænger meget af størrelse og funktion. Men oftest vil det være at finde under "Indstillinger" eller have sit eget menupunkt.

Vi har desværre ikke tid til at gå mere i dybden med Yoast. Det var et ultrakort indblik i SEO og funktioner, som et plugin kan tilføje din din hjemmeside. Funktioner, som rigtig mange hjemmesider gør brug af. Yoast er eksempelvis **downloadet 40 millioner gange**.

[Læs mere om Yoast her, hvis du har lyst](https://yoast.com/wordpress/plugins/seo/){:target="_blank"}. 


### Er der en bagside af plugin-medaljen?

Før vi går videre, er det vigtigt at besvare spørgsmålet: 

> **Spørgsmål:** Skal jeg bare installere plugins, så snart jeg mangler en funktion, eller er der en bagside ved det? Gør det noget at have mange plugins installeret?

> **Svar:** Ja, der er en bagside: hastighed og sikkerhed. Mange af de WordPress-hjemmesider, som jeg har taget over efter en anden har haft 5-10 plugins installeret som ikke blev brugt - eller var lette at udskifte med få linjer kode. Efter at de var fjernet/tilpasset blev hjemmesiden hurtigere og lettere at navigere i. 
 
Derudover er nogle plugins så dårligt kodet, at de kan være en trussel mod din sikkerhed, men det er sjældent - så længe, at du sørger for at opdatere dine plugins regelmæssigt.

**Installér kun et plugin, hvis det er højest nødvendigt og husk at afinstallere det igen**, hvis du ikke bruger det længere.



## Tema - hvad nu?

> Dit tema Twenty Seventeen, som er installeret på din side, er et meget simpelt tema med få funktioner og muligheder. Det er et godt startsted, så du ikke bliver overvældet første gang, at du åbner et tema op som f.eks. [Avada](https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226){:target="_blank"}, [Enfold](https://themeforest.net/item/enfold-responsive-multipurpose-theme/4519990){:target="_blank"} eller [X theme](https://themeforest.net/item/x-the-theme/5871901){:target="_blank"} (tre meget populære og funktionelle temaer med page-builders fra [Themeforest](https://themeforest.net){:target="_blank"})

Ved de større temaer er der oftest også et menupunkt kun til det (ligesom med pluginnet Yoast SEO). I Twenty Seventeen's tilfælde forholder det sig ikke ådan, og vi skal her gå til Udseende > Tilpas > Temaindstillinger for at få mulighed for at ændre på indstillingerne.

Her har du mulighed for at vælge en side til hver af felterne på forsiden.

> **Udfordring 1:** Gå til sider og opret en ny side, som skal være en del af din forside. Find et billede på over 1000 px i bredden, som du tænker vil passe godt til din side og upload det under "Udvalgt billede" (oftest nederst i højre hjørne af din sides redigeringsvindue).

> **Udfordring 2:** Gå nu tilbage til Tilpas > Temaindstillinger og vælg din nyoprettet side som øverste del af din forside. Tryk "Udgiv" og besøg derefter forsiden. Hvad ser du?

Temaet giver dig altså mulighed for at bruge sider og siders udvalgte billede som moduler til din forside. Det kan i sidste ende skabe en flot og lang forside, hvor du kan scrolle igennem forskellige emner og billeder. Et eksempel på en funktion, som er indbygget i temaet.

## Childtheme - hvorfor er det vigtigt?

> Måske husker du afsnittet [Parent og child? - ja, det bliver brugt til at forklare koder](https://hilsen.it/wordpress/2018/02/03/del-2.html#parent-og-child---ja-det-bliver-brugt-til-at-forklare-koder){:target="_blank"} fra del 2. Dette brug af ordet *child* er ikke helt det samme, men et child-theme har på samme måde en parent, som i dette tilfælde er vores allerede eksisterende tema Twenty Seventeen. 

Vi vil altså gerne give vores parent-theme Twenty Seventeen en overbygning (vores child), hvor vi kan være sikre på, at evt. ændringer i parent temaet ikke overskriver vores ændringer i child-temaet.

*Ændringer i parent theme består oftest af en opdatering. Det er helt afhængigt af hvilket tema og hvilke udvikler, der står bag, hvor ofte dette vil ske. Hvis du har lavet ændringer direkte i dit parent temas filer, så vil en opdatering overskrive de ændringer. **Det går ikke!***

Måske et billede vil hjælpe lidt med forklaringen: 

![Child theme Wordpress]({{ "assets/wordpress/child-theme.png" || absolute_url }}){:target="_blank"}

WordPress leder altså først efter filer i dit child tema og du kan derfor overskrive filer i dit parent-tema. F.eks. filen `style.css`. Hvis du lægger den i dit child-theme vil den overskrive dit parent-themes `style.css`. 

**Note:** Det er svært at forstå child-theme som nybegynder i WordPress. Det vigtigste lige nu er at forstå, at det overskriver parent-theme og derfor ikke bliver påvirket på opdateringer. **Det er derfor en god vane at sætte et child-theme op, hver gang at man starter en ny WordPress side.**

> **Bonusspørgsmål:** Hvad er ulempen ved child-theme? Hvad er det, som det ikke bliver?

### Oprettelse af child-theme

> Istedet for at gøre det direkte i koden, så kan man installere et plugin, som gør det for en. 

> **Udfordring 1:** Installer pluginnet [One-Click Child Theme](https://da.wordpress.org/plugins/one-click-child-theme/){:target="_blank"} helt selv! **Husk at aktivere det!**


> **Udfordring 2:** Find indstillingerne til pluginnet (det ligger ikke der, hvor jeg tidligere fortalte at plugin-indstillinger oftest gør) og skriv "Twenty Seventeen Child" i navn. Generer derefter et child-theme.

Efter at dit child-theme er aktiveret kan du tilgå dine filer ved at gå til Udseende > Editor. Her har du et bedre vindue til at redigere i CSS og har også en ekstra fil `functions.php`, som vi kommer til at arbejde i næste gang.

Lad os afprøve vores nye CSS-vindue. Tid til en udfordring mere:

> **CSS udfordring:** Kunne det ikke være fedt, hvis din menu havde en anden baggrundsfarve og tekstfarve? Ændre deres CSS i din nye editor.

> **FIF:** Brug værktøjet fra del 3 [Det er stadig HTML og CSS - Inspect det for at se](https://hilsen.it/wordpress/2018/02/09/del-3-Wordpress-basics.html#det-er-stadig-html-og-css---inspect-det-for-at-se){:target="_blank"} for at finde CSS klassen. 

Disse ændringer vil ikke blive overskrevet af en opdatering. Det var de blevet, hvis du havde lagt dem i dit parents-themes `style.css`. **Sådan! Godt gået!** Nu kan du opdatere så tosset som du vil!

## Hvad med effekten, når jeg holder musen over et menupunkt? (Advanceret CSS)

Kommer snart






