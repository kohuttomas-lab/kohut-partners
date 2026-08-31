# Prestavba Google Ads — verzia 2 (firemná agenda pred situáciami)

Pripravené 20. 8. 2026, **prepísané 23. 8. 2026** podľa [researchu dopytu](eshop-research-dopyt.md) §6
a [katalógu balíkov](eshop-katalog.md) · účet **395-896-5684** (kohút & partners) pod MCC 298-181-8748

## Čo sa zmenilo oproti verzii 1

Verzia 1 stavala kampaň C na štyroch situačných témach (výpoveď, exekúcia, nehoda,
štát) — spolu **430 vyhľadávaní mesačne**, ľudia tam hľadajú informácie a klik stojí
0,30 – 1,40 €. Research z 23. 8. ukázal, že **firemná agenda má ~4 500 vyhľadávaní
mesačne, konkurencia za ňu platí 3 – 8 € za klik** a od 17. 8. 2026 dáva zákon
č. 29/2026 Z. z. advokátom (spolu s notármi) výlučnú formu zakladateľských dokumentov
(§ 57 ObchZ). Preto sa poradie obracia: **najprv firma, potom situácie.**

Čo ostáva v platnosti z verzie 1: všetky kľúčové slová vo **frázovej zhode** (presná
zhoda končí ako „nízky objem"), diagnóza B3, zákaz negatívneho `vzor`, súlad s § 29b.
Pôvodné texty situačných skupín sú v git histórii tohto súboru.

## Stav blokerov

| # | Bloker | Stav |
|---|---|---|
| B1 | `generate_lead` kľúčová udalosť v GA4 | **HOTOVO** (23. 8.); Ads má vlastnú konverziu „Lead – dopyt (web)" 7661170005, import z GA4 sa nerobí (duplicita) |
| B2 | Overenie pre finančné služby EÚ/EHP (vlákno 460402430) | **otvorené** — používateľ |
| B3 | Poistné plnenie 0 zobrazení | **VYRIEŠENÉ** — presná zhoda s nulovým objemom; 8 slov odstránených, kampaň pozastavená |
| **B4** | ~~Cieľové stránky pre firemné témy neexistujú~~ | **VYRIEŠENÉ 24. 8.** — 13 produktových stránok nasadených (viď nižšie); fáza 2 je otvorená |

### B4 — VYRIEŠENÉ: produktové stránky nasadené 24. 8. 2026

Postavených 13 stránok na infraštruktúre kampaňových stránok (`src/lib/campaigns/`,
group „produkt“, SK-only, FAQ schéma, formulár s `generate_lead`): `/zalozenie-sro`,
`/likvidacia-sro`, `/prevod-obchodneho-podielu`, `/zmena-konatela-sidla-sro`,
`/ochranna-znamka`, `/zalozenie-zivnosti`, `/gdpr-dokumentacia`,
`/obchodne-podmienky-eshop`, `/predzalobna-vyzva`, `/vymahanie-pohladavok`, `/zavet`,
`/kupna-zmluva-nehnutelnost`, `/osobny-bankrot`. Nestavia sa: ready-made (čaká na
partnera). **Skupiny kampane C teda môžu cieliť rovno na produktové stránky — stĺpec
„fáza 2“ v tabuľke nižšie je aktuálny cieľ; fáza 1 s článkami je prekonaná.**

Pôvodný bloker (pre históriu):

Pre firemné témy dnes existujú len: článok `/blog/zalozenie-sro` (prepísaný 23. 8.
o novelu, končí ponukou balíka), stránka služby `/sluzby/obchod` s balíkom „Založenie
s.r.o. na kľúč 299 €", články `/blog/vymahanie-pohladavok`, `/blog/gdpr-eshop`
a `/blog/osobny-bankrot-2026-podmienky-a-postup`. Pre likvidáciu, ochrannú známku,
prevod podielu a zmeny v s.r.o. nie je nič.

Preto dve fázy:

- **Fáza 1 (spustiť hneď):** skupiny, ktoré majú kam pristáť — Založenie s.r.o.
  (→ článok s novelou), Vymáhanie pohľadávok (→ článok), GDPR/e-shop (→ článok).
  Rozpočet kampane C: 6 €/deň.
- **Fáza 2 (po zverejnení landing pages z katalógu):** Likvidácia, Ochranná známka,
  Zmeny v s.r.o. a prevod podielu, Živnosť; presmerovanie skupiny Založenie na
  `/zalozenie-sro`. Rozpočet kampane C: 10 €/deň, kampaň A klesne na 7 €/deň.

Článok ako cieľ reklamy je kompromis — konverzia bude nižšia než na produktovej
stránke. Ale je to lepšie než domovská stránka (verzia 1 ukázala 236 z 277 klikov na
úvodnej stránke) a dáta z fázy 1 povedia, ktoré landing pages stavať ako prvé.

## Objem a cena — overené v Plánovači 23. 8. 2026

| Téma | Kľúčové slová (frázová zhoda) | Vyhľadávaní/mes | Konkurencia | Klik (horný odhad) |
|---|---|---|---|---|
| **Založenie s.r.o.** | zalozenie sro · založenie sro · založenie sro online · založenie firmy | 1 600 + 720 + 170 + 110 = **2 600** | Vysoká | 2,93 – 3,47 € |
| **Likvidácia / zrušenie** | likvidácia sro · zrušenie sro | 480 + 390 = **870** | Vysoká | 3,51 – 3,92 € |
| **Ochranná známka** | ochranná známka · registrácia ochrannej známky | 480 + 140 = **620** | Stredná/Vysoká | 1,79 – 3,09 € |
| **Živnosť** | založenie živnosti · zalozenie zivnosti · znovuzaloženie živnosti | 720 + 390 + 720 = **1 830** | Vysoká | 1,10 – 1,33 € |
| **Vymáhanie** | vymáhanie pohľadávok · predžalobná výzva | 210 + 320 = **530** | Vysoká/Nízka | 0,85 – 3,31 € |
| **Zmeny v s.r.o.** | prevod obchodného podielu · zmluva o prevode obchodného podielu · zmena sídla firmy · zmena konateľa | 90 + 110 + 70 + 10 = **280** | Stredná/Vysoká | 3,02 – 4,34 € |
| **GDPR / e-shop** | gdpr dokumentácia · obchodné podmienky eshop · reklamačný poriadok · ochrana osobných údajov | 50 + 30 + 170 + 590 = **840** | Vysoká (prvé dve) | 3,00 – **16,97** € |
| Ready-made | ready made sro | 260 | Vysoká | 8,09 € |
| *Situácie (v1)* | *výpoveď · exekúcia · nehoda · štát* | *430* | *Nízka* | *0,30 – 1,42 €* |

Pozn.: „ochrana osobných údajov" (590) a „reklamačný poriadok" (170) sú z veľkej časti
informačné dopyty — v skupine GDPR ostávajú len s nízkou ponukou a s negatívnymi
slovami `zákon`, `nariadenie`, `čo je`.

## Cieľová štruktúra

| Kampaň | Zacielenie | Rozpočet fáza 1 | Rozpočet fáza 2 |
|---|---|---|---|
| **A** SK – Search – Zvolen & BB kraj (lokálne) | BB kraj | 9 €/deň | 7 €/deň |
| **C** SK – Search – Firma & dokumenty (celoštátne) | celé SK | 6 €/deň | 10 €/deň |
| *D* SK – Search – Situácie (celoštátne) | celé SK | — | 3 €/deň, až po obsadení C |

Pozastavená kampaň „SK – Search – Poistné plnenie" sa **premenuje na kampaň C** (zachová
históriu účtu), zacielenie sa zmení na celé Slovensko. Situačné skupiny z verzie 1 idú do
samostatnej kampane D až vtedy, keď C beží aspoň mesiac — aby si vzájomne nekradli rozpočet.

Stratégia ponúk: C začína na **Maximalizovať kliknutia s limitom CPC 3,50 €** (pri 6 €/deň
to sú 2 kliky denne na založení s.r.o. — je to drahé, ale klik = človek, ktorý ide
zaplatiť ~520 €). Po 30 konverziách prejsť na Maximalizovať konverzie.

### Reklamné skupiny kampane C

| # | Skupina | Objem/mes | Fáza | Cieľová URL fáza 1 | Cieľová URL fáza 2 |
|---|---|---|---|---|---|
| 1 | Založenie s.r.o. | 2 600 | 1 | `/blog/zalozenie-sro` | `/zalozenie-sro` |
| 2 | Vymáhanie pohľadávok | 530 | 1 | `/blog/vymahanie-pohladavok` | `/vymahanie-pohladavok` |
| 3 | GDPR a dokumenty pre e-shop | 840 | 1 | `/blog/gdpr-eshop` | `/gdpr-dokumentacia` |
| 4 | Likvidácia a zrušenie s.r.o. | 870 | 2 | — | `/likvidacia-sro` |
| 5 | Ochranná známka | 620 | 2 | — | `/ochranna-znamka` |
| 6 | Zmeny v s.r.o. a prevod podielu | 280 | 2 | — | `/zmena-konatela-sidla-sro`, `/prevod-obchodneho-podielu` |
| 7 | Založenie živnosti | 1 830 | 2, nízka ponuka | — | `/zalozenie-zivnosti` |

**Nestavia sa:** ready-made (bez partnera nie je čo predať), osobný bankrot cez Search
(8 100 vyhľadávaní „bankrot" je prevažne informačných — téma ide cez organiku a článok;
balík z katalógu sa inzeruje až s vlastnou stránkou), poistné plnenie (nulový objem).

### Negatívne kľúčové slová (celá kampaň C)

`zadarmo`, `bezplatne`, `wikipedia`, `práca`, `brigáda`, `študent`, `kalkulačka`,
`forum`, `diskusia`, `svojpomocne`, `sám`, `ako na to`, `zákon`, `nariadenie`, `čo je`,
`definícia`, `účtovníctvo`, `účtovník`, `česko`, `čr`; v skupine 1 navyše `ready made`
a `sídlo` *(v skupine 6 „sídlo" ostáva — „zmena sídla" je cieľový dopyt)*.

**NIKDY** `vzor`, `vzory`, `tlačivo` — sú to cieľové dopyty pre produkt č. 3 (vzory).

---

## Reklamná skupina 1 — Založenie s.r.o.

**Cieľová URL (fáza 1):** `https://www.tkak.sk/blog/zalozenie-sro`
**Zobrazovaná cesta:** `/zalozenie-sro` · `/advokat`

**Kľúčové slová (frázová zhoda)**

```
"zalozenie sro"                 1 600/mes
"založenie sro"                   720/mes
"založenie sro online"            170/mes
"založenie firmy"                 110/mes
"zalozenie firmy"                 (bez diakritiky — objem neoverený, doplniť)
"založenie s.r.o."                (variant s bodkami — Google zlučuje, ponechať)
```

**Nadpisy** (max 30 znakov)

```
Založenie s.r.o. advokátom
Od 17. 8. 2026 nová forma
Dokument autorizuje advokát
Bez osvedčovania podpisov
Zápis do OR do 2 prac. dní
Založenie s.r.o. za 299 €
Súdny poplatok 220 € navyše
Celé Slovensko, na diaľku
Živnosti a daňová registrácia
Advokátska kancelária Zvolen
```

**Popisy** (max 90 znakov)

```
Od 17. 8. 2026 musí byť spoločenská zmluva notárska zápisnica alebo dokument od advokáta.
Pripravíme a autorizujeme zakladateľské dokumenty, ohlásime živnosti, podáme návrh na zápis.
Odmena 299 € s DPH, súdny poplatok 220 € samostatne. Spravidla 7 – 10 pracovných dní.
Registrový súd zapíše firmu do dvoch pracovných dní od úplného návrhu. Vec vedieme na diaľku.
```

Pozn. k § 29b: „nová forma" a „autorizuje advokát" sú opisy zákonného stavu (§ 57 ObchZ,
§ 1a zák. o advokácii), nie porovnanie s inými poskytovateľmi. Nepísať „len advokát"
— notár je rovnocenná alternatíva a existuje aj zjednodušený formulár (§ 110a).

---

## Reklamná skupina 2 — Vymáhanie pohľadávok

**Cieľová URL (fáza 1):** `https://www.tkak.sk/blog/vymahanie-pohladavok`
**Zobrazovaná cesta:** `/vymahanie` · `/pohladavky`

**Kľúčové slová (frázová zhoda)**

```
"vymáhanie pohľadávok"            210/mes
"vymahanie pohladavok"            (bez diakritiky — doplniť po overení)
"predžalobná výzva"               320/mes
"výzva na zaplatenie"             (doplniť po overení)
"neuhradená faktúra"              (doplniť po overení)
"platobný rozkaz"                 (doplniť po overení)
```

**Nadpisy**

```
Vymáhanie pohľadávok
Predžalobná výzva za 89 €
Od výzvy po exekúciu
Pevné ceny, vopred
Neuhradená faktúra?
Úroky a náhrada 40 € navyše
Platobný rozkaz
Advokát na pohľadávky
Celé Slovensko, na diaľku
Advokátska kancelária
```

**Popisy**

```
Predžalobná výzva do 2 pracovných dní za 89 €. Vyčíslime istinu, úroky aj paušálnu náhradu.
Ak dlžník nezaplatí, pripravíme návrh na platobný rozkaz. Cenu každého kroku poznáte vopred.
Preveríme premlčanie a vymáhateľnosť skôr, než do toho dáte ďalšie peniaze.
Zastupujeme veriteľov od výzvy po exekúciu. Rozsah aj odmenu dohodneme písomne.
```

---

## Reklamná skupina 3 — GDPR a dokumenty pre e-shop

**Cieľová URL (fáza 1):** `https://www.tkak.sk/blog/gdpr-eshop`
**Zobrazovaná cesta:** `/gdpr` · `/eshop`

**Kľúčové slová (frázová zhoda)**

```
"gdpr dokumentácia"                50/mes   — klik až 16,97 €: limit CPC 4 €
"gdpr pre eshop"                   (doplniť po overení; Search Console: 96 zobrazení)
"obchodné podmienky eshop"         30/mes
"reklamačný poriadok"             170/mes   — nízka ponuka, info dopyt
"ochrana osobných údajov"         590/mes   — nízka ponuka, info dopyt
```

**Nadpisy**

```
GDPR dokumentácia na mieru
Dokumenty pre e-shop
GDPR pre firmu za 199 €
Obchodné podmienky za 169 €
Reklamačný poriadok v cene
Do 7 pracovných dní
Spísané advokátom
Ročná aktualizácia
Pre e-shopy aj ambulancie
Advokátska kancelária
```

**Popisy**

```
Záznamy o spracovateľských činnostiach, informačná povinnosť, smernica, poverenia. 199 €.
Obchodné podmienky, reklamačný poriadok, zásady ochrany údajov a cookies pre e-shop. 169 €.
Dokumenty pripravíme podľa vášho dotazníka do 7 pracovných dní. Cenu poznáte vopred.
Kontrola povinných údajov na webe v cene. Aktualizácia pri zmene zákona za 49 €.
```

---

## Reklamná skupina 4 — Likvidácia a zrušenie s.r.o. *(fáza 2)*

**Cieľová URL:** `https://www.tkak.sk/likvidacia-sro` (vznikne podľa katalógu A2)

```
"likvidácia sro"                  480/mes
"zrušenie sro"                    390/mes
"likvidacia sro"  "zrusenie sro"  (bez diakritiky — doplniť po overení)
"ako zrušiť sro"                  (doplniť po overení)
"výmaz z obchodného registra"     (doplniť po overení)
```

**Nadpisy**

```
Likvidácia s.r.o.
Zrušenie firmy bez rizika
Posúdenie stavu firmy 149 €
Likvidácia od 690 €
Likvidátor, vestník, výmaz
Spravidla 6 – 9 mesiacov
Firma v exekúcii? Poradíme
Advokát na likvidácie
Celé Slovensko
Advokátska kancelária
```

**Popisy**

```
Najprv posúdime záväzky, majetok a nedoplatky a povieme, či je likvidácia správna cesta.
Vedieme celú likvidáciu: rozhodnutie, zápis likvidátora, vestník, zoznam pohľadávok, výmaz.
Súdne poplatky a zverejnenie sa účtujú samostatne. Cenu za vedenie dohodneme po posúdení.
Predlženú firmu nemožno likvidovať — vysvetlíme, kedy ide o konkurz a čo hrozí konateľovi.
```

---

## Reklamná skupina 5 — Ochranná známka *(fáza 2)*

**Cieľová URL:** `https://www.tkak.sk/ochranna-znamka` (katalóg A5)

```
"ochranná známka"                 480/mes
"ochranna znamka"                 (bez diakritiky — doplniť po overení)
"registrácia ochrannej známky"    140/mes
"ochranná známka cena"            (doplniť po overení)
"ochranná známka eú"              (doplniť po overení)
```

**Nadpisy**

```
Registrácia ochrannej známky
Rešerš kolízie v cene
Známka SR od 249 €
Známka EÚ od 349 €
Poplatky úradu samostatne
Správne triedy tovarov
Podanie do 5 prac. dní
Zastupovanie pred ÚPV a EUIPO
Advokát na ochranné známky
Advokátska kancelária
```

**Popisy**

```
Pred podaním preveríme kolízie s existujúcimi známkami v SR a EÚ a navrhneme triedy.
Prihlášku podáme na ÚPV SR alebo EUIPO a zastupujeme vás v konaní. Cenu poznáte vopred.
Odmena 249 € (SR) alebo 349 € (EÚ). Poplatky úradu sa platia samostatne podľa počtu tried.
Konanie na úrade trvá spravidla 4 – 6 mesiacov. Lehoty strážime za vás.
```

---

## Reklamná skupina 6 — Zmeny v s.r.o. a prevod podielu *(fáza 2)*

**Cieľové URL:** `/zmena-konatela-sidla-sro` (A4) · `/prevod-obchodneho-podielu` (A3) —
každá reklama má jednu finálnu URL, preto v praxi dve skupiny 6a (prevod) a 6b (zmeny).

```
6a  "prevod obchodného podielu"               90/mes   — klik až 4,34 €
6a  "zmluva o prevode obchodného podielu"    110/mes
6a  "predaj sro"                              (doplniť po overení)
6b  "zmena sídla firmy"                       70/mes
6b  "zmena sídla sro"                         (doplniť po overení)
6b  "zmena konateľa"                          10/mes
```

**Nadpisy**

```
Prevod obchodného podielu
Zmluva autorizovaná advokátom
Od 17. 8. 2026 povinná forma
Prevod podielu za 249 €
Zmena konateľa alebo sídla
Zmena v s.r.o. od 149 €
Súdny poplatok 50 € navyše
Zápis do OR do 2 prac. dní
Celé Slovensko, na diaľku
Advokátska kancelária
```

**Popisy**

```
Zmluva o prevode podielu musí byť notárska zápisnica alebo zmluva autorizovaná advokátom.
Pripravíme zmluvu, súhlas valného zhromaždenia a návrh na zápis zmeny. 249 € + 50 € poplatok.
Zmena konateľa, sídla, mena alebo predmetu: 149 € za zmenu, ďalšia v tom istom návrhu 49 €.
Pri viacosobovej s.r.o. a zmene konateľa zabezpečíme notársku zápisnicu, ktorú zákon vyžaduje.
```

---

## Reklamná skupina 7 — Založenie živnosti *(fáza 2, nízka ponuka)*

**Cieľová URL:** `https://www.tkak.sk/zalozenie-zivnosti` (A6) · limit CPC 0,60 €

```
"založenie živnosti"              720/mes
"zalozenie zivnosti"              390/mes
"znovuzaloženie živnosti"         720/mes
"obnovenie živnosti"              (doplniť po overení)
```

**Nadpisy**

```
Založenie živnosti za 29 €
Aj znovuzaloženie živnosti
Do 3 pracovných dní
Správne predmety podnikania
Daňová registrácia v cene
Voľná živnosť bez poplatku
Celé Slovensko, online
Advokátska kancelária
```

**Popisy**

```
Zatriedime predmety podnikania, ohlásime živnosť elektronicky a zaregistrujeme vás na dani.
Odmena 29 €. Voľná živnosť ohlásená elektronicky je bez správneho poplatku.
Keď živnosť prerastie do firmy, založíme vám s.r.o. — dokumenty autorizujeme ako advokáti.
```

Zámer skupiny: lacný prvý kontakt, nie marža. Držať ponuku nízko a sledovať, koľko
z týchto klientov sa do roka vráti na s.r.o.

---

## Kampaň A — lokálna (ostáva, zoštíhliť)

Pôvodné slová s „nízkym objemom" (vymáhanie pohľadávok advokát, advokát nehnuteľností,
právne služby zvolen, advokát súdny spor, kúpna zmluva byt advokát) vyhodiť. Ponechať
a doplniť len overené:

```
"advokát zvolen"                   40/mes
"právnik zvolen"                   90/mes
"advokát banská bystrica"          70/mes
"právnik online"                  210/mes   (celoštátne slovo — zvážiť presun do C)
"advokát online"                   40/mes
```

---

## Kampaň D — situácie *(až po obsadení C, 3 €/deň)*

Štyri skupiny z verzie 1 s overenými slovami, bez zmeny textov:

| Skupina | Slová (frázová zhoda) | Objem | URL |
|---|---|---|---|
| Neplatné skončenie PP | okamžité skončenie pracovného pomeru (210) · neplatná výpoveď (10) | 220 | `/neplatna-vypoved` |
| Exekúcia | upovedomenie o začatí exekúcie (50) · zastavenie exekúcie (30) · neoprávnená exekúcia (10) · námietky proti exekúcii (10) | 100 | `/zastavenie-exekucie` |
| Odškodnenie po nehode | sťaženie spoločenského uplatnenia (40) · odškodnenie po dopravnej nehode (20) | 60 | `/odskodnenie-dopravna-nehoda` |
| Škoda od štátu | prieťahy v konaní (20) · nesprávny úradný postup (10) · náhrada škody od štátu (10) | 40 | `/nahrada-skody-od-statu` |

Nadpisy a popisy: verzia 1 tohto súboru v git histórii (stav pred 23. 8. 2026) —
ostávajú platné, sú overené pri audite stránok 20. 8. 2026.

---

## Súlad s § 29b zákona o advokácii

Všetky texty sú vecné. Ceny sú konečné s DPH, poplatky štátu uvedené samostatne.
Tvrdenia o forme dokumentov opisujú zákon (§ 57, § 115 ods. 4, § 127a ods. 4, § 132
ObchZ; § 1a zák. o advokácii; § 50 ods. 4 zák. 29/2026), nie porovnanie s konkurenciou.
Nikde „najlacnejšie", „zaručene", „vyhráme". Advantage+ kreatíva ostáva **vypnutá** —
Google by texty generoval mimo týchto mantinelov.

## VYKONANÉ 24. 8. 2026 — prestavba v účte dokončená

Cez Google Ads UI (s overením identity používateľom) vykonané:

1. Kampaň „SK – Search – Poistné plnenie" **premenovaná** na „SK – Search – Firma &
   dokumenty (celoštátne)" — história zachovaná, campaignId 24148871722.
2. Nastavenia C: rozpočet **10 €/deň**, Maximalizovať kliknutia s **limitom CPC 3,50 €**,
   oblasť Slovensko, jazyk slovenčina (boli už nastavené).
3. Vytvorených **8 reklamných skupín** (1 Založenie s.r.o. · 2 Vymáhanie pohľadávok ·
   3 GDPR a dokumenty pre e-shop · 4 Likvidácia a zrušenie s.r.o. · 5 Ochranná známka ·
   6a Prevod obchodného podielu · 6b Zmeny v s.r.o. · 7 Založenie živnosti), spolu
   41 kľúčových slov vo frázovej zhode a 8 responzívnych reklám podľa tohto dokumentu.
   Finálne URL všetkých reklám overené v stĺpci „Cieľová webová adresa" — smerujú na
   produktové stránky. Reklamy sú v stave „Prebieha kontrola" (štandardné schvaľovanie).
4. Stará „Reklamná skupina č. 1" (poistné plnenie) **odstránená**.
5. Negatívne slová kampane C: z pôvodných poistných negatív **odstránené `vzor`
   a `tlačivo`** (cieľové dopyty e-shopu!), pridaných 14 nových (zadarmo, bezplatne,
   študent, svojpomocne, sám, ako na to, zákon, nariadenie, čo je, definícia,
   účtovníctvo, účtovník, česko, čr) — spolu 32. Poistné značky (allianz, generali…)
   ponechané, neškodia.
6. Kampaň A: rozpočet **12 → 7 €/deň**; odstránených 6 slov („predžalobná výzva" — presun
   do C skupiny 2, aby si kampane nekonkurovali + 5 slov s nízkym objemom); doplnené
   „právnik online" a „advokát online". Ostáva 6 overených slov.

**Nevykonané / na sledovanie:** B2 overenie pre finančné služby (vlákno 460402430 —
používateľ); slová „doplniť po overení" v skupinách — prehnať Plánovačom pri prvej
mesačnej kontrole; kampaň D (situácie) spustiť po mesiaci behu C; po 30 konverziách
prepnúť C na Maximalizovať konverzie.

## Poradie krokov (pôvodný plán)

1. Premenovať „SK – Search – Poistné plnenie" → „SK – Search – Firma & dokumenty (celoštátne)", zacielenie celé SK, 6 €/deň, Max. kliknutia s limitom CPC 3,50 €.
2. Vytvoriť skupiny 1 – 3 (fáza 1) podľa tohto dokumentu; pred uložením prehnať Plánovačom slová označené „doplniť po overení" a vyhodiť tie s nulovým objemom.
3. Kampaň A: vyhodiť slová s nízkym objemom, rozpočet 9 €/deň.
4. Negatívne slová na úrovni kampane C (bez `vzor`).
5. ~~Postaviť landing pages~~ HOTOVO 24. 8. — všetkých 13 stránok nasadených naraz.
6. Vytvoriť rovno aj skupiny 4 – 7 s cieľmi podľa stĺpca „fáza 2“; rozpočty C 10 € / A 7 €.
7. Po mesiaci behu C spustiť kampaň D (situácie) na 3 €/deň.
8. Vyhodnocovať podľa **ceny za dopyt** (konverzia „Lead – dopyt (web)" + „Hovor"), nie klikov. Cieľ: pod 60 € za dopyt pri firemných témach (pri hodnote zákazky ~520 € je to únosné).

---

## 31. 8. 2026 — zamietnutá reklama a podané odvolanie

Google 25. 8. večer zamietol jednu reklamu kampane C podľa pravidiel **„Dokumenty
orgánov verejnej správy a úradné služby"**. To isté pravidlo označilo ďalšie dve
reklamy ako „Vhodné (s obmedzením)" — spolu 3 reklamy:

| Skupina | Stav |
|---|---|
| **7 · Založenie živnosti** | **Zamietnutá** |
| 1 · Založenie s.r.o. | Vhodné (s obmedzením) |
| 4 · Likvidácia a zrušenie s.r.o. | Vhodné (s obmedzením) |

Pravidlo je uplatnené **nesprávne**: jeho vlastný text v časti „Služby, ktoré nie sú
týmito pravidlami obmedzené" výslovne uvádza *právne služby*. Spúšťačom je zrejme
vyznenie skupiny 7, ktoré znie ako vybavenie úradnej veci namiesto právnej služby —
najmä „Voľná živnosť bez poplatku" (číta sa ako pomoc s platbou úradného poplatku)
a „ohlásime živnosť elektronicky a zaregistrujeme vás na dani".

**Odvolanie podané 31. 8. 2026** cez Nástroje → Odstraňovanie problémov → Správca
pravidiel → *Odvolať sa*. Dôvod **Námietka proti rozhodnutiu**, rozsah **všetky
ovplyvnené reklamy v kampani C** (nie iba skupina 7 — aby sa uvoľnili aj tie dve
obmedzené). Stav *Rozpracované*; výsledok sledovať v záložke „História odvolaní".
⚠️ Reklamy sa počas kontroly **nesmú upravovať** — úprava odvolanie zruší.

**Ak odvolanie neprejde**, vymeniť texty skupiny 7 za znenie, ktoré vedie právnou
službou a nie úradným úkonom (overené dĺžky: nadpisy ≤ 30, popisy ≤ 90 znakov):

Nadpisy:
```
Živnosť s advokátom za 29 €
Advokát pre živnostníkov
Voľná či remeselná živnosť?
Poradíme, čo si zapísať
Do 3 pracovných dní
Aj obnovenie živnosti
Celé Slovensko, online
Advokátska kancelária
```

Popisy:
```
Advokátska kancelária pre začínajúcich podnikateľov. Odmena 29 €, celé Slovensko.
Posúdime, či vám stačí živnosť alebo sa viac oplatí s.r.o. — s číslami, nie pocitovo.
Poradíme, ktoré predmety podnikania si zapísať a čo k nim treba doložiť.
Keď živnosť prerastie do firmy, zakladateľské dokumenty autorizujeme ako advokáti.
```

Formulácia „voľná živnosť bez poplatku" by aj tak bola pri remeselníkoch zavádzajúca —
remeselná živnosť stojí 22 €, elektronicky 11 € (položka 148 zákona č. 145/1995 Z. z.).

**Notifikácie:** e-mail o zamietnutí prišiel na `booking@tatravillas.sk`. Predvoľby
e-mailov účtu 395-896-5684 prehodiť na `kohut@tkak.sk`, inak policy alerty pre
kanceláriu chodia do schránky ubytovania.
