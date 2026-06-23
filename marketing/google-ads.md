# kohút & partners — Google Ads blueprint

> Pripravené na vloženie po založení účtu pre web **tkak.sk** (advokátska kancelária kohút & partners, Zvolen). Texty sú v rámci limitov Google (nadpis ≤30 znakov, popis ≤90). Cielenie: Slovensko, jazyk slovenčina (+ čeština ako pasívna). USP do každej reklamy: **advokáti zapísaní v SAK**, **pevná cena vopred**, **odpoveď do 24 h**.

## ⚠️ Skôr než spustíš (dôležité)

1. **Overenie inzerenta (Advertiser Verification)** — Google pri právnych službách bežne vyžaduje overenie identity firmy (názov, IČO, web). Spusti ho hneď po založení účtu, trvá pár dní. Bez neho sa môže zobrazovanie obmedziť.
2. **Web musí byť živý** — `tkak.sk` musí byť verejne dostupný, mať fungujúci formulár aj rezerváciu konzultácie (Cal.com), zásady ochrany údajov a cookies lištu. Google kontroluje cieľovú stránku.
3. **Žiadne zavádzajúce sľuby** — pri právnych službách nepoužívaj garancie výsledku („vyhráme spor", „100 % úspešnosť"). Drž sa faktov: SAK, 20 rokov praxe, 2400+ vyriešených prípadov, pevná cena, odpoveď do 24 h.
4. **Cieľ kampane:** Potenciálni zákazníci (Leads). Konverzia = **rezervácia konzultácie** (Cal.com → `trackLead("booking")`) + **odoslanie kontaktného formulára** (`trackLead("contact")`) + kliknutie na telefón. Detaily v sekcii Konverzie.

## Štruktúra účtu

Dve **Search (Vo vyhľadávaní)** kampane — rozdelené podľa cielenia lokality, lebo bidding aj rozpočet sa pri lokálnom vs. celoštátnom správajú inak. Neskôr možno pridať Performance Max.

**Kampaň A:** `SK – Search – Zvolen & BB kraj (lokálne)`
- Lokalita: **Zvolen + Banskobystrický kraj** (+ priľahlé okresy: Žiar nad Hronom, Detva, Krupina, Brezno). Cielenie „Prítomnosť: ľudia v cieľových lokalitách".
- Jazyk: slovenčina
- Ad groupy: Advokát Zvolen, Nehnuteľnosti, Súdne spory
- Pre lokálne služby (bežný advokát, reality, spory) je dopyt geograficky viazaný — mimo regiónu nemá zmysel platiť.

**Kampaň B:** `SK – Search – Špecializácie (celoštátne)`
- Lokalita: **celé Slovensko**
- Jazyk: slovenčina
- Ad groupy: Insolvencie, Obchodné právo, IT právo
- Tieto špecializácie majú málo konkurentov a klienti ich hľadajú celoštátne — oplatí sa ísť na celé SK.

**Spoločné pre obe kampane:**
- Bidding: štart **Maximalizovať počet kliknutí** (kým nazbiera dáta), po ~15–30 konverziách prepnúť na **Maximalizovať konverzie** (prípadne cieľ CPA).
- Rozpočet: štart **12 €/deň** spolu. Odporúčané rozdelenie ~5 €/deň kampaň A (lokálne) + ~7 €/deň kampaň B (špecializácie, vyššia hodnota klienta). Po prvých dátach doladiť.
- Plánovač reklám: Po–Pia s dôrazom na pracovný čas (9:00–18:00 = otváracie hodiny), víkend stlmiť.

### Ad groupy + kľúčové slová (frázová a presná zhoda)

> Frázová zhoda `"..."` zachytí variácie, presná zhoda `[...]` cieli na presný dopyt s vyšším zámerom. Začni s oboma, po dátach z reportu vyhľadávacích dopytov dolaď.

#### Kampaň A — lokálne (Zvolen + BB kraj)

**A1. Advokát Zvolen (generické, lokálne)**
```
"advokát zvolen"
"advokátska kancelária zvolen"
"právnik zvolen"
"právne služby zvolen"
"advokát banská bystrica"
[advokat zvolen]
[advokatska kancelaria zvolen]
[pravnik zvolen]
```

**A2. Nehnuteľnosti**
```
"advokát nehnuteľnosti"
"prevod nehnuteľnosti zmluva"
"kúpna zmluva nehnuteľnosť advokát"
"kúpna zmluva byt advokát"
"návrh na vklad do katastra"
"advokátska úschova kúpna cena"
[advokat nehnutelnosti]
[kupna zmluva byt advokat]
```

**A3. Súdne spory**
```
"advokát súdny spor"
"zastupovanie na súde"
"právne zastúpenie"
"vymáhanie pohľadávok advokát"
"predžalobná výzva"
"náhrada škody advokát"
[advokat sudny spor]
[zastupovanie na sude]
```

#### Kampaň B — celoštátne špecializácie

**B1. Insolvencie**
```
"konkurz firmy"
"reštrukturalizácia spoločnosti"
"oddlženie"
"insolvenčný správca"
"vyhlásenie konkurzu"
"osobný bankrot"
"likvidácia spoločnosti advokát"
"prihláška pohľadávky do konkurzu"
[konkurz firmy]
[restrukturalizacia spolocnosti]
[osobny bankrot]
[oddlzenie]
```

**B2. Obchodné právo**
```
"obchodné právo advokát"
"zmluvy advokát"
"založenie s.r.o. advokát"
"vymáhanie pohľadávok"
"revízia zmluvy advokát"
"obchodná zmluva na mieru"
"due diligence kúpa firmy"
[obchodne pravo advokat]
[zalozenie s.r.o. advokat]
```

**B3. IT právo**
```
"it právo advokát"
"gdpr advokát"
"právnik pre it firmy"
"licenčné zmluvy software"
"obchodné podmienky e-shop advokát"
"saas zmluva advokát"
"ochrana osobných údajov advokát"
[it pravo advokat]
[gdpr advokat]
```

### Negatívne kľúčové slová (pridať na úrovni oboch kampaní)
```
zadarmo, zdarma, vzor zmluvy zadarmo, vzor, vzory, kalkulačka,
práca, brigáda, plat, mzda, kariéra, životopis, voľné miesto,
študent, štúdium, právo skriptá, učebnica, vysoká škola, prijímačky,
bezplatná právna poradňa, právna poradňa zadarmo, free,
diskusia, fórum, wikipedia, definícia, čo je, ako napísať sám,
notár, exekútor (ak necieliš tieto profesie), realitná kancelária
```
> Cieľ: odfiltrovať hľadačov bezplatných vzorov, študentov práva, uchádzačov o prácu a samoukov. **Pozor:** ak chceš zachytiť dopyty typu „vymáhanie pohľadávok" cez exekúciu, slovo `exekútor`/`exekúcia` z negatív vyňať — najprv si over v reporte vyhľadávacích dopytov.

## Responsive Search Ads (RSA)

> Jedna RSA na ad group, nadpisy doladené ku téme. Nižšie sú hotové RSA pre 3 kľúčové ad groupy. Google si z nich skladá kombinácie — preto majú nadpisy znieť dobre v ľubovoľnom poradí. Pripni („Pin") nadpis s názvom kancelárie na pozíciu 1, ak chceš stálu brandovú prítomnosť.

### RSA — A1. Advokát Zvolen

**Nadpisy (13× ≤30 znakov):**
```
Advokát Zvolen
Advokátska kancelária Zvolen
Právne služby vo Zvolene
kohút & partners
Advokáti zapísaní v SAK
Pevná cena vopred
Odpoveď do 24 hodín
20 rokov praxe
2400+ vyriešených prípadov
Konzultácia online aj osobne
Rezervujte si termín
Právo zrozumiteľne
Riešime za vás
```

**Popisy (4× ≤90 znakov):**
```
Advokátska kancelária vo Zvolene. Pevná cena vopred, prvá odpoveď do 24 hodín.
Advokáti zapísaní v SAK, 20 rokov praxe a 2400+ vyriešených prípadov. Zavolajte.
Insolvencie, zmluvy, nehnuteľnosti aj spory. Rezervujte si nezáväznú konzultáciu.
Právo vysvetlíme ľudsky a cenu poviete vopred. Rezervujte termín online aj osobne.
```

**Cesta zobrazenia URL:** `tkak.sk/advokat-zvolen`
**Cieľová URL:** `https://tkak.sk/sk`

### RSA — B1. Insolvencie

**Nadpisy (13× ≤30 znakov):**
```
Konkurz a reštrukturalizácia
Insolvenčný správca
Oddlženie firmy aj osoby
Záchrana firmy v kríze
Vyhlásenie konkurzu
Osobný bankrot
Advokáti zapísaní v SAK
Pevná cena vopred
Odpoveď do 24 hodín
20 rokov praxe
Poradíme po celom Slovensku
Prihláška pohľadávky
Konzultácia bez paniky
```

**Popisy (4× ≤90 znakov):**
```
Konkurz, reštrukturalizácia aj oddlženie. Sprevádzame firmy aj veriteľov procesom.
Riadiaci partner je v zozname insolvenčných správcov MS SR. Konáme rýchlo a v cene.
Čím skôr začnete riešiť krízu, tým viac možností záchrany ostáva. Rezervujte termín.
Advokáti v SAK, 20 rokov praxe. Pevná cena vopred, prvá odpoveď do 24 hodín.
```

**Cesta zobrazenia URL:** `tkak.sk/insolvencie`
**Cieľová URL:** `https://tkak.sk/sk/sluzby/insolvencie`

### RSA — B2. Obchodné právo

**Nadpisy (13× ≤30 znakov):**
```
Obchodné právo — advokát
Založenie s.r.o. na kľúč
Zmluvy na mieru
Revízia zmluvy pred podpisom
Vymáhanie pohľadávok
Korporátne poradenstvo
Advokáti zapísaní v SAK
Pevná cena vopred
Odpoveď do 24 hodín
Due diligence pri kúpe firmy
Poradíme po celom Slovensku
20 rokov praxe
Zmluvy, ktoré obstoja
```

**Popisy (4× ≤90 znakov):**
```
Založenie firmy, zmluvy na mieru aj revízia pred podpisom. Pevná cena vopred.
Postavíme vaše podnikanie na zmluvách, ktoré obstoja aj keď príde spor. Volajte.
Vymáhanie pohľadávok, korporátne zmeny, due diligence. Advokáti zapísaní v SAK.
Revízia zmluvy za pár desiatok eur ušetrí spory za tisíce. Rezervujte konzultáciu.
```

**Cesta zobrazenia URL:** `tkak.sk/obchodne-pravo`
**Cieľová URL:** `https://tkak.sk/sk/sluzby/obchod`

> Pre zvyšné ad groupy (Nehnuteľnosti, Súdne spory, IT právo) vytvor RSA podľa rovnakého vzoru — nadpisy ku téme + 4 popisy, do každého popisu vlož aspoň jeden z USP (SAK / pevná cena / odpoveď do 24 h). Cieľové URL: `/sk/sluzby/nehnutelnosti`, `/sk/sluzby/spory`, `/sk/sluzby/it`.

## Rozšírenia (Assets)

- **Telefón (Call assets):** +421 907 823 239 (mobil) · +421 45 202 89 38 (pevná linka). Zobrazovať Po–Pia 9:00–18:00.
- **Odkazy na stránku (Sitelinks):**
  - Služby → `/sk/sluzby`
  - O kancelárii → `/sk/o-nas`
  - Blog → `/sk/blog`
  - Rezervácia konzultácie → `/sk` (CTA „Rezervovať konzultáciu" otvára Cal.com modal) · Kontakt → `/sk/kontakt`
- **Popisné texty (Callouts):** Pevná cena vopred · Odpoveď do 24 h · Advokáti v SAK · 20 rokov praxe · 2400+ prípadov · Online aj osobne
- **Útržky (Structured snippets):** Typ „Služby" → Insolvencie, Obchodné právo, Nehnuteľnosti, Súdne spory, Trestné právo, IT právo
- **Lokalita (Location asset):** prepoj **Profil firmy na Googli (Google Business Profile)** — adresa Námestie SNP 74/28, 960 01 Zvolen. Zvyšuje dôveru a CTR pri lokálnych dopytoch.
- **Cena / Promo (voliteľné):** pri službách s pevnou cenou možno použiť asset „Cena": napr. Založenie s.r.o. od 299 €, Revízia zmluvy od 79 €, Nájomná zmluva od 99 €.

## Lokality a jazyky

- **Kampaň A (lokálne):** Zvolen + Banskobystrický kraj + priľahlé okresy. Cielenie „Prítomnosť: ľudia, ktorí sú v cieľových lokalitách alebo ich pravidelne navštevujú" (nie „záujem").
- **Kampaň B (špecializácie):** celé Slovensko, rovnaké nastavenie prítomnosti.
- **Jazyk:** slovenčina. Voliteľne pridaj **češtinu** — Google cieli jazyk podľa nastavenia prehliadača a v SR je veľa používateľov s českým prostredím; reklamy ostávajú po slovensky.
- **Vylúčiť:** nič navyše netreba; držať sa SR (žiadne cezhraničné zobrazovanie).

## Rozpočet a bidding

- **Štart:** 12 €/deň spolu (~360 €/mes.), bidding **Maximalizovať počet kliknutí** — cieľ je nazbierať dáta a vyladiť kľúčové slová a negatíva.
- **Po 2–4 týždňoch / ~15–30 konverziách:** prepnúť na **Maximalizovať konverzie**. Keď bude dosť dát, zvážiť **cieľ CPA**.
- **Hodnota klienta vs. CPA:** právny klient má vysokú hodnotu (zmluvy, spory, insolvencie = stovky až tisíce €), takže aj CPA 30–60 € za rezerváciu konzultácie býva výhodný. Priorizuj kvalitu dopytov pred lacnými klikmi.
- **Rozpočet doladiť podľa výkonu:** ad groupy s nízkym CPA postupne posilniť, slabé stlmiť. Kampaň B (špecializácie) zvyčajne unesie vyšší rozpočet vďaka vyššej hodnote klienta.

## Konverzie (meranie)

V kóde `tkak.sk` sú konverzie pripravené — používa sa funkcia `trackLead(source)` v `src/lib/analytics.ts`, ktorá posiela udalosť do GA4 (`generate_lead`) a Meta Pixelu (`Lead`). Spúšťa sa na dvoch miestach:

1. **Rezervácia konzultácie** (Cal.com cez `BookingProvider.tsx`) → `trackLead("booking")` po dokončení rezervácie.
2. **Kontaktný formulár** (`ContactForm.tsx`) → `trackLead("contact")` po úspešnom odoslaní.

**Konverzné akcie v Google Ads, ktoré chceš merať:**
- **Rezervácia konzultácie** (primárna konverzia, najvyššia hodnota)
- **Odoslanie kontaktného formulára** (primárna konverzia)
- **Kliknutie na telefón** z reklamy (Call asset — meria sa automaticky)

**Ako to zapojiť (Google Ads tag `AW-`):**
1. V Google Ads → **Ciele → Konverzie** vytvor 2 konverzné akcie: „Rezervácia konzultácie" a „Kontaktný formulár". Získaš **Conversion ID** (`AW-XXXXXXXXX`) a pre každú akciu **Conversion label**.
2. Web má AW- tag **pripravený ako env-gated** (rovnako ako GA/Meta — načíta sa len po súhlase s cookies). Doplň do Vercel env:
   - `NEXT_PUBLIC_GOOGLE_ADS_ID` = `AW-XXXXXXXXX`
   - `NEXT_PUBLIC_GOOGLE_ADS_LABEL_BOOKING` = label pre rezerváciu
   - `NEXT_PUBLIC_GOOGLE_ADS_LABEL_CONTACT` = label pre formulár
3. Po nasadení `trackLead("booking")` / `trackLead("contact")` odošle aj Google Ads konverziu (`gtag('event', 'conversion', { send_to: 'AW-XXX/label' })`). Over v **Google Tag Assistant**, že sa konverzia spustí po reálnej rezervácii aj odoslaní formulára.
4. **Enhanced conversions** (voliteľné, odporúčané): zapni vylepšené konverzie cez e-mail z formulára — zlepší presnosť merania pri iOS/cookies obmedzeniach.

> Pošli mi z Google Ads tieto hodnoty (Conversion ID + 2 labely) a ja ich vložím do Vercel env, nech sa konverzie reálne merajú.

## Po spustení (priebežne)

- **Report vyhľadávacích dopytov** sleduj týždenne, dopĺňaj negatíva (najmä bezplatné vzory, prácu, štúdium).
- Sleduj **mieru konverzie po ad groupe** — slabé pozastav, silné posilni.
- Po nazbieraní dát prepni bidding na **Maximalizovať konverzie**.
- Doplň RSA pre zvyšné ad groupy (Nehnuteľnosti, Súdne spory, IT právo).
- Po stabilizácii zváž **Performance Max** kampaň na doplnenie (s vylúčením brandových dopytov).

## ✅ Checklist pred spustením

- [ ] Účet Google Ads založený, fakturácia (billing) nastavená a overená
- [ ] **Overenie inzerenta** (Advertiser Verification) spustené
- [ ] **Profil firmy na Googli** (Google Business Profile) prepojený pre Location asset
- [ ] Web `tkak.sk` živý: formulár, rezervácia konzultácie (Cal.com), zásady ochrany údajov, cookies lišta funkčné
- [ ] Kampaň A (lokálne) + Kampaň B (celoštátne) vytvorené, lokality a jazyk nastavené
- [ ] Ad groupy + kľúčové slová (frázová + presná zhoda) vložené
- [ ] Negatívne kľúčové slová pridané na úrovni oboch kampaní
- [ ] RSA reklamy (A1, B1, B2) vložené, nadpisy ≤30 a popisy ≤90 znakov overené
- [ ] Rozšírenia: telefón, sitelinky, callouts, structured snippets, lokalita
- [ ] **Konverzné akcie** vytvorené (Rezervácia konzultácie + Kontaktný formulár + kliknutie na telefón)
- [ ] **Google Ads `AW-` tag**: `NEXT_PUBLIC_GOOGLE_ADS_ID` + `_LABEL_BOOKING` + `_LABEL_CONTACT` doplnené do Vercel env
- [ ] Konverzia otestovaná cez Google Tag Assistant (reálna rezervácia + odoslanie formulára)
- [ ] Denný rozpočet 12 €/deň, bidding „Maximalizovať počet kliknutí"
- [ ] Plánovač reklám Po–Pia 9:00–18:00 (víkend stlmený)
