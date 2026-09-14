# Benchmark právnych e-shopov — podklad pre prestavbu e-shopu tkak.sk

kohút & partners · 14. 9. 2026 · nadväzuje na [eshop-katalog.md](eshop-katalog.md)

Dva rešerše vypracované 14. 9. 2026: (A) slovenský e-shop lanikovagroup.sk, (B) zahraničné online právne služby. Údaje sú z priamo načítaných stránok v ten deň; ceny sa menia.

---

# Časť A — lanikovagroup.sk/pravny-eshop

## Analýza právneho e-shopu lanikovagroup.sk

Zdroje: fetchnutá hlavná stránka e-shopu, 7 produktových stránok (Obchodné podmienky vzor, Whistleblowing, Založenie OZ, Registrácia OZ, Zápis RPVS, Expresná poradňa, Kurz E-shop (s)právne), /kosik/, /pokladna/, VOP, reklamačný poriadok, O nás, homepage. Priamy `curl` server blokuje (HTTP 466 „Access Forbidden"), takže rýchlosť a technické metriky som nemohol zmerať.

### 1. Čo predávajú

3 kategórie (Právne služby / Vzdelávanie / Vzorové dokumenty), spolu **18 produktov**. Všetky ceny sú zobrazené primárne **bez DPH**, na produktovej stránke aj so sumou s DPH v zátvorke. Žiadne predplatné.

| Typ | Produkt | Cena (bez DPH) |
|---|---|---|
| Služba | Stratégia ochrany duševného vlastníctva | 800 € |
| Služba | Založenie poľovníckej organizácie | 599 € |
| Služba | Založenie občianskeho združenia | 399 € (490,77 s DPH) |
| Služba | Zápis do Zoznamu hospodárskych subjektov | 399 € |
| Služba | Obchodné podmienky na mieru | 350,24 € |
| Služba | Hĺbkový rešerš označenia | 299 € |
| Služba | Predĺženie zápisu v ZHS | 299 € (zľava) |
| Služba | Registrácia ochrannej známky | 299–499 € (variant SR / EÚ) |
| Služba | Zápis do RPVS | 299–499 € (1 KÚV / 2 KÚV / živnostník) |
| Konzultácia | Expresná online právna poradňa | 99 € (121,77 s DPH) |
| Vzor | Whistleblowing – vzorová dokumentácia | 199 € (244,77 s DPH) |
| Vzor | GDPR komplexné vzory | 161,79 € |
| Vzor | Obchodné podmienky vzor | 149 € (pôvodne 194,15 €) |
| Vzor | Súťažné podmienky | 149 € |
| Vzor | Zmluva s influencerom | 99 € |
| Vzdelávanie | KURZ E-shop (s)právne | 99 € |
| Vzdelávanie | Ako si právne chrániť značku | 49 € |
| Vzdelávanie | Kniha GDPR v praxi | 29–35 € |

### 2. Produktová stránka

- **Sekcie:** názov, cena bez/s DPH, tlačidlo „Pridať do košíka", voľný popis (prečo to potrebujete + hrozba pokuty), zoznam „čo dostanete", pri službách postup v krokoch, „Súvisiace produkty", newsletter. Kategória + tagy (E-commerce, Marketing).
- **Chýba všade:** FAQ, recenzie k produktu, explicitná sekcia „čo nie je v cene" (výnimka: OZ – „Správny poplatok nie je súčasťou našej ceny"), formát súboru (docx/pdf neuvedený), dĺžka konzultácie.
- **Cena:** pevná; pri OZ a RPVS varianty cez selektor („Nižšie vyberte počet spoločníkov"). Správne poplatky sú mimo ceny (pri OZ zdôraznené, pri občianskom združení iba nepriamo – „ušetriť až 50 eur").
- **Lehoty sú konkrétne:** RPVS „Do 12 hodín podáme návrh na zápis", OZ „ONLINE do 3 dní", občianske združenie dokumenty do 48 h + ministerstvo 15 dní, poradňa do 48 h.
- **Čo dostanem – jasné pri vzoroch** (5 dokumentov vymenovaných pri VOP, 4 pri whistleblowingu, žlto vyznačené miesta na doplnenie). Pri poradni **nejasné**: neuvedené trvanie ani počet otázok.

### 3. Ako funguje nákup

- WooCommerce-typ košíka na `/kosik/` („Váš košík je momentálne prázdny!"); `/pokladna/` s prázdnym košíkom zobrazí to isté, pokladňu som teda nevidel.
- **Platba vopred**: bankový prevod alebo karta cez **Stripe** (podľa VOP); splatnosť „do 7 dní od uzatvorenia zmluvy", inak sa zmluva považuje za zrušenú.
- **Dotazník až po platbe**: pri službách klient dostane e-mail s inštrukciami a zoznamom potrebných údajov; podklady posiela e-mailom (heslované) alebo poštou, podpísané dokumenty vracia e-mailom/poštou. Poradňa: objednať → vybrať termín do 2 prac. dní → opísať problém → link na videohovor.
- **Doručenie**: vzory „ihneď zašleme na váš email" (VOP: max 48 h po zaplatení), kurz „hneď po potvrdení zmluvy", služby podľa VOP do 30 dní. Kniha – fyzický produkt, doručenie neuvedené na fetchnutých stránkach.
- Odstúpenie: 14 dní, pri digitálnom obsahu strata práva po výslovnom súhlase (VOP).

### 4. Dôvera

- **Mená advokátov iba na O nás** (JUDr. Zdenka Lániková, JUDr. Barbora Lániková + 4 členovia tímu, fotky sú placeholder). Na produktoch len pri vzoroch/kurze: „vypracované Barborou Lánikovou, advokátom špecializujúcim sa na právo pre e-commerce".
- **Recenzie iba na homepage** (Tescoma, Pinsight, Freylish, Zapo, Llentab), „98 % klientov odporúča", „vyše 30 rokov praxe", Google 5,0. Na e-shope ani produktoch žiadne.
- Garancie: žiadne. Reklamačný poriadok: digitálny obsah „má len všeobecný a informatívny charakter" a nenahrádza právne poradenstvo – dobrá poistka.
- Predávajúci: Lanikova Group, s.r.o., IČO 36 858 439, IČ DPH SK2022628652 – uvedené len vo VOP, nie v pätičke. VOP odkazujú na zák. o advokácii. Reklamné limity: tvrdenia typu „vyše 30 rokov praxe", „98 % klientov odporúča", „2 000+ spokojných klientov", „vybavíme vám dotáciu z fondov EU až vo výške 700 €" a „Vyhraté spory: 0" (nefunkčný counter) sú z pohľadu § 29b zák. o advokácii hraničné (hodnotiace/prísľubové tvrdenia).

### 5. Čo je dobré

- Konkrétne lehoty ako hlavný argument: „Do 12 hodín podáme návrh na zápis".
- Vymenovanie obsahu balíka: „obchodné podmienky, reklamačný poriadok, reklamačný protokol, formulár na odstúpenie…".
- Návod vo vzoroch: „vzorové dokumenty s návodom po vám ihneď pošleme na váš email".
- Cenový selektor podľa parametra (počet KÚV, SR/EÚ známka) namiesto „cena dohodou".
- Autorita autorky vzorov priamo na produkte + kniha ako dôkaz expertízy.
- Motivácia hrozbou pokuty konkrétne: „pokutu až 20 000 €".
- Poriadne VOP/reklamačný poriadok pre digitálny obsah aj právne služby.

### 6. Čo je slabé / mätúce

- Ceny v katalógu bez DPH – pre spotrebiteľa (občianske združenie, poradňa) mätúce, sumu s DPH vidí až na detaile.
- Poradňa: neuvedené trvanie, počet otázok ani kto ju vedie; sľub „do 48 hodín" v titulku, ale termín „do 2 pracovných dní".
- Správne poplatky pri väčšine služieb nie sú vyčíslené (OZ neuvádza výšku, len že nie je v cene).
- Žiadne FAQ, žiadne recenzie na produkte, žiadna sekcia „čo sa stane po zaplatení" (len roztrúsene v texte).
- Neuvedený formát súborov a možnosť editácie.
- Nekonzistentné ceny: „Obchodné podmienky na mieru" 350,24 €, GDPR vzory 161,79 € – vyzerajú ako prepočet z ceny s DPH; slug `obchodne-podmienky-2024` vs. titulok „2025".
- Homepage counter „Rokov skúseností: 0 / Spokojní klienti: 0 / Vyhraté spory: 0".
- Rozdielne telefónne čísla (0905 430 083 v pätičke vs. +421 948 264 244 vo VOP).

### 7. UX / technika

- Slovenčina, bez jazykového prepínača a hreflang.
- Meta titulky sú SEO-cielené, dlhé: „Registrácia ochrannej známky advokátom ONLINE do 3 dní", „Whistleblowing – vzorová dokumentácia | Ochrana osobných údajov | AK BA".
- Platforma podľa štruktúry (/produkt/, /kosik/, /pokladna/, „Pridať do košíka") WooCommerce; Stripe podľa VOP.
- Rýchlosť a mobilné zobrazenie som nemohol overiť – server blokuje neprehliadačové požiadavky (HTTP 466), WebFetch vracia len text.

---

# Časť B — zahraničné online právne služby

# Ako zahraničné online právne služby predávajú fixné ceny — rešerš pre e-shop malej slovenskej advokátskej kancelárie

Stav k 14. 9. 2026. Údaje pochádzajú z priamo načítaných produktových/cenníkových stránok; položky označené „(z výsledkov vyhľadávania)" sú len zo snippetov, nie z načítanej stránky. Niektoré stránky (LegalVision membership, Lawpath company registration, Captain Contrat SAS/SASU detail) blokovali fetch (403/404) – pri nich uvádzam, čo sa reálne podarilo načítať.

---

## A. Profily jednotlivých služieb

### 1. LegalZoom (USA) – založenie LLC, závety, právne plány

**(a) Zobrazenie ceny.** Tri pomenované balíky, každý s **jednou presnou cenou „+ state filing fees"** (štátne poplatky vždy zvlášť, nikdy nezarátané): **Basic 0 $**, **Pro 249 $** (označené „Recommended"), **Premium 299 $**. Pri Inc. (corporation) sa cena zobrazí až po výbere štátu; balíky sa líšia rýchlosťou: Economy „7–10 business days", Standard „5-day priority processing", Express Gold „1–2 days express processing".
Závety: Basic Will 129 $ (v akcii 116,10 $), Pro Will 149 $, Premium Will 299 $; párové verzie drahšie (Basic 206,10 $ … Premium 319,20 $ po zľave). Časovo obmedzená zľava „Up to 20 % off … ends 9/17".

**(b) Flow po kliknutí.** CTA „Start my LLC"/„Form my LLC" → prvá obrazovka je **otázka „What's the name of your business?"** (dotazník najprv, platba až po výbere balíka a doplnkov). Proces opísaný v 3 krokoch: „Tell us about your business" → „Choose the services you need" → „Sit back while we make it official". Pri závete: „Answer our quick questions" → „We'll create your Will Estate Plan" → „Review with an attorney or on your own".

**(c) Čo je/nie je v cene, lehoty.** Porovnávacia tabuľka tierov: Basic = articles of organization + name check + daňová konzultácia; Pro pridáva operating agreement, EIN, **30-dňový prístup k advokátom (potom sa automaticky obnovuje za 49 $/mes.)**, 150+ šablón a e-podpis na 1 rok, web (Wix); Premium pridáva účtovnícke nástroje na 6 mesiacov (potom 9,99 $/mes.). Závet: dokumenty „typically available within 2–3 business days", Basic „unlimited revision for 30 days", Premium „unlimited revisions for 1 year".

**(d) Dôvera.** „Excellent – 4.6 based on 32 942 reviews" (Trustpilot) priamo pri cenníku; závety „4.6 out of 5 rating from nearly 20 000 reviews", „2.1 million customers", „over 1.8 million last wills", „1 estate plan made every 6 minutes". **Garancia: „100% Accurate Filing Guarantee – If your filing is rejected or incorrect due to our error, we'll correct it with the government agency at no additional cost."** Telefón s otváracími hodinami viditeľne v hlavičke.

**(e) Predplatné.** Business Attorney Plan: **39,09 $/mes. (259 $ za 6 mes.)** alebo **43,17 $/mes. (469 $/rok)**, opísané ako „~$1 a day"; Personal Attorney Plan 16,59 $/mes. (119 $/6 mes.) alebo 19,84 $/mes. (199 $/rok). Obsah: „Unlimited 30-minute attorney consults on new legal matters", **„Attorney review for contracts and key documents (10 pages included)"**, ročná hodinová konzultácia po 6 mesiacoch, 150+ šablón, e-podpis, 10 % zľava na produkty LZ, 25 % zľava na ďalšie advokátske služby. Zmluvné podmienky plánu spresňujú: max. 1 dokument na jednu novú právnu vec, 30-min. konzultácia + max. 1 hod. rešerše.

**(f) Šikovné prvky.** Advokátsky plán vložený do balíka ako 30-dňový trial s auto-obnovou (upsell zabudovaný do produktu). Upsells: registered agent, poistenie (NEXT Insurance), virtuálna pošta, ochranná známka. **Tierovanie revízie podľa strán: 10 strán v cene, 11–15 strán 69 $, 16–25 strán 149 $, 26+ individuálne (s 25 % zľavou).**

### 2. Rocket Lawyer (USA + UK) – členstvo + dokumenty + Ask a Lawyer

**(a) Cena.** USA: tri ročné plány **Standard 149 $/rok (12,41 $/mes.)**, **Plus 249 $/rok** („MOST POPULAR"), **Pro 349 $/rok**, všetky „Free 7-day trial". Jednorazový dokument bez členstva 39,99 $ (z výsledkov vyhľadávania). UK: **Rocket Legal 34,99 £/mes.** alebo **Rocket Legal+ 17,49 £/mes. účtované ročne 209,88 £** (preškrtnuté 419,88 £, „50 % zľava"), 7-dňový trial bez platby vopred.

**(b) Flow.** CTA „Try 7 days for $0" → checkout (registrácia + karta) → potom dokumenty. Dokument sa vytvára interview-om (otázky), platí sa/členstvo sa aktivuje pri stiahnutí.

**(c) Obsah.** USA: všetky plány „Unlimited personalized documents & e-signatures", Rocket Copilot AI; Standard 12× „Ask an Attorney", Plus 36× Ask + 12× „Consult an Attorney Live", Pro neobmedzene. UK Document Review: **4 kroky** (vytvor dokument → odošli formulár → „Legal Pro assigned – team contacts you within 1 business day" → revízia podľa **„4C check": Correct / Complete / Customisations / Consultation**). Členovia 1 revízia mesačne zadarmo, nečlenovia **120 £**; dokumenty nevytvorené v Rocket Lawyer sa neposudzujú fixne, ale hodinovo (**360 £/h, členovia Legal+ 180 £/h**). Explicitný zoznam vylúčených dokumentov (výpovede z nájmu, employee handbook, komerčné nájmy, deeds…).

**(d) Dôvera.** Logá médií (WSJ, CNBC, Bloomberg Law), na cenníku bez čísel recenzií. Regulovaná entita uvedená v pätičke.

**(e) Členstvo – cenník „premium services" pre členov (USA).** Založenie firmy „First one FREE, then $99 + state fees", EIN 70 $, Registered Agent 125 $/rok, právna konzultácia 149 $ (30 min) / 249 $ (60 min). UK: „Business Health Check" 180 £ (pre Legal+ zadarmo), registrácia ochrannej známky 280 £+ (bez poplatku IPO 205 £ – uvedený zvlášť), dispute resolution 150 £+ pre členov (bežne 300 £+), „Businesses can save up to £1,500 annually".

**(f) Šikovné.** Free trial ako hlavný konverzný bod; členská cena vs. nečlenská zobrazená vedľa seba pri každej platenej službe (ukotvenie); „first one free" pri zakladaní firmy; UK stránka uvádza, ako sa dá zrušiť (e-mail + nastavenia účtu).

### 3. Farewill (UK) – online závet s fixnou cenou

**(a) Cena.** Cenníková stránka: **Online will – single 100 £, couples 160 £; Telephone will – single 240 £, couples 380 £.** Aktualizácie: **„unlimited updates" za 10 £/rok**, s argumentom, že kodicil u solicitora stojí ~70 £ za každú zmenu. Telefonický závet: „Add unlimited specialist clauses for £200 if you need to."

**(b) Flow.** Online: **„Start free, pay when ready for specialist review"** – dotazník vyplníte zadarmo, platí sa až pred odovzdaním špecialistovi. Telefonický: „Book a free callback".

**(c) Obsah/lehota.** Online: „Ready to download in under 5 days", „free support by email or on the phone"; každý závet kontroluje špecialista pred tlačou a podpisom. Domovská stránka: „Write your will … in just 15 minutes"; probate „from just £895" (jedna z mála „od" cien).

**(d) Dôvera.** „Excellent on TrustPilot" (číslo na načítaných stránkach nebolo; 4,9 z 18–20 tis. recenzií je z výsledkov vyhľadávania). Regulácia SRA (z výsledkov vyhľadávania).

**(e) Predplatné.** 10 £/rok za neobmedzené zmeny – jednoduchý recurring model naviazaný na produkt.

**(f) Šikovné.** Bezplatné vyplnenie dotazníka pred platbou (nízka bariéra); cenový kontrast „kodicil 70 £ vs. 10 £/rok".

*Doplnok – Which? Wills (UK):* „Start writing your will today from £99"; 4 kroky „Choose a will → Pay and get writing → Get it reviewed → Sign & witness"; **revízia „We aim to complete the review in 10 working days"**; explicitne uvádzajú, že po podpise už dokument nekontrolujú; ocenenie „Will Writing Firm of The Year (online) 2023".

### 4. Lawpath (Austrália) – predplatné + fixné ponuky od právnikov

**(a) Cena.** Plány: **Essentials 67 $/mes. alebo 45 $/mes. ročne („Pay $540 today, SAVE 33 %")**, **Legal Advice 225 $/mes. alebo 155 $/mes. ročne („Pay $1,860 today")**, bundle Essentials + Legal Advice 175 $/mes. ročne („Pay $2,100 today, SAVE 40 %"); Free plan existuje. Jednorazové právne služby = **„fixed-price quote", nie cenník**; stránka contract-lawyer však zverejňuje **orientačné pásma (FY 2025-26, + GST)**: NDA review 600–1 150 $, Independent Contractor Agreement 1 400–1 800 $, Senior Employment Contract 1 400–2 200 $, Shareholders Agreement 1 600–3 000 $, Service/SaaS Agreement 1 800–4 000 $; FAQ: „most contract drafting falls between $900 and $3,200, and contract review between $600 and $1,600".

**(b) Flow.** 3 kroky: **„Submit brief (2 minutes)" → „Receive fixed-price quote within 1 business day with lawyer profile" → „Engage lawyer with payment held in statutory trust account until completion"** (platba do úschovy, uvoľní sa po dodaní).

**(c) Lehoty.** „Simple contracts: 3–5 business days", „Complex agreements: 1–2 weeks", „Urgent same-week turnarounds are usually available".

**(d) Dôvera.** „Rated 5 out of 5", „Trusted by 650,000+ Australian businesses", **„576 contract matters delivered in the last 6 months"** (živé číslo výkonu), profil konkrétneho právnika pri ponuke.

**(e) Predplatné obsah.** Essentials: neobmedzené dokumenty z 550+ šablón, e-podpis, workflow; Legal Advice: „Unlimited 30-minute phone & video consultations", live chat s právnikmi, „Unlimited 'On-call' legal contract reviews", zľavy na fixné drafty.

**(f) Šikovné.** Free plan ako lead magnet; ročná úspora vyjadrená v absolútnych dolároch; escrow ako dôveryhodnostný prvok.

### 5. LegalVision (Austrália) – členstvo „neobmedzený právnik"

Stránky /membership/ a /fixed-fee-lawyer/ vrátili 403; načítal som **oficiálne PDF LV Pro Membership** a doplnil zo snippetov.

**(a) Cena.** V PDF cena nie je („Membership pricing varies depending on the size/type of business and length of contract"); z výsledkov vyhľadávania: **199 $/mes.** základné členstvo; LV Essentials 119–149 $/týždeň ex GST (do 2 zamestnancov), LV Pro 219–1 350+ $/týždeň. Fixné projekty: „Request a Free Quote".

**(b) Flow.** Členstvo cez obchodný hovor; konzultácie sa bookujú: „You simply book your 30-minute consultation through our member portal. One of our lawyers will call you at the selected time."

**(c) Obsah/limity (PDF).** „Unlimited document drafting and amendments", „Unlimited legal advice consultations", „Unlimited document reviews", „Unlimited trade mark applications", „Guaranteed faster turnarounds", „Members-only business templates". Rozsah definovaný pozitívnym výpočtom „business-as-usual documents" (client agreement, privacy policy, employment agreement…) a **explicitným zoznamom „non-routine" vecí mimo členstva** (spory, námietky proti OZ, complex contracts, capital raising, daňové regulácie) – tie sú so **50 % zľavou z hodinovej sadzby** pre 3- a 5-ročných členov. **„Minimum 12-month commitment"**, fakturácia mesačne pozadu inkasom, „Any disbursements and government fees … will incur an additional cost. All … pricing excludes GST."

**(d) Dôvera.** „Google 4.9/5", menovaný testimonial (Sarah Heywood, Morris Fox), argument „Some traditional law firms charge more than $600/hour".

**(f) Šikovné.** Zľava za dlhší záväzok (3/5 rokov); definícia rozsahu cez zoznam „čo je rutina" a „čo nie je".

### 6. Legalstart (Francúzsko) – založenie SARL/SASU online

**(a) Cena.** Tri tiery: **Starter 0 € HT, Standard 99 € HT, Premium 199 € HT** („Choisie par 7 entrepreneurs sur 10"), všetky **„+ frais obligatoires"** – správne poplatky sú vyčíslené zvlášť: annonce légale 141–165 € (podľa departementu), zápis greffe 35,59 € (obchodná) / 50,59 € (remeselná), vyhlásenie skutočného majiteľa 20,34 €; „Total for Legalstart legal notice: €197".

**(b) Flow.** 3 fázy: 1. odpovedať na otázky o projekte, 2. doplniť údaje a nahrať doklady, 3. Legalstart publikuje oznam a podá na register. Dotazník najprv, platba po výbere balíka.

**(c) Obsah/lehoty.** V Premium: generovanie stanov, kontrola spisu, publikácia oznamu, **„Garantie anti-rejet du greffe"**, zápis cez Guichet Unique, získanie Kbis, pohovor s expertom, **„Traitement prioritaire en 24h ouvrées"**, „Assistance illimitée (téléphone, mail, chat)"; Express: „Dossier vérifié et envoyé au Greffe en 24h". Domovská stránka: „Kbis registration within 48 hours", „Best price guaranteed".

**(d) Dôvera.** „More than 900,000 entrepreneurs accompanied since 2014", Trustpilot + Google odznaky (Trustpilot 4,5/5 z >7 200 recenzií a Google 4,4 z >16 500 – z výsledkov vyhľadávania), menované testimonials.

**(e) Predplatné.** **„Assistance juridique" 30 dní zadarmo, potom 29,90 €/mes. bez viazanosti** – vložené do balíka založenia.

**(f) Šikovné.** Bezplatné nástroje ako lead magnet: generátor mentions légales, výber právnej formy, kalkulačka odvodov, odhad nákladov založenia, overenie názvu firmy. Live chat, telefón s hodinami (aj sobota). Upsell na účtovníctvo (LS Compta) a firemný účet.

### 7. Captain Contrat (Francúzsko) – založenie firmy s advokátom

**(a) Cena (stránka /tarifs).** Spoločnosti: **Solo 0 € HT** (len stanovy), **Standard 99 € HT** (0 € pri viazaní na účtovný balík), **Sérénité 269 € HT** (170 € s účtovníctvom); auto-entreprise: Basique 59 € HT, Sécurité 99 € HT. Vždy „+ frais administratifs" (na cenníku nevyčíslené; ~262 € z výsledkov vyhľadávania).

**(c) Obsah.** Standard: stanovy, podpora telefón/správy, „vérification du dossier < 24h", anti-rejection garancia, konzultácia daňového režimu; Sérénité navyše prioritné spracovanie, neobmedzená telefonická asistencia a **„avocat pendant 1 an"** (advokát k dispozícii rok). Solo explicitne „bez podpory".

**(d) Dôvera.** „Avis Vérifiés 4.7/5 (1 709 reviews)", „Google 4.4/5 (1 394 reviews)".

**(e) Predplatné/bundle.** „Création à 0 € au lieu de 99 € HT" pri predplatení účtovného balíka (min. 59 €/mes. SCI, 99 €/mes. spoločnosti) – fakturácia predplatného začne až po získaní Kbis.

### 8. Lawhive (UK) – marketplace solicitorov, „get a quote"

**(a) Cena.** **Žiadny verejný cenník** – všade „Get a quote", „Clear, transparent prices", „instant, fixed-fee quote – that means no hidden fees and no hourly charges". Jediná konkrétna suma na produktovej stránke: **„Smaller cases like drafting a letter before action can be as little as just £249"** (money-tax-debt). Porovnanie: „High street firms typically charge between £750 to £5,000 for legal advice alone", „save on average up to 50 % or more".

**(b) Flow.** 1. „Answer a few questions" online (onboarding journey), 2. **„instantly speak to a member of our team for a quote or request a callback at a time you choose"** (Legal Assessment Team), 3. po zaplatení **priradenie k solicitorovi „in up to 48 hours" (často do 24 h)**, 4. práca cez zabezpečenú platformu.

**(c) Obsah.** Letter before action: „initial consultation … drafting your letter before action … advising on the next steps". Bez lehôt na stránke.

**(d) Dôvera.** „5 out of 5 stars" Trustpilot, „Recommended by 30,000+ satisfied clients", „300+ trusted lawyers", „hand-picked"; pri každej recenzii dátum; regulácia explicitne: platforma „is not a law firm", služby poskytuje Lawhive Legal Ltd, „authorised and regulated by the Solicitors Regulation Authority (ID number: 8003766)".

**(f) Šikovné.** Recenzia s „a call 20 minutes later" ako dôkaz rýchlosti; rozsiahly knowledge hub (sample letter before action ako lead magnet).

### 9. Dostupný advokát (ČR) – najbližší vzor pre SK

**(a) Cena.** **Presné ceny „včetně DPH", dva tiery Standard/Premium pri každom produkte:**
- **Předžalobní výzva: Standard 6 900 Kč / Premium 8 600 Kč** – Standard: príprava + odoslanie v mene klienta + 30-min. konzultácia + **do 1 týždňa**; Premium: odoslanie advokátom + 60-min. konzultácia + **do 3 dní**.
- **NDA (drafting/revízia): Standard 5 400 Kč (5 dní, 30 min) / Premium 9 200 Kč (3 dni, 60 min).**
- **Smlouva o dílo (drafting/revízia): Standard 7 000 Kč (5 dní, 30 min) / Premium 12 500 Kč (3 dni, 60 min).**
- Kúpa/predaj nehnuteľnosti: Standard 9 000 Kč (60 min, 4 dni) / Premium 14 900 Kč („nejoblíbenější", s úschovou, 90 min, 48 h) / Developer 16 900 Kč.
- Vstupný produkt **„Řešení právního problému na míru" 390 Kč** – návrh postupu a **kalkulácia fixnej ceny do 24 h**.

**(b) Flow.** 5 krokov: výber služby → **platba hneď (lacnejšie) alebo odložená platba s 10 % prirážkou** + zabezpečený online dotazník s prílohami → advokát-špecialista zavolá do 1 pracovného dňa (10–40 min) → písomný výstup e-mailom + uložený v účte → archivácia.

**(c) Obsah/lehoty.** „8 z 10 požadavků vyřešíme do 2 pracovních dnů", zmluvy do 2 dní; „Nezvýšíme. Cena je pro každou službu vždy pevně stanovena."

**(d) Dôvera.** „Google 4.9/5 (111 reviews)", „Facebook 5.0/5 (21 reviews)"; **menovaní advokáti pri produkte** (JUDr. Jakub Vaněk, Mgr. Kateřina Poláková, Mgr. Vilém Vrána); **garancia vrátenia peňazí do 5 dní** („Pokud byste s naší radou nebyli oprávněně spokojeni, tak vám platbu vrátíme nebo ji vůbec nebudeme účtovat"), refundácia do 7 prac. dní mínus admin. náklady; AES-256 + 2FA.

**(e) Predplatné.** Žiadne – len jednorazové.

**(f) Šikovné.** 390 Kč „triage" produkt ako platený lead magnet; deferred payment (+10 %) ako alternatíva ku garancii; Premium = rýchlejšie + dlhšia konzultácia + advokát koná osobne.

### 10. Ďalšie doplnky
- **Frank Bold Advokáti (ČR):** e-shop existuje (fbadvokati.cz/cs/e-shop), ale na domovskej stránke iba predplatné „Online akademie stavebního práva" bez ceny; právne služby individuálne. Nevhodný vzor pre e-shop.
- **Legito:** len „30 Day Free Trial … No credit card required", ceny cez sales – SaaS, nie právna služba.
- **Prawomocni (PL):** cenník **výhradne „od"** („Wezwanie do zapłaty od 150 zł", zmluva od 300 zł, s.r.o. od 1 000 zł) s poznámkou „Powyższy cennik ma charakter orientacyjny" – príklad anti-vzoru.

---

## B. Syntéza

### 1. Porovnávacia tabuľka

| Služba | Model zobrazenia ceny | Poradie nákupného flow | Garancia / dôvera |
|---|---|---|---|
| LegalZoom (US) | 3 pomenované tiery s presnou cenou, „+ state filing fees" zvlášť; revízia tierovaná podľa strán | Dotazník (názov firmy) → výber balíka + doplnkov → platba → filing; status „Order status" | „100% Accurate Filing Guarantee"; Trustpilot 4,6 / 32 942 |
| Rocket Lawyer (US/UK) | Členstvo 3 tiery (ročne), 7-dňový trial; člen/nečlen cena vedľa seba; revízia nečlen 120 £ | Trial/checkout → interview dokumentu → stiahnutie; revízia: formulár → kontakt do 1 prac. dňa | Logá médií; SRA/regulácia v pätičke; zrušenie kedykoľvek |
| Farewill (UK) | Jedna presná cena: 100 £ / 160 £ pár; telefonický 240 £ / 380 £; updates 10 £/rok | **Dotazník zadarmo → platba až pred revíziou špecialistom** → do 5 dní | „Excellent on Trustpilot"; každý závet kontroluje špecialista |
| Which? Wills (UK) | „from £99" | Choose → Pay → Review (10 prac. dní) → Sign | Ocenenie „Firm of the Year 2023" |
| Lawpath (AU) | Predplatné presné; jednorazové = fixná ponuka do 1 prac. dňa + zverejnené cenové pásma | Brief (2 min) → ponuka s profilom právnika → platba do trust účtu → dodanie 3–5 dní | 5/5, 650 000+ firiem, „576 matters in last 6 months" |
| LegalVision (AU) | Členstvo „unlimited" bez verejnej ceny (z vyhľadávania 199 $/mes.); projekty „free quote" | Sales hovor → 12-mesačný záväzok → booking konzultácií cez portál | Google 4,9; menovaný klient; 50 % zľava z hodinovky pre členov |
| Legalstart (FR) | 0 / 99 / 199 € HT + vyčíslené povinné poplatky | Otázky → doklady → Legalstart podá; Kbis do 48 h | „Garantie anti-rejet du greffe", „Best price guaranteed", 900 000+ klientov |
| Captain Contrat (FR) | 0 / 99 / 269 € HT „+ frais administratifs"; 0 € pri bundle s účtovníctvom | Online dotazník → balík → platba; kontrola < 24 h | Anti-rejection garancia; Avis Vérifiés 4,7 (1 709), Google 4,4 (1 394) |
| Lawhive (UK) | Bez cenníka; „instant fixed-fee quote"; jediný anchor „from £249" | Otázky → hovor/callback s ponukou → platba → solicitor do 48 h | Trustpilot 5/5, 30 000+ klientov, SRA ID zverejnené |
| Dostupný advokát (CZ) | Presná cena vrátane DPH, Standard/Premium pri každom produkte | Výber → platba (alebo odložená +10 %) + dotazník → hovor do 1 dňa → e-mail výstup | Vrátenie peňazí do 5 dní; menovaní advokáti; Google 4,9 (111) |

### 2. Vzory hodné skopírovania (10)

1. **Presná cena vrátane DPH + štátne poplatky zvlášť a vyčíslené** (Legalstart: 99 € HT + annonce légale 141–165 € + greffe 35,59 € + majiteľ 20,34 €; LegalZoom „+ state filing fees"). Pri s.r.o. 299 € ukázať vedľa: súdny poplatok, notár/overenia, živnosť – ako samostatný riadok, nie skrytý v FAQ.
2. **Dva tiery „Standard / Premium" s rozdielom v lehote + dĺžke konzultácie + kto koná** (Dostupný advokát: výzva 6 900 Kč/1 týždeň/30 min vs. 8 600 Kč/3 dni/60 min/odosiela advokát). Rovnaké deliverable, iný servis – ľahko pochopiteľné, bez rozporu s advokátskou etikou.
3. **Dotazník zadarmo, platba až pred odovzdaním advokátovi** (Farewill „Start free, pay when ready for specialist review"; LegalZoom začína otázkou na názov firmy). Znižuje bariéru a zbiera leady.
4. **Vstupný triage produkt za drobnú sumu** (Dostupný advokát 390 Kč = návrh postupu + fixná kalkulácia do 24 h; Lawhive bezplatné posúdenie + ponuka do 5 min). Pre veci, ktoré sa nedajú „zabaliť", predaj kalkuláciu za napr. 29–39 €, odpočítateľnú z ceny.
5. **Explicitná garancia s presným mechanizmom** (LegalZoom „100% Accurate Filing Guarantee – opravíme na vlastné náklady"; Dostupný advokát vrátenie do 5 dní / nebudeme účtovať; Legalstart „garantie anti-rejet du greffe"). Pri s.r.o.: „ak register odmietne zápis pre našu chybu, opravíme bezplatne".
6. **Recenzie s číslom priamo pri cene + menovaní advokáti pri produkte** (LegalZoom „4.6 based on 32 942 reviews" vedľa balíkov; Dostupný advokát mená advokátov na produktovej stránke; Lawpath „profile of the lawyer with the quote").
7. **Kalendár/lehota ako súčasť ponuky** („Ready to download in under 5 days", „8 z 10 do 2 pracovních dnů", „team contacts you within 1 business day", „solicitor in up to 48 hours"). Každý produkt má jednu vetu o lehote a jednu o tom, kto a kedy zavolá.
8. **Predplatné definované zoznamom „čo je rutina" a „čo nie je"** (LegalVision PDF: unlimited reviews/drafting/consultations, ale spory, komplexné zmluvy, capital raising = mimo, so zľavou 50 % z hodinovky; LegalZoom 10 strán/dokument, 1 dokument na vec, 30-min. konzultácia). Pre mesačné predplatné SK kancelárie: max. počet dokumentov, strán, konzultácií; ostatné so zľavou.
9. **Členská vs. nečlenská cena vedľa seba** (Rocket Lawyer UK: revízia 120 £ vs. zadarmo pre členov; hodinovka 360 £ vs. 180 £; Legal Health Check 180 £ vs. 0 £). Každý e-shop produkt má stĺpec „cena s predplatným".
10. **Predplatné vložené do jednorazového balíka ako trial** (LegalZoom Pro: 30 dní advokátskeho plánu, potom 49 $/mes.; Legalstart: 30 dní assistance juridique, potom 29,90 €/mes.). Pri s.r.o. 299 € pridať „1 mesiac právnej podpory zadarmo" – ale s jasným, aktívne odsúhlaseným obnovením (SK spotrebiteľské právo).
11. **Bezplatné nástroje a vzory ako lead magnet** (Legalstart: generátor mentions légales, kalkulačky; Lawhive: „Sample Letter Before Action" v knowledge hube; Lawpath free plan). Napr. bezplatný vzor jednoduchej výzvy + kalkulačka úrokov z omeškania → upsell na advokátsku výzvu 89 €.
12. **Odložená platba s prirážkou ako alternatíva k „money-back"** (Dostupný advokát +10 %). Pre advokáta bezpečnejšie než plošné vrátenie peňazí.

### 3. Anti-vzory (5)

1. **Cenník „od"** bez definície, čo je v základe (Prawomocni „wezwanie od 150 zł … cennik orientacyjny"; Farewill probate „from £895"). Klient neverí a aj tak píše/volá – stráca sa výhoda e-shopu.
2. **Cena až po hovore** (Lawhive, LegalVision membership „Request a Free Quote"). Funguje pri veľkých spoloch s call centrom, nie pri malej kancelárii; pre produkty ako výzva 89 € je zbytočné.
3. **Skryté auto-obnovenie vložené do balíka** (LegalZoom Pro „30 day subscription included, auto-renews at $49/mo"; Premium bookkeeping „$9.99/mo auto-renewal"). Na Slovensku riziko nekalej praktiky; ak trial, tak opt-in.
4. **„Unlimited" bez fair-use** (Rocket Lawyer „unlimited documents", LegalVision „unlimited reviews") – v malej kancelárii nerealizovateľné; LegalZoom to rieši limitmi (10 strán, 1 dokument na vec) – to kopírovať.
5. **Príliš veľa tierov a doplnkov na jednej stránke** (LegalZoom: 3 balíky + registered agent + poistenie + virtuálna pošta + OZ + web + účtovníctvo). Pre kanceláriu s 6 produktmi stačia 2 tiery + 1–2 doplnky.

### 4. Odporúčanie k tierovaniu revízie zmluvy a predžalobnej výzvy

Čo robia reálne weby:

| Produkt | Kto | Ako tieruje | Reálne ceny |
|---|---|---|---|
| Revízia zmluvy | LegalZoom (plán) | **podľa počtu strán** | 10 strán v predplatnom; 11–15 strán 69 $; 16–25 strán 149 $; 26+ individuálne (−25 %) |
| Revízia zmluvy | Rocket Lawyer UK | **podľa pôvodu dokumentu** (ich šablóna = fixná; cudzí dokument = hodinovo) | 120 £ fix (člen 0 £) vs. 360 £/h (člen 180 £/h) |
| Revízia/draft zmluvy | Dostupný advokát | **podľa lehoty + dĺžky konzultácie** (Standard/Premium) | NDA 5 400 / 9 200 Kč; zmluva o dielo 7 000 / 12 500 Kč (5 dní+30 min vs. 3 dni+60 min) |
| Revízia zmluvy | Lawpath | **podľa typu zmluvy** (cenové pásma, fixná ponuka do 1 dňa) | NDA review 600–1 150 AUD; review všeobecne 600–1 600 AUD; draft 900–3 200 AUD |
| Predžalobná výzva | Dostupný advokát | **lehota + konzultácia + kto odosiela** | 6 900 Kč (1 týždeň, 30 min, v mene klienta) / 8 600 Kč (3 dni, 60 min, odosiela advokát) |
| Letter before action | Lawhive | jediný anchor „from", inak quote | „as little as just £249" |
| Wezwanie do zapłaty | Prawomocni (PL) | „od" | od 150 zł |

**Ani jeden z načítaných webov netieruje podľa hodnoty pohľadávky.** Tierovanie podľa hodnoty sa objavuje len pri conveyancing (Lawhive „freehold up to £200,000 – £828", z výsledkov vyhľadávania) – teda pri službách, kde hodnota reálne mení rozsah práce.

**Konkrétny návrh pre SK e-shop:**

- **Revízia zmluvy 79 €** = fixná cena za dokument **do 10 strán** (LegalZoom limit) s písomným zhrnutím rizík + 20–30-min. hovor, lehota 3 pracovné dni. Doplnky: **11–20 strán +49 €**, 21+ strán individuálna kalkulácia (alebo triage produkt 29 €); **Express do 24 h +40 €** (vzor Dostupný advokát Premium); zapracovanie pripomienok do zmluvy (redline) +59 € (vzor Rocket Lawyer „Customisations" ako ďalší krok). Strany sú objektívne, klient si ich vie spočítať sám a nevyvoláva to dojem „drahší klient platí viac".
- **Predžalobná výzva 89 €** = jedna cena bez ohľadu na výšku pohľadávky (v súlade s trhom), tier podľa **servisu**: Standard 89 € (koncept do 3 prac. dní, klient odošle sám alebo my e-mailom, 15-min. hovor) / Premium 149 € (do 24 h, odosiela advokát doporučene na hlavičkovom papieri, 30-min. hovor + odporúčanie ďalšieho postupu, ak dlžník nezaplatí). Prípadne doplnok „opakovaná výzva / dohoda o splátkach" +49 €.
- Pri oboch uviesť vedľa ceny **„s predplatným: v cene / −50 %"** (vzor Rocket Lawyer) a jednu vetu o garancii (napr. „ak výzvu nevieme pre právne dôvody odoslať, vrátime celú sumu").

---

## Zdroje (načítané stránky)

- https://www.legalzoom.com/business/business-formation/llc-pricing.html
- https://www.legalzoom.com/business/business-formation/llc-overview.html
- https://www.legalzoom.com/business/business-formation/inc-pricing.html
- https://www.legalzoom.com/personal/estate-planning/last-will-and-testament-overview.html
- https://www.legalzoom.com/personal/estate-planning/last-will-and-testament-pricing.html
- https://www.legalzoom.com/attorneys/
- https://www.legalzoom.com/attorneys/legal-plans/personal.html
- https://www.legalzoom.com/legal/product-service-terms/legal-plan-contract
- https://www.rocketlawyer.com/pricing
- https://www.rocketlawyer.com/legal-documents
- https://www.rocketlawyer.com/gb/en/pricing
- https://rocketlawyer.com/gb/en/document-review
- https://farewill.com/wills/pricing
- https://farewill.com/
- https://whichwills.which.co.uk/ a https://whichwills.which.co.uk/wills
- https://lawpath.com.au/pricing
- https://lawpath.com.au/contract-lawyer
- https://pay.legalvision.com.au/pdf/membership (PDF LV Pro Membership)
- https://www.legalstart.fr/creation-sarl/
- https://www.legalstart.fr/creation-sasu/
- https://www.legalstart.fr/
- https://www.captaincontrat.com/tarifs
- https://lawhive.co.uk/
- https://lawhive.co.uk/litigation
- https://lawhive.co.uk/litigation/letter-before-action
- https://lawhive.co.uk/money-tax-debt
- https://www.dostupnyadvokat.cz/ a https://dostupnyadvokat.cz/jak-to-funguje
- https://dostupnyadvokat.cz/zastoupeni/predzalobni-vyzva
- https://dostupnyadvokat.cz/spoluprace/mlcenlivost-nda
- https://dostupnyadvokat.cz/firemni/dilo
- https://dostupnyadvokat.cz/nemovitosti/koupe-prodej
- https://dostupnyadvokat.cz/sluzby
- https://frankbold.org/ a https://www.fbadvokati.cz/
- https://www.legito.com/pricing
- https://prawomocni.eu/index.php/cennik/

Len z výsledkov vyhľadávania (nenačítané): LegalVision ceny členstva (legalvision.com.au/news/…, honcho.com.au), Farewill Trustpilot 4,9/18–20 tis. (coolcuration.com, law-trust.com), Rocket Lawyer US 39,99 $/dokument (boostsuite.com, checkthat.ai), Captain Contrat administratívne poplatky ~262 € (lecoindesentrepreneurs.fr, open-espace.fr), Legalstart Trustpilot 4,5/7 200+ (legalstart.fr/fiches-pratiques/…, heropay.eu), Lawhive conveyancing £828 (lawhive.co.uk/property snippet).

Nepodarilo sa načítať (403/404): legalvision.com.au/membership/, legalvision.com.au/fixed-fee-lawyer/, captaincontrat.com/creation-entreprise/sas a /sasu, lawpath.com.au company registration, legalzoom.com/attorneys/document-review.html.
