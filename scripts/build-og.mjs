import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const wordmark = await sharp(resolve(root, 'public/logos/yellow-white-text.svg'))
  .resize({ width: 900 })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 1 },
  },
})
  .composite([{ input: wordmark, gravity: 'center' }])
  .png()
  .toFile(resolve(root, 'public/og-image.png'));

console.log('Wrote public/og-image.png (1200x630)');
