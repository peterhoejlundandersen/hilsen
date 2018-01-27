---
layout: post
title:  "WordPress kursus"
date:   2018-01-25 22:09:58 +0100
---
> **Forberedelse**: Start med at <a href="/assets/wordpress-master.zip" download>downloade eksemplet</a> og åben den downloadede mappe i f.eks. [Sublime Text 3](https://www.sublimetext.com/3). Åben derefter `index.html` i en browser for at se indholdet.

## 1. Introduktion til HTML, CSS og JavaScript


For at forstå WordPress ordentligt og senere hen at kunne lave de små ændringer, som temaet og de indbyggede page-builders ikke kan, bliver man nødt til at forstå hvad HTML, CSS og JavaScript er, og hvad man kan bruge dem til.

Vi starter med: 

### Kodedyret - skelet, udseende og opførsel!
![Hvad gør de tre, og hvordan er de forskellige?]({{ "assets/skeleton.png" || absolute_url }})

#### HTML (SKELETTET):
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

#### CSS (HUDEN/UDSEENDET):
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

Jeg befaler at `color`(også kaldet **property**) skal være `orange` (også kaldet **value**).
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

> **Udfordring:** Prøv f.eks. selv at indstille højden på din h1 selector til et antal px. på over 100 - hvad er højde mon skrevet som? 

-------------------------

<br>
#### CSS klasser
> Vi mangler at komme ind på, hvad man gør, hvis man har 2 forskellige h4-tags og gerne vil have, at den ene skal være rød og den anden brun? 

F.eks.:

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

Jo, der kan kun være en indstilling for hver **selector** (i det her tilfælde `h4`).
Det giver ikke mening, at der kunne være to forskellige, for hvornår skulle den ene vises og hvornår den anden. 

Det er altid den sidste, som overskriver. Altså står `color: red` i det her tilfælde på den nederste linje af de to (computeren læser oppefra og ned) og godtager det sidste den møder som `color` som det gældende.




<br>
### Lektier/stigninger

> Lektierne er inddelt i stigninger, så man selv kan bestemme, hvor svær en udfordring, som man vil tage op. Jeg vil selvfølgelig anbefale, at man laver alle tre, men se, hvad i kan få tid til. Hvis man ønsker at gå videre, så er det altid muligt at fortsætte læringen via et af de kurser, som er nævnt underneden.

#### 1. grads stigning:
Indsæt et billede øverst på din hjemmeside med et `<img>` HTML-tag i din `index.html` og få det til at fylde hele din hjemmesides bredde. 
[Læs mere her](https://www.w3schools.com/html/html_images.asp)
> **Hint til bredde:** Man kan bruge `%`(procenttegnet) i CSS. Derudover kan du også bruge `width:`. Så hvor mange procent skal `width:` sættes til for at fylde hele bredden?


### Kurser:

1. [HTML kursus - CodeCademy](https://www.codecademy.com/learn/learn-html)
2. [CSS kursus - CodeCademy](https://www.codecademy.com/learn/learn-css)
