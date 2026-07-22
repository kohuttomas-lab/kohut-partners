# Fronta tém pre automatické blog články (tkak.sk)

Pipeline `scripts/generate-article.mjs` vezme **prvú nezaškrtnutú** tému, vygeneruje z nej
SK+EN článok cez Claude API a otvorí PR na schválenie. Po vygenerovaní sa téma zaškrtne (`[x]`).

Pridávaj nové témy na koniec ako `- [ ] <téma> | kategória: <SK kategória>`.
Kategória musí sedieť s existujúcimi (Insolvencie, Obchodné právo, IT právo, Nehnuteľnosti, Súdne spory, Trestné právo).

- [x] Konkurz vs. reštrukturalizácia: ktorý nástroj kedy zvoliť | kategória: Insolvencie
- [x] Oddlženie fyzickej osoby (osobný bankrot): podmienky a postup v roku 2026 | kategória: Insolvencie
- [x] Ako účinne vymáhať pohľadávku: od výzvy po exekúciu | kategória: Obchodné právo
- [x] Zodpovednosť konateľa s.r.o.: kedy ručíte vlastným majetkom | kategória: Obchodné právo
- [x] Založenie s.r.o. krok po kroku: čo často podcenia podnikatelia | kategória: Obchodné právo
- [ ] Predžalobná výzva: prečo ju nepodceniť a čo má obsahovať | kategória: Súdne spory
- [ ] Nájomná zmluva na byt: 7 klauzúl, ktoré chránia prenajímateľa aj nájomcu | kategória: Nehnuteľnosti
- [ ] Vecné bremená a ťarchy: ako ich odhaliť pred kúpou nehnuteľnosti | kategória: Nehnuteľnosti
- [ ] Reklamácie v e-shope: práva spotrebiteľa a povinnosti predajcu | kategória: IT právo
- [ ] Spracúvanie osobných údajov zamestnancov podľa GDPR | kategória: IT právo
- [ ] Ako sa brániť neoprávnenej exekúcii | kategória: Súdne spory
- [ ] Trestné oznámenie vs. podanie na políciu: čo, kedy a ako | kategória: Trestné právo
- [ ] Reštrukturalizácia firmy v roku 2026: podmienky a priebeh | kategória: Insolvencie
- [ ] Prihláška pohľadávky do konkurzu: lehoty a najčastejšie chyby | kategória: Insolvencie
- [ ] Osobný bankrot: aký majetok dlžníkovi zostane | kategória: Insolvencie
- [ ] Zmluva o dielo: ustanovenia, ktoré chránia objednávateľa | kategória: Obchodné právo
- [ ] Splatnosť faktúr a úroky z omeškania: čo môžete žiadať | kategória: Obchodné právo
- [ ] Prevod obchodného podielu v s.r.o.: postup a daňové súvislosti | kategória: Obchodné právo
- [ ] Konkurenčná doložka: čo je v zmluve reálne vymáhateľné | kategória: Obchodné právo
- [ ] Kúpna zmluva na nehnuteľnosť: na čo si dať pozor pred podpisom | kategória: Nehnuteľnosti
- [ ] Vklad do katastra: priebeh, lehoty a ako predísť prerušeniu | kategória: Nehnuteľnosti
- [ ] Nehnuteľnosť v bezpodielovom spoluvlastníctve manželov | kategória: Nehnuteľnosti
- [ ] Platobný rozkaz a odpor: ako funguje skrátené súdne konanie | kategória: Súdne spory
- [ ] Náhrada škody: kedy a v akom rozsahu ju možno vymáhať | kategória: Súdne spory
- [ ] Cookies a súhlas na webe: čo vyžaduje zákon a GDPR | kategória: IT právo
- [ ] Obchodné podmienky a reklamačný poriadok e-shopu | kategória: IT právo
- [ ] Podmienečné zastavenie trestného stíhania: kedy prichádza do úvahy | kategória: Trestné právo
