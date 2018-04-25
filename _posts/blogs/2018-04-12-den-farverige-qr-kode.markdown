---
layout: blog
title: "Den farverige QR-kode - en digitalportal til digte"
desc: "Udførelsen af en malerisk idé, der trækker dybe spor ind i kodeverden"
category: blogs
jquery: "true"
jsfile: 'qr-code'
bottom: "true"
seocontent: ""
seoimage: ""
---

## Indledning 

{: .text-center }
![Sweig logo]({{ "assets/blogs/digtportal/sweig-logo.png" || absolute_url }}){: style="max-width: 200px!important; margin-top: 70px;" }

Sweig-logoet ovenover, hvis farvemønster jeg tilfældigt fandt på en brugt bog for snart 5 år siden, har sidenhen fascineret mig. 

Det er et kaotisk vildnis med malerisk karakter, der samtidig udstråler en form for anonymitet - for mig at se.


Oplevelsen af farvemønsteret og [Sweig-platformen](https://sweig.dk){:target="_blank"} skabte pludselig en dag en idé, som jeg sidenhen ikke har kunnet slippe: 

----------------

----------------

{: .text-center }
### En ny poetisk QR-kode


<div class="exp-wrapper" markdown="block">
  <div class="exp-img" markdown="block">
  ![Part 1 af forklaringen af Sweig idé]({{ "assets/blogs/digtportal/1-part.jpg" || relative_url }})
  
  {: .exp-text .text-center .small}
  En skriver skriver den bedste tekst ned i mange år og får lyst til at dele den
  </div>
  <div class="exp-img" markdown="block">
  ![Part 2 af forklaringen af Sweig idé]({{ "assets/blogs/digtportal/2-part.jpg" || relative_url }})

  {: .exp-text .text-center .small}
  Personen logger på Sweig-appen og udgiver sin tekst
  </div>
  <div class="exp-img" markdown="block">
  ![Part 3 af forklaringen af Sweig idé]({{ "assets/blogs/digtportal/3-part.jpg" || relative_url }})

  {: .exp-text .text-center .small}
  Efter udgivelsen er der en funktion, som har generet en ny unik farvekode (som ligner Sweig-logoet, men ikke er det!)
  </div>
  <div class="exp-img" markdown="block">
  ![Part 4 af forklaringen af Sweig idé]({{ "assets/blogs/digtportal/4-part.jpg" || relative_url }})

  {: .exp-text .text-center .small}
  Sweig-appen viser vej til den nærmeste boghandler, som har installeret en specialdesignet printer til klistermærker. Her MobilePay'er man 5-10 kr. pr. stk. og får derefter farvekoden printet ud
  </div>
  <div class="exp-img" markdown="block">
  ![Part 5 af forklaringen af Sweig idé]({{ "assets/blogs/digtportal/5-part.jpg" || relative_url }})

  {: .exp-text .text-center .small}
  Skriveren finder et godt sted at sætte sin farvekode op i byen. Måske har stedet også noget at gøre med teksten?
  </div>
  <div class="exp-img" markdown="block">
  ![Part 6 af forklaringen af Sweig idé]({{ "assets/blogs/digtportal/6-part.jpg" || relative_url }})

  {: .exp-text .text-center .small}
  En person kommer gående forbi, som kender til Sweig-appen, og skanner glædeligt det farverige mærke
  </div>
  <div class="exp-img" markdown="block">
  ![Part 7 af forklaringen af Sweig idé]({{ "assets/blogs/digtportal/7-part.jpg" || relative_url }})

  {: .exp-text .text-center .small}
  App'en fører direkte til udgivelsen, og læses kan der!
  </div>

</div>


-------------------

--------------------

<br>
<br>


## Hvad skal der til, for at denne idé kan udføres?


* **1.** En Sweig-app med alle de samme funktioner som sweig.dk + flere!

* **2.** I Sweig-appen skal der integreres en kodebase, som kan generere unikke farvekoder, til hvert et nyoprettet værk på Sweig. De skal lægge sig så tæt op ad Sweig-logoet som muligt.

* **2.** Derudover skal der integreres en form for skanningsteknologi, der kan genkende de farvekoder, som førnævnte teknologi genererer, og derefter besøge værket farvekoden er forbundet til.

* **3.** Det skal købes/laves en automatiseret printer, der via MobilePay og Sweig-appen, automatisk ved, hvad der er blevet bestilt, og hvad der skal printes efter betaling. 

* **4.** En aftale med en boghandler (behøver det at være det?), så printeren kan stå et sted, hvor der færdes litteraturinteresserede.


### Omg! Det kalder jeg en udfordring

Lad os starte med nogle flotte farver...

-----------------

----------------

## Generér en farvekode, der ligner Sweiglogoet?

*QR-koden, som mange af os kender, er virkelig simpel: Sorte eller hvide firkanter sat sammen. Men er det muligt at udvide denne funktionalitet til farver, og hvilken teknologi ligger bag?*




Det oprindelige bogomslag, Sweig-logoet er et udsnit af, ser således ud:

![Sweig baggrund]({{ "assets/blogs/digtportal/baggrund-sweigs.jpg" || relative_url }}){: .sweig-baggrund }


**Prøv at klikke på en farve, for at se farveområdet**

<div class="color-boxes">
  <div class="back-to-org-image">
    <span class="dark-green"></span>
    <span class="orange"></span> 
    <span class="white"></span>
    <span class="blue"></span> 
    <span class="yellow"></span> 
  </div>
  <span id="darkGreen" class="color-box"></span> 
  <span id="orange" class="color-box"></span> 
  <span id="white" class="color-box"></span>
  <span id="blue" class="color-box"></span> 
  <span id="yellow" class="color-box"></span> 
</div>

<br>

Jeg havde håbet at se en form for symmetri og gentagelse. Dog må jeg sige, at hvis jeg blev spurgt: Hvilken vej falder det? Så havde jeg nok svaret: Fra øverste højre hjørne til nederste venstre hjørne.




