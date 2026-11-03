// Encode responsive copies of the supplied portrait without changing its pixels.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
const out = 'public/assets';
mkdirSync(out, { recursive: true });
for (const width of [420, 720, 1100]) {
  await sharp(`${out}/dennis-david.png`).resize({ width }).webp({ quality: 88 }).toFile(`${out}/portrait-${width}.webp`);
}
const portrait = await sharp(`${out}/dennis-david.png`).resize({ height: 630 }).png().toBuffer();
const type = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g"><stop stop-color="#07070a"/><stop offset=".6" stop-color="#07070a"/><stop offset="1" stop-color="#07070a" stop-opacity="0"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/><text x="65" y="285" font-family="Arial,sans-serif" font-weight="900" font-size="100" fill="#f4f1ec">DENNIS</text><text x="70" y="345" font-family="Arial,sans-serif" font-weight="700" font-size="26" letter-spacing="12" fill="#ff3d5a">THE SERIES</text><text x="70" y="420" font-family="Arial,sans-serif" font-size="21" fill="#a7a6ad">AZURE · DEVOPS · SITE RELIABILITY</text><text x="70" y="465" font-family="Arial,sans-serif" font-size="18" fill="#a7a6ad">Dennis David · Senior Cloud Engineer</text></svg>`);
await sharp({create:{width:1200,height:630,channels:4,background:'#07070a'}}).composite([{input:portrait,gravity:'east'},{input:type}]).jpeg({quality:88}).toFile(`${out}/og-image.jpg`);
console.log('Responsive portraits and share image built.');
