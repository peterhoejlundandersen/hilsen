---
layout: blog
title: "Tag math noter og nyd det! - (Til dem der elsker terminalen <3)"
category: blogs
enableMenu: true
jsfile: "facebook"
seocontent: ""
seoimage: ""
---

<div class="js-hilsen-list facebook-blog">
	<!-- bliver udfyldt med en indholdsbetegnelse af js -->
</div>


# Hvordan vil jeg gerne skrive noter? 

Her er den oversigt, som jeg lavede for at komme nærmere, hvad det var for et system, som jeg gerne vil have: 

**Hvad jeg ønsker**: 

  1. At gøre brug af VIM ([læs mere, hvis du ikke kender
     den](https://hilsen.it/blogs/2018/01/27/techlove.html#vim---en-gammel-teksteditor-med-superkr%C3%A6fter-den-sv%C3%A6re)),
     som jeg elsker at arbejde i!

  2. At kunne skrive matematik, diagrammer og andre illustrationer med
     bogstaver(forkortelser). Altså forstået på den måde, at jeg gerne
     vil have det hele i tastaturet, så jeg ALDRIG skal besøge musen,
     for at finde formler, tegn eller andet frem. ([Don't touch the
       mouse - læs
       mere](https://hilsen.it/blogs/2018/01/27/techlove.html#dttm---dont-touch-the-mouse)){
       .small-source }

  3. At have automatiseret min visning. Når jeg gerne vil skrive
     matematik i koder, så skal resultatet vises i pdf eller HTML. Dette
     må gerne gøres automatisk hver gang jeg gemmer, så det bliver en
     flydende overgang mellem skrivning og visning.

  4. At have en form for hierarki i mine noter. Jeg drømmer om noget,
     der minder om [VimWiki](https://github.com/vimwiki/vimwiki), der er
     et program til VIM, hvor man har en index fil, der indeholder en
     oversigt over ens noter. Derfra kan man besøge hver note og også
     hoppe tilbage til oversigten via genveje. Dette beholder en
     struktur over emner, som jeg ønsker. [Se den her video, hvis du vil
     vide mere](https://www.youtube.com/watch?v=ONh95PNBW-Q&t=396s)

  5. At kunne bruge Version Control (Github) til at gemme og arbejde
     sammen med andre. Dette betyder, at dokumentet skal være ren tekst
     uden formatting kode - modsat Microsoft Word.


------------------

## LaTeX - meget kraftfuld dokumentbehandling

> Det første jeg faldt over var [LaTeX](https://www.latex-project.org/), som er en måde at skrive
dokumenter på. Det er meget udbredt til specialer og større akademiske
opgaver, da det er til at stole på. Forstået på den måde, at det du ser,
er det du får(se billede underneden). Du kan ikke pludselig ødelægge din formatering ved at
indsætte et billede et sted (Word). Derudover er det kompatibelt på
kryds og tværs af alle computer, da det er ren tekst (punkt 5). Det
støtter formler, diagrammer og matematik. Men det er ret svært at sætte
op med automatiseret visning sammen med VIM. 

**Et eksempel på et LaTeX dokument og visning af 'koderne' som pdf:** 

![LaTeX eksempel]({{"assets/blogs/dtu/latex.png" || relative_url}})

### VIMTEX! 

Heldigvis for mig er der nogle andre mennesker, der har lavet pluginnet
[VimTex](https://github.com/lervag/vimtex), der understøtter LaTeX
skrivning i VIM. Det giver endda mulighed for at tilføje PDF visning med
nogle genveje, når du er i et LaTeX dokument (.tex). 

Som jeg nævnte i punkt 3, kunne jeg også godt tænke mig at have
visningen automatiseret. Det er heldigvis beskrevet i deres
dokumentation (findes ved at skrive `:h vimtex` i vim eller ved en
normal søgning på internettet) 

De har gjort det muligt at arbejde sammen med PDF-programmet
[Skim](https://skim-app.sourceforge.io/){: target="blank" } (husk at
installere det!), der er
meget lightweight og støtter **forward og backward searching**.

> **Forklaring:** Forward og backward searhcing betyder simpelthen bare, at du kan
markere et sted i dine koder (LaTex) og hoppe direkte til det sted i
PDF-visningen. Altså så siden scroller til det sted, hvor du f.eks.
skriver. Og omvendt - fra PDF til koder. 

Det gør de workflow bedre. Jeg satte mig for at sætte det op. 

#### Opsætning af automatisk PDF-visning

Fra deres dokumentation skal man, efter at man har installeret VimTex
(jeg bruger [Vundle](https://github.com/VundleVim/Vundle.vim)), sætte
nogle forskellige indstillinger i sin **`.vimrc` fil.**

> **Forklaring:** `.vimrc` er det sted, hvor alle dine indstillinger for
din brug af VIM ligger. F.eks. kan du indsætte `set tw=112`, som så
betyder: Min **t**ext**w**idth skal være 112. Det er også her, at du
installerer forskellige plugins (udvidelse af funktionerne i VIM) og
konfigurerer dem. 

**Indstillinger for brug af Skim i VimTex:**


```vim
"========== VIMTEX IN VIMWIKI
let g:vimtex_compiler_latexmk = {
    \ 'background' : 1,
    \ 'build_dir' : '',
    \ 'callback' : 1,
    \ 'continuous' : 1,
    \ 'executable' : 'latexmk',
    \ 'options' : [
    \   '-verbose',
    \   '-file-line-error',
    \   '-synctex=1',
    \   '-interaction=nonstopmode',
    \ ],
    \}

let g:vimtex_view_general_viewer = '/Applications/Skim.app/Contents/SharedSupport/displayline'
let g:vimtex_view_general_options = '-r @line @pdf @tex'
let g:vimtex_view_method = 'skim'
"Highlight PDF area
let g:vimtex_view_skim_activate=1
"============ VIMTEX END
```

Du fortæller altså programmet, at det skal køre i baggrunden og køre
indtil det for besked på at stoppe. Det vil altså sige, at du 'kun' skal
aktivere det én gang, og så vil det selv opdatere filen, hver gang, at
du gemmer. 

Derudover viser du VimTex, hvor den skal finde dit pdf program (Skim) i
linjen: `let g:vimtex_view_general_viewer =
'/Applications/Skim.app/Contents/SharedSupport/displayline'`. 

Det er ikke nok at linke til programmet, som du kan se. Du skal linke direkte
til terminal kommandoen. 

`let g:vimtex_view_general_options = '-r @line @pdf @tex'` er også
vigtigt, da du fortæller hvilke oplysninger programmet (Skim) skal have
sendt. I dette tilfælde: `@line`, linjenummer; @pdf, stien til pdf-filen;
@tex stien til tex-filen.

<br>
#### Lad os se, om det kører

VimTex kommer også med nogle genveje til visningen af dokumentet.

`<leader>l` for at generere pdf-filen

`<leader>v` for at vise pdf-filen

> **Forklaring:** \<leader> er en knap, som du vælger i VIM. Du kan se
det som starten på dine personlige (hjemmelavet) genveje. Min selvvalgte
knap er f.eks. , (komma), så jeg skal taste ",l", for at genere filen.
Men sætter sin \<leader> i `.vimrc` ved at skrive: `let mapleader=","`


**Mon det virker?:**

![LaTex Vimtex preview with Skim]({{ "assets/blogs/dtu/vimtex-skim.gif"
|| relative_url }})


> I GIF'en ovenover afprøver jeg de nye indstillinger ved at have et
  LaTeX dokument åbent på venstre side og derefter trykker jeg første
  genvejen for at generere, og derefter for at vise i PDF-dokumentet,
  hvor jeg er.

**JA DET GØR DET!!** (det tog 2 dage)

## VimWiki - omg, det her bliver svært

> Nu er punkt 1, 2, 3 og 5 sådan set opfyldt. Nu mangler jeg 'bare' den
  struktur, som jeg ønsker mig. Jeg fandt en smutvej, men den var ikke
  køn!


Den simple funktion, som jeg leder efter, er, at man via tastaturet kan
oprette LaTeX (.tex) filer fra en index fil (en oversigt), så man f.eks. får en
punktopstilling med links til de forskellige noter man har. 

Den kunne se sådan her ud: 

```markdown

# Matematik noter

## Det her emne

  * [Svær matematik] - en kort forklaring
  * [Endnu sværere matematik] - en længere forklaring
  * [Overdrevet svært] - en nogenlunde forklaring

## Et andet emne
…

```

> Altså skal man 'kun' indtaste et navn i brackets (f.eks. [Svær
  matematik]) og så trykke Enter, når ens markør er over det, for at
  oprette en ny fil og gå til den i VimWiki. Når man så har skrevet det
  man skal, kan man trykke backslash for at komme tilbage til
  oversigten. Smart, ikke?


**Problemet:** VimWiki genererer ikke `.tex` (LaTex) filer. Den genererer
`.wiki` filer eller `.md` (markdown) filer, hvis du beder den om det.
Altså virker VimTex ikke i de filer, som den genererer. 



### Min løsning (næsten)

Jeg prøvede i lang tid at få VimTex til at køre i markdown filer, og det
lykkedes faktisk, men der opstod mange uventede syntax og compile
problemer.

VimWiki er et stort plugin med mange udviklere og ikke så let at 'pille'
ved, så jeg fandt et andet plugin, der hedder [Vim Markdown
Wiki](https://github.com/mmai/vim-markdown-wiki). 

Det har en funktion, der minder meget om VimWikis, hvor man sætter sin
markør over en tekst i [] (igen) og derefter trykker på en knap for at
lave en markdown fil. 

Jeg fandt dog hurtigt ud af, at man kunne lave det om i koderne!

----------------------- SÅ SKER DET -----------------------

På linje 90 og 91 i pluginnets fil `vim-markdown-wiki/after/ftplugin/markdown.vim` står der: 

```vim 
    let extension = fnamemodify(cur_file_name, ":e")
    let file_name = word.".".extension
```

Her tager pluginnet filens endelse og videregiver den til den nye fil. 

Hvis man ændrer det til:

```vim 
    let extension = 'tex'
    let file_name = word.".".extension
```

så bliver de nye filer lavet automatisk til `.tex` (LaTeX) filer.

For at ændre i de koder og derefter integrere det i Vim
[forker](https://help.github.com/articles/fork-a-repo/){: target="blank"
} man mmai's branch til sin egen profil og installerer derefter den her
version istedet for via Vundle:

```vim
Plugin 'peterhoejlundandersen/vim-markdown-wiki'
```

<br>
#### MEN! Et problem opstod! Jeg kan ikke komme tilbage til index
> **Forklaring:** Pluginnet er 'kun' lavet til at køre i markdown (.md)
filer. Derfor virker min version fint så længe man er i oversigtsfilen
(index). Den genererer linket og filen og flytter en videre til den nye
`.tex` fil, som den skal. Men i `.tex` format **virker pluginnet ikke,
fordi det kun er lavet til markdown `.md` filer**. Man kan altså ikke
'hoppe' tilbage til sin oversigt fil, når man er færdig med at skrive
noter.

Her følger en lang forklaring om, hvordan VIM aktiverer plugins alt
efter hvilken fil man er i osv. Tryk `:h filetype` i VIM, hvis du vil
læse mere. Jeg kom op med en nogenlunde løsning efter at have læst en
masse.

<br>
### Min færdige løsning

En hvilken som helst fil i VIM får tilføjet en filetype, så VIM ved
hvilken syntax filen skal have og hvilke plugins der skal gælde for den.

Efter lang tids tænkning kom jeg frem til, at jeg måtte lave min egen
syntax og tilføje den til både `.md` filer og `.tex` filer. Den syntax
skal være forbundet til mit tilpasset plugin, så funktionen kan bruges i
begge filtyper. 

VIM kalder plugins til filtyper på baggrund af hvilket filnavn som
pluginnets filer har (hold da op en sætning). 

Altså bliver `markdown.vim` kaldt til markdown-filer, `tex.vim` filer
til LaTeX filer (.tex) osv. osv. 

Jeg lavede min eget filnavn, der hedder `links.vim`. Heri puttede jeg hele
det tilpasset tidligere nævnte plugin. 

Nu skulle jeg 'bare' søger for, at `.links` filtypen bliver tilføjet til
både markdown filer og tex filer. 

Det gøres således i `.vimrc`: 


```vim 
autocmd FileType,BufNewFile,BufFilePre,BufRead *.md set filetype+=.links
autocmd FileType,BufNewFile,BufFilePre,BufRead *.tex set filetype+=.links
```

> **Forklaring:** de to linjer betyder at vim automatisk skal køre en
kommando, når en fil bliver åbnet. Øverste linje kører når alle filer
med md endelsen bliver åbnet `*.md`(regex) og derefter tilføjes `+=.`
links syntaxen til filetype. Det samme gælder for `*.tex` filerne.

#### Det bedste fra TO VERDENER - dreeeeeam <3 

Nu kan jeg i en normal markdown-fil bruge VimWiki's fantastiske
funtioner. Hvis jeg gør det, så genererer den markdown-filer, som den
skal. Men via mit tilpasset plugin kan jeg **OGSÅ** genererer tex-filer.

Det gøres via genveje, som jeg har sat i min `.vimrc`: 

```vim
nmap z<CR> :MdwiGotoLink<cr>
nmap x<CR> :MdwiReturn<cr>
```

Hvis jeg trykket på Enter i en markdown-fil bliver den generet fil en
markdown-fil. Men hvis jeg trykket på "z\<Enter>" (z\<CR>) bliver filen en
tex-fil og alle de fantastiske funktioner fra VimTex følger med.

Derudover kan jeg også hoppe tilbage via "x\<Enter>" (x\<CR>). 

-------

<br>
<br>
Det gik lidt stærkt med at lave dette indlæg. Men håber, at der er
nogle, der kan bruge det til noget <3 
<br>
<br>



{ #sources }








