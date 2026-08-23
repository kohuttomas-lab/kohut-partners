# Bezplatné vzory — lead magnet (produkt č. 3, vrstva „zadarmo")

Pripravené 23. 8. 2026 · nadväzuje na [research dopytu](../../marketing/eshop-research-dopyt.md) §5
a [katalóg](../../marketing/eshop-katalog.md)

## Prečo týchto päť

| Vzor | Dopyt/mes (súčet variantov) | Súbor |
|---|---|---|
| Splnomocnenie (plná moc) | ~20 000 | [splnomocnenie.md](splnomocnenie.md) |
| Kúpno-predajná zmluva na auto | ~12 000 | [kupna-zmluva-auto.md](kupna-zmluva-auto.md) |
| Výpoveď zo strany zamestnanca | ~10 000 | [vypoved-zamestnanec.md](vypoved-zamestnanec.md) |
| Dohoda o vykonaní práce | 1 900 | [dohoda-o-vykonani-prace.md](dohoda-o-vykonani-prace.md) |
| Darovacia zmluva (hnuteľná vec, peniaze) | 1 300 | [darovacia-zmluva.md](darovacia-zmluva.md) |

Konkurencia (ficek.sk, aksamec.sk, vzory-zmluv-zadarmo.sk) rozdáva vzory bez poučenia.
Naša pridaná hodnota je v každom vzore rovnaká: **poučenie s odkazom na presné
ustanovenie zákona + jasná hranica, kedy vzor nestačí a treba advokáta**. Tá hranica je
zároveň most k plateným balíkom (kataster, nehnuteľnosť, spor).

## Štruktúra každého súboru

1. **Pre koho je / pre koho nie je** — krátko, nad vzorom
2. **Vzor** — s poliami `[…]`; verzia na web sa vyplní cez formulár, verzia na stiahnutie ako PDF
3. **Poučenie** — čo zákon vyžaduje, s paragrafmi (znenia z knižnice predpisov, stav k 23. 8. 2026)
4. **Kedy vzor nestačí** — CTA na balík alebo konzultáciu

## Právne poistky

- Každý vzor má v päte: *„Vzor je všeobecný a nenahrádza právne poradenstvo v konkrétnej veci.
  Stiahnutím vzoru nevzniká vzťah advokát – klient."* (rovnaká formulácia ako v cfr.formLead)
- Nič vo vzoroch nesľubuje výsledok (§ 29b zák. o advokácii).
- Slovenské právo citujeme len z lokálnej knižnice. **Medzera:** zákon č. 8/2009 Z. z. o cestnej
  premávke v knižnici nie je — preto kúpna zmluva na auto neuvádza lehotu na prepis; doplniť
  po pridaní predpisu do knižnice.

## Mechanika lead magnetu (návrh — rozhodnúť)

- Web: stránka `/vzory/[slug]` s vyplniteľným formulárom → PDF na e-mail (e-mail = lead).
  Alternatíva bez brány: PDF priamo a pod ním formulár „Chcete to dať skontrolovať? Revízia
  za 79 €" — menej e-mailov, viac dôvery. Odporúčam **bez brány** na SK trhu, kde všetci
  rozdávajú zadarmo; e-mail pýtať až pri „poslať mi vyplnené PDF".
- GA4 udalosť `template_download` (už existuje v analytics) → kľúčová udalosť sekundárna.
- Každý vzor odkazuje na jeden platený produkt: splnomocnenie → nehnuteľnosť/kataster (C2);
  auto → revízia zmluvy 79 €; výpoveď → neplatná výpoveď (stránka situácie); DoVP → GDPR/
  dokumenty pre firmu; darovacia → darovacia zmluva na nehnuteľnosť + vklad 99 € (C2).
