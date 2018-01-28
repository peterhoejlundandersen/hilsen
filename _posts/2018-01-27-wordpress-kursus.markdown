---
layout: post
title:  "WordPress kursus - Del 1 - HTML, CSS og JavaScript" 
date:   2018-01-25 22:09:58 +0100
---
> **Forberedelse**: Start med at <a href="/assets/wordpress-master.zip" download>downloade eksemplet</a> og åben den downloadede mappe i f.eks. [Sublime Text 3](https://www.sublimetext.com/3). Åben derefter `index.html` i en browser for at se indholdet. Dette vil være mappen, hvor du selv kan lave ændringer og afprøve den viden, som du møder hen af vejen.

## 1. Introduktion til HTML, CSS og JavaScript


For at forstå WordPress ordentligt og senere hen at kunne lave de små ændringer, som temaet og de indbyggede page-builders ikke kan, bliver man nødt til at forstå hvad HTML, CSS og JavaScript er, og hvad man kan bruge dem til.

Vi starter med: 

## Kodedyret - skelet, udseende og opførsel!
![Hvad gør de tre, og hvordan er de forskellige?]({{ "assets/skeleton.png" || absolute_url }})

### HTML (SKELETTET):
Er den grundlæggende struktur og er oftest det første en besøgende møder, når de besøger en hjemmeside.

Det er den, der holder styr på de resterende koder (CSS, JavaScript), og hvor de skal kaldes.

I HTML er der grundlæggende to inddelinger:

**HEAD** samler alle ressourcerne, så siden har hvad den skal bruge, når den bliver vist og har alt information om hjemmesiden, der ikke er nødvendig at vise til en bruger.

**BODY** er content, det er alt det rå indhold, som skal vises, såsom tekst og billeder. Det bliver stylet af CSS, så det kommer til at se godt ud senere.

De ser sådan her ud i HTML:

{% highlight html %}
<head>
<!-- Jeg bliver ikke vist til en besøgende -->
<!-- Jeg samler ressourcerne ved at kalde dem ind -->
</head>
<body>
<!-- Jeg er alt indhold og bliver designet af,
hvad <head> har fundet af ressourcer(CSS og Javacript) -->
</body>
{% endhighlight %}
*`<!--` og `-->` bruges til at starte og slutte HTML kommentarer. Det er en måde at sige til computeren: Læs IKKE hvad der er imellem disse!*

> **Huskeregel:** Hovedet (head) tænker og forbereder sig(samler ressourcer) til, hvad kroppen(body) skal gøre. Når hovedet er færdig med det, så gør kroppen det.


Et HTML tag starter med `<` og slutter med `>` - som f.eks. `<head>`. Det er en måde at sige til computeren på: Du skal læse alt fra dette tegn `<` til dette tegn `>`.

Derudover er der et **start-tag** og et **slut-tag**: `<head>` og `</head>`.

Så når computeren er færdig med et start-tag, så ved den, at indtil den møder slut-tagget, så gælder det den har læst i start-tagget.

F.eks. ved **headings**, som er det samme som overskrifter i Word, hvor der findes forskellige størrelser:
I HTML er der 6: `h1, h2, h3, h4, h5` og `h6`.

De har hver deres tilsvarende HTML start- og slut-tag: `<h1></h1>`, `<h2></h2>`, `<h3></h3>`, `<h4></h4>`, `<h5></h5>`, `<h6></h6>` (h1 er størst, h6 er mindst).
 `

Altså kan du i HTML skrive:

{% highlight html %}
<!-- Computeren rammer <h1> og ved at alt indtil den rammer </h1> skal laves stort -->
<h1>Jeg er den største!</h1>
<!-- Computeren rammer nu <h6> og ved at alt indtil den rammer </h6> skal være småt -->
<h6>Jeg er den mindste</h6>
{% endhighlight %}
Dette vil på denne side blive vist som (uden streger selvfølgelig):

------------------

# Jeg er den største!

###### Jeg er den mindste

-------------------

Som du kan se, så er de HTML tags vi brugte væk!

Computeren har fået information om, hvordan vi gerne vil have, at teksten skal se ud og kan nu fjerne HTML tagsne, så de ikke gør hjemmesiden rodet og ulæselig.

Dette koncept gør sig så gældene for en bred vifte af HTML-tags, som så hver især 'fortæller' computeren noget forskelligt. De har hver især en funktion, som er en anden end h1-h6 tags.

Her er et lille udsnit, som er meget brugte: `<div></div>`, `<span><span>`, `<strong></strong>`, `<footer></footer>`, `<a></a>`, `<nav></nav>`, `<section></section>`.


Fortvivl ikke. Deres funktion kommer vi til senere. :)
<br>

-------------------------------

<br>

### CSS (HUDEN/UDSEENDET):
CSS'en er style, altså hvordan skal hjemmesiden se ud.  

Den styler det indhold (content) som er i HTML. Alt indhold mellem `<body>` og `</body>` fra før.

Eksempler på dette kan være:

* Hvor stor skal fonten(teksten) være? (Men hov, var det ikke h1-h6... Jo, men det kan CSS'en også bestemme)
* Hvor skal dette billede være placeret på hjemmesiden?
* Hvilken farve skal baggrunden være og hvor meget plads skal denne tekst have omkring sig?
* Hvordan skal hjemmesiden se ud på mobil?
* Skal billedet blive gennemsigtigt, når jeg holder musen over det?
* Hvor meget rum (pixels) skal der være mellem de her to bokse?

**Men hvordan snakker HTML og CSS sammen? Hvordan styler CSS HTML?**

Hvis jeg f.eks. ønskede at HTML tagget fra før: `<h1>Jeg er den største!</h1>` skulle være orange, så ville jeg skrive CSS for at gøre det.

CSS'en ville se således ud:

{% highlight css %}
h1 { 
	color: orange; 
} 
{% endhighlight %}

Altså: det første: `h1`(også kaldet en **selector**) siger: Alle HTML h1 tags skal være som jeg befaler inden for de næste `{` og `}`.

Jeg befaler at `color`(også kaldet en **property**) skal være `orange` (også kaldet en **value**).
> **VIGTIGT:** Læg mærke til at property og value er opdelt af et kolon og value afslutter linjen med et semikolon: `color: orange;`. Uden dette gennemføres koden ikke.


Nu ville den blive vist som:

--------------------------

<h1 style="color: orange">Jeg er den største!</h1>

--------------------------

Eller hvis jeg ville have mere afstand mellem bogstaverne ville jeg tilføje:
{% highlight css %}
h1 { 
	color: orange; 
	letter-spacing: 5px;
} 
{% endhighlight %}
*px er, som det lyder, dit antal pixels på din skærm*

Så ville det så således ud:

--------------------------

<h1 style="color: orange; letter-spacing: 5px;">Jeg er den største!</h1>

---------------------------

Eller en anden baggrundsfarve:

{% highlight css %}
h1 { 
	color: orange; 
	letter-spacing: 5px;
	background-color: red;
} 
{% endhighlight %}
--------------------------

<h1 style="background-color: red; color: orange; letter-spacing: 5px;">Jeg er den største!</h1>

---------------------------
Osv. osv.

På den måde findes der et utal af **properties** for næsten alle tænkelige ændringer, som man kunne lave på sine tekst og billeder.

Heldigvis giver de oftest sig selv og er derfor lette at huske. F.eks. `background-color`.

> **Udfordring:** Prøv f.eks. selv at indstille højden på din h1 selector til et antal px. på over 100 i dit eget dokument: `style.css` i css mappen - hvad er højde mon skrevet som? (husk at reload siden, efter at du har lavet ændringerne) 

-------------------------

<br>
#### CSS klasser 
For at forklare hvorfor CSS klasser er så pokkers smarte, kan vi prøve at besvare spørgsmålet:

> Hvad gør man, hvis man har 2 forskellige h4-tags og gerne vil have, at den ene skal være rød og den anden brun? 

Eksemplet:

**HTML**
{% highlight html %}
<h4>Jeg vil gerne være RØD!</h4>
<h4>Jeg vil gerne være BRUN!</h4>
{% endhighlight %}

Så kunne man måske tro at dette ville virke:

**CSS**
{% highlight css %}
h4 {
	color: brown;
	color: red;
}
{% endhighlight %}

Men lad os prøve at se hvilken farve de får:

--------------------------

<h4 style="color: brown; color: red;">Jeg vil gerne være RØD!</h4>
<h4 style="color: brown; color: red;">Jeg vil gerne være BRUN!</h4>

---------------------------

Hvorfor dog det?

Jo, der kan kun være en indstilling for hver **selectors**(h4) **property**(color, background-color, letter-spacing etc.).
Det giver ikke mening, at der kunne være to forskellige, for hvornår skulle den ene vises og hvornår den anden? Computeren ser alle h4 tags som de samme. Vi bliver nødt til at gøre brug af endnu en inddeling for at kunne adskille dem i deres style(CSS). Det er her **CSS klasser** kommer ind i billedet.  

> **Men hvorfor rød?:** Det er altid den sidste property(color i det her tilfælde), som overskriver. Altså står `color: red` i det her tilfælde nederst af de to og overskriver derfor det tidligere fundet `color: brown` (computeren læser oppefra og ned).

CSS klasser giver os mulighed for at tilføje en værdi til et HTML tag, som vi så kan referere til i vores CSS. 

Se hvordan HTML'en har ændret sig:

{% highlight html %}
<h4 class="heading-red">Jeg vil gerne være RØD!</h4>
<h4 class="heading-brown">Jeg vil gerne være BRUN!</h4>
{% endhighlight %}

**Hvad sker der?** - Vi har i det første tilfælde tilføjet `class="heading-red"` direkte ind i HTML-tagget. Inden for `<` og `>` af start-tagget. 

Vi har simpelthen tilføjet information til HTML-tagget, som nu gør os istand til at kalde specifikt denne klasse i CSS'en:

Nu kan vi udforme vores CSS på en helt anden måde:
{% highlight css %}
.heading-red {
	color: red;
}
.heading-brown {
	color: brown;
}
{% endhighlight %}

Og nu ender vi med det ønskede resultat:

------------------------

<h4 class="heading-red">Jeg vil gerne være RØD!</h4>
<h4 class="heading-brown">Jeg vil gerne være BRUN!</h4>

-----------------------

> **Forklaring:** Punktummet før `heading-brown` er CSS's måde at sige på: Denne **selector** leder efter en class af samme navn! Computeren møder altså `<h4 class="heading-brown">...</h4>` og husker så, at den har en style for dette element i CSS'en (.heading-brown). 

> **Udfordring:** Prøv selv at tilføje `class=".."` og CSS i din `index.html` og `style.css` - kan du ramme en klasse på samme måde? Hvad med at give hver sin h4 forskellige baggrundsfarver? Hvordan går det?

<br>

### JavaScript (opførsel/bevægelse)

JavaScript er det vildeste!
Det er et af de mest udbredte kodesprog i verden (mest aktive på [StackOverflow](https://stackoverflow.com/)) og er dit kodedyrs bevægelse og opførelse. Det er helt klart et sværere kodesprog at skrive end HTML og CSS og der vil derfor ikke være eksempler, men blot en kort indsigt.

Du aktiverer JavaScript 100-vis af gange om dagen. 

Du bruger det, når du søger, og der bliver vist søgeresultater imens. 

Du bruger det, når dit billede uploader på Facebook. 

Du bruger det i enorm grad på Google Maps. 

Hvis du har en drøm om at blive en rig programmør, så skulle du tage at blive ekspert i dette.

Det kan hente data uden at dit vindue reloader. Det kan sætte cookies og meget, meget, meget mere.

JavaScript kan bruges i en simplere form, som hedder [jQuery](https://jquery.com/). 

Hvis vi får tid kommer vi til at lege lidt med jQuery med nogle dropdown-menuer og vilde effekter (bounce, bounce).

<br>


### Lektier/stigninger

> Lektierne er inddelt i stigninger, så man selv kan bestemme, hvor svær en udfordring, som man vil tage op. Jeg vil selvfølgelig anbefale, at man laver alle tre, men se, hvad i kan få tid til. Hvis man ønsker at gå videre, så er det altid muligt at fortsætte læringen via et af de kurser, som er nævnt underneden.

#### 1. grads stigning
Kan du forklare hvad forskellen på et span-tag og et div-tag er?

#### 2. grads stigning:
Indsæt et billede øverst på din hjemmeside med et `<img>` HTML-tag i din `index.html` og få det til at fylde hele din hjemmesides bredde. 
[Læs mere her](https://www.w3schools.com/html/html_images.asp)
> **Hint til bredde:** Man kan bruge `%`(procenttegnet) i CSS. Derudover kan du også bruge `width:`. Så hvor mange procent skal `width:` sættes til for at fylde hele bredden?


#### 3. grads stigning:
Lav 4 bokse med `<div></div>` og giv dem hver især forskellige baggrundsfarver, højder og bredder via forskellige klasser.

> **Hint:** En div uden indhold har ingen højde og bredde, så den vil ikke kunne ses, før du giver den en højde `height: ...` og en bredde `width: ...`.

### Kurser:

1. [HTML kursus - CodeCademy](https://www.codecademy.com/learn/learn-html)
2. [CSS kursus - CodeCademy](https://www.codecademy.com/learn/learn-css)

-----------------------------------

<br>

Tak for denne gang - glæder mig til næste del! :)

