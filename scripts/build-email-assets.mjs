// Generate stable email-signature assets at public/email/.
//
// These output files live in public/ so they're served at predictable URLs
// (https://ripplehouse.ca/email/...) that never change between builds —
// safe to reference from HTML email signatures.

import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdir, copyFile } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const out = resolve(root, 'public/email');
const teamOut = resolve(out, 'team');
const iconsOut = resolve(out, 'icons');

await mkdir(teamOut, { recursive: true });
await mkdir(iconsOut, { recursive: true });

// Team headshots — square crop, 240x240 (2x retina for ~120px display).
const team = [
  { src: 'Victor.jpg',   out: 'victor.jpg' },
  { src: 'thibeaud.jpg', out: 'thibaud.jpg' },
  { src: 'steph.jpg',    out: 'stephan.jpg' },
  { src: 'Grazi.jpg',    out: 'grazianni.jpg' },
];

// Square JPGs (kept for any signature variant that wants a rectangular frame).
for (const member of team) {
  await sharp(resolve(root, 'src/assets/team', member.src))
    .resize(240, 240, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 88 })
    .toFile(resolve(teamOut, member.out));
}

// Circular yellow-background PNGs that match the brand signature design.
// The source photos already sit on the ripple-yellow card, so cover-crop to
// square then clip to a circle — corners go transparent so the circle is the
// only visible shape in the email.
const circleMask = Buffer.from(
  '<svg width="240" height="240"><circle cx="120" cy="120" r="120" fill="white"/></svg>'
);

for (const member of team) {
  const circleName = member.out.replace(/\.jpe?g$/, '.png');
  await sharp(resolve(root, 'src/assets/team', member.src))
    .resize(240, 240, { fit: 'cover', position: 'top' })
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toFile(resolve(teamOut, `circle-${circleName}`));
}

// Logo — full version (icon + wordmark + tagline), used directly.
await copyFile(
  resolve(root, 'public/logos/full-logo.png'),
  resolve(out, 'logo.png'),
);

// Logo — icon only at 240x240 (2x retina for ~120px display).
await sharp(resolve(root, 'public/logos/main-logo-yellow.svg'))
  .resize(240, 240, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(resolve(out, 'logo-icon.png'));

// Social icons — 64x64 PNGs (2x retina for ~32px display).
// LinkedIn comes in two variants: black for monochrome rows, and brand-teal
// rounded square to match the RippleHouse signature design.
const linkedInPath = `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`;
const icons = {
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#111111">${linkedInPath}</svg>`,
  'linkedin-teal': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#0AEBDC"/><g transform="translate(4 4)" fill="#ffffff"><svg viewBox="0 0 24 24" width="24" height="24" fill="#ffffff">${linkedInPath}</svg></g></svg>`,
  website: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
};

for (const [name, svg] of Object.entries(icons)) {
  await sharp(Buffer.from(svg))
    .resize(64, 64)
    .png()
    .toFile(resolve(iconsOut, `${name}.png`));
}

console.log('Email assets written to public/email/');
