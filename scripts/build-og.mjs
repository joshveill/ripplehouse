import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// Render the full logo PNG (black icon + wordmark on transparent) onto a
// white 1200x630 canvas, which is the recommended Open Graph aspect ratio.
const wordmark = await sharp(resolve(root, 'public/logos/white-word.png'))
  .resize({ width: 900 })
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  },
})
  .composite([{ input: wordmark, gravity: 'center' }])
  .png()
  .toFile(resolve(root, 'public/og-image.png'));

console.log('Wrote public/og-image.png (1200x630)');
