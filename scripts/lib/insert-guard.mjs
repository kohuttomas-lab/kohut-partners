// Poistka pre auto-generátor blog článkov (scripts/generate-article.mjs).
// Generátor beží bez ľudského schválenia a publikuje priamo na main, preto musí
// platiť: smie IBA PRIDÁVAŤ. Už zverejnené odborné texty advokátskej kancelárie
// sa nesmú ticho prepísať ani zmazať (§ 29b zák. 586/2003 o advokácii).
//
// Toto je 1. vrstva poistky — matematický dôkaz čistého vloženia priamo v skripte.
// 2. vrstva je git kontrola v .github/workflows/auto-article.yml pred commitom.
// ESM, bez závislostí.

// Index prvého rozdielu dvoch reťazcov (-1 ak sú zhodné) — pre zrozumiteľnú diagnostiku.
function prvyRozdiel(a, b) {
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) if (a[i] !== b[i]) return i;
  return a.length === b.length ? -1 : n;
}

// Krátky výrez okolo pozície, aby bolo v logu vidieť, čo sa rozišlo.
function okolie(s, pos, rozsah = 60) {
  const od = Math.max(0, pos - rozsah);
  return JSON.stringify(s.slice(od, pos + rozsah));
}

/**
 * Dokáže, že `updated` vznikol z `original` vložením reťazca `inserted`
 * na pozíciu `at` a NIČÍM INÝM. Pri porušení hodí Error (nič sa nesmie zapísať).
 */
export function assertPureInsertion({ original, updated, inserted, at, label = "súbor" }) {
  if (typeof original !== "string" || typeof updated !== "string" || typeof inserted !== "string") {
    throw new Error(`POISTKA (${label}): original, updated aj inserted musia byť reťazce.`);
  }
  if (!Number.isInteger(at) || at < 0 || at > original.length) {
    throw new Error(`POISTKA (${label}): neplatná pozícia vloženia at=${at} (dĺžka originálu je ${original.length}).`);
  }

  const chyby = [];
  const ocakavanaDlzka = original.length + inserted.length;

  // 1) Dĺžka: nový obsah = pôvodný + vložený, na znak presne.
  if (updated.length !== ocakavanaDlzka) {
    chyby.push(`dĺžka nesedí — očakávaných ${ocakavanaDlzka} znakov (${original.length} pôvodných + ${inserted.length} vložených), skutočne ${updated.length} (rozdiel ${updated.length - ocakavanaDlzka}).`);
  }

  // 2) Všetko PRED miestom vloženia musí zostať bit po bite rovnaké.
  const predPovodne = original.slice(0, at);
  const predNove = updated.slice(0, at);
  if (predNove !== predPovodne) {
    const p = prvyRozdiel(predPovodne, predNove);
    chyby.push(`text PRED miestom vloženia sa zmenil — prvý rozdiel na pozícii ${p}.\n    pôvodne: ${okolie(predPovodne, p)}\n    novo:    ${okolie(predNove, p)}`);
  }

  // 3) Všetko ZA miestom vloženia musí zostať bit po bite rovnaké (len posunuté).
  const zaPovodne = original.slice(at);
  const zaNove = updated.slice(at + inserted.length);
  if (zaNove !== zaPovodne) {
    const p = prvyRozdiel(zaPovodne, zaNove);
    chyby.push(`text ZA miestom vloženia sa zmenil — prvý rozdiel na pozícii ${at + p} nového súboru.\n    pôvodne: ${okolie(zaPovodne, p)}\n    novo:    ${okolie(zaNove, p)}`);
  }

  // 4) Na mieste vloženia musí byť presne to, čo sme chceli vložiť
  //    (uzatvára dôkaz — body 1–3 samy o sebe stredný úsek nekontrolujú).
  const vlozenePovodne = updated.slice(at, at + inserted.length);
  if (vlozenePovodne !== inserted) {
    const p = prvyRozdiel(inserted, vlozenePovodne);
    chyby.push(`vložený úsek nie je ten, ktorý sme skladali — prvý rozdiel na pozícii ${p} vloženého textu.\n    malo byť: ${okolie(inserted, p)}\n    je:       ${okolie(vlozenePovodne, p)}`);
  }

  if (chyby.length) {
    console.error(`\nPOISTKA ZLYHALA (${label}): zmena NIE JE čisté vloženie — generátor smie iba pridávať.`);
    for (const ch of chyby) console.error(`  • ${ch}`);
    console.error("Publikovanie sa zastavuje — commit ani push nenastane.\n");
    throw new Error(`POISTKA (${label}): zmena nie je čisté vloženie na pozíciu ${at}.`);
  }
  return true;
}

/**
 * Vráti hodnoty prvej zachytávacej skupiny všetkých zhôd `regex` v `src`.
 * Používa sa na vytiahnutie identifikátorov už existujúcich článkov.
 */
export function extractIds(src, regex) {
  if (typeof src !== "string") throw new Error("POISTKA: extractIds očakáva reťazec.");
  if (!(regex instanceof RegExp)) throw new Error("POISTKA: extractIds očakáva RegExp.");
  const re = regex.flags.includes("g") ? new RegExp(regex.source, regex.flags) : new RegExp(regex.source, `${regex.flags}g`);
  return [...src.matchAll(re)].map((m) => m[1]);
}

// Spoločná diagnostika: čo zmizlo a čo pribudlo.
function rozdielMnozin(beforeIds, afterIds) {
  const pred = new Set(beforeIds);
  const po = new Set(afterIds);
  return {
    zmizli: [...pred].filter((id) => !po.has(id)),
    pribudli: [...po].filter((id) => !pred.has(id)),
  };
}

function vypisAHod(label, sprava, beforeIds, afterIds) {
  const { zmizli, pribudli } = rozdielMnozin(beforeIds, afterIds);
  console.error(`\nPOISTKA ZLYHALA (${label}): ${sprava}`);
  console.error(`  • pred zmenou (${beforeIds.length}): ${beforeIds.join(", ") || "—"}`);
  console.error(`  • po zmene (${afterIds.length}): ${afterIds.join(", ") || "—"}`);
  console.error(`  • ZMIZLI: ${zmizli.join(", ") || "žiadne"}`);
  console.error(`  • PRIBUDLI: ${pribudli.join(", ") || "žiadne"}`);
  console.error("Publikovanie sa zastavuje — commit ani push nenastane.\n");
  throw new Error(`POISTKA (${label}): ${sprava}`);
}

/**
 * Overí, že `afterIds` sa rovná presne [newId, ...beforeIds]: nič sa nezmazalo,
 * nič nepremenovalo, nič nepreusporiadalo, pribudol presne jeden a je na začiatku.
 * Pre repozitáre, kde sa vkladá na ZAČIATOK poľa (kohút & partners).
 */
export function assertOnlyPrepended(beforeIds, afterIds, newId, label = "zoznam") {
  const ocakavane = [newId, ...beforeIds];
  const sedi = afterIds.length === ocakavane.length && afterIds.every((id, i) => id === ocakavane[i]);
  if (!sedi) {
    vypisAHod(label, `zoznam identifikátorov nie je pôvodný zoznam s jedným novým ("${newId}") na začiatku — očakávaných ${ocakavane.length} položiek, nájdených ${afterIds.length}.`, beforeIds, afterIds);
  }
  return true;
}

/**
 * Mierkejšia varianta: porovnáva MNOŽINY unikátnych identifikátorov. Overí, že
 * pribudol práve jeden nový (`newId`) a žiadny pôvodný nezmizol. Poradie nekontroluje.
 * Pre repozitáre, kde sa vkladá za marker a jeden článok nesie slug viackrát
 * (napr. tatravillas — 5 jazykových mutácií toho istého slugu).
 */
export function assertOnlyAdded(beforeIds, afterIds, newId, label = "zoznam") {
  const { zmizli, pribudli } = rozdielMnozin(beforeIds, afterIds);
  if (zmizli.length) {
    vypisAHod(label, `zo zoznamu zmizli identifikátory (${zmizli.length}) — generátor smie iba pridávať.`, beforeIds, afterIds);
  }
  if (pribudli.length !== 1 || pribudli[0] !== newId) {
    vypisAHod(label, `pribudnúť mal presne jeden nový identifikátor "${newId}", pribudlo ${pribudli.length}.`, beforeIds, afterIds);
  }
  return true;
}
