'use strict';

import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'dist');

// El sitio es HTML/CSS/JS estático: la compilación solo copia
// los archivos publicables a dist/ con index.html en la raíz.
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

cpSync(join(root, 'html', 'index.html'), join(outDir, 'index.html'));

for (const directory of ['css', 'js', 'assets']) {
    cpSync(join(root, directory), join(outDir, directory), { recursive: true });
}

console.log('Sitio generado en dist/');
