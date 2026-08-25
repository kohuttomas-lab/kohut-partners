# Katalóg balíkov pre e-shop — rozpracovanie

kohút & partners · 23. 8. 2026 · nadväzuje na [eshop-research-dopyt.md](eshop-research-dopyt.md)

Rozpracované: úroveň A celá (7 + A4b vyčlenené 24. 8. 2026), úroveň B celá (4), z úrovne C
závet a kataster, plus osobný bankrot ako samostatný balík. Spolu **15 balíkov**.

Každý balík má rovnakú štruktúru: pre koho · čo obsahuje · čo neobsahuje · cena · postup ·
lehota · právny základ · čo od klienta potrebujeme · slug · kľúčové slová · upsell.
Právne odkazy sú zo znení účinných k 17. 8. 2026 (knižnica predpisov). Ceny sú návrh —
všetky sú bez DPH? **Nie:** na webe sa ceny uvádzajú **s DPH** (`common.withVat`), preto
sú všetky sumy nižšie **konečné s DPH**, súdne a správne poplatky sú uvedené samostatne
a účtujú sa v skutočnej výške.

Dve zásady naprieč katalógom:

- **Názov produktu = to, čo ľudia píšu do Googlu.** Ľudia hľadajú bez diakritiky
  („zalozenie sro" 1 600 vs. „založenie sro" 720). V titulku stránky, v URL a v kľúčových
  slovách musí byť obe formy; v nadpise na stránke prirodzene s diakritikou.
- **Novela 29/2026 je argument č. 1** pri všetkých firemných balíkoch. Konkurencia ho zatiaľ
  nemá. Nepreháňať: hovoriť presne, čo zákon vyžaduje a čo advokát pri autorizácii robí.

---

## Spoločný právny základ firemných balíkov (A1 – A4b)

Zákon č. 29/2026 Z. z. o obchodnom registri nadobudol účinnosť **17. 8. 2026** a čl. II
novelizoval Obchodný zákonník (zák. č. 513/1991 Zb.):

| Ustanovenie ObchZ | Nová forma |
|---|---|
| § 57 ods. 1 | spoločenská zmluva — **notárska zápisnica alebo dokument autorizovaný advokátom** |
| § 57 ods. 3 | zakladateľská listina — to isté |
| § 63 | doplnená forma dokumentu autorizovaného advokátom |
| § 115 ods. 4 | zmluva o prevode obchodného podielu — **notárska zápisnica alebo zmluva autorizovaná advokátom** |
| § 127a ods. 4 | priebeh valného zhromaždenia pri zmene pomeru hlasov, zmene pomeru podielov a pri vymenovaní/odvolaní konateľov — **len notárska zápisnica** |
| § 132 ods. 1 | rozhodnutie jediného spoločníka o tých istých veciach — notárska zápisnica **alebo dokument autorizovaný advokátom** |

Zákon č. 29/2026 Z. z. ďalej:

- **§ 50 ods. 4** — ak je dokument autorizovaný advokátom, nevyžaduje sa úradné osvedčenie podpisov.
- **§ 126 ods. 1** — konania začaté do 16. 8. 2026 sa dokončia podľa starých predpisov.
- **Tretia cesta ostáva:** založenie zjednodušeným spôsobom cez elektronický formulár
  ministerstva (§ 57 ods. 4 a § 110a ObchZ) — najviac 5 spoločníkov, len peňažné vklady,
  iba vybrané voľné živnosti (max. 15), bez dozornej rady. V textoch preto nikdy „len
  notár alebo advokát" bez tejto výhrady.

Zákon č. 586/2003 Z. z. o advokácii (čl. IX novely):

- **§ 1a ods. 1 a 2** — autorizácia je spísanie dokumentu, zistenie totožnosti účastníkov,
  posúdenie, či úkon neodporuje zákonu, neobchádza ho, neprieči sa dobrým mravom a či ním
  nevznikne škoda.
- **§ 1ab** — doložka o autorizácii (vyhlásenie advokáta, počet listov, miesto, dátum, podpis, pečiatka).
- **§ 1ac** — advokát uloží autorizovaný dokument do **registra autorizácií komory v deň autorizácie**.

Súdne poplatky (zák. č. 71/1992 Zb., položka 17, znenie od 17. 8. 2026): prvozápis
s.r.o. **220 €**, zápis zmeny **50 €**.

> **Otvorená otázka pre advokáta:** či sa zistenie totožnosti pri autorizácii dá vykonať
> na diaľku (videoidentifikácia) alebo vyžaduje osobnú prítomnosť. Od toho závisí, či
> balíky A1 a A3 môžeme inzerovať ako „celé online". Kým nie je jasné, texty hovoria
> „bez návštevy notára", nie „bez osobného stretnutia".

---

## ÚROVEŇ A — firemný životný cyklus

### A1 · Založenie s.r.o. na kľúč

**Pre koho:** zakladateľ (jeden alebo viacerí) s.r.o. so sídlom v SR. Slovenskí aj zahraniční
zakladatelia (tí majú vlastnú stránku — cfr).

**Obsahuje**
- konzultácia k nastaveniu spoločnosti (predmety podnikania, podiely, konanie za spoločnosť, rozsah oprávnení konateľa)
- zakladateľská listina / spoločenská zmluva **vo forme dokumentu autorizovaného advokátom** (§ 57 ObchZ) vrátane doložky a uloženia do registra autorizácií
- vyhlásenie správcu vkladu, podpisový vzor konateľa, súhlas vlastníka so sídlom (vzor), čestné vyhlásenia
- ohlásenie voľných živností (neobmedzený počet)
- návrh na prvozápis do obchodného registra a jeho autorizované podanie
- registrácia na daň z príjmov po vzniku
- odovzdanie: výpis z OR, živnostenské oprávnenie, kompletná dokumentácia v PDF

**Neobsahuje:** súdny poplatok 220 €, správne poplatky za remeselné/viazané živnosti, sídlo
(odporučíme partnera), účtovníctvo, registráciu k DPH.

**Cena:** **299 €** s DPH + súdny poplatok 220 € = 519 € celkom. Alternatíva na stránke:
jedna suma **„519 € všetko v cene"** s rozpisom. Odporúčam druhú — konkurencia inzeruje
jednu sumu a ľudia porovnávajú jedno číslo.

**Postup a lehota:** 1) objednávka + dotazník (meno, sídlo, predmety, spoločníci, konateľ),
2) do 2 pracovných dní návrh dokumentov, 3) autorizácia a podpisy, 4) živnosti (3 prac. dni),
5) návrh do OR — registrový súd zapíše do 2 pracovných dní od úplného návrhu. **Celkovo
spravidla 7 – 10 pracovných dní.**

**Podklady:** OP/pas zakladateľov a konateľa, adresa sídla + doklad o vlastníctve/súhlas,
zoznam predmetov podnikania, výška a rozdelenie vkladov.

**Slug:** `/zalozenie-sro` · **Title:** „Založenie s.r.o. online 2026 — zalozenie sro od advokáta za 519 €"
**Kľúčové slová:** zalozenie sro · založenie sro · založenie s.r.o. online · založenie firmy · zalozenie firmy · založiť sro cena · spoločenská zmluva advokát · zakladateľská listina

**Argument, ktorý konkurencia nemá:** *Od 17. augusta 2026 musí byť spoločenská zmluva
aj zakladateľská listina vo forme notárskej zápisnice alebo dokumentu autorizovaného
advokátom (§ 57 Obchodného zákonníka). Zakladáme ako advokáti — dokument autorizujeme
sami, podpisy netreba úradne osvedčovať (§ 50 ods. 4 zákona o obchodnom registri) a
zakladateľská zmluva je uložená v registri autorizácií Slovenskej advokátskej komory.*

**Upsell:** sídlo (partner), GDPR dokumentácia (B1), dokumenty pre e-shop (B2), ochranná
známka (A5), paušál Štart.

---

### A2 · Zrušenie a likvidácia s.r.o.

**Pre koho:** spoločník alebo konateľ, ktorý chce firmu ukončiť riadne — nie nechať ju
„vyhniť" do ex offo výmazu s rizikom diskvalifikácie.

**Dva produkty, lebo proces je viacmesačný:**

**A2a · Posúdenie a plán ukončenia — 149 €**
- preverenie záväzkov, majetku, daňových nedoplatkov, exekúcií
- odporúčanie cesty: likvidácia / zlúčenie / predaj podielu / konkurz (ak je predlžená)
- harmonogram, odhad nákladov a trvania, zoznam podkladov
- výstup: písomné stanovisko do 5 pracovných dní

**A2b · Vedenie likvidácie — od 690 €** (cena sa dohodne podľa stavu firmy po A2a; A2a sa
započíta)
- rozhodnutie o zrušení spoločnosti a vstupe do likvidácie (pri jedinom spoločníkovi
  autorizované advokátom, inak notárska zápisnica podľa § 127a ods. 4 — uviesť)
- ustanovenie likvidátora, zápis do OR, oznámenie v Obchodnom vestníku
- zoznam pohľadávok, likvidačná účtovná závierka (spolupráca s účtovníkom klienta)
- návrh na výmaz z OR
- neobsahuje: súdne poplatky (50 € zmena, výmaz), poplatok za zverejnenie, preddavok na
  likvidáciu, účtovné práce

**Lehota:** likvidácia zo zákona trvá najmenej niekoľko mesiacov (lehota na prihlášky
pohľadávok po zverejnení); reálne **6 – 9 mesiacov**.

**Slug:** `/likvidacia-sro` · **Title:** „Likvidácia s.r.o. a zrušenie firmy 2026 — likvidacia sro, zrusenie sro"
**Kľúčové slová:** likvidácia sro · likvidacia sro · zrušenie sro · zrusenie sro · ako zrušiť sro · výmaz z obchodného registra · ukončenie podnikania sro

**Upsell:** konkurz (ak je predlžená), prevod podielu (A3) ako alternatíva.

---

### A3 · Prevod obchodného podielu

**Pre koho:** predávajúci alebo kupujúci podielu v s.r.o.; aj vstup nového spoločníka.

**Obsahuje**
- zmluva o prevode obchodného podielu **autorizovaná advokátom** (§ 115 ods. 4 ObchZ — bez
  notárskej zápisnice alebo advokáta je neplatná)
- preverenie, či spoločenská zmluva prevod pripúšťa a či treba súhlas valného zhromaždenia
- rozhodnutie spoločníka / zápisnica z VZ o súhlase s prevodom
- vyhlásenie nadobúdateľa o pristúpení k spoločenskej zmluve
- preverenie daňových nedoplatkov prevodcu a nadobúdateľa (podmienka zápisu)
- návrh na zápis zmeny do OR, autorizované podanie
- uloženie zmluvy do registra autorizácií

**Neobsahuje:** súdny poplatok 50 €, daňové posúdenie kúpnej ceny, úschovu kúpnej ceny
(samostatne — advokátska úschova).

**Cena:** **249 €** + 50 € poplatok.
**Lehota:** 5 – 10 pracovných dní.
**Podklady:** OP prevodcu a nadobúdateľa, aktuálna spoločenská zmluva, dohodnutá cena
a podmienky.

**Slug:** `/prevod-obchodneho-podielu` · **Title:** „Prevod obchodného podielu v s.r.o. 2026 — zmluva autorizovaná advokátom"
**Kľúčové slová:** prevod obchodného podielu · zmluva o prevode obchodného podielu · predaj sro · predaj firmy sro · zmena spoločníka sro

**Upsell:** advokátska úschova kúpnej ceny, zmena konateľa (A4b), due diligence pri kúpe.

**Vzťah k vzoru 03/01 (rozhodnuté 24. 8. 2026):** e-shopový vzor „Zmluva o prevode
obchodného podielu" za 29 € sa predáva samostatne — s výrazným upozornením priamo
v produkte, že bez autorizácie advokátom alebo notárskej zápisnice je zmluva neplatná
(§ 115 ods. 4) a slúži ako podklad na autorizáciu. Vzor je most k tejto službe.
**Návrh na odsúhlasenie:** 29 € za vzor započítať do ceny služby, ak si zákazník
autorizáciu objedná do 30 dní.

---

### A4 · Zmena v s.r.o. (sídlo · obchodné meno · predmet podnikania · základné imanie)

**Pre koho:** existujúca s.r.o., ktorá potrebuje zapísať zmenu.

**Obsahuje**
- rozhodnutie jediného spoločníka (autorizované advokátom, § 132 ods. 1) alebo zápisnica z VZ
- úplné znenie spoločenskej zmluvy / zakladateľskej listiny po zmene
- pri sídle: súhlas vlastníka, pri predmete: ohlásenie živností
- návrh na zápis zmeny do OR, autorizované podanie

**Neobsahuje:** súdny poplatok 50 €, správne poplatky za živnosti, **vymenovanie alebo
odvolanie konateľa** — to je samostatný balík A4b, lebo má inú, prísnejšiu formu.

**Cena:** **149 €** jedna zmena; každá ďalšia v tom istom návrhu **+49 €** (súdny poplatok
50 € pokrýva ľubovoľný počet zmien v jednom návrhu — pozn. 1 k položke 17).
**Lehota:** 3 – 7 pracovných dní.

**Slug:** `/zmena-konatela-sidla-sro` · **Title:** „Zmena konateľa, sídla alebo názvu s.r.o. 2026 — zápis zmeny do OR od 149 €"
**Kľúčové slová:** zmena konateľa · zmena sídla firmy · zmena sídla sro · zmena obchodného mena · zmena predmetu podnikania · zápis zmeny obchodný register

---

### A4b · Vymenovanie alebo odvolanie konateľa

**Prečo samostatne:** je to jediná zmena v s.r.o., ktorú nemožno urobiť obyčajným
podpísaným rozhodnutím ani s úradne osvedčeným podpisom. Pri **viacosobovej** s.r.o. musí
byť priebeh valného zhromaždenia osvedčený **notárskou zápisnicou** (§ 127a ods. 4
písm. c) ObchZ) — advokát tu alternatívou nie je. Pri **jednoosobovej** s.r.o. sa
rozhodnutie jediného spoločníka musí vyhotoviť vo forme notárskej zápisnice **alebo
dokumentu autorizovaného advokátom** (§ 132 ods. 1 posledná veta, ktorá odkazuje na
§ 127a ods. 4).

**Predajný argument (len pri jednoosobovej s.r.o.):** klient nemusí ísť k notárovi vôbec.
Rozhodnutie autorizujeme sami a podľa § 50 ods. 4 zákona o obchodnom registri odpadá aj
úradné osvedčenie podpisu na **podpisovom vzore** nového konateľa (§ 34 písm. g), ktorý by
inak musel podpísať pred notárom alebo na obci.

**Obsahuje**
- posúdenie spoločenskej zmluvy (kvórum, osobitný postup) a preverenie prekážok zápisu
  v registri diskvalifikácií a v registri poverení na vykonanie exekúcie (§ 51 ods. 3
  zák. 29/2026) — pred podaním, nie po zamietnutí
- rozhodnutie o ustanovení do funkcie alebo o skončení funkcie (§ 34 písm. e), súhlas
  s ustanovením (písm. f), podpisový vzor konateľa (písm. g)
- variant A: autorizácia rozhodnutia aj podpisového vzoru advokátom · variant B: príprava
  podkladov na valné zhromaždenie a sprevádzanie u notára
- návrh na zápis zmeny a jeho elektronické podanie, odovzdanie výpisu z OR

**Neobsahuje:** súdny poplatok 50 €, pri variante B odmenu notára (notárska tarifa
31/1993 Zb. — na stránke uviesť aspoň rádový odhad, inak cena vyzerá zavádzajúco),
zmluvu o výkone funkcie a rozhodnutie o odmene konateľa (to vyžaduje úradne osvedčený
podpis podľa § 125 ods. 1 písm. f).

**Cena:** **199 €** jednoosobová s.r.o. (autorizácia u nás) · **149 €** viacosobová s.r.o.
(zápisnica u notára) + súdny poplatok 50 €. Ďalšia zmena v tom istom návrhu +49 €.
**Lehota:** variant A spravidla 3 – 5 pracovných dní (registrový súd zapíše do 2 pracovných
dní od úplného návrhu, § 58 ods. 1); variant B podľa termínu u notára.

**Umiestnenie:** nie samostatná stránka — dopyt je malý („zmena konateľa" 10/mes,
„rozhodnutie jediného spoločníka" 70/mes). Sekcia na stránke `/zmena-konatela-sidla-sro`
a argument v skupine 6b kampane C.

**Upsell:** zmena sídla alebo predmetu v tom istom návrhu (A4), zmluva o výkone funkcie
konateľa, prevod obchodného podielu (A3).

**Súvisiace:** e-shopový vzor „Rozhodnutie jediného spoločníka" (9 €) tému vymenovania
konateľa zámerne nepokrýva a odkazuje sem — dokument na stiahnutie nemôže mať zákonom
vyžadovanú formu. Rozpis služby je v `~/SynologyDrive/tkak-eshop-vzory-DRAFT 2026 leto/03_Firemne_SRO/04b_SLUZBA_Vymenovanie_konatela.md`.

---

### A5 · Registrácia ochrannej známky

**Pre koho:** firma alebo živnostník, ktorý chce chrániť názov, logo alebo slogan — v SR
(ÚPV SR) alebo v celej EÚ (EUIPO).

**Obsahuje**
- rešerš kolízie (existujúce známky v SR/EÚ) s písomným stanoviskom — **samostatne 79 €**,
  v balíku v cene
- návrh zoznamu tovarov a služieb (triedy Niceského triedenia) — najčastejšia chyba
  laických prihlášok
- príprava a podanie prihlášky (ÚPV SR alebo EUIPO), zastupovanie v konaní
- sledovanie lehôt, odpoveď na prípadné výhrady úradu v cene do 2 hodín práce

**Neobsahuje:** správne poplatky úradu (ÚPV SR a EUIPO podľa počtu tried — uviesť
aktuálnu tabuľku na stránke), konanie o námietkach tretích osôb (samostatne).

**Cena:** **249 €** národná známka · **349 €** známka EÚ, plus poplatky úradu.
**Lehota:** podanie do 5 pracovných dní; konanie na úrade spravidla 4 – 6 mesiacov.

**Slug:** `/ochranna-znamka` · **Title:** „Registrácia ochrannej známky 2026 — ochranná známka SR a EÚ od 249 €"
**Kľúčové slová:** ochranná známka · ochranna znamka · registrácia ochrannej známky · ochranné známky · zápis ochrannej známky · ochranná známka cena · ochranná známka EÚ

---

### A6 · Založenie živnosti

**Pre koho:** začínajúci živnostník; aj ten, kto živnosť obnovuje (720/mes hľadá
„znovuzaloženie živnosti").

**Obsahuje:** výber a správne zatriedenie predmetov (voľné / remeselné / viazané), ohlásenie
na JKM elektronicky, registrácia na daňovom úrade, krátke usmernenie k odvodom (kedy
vzniká povinnosť do Sociálnej poisťovne) — nie daňové poradenstvo.
**Neobsahuje:** správne poplatky (voľná živnosť elektronicky bez poplatku; remeselná/viazaná
podľa sadzobníka), zodpovedného zástupcu, účtovníctvo.

**Cena:** **29 €**. Zámerne nízka — je to prvá transakcia, nie zdroj marže.
**Lehota:** 1 – 3 pracovné dni.

**Slug:** `/zalozenie-zivnosti` · **Title:** „Založenie živnosti online 2026 — zalozenie zivnosti za 29 €"
**Kľúčové slová:** založenie živnosti · zalozenie zivnosti · znovuzaloženie živnosti · obnovenie živnosti · živnosť online · ako založiť živnosť

**Upsell (hlavný zmysel produktu):** o 1 – 2 roky založenie s.r.o. (A1); hneď obchodné
podmienky / GDPR, ak podniká online.

---

### A7 · Ready-made s.r.o. — zatiaľ ako partnerský produkt

Dopyt 260/mes s najvyšším CPC v researchi (8,09 €), ale vyžaduje držať zásobu založených
spoločností s vlastným kapitálom a ručiť za ich „čistotu". **Neodporúčam vlastnú zásobu na
štart.** Návrh: stránka `/ready-made-sro` s ponukou **„Ready-made s.r.o. s prevodom
autorizovaným advokátom"** — spoločnosť dodá partner, my zabezpečíme prevod podielu
(A3) a zmenu konateľa/sídla (A4) v jednom balíku za **349 €** + poplatky + cena
spoločnosti od partnera. Tým sa obslúži dopyt bez kapitálu. Vyžaduje dohodu s partnerom,
ktorý ready-made spoločnosti drží (pri partnerovi nezabúdať na zákaz provízií podľa
advokátskych predpisov — odmena len za vlastnú prácu).

---

## ÚROVEŇ B — B2B dokumenty a vymáhanie

### B1 · GDPR dokumentácia na mieru

**Pre koho:** firma, e-shop, ambulancia, škola, účtovník — ktokoľvek, kto spracúva osobné
údaje zamestnancov alebo zákazníkov.

**Obsahuje:** vstupný dotazník a 30-minútová konzultácia, záznamy o spracovateľských
činnostiach, informačná povinnosť (pre zákazníkov, zamestnancov, web), smernica
o ochrane osobných údajov, poverenia a mlčanlivosť zamestnancov, sprostredkovateľská zmluva
(vzor pre účtovníka/IT), postup pri bezpečnostnom incidente, posúdenie, či treba zodpovednú
osobu. Výstup do 7 pracovných dní, ročná aktualizácia za 79 €.
**Neobsahuje:** DPIA (samostatne), technické zabezpečenie, výkon funkcie zodpovednej osoby.

**Cena:** **199 €** *(existuje)*. Pri e-shope spojiť s B2 do balíka **„E-shop kompletne" 299 €**.

**Slug:** `/gdpr-dokumentacia` · **Title:** „GDPR dokumentácia pre firmu a e-shop 2026 — gdpr dokumenty na mieru od advokáta"
**Kľúčové slová:** gdpr dokumentácia · gdpr dokumenty · gdpr pre eshop · eshop gdpr · ochrana osobných údajov firma · gdpr smernica · gdpr pre firmy

> Search Console: web sa na „eshop gdpr" / „gdpr eshop" zobrazuje 96× za 28 dní bez
> jediného kliku — pozri samostatnú diagnostiku. Cena za klik na „gdpr dokumentácia" je
> 16,97 € — najdrahšia v celom researchi. Niekto na tomto trhu zarába veľa.

---

### B2 · Dokumenty pre e-shop

**Obsahuje:** obchodné podmienky (vrátane práva na odstúpenie, doručovania, platieb),
reklamačný poriadok, zásady ochrany osobných údajov + cookies, formulár na odstúpenie od
zmluvy, kontrola povinných údajov na webe (identifikácia predávajúceho, orgán dozoru,
ARS). Výstup do 5 pracovných dní, aktualizácia pri zmene zákona za 49 €.
**Neobsahuje:** GDPR dokumentáciu dovnútra firmy (B1), nastavenie cookie lišty technicky.

**Cena:** **169 €** *(existuje)*.

**Slug:** `/obchodne-podmienky-eshop` · **Title:** „Obchodné podmienky a reklamačný poriadok pre e-shop 2026 — od advokáta za 169 €"
**Kľúčové slová:** obchodné podmienky eshop · obchodné podmienky e-shop vzor · reklamačný poriadok · reklamacny poriadok vzor · vop pre eshop · dokumenty pre eshop

---

### B3 · Predžalobná výzva

**Obsahuje:** preverenie nároku a premlčania, výzva na zaplatenie s vyčíslením istiny,
úrokov z omeškania a paušálnej náhrady nákladov (40 €), odoslanie doporučene aj e-mailom,
jedno kolo komunikácie s dlžníkom. Výstup do 2 pracovných dní.
**Cena:** **89 €** *(existuje; v Ads už beží, 37 % podiel zobrazení)*.

**Slug:** `/predzalobna-vyzva` · **Kľúčové slová:** predžalobná výzva · predzalobna vyzva · výzva na zaplatenie · upomienka dlžníkovi · výzva na úhradu faktúry

---

### B4 · Vymáhanie pohľadávky

Premenovanie existujúceho balíka „Príprava žaloby" (390 €) — ľudia hľadajú „vymáhanie
pohľadávok" (210/mes, vysoká konkurencia, CPC 3,31 €), nie „príprava žaloby".

**Štruktúra ako lievik:**
1. Predžalobná výzva — 89 € (B3)
2. **Návrh na vydanie platobného rozkazu / upomínacie konanie — 290 €** + súdny poplatok
   (3 % z hodnoty v upomínacom konaní, min. 25 €)
3. **Zastupovanie v spore po odpore — dohodou** (pevná alebo podielová odmena podľa
   § 7 vyhl. 655/2004, max. 20 %)
4. **Návrh na vykonanie exekúcie — 149 €** + poplatok 25 €

**Slug:** `/vymahanie-pohladavok` · **Title:** „Vymáhanie pohľadávok 2026 — od výzvy po exekúciu, pevné ceny"
**Kľúčové slová:** vymáhanie pohľadávok · vymahanie pohladavok · vymáhanie dlhu · platobný rozkaz · návrh na exekúciu · neuhradená faktúra

---

## ÚROVEŇ C — súkromné osoby

### C1 · Závet spísaný advokátom

**Pre koho:** kto chce určiť, komu čo pripadne, vydediť potomka alebo zabrániť sporu
dedičov. Dopyt „závet" 480/mes a rastie (+22 %), „dedičstvo" +307 %.

**Obsahuje:** konzultácia (30 min), posúdenie neopomenuteľných dedičov a ich zákonných
podielov, spísanie závetu (vlastnoručný alebo v inej písomnej forme so svedkami — podľa
situácie), pri vydedení listina o vydedení s dôvodom podľa zákona, pokyny k úschove;
voliteľne úschova u advokáta.
**Neobsahuje:** notársku zápisnicu (ak klient chce závet vo forme notárskej zápisnice
a zápis do Notárskeho centrálneho registra závetov — odporučíme notára), daňové otázky.

**Cena:** **99 €** závet · **149 €** závet s vydedením.
**Slug:** `/zavet` · **Title:** „Závet spísaný advokátom 2026 — závet a vydedenie za 99 €"
**Kľúčové slová:** závet · zavet · ako napísať závet · závet vzor · vydedenie · dedičstvo · dedičské konanie · neopomenuteľný dedič

> Právny základ (dedičské právo OZ, §§ 476 a nasl., § 469a vydedenie) overiť v knižnici
> pri písaní textov stránky — v tomto katalógu zámerne necitujem presné odseky, kým
> nebudú prečítané z aktuálneho znenia.

---

### C2 · Kúpna zmluva na nehnuteľnosť + návrh na vklad

Premenovanie existujúcej „Kúpnej zmluvy na byt" (249 €) — „návrh na vklad do katastra"
má 590/mes s CPC 2,89 €, ľudia to hľadajú ako samostatnú vec.

**Obsahuje:** preverenie listu vlastníctva a tiarch, kúpna zmluva **autorizovaná
advokátom** (§ 1a zák. o advokácii — aj tu odpadá osvedčovanie podpisov a advokát má
poistenie, ktoré musí klientovi oznámiť podľa § 1aa), návrh na vklad, elektronické
podanie (nižší správny poplatok), sledovanie konania.
**Neobsahuje:** správny poplatok katastra, úschovu kúpnej ceny (samostatne — **advokátska
úschova 149 €** ako doplnkový produkt; dopyt 30/mes, ale vysoká hodnota).

**Cena:** **249 €** kúpna zmluva + vklad · **149 €** samostatný návrh na vklad k hotovej zmluve · **99 €** darovacia zmluva na nehnuteľnosť + vklad.
**Slug:** `/kupna-zmluva-nehnutelnost` · **Title:** „Kúpna zmluva na byt alebo dom + návrh na vklad do katastra 2026 — advokát za 249 €"
**Kľúčové slová:** kúpna zmluva byt · kúpna zmluva nehnuteľnosť · návrh na vklad do katastra · navrh na vklad · darovacia zmluva nehnuteľnosť · advokátska úschova · prevod nehnuteľnosti

---

## SAMOSTATNE · Osobný bankrot — príprava a ochrana dlžníka

Dopyt „bankrot" 8 100 + „osobný bankrot" 1 900 + „osobnybankrot" 1 900 mesačne. Zákon
obmedzuje len jeden krok — a práve to treba na stránke povedať otvorene, lebo to buduje
dôveru.

**Čo zákon hovorí (zák. č. 7/2005 Z. z., štvrtá časť):**
- § 166k — pri **podaní návrhu** až do ustanovenia správcu musí byť dlžník zastúpený
  Centrom právnej pomoci alebo advokátom určeným Centrom. Tento krok balík **nenahrádza**.
- § 166 ods. 3 — návrh možno podať, len ak sa vedie exekúcia alebo obdobné konanie; pri
  konkurze musí od poverenia exekútora uplynúť **aspoň jeden rok**.
- § 167 ods. 2 — návrh obsahuje životopis, zoznam spriaznených osôb, zoznam majetku
  (aj majetok väčšej hodnoty za posledné 3 roky), zoznam veriteľov, vyhlásenie
  o platobnej neschopnosti, doklad o exekúcii nie starší ako 30 dní.
- § 166g — **poctivý zámer**: čo dlžník musí a nesmie; § 166f — veriteľ môže do **6 rokov**
  navrhnúť zrušenie oddlženia pre nepoctivý zámer, a potom sa dlhy obnovia v plnej výške.
- § 166d — nepostihnuteľná hodnota obydlia.
- § 166c — čo sa neoddlží (výživné na dieťa, škoda na zdraví, úmyselná škoda, peňažný trest,
  zabezpečené pohľadávky v rozsahu zabezpečenia, pohľadávka veriteľa – fyzickej osoby, ktorú
  správca neupovedomil…).

**Balík „Osobný bankrot — príprava a ochrana"**

**Pre koho:** fyzická osoba (aj bývalý podnikateľ) s exekúciou, ktorá zvažuje oddlženie.

**Obsahuje**
1. **Posúdenie** — či sú splnené podmienky (exekúcia, 1 rok pri konkurze, 10-ročná
   prekážka opakovaného oddlženia), a **čo oddlženie nevyrieši** (§ 166c) — písomne do
   5 pracovných dní
2. **Voľba cesty** — konkurz vs. splátkový kalendár podľa majetku a príjmu; výpočet, čo
   z majetku prežije (nepostihnuteľná hodnota obydlia, § 166d)
3. **Príprava podkladov pre Centrum právnej pomoci** — kompletné spracovanie všetkého,
   čo § 167 ods. 2 vyžaduje: životopis s opisom situácie, zoznamy majetku a veriteľov,
   spriaznené osoby, doklad o exekúcii. Dlžník ide do Centra pripravený a neriskuje, že
   mu niečo chýba alebo že zabudol veriteľa (čo je dôvod nepoctivého zámeru podľa
   § 166g ods. 2 písm. b)
4. **Poučenie o poctivom zámere** — čo robiť a nerobiť pred podaním aj po ňom, aby
   oddlženie za 6 rokov nikto nezrušil
5. **Zastúpenie po ustanovení správcu** — komunikácia so správcom, ochrana obydlia,
   kontrola speňažovania, súčinnosť tak, aby bola preukázateľná
6. **Obrana proti návrhu na zrušenie oddlženia** (§ 166f) — samostatne dohodou

**Neobsahuje:** podanie návrhu na súd (robí Centrum právnej pomoci alebo advokát ním
určený — § 166k), preddavok na odmenu správcu (skladá Centrum).

**Cena:** **149 €** posúdenie + príprava podkladov (body 1 – 4) · zastúpenie počas konkurzu
**od 290 €** · obrana proti zrušeniu oddlženia dohodou.

**Slug:** `/osobny-bankrot` · **Title:** „Osobný bankrot 2026 — osobny bankrot: príprava podkladov, ochrana majetku a poctivý zámer"
**Kľúčové slová:** osobný bankrot · osobny bankrot · osobnybankrot · bankrot · oddlženie · oddlzenie · osobný bankrot podmienky · osobný bankrot a dom

**Na stránke povedať otvorene:** „Návrh na súd za vás podá Centrum právnej pomoci — tak to
určuje zákon. My zabezpečíme, aby ste tam prišli s kompletnými podkladmi, vedeli, čo vás
čaká, a mali niekoho, kto háji vaše záujmy počas konkurzu aj po ňom." Tým sa vysvetlí
rozdiel oproti Centru bez toho, aby sme Centrum kritizovali.

---

## Čo sa v e-shope mení oproti dnešku

| Existujúci balík | Čo s ním |
|---|---|
| Založenie s.r.o. na kľúč 299 € | **Ponechať**, doplniť poplatok a argument novely → A1 |
| Revízia zmluvy 79 € | **Ponechať**, stane sa tretím stupňom vzorov |
| Zmluva na mieru 129 € | Ponechať ako dlhý chvost |
| Kúpna zmluva na byt 249 € | **Premenovať** → C2 |
| Nájomná zmluva 99 € | **Presunúť** do vzorov (19 €), ako balík len „na mieru" |
| Predžalobná výzva 89 € | **Ponechať** → B3 |
| Príprava žaloby 390 € | **Premenovať a rozložiť** → B4 |
| GDPR dokumentácia 199 € | **Ponechať** → B1 |
| Dokumenty pre e-shop 169 € | **Ponechať** → B2 |
| Trestné oznámenie 149 € | Ponechať |
| Prihláška pohľadávky 149 € | Ponechať, nižšia priorita |
| Analýza insolvenčného rizika 290 € | **Vyradiť z e-shopu** (nulový vyhľadávací dopyt) |
| Obhajoba pri výsluchu 290 € | **Vyradiť z e-shopu** (nie je produkt do košíka) |

**Nové:** A2 likvidácia, A3 prevod podielu, A4 zmena v s.r.o., A4b vymenovanie konateľa,
A5 ochranná známka, A6 živnosť, A7 ready-made (partner), C1 závet, osobný bankrot.
**Spolu 15 + 7 ponechaných = 22 položiek.** To je veľa na jednu stránku — e-shop treba rozdeliť na kategórie
(Firma · Dokumenty a GDPR · Pohľadávky · Súkromie) a každú s vlastnou landing page.

---

## Právne poistky, ktoré platia pre celý katalóg

- § 29b zák. 586/2003: vecné informácie, žiadne porovnávanie s inými advokátmi, žiadne sľuby
  výsledku. Formulácie „za 519 €" a „do 10 dní" sú v poriadku; „najlacnejšie" a „zaručene" nie.
- Cena sa uvádza s DPH, poplatky štátu samostatne — presne tak, ako to robí `common.withVat`.
- Pri partnerských službách (sídlo, účtovníctvo, ready-made) žiadna provízia ani „plnenie
  za postúpenie klienta" — pozri poznámku v AML politike k zákazu podľa advokátskych predpisov.
- Každý balík má mať na stránke „Čo neobsahuje" — to je pri pevných cenách jediná ochrana
  pred sporom o rozsah.
