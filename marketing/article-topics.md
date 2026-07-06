# Fronta tém pre automatické blog články (tkak.sk)

Pipeline `scripts/generate-article.mjs` vezme **prvú nezaškrtnutú** tému, vygeneruje z nej
SK+EN článok cez Claude API a otvorí PR na schválenie. Po vygenerovaní sa téma zaškrtne (`[x]`).

Pridávaj nové témy na koniec ako `- [ ] <téma> | kategória: <SK kategória>`.
Kategória musí sedieť s existujúcimi (Insolvencie, Obchodné právo, IT právo, Nehnuteľnosti, Súdne spory, Trestné právo).

- [x] Konkurz vs. reštrukturalizácia: ktorý nástroj kedy zvoliť | kategória: Insolvencie
- [x] Oddlženie fyzickej osoby (osobný bankrot): podmienky a postup v roku 2026 | kategória: Insolvencie
- [x] Ako účinne vymáhať pohľadávku: od výzvy po exekúciu | kategória: Obchodné právo
- [ ] Zodpovednosť konateľa s.r.o.: kedy ručíte vlastným majetkom | kategória: Obchodné právo
- [ ] Založenie s.r.o. krok po kroku: čo často podcenia podnikatelia | kategória: Obchodné právo
- [ ] Predžalobná výzva: prečo ju nepodceniť a čo má obsahovať | kategória: Súdne spory
- [ ] Nájomná zmluva na byt: 7 klauzúl, ktoré chránia prenajímateľa aj nájomcu | kategória: Nehnuteľnosti
- [ ] Vecné bremená a ťarchy: ako ich odhaliť pred kúpou nehnuteľnosti | kategória: Nehnuteľnosti
- [ ] Reklamácie v e-shope: práva spotrebiteľa a povinnosti predajcu | kategória: IT právo
- [ ] Spracúvanie osobných údajov zamestnancov podľa GDPR | kategória: IT právo
- [ ] Ako sa brániť neoprávnenej exekúcii | kategória: Súdne spory
- [ ] Trestné oznámenie vs. podanie na políciu: čo, kedy a ako | kategória: Trestné právo
