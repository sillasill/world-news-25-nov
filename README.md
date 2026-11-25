# The World in One Day — Wednesday, 25 November 2026

[![make.fun](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/sillasill/world-news-25-nov/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/sillasill/world-news-25-nov/reward.svg)](https://make.fun/bounty/news-image-20261125)

A front page that sums up the world's news of Wednesday, 25 November 2026 in
one image: Ukraine confirms its strike on a Russian ship in the Gulf of
Finland, three tankers are hit by mines in the Strait of Hormuz, Houthi
drones strike Riyadh's tallest tower, Huawei is convicted in a US trial, and
Trump awards Rudy Giuliani the Medal of Freedom — plus a ticker of the day's
other stories.

Bounty: [Sum up 25 November's world news in one image](https://make.fun/bounty/news-image-20261125)

## Stories covered

- **Ukraine hits Russian ship** — Zelenskiy confirms Ukraine was behind
  Saturday's drone strike on a Russian cargo ship in the Gulf of Finland;
  Putin says retaliation is inevitable after Ukrainian strikes on Russian
  oil plants, and NATO plans early-warning aircraft for Poland.
- **Tankers hit in Hormuz** — Iran's Revolutionary Guard Navy says three oil
  tankers were hit by naval mines in the Strait of Hormuz; the strait stays
  closed as the US debates targeting Iran's leaders.
- **Riyadh tower struck** — a Houthi drone attack hits Riyadh's tallest
  tower, wounding 11 people, as Yemeni government forces hold Aden.
- **Huawei convicted** — a US criminal trial finds Huawei guilty of stealing
  trade secrets over its Iran business, acquitting it of racketeering.
- **Giuliani honoured** — Trump awards former New York mayor Rudy Giuliani
  the Presidential Medal of Freedom.
- **Also today** — a cybersecurity breach hits the CIA and ODNI; the US
  prepares tariff rises on China, the EU and others; Nvidia falls 7%;
  England beat Australia by eight wickets in the second T20I.

## How it works

`entry.png` is the finished front page: five realistic photo panels, one for
each lead story, with every headline, label, date and ticker line drawn on
top in crisp type. (The file is a JPEG told apart by its first bytes, so the
name stays `entry.png`, as the rules allow.) `main.ts` (Node 22, standard
library only) copies `entry.png` to the output directory, checks it is a
whole PNG or JPEG under the 1 MiB gate limit, and verifies the written bytes
match the source exactly.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## A note on the photos

The photo panels are realistic renderings made for this entry, not archival
news photographs. The facts in the headlines were checked against reporting
dated 25 November 2026.
