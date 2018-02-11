---
layout: blog
title:  "Del 3 - WordPress... The basics"
category: wordpress
---

> Så kom vi endelig til det... WordPress. Det største CMS-system i verden. [25% af alle hjemmesider](https://w3techs.com/blog/entry/wordpress-powers-25-percent-of-all-websites){:target="_blank"} (på the whiteweb) er *powered by* WordPress. Men hvad er et CMS-system, og hvorfor er der så mange millioner af hjemmesider, som bruger det? Det kommer vi til nu!

### Hvad er et CMS-system?

CMS står for Content Management System og er i grove træk et system til at bygge hjemmesider. Altså bruger du en platform - noget kode, som allerede er skrevet - til at bygge din hjemmeside i. Dette gør det muligt for ikke-kodere - eller folk, der kun har et meget lille kendskab - at bygge komplicerede funktioner/designs på internettet på relativt kort tid.

CMS-systemet WordPress er ikke fastlagt i sine funktioner - det er tilpasningsdygtigt. Du får blot tildelt fundamentet og kan derfra næsten udbygge det, som du vil. Altså findes der et utal af tilbygninger (temaer og plugins), der gør det muligt at tilpasse sit system til lige netop den funktion/design, som man ønsker. Men hvad et tema og et plugin?

### Hvad er et WordPress tema?

*Den letteste måde at forklare et tema på er at sige, at det er din hjemmesides udseende. Det er et lag meget advanceret make-up, som oftest (afhænger af kompleksiteten af dit tema) giver dig mulighed for at rykke rundt på indhold, ændre farver, skifte billeder, font-størrelser, position mm. - altså en erstatning i store træk for at lære CSS. Og det er meget populært at kunne undgå!*

Temaer er vidt forskellige og de fleste større koster penge - forståeligt nok! Vi arbejder kun med temaet Twenty Seventeen, som er det tema, som man starter med, når man installerer WordPress.

### Hvad er et WordPress plugin?

*En simpel måde at forklare et plugin på er at sige, at det er en funktion, som du tilføjer til WordPress (din hjemmeside) - et modul du lægger oven på fundamentet WordPress.*

> Det er basalt, men vigtigt for at forstå plugins, at det **ikke koster noget at kopiere kode**. Det gør det muligt, hvis du laver ét velfungerende og gennemtestet plugin at kopiere det til alle, der ønsker det, og genbruge det på kryds og tværs af WordPress på the World Wide Web.

**Der kan være 1000-vis af brugere (nogle gange hundredetusinde), der bruger det samme plugin (udvidet funktion), fordi der er nogle funktioner, som går igen på næsten alle hjemmesider.**


Med hvad for nogle funktioner kan jeg få ved at installere et plugin? Her er nogle af de mest kendte:

1. **En knap, der giver mulighed for at dele indholdet:** de fleste hjemmesider er interesseret i at en besøgende kan dele artikler, blogindlæg osv. på Facebook, Instagram, Twitter etc.
2. **Kontaktside:** Mulighed for at skrive til hjemmesidens ejer og måske endda se hvor noget ligger (integration af Google Maps).
3. **Optimere billeder:** Næsten alle hjemmesider har billeder - men nogle er rigtig tunge. Her kan et plugin hjælpe til at gøre dem lettere (optimere dem).
4. **Et cache-system:** Et cache-system kan være lidt svært at forstå. Det er grundlæggende en funktion hvor din hjemmeside kan blive hurtigere, fordi du gemmer en del af din hjemmeside på din besøgenes browser. Den besøgende vil så **ved næste besøg** opleve en hurtige load-tid, da personen har en del af din hjemmeside i browseren fra sidst og derfor ikke skal til at loade den på ny.
5. **Komprimering:** Et plugin - tit er cache og komprimering i det samme - som komprimerer dine filer og samler dem, så din hjemmeside **loader hurtigere**, når du får besøg.

*Et eksempel på komprimering af en CSS-fil ser således ud:*

**Normal CSS-fil:**
{% highlight css %}
.article {
	width: 80%;
	color: brown;
}
{% endhighlight %}
**Komprimeret CSS-fil:**
{% highlight css %}
.article{width:80%;color:brown;}
{% endhighlight %}

*Altså fjerner komprimering af HTML og CSS filer alle afstande (whitespaces), så filen bliver hurtigere at læse for en besøgende. Dette går ikke ud over dine filer, når du skal skrive i dem - de beholder den form, som du ser i det normale eksempel ovenover.*

> **Foklaring:** Load-tid er et udtryk, som man bruger om den tid det tager for din hjemmeside at loade (blive vist) fra en evt. besøgende trykker dit domæne ind - f.eks. hundejegelsker.dk - og tykker enter indtil at din hjemmeside bliver vist.

Du vil altså komme til at bruge plugins, når du kommer til at følge dig begrænset af WordPress, og skal bruge en ny funktion - vær dog opmærksom på at bruge et, som er opdateret og sikkert og helst et med mange brugere, hvis det er muligt.


<hr>

## Let's get startet! MAMP - din nye elefant!

For at kunne bruge WordPress uden et domæne, bliver vi nødt til installere programmet MAMP.

> MAMP gør det muligt at have sin egen WordPress-server på sin computer. Det kaldes også **lokal udvikling**, som gør det muligt at arbejde på en hjemmeside, uden at have den oppe på internettet. Utrolig praktisk, når du skal lave ændringer, som du ikke vil have, at dine besøgende skal se. Det kan jo være, at du skal eksperimentere lidt, eller, at dine ændringer tager 4-5 dage at lave.


### Installation og opsætning af lokalt miljø

1. Gå til [MAMP download](https://www.mamp.info/en/downloads/){:target="_blank"}

2. Download til din computer (MacOS eller Windows)

3. Installer programmet

4. Gå til [Wordpress.org](https://wordpress.org/download/){:target="_blank"}

5. Tryk på den blå knap "Download WordPress .."

6. Pak filen ud og læg den ind i `MAMP/htdocs` - findes i din application (program) folder.

7. Åben MAMP (ikke MAMP PRO)

8. Tryk "Start Servers"

9. Skriv http://localhost:8888/wordpress oppe i søgefeltet - i det vindue, som bliver åbnet i jeres browser

10. Vælg sprog og forsæt

11. "Lad os komme igang!" - hold den her fane åben - vi vender tilbage!

12. Gå til MAMP igen (programmet) og tryk "Open WebStart page"

13. Tryk på 'Tools' i den øverste menu i det vindue, som bliver åbnet og tryk på 'phpMyAdmin'. **Nu er vi i databasen - pas på - tryk ikke på noget**

14. Tryk på 'New' i venstre side (gul stjerne ved siden af)

15. Indtast et databasenavn (f.eks. wordpress) og tryk "Create" - husk det!

16. Gå tilbage til det tidligere vindue, indtast databasenavnet, som du har valgt. Indtast 'root' som brugernavn og som adgangskode og tryk derefter "Send"

17. KØR INSTALLATIONEN!!!

18. Udfyld de forskellige informationer

19. Log ind med dit tidligere valgte kodeord og brugernavn

20. Sådan - tillykke - nu har du en lokal WordPress installation. Se oppe i søgefeltet. Det er ikke et domæne. Det er din server!

*Når du skal bruge MAMP igen (lokal udvikling) skal du åbne programmet - trykke Start Server og gå til browseren og indtaste: http://localhost:8888/wordpress*


## The basics of WordPress - backend og frontend

> WordPress består af en frontend og en backend. For at tilgå backend senere hen tilføj da `/wp-admin` til din url.

Frontend er det, som alle kan se, mens backend er det, som kun du kan se, og som du skal opgive adgangskode og brugernavn for at få adgang til.

Det har du lige gjort (du loggede ind på din WordPress i punkt 19) og er nu på backend - dit dashboard. Her ville en fremmede besøgende ikke kunne få adgang til!

![Backend WordPress]({{ "assets/wordpress/backend.png" || absolute_url }})

Backend gemmer så dine ændringer i databasen, som så bliver kaldt i din HTML. Din HTML ser lidt anderledes ud end fra før. F.eks. kan din HTML (som nu hedder php) se således ud i dine WordPress filer:

*Koden er taget fra index.php i din WordPress installation*

{% highlight php %}

<div class="wrap">
	<?php if ( is_home() && ! is_front_page() ) : ?>
		<header class="page-header">
			<h1 class="page-title"><?php single_post_title(); ?></h1>
		</header>
	<?php endif; ?>
...
</div>

{% endhighlight %}

Vi kender HTML'en. Men hvad der er nyt er `<?php ... ?>`. De minder meget om HTML'ens `<` og `>`, men istedet for, at de viser, at nu er det HTML, der starter, så siger de: Nu er det PHP der starter.

Jeg vil ikke gå i dybden med PHP, men blot vise det her for at forklare at `single_post_title()` er dynamisk - altså kan den ændres af dig i BACKEND. Det vil være den, der kalder et indlægs overskrift (single_post_title).


### Blog eller side som forside? Hvad skal jeg bruge min WordPress til?

> Det første du skal beslutte dig for i en nyinstalleret WordPress er, om du vil have en indlægsside (oversigt over blogindlæg) som forside eller en helt normal side. Men hvad er forskellen på de to?

For at forstå hvad en indlægsside er, tager vi et kig på din nuværende forside, hvor du kan se overskriften, dato og en kort beskrivelse af det eksempelindlæg, som WordPress har genereret til os. Her tilføjes dine indlæg automatisk, når du opretter et.

> **Udfordring:** Opret et nyt blogindlæg under din backend (dashboard), hvor der ude i venstre menu står *Indlæg*. Husk at udgive det. Efter du har oprettet det, gå da tilbage til din forside (frontend) og reload siden(chrome-genvej på Mac: CMD + R).

Kan du se dit nye indlæg i oversigten? Det blev automatisk tilføjet til din forside. Det er en indlægsside og utrolig praktisk, hvis det er hovedformålet for din hjemmeside at være hjemsted for blogindlæg. Hvis du ønsker at din forside skal være en mere statisk side, kan du gå ind under *Udseende > Tilpas*. Derinde finder du *Forside indstillinger*. Der kan du vælge om du vil have, at din forside skal være en *statisk side* eller til blogindlæg.

*Prøv at ændre din forside til en statisk side, da det er det, som vi kommer til at arbejde med i næste afsnit*

### Sider

> Sider er det sted, hvor jeg har arbejdet mest. Det er der du redigerer dine sider. En side kan f.eks. være: Om, Kontakt, Forside etc.

Hvis du trykker på 'Sider' i din menu i venstre side og derefter ind på Eksempelside, som er en automatisk genereret side, som er en del af installationen, så kan du se din Backend for at redigere en side - det er simpelthen så let i forhold til at skulle rette i ren HTML.

> **Udfordring:** Indtast din egen tekst (eller brug Lorem tricket i Sublime Text 3 for at generere noget). Prøv at lav forskel på størrelserne med 'Afsnit' knappen. Prøv derefter at trykke 'Preview ændringer' - for at gå til hvordan denne side ser ud på frontend.

Nu har du to faner åbne. Den nyeste er din frontend (den side, der blev åbnet, da du trykkede 'Preview ændringer'), den ældste din backend. **Sid lige et øjeblik og forstå dette.** En af dem har kun du adgang til og kan ændre i - den anden er statisk og åben for hele verden.

### Menu

> En menu er noget, du har brugt 1000-vis af gange. Det er den navigationsbar, som går igen på næsten alle hjemmesider. Den sikrer, at en besøgende aldrig rammer en blindgyde på din hjemmeside - at man altid har mulighed for at gå videre. Og samtidig giver den et godt overblik over, hvad din hjemmeside handler om og har at tilbyde.

En menu på eksempelvis [Nykredit](https://www.nykredit.dk/){:target="_blank"} ser således ud:

![Nykredit menu eksempel]({{ "assets/wordpress/nykredit.png" || absolute_url }})

Altså et overblik over de forskellige ting, som Nykredit tilbyder og hvert punkt linker til en ny side med information om det.

Der kan dog sagtens findes **flere menuer på én hjemmeside**. F.eks. har Nykredit også en menu i sin footer (den del af en hjemmeside, der er nederst, som går igen):

![Nykredit menu eksempel]({{ "assets/wordpress/nykredit-footer.png" || absolute_url }})

Du vil altså komme ud for, at du i nogle tilfælde skal lave flere menuer, der skal være forskellige steder på en side. Heldigvis for dig gør WordPress det enormt simpelt at mestre dette.

> **Udfordring 1:** Fra dit dashboard (backend) gå da til *Udseende > Menuer* og opret en menu.

Her kan du i venstre side se, at du har mulighed for at tilføje forskellige menupunkter: Sider, Indlæg, Links og Kategorier.

> **Udfordring 2:** Tilføj nogle menupunkter. En side, et indlæg og måske et link til en anden side (din Facebook eksempelvis).

**HUSK AT TRYKKE CHECK TIL, AT MENUEN SKAL BRUGES SOM *Topmenu* UNDER MENUINDSTILLINGER, ELLERS BLIVER DEN IKKE VIST**

Efter alt dette er gjort tryk da 'Gem' og opdater din frontend, hvor du nu skulle se en velfungerende menu med de punkter, som du tilføjede.

Du kan ændre på rækkefølgen ved drag-and-drop.

### Det er stadig HTML og CSS - *Inspect* det for at se!

> WordPress sider er dog stadig HTML og CSS! Prøv at højreklikke på din frontend og tryk derefter 'Inspicér' (I Firefox eller Chrome).

*Nogle gange skal du skifte til 'Elements' for at få HTML frem oppe i den øverste menu.*

Det som du har åbnet er et webudviklingsværktøj - det skal nok gå! - som viser dig hvilke koder (oftest HTML, CSS og JavaScript), som en hjemmeside består af. Her kan du se en noget kompliceret udgave af, hvad vi arbejdede med i de første to dele af kurset. Der er forskellige HTML-tags, klasser og kommentarer. WordPress sidste funktion er altså at producere HTML, der så bliver vist som en hjemmeside. Det er WordPress output, kan man vel godt sige.

> **Udfordring:** Prøv at ændre på noget af hjemmesidens CSS og se hvad der sker

> **Fif:** Tryk på musen over firkanten ![Webdeveloper tool]({{ "assets/wordpress/inspicer.png" || absolute_url }}) og tryk derefter på et element på hjemmesiden. Nu vil du se elementets CSS og kan derefter ændre på det.

*Disse ændringer eksistere kun til næste reload. Værktøjet gør det muligt at se ændringer, før man integrerer dem. MEGET SMART - jeg bruger det næsten hver dag!*

**Vi kommer til at arbejde mere med dette værktøj. Det har var blot for at vise, at siden består af HTML og CSS (og noget andet) ligesom det simple eksempel, som vi startede ud med i del 1 og 2.**

---------------


## Lektier


**1.** Første lektie er simpel. Prøv WordPress af! Leg rundt, opret en side, opret et indlæg, lav om i menuen, indsæt et billede - hvad ved jeg. Få en fornemmelse af Dashboard og hvordan man bevæger sig rundt. Skriv ned, hvis du oplever nogle begrænsninger. Er der en funktion, som du gerne vil tilføje/fjerne?

> **Fif:** Når du vil starte din lokale WordPress igen skal du starte programmet MAMP (ikke MAMP PRO) og trykke på Start Servers. Derefter åbnes der et vindue, hvor du kan tilgå din installation ved at trykke: `http://localhost:8888/wordpress` i søgefeltet i din browser.  Hvis du ønsker at logge ind, tilføj da `/wp-admin` til så du får `http://localhost:8888/wordpress/wp-admin`


**2.** Er lidt sværere. Prøv at ændre i CSS'en. Kan du lave baggrundsfarven om på et element på din side ved først at finde HTML klassen med *Inspect* og derefter at overskrive den i din CSS med `.den-klasse-du-har-fundet {...}`. Gå tilbage til del 1 og del 2, hvis du er i tvivl om, hvordan man skriver CSS.

> **FIF:** CSS'en er placeret under *Udseende > Tilpas > Ekstra CSS*

----------------------

