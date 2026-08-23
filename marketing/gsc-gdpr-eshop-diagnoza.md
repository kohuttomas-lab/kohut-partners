# Search Console: prečo „gdpr eshop" nemá ani jeden klik

23. 8. 2026 · sc-domain:tkak.sk · 25. 7. – 21. 8. 2026

## Dáta

Stránka: **`/blog/gdpr-eshop`** („GDPR pre e-shop: 7 vecí, ktoré musíte mať", 5. 6. 2026).
Je to jediná stránka webu, ktorá sa na tieto dopyty zobrazuje.

| Dopyt | Zobrazenia | Kliky | Pozícia |
|---|---|---|---|
| gdpr eshop | 41 | 0 | 17,6 |
| eshop gdpr | 38 | 0 | 17,3 |
| eshop a gdpr | 19 | 0 | 18,9 |
| gdpr a eshop | 12 | 0 | 16,6 |
| gdpr e-shop | 11 | 0 | 17,9 |
| gdpr pre eshop | 7 | 0 | 18,7 |
| gdpr pre eshopy · gdpr na eshop | 2 + 2 | 0 | 21,5 · 22,0 |
| **spolu** | **146** | **0** | **17,7** |

## Diagnóza: nie je to titulok, je to pozícia

Priemerná pozícia 17,7 = **druhá strana výsledkov**. Na druhej strane neklikne nikto bez
ohľadu na titulok — CTR 0 % je pri tejto pozícii normálna, nie anomália. Titulok je
v poriadku (Google ho zobrazuje ako „GDPR pre e-shop: 7 vecí, ktoré musíte mať - Tomáš
Kohút"; prípona „· kohút & partners" je nahradená menom autora zo štruktúrovaných dát).

Prečo sme na 17. mieste — porovnanie s prvou stranou (google.sk, „gdpr eshop", 23. 8.):

| Kto je na prvej strane | Čo má |
|---|---|
| gdpr-dataprotection.sk, podnikajte.sk, toret.sk, blog.shoptet.sk, overenyshop.sk, pravoeshopov.sk, tx.sk, efektivnejsie.sk | dlhé návody (odhadom 1 000 – 2 500 slov), nadpisy po povinnostiach, konkrétne paragrafy, FAQ, aktualizované dátumy |
| **tkak.sk** | **304 slov, 4 odseky, žiadne nadpisy, žiadny paragraf, žiadne interné odkazy** |

Nad organikou sú **4 platené inzeráty** (bernik-partners.sk, websupport.sk, mathisonlegal.sk,
pravoeshopu.cz; v spodnej časti pravoeshopov.sk „GDPR pre eshop za 80 €") a **AI prehľad**.
To potvrdzuje dve veci z researchu: za toto slovo sa platí (16,97 € za klik pri „gdpr
dokumentácia") a organická prvá strana je obsadená dlhým obsahom.

Technická prekážka na našej strane: **blog renderuje len ploché odseky** (`article.body.map
→ <p>`), nepodporuje nadpisy ani odkazy. Dlhý návod s H2 sa dnes nedá publikovať bez
zásahu do renderera.

## Čo s tým — návrh (na schválenie, mení zverejnený text)

1. **Renderer blogu:** odseky začínajúce `## ` vykresliť ako `<h2>`, prípadne jednoduchú
   podporu odkazov `[text](/cesta)`. Malý zásah v `src/app/[locale]/blog/[id]/page.tsx`,
   netýka sa textov. Odporúčam urobiť hneď — bez toho bod 2 nemá zmysel.
2. **Prepísať článok na návod 1 200 – 1 600 slov** so 7 sekciami (H2) podľa povinností,
   každá s paragrafom z knižnice:
   - obchodné podmienky a predzmluvné informácie — zák. 108/2024 Z. z. o ochrane spotrebiteľa
     (znenie účinné od 27. 9. 2026 je v knižnici — použiť to a uviesť dátum)
   - reklamačný poriadok a práva z vád — 108/2024 + OZ (zodpovednosť za vady 24 mesiacov, § 599)
   - odstúpenie od zmluvy do 14 dní, formulár — 108/2024
   - zásady ochrany osobných údajov — nariadenie 2016/679 čl. 13 (informačná povinnosť), zák. 18/2018
   - cookies a súhlas — zák. 452/2021 Z. z. o elektronických komunikáciách (§ 109)
   - sprostredkovateľské zmluvy — čl. 28 nariadenia
   - zabezpečenie a záznamy — čl. 30, čl. 32 nariadenia; identifikačné údaje predávajúceho
     na webe — zák. 22/2004 o elektronickom obchode § 4
   - FAQ (5 otázok, ktoré ľudia píšu: „potrebujem súhlas na spracovanie pri objednávke?",
     „musím mať zodpovednú osobu?", „stačí cookie lišta?", „aká je pokuta?", „stačí vzor?")
   - záver s balíkmi **Dokumenty pre e-shop 169 €** a **GDPR dokumentácia 199 €**
3. **Titulok:** „GDPR pre e-shop (eshop) 2026: 7 povinností, kontrolný zoznam a čo musí
   byť na webe" — obsahuje obe formy slova, rok a zámer dopytu. Meta description: „Ktoré
   dokumenty musí mať e-shop podľa GDPR a zákona o ochrane spotrebiteľa, kde ich zverejniť
   a čo hrozí bez nich. Kontrolný zoznam od advokáta, stav 2026."
4. **Dátum článku** posunúť na deň prepisu (aktuálnosť je v tomto dopyte viditeľný
   faktor — konkurencia má 2024 – 2025).
5. **Interné odkazy:** zo stránky `/sluzby/it` a z balíka „Dokumenty pre e-shop" na článok
   a späť; z článku `reklamacie-v-e-shope-prava-a-povinnosti` tiež.
6. Po zverejnení požiadať o preindexovanie v Search Console a po 4 týždňoch porovnať
   pozíciu. Cieľ: z 17,7 na prvú stranu (< 10); pri 146 zobrazeniach/28 dní a CTR ~3 %
   na 8. mieste je to ~5 klikov mesačne — **samo o sebe málo**. Hodnota je v tom, že rovnaký
   článok je cieľom reklamnej skupiny 3 (GDPR) v kampani C a že na prvej strane je pri
   tomto dopyte každý klik drahý.

## Čo nerobiť

- Meniť len titulok — nepohne pozíciou a zhorší zhodu s obsahom.
- Pridať „eshop" do URL — presmerovanie pri 0 klikoch nič nezachráni, stratí sa história.
