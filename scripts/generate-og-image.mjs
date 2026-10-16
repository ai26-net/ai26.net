import * as fontkit from 'fontkit';
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const fonts = Object.fromEntries([400, 700].map(weight => [weight, fontkit.openSync(`node_modules/@fontsource/open-runde/files/open-runde-latin-${weight}-normal.woff`)]));
function text(value, x, y, size, weight = 400, color = '#2a2a2a', centered = false) {
  const font = fonts[weight], run = font.layout(value), scale = size / font.unitsPerEm;
  if (centered) x -= run.positions.reduce((sum, p) => sum + p.xAdvance, 0) * scale / 2;
  const paths = run.glyphs.map((glyph, i) => {
    const p = run.positions[i];
    const path = `<path transform="translate(${x + p.xOffset * scale} ${y - p.yOffset * scale}) scale(${scale} ${-scale})" d="${glyph.path.toSVG()}"/>`;
    x += p.xAdvance * scale;
    return path;
  });
  return `<g aria-label="${value}" fill="${color}">${paths.join('')}</g>`;
}
async function asset(path, x, y, width, height) {
  const data = await sharp(path).resize({ width: Math.round(width * 2), height: Math.round(height * 2), fit: 'inside' }).png().toBuffer();
  return `<image x="${x}" y="${y}" width="${width}" height="${height}" href="data:image/png;base64,${data.toString('base64')}"/>`;
}
const rows = [['WORKSTREAM', 'OWNER', 'PROJECTS'], ['Customer success', 'Alex', '24'], ['Product delivery', 'Maya', '18'], ['Operations', 'Jamie', '32'], ['Team enablement', 'Sam', '12'], ['Research', 'Alex', '8'], ['Total projects', '', '94']];
const tablet = `<g transform="translate(-35 416) rotate(-10 190 140)">
<rect width="400" height="300" rx="25" fill="url(#metal)" stroke="#92999d" filter="url(#shadow)"/>
<rect x="12" y="12" width="376" height="276" rx="16" fill="#191c1e"/>
<rect x="18" y="18" width="364" height="264" rx="11" fill="white"/>
<path d="M29 18h342q11 0 11 11v24H18V29q0-11 11-11" fill="#20734b"/>
${text('Operations review.xlsx', 34, 41, 14, 700, '#ffffff')}
${text('File     Home     Insert     Formulas     Data', 30, 71, 11)}
<rect x="19" y="83" width="362" height="25" fill="#f4f5f4"/>
${text('C8       ƒx   =SUM(C3:C7)', 30, 100, 11)}
${rows.map((row, i) => `<path d="M19 ${112+i*23}H381" stroke="#e2e5e2"/>${row.map((value,j)=>text(value,[30,208,284][j],129+i*23,i===0?9:10,i===0||i===6?700:400)).join('')}`).join('')}
<path d="M197 112V273M272 112V273" stroke="#e2e5e2"/>
<circle cx="200" cy="6" r="2" fill="#343a3f"/>
</g>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
<title id="title">AI26: Turn your company’s historical data into revenue.</title>
<desc id="desc">A centered Open Runde headline with the silver and green AI26 logo, surrounded by the landing page’s coffee mug, pencil, spreadsheet tablet, and business chat phone.</desc>
<defs>
<linearGradient id="metal" x2="1" y2="1"><stop stop-color="#c8ccce"/><stop offset=".2" stop-color="#fcfcfc"/><stop offset=".65" stop-color="#838b90"/><stop offset="1" stop-color="#d9dddf"/></linearGradient>
<filter id="shadow" x="-30%" y="-30%" width="170%" height="180%"><feDropShadow dx="4" dy="12" stdDeviation="12" flood-opacity=".15"/></filter>
<clipPath id="phone-screen"><rect x="9" y="9" width="158" height="324" rx="20"/></clipPath>
</defs>
<rect width="1200" height="630" fill="white"/>
${await asset('public/stoa-metallic.png',494,55,72,72)}
${text('ai26', 574, 108, 45, 700)}
${await asset('public/desk/metal-mug.png',989,-30,245,245)}
<g transform="rotate(-24 115 200)">${await asset('public/desk/pencil.png',56,44,120,300)}</g>
${tablet}
<g transform="translate(985 365) rotate(13 88 171)">
<rect width="176" height="342" rx="28" fill="url(#metal)" stroke="#92999d" filter="url(#shadow)"/>
<rect x="4" y="4" width="168" height="334" rx="24" fill="#151719"/>
<g clip-path="url(#phone-screen)">${await asset('public/desk/business-chat.png',9,9,158,324)}</g>
</g>
${text('Turn your company’s', 600, 269, 62, 700, '#2a2a2a', true)}
${text('historical data', 600, 345, 62, 700, '#2a2a2a', true)}
${text('into revenue.', 600, 421, 62, 700, '#2a2a2a', true)}
<rect x="466" y="474" width="268" height="64" rx="32" fill="#202226"/>
${text('Sell your data', 600, 515, 25, 700, '#ffffff', true)}
${text('ai26.net', 600, 577, 20, 400, '#666666', true)}
</svg>`;
await writeFile('public/social/og-image.svg', svg);
await sharp(Buffer.from(svg)).png().toFile('public/social/og-image.png');
