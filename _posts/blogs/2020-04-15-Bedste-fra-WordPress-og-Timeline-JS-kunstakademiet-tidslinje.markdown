---
layout: blog
title: "Det bedste fra Wordpress blandet med det bedste fra Timeline JS - tidslinje til Københavns Kunstakademi"
desc: "For at forbedre overblikket for de mange studerende, så vi forstår hvad det er for en synkende skude vi befinder os på."
category: blogs
seocontent: "WordPress og Timline JS tidslinje integreret. Det Kongelige Danske Kunstakademi."
---

> For at forbedre overblikket for de mange studerende, så vi forstår hvad det er for en synkende skude vi befinder os på.

I starten af dette skoleår kom det ud, at Det Kongelige Danske Kunstakademi skulle gennemgå nogle nye besparelser. Der blev lækket (i en lille grad, kan man sige) et dokument fra Driften (pedel, rengøring, daglig drift). Heri står der for eksempel: 

> Fra 1. februar 2022 skal Bygningsstyrelsen varetage levering af alle Kunstakademiets interne serviceydelser. **Det vil ske gennem en privat leverandør.** Det drejer sig som udgangspunkt om kantine og mødeforplejning, rengøring, intern service og reception, indvendig vedligehold, udendørsarealer, vagt- og sikkerhed samt affaldshåndtering.

Altså er der fra den tidligere regerings side igangsat 3 forskellige bølger, hvor alle offentlige institutioners drift skal overgå til en privat leverandør.

Senere i teksten, som er skrevet af Administrationschef Jes Gjørup, beskrives det hvordan, at Akademiet har fået en form for særbehandling: 

> For Kunstakademiets vedkommende kan der dog være serviceopgaver, som udgør så integreret en del af vores kerneopgaver – uddannelse, forskning og kunsthalsvirksomhed – at det ikke er hensigtsmæssigt at outsource opgaven.

Det **STORE** spørgsmål, man kan stille i forlængelse af denne lange sætning er: **Hvordan kan det være at drift og rengøring ikke bliver talt med i "kerneopgaver"?**

En hver der har været på akademiet og haft sin daglige gang der ved, at de opgaver som Driften og rengøring varetager er specialiseret. Det skyldes, at det er gamle bygninger med atypiske beboer (kunststuderende), der kræver en fleksibilitet, dialog og viden om, hvad der kan lade sig gøre. Viden, der for nogen er opbygget over årtier, men som åbenbart bliver overset.  Og nu vil de, som et plaster på såret, tilbyde de mest garvede et job ved den nye udbydere. Som er til en lavere løn og dårligere overenskomst. Samt at de kan blive udsat for at arbejde andre steder. 

Helt ærligt. Det er på grænsen af elitært ikke at tælle disse mennesker med. Især når, at det er de vante og kendte ansigter/relationer, der gør, at man som studerende kan føle sig tryg i fucking Indre By's lortekultur.

Vi var nogle elever der snakkede om, hvad vi kunne gøre. Organisere os og vise vores sympati med Driften og rengøringen. 

I den samtale slog det os, at det måske kunne være fedt at lave en tidslinje til skolen. Tidligere elever har holdt en tidslinje løbende opdateret i et dokument, der beskriver ændringer fra 2007-18. Men hvorfor stoppede den og hvad kunne vi gøre for, at den blev mere tilgængelig... 
Selvfølgelig: 

> Make a WEBSITE with a student login! For everyone → and visible for the whole world.

## Timeline JS - the perfect TOOL!

Jeg fandt hurtigt [Timeline JS]([https://timeline.knightlab.com/](https://timeline.knightlab.com/)) (TL), som er et Javascript bibliotek, der tager JSON-data eller et offentlig Google Sheet(excelark) og laver den data om til en interaktiv tidslinje. Du kan besøge linket og se mere. 

*Til de personer, der ikke kender JSON-kode, så er det en simpel måde at gemme data på, som computere har let ved at læse. Google IT*

Problemet med dette program er, at det ikke er særlig mange mennesker (er min oplevelse), der gider at logge ind og tilføje data til et Excel-ark. Især når denne data kan være mange forskellige ting som billeder og html-kode osv. Det skal selvfølgelig forenes med **en simpel brugervenlig backend som WordPress'!**

Jeg besluttede mig hurtigt for at dataudtrækket fra WordPress skulle være JSON, da jeg fandt ud af, at der er et indbygget måde at arbejde med JSON i PHP, der hedder: 

    <?php
    $myObj->name = "John";
    $myObj->age = 30;
    $myObj->city = "New York";
    
    $myJSON = json_encode($myObj);

Du kan altså lave et Object og tilføje værdier på en meget simpel måde, hvorefter du kan transformere dette parent-object ind til json kode. 

# Fra Wordpress til JSON til FINISHED!

Jeg valgte at eksportere WordPress' Indlæg (Posts på engelsk) som events (begivenheder) på tidslinjen. For at dette skal fungere var jeg nødt til **at eksportere data ind i JSON-struktur som TL kan læse.**

Hvis du besøger [TL kan du se deres JSON-struktur]([https://timeline.knightlab.com/docs/json-format.html](https://timeline.knightlab.com/docs/json-format.html)) (format):

    {
      "title": {
        "media": {
          "url": "################",
          "caption": "############",
          "credit": "###########",
        },
        "text": {
          "headline": "Det siger de",
          "text": "Halli hallo"
        }
      },
      "events": [ // Læg mærke til at events er en array!
          {
            "media": {
              "url": "####",
              "thumbnail": "####",
              "caption": "#####",
              "credit": "######",
            },
            "start_date": {
              "year": "1945"
            },
            "end_date": {
              "year": "1950"
            },
            "text": {
              "headline": "Der skete det",
              "text": "Jamen dog"
            }
          }, 
          ..... // Next event
        }
      ]
    }

*Forestil dig at programmet siger: SÅDAN HER SKAL DATAEN LEVERES FOR AT JEG PÅ NOGEN MÅDE KAN ARBEJDE MED DET! Nu ved du det.*

### Tilføj custom fields med ACF til et indlæg, så ingen data mangler!

Det eneste der umiddelbart mangler som data i et indlæg (den har headline, text, billeder osv.) er: start_date og end_date. 
Så der bruger jeg [Advanced Custom Fields]([https://www.advancedcustomfields.com/](https://www.advancedcustomfields.com/)).

*SERIØST BEDSTE PLUGIN JEG NOGENSINDE HAR KØBT! - HAR BRUGT DET 100 GANGE!*

I det plugin tilføjet jeg to datafield felter: start_date og end_date, som bliver vist under teksten på backend med guide-tekst:

![Det%20bedste%20fra%20Wordpress%20blandet%20med%20det%20bedste%20fr/Screen_Shot_2020-04-15_at_19.26.18.jpg](Det%20bedste%20fra%20Wordpress%20blandet%20med%20det%20bedste%20fr/Screen_Shot_2020-04-15_at_19.26.18.jpg)

som brugeren så kan udfylde.

Nu mangler vi bare at gemme indlæggene som JSON-data!

### Gem og eksporter dataen fra WordPress til en json fil!

Derefter kom punktet, at jeg skulle lave en kode der blev *triggered* hver gang et indlæg blev gemt. Denne kode skulle så loope igennem alle indlæg på siden og gemme hver deres data i det JSON-format som jeg lige har vist.

Det jeg kom frem til var det her:

    function export_posts_in_json (){
    // Tag alle (-1) indlæg (post) som er udgivet
        $args = array(
            'post_type' => 'post',
            'post_status' => 'publish',
            'posts_per_page' => -1,
        );
    
    // Udfyld den overordnet data (headline og text)
        $query = new WP_Query( $args );
        $text = new stdClass();
        $text->headline = "Det Kongelige Danske Kunstakademi";
        $text->text = "Som har været en del igennem";
        $timelineObj = new stdClass();
        $timelineObj->title = "media";
        $timelineObj->title = $text;
    
        $eventArray = array();
    
    // Loop gennem alle inlæg 
        while( $query->have_posts() ) : $query->the_post();
    
          $obj = new stdClass();
    // Hvis et indlæg har et billede, så tilføj en lille thumbnail og et stort billede + mere
          if( has_post_thumbnail() ) {
            $media = new stdClass();
            $media->url = get_the_post_thumbnail_url(); 
            $media->thumbnail = get_the_post_thumbnail_url(get_the_ID(), 'thumbnail');
            $media->caption = get_post( get_post_thumbnail_id())->post_excerpt;
            $obj->media = $media;
          }
    // Titel og text
          $text = new stdClass();
          $text->headline = get_the_title();
          $text->text = get_the_content();
    
          $obj->text = $text;
    
    // Få datafeltet og udvind år(Y), måned(m) og dag(d) fra data strengen.
          $startDate = new stdClass();
          $dateObject = new DateTime( get_field('startdato', get_the_ID() ) ); 
          $startDate->year = $dateObject->format('Y');
          $startDate->month = $dateObject->format('m');
          $startDate->day = $dateObject->format('d');
    
          $obj->start_date = $startDate;
    // Samme
          if( get_field('slutdato', get_the_ID() ) ) {  // Hvis der er en slutdato
            $endDate = new stdClass();
            $dateObject = new DateTime( get_field('slutdato', get_the_ID() ) ); 
            $endDate->year = $dateObject->format('Y');
            $endDate->month = $dateObject->format('m');
            $endDate->day = $dateObject->format('d');
    
            $obj->end_date = $endDate;
          }
    // Sæt det i en kategori, hvis det har en.
          if( get_the_category() ) { // Can only take one!
            $category = new stdClass();
            $obj->group = get_the_category()[0]->name;
          }
    
          $eventArray[] = $obj; 
    
        endwhile;
    
        wp_reset_query();
    
        $timelineObj->events = $eventArray;
    // Lav hele objektet om til JSON-kode (også vist tidligere)
        $data = json_encode($timelineObj);
    // Stien hvor det skal gemmes (get_stylesheet_directory er stien til child-theme)
        $folder = get_stylesheet_directory() . '/it-timeline/';
        $file_name = 'timeline-data.json';
    // Gem det JSON-dataen der!
        $succes = file_put_contents( $folder.$file_name , $data );
    // SLUT - no problem. Ville nok have lavet en tester af, om det hele gik som det skulle
    // men ikke på et amatør job som det her <3 :)
    }
    
    // Hooket 'save_post' fyres hver gang et indlæg bliver udgivet eller opdateret.
    add_action( 'save_post', 'export_posts_in_json' );

Nu bliver dataen gemt  i TL's JSON-format hver gang. Nu skal frontend 'bare' finde filen og vise tidslinjen.

### Tilføj Timeline JS til frontend og kald dataen!

Nu mangler vi bare at få al dataen vist. 

Det gør vi ved at følge TL's guide og ved at bruge et lille PHP til Javascript trick.

Find det sted, som du gerne vil vise tidslinjen og gå ind i PHP-koden der.

Jeg har valgt: `template-parts/page/content-front-page.php` i WordPress' eget tema: Tweenty Seventeen

    <!-- TIMELINE JS OG CSS OG ET NØDVENDIGT HTML-TAG -->
    <link title="timeline-styles" rel="stylesheet" href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css">
    <script src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>
    <div id='timeline-embed' style="width: 100%; height: 600px"></div>
    
    <script type="text/javascript">
    // Det her er indstillinger, som du kan tilføje, så TL viser eller opfører sig på en bestemt måde.
    // Se deres hjemmeside for mere info.
      var options = {
        hash_bookmark: true 
      }
      var json_url = "wp-content/themes/twentyseventeen-child/it-timeline/timeline-data.json";
    // Ram id'et fra HTML ovenover og fodre den med data. Sådan!
      $.getJSON( json_url, function( data ) {
        timeline = new TL.Timeline('timeline-embed', data, options);
      } );
    </script>

**SÅ!** Nu har du altså en brugervenlig måde at vise en tidslinje på. 

### Afsluttende:

Jeg gjorde det, at jeg oprettede en fælles bruger til eleverne på min skolen: Student. Som de hver især kan logge ind med og tilføje data.

Og husk at tjekke TL's mobilversion ud! Den er virkelig god.

God arbejdslyst
