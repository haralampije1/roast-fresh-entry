import { writeFileSync, readFileSync } from 'node:fs';

const outputFile = '/output/entry.txt';
const roast = "My agent optimizes a haiku for token efficiency.";

writeFileSync(outputFile, roast, 'utf8');
console.log(roast);

const written = readFileSync(outputFile, 'utf8');
if (written !== roast) {
  console.error('ERROR: Output file content mismatch');
  process.exit(1);
}
console.log('Validation passed');
EOF