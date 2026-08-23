# Prestavba Google Ads na tematické stránky

Pripravené 20. 8. 2026 · účet **395-896-5684** (kohút & partners) pod MCC 298-181-8748

## Prečo

GA4 za 23. 6. – 19. 8. 2026: **236 z 277 platených návštev pristane na domovskej
stránke.** Človek, ktorý hľadal „zastavenie exekúcie", dostane všeobecnú stránku
kancelárie a musí sa preklikať. Miera preklikov je pritom 10,9 % — reklama funguje,
zlyháva to, čo je za klikom.

Náklad na jeden dopyt je **219,42 €** (438,84 € / 2 dopyty).

Web má šesť stránok písaných presne na jednu situáciu, každú s lehotou a postupom.
Ani jedna nie je cieľom žiadnej reklamy.

## Blokery — vyriešiť PRED spustením

| # | Bloker | Prečo blokuje | Kto |
|---|---|---|---|
| B1 | `generate_lead` nie je kľúčová udalosť v GA4 | Ads vidí 0 konverzií, nemá podľa čoho optimalizovať a merať cenu za dopyt | používateľ (GA4 → Správa → Udalosti) |
| B2 | Výstraha „Overenie pre oblasť finančných služieb v EÚ/EHP" | Ak je účet klasifikovaný ako finančné služby, môže byť doručovanie obmedzené | používateľ (vlákno 460402430) |
| B3 | ~~Kampaň „SK – Search – Poistné plnenie" má 0 zobrazení~~ **VYRIEŠENÉ 20. 8.** | Príčinou sú kľúčové slová v presnej zhode s nulovým objemom — pozri nižšie | — |

### B3 — diagnóza z 20. 8. 2026

Kampaň je **Aktívne**, vyhľadávacia sieť, 3 €/deň, Maximalizovať kliknutia,
reklama je **Vhodné** (schválená, účinnosť „Zlá"). Nič z toho ju nebrzdí.
Brzdia ju **kľúčové slová**:

| Kľúčové slovo | Zhoda | Stav |
|---|---|---|
| „krátenie poistného plnenia" | frázová | Vhodné |
| „sťažnosť na poisťovňu" | frázová | Vhodné |
| [poisťovňa nechce zaplatiť] | **presná** | **Nevhodné — nízky objem vyhľadávania** |
| [spor s poisťovňou] | **presná** | **Nevhodné — nízky objem vyhľadávania** |
| [krátené poistné plnenie] | **presná** | **Nevhodné — nízky objem vyhľadávania** |
| [advokát poistné…] | **presná** | **Nevhodné — nízky objem vyhľadávania** |

Väčšina slov je v **presnej zhode** a Google ich pre nulový objem vôbec
neservíruje. Dve, ktoré vhodné sú, majú tak malý objem, že nazbierali nula
zobrazení. Rovnaký problém má aj lokálna kampaň — z jej 27 slov je „nízky
objem" na „vymáhanie pohľadávok advokát", „advokát nehnuteľností", „právne
služby zvolen", „advokát súdny spor" aj „kúpna zmluva byt advokát".

**Dôsledok pre túto prestavbu:** slovenské právne frázy sú príliš úzke na
presnú zhodu. Preto sú v tomto dokumente všetky kľúčové slová vo **frázovej
zhode** — a aj tak treba počítať s tým, že tie najšpecifickejšie („nesprávna
RPMN", „rozhodcovský rozsudok exekúcia") objem mať nebudú. Pri každej skupine
preto nechať aj jedno-dve širšie slová, ktoré objem majú, a presnosť riešiť
negatívnymi kľúčovými slovami, nie zúžením zhody.

## Cieľová štruktúra

Tri kampane namiesto dvoch. Rozpočet 15 €/deň sa neprekračuje — len prerozdelí.

| Kampaň | Cieľ | Zacielenie | Rozpočet |
|---|---|---|---|
| **A** SK – Search – Zvolen & BB kraj (lokálne) | značka a všeobecné „advokát Zvolen" | BB kraj | 7 €/deň *(z 12)* |
| **C** SK – Search – Situácie (celoštátne) | šesť tematických stránok, 6 reklamných skupín | celé Slovensko | 8 €/deň *(z toho 3 od pôvodnej kampane Poistné plnenie)* |

Kampaň „SK – Search – Poistné plnenie" sa **nezakladá nanovo** — premenuje sa na
kampaň C a doplní o zvyšných päť reklamných skupín. Zachová sa tým jej história.

Spoločné nastavenia kampane C: Vyhľadávacia sieť, **Obsahová sieť VYPNUTÁ**,
Slovensko, slovenčina, Maximalizovať počet kliknutí, strop CPC 1,20 €,
AI Max VYPNUTÉ, politický obsah v EÚ = Nie.

### Negatívne kľúčové slová (celá kampaň C)

`zadarmo`, `bezplatne`, `vzor`*, `wikipedia`, `práca`, `brigáda`, `študent`,
`kalkulačka`, `forum`, `diskusia`, `svojpomocne`, `sám`, `ako na to`

\* **POZOR:** `vzor` a `vzory` sa **nikdy** nepridávajú ako negatívne na účte tkak —
pripravuje sa e-shop so vzormi dokumentov, sú to cieľové dopyty. Tu uvedené
`vzor` je preto **preškrtnuté, nepoužiť.** Ponechané v zozname len ako
pripomienka, prečo tam nie je.

---

## Reklamná skupina 1 — Zamietnuté poistné plnenie

**Cieľová URL:** `https://www.tkak.sk/zamietnute-poistne-plnenie`
**Zobrazovaná cesta:** `/poistne-plnenie` · `/zamietnute`

**Kľúčové slová (frázová zhoda)**

```
"zamietnuté poistné plnenie"
"poisťovňa nechce plniť"
"poisťovňa zamietla škodu"
"krátené poistné plnenie"
"odvolanie proti poisťovni"
"spor s poisťovňou"
"poisťovňa neuznala škodu"
"nevyplatené poistné plnenie"
```

**Nadpisy** (max 30 znakov)

```
Zamietli vám poistné plnenie
Poisťovňa nechce plniť?
Posúdenie zamietacieho listu
Advokát na spory s poisťovňou
Krátili vám poistné plnenie
Nárok voči poisťovni
Trojročná premlčacia lehota
Posúdime váš prípad
Zastupovanie proti poisťovni
Advokátska kancelária
```

**Popisy** (max 90 znakov)

```
Posúdime zamietací list a povieme, či má zmysel nárok uplatniť. Cenu poznáte vopred.
Právo na plnenie sa premlčuje za tri roky, plynúť začína rok po poistnej udalosti.
Zastupujeme v konaní proti poisťovni. Rozsah aj odmenu dohodneme písomne vopred.
Vec vieme viesť na diaľku, e-mailom aj cez videohovor. Advokátska kancelária Zvolen.
```

---

## Reklamná skupina 2 — Neplatná výpoveď

**Cieľová URL:** `https://www.tkak.sk/neplatna-vypoved`
**Zobrazovaná cesta:** `/neplatna-vypoved` · `/vypoved`

**Kľúčové slová (frázová zhoda)**

```
"neplatná výpoveď"
"dostal som výpoveď"
"okamžité skončenie pracovného pomeru"
"výpoveď zo zamestnania právnik"
"napadnúť výpoveď"
"žaloba na neplatnosť výpovede"
"výpoveď v ochrannej dobe"
"skončenie pracovného pomeru advokát"
```

**Nadpisy**

```
Dostali ste výpoveď?
Na žalobu máte dva mesiace
Neplatná výpoveď v práci
Lehota je prekluzívna
Posúdenie výpovede
Advokát na pracovné právo
Napadnutie výpovede na súde
Náhrada mzdy za spor
Okamžité skončenie pomeru
Advokátska kancelária
```

**Popisy**

```
Neplatnosť treba uplatniť na súde do dvoch mesiacov. Lehota sa nedá odpustiť.
Posúdime výpoveď a povieme, či obstojí. Cenu za posúdenie poznáte vopred.
Pri neplatnom skončení patrí náhrada mzdy v sume priemerného zárobku.
Zastupujeme zamestnancov v konaní o neplatnosť skončenia pracovného pomeru.
```

---

## Reklamná skupina 3 — Odškodnenie po dopravnej nehode

**Cieľová URL:** `https://www.tkak.sk/odskodnenie-dopravna-nehoda`
**Zobrazovaná cesta:** `/odskodnenie` · `/dopravna-nehoda`

**Kľúčové slová (frázová zhoda)**

```
"odškodnenie po dopravnej nehode"
"bolestné po nehode"
"sťaženie spoločenského uplatnenia"
"odškodné od poisťovne nehoda"
"nárok na bolestné"
"odškodnenie zranenia pri nehode"
"advokát dopravná nehoda"
"náhrada škody po nehode"
```

**Nadpisy**

```
Odškodnenie po nehode
Bolestné a trvalé následky
Posúdime lekársky posudok
Ponuka poisťovne býva nízka
Sťaženie spol. uplatnenia
Advokát na odškodnenie
Nepodpisujte dohodu hneď
Nárok sa dá prepočítať
Strata na zárobku po úraze
Advokátska kancelária
```

**Popisy**

```
Prepočítame bodové hodnotenie a ponuku poisťovne. Cenu poznáte pred začatím práce.
Bolestné a sťaženie spoločenského uplatnenia sú dva samostatné nároky.
Dohoda podpísaná pred ustálením stavu spravidla uzavrie aj neskoršie nároky.
Zastupujeme poškodených voči poisťovni vinníka aj v súdnom konaní.
```

---

## Reklamná skupina 4 — Bezúročný spotrebiteľský úver

**Cieľová URL:** `https://www.tkak.sk/bezurocny-uver`
**Zobrazovaná cesta:** `/bezurocny-uver` · `/uverova-zmluva`

**Kľúčové slová (frázová zhoda)**

```
"bezúročný úver"
"chyba v úverovej zmluve"
"nesprávna RPMN"
"preverenie úverovej zmluvy"
"nebankový úver právnik"
"neprimeraná odplata úver"
"vrátenie úrokov z úveru"
"spotrebiteľský úver advokát"
```

**Nadpisy**

```
Chyba v úverovej zmluve
Úver môže byť bezúročný
Preverenie úverovej zmluvy
Nesprávna RPMN v zmluve
Vraciate len požičanú sumu
Advokát na spotreb. úvery
Posúdime zmluvu
Chýbajúce náležitosti zmluvy
Neposúdená schopnosť splácať
Advokátska kancelária
```

**Popisy**

```
Chyba v zmluve môže znamenať, že vraciate istinu bez úrokov a poplatkov.
Prepočet RPMN je matematická kontrola, ktorú urobíme z údajov vo vašej zmluve.
Dôvody bezúročnosti stanovuje zákon o spotrebiteľských úveroch taxatívne.
Pošlite zmluvu na preverenie. Rozsah aj odmenu dohodneme písomne vopred.
```

---

## Reklamná skupina 5 — Zastavenie exekúcie

**Cieľová URL:** `https://www.tkak.sk/zastavenie-exekucie`
**Zobrazovaná cesta:** `/zastavenie-exekucie` · `/exekucia`

**Kľúčové slová (frázová zhoda)**

```
"zastavenie exekúcie"
"upovedomenie o začatí exekúcie"
"námietky proti exekúcii"
"obrana proti exekúcii"
"premlčaná pohľadávka exekúcia"
"exekúcia advokát"
"rozhodcovský rozsudok exekúcia"
"neoprávnená exekúcia"
```

**Nadpisy**

```
Prišlo upovedomenie o exekúcii
Na obranu máte 15 dní
Návrh na zastavenie exekúcie
Odkladný účinok návrhu
Advokát na exekúcie
Premlčaná pohľadávka
Posúdime vašu exekúciu
Deň doručenia rozhoduje
Exekučný titul môže padnúť
Advokátska kancelária
```

**Popisy**

```
Návrh podaný do 15 dní od doručenia upovedomenia má odkladný účinok.
Súd exekúciu zastaví, ak nárok zanikol alebo titul bránil vymáhateľnosti.
Posúdime, či je vymáhaná pohľadávka premlčaná. Cenu poznáte vopred.
Zastupujeme povinných v exekučnom konaní. Vec vedieme aj na diaľku.
```

---

## Reklamná skupina 6 — Náhrada škody od štátu

**Cieľová URL:** `https://www.tkak.sk/nahrada-skody-od-statu`
**Zobrazovaná cesta:** `/nahrada-skody` · `/od-statu`

**Kľúčové slová (frázová zhoda)**

```
"náhrada škody od štátu"
"nezákonné rozhodnutie náhrada"
"prieťahy v konaní"
"nesprávny úradný postup"
"odškodnenie za väzbu"
"zastavené trestné stíhanie odškodnenie"
"žaloba proti štátu"
"zodpovednosť štátu za škodu"
```

**Nadpisy**

```
Za škodu zodpovedá štát
Nezákonné rozhodnutie
Prieťahy v súdnom konaní
Náhrada škody od štátu
Nemajetková ujma v peniazoch
Advokát na spory so štátom
Posúdime váš nárok
Zodpovednosť je objektívna
Zastavené trestné stíhanie
Advokátska kancelária
```

**Popisy**

```
Nezákonné rozhodnutie aj neprimeraná dĺžka konania zakladajú zodpovednosť štátu.
Uhrádza sa skutočná škoda, ušlý zisk a v odôvodnených prípadoch nemajetková ujma.
Pred žalobou je povinné predbežné prerokovanie nároku u príslušného orgánu.
Premlčacia lehota sú tri roky. Počas prerokovania lehota neplynie.
```

---

## Súlad s § 29b zákona o advokácii

Všetky texty sú vecné a objektívne. Neobsahujú porovnávanie s inými advokátmi,
sľub výsledku ani hodnotiace tvrdenia o kvalite. Lehoty a inštitúty zodpovedajú
zneniam overeným pri audite kampaňových stránok 20. 8. 2026.

Formulácie „Posúdime váš prípad" a „Cenu poznáte vopred" opisujú spôsob práce,
nie výsledok. Nikde nie je uvedené „vyhráme", „získate" ani „nárok máte".

## Poradie krokov

1. **B1** — označiť `generate_lead` ako kľúčovú udalosť v GA4 a naimportovať ju do Ads.
2. **B3** — otvoriť kampaň „SK – Search – Poistné plnenie" a zistiť, prečo má 0 zobrazení.
3. **B2** — dotiahnuť overenie pre finančné služby, ak sa potvrdí, že sa účtu týka.
4. Premenovať kampaň na „SK – Search – Situácie (celoštátne)", zacielenie na celé SK.
5. Doplniť päť reklamných skupín podľa tohto dokumentu.
6. Prerozdeliť rozpočty na 7 + 8 €/deň.
7. Po dvoch týždňoch vyhodnotiť podľa ceny za dopyt, nie podľa počtu klikov.
