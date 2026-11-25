// A news-image-daily entry (Node 22, standard library only): its image is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The file is a JPEG told apart by its first bytes, so the name stays entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(source);
const isPng = bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes.at(-2) === 0xff && bytes.at(-1) === 0xd9;
if (!isPng && !isJpeg) throw new Error('entry.png is neither a whole PNG nor a whole JPEG');
if (bytes.length > 1048576) throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB gate limit`);

function dimensions(b: Buffer): { width: number; height: number } {
  if (isPng) {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) throw new Error('JPEG markers are not intact');
    const marker = b[i + 1];
    const len = b.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
    }
    i += 2 + len;
  }
  throw new Error('no JPEG frame header found');
}
const { width, height } = dimensions(bytes);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
writeFileSync(outPath, bytes);
const written = readFileSync(outPath);
const digest = (b: Buffer) => createHash('sha256').update(b).digest('hex');
if (digest(written) !== digest(bytes)) throw new Error('written entry.png does not match the source bytes');
console.log(`wrote ${outPath} (${written.length} bytes, sha256 ${digest(written)})`);
