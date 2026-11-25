# Notes — news-image-20261125

- Built 25 Nov 2026, ~10:40–11:00 WIB, from reporting dated 25 Nov 2026
  (Reuters world news summary, Newsquawk Asia-Pac opening, school-assembly
  roundups). The day was still young in Western time zones, so the stories
  are the ones first reported on 25 Nov in Asia/UTC morning hours.
- Image: one generate_image call, front-page layout, 1600x1600 source
  downscaled to 1024x1024 and saved as JPEG quality 90 (267,948 bytes) under
  the name entry.png, as the rules allow (format told apart by first bytes).
- main.ts copies entry.png, validates whole PNG/JPEG + 1 MiB limit, and
  verifies written bytes match the source by sha256. Deterministic: two
  runs write byte-identical output.
- Repo name assumed for the badges: `world-news-25-nov` under `sillasill`.
  If the repo is created under a different name, update the rank/reward
  badge URLs in README.md before submitting.
